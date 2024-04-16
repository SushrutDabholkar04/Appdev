import { View, Text,StyleSheet, Alert } from 'react-native'
import {React,useState} from 'react'
import InputBox from '../../components/inputBox';
import SubmitButton from '../../components/SubmitButton';
import axios from 'axios';

const Register = ({navigation}) => {

 
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  

    const handleSubmit=async ()=>{
      try{
      
         if( !email || !password){
         
          return Alert.alert("Please fill all the fields")
         }
         console.log('Register data=',{email,password})
     
         const {data}=await axios.post('http://192.168.1.104:6000/api/user/signup',{ email,password})
        alert(data )
        Alert.alert("Registered successfully");
      }
      catch(error){
        if (error.response && error.response.data && error.response.data.error === "Email already exists") {
          // Handle the specific error case where the email already exists
          return Alert.alert("Email already exists");
        }
      }
    }
  return (
    <View  style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{marginHorizontal:20}}>
       <InputBox inputTitle={"Email"} keyboardType={"email-adress"}  value={email}  setValue={setEmail}/>
       <InputBox inputTitle={"Password"}   secureTextEntry={true}  value={password} setValue={setPassword}/>
       {/* <Text>{JSON.stringify({name,email,password},null,4)}</Text> */}
     
      </View>
      <SubmitButton btnTitle="Register"  handlSubmit={handleSubmit}/>
      <Text style={styles.LinkText}>Already Registered? <Text style={styles.Link} onPress={()=>navigation.navigate("Login")}>LOGIN</Text></Text>
    </View>
  )
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",        
        backgroundColor:"#e1d5c9"
       
    },
    pageTitle:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:20,
    },
    inputBox:{
        height:40,
        marginBottom:20,
        backgroundColor:'#ffffff',
        marginTop:10,
        borderRadius:10,
        paddingLeft:10,
    },
    LinkText:{
     textAlign:'center',
     marginTop:20
    } ,
    Link:{
      color:'red'
    }

})

export default Register