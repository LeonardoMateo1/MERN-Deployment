const Pet = require("../models/pet.model.js"); //Import the model from the model file

module.exports = {
    createPet: (req, res) => {
        Pet.create(req.body)
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(404).json({msg:"Something went Wrong", error:err})
            });
    },

    getAllPets: (req, res) => {
        Pet.find({}) 
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({msg:"Something went Wrong", error:err})
            });
    },

    getOnePet: (req, res) => {
        Pet.findOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },

    updatePet: (req, res) => {
        Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true,runValidators: true})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },

    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(404).json({msg:"Something went Wrong", error:err})
        });
    },
};
