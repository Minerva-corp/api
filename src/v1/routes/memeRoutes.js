const express =  require("express");
const MemeController = require('../../controller/memeController')

const router = express.Router();

router.get("/", async (req, res) => {
    MemeController.generateMeme(req, res);
});



module.exports = router;