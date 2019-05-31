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
import SearchBox from '../components/Search'
import CharacterListSearch from '../components/CharacterListSearch';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      height:0
    };
  }
  componentWillMount() {
    this.props.fetchCharacters()
  }
  handleSearch = (searchValue) => {
    this.setState({
      searchValue
    }, () => {
      if (searchValue.length > 2) {
        this.props.fetchCharactersSearch(this.state.searchValue)
      }else{
        this.props.clearSearch()
      }
    });
  }
  infiniteScroll = () => {
    const offset = this.props.characters.length
    this.props.fetchMoreCharacters(offset)
  }

  handleClear = () => {
    this.setState({
      searchValue: ''
    }, ()=>{
      this.props.clearSearch()
    })
  }
  handleNavigate = (characterId, characterName) => {
    this.props.fetchCharacterComics(characterId);
    this.props.navigation.dispatch({ type: 'CharacterComics',  payload: { characterName } })
  }

  renderList = () => (
    <CharactersList
      navigation={this.props.navigation}
      characters={this.props.characters}
      isFetching={this.props.isFetching}
      handleNavigate={this.handleNavigate}
      isFetchingMore={this.props.isFetchingMore}
      onEndReached={this.infiniteScroll}

    />
  )

  renderActivityIndicator = () => (
    <View style={{ flex: 1 }}>
      <View style={{ paddingVertical: 20, borderTopWitdh: 1, borderTopColor: '#CED0CE' }}>
        <ActivityIndicator animating size="large" />
      </View>
    </View>
  )

  onLayout = (event) => {
    const {height} = event.nativeEvent.layout
    this.setState({
      height
    })
  }
  render() {
   
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Header
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          charactersSearch={this.props.charactersSearch}
          renderSearchBar={true}
          searchValue={this.state.searchValue}
          onLayout={this.onLayout}
          searchResults={this.props.searchResults}
        />
        {this.props.isFetching ? this.renderActivityIndicator() : this.renderList()}
        <CharacterListSearch
          navigation={this.props.navigation}
          charactersSearch={this.props.charactersSearch} 
          height={this.state.height}
          isFetchingSearch={this.props.isFetchingSearch}
        />
      </View>
    )
  }
}




const mapStateToProps = (state) => ({
  isFetching: state.DataReducer.isFetching,
  characters: state.DataReducer.characters,
  charactersSearch: state.DataReducer.charactersSearch,
  isFetchingMore: state.DataReducer.isFetchingMore,
  isFetchingSearch: state.DataReducer.isFetchingSearch,
  searchResults: state.DataReducer.searchResults
});


const mapDispatchToProps = (dispatch) => (
  bindActionCreators(Actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)