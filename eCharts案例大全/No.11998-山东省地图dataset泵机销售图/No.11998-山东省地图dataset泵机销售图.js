// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
var uploadedDataURL = "/asset/get/s/data-1517645039291-B1vgpymUz.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shandong', geoJson);
    myChart.hideLoading();
var mapdata = [
    ['济南市','菏泽市','深圳市'],
    [117.121225, 36.66466, 390],
    [115.480656, 35.23375, 158],
    [114.07, 22.62,200],
]
    option = {
        backgroundColor: '#f1f1f1',
        title: {
            top:20,
            text: '山东省泵机销售图',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#020933'
            }
        },    
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name;
              }else if(params.seriesType == "scatter"){
                return params.marker + params.data[2]
              }else{
              	return params.name;
              }
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: {
                color: '#020933'
            }
        }, 
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], 
            calculable: true,
            seriesIndex: [1],
            inRange: {}
        },
        geo: {
            show: true,
            map: 'shandong',
            label: {
                normal: {
                    show: false,
                    color:'#020933'
                },
                emphasis: {
                    show: true,
                    color:'#020933'
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#c7c7c7',
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#b5b3b3',
                }
            }
        },
        series : [
      {
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: function (val) {
                return val[2] / 30;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            }
        },
         {
            type: 'map',
            map: 'shandong',
            geoIndex: 0,
            aspectScale: 0.75, 
            showLegendSymbol: false, 
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#FFFFFF',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false
        }
    ],
    dataset: {source: mapdata}
    };
    myChart.setOption(option);
});