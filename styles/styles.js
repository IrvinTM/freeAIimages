import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    app: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      
    },
    textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      width: '80%',
    },
    button: {
      backgroundColor: '#FF7BFF',
      width: 150,
      height: 40,
      padding: 2,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginBottom:10,
      marginTop: 50,
    },
    label: {
        height: 25,
        width: '80%',
    },
    image:{
        resizeMode: 'contain',
    },
    picker:{
        width: '80%',
        height: '10%'
    },

    loadingContainer:{
      position: 'relative',
    left: 0,
    right: 0,
    top: 200,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
      
    },
    loadingText:{
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "black",

    }
  });