const router = require("express").Router()
const validateSession = require("../middleware/validate-session");
const Pet = require("../models/pet.model");


/* 
*Endpoint: localhost:4000/pet/add
req type: POST
1. Create var that will store the title, description, and imaageURL
2. Create a new Pet Model Object
3. Save the data created from the Pet Model
4. Send back the pet information that was saved.
 */


router.post("/add", validateSession, async (req, res) => {
    try {
        
        const { title, description, imageURL } = req.body;

        const pet = new Pet({
            title: title,
            description: description,
            imageURL: imageURL,
            ownerId: req.user._id
        });

        const newPet = await pet.save();

        res.json({ 
            message: "add pet success",
            pet: newPet,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

/* 
*Endpoint: localhost:4000/pet/view-all
req type: GET
*/

router.get("/view-all", validateSession, async (req, res) => {
    // console.log(req.user)
    try {
        const pets = await Pet.find().populate(
            "ownerId", 
            "firstname lastname");
        res.json({
            message: "view all pets success",
            pet: pets,
        });
    } catch {
        res.status(500).json({
            message: error.message
        });
    }
});

/* 
Endpoint: localhost:4000/pet/delete/:id
Req Type: DELETE
*/

router.delete("/delete/:id", validateSession, async (req, res) =>{
    try {
        // console.log(req.params.id);
        const pet = await Pet.deleteOne({
            _id: req.params.id, 
            ownerId: req.user._id });
        // console.log(pet);

        res.json({ 
            message: 
            pet.deletedCount > 0 
                ? pet.deletedCount + " pet deleted"
                : "pet not found", });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

});


/* 
Endpoint: localhost:4000/pet/update/:id
Req type: PATCH
*/

router.patch("/update/:id", validateSession, async (req, res) => {
    try {
        // the findByIDAndUpdate takes three parameters: (id, data, options)
        const id = req.params.id;
        const filter = { _id: id, ownerId: req.user.id }
        const data = req.body;
        const options = { new: true };
        // const pet = await Pet.findByIdAndUpdate(id, data, options);

        const pet = await Pet.findOneAndUpdate(filter, data, options);

        res.json({ 
            message: "update pet success", 
            pet: pet ?? "0 pets were updated"
        });
            // ?? is a null checker. if 'pet' is null, it'll do what's on the right side.
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }

});




//---------Export----------
module.exports = router;