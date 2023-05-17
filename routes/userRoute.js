import express  from "express";
import * as userController from "../controllers/userController.js"//2 tane olduğundan * as

const router = express.Router();
//zaten /photos ile buraya gönderiyor buradan da post veya get olarak ayrılıyo zaten photostan sonra bişe olmadığından
router.route("/register").post(userController.createUser)
router.route("/login").post(userController.loginUser)



export default router;