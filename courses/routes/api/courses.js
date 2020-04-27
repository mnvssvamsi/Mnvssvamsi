const express = require('express');
const router = express.Router();
const Course =require("../../Models/Course")

router.get('/courses',
 async (req, res) => {    
    console.log(req.body)
    Course.find((err, result) => {
        console.log(result);
        if (err) {
          res.status(500).json({ message: err.message });
        } else if (!result) {
          res.status(404).json({ message: "Course is not found" });
        } else {
          res.status(200).json({ courses: result,});
        }
      });
})

router.get("/courses/:provider",(req,res)=>{
    // console.log(req.params.id);
    Course.find({Provider:req.params.provider}, (err, result) => {
        // console.log(result);
        if (err) {
          res.status(500).json({ message: err.message });
        } else if (!result) {
          res.status(404).json({ message: "Course is not found" });
        } else {
          res.status(200).json({ courses: result, });
        }
        })
})

module.exports = router;