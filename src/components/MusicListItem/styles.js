import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  textWrap: {
    marginLeft: 10,
    padding: 10,
    paddingBottom: 20,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#aaa'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10
  },
  song: {
    fontSize: 20,
    marginBottom: 10
  },
  singer: {
    fontSize: 16
  }
})

export default styles;