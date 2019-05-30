import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import ComicDetail from '../../components/ComicDetail/index';
import CharacterList from '../../components/CharacterList/index'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions';
import styles from './styles';
import Header from '../../components/Header';


class ComicDetailScreen extends React.Component {
    handleNavigate = (characterId, characterName) => {
        this.props.fetchCharacterComics(characterId);
        this.props.navigation.dispatch({ type: 'CharacterComics',  payload: { characterName } })
    }

    render (){
        console.log('IS FETCHING', this.props.isFetching);
        console.log('IS FETCHING CHARACTERS', this.props.isFetchingMoreCharacters);
        
        const isFetching = this.props.isFetching || this.props.isFetchingMoreCharacters;
        return (
            <ScrollView>
                <Header
                    navigation={this.props.navigation}
                    title={this.props.comic.comicData.title}
                    subtitle={'Details'}
                />
               {!isFetching && <ComicDetail comic={this.props.comic.comicData} /> }   
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Characters </Text>
                    <CharacterList 
                        navigation={this.props.navigation} 
                        isFetching={isFetching}
                        characters={this.props.comic.characters}
                        handleNavigate={this.handleNavigate}
                    />
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.DataReducer.isFetching,
    isFetchingMoreCharacters: state.DataReducer.isFetchingMoreCharacters,
    comic: state.DataReducer.comic,
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(Actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetailScreen);
