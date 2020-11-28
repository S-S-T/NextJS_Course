import { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
  // API folder is NOT a component, it is a place to have ENDPOINTS (like REST, etc.)
  // res.send('something like this')
  // const cur_conn = req.connection;
  console.log('REQUEST body: ', req.body);
  // THIS ONLY WILL WORK WHEN PAGE IS LOADED OR REFRESHED.
  res.json({ status: 'ok', num: Math.floor(Math.random() * 1000) });
  // res.json({ connection: 'OK' })
  // req.body = { string: "husker du" };
}

// fetch('http://localhost:3000/api/sst_api', { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({ connection: 'admin'}) })