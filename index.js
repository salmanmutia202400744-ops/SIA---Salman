// run `node index.js` in the terminal

const express = require('express')
const cors = require('cors')
const path = require ('path')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//datasets
const students = [
    {
        id: 1001,
        name: 'sal',
        yearLevel: 1
    },
    {
        id: 1002,
        name: 'Gat',
        yearLevel: 2
    },
    {
        id: 1003,
        name: 'Ange',
        yearLevel: 3
    }
]

//API end point
app.get('/api/students', (req, res) => {
    res.json(students)
})
app.post('/api/students', (req, res) => {
    const {name, yearLevel} = req.body
    const newStudent = {name, yearLevel}
    students.push(newStudent)

    res.json(201).json({
        message: "Student added Successfully",
        student: newStudent
    })
})


//Listen for incoming request
app.listen(port, ()=>{
    console.log('server running on http://localhost:${port}')
})
