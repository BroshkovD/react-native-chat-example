import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 18
  },
  titleName: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 28
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: '#3f51b5',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  disabledButton: {
    backgroundColor: '#999'
  },
  buttonsContainer: {
    flexDirection: 'row'
  }
})