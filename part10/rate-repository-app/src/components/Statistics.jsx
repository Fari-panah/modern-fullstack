import { View, StyleSheet } from "react-native"
import Text from "./Text"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 16,
      
    },
    itemflex: {
        flex: 1,
        alignItems: 'center',
    }
})

const Statistics = ({item}) => {
    return (
        <View style= {styles.container}>
            <View style={styles.itemflex}>
                <Text fontWeight= "bold"> {numbersFormat(item.stargazersCount)}</Text>
                <Text color="textSecondary">Stars</Text>
            </View>
            <View style={styles.itemflex}>
                <Text fontWeight= "bold" > {numbersFormat(item.forksCount)}</Text>
                <Text color="textSecondary">Forks</Text>
            </View>
            <View style={styles.itemflex}>
                <Text fontWeight= "bold"> {numbersFormat(item.reviewCount)}</Text>
                <Text color="textSecondary">Reviews</Text>
            </View>
            <View style={styles.itemflex}>
                <Text fontWeight= "bold"> {numbersFormat(item.ratingAverage)}</Text>
                <Text color="textSecondary" >Rating</Text>
            </View>
        </View>
       
    )

}
const numbersFormat = (number) => {
    if (number >= 1000 ) {
        number = number/1000
        number = number.toFixed(1)
        return number + "k"
    }
    return number 
}
export default Statistics