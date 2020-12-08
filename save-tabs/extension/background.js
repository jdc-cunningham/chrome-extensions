'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

  // get tabs
  chrome.tabs.query({}, function(tabs){
    tabs.forEach(tb => {
        // chrome.tabs.sendMessage(tb.id, { action: "xxx" });
        console.log(tb.title, '\n');
        console.log(tb.url);
    });
  });
});