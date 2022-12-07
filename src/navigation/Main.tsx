import React, { FunctionComponent } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//?import screens
import StoryNavihation from './Story';
interface Props { }
export type MainDrawerParamList = {
    StoryNavihation: undefined;
};
const Drawer = createDrawerNavigator<MainDrawerParamList>();
const MainNavigation: FunctionComponent<Props> = ({ }) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                options={{
                    headerShown: false,
                    drawerLabel: 'Story Space',
                }}
                name="StoryNavihation" component={StoryNavihation} />
        </Drawer.Navigator>
    )
}

export default MainNavigation;