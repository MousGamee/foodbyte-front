import * as Font from 'expo-font'
import { Text } from 'react-native'
import { useEffect, useState } from 'react';

const CustumText = ({ style, children, fontFamily}) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'extraLight': require('../../assets/fonts/JosefinSans-ExtraLight.ttf'),
                'light': require('../..//assets/fonts/JosefinSans-Light.ttf'),
                'regular': require('../..//assets/fonts/JosefinSans-Regular.ttf'),
                'semibold': require('../..//assets/fonts/JosefinSans-SemiBold.ttf'),
            });

            setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Text style={{ ...style, fontFamily : fontFamily }}>
            {children}
        </Text>
    );
}

export default CustumText