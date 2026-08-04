import { FlatList, View, StyleSheet } from "react-native"
import useRepositories from "../hooks/useRepositories"
import RepositoryIteme from './RepositoryItem'
import theme from "../theme"


    const styles = StyleSheet.create({
        separator: {
            height: 10,
            backgroundColor: theme.colors.sepratecolor
        }
    })


   
const ItemSeparator = () => <View  style={styles.separator}/>
const RepositoryList = () =>{
  const {repositories} = useRepositories()
  
  const repositortNodes = repositories ? repositories.edges.map(edge => edge.node): []
    return(
        <FlatList 
            data={repositortNodes}
            renderItem={({item}) => <RepositoryIteme item= {item}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}

        />
    )
}

export default RepositoryList