// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { ARView } from 'expo-graphics';

// export default function App() {
//   return (
//     <ARView style={{ flex: 1 }} />
//   );
// }

import React from 'react';
import { GLView } from 'expo-gl';
import ExpoTHREE, { AR } from 'expo-three';

export default function App() {
  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new ExpoTHREE.Renderer({ gl });
    renderer.setSize(width, height);

    // AR 초기화
    await AR.initAsync();

    // AR 트래킹 설정
    await AR.setPlaneDetectionAsync(AR.PlaneDetection.Horizontal);

    // AR 카메라 설정
    AR.setCameraTexture(renderer);

    // AR 렌더러 설정
    AR.setRenderer(renderer);

    // 렌더링 로직 작성
    const animate = () => {
      requestAnimationFrame(animate);

      // AR 프레임 업데이트
      AR.updateCamera();

      // Three.js 렌더링 로직 작성
      // ...

      // Three.js 장면 렌더링
      renderer.render(scene, camera);
    };

    animate();
  };

  return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
}
