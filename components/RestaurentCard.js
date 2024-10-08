import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurentCard = ({
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
}) => {


    const truncateAddress = (address, maxWords) => {
        const words = address.split(' ');
        if (words.length <= maxWords) {
          return address;
        }
        return words.slice(0, maxWords).join(' ') + '...';
    };

    const truncatedAddress = truncateAddress(address, 3);

    const navigation = useNavigation()

    return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Restaurent', {     //pass params
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
            })
          }}
          className="bg-white mr-3 shadow"
        >
            <Image 
               source={{
                uri: urlFor(imgUrl).url(),
               }} 
               className="h-36 w-64 rounded"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{name}</Text>
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
        </TouchableOpacity>
    );
}

export default RestaurentCard;
