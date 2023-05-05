import {StyleSheet} from 'react-native';
import {color} from '../../constants';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: color.defaultColor3,
    borderRadius: 50,
    padding: 20,
  },
  buttonText: {
    color: color.defaultColor4,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
