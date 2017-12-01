/** SCRIPT TO REDIRECT USER TO FORM AT UNINSTALLATION **/
/* Check whether new version is installed */
chrome.runtime.onInstalled.addListener(function(details) {
  /* other 'reason's include 'update' */
  if (details.reason == "install") {
      /* If first install, set uninstall URL */
      var uninstallGoogleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfym2cRHxdZZCzKVn0eWVobWGjnrRLu64QPw19x7GR77tCWfQ/viewform?usp=pp_url&entry.1591633300=Comments&entry.326955045&entry.1696159737';
      /* If Chrome version supports it... */
      if (chrome.runtime.setUninstallURL) {
          chrome.runtime.setUninstallURL(uninstallGoogleFormLink);
      }
  }
});
