const {Router} = require("express");
const { saveToDo, getToDo, updateToDo, deleteToDo } = require("../controllers/ToDoControllers");

const router = Router()

// CRUD 
// creating route for get, post, update, delete
router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;