let echartData = {
    inner: [
        {
            value: 30,
            unit: '件',
            name: '第一检查部'
        },
        {
            value: 10,
            unit: '件',
            name: '第二检查部'
        },
        {
            value: 15,
            unit: '件',
            name: '第三检查部'
        },
        {
            value: 16,
            unit: '件',
            name: '第四检查部'
        },
        {
            value: 15,
            unit: '件',
            name: '第五检查部'
        }
    ],
    outer: [
        {
            value: 10,
            unit: '件',
            name: '第一检查部'
        },
        {
            value: 3,
            unit: '件',
            name: '第二检查部'
        },
        {
            value: 4,
            unit: '件',
            name: '第三检查部'
        },
        {
            value: 4,
            unit: '件',
            name: '第四检查部'
        },
        {
            value: 3,
            unit: '件',
            name: '第五检查部'
        }
    ]
}

// 获取图例数据
var arrName = getArrayValue(echartData.outer , "name");

function getArrayValue(array, key) {
    var key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}


option = {
     title: [{
        text: '内环：案数\n外环：件数',
        top: 'center',
        left: '33.5%',
        textStyle: {
            fontSize: 22,
            color:'#2e8fe6',
            lineHeight: 26,
            fontWeight: 400
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#f8cd57', '#5dd286', '#53c9c8', '#489ee5', '#436fce'],
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
            color: '#b0b9cb'
        },
        formatter: function(name) {
            return name + '    ' + '1.32'
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
            color: "#7eb3fb",
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
                name: '30天以内未发还金额',
                 itemStyle:{
                    normal: {
                        color: '#99c3fc'
                    }
                }
            }]
        },
      
        {
            name: '外环',
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
                            params.value + '件'
                        );
                    },
                    fontSize: 22,
                    color: '#000',
                    // padding: [0, -130, 25, -130],
                }
            },
        },
        
        {
            name: '内环',
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
                            params.value + '件'
                        );
                    },
                    fontSize: 22,
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