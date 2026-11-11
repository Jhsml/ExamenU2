import { ProductMapper } from '@/mapper/product.mapper';
import { ProductResponse } from '@/responses/product.response';
import { storeApi } from './api';

// entra y sale con map
export const getProductsAction = async () => {
    try {
        const { data } = await storeApi.get<ProductResponse[]>('/products'); // la API devuelve un arreglo directo
        return data.map(ProductMapper.fromResponseToProduct);
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo cargar los productos. Revisa tu conexión.');
    }
}
