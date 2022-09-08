import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';


export class FindProductsTechController {
    async handle(request: Request, response: Response) {
        const { id, name_product, image_url, bar_code, price, created_at } = request.body;


        const products = await prismaClient.product.findMany({
            where: {
                id,
                name_product,
                image_url,
                bar_code,
                price,
                created_at
            }
        });

        return response.json(products);
    }
}