import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    //padding: 16,
    flexDirection: 'row',
    //borderWidth: 2,
    borderRadius: 12,
    marginBottom: 30,
  },
  contentContainer: { 
    //marginLeft: 16,
    flex: 1,
    padding: 12,
    backgroundColor: 'lightgrey',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
    marginLeft: 'auto',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: '500',
    color: 'black',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
});

export default styles;
