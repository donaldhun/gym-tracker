import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Font from 'expo-font';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';

// Create a shared styles object
const sharedStyles = {
  fontFamily: 'Virgil',
};

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number; // Add the size property as a number
}) {
  const { name, color, size } = props;
  return <FontAwesome name={name} size={size} color={color} style={{ marginBottom: 0 }} />;
}

export default function TabOneScreen() {
  const theme = useTheme(); // Get the current theme from ThemeProvider
  const navigation = useNavigation(); // use the hook

  const goToNewPage = () => {
    navigation.navigate('workoutPage', { headerShown: false });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={{backgroundColor:theme.colors.background, width:'100%'}}>
        <View style={{backgroundColor:theme.colors.background,width:'100%',}}>
          <Text style={[styles.title, sharedStyles, { marginTop: 12 }]}>WHAT'S UP,</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between',backgroundColor:theme.colors.background, alignItems:'center'}}>
            <Text style={[styles.title, sharedStyles, { fontSize: 50 }]}>DONALD!</Text>
            <Icon name="user-circle" color={theme.colors.text} size={45}/>
          </View>
        </View>


      </View>

      {/* Replace the regular Button with a custom TouchableOpacity */}
      <TouchableOpacity onPress={goToNewPage} style={[styles.mainButton, { backgroundColor: theme.colors.card }]}>
        <Text style={[sharedStyles, { color: theme.colors.text, fontSize: 28, fontWeight: '600' }]}>START LIFTING</Text>
      </TouchableOpacity>

      <View style={[styles.separator]} lightColor="gray" darkColor="rgba(255,255,255,0.1)" />

      <Text style={[sharedStyles, { marginTop: 0, fontSize: 24, fontWeight: '400' }]}>daily affirmation</Text>
      <Text style={[sharedStyles, { marginTop: 20, fontSize: 12 }]}>You are sal. You can do this job</Text>
      <Text style={[sharedStyles, { marginTop: 0, fontSize: 12 }]}>You're not a bartender anymore. You're Sal.</Text>

      <View style={styles.separator} lightColor="gray" darkColor="rgba(255,255,255,0.1)" />

      <Text style={[sharedStyles, { marginTop: -10, fontSize: 16, fontWeight: 'bold' }]}>LAST SESSION</Text>
      <Text style={[sharedStyles, { marginTop: 0, fontSize: 16, marginBottom: 20 }]}>7/23/2023</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: '5%',
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
  mainButton: {
    marginTop: 30,
    height: 70,
    width: '100%',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  exerciseContainer: {
    width: 260,
    minHeight: 80,
    borderRadius: 10,
    padding: 10,
  },
});
