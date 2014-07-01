'use strict';

angular.module('angularIntroTestApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.IntroOptions = {
      steps:[
        {
          element: '#step1',
          intro: "This is the first tooltip.",
          position: 'bottom'
        },
        {
          element: '#step2',
          intro: "<strong>You</strong> can also <em>include</em> HTML",
            position: 'top'
        },
        {
          element: '#step3',
          intro: 'More features, more fun.',
          position: 'top'
        },
        {
          element: '#step4',
          intro: "Another step.",
          position: 'top'
        },
        {
          element: '#step5',
          intro: 'Get it, use it.',
          position: 'left'
        }
      ],
      showStepNumbers: false,
      exitOnOverlayClick: true,
      exitOnEsc:true,
      nextLabel: '<strong>次へ</strong>',
      prevLabel: '<span style="color:green">戻る</span>',
      skipLabel: 'スキップする',
      doneLabel: '終了する'
    };
  }]);
