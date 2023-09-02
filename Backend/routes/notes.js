const router = require("express").Router();
const fetchuser = require('../Middleware/userCredential');
const { getAllNotes, addNotes, updateNotes } = require('../Controller/noteController')


router.get('/getallnotes',fetchuser,getAllNotes);
router.post('/addnote',fetchuser,addNotes);
router.put('/updatenote/:id',fetchuser,updateNotes);

module.exports = router;