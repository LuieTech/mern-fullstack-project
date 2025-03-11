const express = require("express")
const router = express.Router()
const books = require("../controllers/book.controller")

router.get('/books', books.list)

module.exports = router;