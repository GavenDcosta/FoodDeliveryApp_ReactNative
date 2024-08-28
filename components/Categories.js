import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView  } from 'react-native';

import sanityClient from '../sanity';

import CategoryCard from './CategoryCard';

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
     sanityClient.fetch(
      `
       *[_type == "category"]
      `
     ).then(data => {
      setCategories(data)
     })
  }, []);

    return (
        <ScrollView
          contentContainerStyle={{
            padding:15,
            paddingTop: 10,
          }} 
          horizontal
          showsHorizontalScrollIndicator={false}
        >

            {categories.map(category => (
              <CategoryCard
                key={category._id}
                imgUrl={category.image}
                title={category.name}
              />
            ))}

            {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 1"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 2"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 4"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 5"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 6"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 7"/> */}

        </ScrollView>
    );
}

export default Categories;
