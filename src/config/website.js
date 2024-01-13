module.exports = {
  // General settings
  pathPrefix: "/", // If you deploy your site to yourdomain.tld/blog/ your pathPrefix should be "blog/"
  title: "Fathanfi Personal Blog", // Navigation and Site Title
  titleTemplate: "%s", // To Add extra part in title. the title replace the %s. Example: `%s | Site title`
  description: "A personal blog for Fathan Fisabilillah",
  siteUrl: "https://fathanfi.com/", // Domain address of your site. Do not add trailing slash!
  siteLanguage: "en", // Language Tag on <html> element

  // place logo images in static/images folder - Used as site logo
  logoLight: "/images/fathanfi-logo-coffee.svg",
  logoDark: "/images/fathanfi-logo-coffee-dark.svg",

  // sticky nav style
  stickyNav: true,

  //place default cover image in static/images folder - used in home page cover
  cover: "/images/cover.jpg",

  // number of featured posts to show on home page
  featuredPostCount: 1,

  // number of latest posts to show on home page before load more button
  postPerPage: 8,

  disqusShortName: "arun-gatsby", // disqus shortname for disqus comment

  // JSONLD / Manifest for SEO
  titleAlt: "Fathan Fisabilillah Personal Blog", // Title for JSONLD
  headline: "Fathan Fisabilillah Personal Blog", // Headline for schema.org JSONLD
  favicon: "src/assets/images/icon.png", // Used for manifest favicon generation
  shortName: "Fathan", // shortname for manifest. MUST be shorter than 12 characters
  author: "Fathan Fisabilillah", // Author for schemaORGJSONLD
  themeColor: "#0057ff",
  backgroundColor: "#ffffff",

  //Twitter and facebook data for SEO
  twitterUsername: "@fi_fathan", // Twitter Username
  facebook: "fathanfi", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "XX-XXXXXXXXX-X",

  // mailchimp endpoint.
  // To know how to get it see plugin documentation https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
  mailchimpEndpoint:
    "https://gbjsolution.us4.list-manage.com/subscribe/post?u=a63b2fed3ed61b70bf56d1aed&amp;id=7ae9965a25",
}
