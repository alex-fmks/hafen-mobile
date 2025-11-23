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
    fontWeight: "600",
    color: "white",
    marginBottom: 6,
  },
});

export { HeadlineText };
