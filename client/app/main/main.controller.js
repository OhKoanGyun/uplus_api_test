'use strict';

angular.module('uplusApiApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.host = '';
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
        name : '기기 펌웨어 업데이트',
        api : '/test/admin/devices/firmware/update',
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
          deviceIdType : '',
          timestamp: ''
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
      clearItem(item.param);
      $scope.currentTest = item;
    };

    $scope.getKey = function(item){
      if(!item) return;

      return Object.keys(item);
    }

    $scope.run = function(){
      $scope.response = null;
      $scope.status = null;

      $scope.currentTest.param.host = $scope.host;
      var result = validate($scope.currentTest.param);
      if(result){
        alert(result);
        return;
      }

      $http({
        url : $scope.currentTest.api,
        method : 'GET',
        params : $scope.currentTest.param
      })
      .then(
        function(response){
          $scope.statusCode = response.data.statusCode;
          $scope.result = response.data.result;
        },
        function(data){
          alert('Error 발생~!!');
        }
      );
    };

    function clearItem(item){
      angular.forEach(item, function(val, key){
        item[key] = '';
      });
    };

    function validate(item){
      var result = null;
      console.log(item);
      angular.forEach(item, function(val, key){
        if(val === ''|| val === null || val === 'undifined'){
          result = key + ' 를 입력 해 주십시오.';
        }
      });
      return result;
    };

  });
