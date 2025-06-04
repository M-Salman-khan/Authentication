const express = require("express")
const {handleUserSignUp,handleUserLogin} = require("../controllers/user")
const { restrictToLoggedInUserOnly } = require("../middleware/auth")
const router = express.Router()

router.post("/signup",handleUserSignUp)
router.post("/login",handleUserLogin)

// Protected route example
router.get("/dashboard", restrictToLoggedInUserOnly, (req, res) => {
    return res.render("dashboard", { user: req.user })
})

module.exports = router;