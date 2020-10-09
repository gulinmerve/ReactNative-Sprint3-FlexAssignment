import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  textContentType,
} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.main1}>
        <View style={styles.grayBox}>
          <View style={styles.orangeBox}>
            <Text style={styles.orangeText}>Orange Circle</Text>
          </View>
          <View style={styles.yellowBox}>
            <Text style={styles.yellowText}>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.main2}>
        <View style={styles.blackBox}>
          <Text style={styles.blackText}>Black Box</Text>
        </View>
        <View style={styles.brownBox}>
          <Text style={styles.brownText}>Brown</Text>
          <Text style={styles.brownText}>Box</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main1: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  main2: {
    backgroundColor: 'pink',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  grayBox: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
    height: 220,
    marginLeft: 20,
    marginRight: 20,
  },
  orangeBox: {
    backgroundColor: 'orange',
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
  },
  orangeText: {
    fontWeight: 'bold',
    // flexWrap: 'wrap',
    textAlign: 'center',
  },
  yellowBox: {
    backgroundColor: 'yellow',
    height: 50,
    width: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  yellowText: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold'
  },
  blackBox: {
    backgroundColor: 'black',
    height: 450,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
  },
  blackText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  brownBox: {
    backgroundColor: 'brown',
    height: 480,
    width: 70,
    borderRadius: 90,
    justifyContent: 'center',
  },
  brownText: {
    transform: [{ rotate: '-90deg' }],
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
});
export default App;