import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

interface Props {
  label: string;
  marginLeft?: string;
  onPress?: () => void;
}

const MenuItem: React.FC<Props> = ({ label, onPress }) => {
  const touchProps = {
    style: styles.tile,
    underlayColor: "#222222ff",
  };
  return (
    <TouchableHighlight {...touchProps} onPress={onPress}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "#333232ff",
    width: "50%",
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    height: 50,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    maxWidth: "100%",
  },
});

export default MenuItem;
