const express = require("express");
const path = require("path");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});

const port = 8000;

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    desc: String
  });
  const Contact = mongoose.model('Kitten', contactSchema);

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get("/contact", (req, res)=>{ 
    const params = { }
    res.status(200).send('contact.pug', params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});