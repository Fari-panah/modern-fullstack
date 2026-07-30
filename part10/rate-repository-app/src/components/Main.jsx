import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
    <AppBar />
    <Routes>
      <Route  path='/'  element={<RepositoryList />}/> 
      <Route path='*' element={<Navigate to='/' replace />}/>
    </Routes>
    <RepositoryList  />
    </View>
  );
};

export default Main;