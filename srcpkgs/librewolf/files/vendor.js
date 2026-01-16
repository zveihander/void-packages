// Disable telemetry engines that were stripped at compile-time
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.unified", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry", false);

// Disable Normandy/Shield
pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");

// Disable Pocket
pref("extensions.pocket.enabled", false);

// Disable Safe Browsing
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);

// Disable Captive Portal detection
pref("network.captive-portal-service.enabled", false);

// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes", 11);

// The default is google and we don't have api keys for it.
pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
