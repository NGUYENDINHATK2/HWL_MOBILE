import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';
//?import screens
import HomeStorySpaceScreen from '../screens/StorySpace/HomeStorySpaceScreen';
import SearchStoryScreen from '../screens/StorySpace/SearchStoryScreen';
import FavoriteStoryScreen from '../screens/StorySpace/FavoriteStoryScreen';
export type StoryBottomParamList = {
    HomeStory: undefined;
    SearchStory: undefined;
    FavoriteStory: undefined;
};
//?types
import { IMAGE, GIFJSON } from '../constrain';
import { colors } from '../color';
interface Props { }
const Tab = createBottomTabNavigator<StoryBottomParamList>();
const StoryNavihation: FunctionComponent<Props> = ({ }) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStory"
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
                name="HomeStory" component={HomeStorySpaceScreen} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Favorite',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={IMAGE.Search}
                            style={[styles.sizeIcon]}
                        />
                    ),
                }}
                name="SearchStory" component={SearchStoryScreen} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Favorite',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={IMAGE.Star}
                            style={[styles.sizeIcon]}
                        />
                    ),
                }}
                name="FavoriteStory" component={FavoriteStoryScreen} />

        </Tab.Navigator>
    );
}

export default StoryNavihation;

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