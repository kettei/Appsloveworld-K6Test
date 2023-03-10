import http from 'k6/http';
import { htmlReport } from 'https://raw.githubusercontent.com/alamsz/k6-reporter/main/dist/bundle.js'
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'

export const options = {
    vue: 5,
    duration: '3s'
};

export default function () {
    const url = 'http://restapi.adequateshop.com/api/authaccount/registration';
    const randomEmail = randomString(8)
    const payload = JSON.stringify({
        name: "IrfanK6",

        // randomize email handle
        email: `${randomEmail}@"gmail.com"}`,
        password: 123456
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    // post in k6
    const res = http.post(url, payload, params);
    console.log(res.body)

    // assertion
    expect(res.status, 'Status').to.equal(200)
   
}
// html report

export function handleSummary(data) {
    console.log('Preparing the end-of-test summary...')
    return {
      'RegisterK6.html': htmlReport(data, { title: 'RegisterK6' }),
    }
}