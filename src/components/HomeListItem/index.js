import React from 'react'
import { View, Image, Animated, Dimensions } from 'react-native'
import styles from './styles'

const { width } = Dimensions.get('window');
const ROTATE_DEG = 80

const HomeListItem = ({item, index, scrollX}) => {
  const inputRange = [
    (index - 1) * width,
    index * width,
    (index + 1) * width
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
    <View style={{width: width}}>
      <Animated.View style={
        [styles.container, {transform: [{scale}, {rotateY}]}]
      }>
        <Image
          style={styles.image}
          source={item.image}
        />
        <Animated.Text style={[styles.song, {opacity}]}>{item.song}</Animated.Text>
        <Animated.Text style={[styles.singer, {opacity}]}>{item.singer}</Animated.Text>
      </Animated.View>
    </View>
  )
}

export default HomeListItem
