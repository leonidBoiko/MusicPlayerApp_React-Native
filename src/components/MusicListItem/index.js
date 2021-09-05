import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'

const MusicListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{uri: item.image}}
      />
      <View style={styles.textWrap}>
        <Text style={styles.song}>{item.song}</Text>
        <Text style={styles.singer}>{item.singer}</Text>
      </View>
    </View>
  )
}
export default MusicListItem
