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


router.put("/update/:id",async (req,res)=>{
    let id = req.params.id;

    let employee = await EmployeeModel.findByIdAndUpdate(id,req.body);
    await employee.save()

    return res.json({
        message:"Employee Updated Successfully"
    })

   
})

router.delete("/delete/:id",async (req,res)=>{
    let id = req.params.id;

    await EmployeeModel.findByIdAndDelete(id)
    
    return res.json({
        message:"Employee Deleted Successfully"
    })

   
})



export default router;