import CandidateModel from "../models/CandidateModal.js"

class candidateController{
    static getAllDoc = async(req,res) =>{
        try {
            const result = await CandidateModel.find()
            res.render("index", {data: result})
        } catch (error) {
            console.log(error);
        }
        
    }
    static createDoc = async(req,res) =>{
        try {
            const {name, email, phoneNumber, age} = req.body
            const emp = new CandidateModel({
                name,
                email,
                phoneNumber,
                age,
            })
            await emp.save()
            res.redirect("/")
        } catch (error) {
            console.log(error);
        }
    }
    static editDoc = async(req,res) =>{
        try {
            const result = await CandidateModel.findById(req.params.id)
            res.render("edit", {data:result})
        } catch (error) {
            console.log(error);
        }
    }
    static updateDocById = async(req,res) =>{
        try {
            const result = await CandidateModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect("/")
        } catch (error) {
            console.log(error);
        }
    }
    static deleteDocById = async(req,res) =>{
        try {
            const result = await CandidateModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        } catch (error) {
            
        }
    }

    static addInfo = async(req,res) =>{
        res.render("addInfo")
    }
}

export default candidateController