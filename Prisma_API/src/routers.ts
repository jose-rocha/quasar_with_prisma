import { Router } from 'express';
import { CreateProductTechController } from './controllers/CreateProductTechController';
import { FindProductsTechController } from './controllers/FindProductsTechController';
const router = Router();


const CreateProductTech = new CreateProductTechController();
const FindProductsTech = new FindProductsTechController();


router.get('/products', FindProductsTech.handle);
router.post('/product_tech', CreateProductTech.handle);

export { router };