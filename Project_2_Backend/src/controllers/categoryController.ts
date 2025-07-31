import Category from "../database/models/Category";
import { Request, Response } from "express";
import Product from "../database/models/Product";
import { where } from "sequelize";

class CategoryController {
  categoryData = [
    {
      categoryName: "Electronics",
    },
    {
      categoryName: "Groceries",
    },
    {
      categoryName: "Food/Beverages",
    },
  ];

  async seedCategory(): Promise<void> {
    const datas = await Category.findAll();
    if (datas.length == 0) {
      const data = await Category.bulkCreate(this.categoryData);
      console.log("Categories seeded Sucessfully");
    } else {
      console.log("Categories already seeded");
    }
  }

  async addCategory(req: Request, res: Response): Promise<void> {
    const { categoryName } = req.body;
    if (!categoryName) {
      res.status(400).json({
        message: "Category Name is required",
      });
      return;
    }
    const data = await Category.create({
      categoryName,
    });
    res.status(201).json({
      message: "Category Created Successfully",
      data,
    });
  }

  async getCategories(req: Request, res: Response): Promise<void> {
    const categories = await Category.findAll();
    res.status(200).json({
      message: "Categories retrieved successfully",
      data: categories,
    });
  }

  async deleteCategory(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data = await Category.findAll({
      where: { id },
    });
    if (data.length === 0) {
      res.status(404).json({
        message: "Category not found",
      });
      return;
    } else {
      await Category.destroy({
        where : {
          id
        }
      });
      res.status(200).json({
        message: "Category deleted successfully",
      });
    }
  }

  async updateCategory(req:Request,res:Response):Promise<void>{
    const {id} = req.params
    const {categoryName} = req.body
    await Category.update({categoryName},{
      where : {
        id
      }
    }); 
    res.status(200).json({
      mesage : "Category Updated Sucessfully"
    })
  }
}

export default new CategoryController();
