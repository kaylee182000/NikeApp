import {StyleSheet, useWindowDimensions} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
