import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import ViewPager from '@react-native-community/viewpager';

import Page from '../components/Page';
import Footer from '../components/Footer';
import Axios from 'axios';

export default function Home() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState(null);
  let [textInitial, setTextInitial] = useState("Clique no botão abaixo para ver como está o tempo!!!");
  let [subText, setSubText] = useState(null);
  let [maxMinText, setMaxMinText] = useState(null);
  let [initialColor, setInitialColor] = useState("#ffc93c");
  let [initialIcon, setInitialIcon] = useState("sun");


  async function getWeather() {

    console.log("ENTER IN GET WEATHER");

    setTextInitial("AGUARDE...");
    setSubText(null);
    setMaxMinText(null);

    if (Platform.OS === 'android' && !Device.isDevice) {
      setErrorMsg(
      'Ops, isso não funcionará em um emulador Android. Experimente no seu dispositivo!'
      );
      return;
    }

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('A permissão para acessar o local foi negada');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(JSON.stringify(location));

    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=e14912825ae19d50404723cf89606e07&units=metric`;

    console.log(api);
    Axios.get(api)
      .then(res => {
        console.log('RESPONSE: ', res.data);
        console.log(res.data.name);
        console.log(res.data.sys.country);
        console.log(res.data.main.humidity);
        setTextInitial(res.data.name + ' - ' + res.data.sys.country);
        setSubText(res.data.main.temp.toString().substring(0,2) + '°C | ' + 'Humidade: ' + res.data.main.humidity + '%');
        setInitialColor("#07689f");
        setInitialIcon("cloud-drizzle");
        setMaxMinText('Máx. ' + res.data.main.temp_max.toString().substring(0,2) + '°C  Mín. ' + res.data.main.temp_min.toString().substring(0,2) + '°C');
        setWeather(res ?? '');
      })

  }

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }}>
        <View key="1">
          <Page
            backgroundColor={initialColor}
            iconName={initialIcon}
            title={textInitial}
            text={subText}
            max_min={maxMinText}
          />
          <Footer
            backgroundColor={initialColor}
            centerButtonLabel="ATUALIZAR"
            centerButtonPress={() => getWeather()}
          />
        </View>
      </ViewPager>
    </View>
  );
};