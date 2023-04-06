// import request from '@/utils/request'
export function getHello () {
  return request(
    {
      url: '/hello/1',
      method: 'get'

    }
  )
}
export function postM () {
  return request(
    {
      url: '/hello/1',
      method: 'post',
      data :{
        username: chenjie,
        password: 1212
      }
    }
  )
}