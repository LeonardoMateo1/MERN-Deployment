const PetController = require("../controllers/pet.controller");

module.exports = (app)=>{
    // Create
    app.post("/api/pets", PetController.createPet);
    // Read
    app.get("/api/pets/:id", PetController.getOnePet);
    app.get("/api/pets", PetController.getAllPets);
    // Update
    app.put("/api/pets/:id", PetController.updatePet);
    // Delete
    app.delete("/api/pets/:id", PetController.deletePet);
}