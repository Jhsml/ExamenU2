import { Product } from '../interfaces/product.interface';
import { ProductResponse } from '../responses/product.response';

export class ProductMapper {

    // titulo.nombre imegane
    static fromResponseToProduct = (product: ProductResponse): Product => ({
        id: product.id,
        name: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        imageUrl: product.image,
    });
}
