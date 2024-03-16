import React from 'react'
import {
    StyleSheet, 
    View, 
    Image, 
    Text
} from 'react-native'

const Vehicle = ({urlImagen, description, price}) => {
    return(
        <View style= {styles.container}>
        <Image
            source={{uri: urlImagen,}}
            style={styles.img}
        />
        <Text style={styles.title}> {description}</Text>
        <Text style={styles.title}>$ {price}</Text>      
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center'
    },
    title:{
        fontSize: 25,
        color: '#041588',
        textAlign: 'center',
        marginHorizontal: 15,
        marginVertical: 15    
    },
    img:{
        width: 300,
        height: 300
    }
})

export default Vehicle