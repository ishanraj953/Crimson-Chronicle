const jwt = require("jsonwebtoken");
const secret = "abc"

function setUser(id,user) {
  const payload = {
    id,
    ...user
  }
}