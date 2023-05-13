import express  from "express";
import * as photoController from "../controllers/photoController.js"//2 tane olduğundan * as

const router = express.Router();
//zaten /photos ile buraya gönderiyor buradan da post veya get olarak ayrılıyo zaten photostan sonra bişe olmadığından
router.route("/").post(photoController.createPhoto).get(photoController.getAllPhotos)



export default router;