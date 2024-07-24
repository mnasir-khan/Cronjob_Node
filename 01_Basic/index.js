const express = require('express')
const app = express()
const port = 3000

const cron = require('node-cron');
const fs = require('fs')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//===> cronjob

// cron.schedule('* * * * *', function(){
//     console.log('cronjob is running');
// })


//===> cronjob in fs file

cron.schedule('*/10 * * * * *', function(){
    let data = `Hello Cronjob is running\n`

    fs.appendFile('nasir.txt', data, function(err){
        if(err) throw err;

        console.log('File is added');
    })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})