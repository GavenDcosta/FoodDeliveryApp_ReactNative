import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
            <Animatable.Image
              source = {require("../assets/preparingorder.gif")}
              animation="slideInUp"
              iterationCount={1}
              className="h-96 w-96"
            />

            <Animatable.Text
              animation="slideInUp"
              iterationCount={1}
              className="text-[16px] my-10 text-white font-bold text-center"
            >
                Waiting for Restaurent to accept your order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white" />
        </SafeAreaView>
    );
}

export default PreparingOrderScreen;
