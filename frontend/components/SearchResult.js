import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const SearchResult = ({results}) => {
  return (
    <View style={styles.Results} >
       {results.map((result,id)=>{
        return <Text key={id}>{result.companyName}</Text>
       })}
    </View>
  )
}

const styles=StyleSheet.create({
 
    Results:{
        width:100,
        backgroundColor:'#ffffff',
        display:'flex',
        flexDirection:'column',
        borderRadius:10,
        marginTop:1,
        maxHeight:300,
         overflow:'scroll'



    }

})



export default SearchResult