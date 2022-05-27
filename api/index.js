const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )
//calls befire every endpoint is called
//middleware that converts 



//GET - read
//POST - create a new resource
//PATCH - Update
// Delete - Destroy

//200 - good
//400 - you messed up
//500 - something wrong at the server level

//stateless two parties do not need to save state


// request is incoming data
//response is outgoing data
// send a response back to client pass js object will make it json by default

app.get('/cat', (req,res) => {
    res.status(200).send({
        louise: 'white cat',
        niles: "black cat"
    })

});

//:id - dynamic url can handle all of them
//create a new cat on the server
//



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