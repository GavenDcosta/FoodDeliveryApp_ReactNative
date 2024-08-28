import React, {useEffect, useState} from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ArrowRightIcon } from "react-native-heroicons/outline";

import RestaurentCard from './RestaurentCard';

import sanityClient from '../sanity';


const FeaturedRow = ({ id, title, description }) => {

  const [restaurents, setRestaurents] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurents[]->{
            ...,
            dishes[]->,
            type-> {
               name
            }
          },
        }[0]
      `, { id }    // {id: id}
    ).then(data => {
      setRestaurents(data?.restaurents) 
    })
  }, []);

  console.log(restaurents)

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB"/>
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
              horizontal
              contentContainerStyle={{
                paddingHorizontal:15,
              }}
              showsHorizontalScrollIndicator={false}
              className="pt-4"
            >
               {/* Restaurent Cards */}

               {restaurents?.map((restaurent) => (
                 <RestaurentCard
                    key={restaurent._id}
                    id={restaurent._id}
                    imgUrl={restaurent.image}
                    title={restaurent.title}
                    rating={restaurent.rating}
                    genre={restaurent.type?.name}
                    address={restaurent.address}
                    short_description={restaurent.short_description}
                    dishes={restaurent.dishes}
                    long={restaurent.long}
                    lat={restaurent.lat}
                 />                     
               ))}

               {/* <RestaurentCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"J
                    address="123 Main Street"
                    short_description="This is a Shushi Restaurent"
                    dishes={[]}
                    long={20}
                    lat={0}
               />
               <RestaurentCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"J
                    address="123 Main Street"
                    short_description="This is a Shushi Restaurent"
                    dishes={[]}
                    long={20}
                    lat={0}
               />
               <RestaurentCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main Street"
                    short_description="This is a Shushi Restaurent"
                    dishes={[]}
                    long={20}
                    lat={0}
               /> */}

            </ScrollView>
        </View>
    );
}

export default FeaturedRow;
