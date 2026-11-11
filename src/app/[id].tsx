import { useProducts } from '@/Pantalla/Context';
import { Redirect, router, Stack, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Button, Image, ScrollView, Text, View } from 'react-native';

const ProductScreen = () => {

    const { id } = useLocalSearchParams<{ id: string }>();
    const { products, loading } = useProducts();

    if (loading) {
        return (
            <View className='flex-1 items-center justify-center'>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    // Reutiliza el producto ya descargado: no hay otra petición HTTP
    const product = products.find(p => p.id === Number(id));
    if (!product) return <Redirect href='/' />;

    return (
        <ScrollView className='flex-1'>
            <Stack.Screen options={{ title: product.name }} />
            <View className='bg-white rounded-xl p-4 m-2 border border-gray-200'>
                <Image source={{ uri: product.imageUrl }} className='w-full h-72 mb-4' resizeMode='contain' />
                <Text className='text-xl font-bold'>{product.name}</Text>
                <Text className='text-lg mt-1'>$ {product.price.toFixed(2)}</Text>
                <Text className='text-gray-500 mt-1'>Categoría: {product.category}</Text>
                <Text className='mt-3 mb-4'>{product.description}</Text>
                <Button title='Volver a la lista' onPress={() => router.back()} />
            </View>
        </ScrollView>
    )
}

export default ProductScreen
