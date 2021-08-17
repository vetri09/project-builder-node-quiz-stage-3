// require mongoose
const mongoose = require('mongoose')
// get schema
const Schema = mongoose.Schema
// create schema for question
const ques = new Schema(
    {
        question:{type:String,required:true}
    },
    {
        collection:"questions"
    }
)
// create schema for option
const opts = new Schema(
    {
    option1:{type:String,required:true},
    option2:{type:String,required:true},
    option3:{type:String,required:true},
    option4:{type:String,required:true}
    },
    {
        collection:"options"
    }
)
// create schema for answer
const ans = new Schema(
    {
    answer:{type:Number,required:true}
    },
    {
        collection:"answers"
    }
)
// create model for all schemas
const questionSchema = mongoose.model('model1',ques)
const optionSchema = mongoose.model('model2',opts)
const answerSchema = mongoose.model('model3',ans)
// export schemas
module.exports={questionSchema,optionSchema,answerSchema}