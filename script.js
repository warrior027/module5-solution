(function () {
    'use strict';

    var app = angular.module('RestaurantApp', []);

    app.controller('MenuController', MenuController);

    MenuController.$inject = ['$scope'];

    function MenuController($scope) {
        $scope.showMenu = false;
        $scope.selectedCategory = '';
        $scope.menuItems = [];

        $scope.loadMenuItems = function (category) {
            // Simulated AJAX call to fetch menu items for the selected category
            // Replace this with actual AJAX call to your server
            // For demo purposes, we're using hardcoded menu items
            $scope.selectedCategory = category;
            $scope.menuItems = getMenuItems(category);
            $scope.showMenu = true;
        };

        // Simulated data for menu items
        function getMenuItems(category) {
            var menuItems = [];
            switch (category) {
                case 'Lunch':
                    menuItems.push({ name: 'Salad', description: 'Fresh salad with seasonal vegetables' });
                    menuItems.push({ name: 'Sandwich', description: 'Classic sandwich with ham, cheese, and lettuce' });
                    break;
                case 'Dinner':
                    menuItems.push({ name: 'Steak', description: 'Grilled steak served with mashed potatoes' });
                    menuItems.push({ name: 'Pasta', description: 'Spaghetti with marinara sauce and meatballs' });
                    break;
                case 'Sushi':
                    menuItems.push({ name: 'California Roll', description: 'Avocado, crab, and cucumber wrapped in seaweed' });
                    menuItems.push({ name: 'Sashimi', description: 'Assortment of fresh raw fish slices' });
                    break;
            }
            return menuItems;
        }
    }
})();
