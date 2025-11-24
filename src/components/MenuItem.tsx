import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/solid";

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
      <View style={styles.entry}>
        <Text style={styles.label}>{label}</Text>
        <ChevronRightIcon fill="#ffffff" style={{ marginRight: 16 }} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: "#333232ff",
    marginTop: 8,
    justifyContent: "center",
    borderRadius: 6,
    height: 50,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
    maxWidth: "100%",
  },
  entry: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MenuItem;
