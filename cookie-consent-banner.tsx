import { useEffect } from "react"
import { useIsOnFramerCanvas, addPropertyControls, ControlType } from "framer"

import * as CookieConsent from "vanilla-cookieconsent"

export default function CookieConsentBanner(props) {
    const isOnFramerCanvas = useIsOnFramerCanvas()

    // Show Cookie Consent not on Framer Canvas
    if (isOnFramerCanvas) {
        return <div key="wrapper" id="cookiebanner" style={FramerCanvas}></div>
    } else {
        useEffect(() => {
            const link = document.createElement("link")
            link.href =
                "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css"
            link.rel = "stylesheet"
            document.head.appendChild(link)

            return () => {
                document.head.removeChild(link)
            }
        }, [])

        useEffect(() => {
            /**
             *
             * All config. options available here:
             * https://cookieconsent.orestbida.com/reference/configuration-reference.html
             */

            CookieConsent.run({
                root: "#cookiebanner",
                guiOptions: {
                    consentModal: {
                        layout: "box",
                        position: "bottom right",
                        equalWeightButtons: true,
                        flipButtons: true,
                    },
                    preferencesModal: {
                        layout: "bar",
                        position: "right",
                        equalWeightButtons: true,
                        flipButtons: false,
                    },
                },
                categories: {
                    necessary: {
                        readOnly: true,
                    },
                    analytics: {
                        autoClear: {
                            cookies: [
                                {
                                    name: /^(_ga|_gid)/,
                                },
                            ],
                        },
                    },
                },
                language: {
                    default: "en",
                    // rtl: "ar", // When used arabic
                    translations: {
                        en: {
                            consentModal: {
                                title: "Hello traveller, it's cookie time!",
                                description:
                                    "We use cookies to optimize our website and provide you with the best possible experience. Some cookies are necessary for the operation of the website, while others help us improve and analyze your use of our website.",
                                acceptAllBtn: "Accept all",
                                acceptNecessaryBtn: "Reject all",
                                showPreferencesBtn: "Manage preferences",
                                footer: '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
                            },
                            preferencesModal: {
                                title: "Consent Preferences Center",
                                acceptAllBtn: "Accept all",
                                acceptNecessaryBtn: "Reject all",
                                savePreferencesBtn: "Save preferences",
                                closeIconLabel: "Close modal",
                                serviceCounterLabel: "Service|Services",
                                sections: [
                                    {
                                        title: "Cookie Usage",
                                        description: "Cookie Usage description",
                                    },
                                    {
                                        title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                                        description:
                                            "Strictly Necessary Cookies description ",
                                        linkedCategory: "necessary",
                                    },
                                    {
                                        title: "Analytics Cookies",
                                        description:
                                            "Analytics Cookies description",
                                        linkedCategory: "analytics",
                                    },
                                    {
                                        title: "More information",
                                        description:
                                            'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
                                    },
                                ],
                            },
                        },

                        /*
                        fr: {
                           // Add more translations 
                        },
                        */
                    },
                    autoDetect: "browser",
                },
            })
        }, [])
        return (
            <div key="wrapper" id="cookiebanner" style={containerStyle}></div>
        )
    } // Endif
}

/**
 * You can add some property Controls to change settings in framer directly
 * addPropertyControls(CookieConsentBanner, {
 *    position: {
 *        type: ControlType.Enum,
 *        defaultValue: "bottom right",
 *        options: [
 *            "top left",
 *            "top right",
 *            "bottom right",
 *            "bottom left",
 *            "middle center",
 *        ],
 *        displaySegmentedControl: false,
 *    },
 * })
 */

const containerStyle = {
    height: "500px",
    width: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const FramerCanvas = {
    height: "500px",
    width: "500px",
    padding: "32px",
    overflow: "hidden",
    backgroundColor: "white",
}
