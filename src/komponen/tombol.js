import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { warna } from '../tema/warna';

// AI Assistant: Reusable button component supporting multiple color variants and loading state
// Implements TouchableOpacity and ActivityIndicator based on Session 6 & 7
export default function Tombol({
  judul,
  tekan,
  tipe = 'utama',
  mati = false,
  loading = false,
  style,
}) {
  // AI Assistant: Dynamic background color resolver
  const getBackgroundColor = () => {
    if (mati) return warna.garis || '#E2E8F0';
    if (tipe === 'oranye') return warna.sekunder || '#F97316';
    if (tipe === 'merah') return warna.merah;
    if (tipe === 'garis') return 'transparent';
    return warna.primer;
  };

  // AI Assistant: Dynamic text and indicator color resolver
  const getTextColor = () => {
    if (mati) return warna.abu || '#64748B';
    if (tipe === 'garis') return warna.primer;
    return warna.putih;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={tekan}
      disabled={mati || loading}
      style={[
        styles.btn,
        { backgroundColor: getBackgroundColor() },
        tipe === 'garis' && styles.garisBorder,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={getTextColor()} />
      ) : (
        <Text style={[styles.txt, { color: getTextColor() }]}>{judul}</Text>
      )}
    </TouchableOpacity>
  );
}

// AI Assistant: Button container and typography styling
const styles = StyleSheet.create({
  btn: {
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  garisBorder: {
    borderWidth: 1.5,
    borderColor: '#0284C7',
  },
  txt: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
