import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { View, Text, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface WorkoutModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: { sets: string; title: string }) => void;
}

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
  fontFamily: 'Virgil',
};

export default function WorkoutModal({ visible, onClose, onSubmit }: WorkoutModalProps) {
  const theme = useTheme(); // Get the current theme from ThemeProvider
  const [sets, setSets] = useState('');
  const [title, setTitle] = useState('');

  const handleConfirm = () => {
    // Validate the inputs here if needed

    // Pass the sets and title back to the main screen
    onSubmit({ sets, title });

    // Close the modal
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <SafeAreaView style={styles.modalContainer}>
        <View style={[styles.modalContent, { backgroundColor: theme.colors.background, alignContent: 'center' }]}>
          {/* <View style={{width:'100%', height:50, backgroundColor:'green'}}></View> */}
          <View style={{ flexDirection: 'row', backgroundColor: theme.colors.card, alignItems: 'center', width: '100%', padding: 15, paddingHorizontal: 25, borderRadius: 30, height: 60 }}>

            <TextInput
              placeholder="Exercise Title"
              placeholderTextColor='rgb(130, 130, 130)'
              style={[sharedStyles, styles.title, { color: theme.colors.text, fontSize: 24 }]}
              multiline={false} // Add this line to enable multiline input
              onChangeText={setTitle} // Use setTitle instead of directly setting the text
              maxLength={60}
            />

            {/* <View style={{ marginLeft: 15 }}>
              <FontAwesome name="edit" color={theme.colors.text} size={25} />
            </View> */}
          </View>

          <View style={{ marginTop: 60, flex: 1, alignItems: 'center', width: '100%' }}>
            <Text style={[sharedStyles, { color: theme.colors.text, fontSize: 25 }]}>Sets</Text>

            {/* Data */}
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent:'center', marginTop: 30 }}>

              {/* WEIGHT INPUT */}
              <View style={{ backgroundColor: theme.colors.card, height: 55, width: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                  placeholder="25"
                  placeholderTextColor='rgb(130, 130, 130)'
                  style={[sharedStyles, styles.title, { color: theme.colors.text, fontSize: 24, flex:1, }]}
                  maxLength={60}
                />
              </View>

              <Text style={[sharedStyles, { color: theme.colors.text, fontSize: 22 }]}> lbs x </Text>

              {/* REPS INPUT */}

              <View style={{ backgroundColor: theme.colors.card, height: 55, width: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                  placeholder="25"
                  placeholderTextColor='rgb(130, 130, 130)'
                  style={[sharedStyles, styles.title, { color: theme.colors.text, fontSize: 24, flex:1, }]}
                  maxLength={60}
                />
              </View>

              <Text style={[sharedStyles, { color: theme.colors.text, fontSize: 22 }]}> reps </Text>
            </View>

            {/* Notes */}
            <View style={{ marginTop:40, backgroundColor: theme.colors.card, minHeight: 85, width: '90%', borderRadius: 20, paddingHorizontal:25, paddingVertical:15 }}>
                <TextInput
                  placeholder="Notes"
                  placeholderTextColor='rgb(130, 130, 130)'
                  style={[sharedStyles, styles.title, { color: theme.colors.text, fontSize: 15, flex:1, }]}
                  maxLength={225}
                  multiline={true}
                  // returnKeyType='done'
                />
              </View>

          </View>


          {/* <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {

    backgroundColor: 'white',
    padding: 20,
    paddingVertical: 55,
    borderRadius: 10,
    elevation: 5,
    flex: 1,
    width: '100%',
    height: '100%',
    // maxWidth: 400, // Optionally, set a maximum width for the modal content
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
