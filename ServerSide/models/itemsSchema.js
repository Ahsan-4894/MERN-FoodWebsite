import mongoose from 'mongoose'

const itemsSchema = new mongoose.Schema({
    type_name:{type:String, required:true},
    items_of_this_type:{type:Array, required:true}
});
const itemsModel = mongoose.model("items_info", itemsSchema);
export default itemsModel;