import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/config';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan password tidak boleh kosong!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Registrasi berhasil!');
      navigation.navigate('Login' as never);
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Gagal registrasi!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Register.png')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login' as never)}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    marginBottom: 20,
    height: 60,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginButton: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Register;
