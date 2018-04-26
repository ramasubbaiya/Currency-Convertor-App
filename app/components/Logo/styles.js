import { Dimensions } from 'react-native';
import EStlyeSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

const styles = EStlyeSheet.create({
    $largeContainerSize: imageWidth,
    $largeImageSize: imageWidth / 2,
    $smallContainerSize: imageWidth / 2,
    $smallImageSize: imageWidth / 4,

    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '$largeContainerSize',
        height: '$largeContainerSize',
    },
    backgroundImage: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
    image: {
        width: '$largeImageSize',
    },
    text: {
        fontWeight: '600',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        color: '$white',
    }
});

export default styles;