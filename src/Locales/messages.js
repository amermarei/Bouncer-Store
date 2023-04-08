import arhome from "./ar/home.json";
import enhome from "./en/home.json";
import enFooter from "./en/footer.json"
import arFooter from "./ar/footer.json"
const messages = {
    en: {
        message: {
            hello: 'Hello world'
        },
        lang: {
            EN: "EN",
            AR: "AR",
            lang: "EN"
        },
        home: enhome,
        footer: enFooter
    },
    ar: {
        home: arhome,
        footer: arFooter,
        lang: {
            EN: "إنجليزية",
            AR: "عربية",
            lang: "عربية"
        }
    }
}
export default messages;