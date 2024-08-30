import React, { useLayoutEffect, useEffect } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import DishRow from '../components/DishRow';

import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline"
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurent } from '../features/restaurentSlice';

const RestaurentScreen = () => {

    const dispatch = useDispatch()

    const { 
        params: {
           id,
           imgUrl,
           name,
           rating,
           genre,
           address,
           short_description,
           dishes,
           long,
           lat,
    }} = useRoute() 

    useEffect(() => {
        dispatch(setRestaurent({ 
            id,
           imgUrl,
           name,
           rating,
           genre,
           address,
           short_description,
           dishes,
           long,
           lat,
         }))
    }, [dispatch]);

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
    }, [])

    const truncateAddress = (address, maxWords) => {
        const words = address.split(' ');
        if (words.length <= maxWords) {
          return address;
        }
        return words.slice(0, maxWords).join(' ') + '...';
    };

    const truncatedAddress = truncateAddress(address, 2);


    return (
        <>

            <BasketIcon/>   

            <ScrollView>
                <View className="relative">
                    <Image 
                      source = {{
                        uri: urlFor(imgUrl).url()
                      }}
                      className="w-full h-56 bg-gray p-4" 
                    />
                    <TouchableOpacity
                       onPress = {navigation.goBack} 
                       className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    >
                        <ArrowLeftIcon size={20} color="#00CCBB"/>
                    </TouchableOpacity>
                </View>
    
                <View className="bg-white">
                   <View className="px-4 pt-4">
                      <Text className="text-3xl font-bold">{name}</Text>
                      <View className="flex-row space-x-2 my-1">
                         <View className="flex-row items-center space-x-1">
                             <StarIcon color="green" opacity={0.5} size={22}/>
                             <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> • {genre}
                             </Text>
                         </View>
                         <View className="flex-row items-center space-x-1">
                             <MapPinIcon color="gray" opacity={0.4} size={22}/>
                             <Text className="text-xs text-gray-500">Nearby • {truncatedAddress}</Text>
                         </View>
                      </View>
    
                      <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                   </View>
    
                   <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                      <QuestionMarkCircleIcon color="gray" opacity={0.4} size={20}/>
                      <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
                      <ChevronRightIcon color="#00CCBB"/>
                   </TouchableOpacity>
                </View>
    
                <View className="pb-36">
                    <Text className="px-2 pt-6 mb-3 font-bold text-xl">
                        Menu
                    </Text>    
    
                        {/* Dishes */}
                        {dishes.map(dish => (
                            <DishRow
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.short_description}
                                price={dish.price}
                                image={dish.image}
                            />
                        ))}
                    
                </View>
            </ScrollView>
        </>
    );
}

export default RestaurentScreen;
