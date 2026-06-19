import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";
import {
  localizacaoUsuarioCopacabana,
  restaurantesCopacabana,
} from "../data/mapaRestaurantes";
import { useTema } from "../contexts/TemaContext";
import { useState } from "react";
import CardFlutuante from "../components/CardFlutuante";

export default function Mapa() {
  const { cores } = useTema();
  const [restauranteSelecionado, setRestauranteSelecionado] = useState(null);

  function fecharCard() {
    setRestauranteSelecionado(null);
  }

  return (
    <View style={[styles.container, { backgroundColor: cores.background }]}>
      <Text style={[styles.titulo, { color: cores.textPrimary }]}>
        Restaurantes na sua localização
      </Text>
      <View style={styles.mapContainer}>
        <TouchableWithoutFeedback onPress={fecharCard}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: localizacaoUsuarioCopacabana.coords.latitude,
              longitude: localizacaoUsuarioCopacabana.coords.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{
                latitude: localizacaoUsuarioCopacabana.coords.latitude,
                longitude: localizacaoUsuarioCopacabana.coords.longitude,
              }}
              pinColor="blue"
              title="Você está aqui"
            />
            {restaurantesCopacabana.map((restaurante) => (
              <Marker
                key={restaurante.id}
                coordinate={{
                  latitude: restaurante.latitude,
                  longitude: restaurante.longitude,
                }}
                onPress={() => setRestauranteSelecionado(restaurante)}
              ></Marker>
            ))}
          </MapView>
        </TouchableWithoutFeedback>
        {restauranteSelecionado && (
          <CardFlutuante
            restaurante={restauranteSelecionado}
            fecharCard={fecharCard}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
  },

  titulo: {
    padding: 15,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  map: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    position: "relative",
  },
});

/* 

  cardFlutuante: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    // Sombras para destacar do mapa (funciona em iOS e Android)
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  cardDescricao: {
    fontSize: 14,
    marginBottom: 15,
    lineHeight: 20,
  },
  btnAcessar: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnTxt: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

*/
