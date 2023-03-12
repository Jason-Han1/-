var color = ['#FF00CE', '#CD18D7', '#A005ED', '#7316FF', '#534EFC','#6983FB','#E65184'];
var data = [{
        "name": "数据一",
        "value":30
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
        "value": 52
    },
    {
        "name": "数据五",
        "value": 42
    },{
        "name":"数据六",
        "value":14
    },
    {
        "name":"数据七",
        "value":32
    }
];
var max =62.5;
var renderData = [{
    value: [],
    name: "刻度盘3",
    symbol:'none',
    // 区域线
    lineStyle: {
        normal: {
            color: '#534EFC',
            width: 2
        }
    },
    // 区域
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: '#534EFC'
                }, {
                    offset: 1,
                    color: '#534EFC'
                }],
                false)
        }
    }
}];
for(var i=0;i<data.length;i++){
    var value = new Array(7); 
    value[i] = max,
    renderData[0].value[i] = data[i].value;
    console.log(value)
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize:14,
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
}
var indicator = [];
data.forEach((d,index)=>{
     indicator.push({
        name: d.value,
        max:max,
        color: color[index]
    })
})
option = {
    backgroundColor: '#091C2F',
    tooltip: {
        show: false,
        trigger: "item"
    },
    radar: {
        // center: ["50%", "50%"],
        radius: "50%",
        startAngle: 90, // 起始角度
        splitNumber: 5,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#464959",
                width:2,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 100,
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#464959"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        showSymbol:false,
        data: renderData
    }]
}