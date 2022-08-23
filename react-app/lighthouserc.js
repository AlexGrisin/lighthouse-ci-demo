module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: ["http://localhost:3000"],
      startServerCommand: "yarn start",
      startServerReadyTimeout: 5000,
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
      ignoreDuplicateBuildFailure: true,
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "apple-touch-icon": "warn",
        "maskable-icon": "warn",
        "meta-description": "warn",
        "service-worker": "warn",
        "splash-screen": "warn",

        "color-contrast": "warn",
        "dom-size": "warn",

        // Issue caused by 3rd party scripts
        "errors-in-console": "warn",
        "unused-javascript": "warn",

        // Issue appears when running storefront:lighthouse on
        // http://localhost:3000/nl_nl/shop/test/testproducts/1text-sig1-tst1
        // But the issue is not present in the Lighthouse HTML audit in .lighthouse/
        // nor in DevTools Lighthouse.
        // TODO: Needs further investigation.
        "unminified-css": "warn",

        // Issue caused by Audioeye
        "font-display": "warn",
        "link-name": "warn",

        // Issue caused by Usabilla script
        "no-document-write": "warn",

        // Issues caused by BazaarVoice script
        "no-unload-listeners": "warn",
        "unused-css-rules": "warn",
        "duplicate-id-active": "warn",

        // Enormous network payload is caused mostly by requests via GTM
        "total-byte-weight": "warn",

        // TODO: Remove when Lighthouse releases v10.
        // https://github.com/GoogleChrome/lighthouse/issues/11631
        "unsized-images": "warn",

        // Issue caused by BazaarVoice and Newrelic
        "uses-passive-event-listeners": "warn",

        // Image links for ProductImageGallery does not have a `{{dimensions}}` placeholder
        // that is used to replace with proper `h_` value which will return a properly sized image.
        // Retrieved images are larger than needed (4000 x 4000 px).
        "uses-responsive-images": "warn",

        // Caused by the 'noindex, nofollow' value for meta robots (from CMS).
        // TODO: Remove once robots tags are finalized?
        "is-crawlable": "warn",

        // TODO: Remove if or when CSP is implemented.
        "csp-xss": "warn",

        // Issue is caused by navigation buttons being too small for Product Image Gallery on mobile.
        "tap-targets": "warn",

        // Issue is caused by the link "More info" in the cookie notice widget,
        // "More info" is not descriptive enough.
        "link-text": "warn",

        // TODO: Remove once https://g-star.atlassian.net/browse/FS-663 is addressed.
        "valid-source-maps": "warn",

        // Issue is coming from GraphQL endpoint.
        "uses-text-compression": "warn",

        // Issue is caused by Payment Methods images being loaded first (CSS gets loaded first,
        // so background images get discovered/loaded first too) even when it resides at the bottom
        // of the page.
        // TODO: Lazy load background images via JS? Remove this line once resolved.
        // https://css-tricks.com/the-complete-guide-to-lazy-loading-images/#aa-chapter-4-lazy-loading-css-background-images
        "offscreen-images": "warn",

        // TODO: Remove once https://g-star.atlassian.net/browse/FS-684 is addressed.
        "third-party-facades": "warn",

        // Issue is caused by CookieNotice component
        // https://web.dev/non-composited-animations/?utm_source=lighthouse&utm_medium=devtools
        // TODO: Remove once resolved
        "non-composited-animations": "warn",

        // Issue is caused by g-star.my.salesforce.com
        "unminified-javascript": "warn",
      },
    },
  },
};
