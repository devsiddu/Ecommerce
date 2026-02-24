import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWishlist } from '@/context/WishlistContext'
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import ProductCard from '@/components/ProductCard';

const Favorites = () => {
  const { isInWishlist, wishlist } = useWishlist();
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 bg-surface' edges={['top']}>
      <Header title='Wishlist' showMenu showCart />

      {/* wishlist products */}
      {wishlist.length > 0 ? (
        <ScrollView className='flex-1 py-4 m-4' showsVerticalScrollIndicator={false}>

          <View className='flex-row flex-wrap justify-between'>
            {wishlist.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </View>

        </ScrollView>
      ) : (
        <View className='flex-1 items-center justify-center'>
          <Text className='text-secondary text-lg'>Your wishlist is empty</Text>
          <TouchableOpacity className='mt-4' onPress={() => router.push('/')}>
            <Text className='text-primary font-bold'>Start Shopping</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

export default Favorites