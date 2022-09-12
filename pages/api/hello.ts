// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    description: string
    price: number
}[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const response = [
        {
            description: 'Product 1',
            price: 10,
        },
        {
            description: 'Product 2',
            price: 20,
        },
        {
            description: 'Product 3',
            price: 30,
        },
    ]
    res.status(200).json(response)
}
