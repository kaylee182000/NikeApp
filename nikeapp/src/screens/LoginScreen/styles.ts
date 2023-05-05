import {StyleSheet} from 'react-native';
import {color} from '../../constants';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {flex: 1, resizeMode: 'cover'},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)', // black with 50% opacity
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    width: 150,
    height: 60,
    padding: 16,
    backgroundColor: color.defaultColor2,
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 8,
  },
  btnText: {
    color: color.defaultColor4,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  textCommon: {
    fontSize: 16,
    color: color.defaultColor4,
    fontWeight: 'bold',
  },
});

export default styles;
