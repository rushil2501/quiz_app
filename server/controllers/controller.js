import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions,{answers} from '../database/data.js'


export async function  getQuestions(req,res){
    try {
        const q = await Questions.find()
        res.json(q)
    } catch (error) {
        res.json({error})
    }
};

export async function insertQuestions(req,res){
    try {
        Questions.insertMany({questions,answers}, function(err,data){
            res.json({msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({error})
    }
}
export async function dropQuestions(req,res){
    try {
        await Questions.deleteMany();
        res.json({msg: "Questions Deleted Successfully...!"});
    } catch (error) {
        res.json({error})
    }
}
export async function getResult(req,res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({error});
    }
    
}
export async function storeResult(req,res){
    try {
        const {username,result,attempts,points,achieved} = req.body;
        if(!username && !result)throw Error('Data Not Provided');
        Results.create({username,result,attempts,points,achieved},function(err,data){
            res.json({msg:"Result saved successfully...!"})
        })
    } catch (error) {
        res.json({error});
    }
}
export async function dropResult(req,res){
    try {
        await Results.deleteMany()
        res.json({msg:"Result delete successfully...!"})
    } catch (error) {
        res.json({error});
    }
}

