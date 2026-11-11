import { ProductsProvider } from '@/Pantalla/Context';
import { Stack } from 'expo-router';
import './global.css';

const RootLayout = () => (
  <ProductsProvider>
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Productos' }} />
      <Stack.Screen name='products/[id]' options={{ title: 'Detalle' }} />
    </Stack>
  </ProductsProvider>
)

export default RootLayout
