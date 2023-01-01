import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback, Animated } from 'react-native';

function ImageZoom() {
  const [scale, setScale] = useState(new Animated.Value(1));

  const scaleImage = () => {
    Animated.timing(scale, {
      toValue: 1.5,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const resetImage = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPressIn={scaleImage} onPressOut={resetImage}>
        <Animated.View style={[{
          width: 200,
          height: 200,
        }, { transform: [{ scale }] }]}>
          <Image source={{
            uri: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/Asuna-Sword-Art-Online-1.jpg',
          }}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
            }}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default ImageZoom;
