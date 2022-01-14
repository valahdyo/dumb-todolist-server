const express = require("express")

const router = express.Router()

//Import Controller
const { createTodo } = require("../controllers/list")
const { getItems, updateItem, deleteItem } = require("../controllers/item")

router.post("/create/:listName", createTodo)
router.get("/items/:listName", getItems)
router.patch("/item/:idItem", updateItem)
router.delete("/item/:idItem", deleteItem)

module.exports = router
