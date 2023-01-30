const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be 3 characters"],
        minLength:[3, "Must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Type must be 3 characters"],
        minLength:[3, "Must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description must be 3 characters"],
        minLength:[3, "Must be at least 3 characters"]
    },
    skill_1: {
        type: String
    },
    skill_2: {
        type: String
    },
    skill_3: {
        type: String
    }
}, {timestamps: true});

PetSchema.path('name').validate(async (name) => {
    const nameCount = await mongoose.models.Pet.countDocuments({ name })
    return !nameCount
}, "Name already exists");

const Pet = mongoose.model('Pet', PetSchema);



module.exports = Pet;