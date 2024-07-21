import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { getImages } from '../libs/getImages';

function handlePress(){
    alert("hola")
}
export function Main() {
  return (
    <View style={styles.app}>
      
      <Pressable style={styles.button} onPress={handlePress}>
  <Text>I'm pressable!</Text>
</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: "#505050",
    borderRadius: 15,
    width: 100,
    height: 50,
  },
  text:{
    textAlign: "center",
  }

});
