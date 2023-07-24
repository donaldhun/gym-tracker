import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Font from 'expo-font';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number; // Add the size property as a number
}) {
  const { name, color, size } = props;

  return <FontAwesome name={name} size={size} color={color} style={{ marginBottom: 0 }} />;
}

const fetchFonts = async () =>
  await Font.loadAsync({
    'Virgil': require('../../assets/fonts/Virgil 3 YOFF.ttf'),
  });

export default function TabOneScreen() {
  const theme = useTheme(); // Get the current theme from ThemeProvider

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      
      <Text style={[styles.title, {marginTop:40}]}>WHAT'S UP,</Text>
      <Text style={[styles.title, {marginTop:5, fontSize:50}]}>DONALD!</Text>

      <View style={styles.mainButton}>
        <Text style={{fontSize:24, fontWeight:'600'}}>START LIFTING</Text>
      </View>

      <Text style={{marginTop: 40,fontSize:16, fontWeight:'400'}}>daily affirmation</Text>
      <Text style={{marginTop: 20,fontSize:12}}>You are sal. You can do this job</Text>
      <Text style={{marginTop: 0,fontSize:12}}>You're not a bartender anymore. You're Sal.</Text>

      <View style={styles.separator} lightColor="gray" darkColor="rgba(255,255,255,0.1)" />

      <Text style={{marginTop: -10,fontSize:16, fontWeight:'bold'}}>LAST SESSION</Text>
      <Text style={{marginTop: 0,fontSize:16, marginBottom:20}}>7/23/2023</Text>

      <ScrollView style={{flex:1, padding: 20}}>
        <Text style={{marginTop: 0, marginLeft:4,fontSize:20, fontWeight:'bold'}}>Bench</Text>
        <View style={{ width: 260, minHeight:80, borderRadius:10, padding:10}}>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
        </View>

        <Text style={{marginTop: 22, marginLeft:4,fontSize:20, fontWeight:'bold'}}>Shoulder Press</Text>
        <View style={{ width: 260, minHeight:80, borderRadius:10, padding:10}}>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
        </View>

        <Text style={{marginTop: 22, marginLeft:4,fontSize:20, fontWeight:'bold'}}>Squat</Text>
        <View style={{ width: 260, minHeight:80, borderRadius:10, padding:10}}>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
        </View>

        <Text style={{marginTop: 22, marginLeft:4,fontSize:20, fontWeight:'bold'}}>Lateral Raise</Text>
        <View style={{ width: 260, minHeight:80, borderRadius:10, padding:10}}>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
          <Text style={{fontSize:16}}>520 lb x 8 reps</Text>
        </View>

      </ScrollView>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
    marginTop: 60,
    alignItems:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
});
