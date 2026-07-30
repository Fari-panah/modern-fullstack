import { Link } from 'react-router-native'
import { StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
     tab: {
          marginRight: 20,

     }
})

const AppBarTab = () => {
     return(
          <>

          <Link to={"/"} style={styles.tab}>
               <Text color="textWhite" fontWeight="bold">Repositories</Text>
          </Link>
          <Link to={"/signin"}>
               <Text color="textWhite" fontWeight="bold">Sign In</Text>

          </Link>
          </>
     )
}

    
export default AppBarTab