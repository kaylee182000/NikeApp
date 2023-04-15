import {StyleSheet} from 'react-native';

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
    backgroundColor: 'rgba(0,0,0,0.7)', // black with 50% opacity
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    width: 150,
    height: 'auto',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 8,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
