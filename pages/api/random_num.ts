import { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {

  // API folder is NOT a component, it is a place to have ENDPOINTS (like REST, etc.)
  // RES
  res.setHeader('X-Custom-Header', 'we are open to new hires')  // set a custom Header (only on Fetch)
  res.setHeader('Set-Cookie', 'areyouaprogrammer=true;') // set a Cookie
  res.statusCode = 200
  res.send('something like this to send..')  // sends to page on page load, no back end processing...
  // res.end('Hello, how goes it...') // response at end(), cannot interfere w/ any previous operations or won't work

  // REQ  (the Payload comes back only with a FETCH())
  console.log('REQUEST Headers', req.headers)
  console.log('---')
  console.log('REQUEST url', req.url) // this data will return after page loads up
  console.log('---')
  console.log('REQUEST query', req.query) // if included in address bar, this data will return after page loads w/qstring
  console.log('---')
  console.log('REQUEST body', req.body) // this data only returns after a FETCH() is made, it is the requests PAYLOAD
  console.log('---')
  // res.json({ status: 'ok', num: Math.floor(Math.random() * 1000) });
  // only can see the JSON returned in the terminal window when you have a FETCH running from web Console (see below simple fetch)
}

 // ENDPOINT: http://localhost:3000/api/random_num (this file's name)
 // SIMPLE CONSOLE FETCH: fetch('http://localhost:3000/api/sst_api', { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({ connection: 'admin'}) })