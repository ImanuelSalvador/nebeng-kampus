import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { warna } from '../tema/warna';

// AI Assistant: Reusable input field component with validation error support
// Implements TextInput component based on Session 3
export default function Input({
  label,
  val,
  ubah,
  place,
  aman = false,
  kb = 'default',
  err = '',
  style,
}) {
  return (
    <View style={[styles.box, style]}>
      {label ? <Text style={styles.lbl}>{label}</Text> : null}
      <TextInput
        value={val}
        onChangeText={ubah}
        placeholder={place}
        placeholderTextColor="#94A3B8"
        secureTextEntry={aman}
        keyboardType={kb}
        autoCapitalize="none"
        style={[styles.input, err ? styles.inputErr : null]}
      />
      {err ? <Text style={styles.errTxt}>{err}</Text> : null}
    </View>
  );
}

// AI Assistant: Input field container and typography styling
const styles = StyleSheet.create({
  box: {
    width: '100%',
    marginVertical: 6,
  },
  lbl: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 6,
  },
  input: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#0F172A',
  },
  inputErr: {
    borderColor: '#EF4444',
  },
  errTxt: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
  },
});
