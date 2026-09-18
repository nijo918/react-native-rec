import "@/global.css"
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
flex: 1;
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go to Onboarding</Link>
            <Link href="/(auth)/sign_in" className ="mt-4 rounded bg-primary text-white p-4"> Go to Sign in </Link>
            <Link href="/(auth)/sign_up"className ="mt-4 rounded bg-primary text-white p-4"> Go to Sign up </Link>

            <Link href="/app/subscriptions/spotify">Spotify Subscriprions</Link>
            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: { id: "claude"}
                }}
            >
                Cluade Max Subscription
            </Link>
        </SafeAreaView>
    );
}