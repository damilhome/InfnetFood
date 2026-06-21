import { StyleSheet, View, Text, Pressable } from "react-native";
import { AntDesign, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useTema } from "../contexts/TemaContext";
import { useCheckout } from "../contexts/CheckoutContex";

export default function CardMetodoPagamento({ metodo }) {
  const { cores } = useTema();
  const { metodoSelecionado, setMetodoSelecionado } = useCheckout();

  return (
    <View style={styles.card}>
      <View style={styles.metodo}>
        {metodo.value === "dinheiro" ? (
          <FontAwesome6
            name={metodo.iconName}
            size={20}
            color={cores.textPrimary}
          />
        ) : (
          <MaterialIcons
            name={metodo.iconName}
            size={20}
            color={cores.textPrimary}
          />
        )}
        <Text style={{ color: cores.textPrimary, fontSize: 16 }}>
          {metodo.label}
        </Text>
      </View>
      <Pressable
        style={[
          styles.check,
          {
            backgroundColor: metodoSelecionado[metodo.id]
              ? cores.primary
              : cores.textSecondary,
          },
        ]}
        onPress={() => setMetodoSelecionado({ [metodo.id]: true })}
      >
        {metodoSelecionado[metodo.id] && (
          <AntDesign name="check" size={12} color={cores.textPrimary} />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metodo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  check: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
    paddingLeft: 2,
  },
});
