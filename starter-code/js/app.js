/* setup your angular app here */
var app = angular.module('FoodSort', []);
//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);

app.controller('FoodCtrl', ['$scope', function($scope) {

  $scope.fruit = [
  'Apple',
  'Apricot',
  'Banana'
  ];

  $scope.vegetables = [
  'Artichoke',
  'Arugula',
  'Asparagus'
  ];

  $scope.pool = $scope.fruit.concat($scope.vegetables);  

  $scope.fruit= [];

  $scope.vegetables = [];

    // $scope.fruit.concat($scope.vegetables);

  $scope.moveLeft = function(idx) {
    if ($scope.fruit.indexOf(this.innerHTML) != -1) {
      return;
    } else if ($scope.pool.indexOf(this.innerHTML) != -1) {
        $scope.fruit.push($scope.pool.splice($index));
      }
    } else {
      $scope.fruit.push($scope.vegetables.splice($index));
    }
  }

  $scope.moveRight = function(idx) {
    if ($scope.vegetables.indexOf(this.innerHTML) != -1) {
      return;
    } else if ($scope.pool.indexOf(this.innerHTML) != -1) {
        $scope.vegetables.push($scope.pool.splice($index));
      }
    } else {
      $scope.vegetables.push($scope.fruit.splice($index));
    }
  }

  // $scope.moveRight = function(idx) {
  //   if
  // }

  // $scope.randomFood = [];

  // $scope.random = function(array) {
  //   for (var i = 0; i < array.length; i++) {
  //     $scope.randomFood.push($scope.fruitsAndVegetables.splice(array[Math.floor(Math.random * array.length)], 1);
  //   }
  // }

  // $scope.random($scope.fruitsAndVegetables);

}]);