import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  useColorScheme,
} from 'react-native';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#F3F4F6',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <View>
          <Text>
            React Native App new app
          </Text>
          <Text>
            Welcome to your React Native application!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default App;