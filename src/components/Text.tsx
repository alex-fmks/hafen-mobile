import { Text, StyleSheet } from "react-native";

interface Props {
  name: string;
}

const HeadlineText: React.FC<Props> = ({ name }) => {
  return <Text style={styles.headline}>{name}</Text>;
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 20,
    marginBottom: 24,
    color: "white",
    fontWeight: "600",
  },
});

export { HeadlineText };
