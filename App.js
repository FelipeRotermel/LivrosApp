import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Livros</Text>
      <ScrollView horizontal pagingEnabled>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/1984.png')} />
        <Text style={styles.texto}>1984 - George Orwell</Text>
        <Text style={styles.preco}>R$: 14,90</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/narnia.png')} />
        <Text style={styles.texto}>As Crônicas de Nárnia </Text>
        <Text style={styles.preco}>R$: 42,41</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/minecraft.jpg')} />
        <Text style={styles.texto}>A Bíblia Para Minecrafters </Text>
        <Text style={styles.preco}>R$: 63,72</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/comunista.jpeg')} />
        <Text style={styles.texto}>Manifesto Comunista</Text>
        <Text style={styles.preco}>R$: -63,72</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/pequeno.png')} />
        <Text style={styles.texto}>O Pequeno Príncipe</Text>
        <Text style={styles.preco}>R$: 16,47</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/potter.png')} />
        <Text style={styles.texto}>Harry Potter e a Pedra Filosofal</Text>
        <Text style={styles.preco}>R$: 27,99</Text>
      </View>
      <View style={styles.livros}>
        <Image style={styles.imagens} source={require('./images/senhor.png')} />
        <Text style={styles.texto}>Senhor dos anéis</Text>
        <Text style={styles.preco}>R$: 60,99</Text>
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
