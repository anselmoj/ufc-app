import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Toast, {ToastOptions} from 'react-native-root-toast';

function getToastConfig(backgroundColor: string): ToastOptions {
  return {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP + getStatusBarHeight(),
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor,
  };
}

export default getToastConfig;
