import { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {

  res.json({ status: 'ok', num: Math.random() * .00001 });
  req.body = { string: "husker du" };
}

 // http://localhost:3000/api/randomnumber....