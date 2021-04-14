import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const ListAnimal = (props) =>{
return(
    <View style={styles.item}>
        <Text>
        {props.text}
        </Text>

    </View>
)
}

const styles = StyleSheet.create({
    item : {
        backgroundColor:"white",
        width: 300,
        paddingVertical: 15,
        alignItems:"center",
        borderRadius:12,
        borderWidth:1,

    }
}

)

export default ListAnimal;