import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props { }

const BottomDrawerComponent: FunctionComponent<Props> = ({ }) => {
    return (
        <View style={stylesBottom.container} >
            {/* //? logout */}
       
        </View>
    );
}

export default BottomDrawerComponent;
const stylesBottom = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },

})