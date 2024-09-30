import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/quiz.png')} style={styles.image}/>
      <Text style={styles.title}>Üdvözöllek a React Native Quiz-ben!</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.btnText}>Kezdjük</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#6200ee',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 5,
    alignItems: 'center',
    marginVertical: 10, // Margó a gombok között
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
