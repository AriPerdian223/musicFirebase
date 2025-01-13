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
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan password tidak boleh kosong!');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Login berhasil!');
      navigation.reset({
        index: 0,
        routes: [{name: 'Home' as never}],
      });
      setEmail('');
      setPassword('');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Gagal login!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Login.png')} style={styles.image} />
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register' as never)}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={() => navigation.navigate('LupaPassword' as never)}>
        <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
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
  registerButton: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: 'yellow',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default Login;
