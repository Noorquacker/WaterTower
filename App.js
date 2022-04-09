import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Momento de bruh</Text>
      <Image
        style={styles.bruh}
        source={{
          uri: 'https://c.wallhere.com/photos/de/ab/anime_anime_girls-1779929.jpg!d',
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bruh: {
    width: 500,
    height: 500,
  },
});
