import { ProductCard } from '@/Pantalla/Cards';
import { useProducts } from '@/Pantalla/Context';
import { router } from 'expo-router';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const ProductsScreen = () => {

  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <View className='flex-1 items-center justify-center'>
        <ActivityIndicator size='large' />
        <Text className='mt-3'>Cargando productos...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View className='flex-1 items-center justify-center p-4'>
        <Text className='text-center'>{error}</Text>
      </View>
    )
  }

  return (
    <FlatList
      numColumns={2}
      data={products}
      keyExtractor={(p) => String(p.id)}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => router.push({ pathname: '/[id]', params: { id: String(item.id) } })}
        />
      )}
    />
  )
}

export default ProductsScreen
