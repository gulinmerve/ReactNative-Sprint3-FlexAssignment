import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TextInput, TouchableOpacity,textContentType,
} from 'react-native';
const App = () =>  {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image source={require("./images/shopping.png")}
        style={{width:150,height:150}}/>
        </View>
        <View style={{}}>
        <TextInput style={styles.InputContainer} placeholderTextColor={'gray'} placeholder="E-posta giriniz.." keyboardType="email-address"/>
        <TextInput style={styles.InputContainer} placeholderTextColor={'gray'} secureTextEntry={true} placeholder="Sifre giriniz" keyboardType="number-pad"/>
        </View>
        <View style={{alignItems:"center",marginTop:10}}>
          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.textContainer}>Giris Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.textContainer}>Kayıt ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#80CBC4",
    // justifyContent:"center",
  },
  InputContainer:{
    padding:15,
    marginRight:15,
    marginLeft:15,
    marginTop:35,
    borderRadius:10,
    borderWidth:1,
    backgroundColor:"white",  
    fontSize:15,
    fontFamily:"Arial",
    borderColor:"white"
  },
  ButtonContainer:{
    backgroundColor:"#546E7A",
    margin:10,
    borderRadius:5,
    textAlign:"center",
    padding:15,
  },
  imageContainer:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20,
    marginTop:80
  },
  textContainer:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold",
    width:180,
  }
});
export default App;