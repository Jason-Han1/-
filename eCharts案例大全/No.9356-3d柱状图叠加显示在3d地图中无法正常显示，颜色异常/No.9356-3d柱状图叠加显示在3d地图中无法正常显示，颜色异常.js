var uploadedDataURL = "/asset/get/s/data-1573438136557-ziCzN_9H.json";


var data2 = [{
        lx : '社情民意',
        name  : '长沙',
        value : [ 112.982279 ,28.19409 , 45]
    }];



var data1 = [{
        lx : '微建议',
        name  : '长沙',
        value : [ 112.982279 ,28.19409 , 98]
    }];







$.getJSON( uploadedDataURL , function(data){
    
    
    echarts.registerMap('hunan', data);

    var option = {
      
        geo3D: { //地图的具体参数
            map: 'hunan', //地图范围
        },
        series: [{
            minHeight: 0.1,
            stack: "a",
            type: "bar3D",
            coordinateSystem: 'geo3D',
            opacity: 1,
            bevelSize: 0.3,
            
            itemStyle: {
                color: '#62FAFB',
            },
            data: data1,
        }, {
            type: "bar3D",
            stack: "a",
            minHeight: 0.1,
            coordinateSystem: 'geo3D',
     
            opacity: 1,
            bevelSize: 0.3,
            itemStyle: {
                color: '#E5D02D',
            },
            data: data2,
        }]
    };
    
    
    
    
    
    myChart.setOption(option);

    
})