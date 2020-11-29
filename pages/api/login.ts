import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';

const KEY = 'rtyafjdkaslkjfkasjsahdfjhdjfhja';

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404
    res.end('error')
    return
  }

  const { username, password } = req.body;
  // this is a 'signed' json token, and res.json will post it to the web browser
  res.json({
    token: jwt.sign({
      username,
      admin: username === 'sst' && password === 'admin',
    },
      KEY
    )
  })
}  