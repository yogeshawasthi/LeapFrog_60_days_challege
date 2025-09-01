import { Request, Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Cart from "../database/models/Cart";
import Product from "../database/models/Product";
import Category from "../database/models/Category";

class CartController {
  async addToCart(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const { quantity, productId } = req.body;
    if (!quantity || !productId) {
      res.status(400).json({
        message: "Please provide Quantity,productId",
      });
    }
    //check if the product already exists in the cart table or not
    let cardItem = await Cart.findOne({
      where: {
        productId,
        userId,
      },
    });
    if (cardItem) {
      cardItem.quantity += quantity;
      await cardItem.save();
    } else {
      // insert into Cart table
      await Cart.create({
        quantity,
        userId,
        productId,
      });
    }
    res.status(200).json({
      message: "Product added to cart",
      data: cardItem,
    });
  }

  async getMyCarts(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const cartItems = await Cart.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: Product,
          attributes : ['productName','productDescription','productImageUrl'],
          include: [
            {
              model: Category,
              attributes: ['id', 'categoryName'],
            }
           ]
        }
      ],

      attributes : ['productId','quantity']

    });

    if (cartItems.length === 0) {
      res.status(404).json({
        message: "No items found in cart",
      });
    } else {
      res.status(200).json({
        message: "Cart items fetched successfully",
        data: cartItems,
      });
    }
  }

  async deleteMyCartItem(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const { productId } = req.params;

    //check whether above product ID product exist or not
    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404).json({
        message: "Product not found",
      });
      return;
    }

    // remove that product id i think i need to do it evening , skip at night
    await Cart.destroy({
      where: {
        userId,
        productId,
      },
    });

    res.status(200).json({
      message: "Product of cart deleted Successfully",
    });
  }

  async updateCartItem(req: AuthRequest, res: Response): Promise<void> {
    const { productId } = req.params;
    const userId = req.user?.id;
    const { quantity } = req.body;
    if (!quantity) {
      res.status(400).json({
        message: "Please Provide Quantity",
      });
      return;
    }
    const cartData = await Cart.findOne({
      where: {
        userId,
        productId,
      }
    });


    if (cartData) {
      cartData.quantity = quantity;
      await cartData?.save();

      res.status(200).json({
        message: "Product has been updated sucessflyy",
        data: cartData,
      });
    } else {
      res.status(404).json({
        message: "No product found with the given productId",
      });
    }
  }
}

export default new CartController();
