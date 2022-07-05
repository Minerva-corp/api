import express from "express";
import MemeController from '../../controller/memeController'

const router = express.Router();

router.get("/", async (req, res) => {
    MemeController.generateMeme(req, res);
});



module.exports = router;