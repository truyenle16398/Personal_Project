import { StyleSheet } from 'react-native';
import { Colors } from '../core/color.enum';

const notificationStyles = StyleSheet.create({
  notiItem: {
    backgroundColor: 'rgba(3, 155, 229,0.2)',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12
  },
  title: {
    color: Colors.BLUE,
    fontWeight: '700',
    fontSize: 16 ,
    marginBottom: 4
  },
  shortDescription: {
    fontWeight: '400',
    color: Colors.TEXTCOLOR,
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 4
  },
  time: {
    fontWeight: '400',
    color: Colors.GREEN,
    fontSize: 14,
    alignSelf: 'flex-end'
  }
})

export default notificationStyles