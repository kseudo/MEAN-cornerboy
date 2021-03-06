/**
 * Created with JetBrains PhpStorm.
 * User: user
 * Date: 07/09/2013
 * Time: 16:13
 * To change this template use File | Settings | File Templates.
 */

function HomeController($scope){
    $scope.alerts = [
        { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: "Another alert!"});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}