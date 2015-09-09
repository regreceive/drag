angular.module('dragApp')
  .directive('xpDrag', function() {
    return {
      link: function(scope, element, attrs) {
        var dropSuccess = false;
        element.sortable({
          connectWith: '[xp-drop]',
          revert: 100,
          over: function( event, ui ) {
            ui.placeholder.removeClass().addClass('col-md-6');
          },
          start: function( event, ui ) {
            ui.placeholder.html('<div class="thumbnail"><img src="assets/images/shortcut_gis.png" /><div class="caption"><h6>&nbsp;</h6></div></div>');
          },
          stop: function( event, ui ) {
            if (!dropSuccess) {
              element.sortable('cancel');
            }
          },
          remove: function( event, ui ) {
            dropSuccess = true;
          }
        });
      }
    }
  });
