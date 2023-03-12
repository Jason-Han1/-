var starIcon = "/asset/get/s/data-1542262969587-UTRY4YOsU.png";
var locIcon = "/asset/get/s/data-1542251770482-L2DwBYTQj.png";

var datalist=[[
        {
            name: '陕西',
            text: '',
            value: [108.948024, 34.263161, 80],
            symbol: 'image://' + locIcon,
            symbolSize: 16,
        },{
            name: '北京',
            text: '',
            value: [116.405285, 39.904989, 177],
            symbol: 'image://' + starIcon,
            symbolSize: 16,
        }, {
            name: '江苏',
            text: '',
            value: [118.767413, 32.041544, 92],
            symbol: 'image://' + starIcon,
            symbolSize: 16
        }, {
            name: '广东',
            text: '',
            value: [113.280637, 23.125178, 123],
            symbol: 'image://' + starIcon,
            symbolSize: 16
        }, {
            name: '吉林',
            text: '',
            value: [125.3245, 43.886841, 82],
            symbol: 'image://' + starIcon,
            symbolSize: 16
        }
    ],[
        {
            name: '浙江',
            text: '',
            value: [120.153576, 30.287459, 114],
            symbol: 'image://' + locIcon,
            symbolSize: 20,
        },{
            name: '福建',
            text: '',
            value: [119.306239, 26.075302, 116],
            symbol: 'image://' + starIcon,
            symbolSize: 20,
        },{
            name: '天津',
            text: '',
            value: [117.190182, 39.125596, 42],
            symbol: 'image://' + starIcon,
            symbolSize: 20,
        }
    ],[
        {
            name: '北京',
            text: '',
            value: [116.405285, 39.904989, 177],
            symbol: 'image://' + locIcon,
            symbolSize: 20,
        },{
            name: '山东',
            text: '',
            value: [117.000923, 36.675807, 119],
            symbol: 'image://' + starIcon,
            symbolSize: 20,
        },{
            name: '天津',
            text: '',
            value: [117.190182, 39.125596, 42],
            symbol: 'image://' + starIcon,
            symbolSize: 20,
        },{
            name: '江苏',
            text: '',
            value: [118.767413, 32.041544, 92],
            symbol: 'image://' + starIcon,
            symbolSize: 20,
        },{
            name: '新疆',
            text: '',
            value: [87.617733, 43.792818, 67],
            symbol: 'image://' + starIcon,
            symbolSize: 20,
        },{
            name: '内蒙古',
            text: '',
            value: [111.670801, 40.818311, 47],
            symbol: 'image://' + starIcon,
            symbolSize: 20,
        }
    ]]

    
var geoCoordMap = {};

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap('china').geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
}; 

 option = {
        backgroundColor: '#222f59',
        title: {
            text: '客户案例',
            left: 'center',
            textStyle: {
                color: '#bbbec5'
            }
        },
        tooltip:{
            textStyle : {
                color: '#fff',
                decoration: 'none',
            },
            formatter: function(params){
                var text = '';
                if(params.data){
                    datalist.forEach(item => {
                        item.forEach(ele => {
                            if(params.data.name === ele.name){
                                text= ele.text;
                            }
                        })
                    })
                }
                
                return text;
            }
        },
        label: {
            show: false
        },
        geo: {
            map: 'china',
            label: {
                show: false
            },
            silent: true,
            itemStyle: {
                normal: {
                    areaColor: '#203179',
                    borderColor: '#253266',
                    borderWidth: 1,
                    shadowColor: '#36437c',
                    shadowBlur: 1.5
                },
            },
        },
        series: [{
            type: 'map',
            map: 'china',
            selectedMode:true,
            // silent: true,
            itemStyle: {
                normal: {
                    borderColor: 'grey',
                    areaColor: '#203179',
                    label: {
                        show: false
                    }
                },
                emphasis: {
                    areaColor: '#203179',
                    label: {
                        show: false
                    }
                }
            },
            data: [
                {
                    name:"北京",
                    value:1,
                    itemStyle: {
                        normal: {
                          color: '#1f7eff'
                        },
                        emphasis: {
                            areaColor: '#1f7eff',
                            label: {
                                show: false
                            }
                        }
                    }
                },{
                    name:"陕西",
                    value:1,
                    itemStyle: {
                      normal: {
                          color: '#1f7eff'
                      },
                        emphasis: {
                            areaColor: '#1f7eff',
                            label: {
                                show: false
                            }
                        }
                    }
                },{
                    name:"江苏",
                    value:1,
                    itemStyle: {
                      normal: {
                          color: '#1f7eff'
                      },
                        emphasis: {
                            areaColor: '#1f7eff',
                            label: {
                                show: false
                            }
                        }
                    }
                },{
                    name:"广东",
                    value:1,
                    itemStyle: {
                      normal: {
                          color: '#1f7eff'
                      },
                        emphasis: {
                            areaColor: '#1f7eff',
                            label: {
                                show: false
                            }
                        }
                    }
                },{
                    name:"吉林",
                    value:1,
                    itemStyle: {
                      normal: {
                          color: '#1f7eff'
                      },
                        emphasis: {
                            areaColor: '#1f7eff',
                            label: {
                                show: false
                            }
                        }
                    }
                },
            ]
        },{
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: datalist[0],
        },]
    };
    
var index = 0;
var timeTicket = null;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
    if(index < datalist.length-1){
        index++;
        
    }else{
        index = 0;
    }
    
    option.series[1].data = datalist[index]
    
    var data1 = option.series[1].data;
    
    var data= [];
     data1.forEach(item => {
        data.push(
            {
                name:item.name,
                value:1,
                itemStyle: {
                  normal: {
                      color: '#1f7eff'
                  },
                    emphasis: {
                        areaColor: '#1f7eff',
                        label: {
                            show: false
                        }
                    }
                }
            }
        )
        return data
    })
    
    option.series[0].data = data
    myChart.setOption(option); 
    
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: data[0]
    });
}, 2000);
