import { Text, View } from "react-native";

export default function PlansCalendarScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-neutral-900 items-center justify-center px-6">
      <Text className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
        달력
      </Text>
      <Text className="text-base text-neutral-500 dark:text-neutral-300">
        내 일정이 달력에 표시됩니다. (추후 구현)
      </Text>
    </View>
  );
}
