import { StyleSheet } from 'react-native';
import { Colors } from './color.enum';

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12
  },
  myShadow: {
    shadowColor: "rgba(0,0,0,.29)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 12,
  },
  titleHeader: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.TEXTCOLOR,
    textAlign: 'center'
  },
  containerHeader: {
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: 'silver',
    borderBottomWidth: 1
  },
})

export default mainStyles