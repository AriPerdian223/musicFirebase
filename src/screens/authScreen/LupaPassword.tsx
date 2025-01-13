import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {auth} from '../../firebase/config';
import {sendPasswordResetEmail} from 'firebase/auth';

const LupaPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Email tidak boleh kosong!');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Success',
        'Instruksi reset password telah dikirim ke email Anda.',
      );
      setEmail('');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Gagal mengirim email reset!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lupa Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan email Anda"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Get Password</Text>
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
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LupaPassword;
