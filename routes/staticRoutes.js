const express = require("express")

const router = express.Router()

router.get("/",(req,res)=>{
    if (req.user) {
        return res.redirect("/user/dashboard")
    }
    return res.render("home")
})
router.get("/signup",(req,res)=>{
    if (req.user) {
        return res.redirect("/user/dashboard")
    }
    return res.render("signup")
})
router.get("/login",(req,res)=>{
    if (req.user) {
        return res.redirect("/user/dashboard")
    }
    return res.render("login")
})

module.exports = router