import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.title}> Box Object Model </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    textAlign: 'center',
    paddingVertical: 30,
    paddingHorizontal: 100,
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 20,
    // width: 150,
    borderWidth: 10
    // backgroundColor: 'red',
  }
})

