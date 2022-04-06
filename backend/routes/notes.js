const express=require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');
const Notes=require('../models/notes');
const { body, validationResult } = require('express-validator');

//ROUTE 1:Get All the Notes using:GET "/api/notes/fetchallnotes" . Login Required
router.get('/fetchallnotes',fetchuser,async(req,res)=>{
    try{
        const notes=await Notes.find({user:req.user.id});
        res.json(notes);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server Error");
      }
})
////ROUTE 2:Add a new Note using:POST "/api/notes/addnote" . Login Required
router.post('/addnote',fetchuser,[
    body('title','Enter a valid Title').isLength({ min: 3 }),
    body('description','Enter a valid Description').isLength({ min: 5 }),
],async(req,res)=>{
    try{
    const {title,description,tag}=req.body;
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note=new Notes({
        title,
        description,
        tag,
        user:req.user.id
    })
    const savedNote=await note.save();
    res.json(savedNote)

    }catch(error){
    console.error(error.message);
    res.status(500).send("Internal server Error");
  }
})
module.exports=router