import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/9619-loading-dots-in-yellow.json')}
      autoPlay={true}
    />
  );
};

export default Loading;
