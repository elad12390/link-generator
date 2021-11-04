const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const baseUrl = `https://blalbla.blala.com/`;
app.get('/:idTour/:participants/', (req, res) => {
  const { idTour, participants } = req.params;
  const result = Array.from({length: participants}, (_, i) => `${baseUrl}?tourId=${idTour}&userCode=${i + 1}`);
  res.send(`<pre>${result.join('\n')}</pre>`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})