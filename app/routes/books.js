const express = require("express");
const router = express.Router();

/* GET users listing. */
const booksCollection = [
  {
    author: "Thomas",
    title: "Getting Started with NodeJS"
  },
  {
    author: "Emma Thalen",
    title: "NodeJs for Beginners"
  }
]

router.get("/", (req, res, next) => {
  res.json({ books: booksCollection });
});

module.exports = router;
