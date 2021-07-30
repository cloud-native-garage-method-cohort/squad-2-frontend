const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000
const getAllClassMates = 'http://squad-2-backend-squad-2.ibmcloud-roks-jo67p-6ccd7f378ae819553d37d5f2ee142bd6-0000.us-south.containers.appdomain.cloud/classmates'

//app.set('view engine', 'jade');

/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://jsonplaceholder.typicode.com/todos/1
*/
app.get('/getAllClassMates', (req, res) => {
    api_helper.make_API_call(getAllClassMates)
    .then(response => {
        res.send(response)
    })
    .catch(error => {
        res.send(error)
    })
})



app.listen(port, () => console.log(`App listening on port ${port}!`))
