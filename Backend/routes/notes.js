const router = require("express").Router();
const fetchuser = require('../Middleware/userCredential');
const { getAllNotes, addNotes } = require('../Controller/noteController')


router.get('/getallnotes',fetchuser,getAllNotes);
router.post('/addnote',fetchuser,addNotes);

module.exports = router;