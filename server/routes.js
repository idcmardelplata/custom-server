module.exports = [
  {method: 'get', url: '/', handler: (req, res) => "Hola mundo desde el router desde express"},
  {method: 'get', url: '/{name}', handler: (req, res) => `Hola ${encodeURIComponent(req.params.name)}`}
]
