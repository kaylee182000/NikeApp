import {StyleSheet} from 'react-native';
import {color} from '../../constants';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: color.defaultColor4,
    marginBottom: 72,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    //marginVertical: 10,
    color: color.defaultColor3,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 1.5,
    color: color.defaultColor2,
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
    backgroundColor: color.defaultColor4,
  },
  image: {
    aspectRatio: 1,
  },
});

export default styles;
