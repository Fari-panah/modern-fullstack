
import { Image,View, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
       alignItems: 'flex-start',
    },
    image: {
        width: 66,
        height: 66,
        padding: 7,
        borderRadius: 7
    },
    languageContainer:{
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: 'flex-start',

    },
    textItems: {
        flex: 1,
        marginLeft: 12,
        gap: 8,
        paddingTop:8
    },
    text: {
        color: theme.colors.textWhite
    }

})
const ItemsHeader = ({item}) => {
    return (
        <View style={styles.container}>
            <Image style= {styles.image} source={{uri: item.ownerAvatarUrl}}/>
            <View style={styles.textItems}>
                <Text fontWeight= "bold">{item.fullName}</Text>
                <Text color="textSecondary" >{item.description}</Text>
                <View style={styles.languageContainer}>
                    <Text style={styles.text}>{item.language}</Text>
                </View>
                
            </View>
        </View>
    )
}

export default ItemsHeader

