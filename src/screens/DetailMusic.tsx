import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

type RouteParams = {
  params: {
    music: {
      title: string;
      artist: string;
      album: string;
      genre: string;
      releaseDate: string;
      explicitContent: string;
      imageUrl: string;
    };
  };
};

export default function DetailMusic() {
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const {music} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Image source={{uri: music.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{music.title}</Text>
        <Text style={styles.text}>
          Artist: <Text style={styles.value}>{music.artist}</Text>
        </Text>
        <Text style={styles.text}>
          Album/Single: <Text style={styles.value}>{music.album}</Text>
        </Text>
        <Text style={styles.text}>
          Genre: <Text style={styles.value}>{music.genre}</Text>
        </Text>
        <Text style={styles.text}>
          Release Date: <Text style={styles.value}>{music.releaseDate}</Text>
        </Text>
        <Text style={styles.text}>
          Explicit Content:{' '}
          <Text style={styles.value}>{music.explicitContent}</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#444',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 10,
    marginBottom: 35,
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
