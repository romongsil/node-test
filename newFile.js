const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/user/:id', (req, res) => {
//   // const q = req.params
//   // console.log(q.id)
//   const q = req.query


//   res.send({ 'userID': q.id })
// })

app.get('/sound/:name', (req, res) => {
  const { name } = req.params
  console.log(name)

  if (name == "dog") {
    res.send({ 'sound': '멍멍' })
  } else if (name == "cat") {
    res.send({ 'sound': '야옹' })
  } else if (name == "pig") {
    res.send({ 'sound': '꿀꿀' })
  } else {
    res.send({ 'sound': '크앙크앙' })
  }

  // res.send({ 'sound': '야옹' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})