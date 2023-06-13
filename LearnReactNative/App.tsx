import React from 'react';
import {Text, View} from 'react-native';
import Test from './componenets/Test1';
import NaverMap from './componenets/NaverMap';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Text>Hello, world!!!</Text>

      <Test /> */}
      <NaverMap />
    </View>
  );
};
export default HelloWorldApp;
