import React, { FunctionComponent } from 'react';
import { useWindowDimensions } from 'react-native'
import { View, Text } from 'react-native';
import LotteView from 'lottie-react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//?import screens
import StoryNavihation from './Story';
import MovieNavihation from './Movie';
import MusicNavihation from './Music';
import BottomDrawerComponent from '../components/MenuDrawer/BottomDrawerComponent';
import HeaderDrawerComponent from '../components/MenuDrawer/HeaderDrawerComponent';
//?type
import { colors } from '../color'
import { GIFJSON } from '../constrain'
interface Props { }
export type MainDrawerParamList = {
    StoryNavihation: undefined;
    MovieNavihation: undefined;
    MusicNavihation: undefined;
};
const Drawer = createDrawerNavigator<MainDrawerParamList>();
const MainNavigation: FunctionComponent<Props> = (props) => {
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator
            backBehavior='firstRoute'
            screenOptions={{
                drawerStyle: {
                    width: dimensions.width >= 768 ? 300 : dimensions.width * 0.7,
                    backgroundColor: colors.darkGalaxy,
                },
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
                drawerActiveBackgroundColor: colors.violetDark,
                drawerActiveTintColor: colors.pinkPastel,
                drawerInactiveTintColor: colors.white,
                swipeEnabled: false,
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerLabel: 'Story Space',
                    drawerIcon: ({ focused, color, size }) => focused ?
                        <View>
                            <LotteView
                                source={GIFJSON.OpenBook}
                                autoPlay
                                loop={true}
                                style={{ width: 35, height: 35 }}
                                speed={0.5}
                            />
                        </View>
                        : null
                }}
                name="StoryNavihation" component={StoryNavihation} />
            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerLabel: 'Movie Space',
                    drawerIcon: ({ focused, color, size }) => focused ?
                        <View>
                            <LotteView
                                source={GIFJSON.Movie}
                                autoPlay
                                loop={true}
                                style={{ width: 35, height: 20 }}
                                speed={0.5}
                            />
                        </View>
                        : null
                }}
                name="MovieNavihation" component={MovieNavihation} />
            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerLabel: 'Music Space',
                    drawerIcon: ({ focused, color, size }) => focused ?
                        <View>
                            <LotteView
                                source={GIFJSON.Music}
                                autoPlay
                                loop={true}
                                style={{ width: 35, height: 35 }}
                                speed={0.5}
                            />
                        </View>
                        : null
                }}
                name="MusicNavihation" component={MusicNavihation} />
        </Drawer.Navigator>
    )
}

export default MainNavigation;


const CustomDrawer = (props: any) => {
    // const {setIndex} = props;
    // React.useEffect(() => {
    //     setIndex(props.state.index);
    // }, [props.state.index])
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                contentContainerStyle={{ paddingTop: 0 }}
                {...props}>
                <HeaderDrawerComponent />
                <DrawerItemList {...props} />
                <BottomDrawerComponent />
            </DrawerContentScrollView>
        </View>
    )
}