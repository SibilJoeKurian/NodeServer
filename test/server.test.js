const { TestScheduler } = require('jest')
const request = require('request')

const url='http://192.168.99.100:3000/get'



test('response check',()=>{
    request.get(url,(req,res)=>{
        expect(res.statusCode).toBe(200)
    })
}
)