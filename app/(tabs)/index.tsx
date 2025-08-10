import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-neutral-900">
      {/* 대형 헤더 */}
      <View className="pt-16 pb-6 px-6 bg-primary rounded-b-3xl shadow-lg">
        <Text className="text-2xl font-bold text-white">안녕하세요 👋</Text>
        <Text className="text-base text-white/80 mt-1">
          오늘 어떤 일정을 준비할까요?
        </Text>
      </View>
      {/* 오늘의 일정 요약 */}
      <View className="mx-6 mt-8 p-5 bg-secondary rounded-2xl shadow flex-row items-center justify-between">
        <View>
          <Text className="text-lg font-semibold text-neutral-900 dark:text-white">
            오늘의 일정
          </Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-300 mt-1">
            등록된 일정이 없습니다.
          </Text>
        </View>
        <Ionicons name="calendar-outline" size={32} color="#4F8EF7" />
      </View>
      {/* 플로팅 일정 추가 버튼 */}
      <TouchableOpacity
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-primary rounded-full px-8 py-4 flex-row items-center shadow-lg"
        onPress={() => {
          /* TODO: 일정 추가 폼 이동 */
        }}
        activeOpacity={0.85}
      >
        <Ionicons name="add-circle" size={28} color="#fff" />
        <Text className="text-white text-lg font-semibold ml-2">
          일정 추가하기
        </Text>
      </TouchableOpacity>
    </View>
  );
}
