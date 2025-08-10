import { Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-neutral-900 items-center justify-center px-6">
      <Text className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
        내 프로필
      </Text>
      <Text className="text-base text-neutral-500 dark:text-neutral-300">
        프로필 정보 및 설정이 여기에 표시됩니다.
      </Text>
    </View>
  );
}
