var cityList = ["上海", "北京", "广州", "深圳", "天津", "南京",
    "重庆", "成都", "武汉", "杭州", "青岛", "苏州", "西安",
    "沈阳", "郑州", "宁波", "长沙", "无锡", "大连", "济南",
    "合肥", "厦门", "佛山"
];
var top10CityList;
var top10CityData;

function setMockData() {
    cityList.sort(() => Math.random() > 0.5 ? 1 : -1);
    top10CityList = cityList.slice(0,10);
    top10CityData = top10CityList.map((name)=>{
        var val = parseInt(1000+Math.random() *9999);
        return val;
    });
    top10CityData.sort((a,b)=>a<b?-1:1)
}
setMockData();

console.log(top10CityList,top10CityData);
option = {
    backgroundColor: '#121847',
    title: {
        show: false
    },
    tooltip: {
        show: false,

    },
    grid: {
        borderWidth: 0,
        top: 30,
        left:5,
        right:75,
        bottom: 0,
        textStyle: {
            color: "#fff"
        }
    },
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#363e83',
            }
        },
        axisLabel: {
            show: false,
            inside: false,
        },
        data: top10CityList,
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '14',
                fontFamily: 'PingFangSC-Regular'
            },
            formatter: function(val) {
                return `${val}k`
            },
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: top10CityData || [500, 400, 300, 200, 100],

    }],
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#2f3640',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#2f3640 ',
            }
        },
        axisLabel: {
            show: false,

        },
    },
    series: [{
            name: '',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color:'#00BBFD' 
                    }, {
                        offset: 1,
                        color: '#0085FA'
                    }]),
                    barBorderRadius: 10,
                    borderWidth: 0,
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(105,123, 214, 0.7)'
                }
            },
            zlevel: 2,
            barWidth: '10px',
            data: top10CityData,
            animationDuration: 1500,
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    // position: 'center',
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        fontFamily: 'PingFangSC'
                    },
                    formatter: function(a, b) {

                      
                        return a.name;
                    }
                }
            },
        },

    ],
     animationEasing: 'cubicOut',
    // animationDelayUpdate: function (idx) {
    //     return idx * 1;
    // }
}

setInterval(()=>{
    setMockData();
    option.yAxis[0].data = top10CityList;
    option.yAxis[1].data = top10CityData;
    option.series[0].data= top10CityData;
    myChart.setOption(option,{notMerge:true,lazyUpdate:true});
    console.log(top10CityList,top10CityData);
    console.log('set');
},3000)