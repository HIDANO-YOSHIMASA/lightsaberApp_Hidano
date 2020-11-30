import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MainScreen"
  >;

  type Props = {
    navigation: MainScreenNavigationProp;
  }

export default function MainScreen(props: Props) {

  const {navigation} = props;

    const goJedi = () => {
      navigation.navigate("JediScreen");
    }
    

    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goJedi}>
        <Text>ジェダイになる</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
    );
  }
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
