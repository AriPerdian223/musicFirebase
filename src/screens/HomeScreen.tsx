import React, {useEffect, useState} from 'react';
import {View, FlatList, Button, StyleSheet, Image} from 'react-native';
import MusicItem from '../components/MusicItem';
import {getMusicList, deleteMusic} from '../api/MusicApi';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type Music = {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseDate: string;
  explicitContent: string;
  imageUrl: string;
};

type MusicStackParamList = {
  Home: undefined;
  AddMusic: undefined;
  EditMusic: {id: string};
  DetailMusic: {music: Music};
};

export default function HomeScreen() {
  const [musicList, setMusicList] = useState<Music[]>([]);
  const navigation = useNavigation<StackNavigationProp<MusicStackParamList>>();
  const isFocused = useIsFocused();

  const fetchMusicList = async () => {
    const response = await getMusicList();
    setMusicList(response.data);
  };

  // Refresh music list when the screen is focused
  useEffect(() => {
    if (isFocused) {
      fetchMusicList();
    }
  }, [isFocused]);

  const handleDelete = async (id: string) => {
    await deleteMusic(id);
    fetchMusicList();
  };

  const renderItem = ({item}: {item: Music}) => (
    <MusicItem
      music={item}
      onDelete={() => handleDelete(item.id)}
      onEdit={() => navigation.navigate('EditMusic', {id: item.id})}
      onPress={() => navigation.navigate('DetailMusic', {music: item})}
    />
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/urMusic.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Button
        title="Tambah Music"
        onPress={() => navigation.navigate('AddMusic')}
        color="#32cd32"
      />
      <FlatList
        data={musicList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 5,
  },
});
