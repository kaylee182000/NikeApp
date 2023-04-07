import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 72,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    //marginVertical: 10,
    color: '#000',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 1.5,
    color: '#7f1d1d',
  },
  desc: {
    marginVertical: 16,
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '300',
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default styles;
