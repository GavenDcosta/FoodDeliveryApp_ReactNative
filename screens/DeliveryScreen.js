import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectRestaurent } from '../features/restaurentSlice';
import { XMarkIcon } from 'react-native-heroicons/outline';
import SmallBikeImage from "../assets/smallbike.png"
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {

    const navigation = useNavigation()
    const restaurent = useSelector(selectRestaurent)

    return (
        <View className="flex-1 bg-[#00CCBB] pt-6">
            <SafeAreaView className="z-50">
               <View className="flex-row justify-between items-center p-5">
                  <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XMarkIcon color="white" size={30}/>
                  </TouchableOpacity>
                  <Text className="font-light text-white text-lg">Order Help</Text>
               </View>

               <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                 <View className="flex-row justify-between">
                    <View>
                       <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                       <Text className="text-3xl font-bold">45-55 Minutes</Text>
                    </View>
                    <Image
                      source={SmallBikeImage}
                       className="h-16 w-16"
                    />
                 </View>

                 <Progress.Bar
                    indeterminate={true}  
                    color="#00CCBB"
                    width={180}         
                    height={6}            
                    style={{ marginTop: 10 }} 
                />

                <Text className="mt-3 text-gray-500">
                    Your order at {restaurent.name} is being prepared
                </Text>
               </View>
            </SafeAreaView>

               <MapView
                 initialRegion={{
                   latitude: restaurent.lat,
                   longitude: restaurent.long,
                   latitudeDelta: 0.005,
                   longitudeDelta: 0.005,
                 }}
                 className="flex-1 -mt-10 z-0"
                 mapType='mutedStandard'
               >
                   {/* <Marker
                      coordinates={{
                       latitude: restaurent.lat,
                       longitude: restaurent.long,
                      }}   
                      title={restaurent.name}
                      description={restaurent.short_description}
                      identifier="origin"
                      pinColor="#00CCBB"
                   />  */}
               </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-20">
               <Image 
                 source={{
                  uri: "https://links.papareact.com/wru"
                 }}
                 className="h-12 w-12 bg-gray-200 p-4 rounded-full ml-5"
               />
               <View className="flex-1">
                  <Text className="text-lg">
                     Gaven D'costa
                  </Text>
                  <Text className="text-gray-400">Your Rider</Text>
               </View>

               <Text className="text-[#00CCBB] text-lg mr-5 fomnt-bold">Call</Text>
            </SafeAreaView>
        </View>
    );

    
}

export default DeliveryScreen;
