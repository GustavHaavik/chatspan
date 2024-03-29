import React, { useCallback } from 'react';

import { AuthProvider } from '../context/AuthContext';
import { AxiosProvider } from '../context/AxiosContext';

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = ({ children }) => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded)
            await SplashScreen.hideAsync();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <AuthProvider>
            <AxiosProvider>
                {/* <App /> */}
                <Stack onLayout={onLayoutRootView} />
            </AxiosProvider>
        </AuthProvider>
    )
};

export default Layout;