import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../core/color.enum';

const registerStyles = StyleSheet.create({
  textStyle: {
    fontWeight: '700',
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.6)',
    marginVertical: 12
  },
  headerWrapperStyle: {
    backgroundColor: 'rgba(192, 192, 192, 0.3)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    width: Dimensions.get('window').width - 24
  },
  customDatesStyles: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000',
  },
  customDayHeaderStyles: {
    color: 'silver'
  },
  dayLabelsWrapper: {
    borderTopColor: '#fff'
  },
  myBox: {
    backgroundColor: 'rgba(3, 155, 229, 0.1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'silver',
    padding: 12,
    width: '100%',
    marginTop: 50,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12
  },
  splitColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    alignItems: 'flex-start',
    color: Colors.RED
  },
  button: {
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 10,
    height: 59,
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
    fontWeight: 'bold',
    fontSize: 22
  },
  flexContent: {
    flex: 1,
    alignItems: 'center'
  },
  dayBox: {
    backgroundColor: 'rgba(3, 155, 229, 0.1)',
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    paddingHorizontal: 24
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'silver',
    padding: 12,
    width: '100%',
    height: 100
  }
})

export default registerStyles;