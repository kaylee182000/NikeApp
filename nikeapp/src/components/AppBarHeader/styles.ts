import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7f1d1d',
    padding: 16
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 4,
  },
});

export default styles;
