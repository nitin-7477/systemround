import { StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

const HomeScreen = ({ route, navigation }) => {
  console.log("xxxxxxxxxx", route.params)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setdata] = useState([])

  useEffect(() => {

    const fetchAllData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();

        if (!route.params?.newItem) {
          setdata(result)
        }
        if (route.params?.newItem) {
          setdata((prev) => [...prev, route.params.newItem])
        }


      }
      catch (e) {
        console.log('Error in fetching the data in Home Screen', e)
      }
      finally {
        setIsLoading(false)
      }
    }

    fetchAllData()
  }, [route.params?.newItem])




  return (

    <View style={{ flex: 1, padding: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate('AddItem')} style={{ width: '95%', justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 5, marginVertical: 10, alignSelf: 'center' }}>
        <Text style={{ color: 'white', fontWeight: "bold" }}>Add New item</Text>
      </TouchableOpacity>
      <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={(item) => item?.id?.toString()} renderItem={({ item, i }) => (
        <View style={{ flex: 1, width: '100%', backgroundColor: 'white', alignSelf: 'center', marginVertical: 5, elevation: 2, padding: 5, borderRadius: 5 }}>
          <Text style={{ color: 'black', fontWeight: 'bold', marginVertical: 5 }}>{item.id}  {item.title}</Text>
          <Text style={{ color: 'grey', fontWeight: '500' }}>{item.body}</Text>
        </View>
      )} />
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({})