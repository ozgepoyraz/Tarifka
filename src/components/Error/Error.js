import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Error = () => {
  return (
    <AnimatedLottieView
      style={{marginBottom: 50}}
      source={require('../../assets/9195-error.json')}
      autoPlay={true}
    />
  );
};

export default Error;
