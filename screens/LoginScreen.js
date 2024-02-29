import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    if (emailAddress.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Email and Password required')
    }
    else {
      navigation.navigate('Home')
    }
  }

  return (
    <View style={{ flex: 1, padding: 10, alignItems: 'center' }}>
      <View>
        <Text style={{ textAlign: 'center', marginBottom: 120, fontSize: 30, fontWeight: 'bold', marginTop: 40, color: 'black' }}>Login Here</Text>
      </View>

      <TextInput onChangeText={(text) => setEmailAddress(text)} style={{ padding: 10, borderWidth: 1, borderColor: 'black', borderRadius: 10, width: '95%', alignSelf: 'center', marginVertical: 10 }} placeholder='Enter Email Address' />

      <TextInput onChangeText={(text) => setPassword(text)} secureTextEntry style={{ padding: 10, borderWidth: 1, borderColor: 'black', borderRadius: 10, width: '95%', alignSelf: 'center', marginVertical: 10 }} placeholder='Enter Password' />

      <TouchableOpacity onPress={() => handleLogin()} style={{ width: '95%', justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5, marginVertical: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Login</Text>
      </TouchableOpacity>



    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})