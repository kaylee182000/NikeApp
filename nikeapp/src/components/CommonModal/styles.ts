import {StyleSheet} from 'react-native';
import {color} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000,
  },
  contentContainer: {
    backgroundColor: color.defaultColor3,
    borderRadius: 12,
    height: 150,
    width: 300,
    justifyContent: 'space-between',
  },
  bodyContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: 'center',
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: color.defaultColor2,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  btnContainer: {
    padding: 12,
  },
  btnText: {
    color: color.defaultColor4,
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: color.defaultColor2,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10,
    color: color.defaultColor4,
  },
});

export default styles;
