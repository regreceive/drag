angular.module('dragApp')
  .directive('xpDrag', function() {
    return {
      link: function(scope, element, attrs) {
        element.sortable({
          connectWith: '[xp-drop]',
          revert: true,
          over: function( event, ui ) {
            ui.placeholder.removeClass().addClass('col-md-6');
          }
        });
      }
    }
  });
