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

      <View style={{ flexDirection: 'row', backgroundColor: theme.colors.background, justifyContent:'space-between', alignItems:'center'}}>
        <View style={{backgroundColor: theme.colors.background}}>
          <Text style={[styles.title, { marginLeft: 0 }]}>7/23/23</Text>
          <Text style={[styles.title, { fontSize: 40 }]}>Sunday</Text>
        </View>
        <Icon name="user-circle" color="black" size={40}/>
      </View>

  
      <View style={[styles.mainButton, {backgroundColor: theme.colors.primary}]}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Start Workout</Text>
      </View>

      <Text style={{ marginTop: 90, fontWeight: '500', fontSize: 28 }}>Recent Workouts</Text>

      <Text style={{fontFamily:'Virgil'}}>xcxxzcvxcvxcvxcvbashi</Text>


      {/* ... */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
    marginTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
