import HomeScreen from '../screens/HomeScreen';
import CharacterComicsScreen from '../screens/CharacterComicsScreen';
import ComicDetailsScreen from '../screens/ComicDetailScreen';

const routes = {
    Home: { 
        screen: HomeScreen, 
        navigationOptions: {
            header: null
        }
    },
    CharacterComics: { 
        screen: CharacterComicsScreen,
        navigationOptions: {
            header: null
        }
    },
    ComicDetails: { 
        screen: ComicDetailsScreen,
        navigationOptions: {
            header: null
        }
    }
}

export default routes;