let echartData = {
    inner: [
        {
            value: 31.86,
            unit: '件',
            name: '大工业'
        },
        {
            value: 5.49,
            unit: '件',
            name: '非、工业'
        },
        {
            value: 3.2,
            unit: '件',
            name: '非居民'
        },
        {
            value: 3.65,
            unit: '件',
            name: '商业'
        },
        {
            value: 1.22,
            unit: '件',
            name: '农业'
        },
         {
            value: 11.83,
            unit: '件',
            name: '居民'
        }
    ],
    outer: [
        {
            value: 32.76,
            unit: '件',
            name: '大工业'
        },
        {
            value: 5.74,
            unit: '件',
            name: '非、工业'
        },
        {
            value: 3.31,
            unit: '件',
            name: '非居民'
        },
        {
            value: 4.42,
            unit: '件',
            name: '商业'
        },
        {
            value: 1.31,
            unit: '件',
            name: '农业'
        },
         {
            value: 10.51,
            unit: '件',
            name: '居民'
        }
    ]
}

// 获取图例数据
var arrName = getArrayValue(echartData.outer , "name");

function getArrayValue(array, ke) {
    var ke = ke || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[ke]);
        });
    }
    return res;
}


option = {
    
     title: [{
        text: '单位：亿千瓦时',
        top: 'center',
        left: '34.5%',
        textStyle: {
            fontSize: 10,
            color:'#ffffff',
            lineHeight: 26,
            fontWeight: 400
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
        color: ['#8a42ff', '#fc8d89', '#24FEB4', '#f48639', '#04c8ff', '#66ffcc', '#FC6060'],
    legend: {
        show: true,
        top: "center",
        left: '80%',
        data: arrName,
        itemWidth: 20,
        itemHeight: 20,
        padding: [0, 5],
        itemGap: 25,
        textStyle: {
            color: '#fff'
        },
        formatter: function(name) {
            return name + '          ' 
            // return "{title|" + name + "}\n{value|" + (objData[name].value) + "人}"
        },
    },
    series: [
         //最外层圆环
        {
            name: '圆圈',
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['79%', '80%'],
            center: ["40%", "50%"],
            hoverAnimation: false,
            color: "#ffffff",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[{
                value: 1,
                name: '',
                 itemStyle:{
                    normal: {
                        color: '#ffffff'
                    }
                }
            }]
        },
      
        {
            name: '2019年4月',
            type: 'pie',
            radius: ['50%', '75%'],
            center: ["40%", "50%"],
            startAngle: '240',
            data: echartData.outer,
            labelLine: {
                normal: {
                    length: 20,
                    length2: 140,
                    lineStyle: {
                        color: '#e6e6e6'
                    }
                }
            },
            itemStyle: { // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    formatter: params => {
                        return (
                            params.value 
                        );
                    },
                    fontSize: 10,
                    color: '#000',
                    // padding: [0, -130, 25, -130],
                }
            },
        },
        
        {
            name: '2020年4月',
            type: 'pie',
            radius: ['25%', '50%'],
            center: ["40%", "50%"],
            itemStyle: { // 此配置
               normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    formatter: params => {
                        return (
                            params.value 
                        );
                    },
                    fontSize: 10,
                    color: '#000',
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            startAngle: '230',
            data: echartData.inner
        }
    ]
};

var timeTicket = null;
var count = 0;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
    var dataLength = option.series[1].data.length;
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: count % dataLength
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: count % dataLength,
    });
    count++;
}, 1500);
myChart.on('mouseover', function(params) {
    clearInterval(timeTicket);
    var allDataIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (params.seriesIndex == 0) {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1,
            dataIndex: allDataIndex
        });
        if (params.dataIndex == 0) {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 1,
                dataIndex: allDataIndex.splice(0, 4)
            });
        } else {
            var arr1 = allDataIndex.splice(params.dataIndex * 3 + 1, 3);
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 1,
                dataIndex: arr1
            });
        }
    }
});
myChart.on('mouseout', function(params) {
    timeTicket && clearInterval(timeTicket);
    myChart.dispatchAction({
        type: 'downplay',
    });
    timeTicket = setInterval(function() {
        var dataLength = option.series[1].data.length;
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 2
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 2,
            dataIndex: count % dataLength
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 2,
            dataIndex: count % dataLength,
        });
        count++;
    }, 1500);
});
  
 
