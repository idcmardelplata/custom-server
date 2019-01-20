module.exports = [
  {method: 'get', url: '/', handler: (req, res) => res.send("Hola mundo desde el router desde express")},
  {method: 'get', url: '/:name', handler: (req, res) => res.send(`Hola ${req.params.name}`)}
]
