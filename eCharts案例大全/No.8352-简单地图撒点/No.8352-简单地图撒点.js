
var uploadedDataURL = "https://geo.datav.aliyun.com/areas/bound/310000_full.json";
var scatterData=[];//用于各区撒点
var shTempData = [] ;// 临时数据
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shanghai', geoJson);
     myChart.hideLoading();
    for(var i=0;i<geoJson.features.length;i++){
       scatterData[i]={
           name:geoJson.features[i].properties.name,
           value:geoJson.features[i].properties.centroid.concat(i)
       }
       shTempData[i] ={
           name:geoJson.features[i].properties.name,
           value:i
       }
    }
 console.log(scatterData );
 console.log(shTempData);
 option = {
        backgroundColor: '#091c3d',
        title: {
            top:20,
            text: '',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },    

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
        geo: {
            show: true,
            map: 'shanghai',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
          {
                name: 'scatter', //地图各区撒点
                type: 'scatter',
                coordinateSystem: 'geo',
                data: scatterData,
                symbolSize:10,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F4E925'
                    }
                }
        },
         {
            type: 'map',
            map: 'shanghai',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
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
            animation: false,
            data: shTempData
        }   
    ]
    };  
    myChart.setOption(option);    
});


   