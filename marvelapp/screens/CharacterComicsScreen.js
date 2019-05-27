import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCharacterComics from '../actions';
import CharacterComicsList from '../components/CharacterComicsList/CharacterComicsList';

class CharacterComicsScreen extends Component {
    
    componentWillMount() {
        this.props.fetchCharacterComics('1011334');
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

const mapDispatchToProps = (dispatch) => ({
    fetchCharacterComics: (characterID) =>
        dispatch(fetchCharacterComics(characterID))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterComicsScreen);
