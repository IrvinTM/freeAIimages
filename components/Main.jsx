import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import { getImages } from '../libs/getImages';
import { useState } from 'react';
import { styles } from '../styles/styles.js';
import RNPickerSelect from 'react-native-picker-select';




export function Main() {
  const [text, onChangeText] = useState("A nice sunset");
  const [negativePrompt, setNegativePrompt] = useState("Bad quality");
  const [imgUrl, setImgUrl] = useState("https://img.freepik.com/premium-photo/technology-women-women-s-faces-with-textured-skin-women-artificial-intelligence-ai-generated_220166-7250.jpg?w=740");
  
  async function handlePress() {
    getImages(text, negativePrompt, "absolutereality_v181.safetensors [3d9d4d2b]", setImgUrl)
    alert("generating")
  }
  return (
    <View style={styles.app}>
      <Text style={styles.label}>Prompt</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={onChangeText}
      />
      <Text style={styles.label}>Negative Prompt</Text>
      <TextInput
        style={styles.textInput}
        value={negativePrompt}
        onChangeText={setNegativePrompt}
      />
      
      <Pressable style={styles.button} onPress={handlePress}>
        <Text>Generate Image</Text>
      </Pressable>
      <Image style={styles.image} source={{uri:imgUrl}}></Image>
    </View>
    
  );
}