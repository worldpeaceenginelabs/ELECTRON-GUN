import http from 'http'
import Gun from 'gun'

const server = http.createServer()

const host = 'localhost'
const port = 8765

var gun = Gun({
  web: server,
  peers: ['']
})

server.listen(port, () => {
  console.log(
    'Server started on port ' + port + ' with /gun',
  )
  gun.get('test').on(data => console.log(data))
})