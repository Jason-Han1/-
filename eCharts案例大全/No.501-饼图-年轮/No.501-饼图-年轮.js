let series = [];
let pieDatas = [
    {
        "value": 30,
        "name": "系列一"
    },
    {
        "value": 14,
        "name": "系列二"
    },
    {
        "value": 26,
        "name": "系列三"
    },
    {
        "value": 20,
        "name": "系列四"
    },
    {
        "value": 10,
        "name": "系列五"
    },
    {
        "value": 10,
        "name": "系列六"
    }
];
let maxRadius =  80,
    barWidth = 5,
    barGap =  5;
let sumValue = 0;
let showValue = true,showPercent = true;
pieDatas.map(item => {
    sumValue += item.value;
})
let barColor =  [
        {
            "color1": "rgba(222, 125, 255, 1)",
            "color2": ""
        },
        {
            "color1": "rgba(250, 118, 121, 1)",
            "color2": ""
        },
        {
            "color1": "rgba(53, 198, 215, 1)",
            "color2": ""
        },
        {
            "color1": "rgba(101, 223, 138, 1)",
            "color2": ""
        },
        {
            "color1": "rgba(253, 161, 79, 1)",
            "color2": ""
        },
        {
            "color1": "rgba(68,165,255,1)",
            "color2": ""
        }
    ];
pieDatas.map((item, i) => {
    series.push({
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [(maxRadius - i * (barGap + barWidth)) + '%', (maxRadius - (i + 1) * barWidth - i * barGap) + '%'],
        center: [ "30%", "50%"],
        label: {
            show: false
        },
        itemStyle: {
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
            borderWidth: 5,
        },
        data: [{
            value: item.value,
            name: item.name,
            itemStyle: {
                color: barColor[i]&&barColor[i].color1 || 'rgba(68,165,255,1)'
            }
        }, {
            value: sumValue - item.value,
            name: '',
            itemStyle: {
                color: "transparent",
            },
            tooltip: {
                show: false
            },
            hoverAnimation: false
        }]
    })
    series.push({
        name: 'blank',
        type: 'pie',
        silent: true,
        z: 0,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [(maxRadius - i * (barGap + barWidth)) + '%', (maxRadius - (i + 1) * barWidth - i * barGap) + '%'],
        center: [ "30%", "50%"],
        label: {
            show: false
        },
        itemStyle: {
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
            borderWidth: 5,
        },
        data: [{
            value: 1,
            itemStyle: {
                color: "rgba(255, 255, 255,.13)",
                borderWidth: 0
            },
            tooltip: {
                show: false
            },
            hoverAnimation: false
        }]
    });
})
option = {
    grid: {
        left:  0,
        right:  0,
        top:  0,
        bottom:  0,
    },
    backgroundColor: '#000',
    tooltip: {
        show: true,
        trigger: "item",
    },
    legend: {
        show: true,
        left: '60%',
        top: 'middle',
        icon: "circle",
        itemWidth: 10,
        itemHeight: 10,
        itemGap:  20,
        textStyle: {
            fontSize:  16,
            color:  '#fff',
        },
        formatter: (name) => {
                var datas = pieDatas;
                let total = 0;
                datas.map(item => {
                    total += (item.value - 0)
                })
                let valueIndex = datas.map(item => item.name).indexOf(name);
                return name + "  " + (showValue ? datas[valueIndex].value + (option.legendValueUnit || '') + ' ' : '') + (showPercent ? ((datas[valueIndex].value / total) * 100).toFixed(2) + "%" : '');
            } ,
    },
    series: series,
};
