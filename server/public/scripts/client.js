console.log('JS works now');

var app = angular.module('FoodApp', []);


//controller is JS that have some control over HTML WelcomeControl will be pascal- capital W for welcome
app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController has been loaded');
    var self = this; 
    self.food = '';

    $http({
      method: 'GET',
      url: '/food'
    })
    .then(function(response){
      console.log(response.data)
    })
    .catch(function (error){
      console.log('Error on /food GET', error);
    })

    self.newFood= {
      name: '',
      deliciousness_rating: '',
      is_hot: ''
    };

    self.createNewFood = function (food) {
      $http({
        method: 'POST',
        url: '/food',
        data: food
      })
      .then(function(response){
        console.log(response.data)
      })
      .catch(function (error){
        console.log('Error on /food GET', error);
      })
    }

}])