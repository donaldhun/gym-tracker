import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const sharedStyles = {
  fontFamily: 'Virgil',
};

export default function SetDataRow({ weight, repCount, fail, onPressFail, onChangeWeight, onChangeRepCount }) {
  const failBackground = fail ? 'orange' : 'rgb(192, 192, 192)';

  return (
    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      {/* WEIGHT INPUT */}
      <View style={{ backgroundColor: 'grey', height: 55, width: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="25"
          placeholderTextColor='rgb(189, 189, 189)'
          style={[sharedStyles, { color: 'white', fontSize: 24, flex: 1 }]}
          maxLength={60}
          value={weight.toString()}
          keyboardType="numeric"
          onChangeText={onChangeWeight} // Use the provided onChangeWeight callback
        />
      </View>

      <Text style={[sharedStyles, { color: 'black', fontSize: 22 }]}> lbs x </Text>

      {/* REPS INPUT */}
      <View style={{ backgroundColor: 'grey', height: 55, width: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="25"
          placeholderTextColor='rgb(189, 189, 189)'
          style={[sharedStyles, { color: 'white', fontSize: 24, flex: 1 }]}
          maxLength={60}
          value={repCount.toString()}
          keyboardType="numeric"
          onChangeText={onChangeRepCount} // Use the provided onChangeRepCount callback
        />
      </View>

      <Text style={[sharedStyles, { color: 'black', fontSize: 22 }]}> reps </Text>

      <TouchableOpacity style={{ height: 55, width: 65, backgroundColor: failBackground, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={onPressFail}>
        <Text style={[sharedStyles, { color: 'white', fontSize: 19 }]}>FAIL</Text>
      </TouchableOpacity>
    </View>
  );
}
