app.controller('PhonebookListCtrl', function($scope){
    $scope.msg = "Hello World";
    $scope.firstName = "Ashutosh";
    $scope.lastName = "Bhagwat";
    $scope.fullName = $scope.firstName + $scope.lastName;

    $scope.name = "";
    $scope.mobile = "";
    $scope.email = "";
    $scope.city = "";
    
    $scope.phonebooks = [{
        'name': 'Deepika Padukone',
        'mobile': '1234512345',
        'email': 'dp@example.com',
        'city': 'Mumbai',
        'id': '2',
    },{
        'name': 'Kriti Senon',
        'mobile': '5432154321',
        'email': 'ks@test.com',
        'city': 'Pune',
        'id': '1',
    },
    {
        'name': 'Priyanka Chopra',
        'mobile': '1010101010',
        'email': 'pc@example.com',
        'city': 'Bangalore',
        'id': '3',
    }];

    $scope.orderProp = 'id';

    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;

    $scope.addContact =function() {
        $scope.phonebooks.push({
            name: $scope.name, 
            mobile: $scope.mobile, 
            email: $scope.email, 
            city: $scope.city
        }); 
        $scope.name = '';
        $scope.mobile = '';
        $scope.email = '';
        $scope.city = '';
    };       
});