import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';


export class CreateProductTechController {
    async handle(request: Request, response: Response) {
            const { name_product, image_url, bar_code, price } = request.body;
    
    
            const product_tech = await prismaClient.product.create({
                data: {
                    name_product,
                    image_url,
                    bar_code,
                    price
                }
            });    
    
            return response.json(product_tech);
    }
}