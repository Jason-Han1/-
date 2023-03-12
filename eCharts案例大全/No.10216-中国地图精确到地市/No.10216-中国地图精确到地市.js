var uploadedDataURL = "/asset/get/s/data-1567128870005-VxHvNFmBk.geoJson";

//var uploadedDataURL = "/asset/get/s/data-1567128613789-7lXxDEeTT.geoJson";

//var uploadedDataURL = "/asset/get/s/data-1566995231026-sj9b1QAPS.geoJson";


$.getJSON(uploadedDataURL,function(chinaGeoJson){
    echarts.registerMap('sum',chinaGeoJson);
      option = {
            title:{
              text:'全国地图-精确到地市'  
            },
            geo:{
                map:'sum',
                roam:true,
                label:{
                    show:false
                }
            },
            
        };
        myChart.setOption(option);   
   
});//中国地图加载完毕