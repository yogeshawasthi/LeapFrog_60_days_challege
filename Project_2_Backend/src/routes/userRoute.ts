import express,{Router} from 'express';
import AuthCOntroller from '../controllers/userController';

const router:Router = express.Router()


router.route("/register")
.post(AuthCOntroller.registerUser)









export default router