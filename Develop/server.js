const express = require('express');
const fs = require('fs')
const app = express();
const path = require ('path');
const Notes = require('./db/db.json');
const PORT = 3001;

app.use(express.json());
app.use(epxress.urlencoded ({extended:true }));
app.use(express.static('public'));

app.get('./api/notes', (req, res) => {
    console.info(`${req.method} request received to get notes`);
    fs.readFile('db.json', 'utf-8', (err,data) => {
        if (err) {
            console.error('Error reading db.json:', err.message);
            res.status(500).json({ error: 'Error fetching data' });
        }
        else {
            try {
                const Notes;
            } catch (error) {

            }
        }
    });
    return res.status(200).json(notesData);
});

app.post('./api/notes', (req,res) => {
    console.info(`${req.method} request received to add a review`);
    const{ title, text} = req.body;
    const UpdatedNotes = {
        title, 
        text
    };
    let Notefile;
    try {
        const data = fs.readFileSync('./db/db.json');
        Notefile = JSON.parse(data); 
    }
    catch (err) {
        console.error('Error reading json data', err.message);
    }
    Notefile.push(UpdatedNotes);

    fs.writeFile('./db/db.json', JSON.stringify(existingNotes, null, 2), (err) => {
        if (err) {
            console.error('Error writing data to db.json:', err.message);
            res.status(500).send('Error saving to db.json');
        }
        else {
            res.send('Data saved to db.json');
        }
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});