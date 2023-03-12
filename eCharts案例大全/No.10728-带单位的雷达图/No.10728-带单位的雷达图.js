var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "数据一",
        "value": 20
    },
    {
        "name": "数据二",
        "value": 30
    },
    {
        "name": "数据三",
        "value": 22
    },
    {
        "name": "数据四",
        "value": 50
    },
    {
        "name": "数据五",
        "value": 12
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "告警类型TOP5",
    // symbol: 'none',
    symbol: 'circle',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        // symbol: 'circle',
        symbol: 'none',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option = {
    backgroundColor: '#01193d',
    // tooltip: {
    //     show: true,
    //     trigger: "item"
    // },
    tooltip: {
	        formatter: function(params) {
	            var results = '';
	            for (var i = 0; i < params.data.value.length; i++) {
	                results += indicator[i].name + '：' + params.value[i] + '分<br>';
	            }
	            results= '健康指标得分：<br>'+ results
	            return results;
	        }
	       },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        startAngle: 90, // 起始角度
        splitNumber: 4,
        // shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}