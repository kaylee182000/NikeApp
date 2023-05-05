import {StyleSheet} from 'react-native';
import {color} from '../../constants';

const styles = StyleSheet.create({
  contanier: {
    width: '50%',
    padding: 8,
    backgroundColor: color.lightGray,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 15,
  },
  textName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
});

export default styles;
