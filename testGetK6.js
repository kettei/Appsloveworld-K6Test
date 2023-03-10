import http from 'k6/http'
import { check } from 'k6'
import { htmlReport } from 'https://raw.githubusercontent.com/alamsz/k6-reporter/main/dist/bundle.js'

export function login() {
    const url = 'http://restapi.adequateshop.com/api/authaccount/login';
    const payload = JSON.stringify({
        email:"IrfanKENAM@gmail.com",
        password:123456
    })
    
    const res = http.post(url, payload, params)
    console.log(res.body.data)

    expect(res.status, 'Status').to.equal(200)
}
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
}

// cant extract token from login

export default function() {
    // let login_headers = {Authorization: 'Bearer 88643842-d78b-4bee-bc2c-cab744ea8da4'};
    let res = http.get('http://restapi.adequateshop.com/api/users/')
    
    check(res, {
        'is status 200': (r) => r.status === 200
    })
    console.log(res.body)
}

export function handleSummary(data) {
    console.log('Preparing the end-of-test summary...')
    return {
      'GetK6.html': htmlReport(data, { title: 'GetK6' }),
    }
}