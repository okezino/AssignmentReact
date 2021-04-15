import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text,View,SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import ListAnimal from './components/ListAnimal'

export default function App() {

  const [animal, setAnimal] = useState();
  const [listAnimals, setListAnimals] = useState([])
  const addAnimal = ()=>{
    setListAnimals([...listAnimals , animal])
    console.log(animal)
  }

  const removeAnimal = ()=>{
    let list = [...listAnimals];
      list.pop
      setListAnimals(list)
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <Text> Alhaji Okezi Zoo List</Text>
      <View>
       {
         listAnimals.map((item, index)=>{
           return <ListAnimal key = {index} text={item}/>
         })
       }
     
      </View>
      
      <View style={styles.viewWrapper}>
        

        <TextInput style ={styles.input} placeholder = {"Add a Pet"} 
        onChangeText = {text => setAnimal(text)} value = {animal}></TextInput>
      
      
      <TouchableOpacity onPress={addAnimal}>
        <View style={styles.addBg}>
            <Text styles ={styles.addText}
            >Add</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={styles.addBg} onPress = {removeAnimal}>
            <Text styles ={styles.addText}
            >Del</Text>
        </View>
      </TouchableOpacity>

      </View>
    
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: "center"   
  },
  input : {
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    borderColor:"black",
    borderWidth:1,
    backgroundColor:'white',
    borderRadius:60

  },
  addBg:{
    backgroundColor:"white",
    width:50,
    height:50,
    borderRadius:50,
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1


  },
  addText:{

  },
  viewWrapper:{
    position:"absolute",
    bottom:60,
    padding:20,
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  }

});
