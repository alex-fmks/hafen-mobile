import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

interface Props {
  label: string;
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  fullWidth?: boolean;
  customWidth?: string;
  onPress?: () => void;
  loading?: boolean;
}

const PrimaryButton: React.FC<Props> = ({
  label,
  fullWidth,
  onPress,
  loading = false,
}) => {
  const touchProps = {
    style: [
      styles.primaryButton,
      fullWidth ? styles.fullWidth : styles.customWidth,
    ],
    underlayColor: "#CD7405",
  };
  return (
    <TouchableHighlight {...touchProps} onPress={onPress} disabled={loading}>
      <View>
        <Text style={[styles.label, loading ? styles.labelLoading : null]}>
          {label}
        </Text>

        {loading ? (
          <View style={StyleSheet.absoluteFill}>
            <ActivityIndicator size="small" color="#fff" />
          </View>
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

const SecondaryButton: React.FC<Props> = ({
  label,
  fullWidth,
  onPress,
  loading = false,
}) => {
  const touchProps = {
    style: [
      styles.secondaryButton,
      fullWidth ? styles.fullWidth : styles.customWidth,
    ],
    underlayColor: "#000",
  };
  return (
    <TouchableHighlight {...touchProps} onPress={onPress} disabled={loading}>
      <View>
        <Text style={[styles.label, loading ? styles.labelLoading : null]}>
          {label}
        </Text>

        {loading ? (
          <View style={StyleSheet.absoluteFill}>
            <ActivityIndicator size="small" color="#fff" />
          </View>
        ) : null}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#DE7F07",
    width: "100%",
    height: 50,
    borderRadius: 6,
    justifyContent: "center",
    marginTop: 20,
    position: "relative",
  },
  secondaryButton: {
    backgroundColor: "#1F2937",
    width: "100%",
    height: 30,
    borderRadius: 6,
    justifyContent: "center",
    marginTop: 20,
    position: "relative",
  },
  fullWidth: {
    width: "100%",
  },
  customWidth: {
    width: "45%",
  },
  label: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "600",
  },
  labelLoading: {
    opacity: 0,
  },
});

export { PrimaryButton, SecondaryButton };
