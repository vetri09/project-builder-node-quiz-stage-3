// requrie expresss cors and mongoose
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// schemas
const {questionSchema,optionSchema,answerSchema} = require('../Schema/schema')
// use express and cors
const app = express()
app.use(express.json())
app.use(cors())
// mongo atlas url
const url = 'mongodb+srv://vetrivelan:vetrivelan@cluster0.iczh2.mongodb.net/quiz?retryWrites=true&w=majority';
// connect with atlas
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
// endpoints
// questions
// POST
app.post('/questions',async (req,res)=>{
    try{
        const list = await new questionSchema({
            question:req.body.question
        })
        await list.save()
        res.send({
            list,
            message:"question added"
        })
    }
    catch(error){
        res.json({
            error_message:"question adding error"
        })
    }
})
// GET
app.get('/questions',async (req,res)=>{
    try{
        const list = await questionSchema.find()
        res.send({
            list,
            message:"questions found"
        })
    }
    catch(error){
        res.json({
            error_message:"finding error"
        })
    }
})
// GET id
app.get('/questions/:_id',async (req,res)=>{
    try{
        const list = await questionSchema.find(req.params)
        res.send({
            list,
            message:"question found"
        })
    }
    catch(error){
        res.json({
            error_message:"finding error"
        })
    }
})
// DELETE id
app.delete('/questions/:_id',async (req,res)=>{
    try {
        const list = await questionSchema.deleteOne(req.params)
        res.send({
            list,
            message:"question deleted"
        })
    } catch (error) {
        res.json({
            error_message:"question deleting error"
        })
    }
})
// PUT id
app.put('/questions/:_id',async (req,res)=>{
    try {
        const list = await questionSchema.updateOne(req.params,
            {
                question: req.body.question
            })
            res.send({
                list,
                message:"question updated"
            })
    } catch (error) {
        res.json({
            message:"updating question error"
        })
    }
})
// options
// POST
app.post('/options',async (req,res)=>{
    try{
        const list = await new optionSchema({
            option1:req.body.option1,
            option2:req.body.option2,
            option3:req.body.option3,
            option4:req.body.option4
        })
        await list.save()
        res.send({
            list,
            message:"options added"
        })
    }
    catch(error){
        res.json({
            error_message:"options adding error"
        })
    }
})
// GET
app.get('/options',async (req,res)=>{
    try{
        const list = await optionSchema.find()
        res.send({
            list,
            message:"options found"
        })
    }
    catch(error){
        res.json({
            error_message:"finding error"
        })
    }
})
// GET id
app.get('/options/:_id',async (req,res)=>{
    try{
        const list = await optionSchema.find(req.params)
        res.send({
            list,
            message:"options found"
        })
    }
    catch(error){
        res.json({
            error_message:"finding error"
        })
    }
})
// DELETE id
app.delete('/options/:_id',async (req,res)=>{
    try {
        const list = await optionSchema.deleteOne(req.params)
        res.send({
            list,
            message:"options deleted"
        })
    } catch (error) {
        res.json({
            error_message:"options deleting error"
        })
    }
})
// PUT id
app.put('/options/:_id',async (req,res)=>{
    try {
        const list = await optionSchema.updateOne(req.params,
            {
                option1:req.body.option1,
                option2:req.body.option2,
                option3:req.body.option3,
                option4:req.body.option4
            })
            res.send({
                list,
                message:"options updated"
            })
    } catch (error) {
        res.json({
            error_message:"updating options error"
        })
    }
})
// answers
// POST
app.post('/answers',async (req,res)=>{
    try{
        const list = await new answerSchema({
            answer:req.body.answer
        })
        await list.save()
        res.send({
            list,
            message:"answer added"
        })
    }
    catch(error){
        res.json({
            error_message:"answer adding error"
        })
    }
})
// GET
app.get('/answers',async (req,res)=>{
    try{
        const list = await answerSchema.find()
        res.send({
            list,
            message:"answers found"
        })
    }
    catch(error){
        res.json({
            error_message:"finding error"
        })
    }
})
// GET id
app.get('/answers/:_id',async (req,res)=>{
    try{
        const list = await answerSchema.find(req.params)
        res.send({
            list,
            message:"answer found"
        })
    }
    catch(error){
        res.json({
            error_message:"finding error"
        })
    }
})
// DELETE id
app.delete('/answers/:_id',async (req,res)=>{
    try {
        const list = await answerSchema.deleteOne(req.params)
        res.send({
            list,
            message:"answer deleted"
        })
    } catch (error) {
        res.json({
            error_message:"answer deleting error"
        })
    }
})
// PUT id
app.put('/answers/:_id',async (req,res)=>{
    try {
        const list = await answerSchema.updateOne(req.params,
            {
                answer: req.body.answer
            })
            res.send({
                list,
                message:"answer updated"
            })
    } catch (error) {
        res.json({
            error_message:"updating answer error"
        })
    }
})
app.listen(3000,()=>console.log("server at 3000"))
