import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

interface Props {
  label: string;
  large: boolean;
  marginLeft?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const MenuItem: React.FC<Props> = ({ label, icon, onPress }) => {
  const touchProps = {
    style: styles.tile,
    underlayColor: "#CD7405",
  };
  return (
    <TouchableHighlight {...touchProps} onPress={onPress}>
      <View style={styles.itemLabel}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    alignItems: "center",
  },
  tile: {
    backgroundColor: "#333232ff",
    width: "49%",
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    padding: 20,
    height: 100,
  },
  label: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    maxWidth: "100%",
  },
});

export default MenuItem;
