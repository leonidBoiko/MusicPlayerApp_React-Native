import React from 'react'
import { Text, View, Image, Animated, Dimensions } from 'react-native'
import styles from './styles'

const { width: item_size } = Dimensions.get('window');
const ROTATE_DEG = 60

const HomeListItem = ({item, index, scrollX}) => {
  const inputRange = [
    (index - 1) * item_size,
    index * item_size,
    (index + 1) * item_size
  ]
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5]
  })
  const rotateY = scrollX.interpolate({
    inputRange,
    outputRange: [`-${ROTATE_DEG}deg`, '0deg', `${ROTATE_DEG}deg`]
  })
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [-1, 1, -1]
  })

  return (
    <View style={{width: item_size}}>
      <Animated.View style={
        [styles.container, {transform: [{scale}, {rotateY}]}]
      }>
        <Image
          style={styles.image}
          source={{uri: item.image}}
        />
        <Animated.Text style={[styles.song, {opacity}]}>{item.song}</Animated.Text>
        <Animated.Text style={[styles.singer, {opacity}]}>{item.singer}</Animated.Text>
      </Animated.View>
    </View>
  )
}

export default HomeListItem
