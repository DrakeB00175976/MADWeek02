import {StyleSheet,Text,View}  from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [fullname, setFullname] = useState("Drake Wanzu")
  return (
    <View>
      <Text style={styles.paragraph}>
       Hello, {fullname}
      </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
