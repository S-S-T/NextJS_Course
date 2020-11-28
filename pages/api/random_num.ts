import { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {

  res.send('somethinglikeths')
  console.log('request body', req.body)
  res.json({ status: 'ok', num: Math.floor(Math.random() * 1000) });
  //req.body = { string: "husker du" };
}

 // http://localhost:3000/api/randomnumber...