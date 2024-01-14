import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native"; // パラメータ受け取り

const MyAccountPage = () => {
  // 前の画面からパラメータを受け取る際に必要。
  const route = useRoute();
  // route.paramsから、前の画面遷移処理で指定したプロパティを受け取ることができる。
  const { message1, message2 } = route.params;

  return (
    <View>
      <Text>{message1}</Text>
      <Text>{message2}</Text>
    </View>
  );
};

export default MyAccountPage;
