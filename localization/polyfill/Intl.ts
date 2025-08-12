// On native, we need to polyfill some of the Intl namespace
import getCanonicalLocales from "@formatjs/intl-getcanonicallocales/polyfill";
import Locale from "@formatjs/intl-locale/polyfill";
import '@formatjs/intl-pluralrules/locale-data/en';
import PluralRules from "@formatjs/intl-pluralrules/polyfill";

export { getCanonicalLocales, Locale, PluralRules };
