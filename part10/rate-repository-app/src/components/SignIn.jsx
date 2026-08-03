import { useFormik } from "formik"
import * as yup from 'yup'
import { Pressable, TextInput, View, StyleSheet } from "react-native"
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
  inputError: {
    borderColor: '#d73a4a',
  },

  button: {
    backgroundColor: '#0366d6',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  errorText: {
    paddingBottom:18
  }
})
const validationSchema = yup.object().shape({
    username: yup
    .string()
    .min(4, 'username must be at least four letter')
    .required('username is required!!!'),
    password: yup
    .string()
    .min(6, 'password must be greater of six letter')
    .required('password is required!!!')
})
const initialValues = {
    username: '',
    password: ''
}
const SignInForm = ({onSubmit})=> {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })
    return(
        <View style={styles.container}>
                <TextInput
                    style={[styles.input,
                        formik.touched.username &&
                        formik.errors.username &&
                        styles.inputError
                    ]}
                    placeholder="Username"
                    onChangeText={formik.handleChange('username')}
                    value={formik.values.username}
                    onBlur={formik.handleBlur('username')}
                />
                {formik.touched.username && formik.errors.username && (
                    <Text color= "error" style={styles.errorText}>{formik.errors.username}</Text>
                )}

                <TextInput
                    style={[styles.input,
                        formik.touched.password &&
                        formik.errors.password &&
                        styles.inputError
                    ]}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={formik.handleChange('password')}
                    value={formik.values.password}
                    onBlur={formik.handleBlur('password')}
                />
                {formik.touched.password && formik.errors.password && (
                    <Text color= "error" style={styles.errorText}>{formik.errors.password}</Text>
                )}

                <Pressable
                    style={styles.button}
                    onPress={formik.handleSubmit}
                >
                    <Text color="textWhite" fontWeight="bold">
                    Sign in
                    </Text>
                </Pressable>
            </View>
    )


}

const SignIn = ()=> {
    const onSubmit = (values) => {
        console.log(values)
    }
    return <SignInForm onSubmit={onSubmit}/>

}

export default SignIn