import { Link } from 'react-router-native'
import Text from './Text'

const AppBarTab = () => {
     return(
          <>

          <Link to={"/"}>
               <Text color="textWhite" fontWeight="bold">Repositories</Text>
          </Link>
          <Link to={"/signin"}>
               <Text color="textWhite" fontWeight="bold">Sign In</Text>

          </Link>
          </>
     )
}
 {/* <Text color="textWhite" fontWeight="bold">Repositories</Text>*/} 
 
    
export default AppBarTab