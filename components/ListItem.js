import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  const onPress = () => deleteItem(item.id);

  return (
    <TouchableOpacity style={listItem}>
      <View style={listItemView}>
        <Text style={listItemText}>{item.text}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress={onPress} />
      </View>
    </TouchableOpacity>
  );
};

const {listItem, listItemView, listItemText} = StyleSheet.create({
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#f8f8f8',
    backgroundColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
