import React from 'react';
import CharactersList from '../components/CharacterList';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import {
  View,
  ActivityIndicator
} from 'react-native';

class HomeScreen extends React.Component {
  componentWillMount() {
    this.props.fetchCharacters()
  }
  render() {
    if (this.props.isFetching) {
      return (
        <View style={{ flex: 1 }}>
          <Header />
          <View style={{ paddingVertical: 20, borderTopWitdh: 1, borderTopColor: '#CED0CE' }}>
            <ActivityIndicator animating size="large" />
          </View>
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Header />
          <CharactersList
            navigation={this.props.navigation}
            characters={this.props.characters}
            isFetching={this.props.isFetching}
          />
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.dataReducer.isFetching,
  characters: state.dataReducer.characters
});


const mapDispatchToProps = (dispatch) => (
  bindActionCreators(Actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)