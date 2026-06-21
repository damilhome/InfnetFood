import { StyleSheet, View, Text } from "react-native";
import { useTema } from "../contexts/TemaContext";

export default function ValorPedidoCheckout({ subtotal, taxaEntrega }) {
  const { cores } = useTema();

  return (
    <View
      style={[styles.containerTotal, { borderBottomColor: cores.inputBorder }]}
    >
      <View style={styles.labelContainer}>
        <View style={styles.subInfosLabel}>
          <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
            Subtotal
          </Text>
          <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
            Taxa de entrega
          </Text>
        </View>
        <Text
          style={[styles.tamanhoTxt, styles.bold, { color: cores.textPrimary }]}
        >
          Total
        </Text>
      </View>
      <View style={styles.valoresContainer}>
        <View style={styles.subInfosValores}>
          <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
            R$ {subtotal.toFixed(2).replace(".", ",")}
          </Text>
          <Text style={[styles.tamanhoTxt, { color: cores.textPrimary }]}>
            R$ {taxaEntrega.toFixed(2).replace(".", ",")}
          </Text>
        </View>
        <Text
          style={[styles.tamanhoTxt, styles.bold, { color: cores.textPrimary }]}
        >
          R$ {(subtotal + taxaEntrega).toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
    borderBottomWidth: 1,
    paddingBottom: 25,
  },
  labelContainer: {
    alignItems: "flex-start",
    gap: 15,
  },
  valoresContainer: {
    alignItems: "flex-end",
    gap: 15,
  },
  subInfosLabel: {
    alignItems: "flex-start",
    gap: 5,
  },
  subInfosValores: {
    alignItems: "flex-end",
    gap: 5,
  },
  tamanhoTxt: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
});
