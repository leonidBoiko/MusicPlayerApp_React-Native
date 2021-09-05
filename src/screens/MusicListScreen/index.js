import React from 'react'
import {FlatList} from 'react-native'
import { DATA } from '../../../data'
import MusicListItem from '../../components/MusicListItem'

const MusicListScreen = () => {
  return (
    <FlatList 
      data={DATA}
      contentContainerStyle={{margin: 10, paddingBottom: 10}}
      keyExtractor={item => item.id}
      renderItem={({item}) => <MusicListItem item={item} />}
    />
  )
}

export default MusicListScreen
