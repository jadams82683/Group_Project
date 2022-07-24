const CharacterController = require("../controllers/character.controller");

module.exports = (app) => {
    app.post("/api/character", CharacterController.createCharacter);
    app.get("/api/piece", CharacterController.getAllCharacters);
    app.get("/api/piece/:id", CharacterController.getOneCharacter);
    app.put("/api/piece/:id", CharacterController.updateCharacter);
    app.delete("/api/piece/:id", CharacterController.deleteCharacter);
};