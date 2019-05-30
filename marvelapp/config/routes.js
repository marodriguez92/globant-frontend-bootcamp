import HomeScreen from '../screens/HomeScreen';
import CharacterComicsScreen from '../screens/CharacterComicsScreen';
import ComicDetailsScreen from '../screens/ComicDetailsScreen';

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
    ComicDetails: { screen: ComicDetailsScreen }
}

export default routes;