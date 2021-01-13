import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  contentContainerStyle: {
    flex: 1,
  },
  flatListStyles: {
    flex: 1,
    width: '100%'
  },
  touchable: {
    flex: 1,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: '#fff',
    marginVertical: 12,
    marginHorizontal: 7
  },
  titleTouchable: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 5
  },
  imageTouchable: {
    height: 130,
    width: 130
  },
  transparent: {
    flex: 1,
    backgroundColor: 'transparent'
  }
})

export default homeStyles
