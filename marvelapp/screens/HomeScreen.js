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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
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
  renderList = () => (
    <CharactersList
      navigation={this.props.navigation}
      characters={this.props.characters}
      isFetching={this.props.isFetching}
    />
  )

  renderActivityIndicator = () => (
    <View style={{ flex: 1 }}>
      <View style={{ paddingVertical: 20, borderTopWitdh: 1, borderTopColor: '#CED0CE' }}>
        <ActivityIndicator animating size="large" />
      </View>
    </View>
  )

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Header
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          charactersSearch={this.props.charactersSearch}
          renderSearchBar={true}
          searchValue={this.state.searchValue}
        />
        {this.props.isFetching ? this.renderActivityIndicator() : this.renderList()}
      </View>
    )
  }
}




const mapStateToProps = (state) => ({
  isFetching: state.dataReducer.isFetching,
  characters: state.dataReducer.characters,
  charactersSearch: state.dataReducer.charactersSearch,
  isFetchingMore: state.dataReducer.isFetchingMore
});


const mapDispatchToProps = (dispatch) => (
  bindActionCreators(Actions, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)