import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    paddingVertical: 37,
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  title: {
    color: '#039be5',
    fontSize: 30,
    fontWeight: '700'
  },
  imageRoles: {
    width: 175,
    height: 175
  },
  imageLogo: {
    width: 175,
    height: 56,
    marginBottom: 37
  },
  title2: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 6
  },
  description: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 40
  },
  touchable: {
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#fff',
    marginVertical: 37,
  },
  myRow: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 16,
  },
  myIcons: {
    borderRightWidth: 1,
    borderRightColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center'
  },
  myInput: {
    marginLeft: 5,
    marginVertical: 4,
    flex: 1
  },
  myButton: {
    marginVertical: 20,
    height: 46,
    width: 183,
    borderRadius: 50,
    backgroundColor: '#039be5',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  titleButton: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  loginComponent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  hotline: {
    fontSize: 16,
    fontWeight: '700',
    alignItems: 'flex-end',
    marginTop: 20
  }
})

export default loginStyles
