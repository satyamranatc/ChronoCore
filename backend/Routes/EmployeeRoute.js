import EmployeeModel from "../Models/EmployeeModel.js";
import Router from "express"

let router = Router()



router.get("/list",async (req,res)=>{
    let allEmployees = await EmployeeModel.find();
    return res.json(allEmployees)
})



router.post("/add",async (req,res)=>{
    let newEmployee = new EmployeeModel(req.body);
    await newEmployee.save();
    return res.json({
        message:"Employee Added Successfully"
    })
})



export default router;