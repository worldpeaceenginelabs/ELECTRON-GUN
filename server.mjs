import http from 'http'
import Gun from 'gun'

const server = http.createServer()

const host = 'localhost'
const port = 8080

var gun = Gun({
  web: server,
  peers: ['https://relay.peer.ooo/gun']
})

server.listen(8080, () => {
  console.log(
    'Server started on port ' + port + ' with /gun',
  )
  gun.get('test').on(data => console.log(data))
})