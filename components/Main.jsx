import { Text, View, Pressable, TextInput, Image, ActivityIndicator, Platform, Keyboard } from 'react-native';
import { getImages } from '../libs/getImages';
import { useState } from 'react';
import { styles } from '../styles/styles.js';
import { Dropdown } from '../components/Dropdown.jsx'
import { data } from '../libs/models.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as FileSystem from 'expo-file-system';



export function Main() {
  const [text, onChangeText] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("Bad quality");
  const [imgUrl, setImgUrl] = useState("a");
  const [model, setModel] = useState("");
  const [isGenerating, setIgenerating] = useState(false)
  const [storagePermition, setStoragePermition] = useState()
  
  const handleSave = async () => {
    if (imgUrl !== "a") {
      if (Platform.OS === "android") {
        if(storagePermition && storagePermition.granted){
            const base64Code = imgUrl.split("data:image/png;base64,")[1];
            try {
              const directoryUri = storagePermition.directoryUri;
              const fileUri = await FileSystem.StorageAccessFramework.createFileAsync(directoryUri, `${Date.now()}`, "image/png");
              await FileSystem.writeAsStringAsync(fileUri, base64Code, { encoding: FileSystem.EncodingType.Base64 });
              alert(`Image saved to ${fileUri}`);
            } catch (e) {
              console.log(e);
              alert('Error saving image: ' + e.message);
            }
          
        }
        else{
          const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
          if (permissions.granted) {
            setStoragePermition(permissions)
            const base64Code = imgUrl.split("data:image/png;base64,")[1];
            try {
              const directoryUri = permissions.directoryUri;
              const fileUri = await FileSystem.StorageAccessFramework.createFileAsync(directoryUri, `${Date.now()}`, "image/png");
              await FileSystem.writeAsStringAsync(fileUri, base64Code, { encoding: FileSystem.EncodingType.Base64 });
              alert(`Image saved to ${fileUri}`);
            } catch (e) {
              console.log(e);
              alert('Error saving image: ' + e.message);
            }
          }
        }
        
      }
    }
  };
  const handleChange = (item) => {
    setModel(item)
  };
  async function handlePress() {
    if(!model){
      alert("Please select a model")
    }
    else if(!text){
      alert("Please insert a promt")
    }
    else{
      setIgenerating(true)
      Keyboard.dismiss()
      getImages(text, negativePrompt, model, setImgUrl)
      .then(()=> {setIgenerating(false)
      })
      

    }
  }
  return (
      <SafeAreaView>
    <View className="flex justify-center items-center">
      <Text className="font-bold">Prompt</Text>
      <TextInput
        className="border text-center w-[300] items-center p-1 m-1 rounded-full border-gray-400 h-[50]"
        value={text}
        onChangeText={onChangeText}
      />
      <Text className="font-bold">Negative Prompt</Text>
      <TextInput
        className="border text-center w-[300] items-center p-1 m-1 rounded-full border-gray-400 h-[50]"
        value={negativePrompt}
        onChangeText={setNegativePrompt}
      />
      <Text className="font-bold">Model</Text>
      <Dropdown
        className="border w-[80%] border-gray-400 h-[45]"
        data={data}
        onChange={handleChange}
        placeholder="Select a model"
      />
      <Pressable disabled={isGenerating? true:false}
      onPress={handlePress}
      className={`border border-gray-400 p-1 m-1 rounded-full w-32 h-10 items-center justify-center bg-blue-400 ${isGenerating ? 'bg-blue-300 text-gray-300' : ''}`}>
        <Text>Generate Image</Text>
      </Pressable>
      {isGenerating? <View
      style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="green"/>
        <Text style={styles.loadingText}>Generating</Text>
      </View> :<Image
      resizeMode='contain'
      source={{uri:imgUrl}}
      className="w-[350] h-[350] mb-10 mt-2"></Image>}
      {imgUrl !== "a" && !isGenerating && (
        <Pressable
          onPress={handleSave}
          className="border border-gray-400 p-1 m-1 rounded-full w-32 h-10 items-center justify-center bg-green-400"
        >
          <Text>Save</Text>
        </Pressable>
      )}
    </View>
    </SafeAreaView>
    
  );
}