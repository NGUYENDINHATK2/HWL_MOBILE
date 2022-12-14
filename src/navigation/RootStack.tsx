import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ?import stack
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthNavigation from './Auth';
import MainNavigation from './Main';
import DetailsStoryScreen from '../screens/StorySpace/DetailsStoryScreen';
//?type
export type RootStackParamList = {
    WelcomeScreen: undefined;
    Auth: undefined;
    Main: undefined;
    DetailsStoryScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();


const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='WelcomeScreen'
            >
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Auth" component={AuthNavigation} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Main" component={MainNavigation} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="DetailsStoryScreen" component={DetailsStoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;