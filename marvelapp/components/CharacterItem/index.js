import React, { Component } from 'react'
import styles from './styles'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const CharacterItem = (props) => (

  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      props.handleNavigate(props.id, props.name)
    }}
  >

    <Image source={{ uri: `${props.img}.${props.extension}` }} style={styles.img} />

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

CharacterItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CharacterItem