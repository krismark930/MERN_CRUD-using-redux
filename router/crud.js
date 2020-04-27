const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model("User")

// fetch all data
router.get("/", (req, res) => {
    User.find() 
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
    })
});


// router.get('/fetchall', (req, res) => {
//     User.find((err, docs) => {
//         if (!err) res.send(docs)
//         else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
//     })
// })

//insert data

router.post('/',(req,res)=>{
    const {name} = req.body
    const user = new User({
        name
    })
    user.save().then(result=>{
        res.json({user:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

//delete user

router.delete('/:id',(req,res) =>{
    User.findOne({_id:req.params.id})
    .then(data=>{
        data.remove()
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

//fetch user by id

router.get('/:id',(req,res) =>{
    User.findOne({_id:req.params.id})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

//update user

router.put('/:id',(req,res) =>{

    const Id  = req.params.id;
    var name = { $set: {name: req.body.name } };

    User.findByIdAndUpdate({_id:Id}, name)
    .then(data =>{
        res.json(data)
    }).catch(err=>{console.log(err)})

    // User.findOneAndUpdate(req.body.id, name)
    // .then(data =>{
    //     res.json(data)
    // })
    // .catch(err=>{console.log(err)})

    // User.updateOne(req.param.id,{
    //     $set:{name: req.body.name}
    // }).then(result=>{
    //     res.json(result)
    // },{
    //     new:true
    // }).catch(err=>{
    //     return res.status(422).json({error:err})
    // })


})

module.exports = router