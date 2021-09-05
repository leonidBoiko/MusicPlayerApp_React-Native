import React from 'react'
import { StyleSheet, Animated, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {DATA} from '../../../data'
import HomeListItem from '../../components/HomeListItem'

const { width: item_size } = Dimensions.get('window');

const HomeScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  const [activeIndex, setActiveIndex] = React.useState(null)

  React.useEffect(() => {
    setActiveIndex(Math.floor(Math.random() * DATA.length - 1));
  }, [])

  return (
    <LinearGradient colors={['#FDE9FF', '#5690A5']} style={{flex: 1}}>
      <Animated.FlatList
        initialScrollIndex={activeIndex}
        contentContainerStyle={styles.container}
        disableIntervalMomentum={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={item_size}
        decelerationRate={0}
        bounces={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => <HomeListItem {...{scrollX, item, index}} />}
        data={DATA} 
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true}
        )}
      />
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})
