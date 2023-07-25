import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Font from 'expo-font';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number; // Add the size property as a number
}) {
  const { name, color, size } = props;

  return <FontAwesome name={name} size={size} color={color} style={{ marginBottom: 0 }} />;
}

// Create a shared styles object
const sharedStyles = {
  fontFamily: 'Virgil',
};

export default function workoutPage() {
  const theme = useTheme(); // Get the current theme from ThemeProvider

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[sharedStyles, styles.title, {fontSize:24}]}>Workout</Text>
      <Text style={[sharedStyles, styles.title, {fontSize:15}]}>00:55:47</Text>

      <View style={{padding:12,width:'100%',height:'100%', backgroundColor:theme.colors.background}}>


        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
          <View style={{flexDirection:'row',}}>
            <Icon name="edit" color={theme.colors.text} size={25}/>
            <Text style={styles.WorkoutTitle}>Dumbell Bench Press</Text>
          </View>
          <Icon name="trash" color={theme.colors.text} size={25}/>
        </View>

        <View style={{width:'100%', minHeight:120, backgroundColor:theme.colors.card, borderRadius:10}}>
          {/*  */}
        </View>
        <View style={{width:'100%', alignItems:'flex-end'}}>
          <Icon name='plus' color={theme.colors.text} size={25} />
        </View>

      </View>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
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
