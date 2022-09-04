
import { I18nManager } from "react-native";
import i18n from 'i18n-js'
import memoize from 'lodash.memoize'

const translationGetters = {
    en: () => require('translations/en.json')
}

export const translate = memoize(
    key => i18n.t(key),
    (key, config) => (config ? key + JSON.stringify(config) : key),
)
export const setI18nConfig = () => {
    // fallback if no available language fits
    const fallback = { languageTag: 'en', isRTL: false }

    const { languageTag, isRTL } = fallback;


    // clear translation cache
    translate?.cache?.clear?.();

    // update layout direction
    I18nManager.forceRTL(isRTL);

    i18n.translations = { [languageTag]: translationGetters.en() };
    i18n.locale = languageTag;
};