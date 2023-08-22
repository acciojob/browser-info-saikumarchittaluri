//your JS code here. If required.
// Get references to the browser-info div
        var browserInfoDiv = document.getElementById("browser-info");

        // Get browser information from the navigator object
        var userAgent = navigator.userAgent;
        var browserName = navigator.appName;
        var browserVersion = navigator.appVersion;

        // Display the browser information in the div
        browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;

        // You can also use template literals for a cleaner syntax
        // browserInfoDiv.textContent = `You are using ${browserName} version ${browserVersion}`;