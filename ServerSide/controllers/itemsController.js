import itemsModel from "../models/itemsSchema.js";
import _ from 'lodash'
class CRUD{
    static listAllItems = async(req,res)=>{
        try {
            let result;
            const {type_name} = req.body;
            if(type_name){
                result = await itemsModel.findOne({type_name:type_name});
            }else{
                result = await itemsModel.find();
            }
            if(result.length!==0){
                res.status(200).send({"Status":"Success", "Message":result});
            }else{
                res.status(400).send({"Status":"Error", "Message":"DB empty!"});            
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({"Status":"Error", "Message":"An error occurred!"});
        }
    }

    static addAnItem = async(req, res)=>{
        let flag=false;
        try {
            const {itemObj} = req.body;
            if(JSON.stringify(itemObj)!=="{}"){
                const result = await itemsModel.find();
                for(let i=0; i<result.length; i++){
                    const item = result[i];
                    if(item.type_name === itemObj.type_name){
                        flag=true;
                        item.items_of_this_type.push(_.omit(itemObj, ['type_name']));
                        await itemsModel.findOneAndUpdate({type_name:item.type_name}, {$set:{
                            items_of_this_type:item.items_of_this_type
                        }});
                        break;
                    }
                }
                if(!flag){
                    const newItem = new itemsModel({
                        type_name:itemObj.type_name,
                        items_of_this_type:_.omit(itemObj, ['type_name'])
                    });
                    await newItem.save();
                }
                res.status(202).send({"Status":"Success", "Message":"Item has been added!"});            
            }else{
                res.status(400).send({"Status":"Error", "Message":"All fields are required!"});            
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({"Status":"Error", "Message":"An error occurred!"});
        }
    }
    static updateItem = async(req, res)=>{
        let flag=false;
        try {
            const {itemObj} = req.body;
            if(JSON.stringify(itemObj)!=="{}"){
                const result = await itemsModel.findOne({type_name:itemObj.type_name});
                if(result.length!==0){
                    for(let i=0; i<result.items_of_this_type.length; i++){
                        const item = result.items_of_this_type[i];
                        if(item.itemID === itemObj.itemID){
                            result.items_of_this_type[i] = _.omit(itemObj, ['type_name']);
                            flag=true;
                            break;
                        }
                    }
                    if(flag){
                        await itemsModel.findOneAndUpdate({type_name:itemObj.type_name}, {$set:{
                            items_of_this_type:result.items_of_this_type
                        }});
                    }
                    res.status(200).send({"Status":"Success", "Message":"Item has been Updated!"});    
                }else{
                    res.status(400).send({"Status":"Error", "Message":"No such type Name exist!"});
                }
            }else{
                res.status(400).send({"Status":"Error", "Message":"All fields are required!"});     
            }

        } catch (error) {
            console.log(error);
            res.status(500).send({"Status":"Error", "Message":"An error occurred!"});
        }
    }
    static deleteItem = async(req, res)=>{
        let flag=false;
        try {
            const {type_name, id} = req.body;
            if(type_name && id){
                const result = await itemsModel.findOne({type_name:type_name});
                if(result.length!==0){
                    for(let i=0; i<result.items_of_this_type.length; i++){
                        const item = result.items_of_this_type[i];
                        if(item.itemID===id){
                            result.items_of_this_type.splice(i,1);
                            flag=true;
                            break;
                        }
                    }
                    if(flag){
                        await itemsModel.findOneAndUpdate({type_name:type_name}, {$set:{
                            items_of_this_type:result.items_of_this_type
                        }});
                        res.status(200).send({"Status":"Success", "Message":"Item has been deleted!"}); 
                    }else{
                        res.status(400).send({"Status":"Error", "Message":"No such thing exist!"});                         
                    }
                }else{
                    res.status(400).send({"Status":"Error", "Message":"No such types exist!!"}); 
                }
            }else{
                res.status(400).send({"Status":"Error", "Message":"All fields are required!"});
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({"Status":"Error", "Message":"An error occurred!"});
        }
    }
};
export default CRUD;