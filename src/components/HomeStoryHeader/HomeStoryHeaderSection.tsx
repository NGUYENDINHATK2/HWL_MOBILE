import React, { FunctionComponent } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
// ?components

//?type
import { HomeStoryScreenNavigationProps as HomeStoryNavigationProps } from '../../screens/StorySpace/HomeStorySpaceScreen';
import { HomeStoryHeaderProps } from './types';

const HomeStoryHeaderSection: FunctionComponent<HomeStoryHeaderProps> = (props) => {
    const navigation = useNavigation<HomeStoryNavigationProps>();
    return (
        <View>
            <TouchableOpacity onPress={() => {
                // show drawer
               navigation.openDrawer();
            }}>
                <Text>HomeStoryHeaderSection</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeStoryHeaderSection;