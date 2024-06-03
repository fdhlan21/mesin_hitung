import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Konten,
  TanyaJawab,
  Notifikasi,
  Artikel,
  ArtikelDetail,
  Video,
  VideoDetail,
  Resep,
  ResepDetail,
  AsupanMpasi,
  AsupanAsi,
  StatusGizi,
  StatusGiziHasil,
  KursionerVark,
  GayaBelajarVisual,
  GayaBelajarAudio,
  GayaBelajarReading,
  

  GayaBelajarKinaesthetic,
  Diagnosa2,
  Periksagigimu,
  Gigilubang,
  TumpatanGigi,
  PaketUmrah,
  Pendaftaran,
  UpdateSeat,
  Pembayaran,
  Saldoku,
  DataJamaah,
  DataJamaah2,
  Royalti,
  MakananBalita,
  ResepMakananBalita,
  MakananIbuhamil,
  ResepMakananIbuHamil,
  konsultasionline,
  ProfileAplikasi,
  IMTCalculator,
  HasilIMTCalculator,
  HomeAnemia,
  WhatsIsAnemia,
  AnemiaCouses,
  AnemiaHelt,
  ArtikelLainnya,
  Perjumlahan,
  Pembagian,
  Perkalian,
  PerjumlahanSubMenu,
  PerjumlahanKalkulator,
  HasilPerjumlahan,
  PembahasanPerjumlahan,
  PenguranganKalkulator,
  HasilPengurangan,
  PembahasanPengurangan,
  PenguranganSubMenu,
  PerkalianSubMenu,
  PerkalianKalkulator,
  HasilPerkalian,
  PembahasanPerkallian,
  PembagianSubMenu,
  PembagianKalkulator,
  HasilPembagian,
  PembahasanPembagian,


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import Diagnosa from '../pages/Diagnosa';
import TypeAnemia from '../pages/Anemia/typeanemia';
import Pengurangan from '../pages/pengurangan';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

<Stack.Screen
        name="Perjumlahan"
        component={Perjumlahan}
        options={{
          headerShown: false,

        }}
      />


      
<Stack.Screen
        name="Pengurangan"
        component={Pengurangan}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="Pembagian"
        component={Pembagian}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="Perkalian"
        component={Perkalian}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="PertambahanSubMenu"
        component={PerjumlahanSubMenu}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="PerjumlahanKalkulator"
        component={PerjumlahanKalkulator}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="HasilPerjumlahan"
        component={HasilPerjumlahan}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="PembahasanPerjumlahan"
        component={PembahasanPerjumlahan}
        options={{
          headerShown: false,

        }}
      />


      
<Stack.Screen
name="PenguranganKalkulator"
        component={PenguranganKalkulator}
        options={{
          headerShown: false,

        }}
      />





<Stack.Screen
        name="HasilPengurangan"
        component={HasilPengurangan}
        options={{
          headerShown: false,

        }}
      />




      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PembahasanPengurangan"
        component={PembahasanPengurangan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PenguranganSubMenu"
        component={PenguranganSubMenu}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PerkalianSubMenu"
        component={PerkalianSubMenu}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="PerkalianKalkulator"
        component={PerkalianKalkulator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HasilPerkalian"
        component={HasilPerkalian}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="PembahasanPerkallian"
        component={PembahasanPerkallian}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PembagianSubMenu"
        component={PembagianSubMenu}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="PembagianKalkulator"
        component={PembagianKalkulator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HasilPembagian"
        component={HasilPembagian}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="PembahasanPembagian"
        component={PembahasanPembagian}
        options={{
          headerShown: false,
        }}
      />















    </Stack.Navigator>
  );
}
