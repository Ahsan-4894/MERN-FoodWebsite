
import express from "express";
import CRUD from "../controllers/itemsController.js";
import upload from '../config/multerConfig.js'

const router = express.Router();


router.get("/list-all-items", CRUD.listAllItems); 
//all these things can be done by only admin!------>
router.post("/add-item", upload.single("imagePath") ,CRUD.addAnItem);
router.put("/update-item", CRUD.updateItem);
router.delete("/delete-item", CRUD.deleteItem);//<----------

export default router;