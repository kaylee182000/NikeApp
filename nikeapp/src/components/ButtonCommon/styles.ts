import {StyleSheet, useWindowDimensions} from 'react-native';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
