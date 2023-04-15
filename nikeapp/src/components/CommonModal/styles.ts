import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000,
  },
  contentContainer: {
    backgroundColor: 'white',
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
    backgroundColor: '#7f1d1d',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  btnContainer: {
    padding: 12,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 10,
  },
});

export default styles;
