import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import CharacterComicsList from '../components/CharacterComicsList/CharacterComicsList';

class CharacterComicsScreen extends Component {
    componentWillMount() {
        this.props.fetchCharacterComics(this.props.navigation.getParam('id'));
    }

    render() {
        return (
            <CharacterComicsList 
                navigation={this.props.navigation} 
                isFetching={this.props.isFetching}
                characterComics={this.props.characterComics}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.dataReducer.isFetching,
    characterComics: state.dataReducer.characterComics
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(Actions, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(CharacterComicsScreen);
