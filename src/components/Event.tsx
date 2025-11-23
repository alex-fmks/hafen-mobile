import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  date: string;
  intro: string;
  hosts: string;
  motto: string;
  children?: React.ReactNode;
}

const Event: React.FC<Props> = ({
  title,
  date,
  children,
  intro,
  hosts,
  motto,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.verticalAlign}>{children}</View>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.flowText}>{intro}</Text>
      <Text style={styles.flowText}>{hosts}</Text>
      <Text style={styles.flowText}>{motto}</Text>
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
  date: {
    fontSize: 16,
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
    marginBottom: 6,
  },
});

export { Event };
