import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
};

const db = SQLite.openDatabase(
  {
    name: 'musicFav.db',
    location: 'default',
  },
  () => console.log('Database opened'),
  err => console.error('Error opening database', err),
);

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Spinner state
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Username dan password tidak boleh kosong!');
      return;
    }

    setLoading(true); // Tampilkan spinner

    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (_, results) => {
          setLoading(false); // Sembunyikan spinner
          console.log('Query results:', results.rows);
          if (results.rows.length > 0) {
            Alert.alert('Success', 'Login berhasil!');
            navigation.navigate('Home');
          } else {
            Alert.alert('Error', 'Username atau password salah.');
          }
        },
        error => {
          setLoading(false); // Sembunyikan spinner
          console.error('Error querying database', error);
        },
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#ff0000" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
