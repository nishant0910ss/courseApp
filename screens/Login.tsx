import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

function Login({ navigation }: { navigation: any }) {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function handleLogin() {
    if (usernameInput === 'a' && passwordInput === 'b') {
      navigation.navigate('HomeTab');
    } else {
      Alert.alert('Incorrect Username or Password');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Welcome back!</Text>
        <Text style={styles.subHeaderText}>Please log in to access your courses and continue your learning journey.</Text>
        
        <Text style={styles.label}>Username:</Text>
        <TextInput
          placeholder="Enter your username"
          style={styles.inputBox}
          onChangeText={setUsernameInput}
        />
        
        <Text style={styles.label}>Password:</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.inputBox}
          onChangeText={setPasswordInput}
          secureTextEntry
        />
        
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Alert.alert('Forgot Password?')} style={styles.link}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  innerContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  inputBox: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#008bf2',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#008bf2',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;
