import * as Localization from "expo-localization";
import { isLocale } from "./i18n/i18n-util";

export const DEFAULT_LOCALE =
  Localization.getLocales()
    .map((it) => it.languageTag)
    .find(isLocale) ?? "en";
