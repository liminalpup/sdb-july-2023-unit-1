//--------ROUTER AND MODEL IMPORT-----------
const router = require("express").Router();
const validateSession = require("../middleware/validate-session");
const Animal = require("../models/animal.model");

/* 
Endpoint: "http://localhost:4000/animal/create"
req type: POST
*/

router.post("/create", validateSession, async (req, res) => {
    //---------TRY/CATCH---------
    try {
        const { name, legNumber, predator } = req.body;
        const animal = new Animal({
            name: name,
            legNumber: legNumber,
            predator: predator,
            userId: req.user._id,
            
        });
        const newAnimal = await animal.save();
        res.json({
            message: "animal created",
            animal: newAnimal
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.get("/all", validateSession, async (req, res) => {
    try {
        const animals = await Animal.find().populate
            ("userId", "email");
        res.json({
            message: "all animals",
            animals: animals
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

//------------SILVER CHALLENGE (DELETE)----------

router.delete("/delete/:id", validateSession, async (req, res) => {
    try { 
        const animal = await Animal.deleteOne({
            _id: req.params.id,
            userId: req.user._id
        });
        res.json({
            message: 
                animal.deletedCount > 0
                    ? animal.deletedCount + " animal deleted successfully"
                    : "animal not found",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

//----------GOLD CHALLENGE (UPDATE)--------------

router.patch("/update/:id", validateSession, async (req, res) => {
    try {
        const id = req.params.id;
        const filter = {
            _id: id,
            userId: req.user._id
        };
        const data = req.body;
        const options = { new: true };
        const animal = await Animal.findOneAndUpdate(filter, data, options);

            
            res.json({
                message: "Update Submitted",
                animal: animal ??
                "Failed"
            });   
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});










//---------EXPORT MODULE-----------
module.exports = router;