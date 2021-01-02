import { StyleSheet } from 'react-native';
import Login from './../screen/login'
const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: '#039be5',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 37
  },
  imageStyles: {
    width: 175,
    height: 175
  },
  title2: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 6
  },
  touchable:{
    width: 240,
    height: 240,
    marginVertical: 37,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: "rgba(0,0,0,.29)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 16,
  }
})

export default loginStyles
