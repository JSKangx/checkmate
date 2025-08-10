import { Text, View } from "react-native";

export default function PlansScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-neutral-900 items-center justify-center px-6">
      <Text className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
        내 일정
      </Text>
      <Text className="text-base text-neutral-500 dark:text-neutral-300">
        아직 추가된 일정이 없습니다.
      </Text>
    </View>
  );
}
