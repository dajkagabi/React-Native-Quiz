
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import questions from "../data/questions.json";

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  if (isQuizFinished) {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>A pontszámod: {score}/{questions.length}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setCurrentQuestion(0);
            setScore(0);
            setIsQuizFinished(false);
          }}
        >
          <Text style={styles.btnText}>Újrakezdés</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <Text style={styles.question}>{questions[currentQuestion].question}</Text>
    {questions[currentQuestion].answers.map((answer, index) => (
      <TouchableOpacity
        style={styles.btn}
        key={index}
        onPress={() => handleAnswer(answer.isCorrect)}
      >
        <Text style={styles.btnText}>{answer.text ? String(answer.text) : 'Nincs válasz'}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#6200ee', 
    borderRadius: 10, 
    paddingVertical: 12,
    paddingHorizontal: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 5, 
    alignItems: 'center', 
    marginVertical: 5,
  },
  btnText: {
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});


