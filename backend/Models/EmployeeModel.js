import mongoose from "mongoose";

let EmployeeSchema = new mongoose.Schema({

    EmployeePoster:{
        type: String,
        required: true
    },
    EmployeeName:{
        type: String,
        required: true
    },
    EmployeeAge:{
        type: Number,
        required: true
    },
    EmployeeDep:{
        type: String,
        required: true
    },
    EmployeeJobRole:{
        type: String,
        required: true
    },
    EmployeeSalary:{
        type: Number,
        required: true
    }
    
});

export default mongoose.model("EmployeeModel",EmployeeSchema)