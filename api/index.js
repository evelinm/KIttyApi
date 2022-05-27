const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )
//calls befire every endpoint is called
//middleware that converts 
// request is incoming data
//response is outgoing data

app.get('/cat', (req,res) => {
    res.status(200).send({
        louise: 'white cat',
        niles: "black cat"
    })

});

app.post('/cat/:id', (req,res)=> {
    const { id } = req.params;
    const { breed } = req.body;

    if(!breed) {
        res.status(418).send({message: "We need a breed"})
    }

    res.send({
        louise: `louse is a ${breed} and her id is ${id}`,
    })

});



app.listen(
    PORT,
    ()=> console.log(`it is alive  on localhost:${PORT}`)
)