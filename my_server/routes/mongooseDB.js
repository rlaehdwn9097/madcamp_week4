const express = require("express");

const router = express.Router();

router.get("/mongooseDB", (res,req) => {
    res.send("HI");
});

module.exports = router;