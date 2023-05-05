import {Dimensions, StyleSheet} from 'react-native';
import {color} from '../../constants';

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.defaultColor3,
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.defaultColor2,
    marginLeft: 4,
  },
});

export default styles;
