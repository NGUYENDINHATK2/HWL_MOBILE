import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ?import stack
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthNavigation from './Auth';

//?type
export type RootStackParamList = {
    WelcomeScreen: undefined;
    Auth: undefined;
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;