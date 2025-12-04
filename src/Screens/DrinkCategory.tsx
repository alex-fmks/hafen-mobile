import { RouteProp, useRoute } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../context/HeaderProvider";
import { View, Text } from "react-native";
import { RootStackParamList } from "@/Router";

const DrinkCategory = () => {
  const route = useRoute<RouteProp<RootStackParamList, "DrinkCategory">>();
  const { category } = route.params;
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle(category);
  }, [category]);

  return (
    <View>
      <Text>{category} Inhalt hier…</Text>
    </View>
  );
};

export { DrinkCategory };
