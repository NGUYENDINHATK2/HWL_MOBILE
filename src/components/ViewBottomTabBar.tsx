import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
interface Props { }

const ViewBottomTabBar: FunctionComponent<Props> = ({ }) => {
    const heightBottomTabBar = useBottomTabBarHeight();
    return (
        <View
            style={{
                height: heightBottomTabBar,
            }}
        />
    );
}

export default ViewBottomTabBar;