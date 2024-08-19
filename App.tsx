import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider>
      <Text>hello world</Text>
    </GluestackUIProvider>
  );
}
