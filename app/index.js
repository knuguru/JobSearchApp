import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"></ScreenHeaderBtn>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"></ScreenHeaderBtn>
                    ),
                    headerTitle: ""
                }}>
            </Stack.Screen>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={() => {
                        console.log('searchTerm',searchTerm);
                        if (searchTerm) {
                            router.push(`/search/${searchTerm}`)
                        }
                    }}/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;