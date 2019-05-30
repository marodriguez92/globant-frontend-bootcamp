import React, { Component } from 'react'
import styles from './styles'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const CharacterItem = (props) => (
    <TouchableOpacity 
    style={styles.container}
    onPress={()=>{
      props.handleNavigate(props.id, props.name)
    }}
    >
      <Image source={{ uri: `${props.img}.${props.extension}` }} style={{ width: 100, height: 100 }} />
      <View style={styles.info}>
        <Text style={styles.title}>
          {props.name}
        </Text>
        <Text numberOfLines={4}>
          {props.description}
        </Text>
      </View>
    </TouchableOpacity>
  );

export default CharacterItem