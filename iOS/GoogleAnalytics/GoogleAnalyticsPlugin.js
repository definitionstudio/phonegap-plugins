function GoogleAnalyticsPlugin() {}

GoogleAnalyticsPlugin.prototype.startTrackerWithAccountID = function(id) {
	cordova.exec("GoogleAnalyticsPlugin.startTrackerWithAccountID",id);
};

GoogleAnalyticsPlugin.prototype.trackPageview = function(pageUri) {
	cordova.exec("GoogleAnalyticsPlugin.trackPageview",pageUri);
};

GoogleAnalyticsPlugin.prototype.trackEvent = function(category,action,label,value) {
	var options = {category:category,
		action:action,
		label:label,
		value:isNaN(parseInt(value)) ? -1 : value};
	cordova.exec("GoogleAnalyticsPlugin.trackEvent",options);
};

GoogleAnalyticsPlugin.prototype.setCustomVariable = function(index,name,value,scope) {
	var options = {index:index,
		name:name,
		value:value,
        scope:isNaN(parseInt(scope)) ? 3 : scope};  // page-level default
	cordova.exec("GoogleAnalyticsPlugin.setCustomVariable",options);
};

GoogleAnalyticsPlugin.prototype.hitDispatched = function(hitString) {
	//console.log("hitDispatched :: " + hitString);
};
GoogleAnalyticsPlugin.prototype.trackerDispatchDidComplete = function(count) {
	//console.log("trackerDispatchDidComplete :: " + count);
};

cordova.addConstructor(function() {
  if(!window.plugins) window.plugins = {};
  window.plugins.googleAnalyticsPlugin = new GoogleAnalyticsPlugin();
});
