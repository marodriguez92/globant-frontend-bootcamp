import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import CharacterComicsList from '../components/CharacterComicsList/CharacterComicsList';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

class CharacterComicsScreen extends Component {
    componentWillMount() {
        this.props.fetchCharacterComics(this.props.navigation.getParam('characterId'));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <SubHeader 
                    navigation={this.props.navigation} 
                    title={this.props.navigation.getParam('characterName')} 
                    subtitle= {'Comics List'}
                />
                <CharacterComicsList
                    navigation={this.props.navigation}
                    isFetching={this.props.isFetching}
                    characterComics={this.props.characterComics}
                />
            </View>
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
