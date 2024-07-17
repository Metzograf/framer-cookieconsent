# framer-cookieconsent
The `CookieConsentBanner` is a React component designed for seamless integration of a cookie consent banner in your projects. It leverages the popular [vanilla-cookieconsent](https://github.com/orestbida/cookieconsent) library to provide a customizable and user-friendly cookie consent experience.

## Installation
1. Copy Code
2. Open Framer and Go to your project assets
3. Create a new code component and name it CookieConsentBanner
4. Paste Code
5. Configurate to your needs
6. Run test
7. Place the component on every page

## Component Behavior

- On Framer Canvas: The component renders a simple placeholder div with styling to indicate its presence without initializing the cookie consent logic.
- On Published Site: The component dynamically loads the required CSS for the cookie consent and initializes the cookie consent banner with the specified configuration.

## Configuration

The component comes pre-configured with sensible defaults which can be customized. The configuration options are:

- consentModal: Layout and position settings for the consent modal.
- preferencesModal: Layout and position settings for the preferences modal.
- categories: Definitions for necessary and analytics cookies.
- language: Multi-language support with English as the default.

For detailed configuration options, refer to the [vanilla-cookieconsent documentation](https://cookieconsent.orestbida.com/reference/configuration-reference.html).

## Customization with Property Controls

You can add property controls to customize the settings directly within Framer. For example, to adjust the position of the consent banner:

```js
addPropertyControls(CookieConsentBanner, {
    position: {
        type: ControlType.Enum,
        defaultValue: "bottom right",
        options: [
            "top left",
            "top right",
            "bottom right",
            "bottom left",
            "middle center",
        ],
        displaySegmentedControl: false,
    },
});
