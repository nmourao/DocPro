import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const blocks = [
  { title: "Upcoming deadlines", data: ["Tax filing: Apr 10", "Insurance renewal: Apr 14"] },
  { title: "Expiring documents", data: ["Passport: 42 days", "Driver license: 83 days"] },
  { title: "Bills to pay", data: ["Mortgage: €980", "Electricity: €88"] },
  { title: "Assets", data: ["Property: 1", "Vehicles: 2", "Accounts: 4"] }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.brand}>Life Admin</Text>
        <Text style={styles.tagline}>Your life, organized in one place.</Text>

        {blocks.map((block) => (
          <View key={block.title} style={styles.card}>
            <Text style={styles.cardTitle}>{block.title}</Text>
            {block.data.map((item) => (
              <Text style={styles.item} key={item}>
                • {item}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fb" },
  content: { padding: 16, gap: 12 },
  brand: { fontSize: 28, fontWeight: "700", color: "#0e1f3d" },
  tagline: { color: "#4a5a73", marginBottom: 8 },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dce4f1",
    padding: 14
  },
  cardTitle: { fontSize: 16, fontWeight: "600", color: "#0f2b56", marginBottom: 8 },
  item: { color: "#304056", marginBottom: 3 }
});
