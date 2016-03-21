(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var datetimeFactory = function(methodName) {
      return function () {
        return (new Date())[methodName]();
      };
    };

    ext.get_hours = datetimeFactory('getHours');
    ext.get_minutes = datetimeFactory('getMinutes');
    ext.get_seconds = datetimeFactory('getSeconds');
    ext.get_time = datetimeFactory('toLocaleTimeString');
    ext.get_time_zone = datetimeFactory('getTimezoneOffset');

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['r', 'hours', 'get_hours'],
          ['r', 'minutes', 'get_minutes'],
          ['r', 'seconds', 'get_seconds'],
          ['r', 'time', 'get_time'],
          ['r', 'time zone', 'get_time_zone']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Time', descriptor, ext);
})({});
