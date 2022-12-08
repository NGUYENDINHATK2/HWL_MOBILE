import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';
//?import screens
import HomeMusicSpaceScreen from '../screens/MusicSpace/HomeMusicSpaceScreen';

export type StoryBottomParamList = {
    HomeMusic: undefined;
};
//?types
import { IMAGE, GIFJSON } from '../constrain';
import { colors } from '../color';
interface Props { }
const Tab = createBottomTabNavigator<StoryBottomParamList>();
const MusicNavihation: FunctionComponent<Props> = ({ }) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeMusic"
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
                name="HomeMusic" component={HomeMusicSpaceScreen} />
        </Tab.Navigator>
    );
}

export default MusicNavihation;

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