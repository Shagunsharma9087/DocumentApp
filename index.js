const express= require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee');
const DocumentModel = require("./models/Document");
const app=express();
app.use(express.json())
app.use(cors())
app.get('/:id',async(req,res)=>
{
    const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "task not found" });
  }
  try {
    console.log("hello");
    const task = await DocumentModel.find({UserId:id}).exec();
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json({ error: error.message });
  }
})
app.post('/add',async(req,res)=>{
    const {UserId,title,description} =req.body;
    console.log(req.body);
    try{
        const document= await DocumentModel.create({UserId,title,description})
        res.status(200).json(document);
    }
    catch(error)
    {
        res.status(400).json({ error: error.message });

    }
}
)
app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    try{
        const user= await EmployeeModel.findOne({email:email})
        if(user)
        {
            if(user.password===password)
            {
                res.json(user)
            }
            else
            {
                res.json("Incorrect Password")
            }
        }
        else{
            res.json("user not exist")
        }
    }
    catch(error)
    {
        res.status(400).json({ error: error.message });
    }
})
app.post('/register', async (req,res)=>{
    const { name,email ,password } = req.body;
    try{
       const task= await EmployeeModel.create({name,email,password})
        res.status(200).json(task);
    }
    catch(error)
    {
        res.status(400).json({ error: error.message });
    }

})
mongoose.connect('mongodb+srv://shagunsharma:Qym3RPaIrScIOEC7@cluster0.sw2kqrm.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0')
app.listen(3000,()=>{
    console.log("server is connected to 3000")
})