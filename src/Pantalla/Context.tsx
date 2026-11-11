import { Product } from '@/interfaces/product.interface';
import { getProductsAction } from '@/services/acciones';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface ProductsContextProps {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const ProductsContext = createContext({} as ProductsContextProps);

// Pide los productos UNA vez y los comparte con la lista y el detalle
// → el detalle reutiliza el objeto ya descargado, sin otra petición HTTP
export const ProductsProvider = ({ children }: PropsWithChildren) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;

        const loadProducts = async () => {
            try {
                const result = await getProductsAction();
                if (active) setProducts(result);
            } catch (e) {
                if (active) setError(e instanceof Error ? e.message : 'Ocurrió un error.');
            } finally {
                if (active) setLoading(false);
            }
        }

        loadProducts();

        return () => { active = false; }
    }, []);

    return (
        <ProductsContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);
