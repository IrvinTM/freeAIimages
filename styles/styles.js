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
    },
    label: {
        height: 25,
        width: '80%',
    },
    image:{
        paddingTop: 10,
        width: 300,
        height:400,
        resizeMode: 'contain',
    },
    picker:{
        marginTop: 20,
        marginBottom: 20,
    }
  });