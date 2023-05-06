import {StyleSheet} from 'react-native';
import {color} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.defaultColor4,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
  bottomContainer: {
    marginTop: 40,
  },
});

export default styles;
