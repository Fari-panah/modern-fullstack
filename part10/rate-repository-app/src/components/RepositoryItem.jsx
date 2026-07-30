import { View, StyleSheet} from "react-native"
import ItemsHeader from "./ItemsHeader"
import Statistics from "./Statistics"

const styles = StyleSheet.create({
    container: {
        padding:10
    }
})

const RepositoryItem = ({item}) => {
    return(
        <>
         <View style={styles.container}>
            <ItemsHeader item ={item}/>
         </View>
         <View>
            <Statistics item={item} />
         </View>
        </>
      
    )

}

export default RepositoryItem