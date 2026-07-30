import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
       
        
    },
    flexContainer: {
        flexDirection: 'row',
        padding: 25,
    },
   
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <View style={styles.flexContainer}>
                    <AppBarTab />
                </View>
            </ScrollView>
        </View>
    )
}
export default AppBar