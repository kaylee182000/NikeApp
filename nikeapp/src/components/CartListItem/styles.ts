import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: "space-between"
  },
  contentContainer: { 
    marginLeft: 16,
    flex: 1,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  name: {
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
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontSize: 16,

    color: 'gray',
  },
});

export default styles;
