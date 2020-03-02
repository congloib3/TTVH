var app = angular.module('TTVHApp', []);
app.controller('TTVHCtrl', function ($scope, $http) {

 $http.get("data/trandau.json")
   .then(function (response) {
    
       var data;
       data = response.data;
       /*
       var k=data.length;
       for(i=0;i<k;i++)
           data[i].mota = fMoTa(data[i].mota);
        */   
        $scope.danhsach = data;
       
   });

   
function fMoTa(str)
{
    
  var k=0, x=0, m=120, n=50, l=0;
  l = str.length;
  k = str.indexOf(".",n);
  if((k<m) && (k<l)) 
    k = str.indexOf(".", k+1);
  
  if(k==-1 || k > m)
    k = str.indexOf(" ", m-10);
    
  if(k==-1)  k=l;    
  return  str.slice(0, k); 
}

   
});



