'use strict';

angular.module('uplusApiApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.host = null;
    $scope.testItems = [
      {
        name : '페어링',
        api : '/test/admin/register',
        param :{
          serialNumber : '',
          deviceId : '',
          token : ''
        }
      },
      {
        name : '기기 로그 요청',
        api : '/test/admin/devices/event',
        param :{
          deviceId : '',
          deviceIdType :'',
          start : '',
          end : '',
          offset : '',
          limit : ''
        }
      },
      {
        name : '집합 로그 확인',
        api : '/test/admin/devices/events',
        param :{
          start : '',
          end : '',
          offset : '',
          limit : ''
        }
      },
      {
        name : '기기 상태 조회',
        api : '/test/admin/devices/status',
        param :{
          deviceId : '',
          deviceIdType : ''
        }
      },
      {
        name : '기기 리부팅',
        api : '/test/admin/devices/reset',
        param :{
          deviceId : '',
          deviceIdType : ''
        }
      },
      {
        name : '전력 사용량',
        api : '/test/admin/devices/meteringUsage',
        param :{
          deviceId : '',
          deviceIdType : ''
        }
      },
      {
        name : '실시간 사용량',
        api : '/test/device/realtime',
        param :{
          deviceId : '',
          token : ''
        }
      },
      {
        name : '시간별 사용량',
        api : '/test/device/hourly/usage',
        param :{
          deviceId : '',
          token : ''
        }
      },
      {
        name : '요일별 사용량, 일자별사용량, 월별사용량',
        api : '/test/device/daily/usage',
        param :{
          deviceId : '',
          token : ''
        }
      },
      {
        name : '알림 설정',
        api : '/test/device/events/push/set',
        param :{
          deviceId : '',
          token : ''
        }
      },
      {
        name : '알림 상태조회',
        api : '/test/device/events/push/get',
        param :{
          deviceId : '',
          token : ''
        }
      }
    ];

    $scope.selectTest = function(item){
      $scope.currentTest = item;
    };

    $scope.run = function(){
      if(validate($scope.currentTest.param)){
        alert(result);
        return;
      }

      $scope.currentTest.param.host = $scope.host;

      $http({
        url : $scope.currentTest.api,
        method : 'GET',
        params : $scope.currentTest.param
      })
      .then(
        function(data, status){
          $scope.response = data;
          $scope.status = status;
        },
        function(data){
          alert('Error 발생~!!');
        }
      );
    };

    function validate(item){
      var result = null;

      angular.forEach(item, function(key, val){
        if(val === ''|| val === null || val === 'undifined'){
          result = key + ' 를 입력 해 주십시오.';
        }
      })

      return result;
    }

  });
