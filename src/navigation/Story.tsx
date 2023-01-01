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
                    backgroundColor: colors.violetDark,
                    position: 'absolute',
                    paddingVertical: 0,
                    height: 50,
                    alignItems: 'center',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
                tabBarLabelStyle: { fontWeight: 'bold' },
                tabBarAccessibilityLabel: 'hide lable when Inactive',
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <LottieView
                            source={GIFJSON.IconHomeActive}
                            autoPlay={focused}
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
                    tabBarIcon: ({ color, size, focused }) => (
                        <LottieView
                            source={
                                focused ? GIFJSON.Search:GIFJSON.IconSearchInactived
                            }
                            autoPlay={focused}
                            loop
                            style={{
                                width: 80,
                                height: 80,
                            }}
                            speed={0.5}
                        />
                    ),
                }}
                name="SearchStory" component={SearchStoryScreen} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Favorite',
                    tabBarIcon: ({ color, size, focused }) => (
                        <LottieView
                            source={GIFJSON.IconStack}
                            autoPlay={focused}
                            loop
                            style={{
                                width: 60,
                                height: 60,
                            }}
                            speed={0.8}
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
        width: 25,
        height: 25,
    }
})