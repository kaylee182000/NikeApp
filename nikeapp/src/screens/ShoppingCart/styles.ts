import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  totalContainer: {
    padding: 12,
    borderColor: 'black',
    borderWidth: 1,
    //backgroundColor: 'lightgray',
    borderRadius: 12,
  },
  commonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  textBold: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  cardContainer: {
    //height: Dimensions.get('screen').height - 200,
    marginBottom: 88,
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical:24
  },
  container: {flex: 1, backgroundColor: 'white'},
});

export default styles;
