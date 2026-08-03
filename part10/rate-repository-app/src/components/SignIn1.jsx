import { Pressable, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import Text  from './Text'


const styles = StyleSheet.create({
  container: {
   
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 16,
    marginBottom: 16,
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#0366d6',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
});

const SignIn = () => {
    return(
        <Formik
            initialValues= {{username: '', password: ''}}
             onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
         
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={handleChange('username')}
                    value={values.username}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    value={values.password}
                />

                <Pressable
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text color="textWhite" fontWeight="bold">
                    Sign in
                    </Text>
                </Pressable>
            </View>
        )}
        </Formik>
    )
}
   

export default SignIn
