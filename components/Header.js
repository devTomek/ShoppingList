import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslateblue',
    height: 60,
    padding: 15,
  },
  text: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Header;
