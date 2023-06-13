import React, {useEffect} from 'react';
import { View, WebView, WebViewMessageEvent } from 'react-native-webview';

const NaverMap = () => {
  useEffect(() => {
    const script = `
      var mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
      };

      var map = new naver.maps.Map('map', {
        ...mapOptions,
        clientId: 'm923je25uq', // 네이버 맵 API 키를 입력하세요
      });
    `;
    const injectedJavaScript = `window.onload = function() {${script}};`;

    return () => {
      const cleanupScript = `
        var mapElement = document.getElementById('map');
        mapElement.innerHTML = '';
      `;
      const cleanupInjectedJavaScript = `window.onload = function() {${cleanupScript}};`;

      return cleanupInjectedJavaScript;
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ html: `<div id="map" style="width:100%;height:400px;"></div>` }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
      />
    </View>
  );
};

export default NaverMap;
