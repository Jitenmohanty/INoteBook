const Notes = require("../models/Notes");

module.exports.getAllNotes = async (req, res, next) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        return res.json({ msg: "Error on fetching notes", status: false })
    }
}

module.exports.addNotes = async (req, res, next) => {
    try {
        const { title, description, tag } = req.body;
        const note = new Notes({
            title,description,tag,user:req.user.id
        })
        const saveNote = await note.save();
        return res.json({ status: true, saveNote });
    } catch (ex) {
        return res.json({msg:"Error on add Note",status:false})
        next(ex);
    }
}