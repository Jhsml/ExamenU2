import { Product } from '@/interfaces/product.interface';
import { Image, Pressable, Text } from 'react-native';

interface Props {
    product: Product;
    onPress: () => void;
}
// falto mi name

export const ProductCard = ({ product, onPress }: Props) => (
    <Pressable onPress={onPress} className='flex-1 bg-white rounded-xl p-4 m-2 border border-gray-200'>
        <Image source={{ uri: product.imageUrl }} className='w-full h-40 mb-3' resizeMode='contain' />
        <Text className='font-bold' numberOfLines={2}>{product.name}</Text>
        <Text className='mt-1'>$ {product.price.toFixed(2)}</Text>
    </Pressable>
)
