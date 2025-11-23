import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Event: React.FC<Props> = ({ title, children, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.verticalAlign}>{children}</View>
      <Text style={styles.flowText}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#28282B",
    borderRadius: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    marginBottom: 6,
  },
  verticalAlign: {
    marginTop: 8,
    marginBottom: 16,
  },
  flowText: {
    fontSize: 16,
    color: "white",
    lineHeight: 22,
  },
});

export { Event };
