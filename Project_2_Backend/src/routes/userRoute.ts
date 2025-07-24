import express,{Router} from 'express';
import AuthCOntroller from '../controllers/userController';
import errorHandler from '../services/catchAsyncError';

const router:Router = express.Router()


router.route("/register")
.post(errorHandler(AuthCOntroller.registerUser))

router.route("/login").post(errorHandler(AuthCOntroller.loginUser))

export default router