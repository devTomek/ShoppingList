import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChangeText = text => setText(text);

  const onPress = () => {
    addItem(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity style={btn} onPress={onPress}>
        <Text style={btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const {input, btn, btnText} = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
