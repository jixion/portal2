function link() {
    return function (scope, element) {
        element.draggable();
    };
}

function canHasDrag() {
    return {
        restrict: 'A',
        link: link()
    };
}

angular.module('portal.can_has_drag', [])
    .directive('canHasDrag', canHasDrag);
