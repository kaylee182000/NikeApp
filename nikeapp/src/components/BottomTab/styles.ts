import {StyleSheet} from 'react-native';
import {color} from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    backgroundColor: color.defaultColor3,
    borderRadius: 50,
    height: 60,
    width: 240,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flex: 1,
    height: 30,
    width: 30,
    alignItems: 'center',
    marginHorizontal: 8,
    justifyContent: 'center',
  },
});

export default styles;
