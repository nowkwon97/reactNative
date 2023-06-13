declare module 'react-native-arkit' {
  import { ViewProps } from 'react-native';

  interface ARKitSceneProps extends ViewProps {
    // ARKitScene 컴포넌트의 속성들에 대한 타입 정의
  }

  export class ARKitScene extends React.Component<ARKitSceneProps> {
    // ARKitScene 컴포넌트의 내용에 대한 타입 정의
  }

  // 필요한 다른 컴포넌트들에 대한 타입 정의
}
