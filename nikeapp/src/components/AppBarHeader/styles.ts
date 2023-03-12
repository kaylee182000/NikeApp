import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 16
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 4
  },
});

export default styles;
