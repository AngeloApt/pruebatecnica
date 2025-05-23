import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  const fetchAge = async () => {
    if (!name) return;
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);
    } catch (error) {
      console.error('Error al conectar con la API:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        onChangeText={setName}
        value={name}
      />
      <Button title="Consultar edad" onPress={fetchAge} />
      {age !== null && (
        <Text style={styles.result}>Edad estimada: {age} años</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});


