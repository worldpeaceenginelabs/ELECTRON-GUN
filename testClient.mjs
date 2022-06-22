import Gun from 'gun'

let gun = new Gun({peers: 'http://localhost:8765/gun'})

gun.get('test').on(data => console.log(data))