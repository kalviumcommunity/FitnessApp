const express =  require('express');
const  Feedback  = require('../models/feedbackmodel.js');
const FeedbackRouter = express.Router();
const Joi = require('joi')
const schema = Joi.object({
    name:Joi.string().required(),
    feedback:Joi.string().required(),
    rating:Joi.number().required()
  });
FeedbackRouter.post('/api/feedback', async(req, res) =>{
    const {error,value} = schema.validate(req.body,{abortEarly:false}); 
    try{
        if (!error) {
        let{name,feedback,rating} = req.body;
        const formData = await Feedback.create({name,feedback,rating});
        res.status(201).json(formData);}
        else {
            return res.status(400).send({
            message: `Bad request ${error}`
            })
            console.error(error)
        }
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: `Internal server error : ${err}`
        })
    }
})
module.exports=FeedbackRouter;