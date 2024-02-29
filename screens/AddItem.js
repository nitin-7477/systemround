import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const AddItem = () => {
  const navigation = useNavigation()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleAddItem = () => {
    if (title.trim() === '' || body.trim() === '') {
      Alert.alert('Error', 'Title and Description required')
      return
    }
    const newItem = { title: title, body: body }
    navigation.navigate('Home', { newItem })
    setBody('')
    setTitle('')
  }
  return (
    <View style={{ flex: 1, padding: 10, alignItems: 'center' }}>
      <View>
        <Text style={{ textAlign: 'center', marginBottom: 120, fontSize: 30, fontWeight: 'bold', marginTop: 40, color: 'black' }}>Add Item Here</Text>
      </View>

      <TextInput onChangeText={(text) => setTitle(text)} style={{ padding: 10, borderWidth: 1, borderColor: 'black', borderRadius: 10, width: '95%', alignSelf: 'center', marginVertical: 10 }} placeholder='Enter Title' />

      <TextInput onChangeText={(text) => setBody(text)} style={{ padding: 10, borderWidth: 1, borderColor: 'black', borderRadius: 10, width: '95%', alignSelf: 'center', marginVertical: 10 }} placeholder='Enter Description' />

      <TouchableOpacity onPress={() => handleAddItem()} style={{ width: '95%', justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5, marginVertical: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Add Item</Text>
      </TouchableOpacity>



    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({})