import { FlatList,TextInput, View, Text, StyleSheet } from 'react-native';

import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput 
          placeholder="What do you want to listen to?"
          placeholderTextColor="gray"
          style={styles.input} 
        />
        <Text style={{color: 'white'}}>Cancel</Text>
      </View>

      <FlatList 
      data={tracks}
  renderItem={({ item }) => <TrackListItem track={item} />}
  showsVerticalScrollIndicator={false}
  /> 
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 0.98,
    backgroundColor: '#121314',
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});