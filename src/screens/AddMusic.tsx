import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {addMusic} from '../api/MusicApi';

export default function AddMusic() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [explicitContent, setExplicitContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigation = useNavigation();

  const handleAddMusic = async () => {
    const newMusic = {
      title,
      artist,
      album,
      genre,
      releaseDate,
      explicitContent,
      imageUrl,
    };
    await addMusic(newMusic);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={require('../assets/addUrMusic.jpg')} style={styles.logo} />
      <TextInput
        placeholder="URL Gambar"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={styles.input}
        placeholderTextColor={'#ddd'}
      />
      <TextInput
        placeholder="Judul Lagu"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholderTextColor={'#ddd'}
      />
      <TextInput
        placeholder="Artist"
        value={artist}
        onChangeText={setArtist}
        style={styles.input}
        placeholderTextColor={'#ddd'}
      />
      <TextInput
        placeholder="Album/Single"
        value={album}
        onChangeText={setAlbum}
        style={styles.input}
        placeholderTextColor={'#ddd'}
      />
      <TextInput
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
        style={styles.input}
        placeholderTextColor={'#ddd'}
      />
      <TextInput
        placeholder="Release Date"
        value={releaseDate}
        onChangeText={setReleaseDate}
        style={styles.input}
        placeholderTextColor={'#ddd'}
      />
      <TextInput
        placeholder="Explicit Content"
        value={explicitContent}
        onChangeText={setExplicitContent}
        style={styles.input}
        placeholderTextColor={'#ddd'}
      />
      <Button title="Add" onPress={handleAddMusic} color="#ff3d3d" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 75,
    alignSelf: 'center',
    marginBottom: 100,
    resizeMode: 'contain',
  },
  input: {
    backgroundColor: '#444',
    color: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
