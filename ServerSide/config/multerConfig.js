import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'D:/MERN-FoodWebsite/frontend/src/');
    },
    filename: (req, file, cb) => {
        file.originalname = req.body.itemName;
        cb(null, file.originalname); // Generate a unique filename with the original extension
    }
});
const upload = multer({
    storage: storage
});



export default upload;