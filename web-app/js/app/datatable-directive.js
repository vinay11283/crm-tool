angular.module('ecrmApp').directive('myTable', function() {
        return function(scope, element, attrs) {

            // apply DataTable options, use defaults if none specified by user
            var options = {};
            if (attrs.myTable.length > 0) {
                options = {
                    "bJQueryUI": true,
                    "bPaginate": true,
                    "bFilter": true
                };
            } else {
                options = "";
            }

            // apply the plugin
            var dataTable = element.dataTable({
              destroy: false
              //aaData: response.data
            });


        };
    });
