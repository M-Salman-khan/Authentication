// const sessionIdToUserMap = new Map()
const jwt = require("jsonwebtoken")
const secret = "SuperSecretKey"
function setUser(user) {
    return jwt.sign({
        name:user.name,
        email:user.email,
    },secret)
    // sessionIdToUserMap.set(id,user)
}

function getUser(token) {
    // return sessionIdToUserMap.get(id)
    if(!token) return null
    return jwt.verify(token,secret)
}

module.exports ={
    setUser,
    getUser
}