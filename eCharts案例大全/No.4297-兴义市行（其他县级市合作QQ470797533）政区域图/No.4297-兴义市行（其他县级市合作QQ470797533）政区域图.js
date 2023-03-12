var uploadedDataURL = "/asset/get/s/data-1610351522364-fhZQMcIdH.geojson";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('tianjin', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
      
    }
    var data = [
      
    ];
    var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};


    option = {
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
        title: {
            show: true,
            x: "center",
            y: "top",
            text: "贵州省兴义行政区域图（其他县级市合作QQ470797533）",
           
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
       
        geo: {
        map: 'tianjin',
        aspectScale: 0.75,
        layoutCenter: ["50%", "51.5%"], //地图位置
        layoutSize: '100%',
        roam: true,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 0.5,
                color: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 1500,
                    x2: 2500,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#009DA1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#005B9E' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
                opacity: 0.5,
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },
        z: 2
    },
    series: [{
        type: 'map',
        map: 'tianjin',
        tooltip: {
            show: false
        },
        label: {
            show: true,
            color: '#FFFFFF',
            fontSize: 16
        },
        aspectScale: 0.75,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '95%',
        roam: true,
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 0.6)',
                borderWidth: 0.8,
                areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 1200,
                    x2: 1000,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#009DA1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#005B9E' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
            },
            emphasis: {
                areaColor: 'rgba(147, 235, 248, 0)'
            }
        },
        zlevel: 1
    }]
         
    
    };
    myChart.setOption(option);
});
myChart.on('georoam', function(params) {
    var option = myChart.getOption(); //获得option对象
    console.log('option的值：',option);
    if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
        option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    } else { //捕捉到拖曳时
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    }
    myChart.setOption(option); //设置option
});