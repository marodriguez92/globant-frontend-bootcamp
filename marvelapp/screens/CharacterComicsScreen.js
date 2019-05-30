import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import CharacterComicsList from '../components/CharacterComicsList/CharacterComicsList';
import Header from '../components/Header';

class CharacterComicsScreen extends Component {
  handleNavigate = (comicId) => {
    this.props.getComic(comicId);
    this.props.getComicCharacters(comicId);
    this.props.navigation.dispatch({ type: 'ComicDetails' })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          navigation={this.props.navigation}
          title={this.props.navigation.getParam('characterName')}
          subtitle={'Comics List'}
        />
        <CharacterComicsList
          handleNavigate={this.handleNavigate}
          isFetching={this.props.isFetching}
          characterComics={this.props.characterComics}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    isFetching: state.DataReducer.isFetching,
    characterComics: state.DataReducer.characterComics
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(Actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterComicsScreen);
