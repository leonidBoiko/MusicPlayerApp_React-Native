import React from 'react'
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const INDENT = width * 0.05

const BtnToMusicList = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('MusicList')}
      style={styles.container}>
      <FontAwesome5 color={'#5690A5'} name="list" size={30} />
    </TouchableOpacity>
  )
}

export default BtnToMusicList

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    left: INDENT, 
    top: INDENT, 
    borderRadius: 20, 
    zIndex:1
  }
})
