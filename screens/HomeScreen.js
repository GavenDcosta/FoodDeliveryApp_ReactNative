import { useNavigation } from '@react-navigation/native';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text, View, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation()

    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])


    useEffect(() => {
       sanityClient.fetch(
        `
        *[_type == "featured"] {
          ...,
          restaurents[]->{
            ...,
            dishes[]->
          }
        }
        `
       ).then(data=>{
        setFeaturedCategories(data)
       })  
    }, [])

    //console.log(featuredCategories)

    return (
        <SafeAreaView className="bg-white pt-5">
            <View>

                 {/* Header */}
                 <View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className="h-7 w-7 bg-gray-300 rounded-full"
                    />

                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-xl">Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>

                    <UserIcon size={35} color="#00CCBB"/>
                 </View>


                 {/* Search */}
                 <View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
                    <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
                        <MagnifyingGlassIcon color="gray" size={20}/>
                        <TextInput 
                          placeholder="Restaurents and Cuisines" 
                          keyboardType="default"
                        />
                    </View>
                    <AdjustmentsVerticalIcon color="#00CCBB"/>
                 </View>


                 {/* Body */}
                 <ScrollView className="bg-gray-100 h-[90%]"
                   contentContainerStyle={{
                     paddingBottom:100
                   }}
                 >

                    {/* Categories */}
                    <Categories/>

                    {/* Features Rows */}

                    {featuredCategories.map((category) => (
                      <FeaturedRow
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}   
                      />
                    ))}

                    {/* <FeaturedRow
                      id="123"
                      title="Featured"
                      description="Paid placements from our partners"    
                    />

                    <FeaturedRow
                      id="1234"
                      title="Tasty Discounts"
                      description="Everyone's been enjoying these juicy disocunts"      
                    />

                    <FeaturedRow
                      id="12345"
                      title="Offers near you"
                      description="Why not support your local restaurent tonight"
                    /> */}

                 </ScrollView>

            </View>   
        </SafeAreaView>
    );
}

export default HomeScreen;
