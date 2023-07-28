import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Font from 'expo-font';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import { useLayoutEffect } from 'react';

import WorkoutModal from './WorkoutModal';


function IconF(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number; // Add the size property as a number
}) {
  const { name, color, size } = props;

  return <FontAwesome name={name} size={size} color={color} style={{ marginBottom: 0 }} />;
}

// Create a shared styles object
const sharedStyles = {
  // fontFamily: 'Virgil',
};

export default function workoutPage() {
  const theme = useTheme(); // Get the current theme from ThemeProvider

  const [modalVisible, setModalVisible] = useState(false);
  const [workoutData, setWorkoutData] = useState({ sets: '', title: '' });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleWorkoutDataSubmit = (data) => {
    // Update the workoutData state with the user's input
    setWorkoutData(data);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background, marginTop:60}]}>
      <View style={{flexDirection:'row', backgroundColor:theme.colors.background, alignItems:'center'}}>
        <TextInput style={[sharedStyles, styles.title, {color:theme.colors.text, fontSize:34}]}>WORKOUT</TextInput>
        <View style={{marginLeft:15}}>
          <FontAwesome name="edit" color={theme.colors.text} size={25}/>
        </View>
      </View>
      <Text style={[sharedStyles, styles.title, {fontSize:15}]}>00:55:47</Text>

      <View style={{padding:12,width:'100%',height:'100%', marginTop:40,backgroundColor:theme.colors.background, alignItems:'center',}}>


        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:theme.colors.background}}>
          <View style={{flexDirection:'row', backgroundColor:theme.colors.background}}>
          <View style={{width:30, height:25,backgroundColor:theme.colors.background, borderWidth:2, borderRadius:5,justifyContent: 'center', alignItems: 'center', borderColor:theme.colors.text}}>
            <FontAwesome name="ellipsis-h" size={20} color={theme.colors.text} />
          </View>

            <Text style={styles.WorkoutTitle}>DUMBBELL BENCH PRESS.</Text>
          </View>
        </View>

        <View style={{width:'100%', minHeight:120, backgroundColor:theme.colors.background, borderRadius:15,borderWidth:2,borderColor:theme.colors.text}}>
          {/*  */}
        </View>
          <TouchableOpacity onPress={toggleModal} style={[styles.mainButton, { backgroundColor: theme.colors.card }]}>
          <Text style={[sharedStyles, { color: theme.colors.text, fontSize: 28, fontWeight: '600' }]}>START LIFTING</Text>
         </TouchableOpacity>

        {/* ... (existing code) */}

        {/* Pass the visibility state and callback function to the modal */}
        <View style={{width:'100%'}}>
          <WorkoutModal
            visible={modalVisible}
            onClose={toggleModal}
            onSubmit={handleWorkoutDataSubmit}
          />

        </View>

      </View>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
    marginTop: 20,
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Virgil',
  },
  separator: {
    color:'black',
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
  mainButton: {
    marginTop: 30,
    height: 60,
    width: '100%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WorkoutTitle: {
    fontFamily: 'Virgil',
    fontSize:22,
    marginLeft:5,
  },
});
