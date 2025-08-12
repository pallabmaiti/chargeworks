import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.wattmotive.chargeworks.dev";
  }

  if (IS_PREVIEW) {
    return "com.wattmotive.chargeworks.preview";
  }

  return "com.wattmotive.chargeworks";
};

const getAppName = () => {
  if (IS_DEV) {
    return "Chargeworks (Dev)";
  }

  if (IS_PREVIEW) {
    return "Chargeworks (Preview)";
  }

  return "Chargeworks";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "chargeworks",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "chargeworks",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: false,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#1DB954",
    },
    edgeToEdgeEnabled: true,
    package: getUniqueIdentifier(),
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        resizeMode: "cover",
        ios: {
          image: "./assets/images/splash.png",
          enableFullScreenImage_legacy: true,
        },
        android: {
          image: "./assets/images/splash_android.png",
          imageWidth: 200,
        },
        backgroundColor: "#1DB954",
      },
    ],
    "expo-localization",
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {},
    eas: {
      projectId: "299593f0-51a5-4c37-a2e0-81c412bede05",
    },
  },
  owner: "wattmotive",
});
