import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [color, setColor] = useState(null)

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

  const fetchName = async (text) => {
    console.log(text)
    setName(text)
    fetchAge()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lolocar</Text>
      <Text>What's your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="your name"
        onChangeText={fetchName}
        value={name}
      />
      <Text>What's your favorite color?</Text>
      <TextInput
        style={styles.input}
        placeholder="your favotite color"
        onChangeText={setColor}
        value={color}
      />

      {age !== null && name.length >= 4 && color !== null && (
        <Text style={styles.result}>Hola, {name}! Tu nombre tiene {age} años de edad, y tu color favorito es {color}</Text>
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


