import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './components/MainComponent'
import { StyleSheet, Text, View } from 'react-native';

console.disableYellowBox = true; // Yellow Warnings DISABLED

export default function App() {
    return(
      <Main />
      
    );
}