import express  from "express";
import * as pageController from "../controllers/pageController.js"//2 tane olduğundan * as
import * as authMiddleWare from "../middlewares/authMiddleWare.js" 
const router = express.Router();

router.route("/").get(authMiddleWare.authenticationToken, pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage)
router.route("/register").get(pageController.getRegisterPage)
router.route("/login").get(pageController.getLoginPage)

export default router;