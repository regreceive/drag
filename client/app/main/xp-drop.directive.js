angular.module('dragApp')
  .directive('xpDrop', function() {
    return {
      link: function(scope, element, attrs) {
        element.sortable({
          activate: function( event, ui ) {
            console.log('active');
          },
          beforeStop: function( event, ui ) {
            console.log('beforeStop')
          },
          change: function( event, ui ) {
            console.log('change');
          },
          create: function( event, ui ) {
            console.log('create');
          },
          deactivate: function( event, ui ) {
            console.log('deactivate');
          },
          out: function( event, ui ) {
            console.log('out');
          },
          over: function( event, ui ) {
            console.log('over');
            ui.placeholder.removeClass().addClass('col-md-2 col-lg-2 col-sm-3');
            ui.placeholder.html('<div class="thumbnail"><img src="assets/images/shortcut_gis.png" /><div class="caption"><h6>&nbsp;</h6></div></div>');
          },
          receive: function( event, ui ) {
            console.log('receive');
            ui.item.removeClass().addClass('col-md-2 col-lg-2 col-sm-3');
          },
          remove: function( event, ui ) {
            console.log('remove');
          },
          sort: function( event, ui ) {
            console.log('sort');
          },
          start: function( event, ui ) {
            console.log('start');
          },
          stop: function( event, ui ) {
            console.log('stop');
          },
          update: function( event, ui ) {
            console.log('update');
          }
        })
      }
    }
  });
