
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';

const KEY = 'rtyafjdkaslkjfkasjsahdfjhdjfhja';

export default function (req: NextApiRequest, res: NextApiResponse) {

  const { token } = req.body

  const { admin } = jwt.verify(token, KEY) as { [key: string]: string }

  if (admin) {
    res.json({ secretAdminCode: 132345 })
  } else {
    res.json({ admin: false })
  }
}