angular.module('chatroom', []).config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
