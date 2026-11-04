import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { warna } from '../tema/warna';

// AI Assistant: Reusable status badge component for displaying ticket trip states
// Resolves background and foreground colors dynamically based on status prop
export default function Status({ s }) {
  // AI Assistant: Status style dictionary resolver
  const getBadgeStyle = () => {
    if (s === 'Terkonfirmasi') return { bg: warna.hijauMuda || '#D1FAE5', c: warna.hijau || '#10B981' };
    if (s === 'Selesai') return { bg: warna.abuMuda || '#F1F5F9', c: warna.gelap || '#0F172A' };
    if (s === 'Dibatalkan') return { bg: warna.merahMuda || '#FEE2E2', c: warna.merah || '#EF4444' };
    return { bg: warna.kuningMuda || '#FEF3C7', c: warna.kuning || '#F59E0B' };
  };

  const badgeStyle = getBadgeStyle();

  return (
    <View style={[styles.badge, { backgroundColor: badgeStyle.bg }]}>
      <Text style={[styles.txt, { color: badgeStyle.c }]}>{s}</Text>
    </View>
  );
}

// AI Assistant: Badge container and typography styling
const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  txt: {
    fontSize: 11,
    fontWeight: '700',
  },
});
