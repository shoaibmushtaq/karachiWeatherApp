import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native'
import useFetch from '../custom-hooks/useFetch';


const WeatherComponent = () => {


  const { response, loading, error } = useFetch("http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=70a174d708970be725a6bcc4074a921d");


  if (loading) {

    return (

      <View style={styles.loadingContainer}>

        <ActivityIndicator size="large" color="#000" />

      </View>


    );

  }

  else {

    return (

      <ScrollView >
        <View style={styles.mainContainer}>
          <View style={styles.container}>

            <Text style={styles.headingText}>Weather App</Text>

            <View style={styles.temperatureContainer}>

              <Text style={styles.temperatureHeadingText}>Karachi Temperature :</Text>
              {response && <Text style={styles.temperatureText}>{kelvinToCentigrade(response.main.temp)}C</Text>}

            </View>

            <Image source={require('../assets/RedCircle.png')} style={styles.singleImage} />



          </View>

          <View style={styles.imagesContainer}>

            <Image source={require('../assets/GreenCircle.png')} style={styles.multiImage} />
            <Image source={require('../assets/BlueCircle.png')} style={styles.multiImage} />
          </View>

        </View>
      </ScrollView>


    )
  }
}


export default WeatherComponent

const styles = StyleSheet.create({

  loadingContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },


  mainContainer: {

    paddingBottom: 20

  },

  container: {

    alignItems: "center",


  },

  headingText: {


    fontSize: 28,
    marginTop: 55,
    fontWeight: 'bold'

  },


  temperatureContainer: {




    flexDirection: "row",
    justifyContent: "center",


  },

  temperatureHeadingText: {


    fontSize: 14,
    marginTop: 50,
    color: "grey"

  },

  temperatureText: {


    fontSize: 14,
    marginTop: 50,
    color: "grey",
    marginStart: 8

  },

  imagesContainer: {

    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',


  },

  singleImage: {


    width: 200,
    height: 200,
    marginTop: 50


  },

  multiImage: {

    width: 140,
    height: 140
  }




})

function kelvinToCentigrade(kelvinValue) {

  return (kelvinValue - 273.5).toFixed(0)

}
