import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

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

type MusicItemProps = {
  music: Music;
  onDelete: () => void;
  onEdit: () => void;
  onPress: () => void;
};

export default function MusicItem({
  music,
  onDelete,
  onEdit,
  onPress,
}: MusicItemProps) {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={onPress}
      testID="MusicItem-Touchable" // Added testID for testing purposes
    >
      <Image source={{uri: music.imageUrl}} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{music.title}</Text>
        <Text style={styles.subtitle}>Artist: {music.artist}</Text>
        <Text style={styles.subtitle}>Album/Single: {music.album}</Text>
        <Text style={styles.subtitle}>Genre: {music.genre}</Text>
        <Text style={styles.subtitle}>Release Date: {music.releaseDate}</Text>
        <Text style={styles.subtitle}>
          Explicit Content: {music.explicitContent}
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Hapus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  thumbnail: {
    width: 110,
    height: 130,
    borderRadius: 5,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ddd',
  },
  buttons: {
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: '#ff3d3d',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    elevation: 2,
  },
  editButton: {
    backgroundColor: '#32cd32',
    padding: 5,
    borderRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
