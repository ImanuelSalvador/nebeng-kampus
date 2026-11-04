import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { warna } from '../tema/warna';

// AI Assistant: Reusable ride card component displaying route preview and driver stats
// Utilizes Image, TouchableOpacity, and Flexbox styling (Session 2, 4, 7)
export default function Kartu({ d, tekan }) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={tekan} style={styles.card}>
      <Image source={{ uri: d.foto }} style={styles.img} resizeMode="cover" />
      <View style={styles.isi}>
        <View style={styles.barisAtas}>
          <View style={styles.badgeKat}>
            <Text style={styles.txtKat}>{d.kat}</Text>
          </View>
          <Text style={styles.txtJam}>⏰ {d.jam}</Text>
        </View>

        <View style={styles.boxRute}>
          <Text style={styles.txtAsal} numberOfLines={1}>
            🟢 {d.asal}
          </Text>
          <Text style={styles.txtTujuan} numberOfLines={1}>
            🔴 {d.tujuan}
          </Text>
        </View>

        <View style={styles.garis} />

        <View style={styles.barisBawah}>
          <View style={styles.driver}>
            <Image source={{ uri: d.avatar }} style={styles.ava} />
            <View style={styles.wrapDriver}>
              <Text style={styles.namaDriver} numberOfLines={1}>
                {d.nama}
              </Text>
              <Text style={styles.rating}>
                ★ {d.rating} ({d.trip} trip)
              </Text>
            </View>
          </View>

          <View style={styles.wrapHarga}>
            <Text style={styles.harga}>{d.biaya}</Text>
            <Text style={styles.kursi}>Sisa {d.kursi} kursi</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// AI Assistant: Card visual styling including shadow elevation and border layout
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginVertical: 7,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  img: {
    width: '100%',
    height: 120,
    backgroundColor: '#E2E8F0',
  },
  isi: {
    padding: 12,
  },
  barisAtas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  badgeKat: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  txtKat: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0284C7',
  },
  txtJam: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  boxRute: {
    marginVertical: 4,
  },
  txtAsal: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 3,
  },
  txtTujuan: {
    fontSize: 13,
    fontWeight: '600',
    color: '#F97316',
  },
  garis: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 8,
  },
  barisBawah: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  driver: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  ava: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: '#CBD5E1',
  },
  wrapDriver: {
    flex: 1,
  },
  namaDriver: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  rating: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },
  wrapHarga: {
    alignItems: 'flex-end',
  },
  harga: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0284C7',
  },
  kursi: {
    fontSize: 10,
    color: '#10B981',
    fontWeight: '600',
    marginTop: 1,
  },
});
