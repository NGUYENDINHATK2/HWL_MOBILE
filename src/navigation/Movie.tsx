import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';
//?import screens
import HomeMovideSpaceScreen from '../screens/MovieSpace/HomeMovideSpaceScreen';

export type StoryBottomParamList = {
    HomeMovie: undefined;
};
//?types
import { IMAGE, GIFJSON } from '../constrain';
import { colors } from '../color';
interface Props { }
const Tab = createBottomTabNavigator<StoryBottomParamList>();
const MovieNavihation: FunctionComponent<Props> = ({ }) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeMovie"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: colors.lightGalaxy,
                    position: 'absolute',
                    paddingVertical: 0,
                    height: 50,
                    alignItems: 'center',
                },
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: '#fff',
                tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.15)',
                tabBarInactiveBackgroundColor: 'rgba(255, 255, 255, 0.05)',
                tabBarShowLabel: false,
                tabBarLabelStyle: { fontWeight: 'bold' },
                tabBarAccessibilityLabel: 'hide lable when Inactive',
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <LottieView
                            source={GIFJSON.IconHome}
                            autoPlay
                            loop
                            style={[styles.homeSizeIcon]}
                            speed={0.4}
                        />
                    ),
                }}
                name="HomeMovie" component={HomeMovideSpaceScreen} />
        </Tab.Navigator>
    );
}

export default MovieNavihation;

const styles = StyleSheet.create({
    homeSizeIcon: {
        width: 35,
        height: 35,
    },
    sizeIcon: {
        width: 30,
        height: 30,
    }
})