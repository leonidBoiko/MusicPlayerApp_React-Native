import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 20,
  },
  image: {
    borderRadius: 40,
    width: '100%',
    height: 300,
    marginBottom: 20,
    // resizeMode: 'stretch'
  },
  song: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24
  },
  singer: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  }
})

export default styles

