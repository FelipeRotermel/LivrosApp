import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Livros</Text>
      <ScrollView horizontal pagingEnabled>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/minecraft.jpg')} />
        <Text style={styles.texto}>A Bíblia Para Minecrafters </Text>
        <Text style={styles.preco}>R$: 63,72</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/minecraft.jpg')} />
        <Text style={styles.texto}>A Bíblia Para Minecrafters </Text>
        <Text style={styles.preco}>R$: 63,72</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/minecraft.jpg')} />
        <Text style={styles.texto}>A Bíblia Para Minecrafters </Text>
        <Text style={styles.preco}>R$: 63,72</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/minecraft.jpg')} />
        <Text style={styles.texto}>A Bíblia Para Minecrafters </Text>
        <Text style={styles.preco}>R$: 63,72</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  livros: {
    width: 150,
    height: 300,
    backgroundColor: '#e6faf8',
    justifyContent: 'center', 
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
    margin: 7,
  },
  imagens: {
    width: 150,
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  texto: {
    textAlign: 'left',
    height: 50,
    fontSize: 17,
    color: 'blue',
    marginLeft: 5,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    height: 50,
  }
});
