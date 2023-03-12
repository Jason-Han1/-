
var uploadedDataURL = "/asset/get/s/data-1559121640669-cC3-ztp_y.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shanghai', geoJson);
    myChart.hideLoading();
    let chartData=[
       {name: '上海市区', latlong:[121.430317, 31.222771],value:Math.random()*200},
       {name: '闵行区'  , latlong:[121.375972, 31.111658],value:Math.random()*200},
       {name: '宝山区'  , latlong:[121.489934, 31.398896],value:Math.random()*200},
       {name: '嘉定区'  , latlong:[121.250333, 31.383524],value:Math.random()*200},
       {name:'浦东新区' , latlong:[121.567706, 31.245944],value:Math.random()*200},
       {name: '金山区'  , latlong:[121.330736, 30.724697],value:Math.random()*200},
       {name: '松江区'  , latlong: [121.223543, 31.03047],value:Math.random()*200},
       {name: '青浦区'  , latlong:[121.113021, 31.151209],value:Math.random()*200},
       {name: '奉贤区'  , latlong:[121.458472, 30.912345],value:Math.random()*200},
       {name: '崇明区'  , latlong:[121.397516, 31.626946],value:Math.random()*200},
        ]

   chartData=chartData.map((item)=>{
       let a=[...item.latlong,item.value]
       return  {name:item.name,value:item.value,scatter:[...item.latlong,item.value]}
   })
   debugger

    option = {
        backgroundColor: 'rgba(10,12,55,1)',
       
        tooltip: {
            trigger: 'item',
            backgroundColor: '#09bdb1',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value;
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        legend: {
            orient: 'vertical',
            top: 'top',
            left: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
           map: 'shanghai',
               itemStyle: {
                    normal: {
                        areaColor: '#24CFF4',
                        borderColor: '#53D9FF',
                        borderWidth: 1.3,
                        shadowBlur: 15,
                        shadowColor: 'rgb(58,115,192)',
                        shadowOffsetX: 7,
                        shadowOffsetY: 6,
                    },
                    emphasis: {
                        areaColor: '#8dd7fc',
                        borderWidth: 1.6,
                        shadowBlur: 25,
                    }

                },
        },
          visualMap: {
                //min: 0,
                //max: 1,
                left: '3%',
                bottom: '5%',
                calculable: true,
                seriesIndex: [0],
                inRange: {
                    color: ['#24CFF4', '#2E98CA', '#1E62AC']
                },
                textStyle: {
                    color: '#24CFF4'
                }
            },
        series: [ {
                    
                    type: 'map',
                    geoIndex: 0,
                    map: 'shanghai',
                    roam: true,
                    zoom: 1.3,
                    tooltip: {
                        trigger: "item",
                        formatter: p => {
                            let val = p.value;
                            if (p.name == '南海诸岛') return
                            if (window.isNaN(val)) {
                                val = 0;
                            }
                            let txtCon =
                                "<div style='text-align:left'>" + p.name + ":<br />销售额：" + val.toFixed(2) + '万</div>';
                            return txtCon;
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    data: chartData,

                },{
                    name: '散点',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    rippleEffect: {
                        brushType: 'fill'
                    },
                    itemStyle: {
                        normal: {
                            color: '#F4E925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: chartData.map((it)=>{
                        return {name:it.name,value:it.scatter}
                    }),
                     symbolSize: function(val) {
                         return val[2] / 10;
                     },
                    showEffectOn: 'render', //加载完毕显示特效
                }
        ]
    };
    myChart.setOption(option);
});