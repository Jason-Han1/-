function numAdd(arg1, arg2){
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m;
}
var mvvChartData = [{
        "brEndTime": 664,
        "brStartTime": 0,
        "volume": 378
    },
    {
        "brEndTime": 1976,
        "brStartTime": 1264,
        "volume": 392
    },
    {
        "brEndTime": 3480,
        "brStartTime": 2704,
        "volume": 396
    },
    {
        "brEndTime": 4836,
        "brStartTime": 4144,
        "volume": 321
    },
    {
        "brEndTime": 6528,
        "brStartTime": 5656,
        "volume": 414
    },
    {
        "brEndTime": 7992,
        "brStartTime": 7240,
        "volume": 382
    },
    {
        "brEndTime": 9496,
        "brStartTime": 8696,
        "volume": 374
    }
]
var max = Math.ceil(mvvChartData[mvvChartData.length - 1].brEndTime / 1000);
var allxPoint = [];

for (var i = '0.0'; i <= max;) {
    allxPoint.push(i);
    i = numAdd(i, 0.1).toFixed(2)
}
var allArr = [];
// 计算梯度线的算法：mvvy = volsum/time*60  volsum:容积累加值 time：最后一个有效点的brStartTime减去第一个有效点brStartTime
var time = Number(mvvChartData[mvvChartData.length - 1].brStartTime) - Number(mvvChartData[0].brStartTime);
var volsum = 0;
var lineArr = []; //梯度线的数据数组
var allArr = [];


mvvChartData.forEach(element => {
    volsum = volsum + Number(element.volume);
    element.volsum = volsum;
    lineArr.push([Number((Number(element.brStartTime) / 1000).toFixed(2)), Number((volsum / time * 60).toFixed(2))])
    // 这里加减0.05是为了优化显示效果，因为每个bar都在在刻度中线显示的两边都会多出来所以需要在显示上去掉两边
    element.brStartTime = Number((Number(element.brStartTime) / 1000 + 0.06).toFixed(2));
    element.brEndTime = Number((Number(element.brEndTime) / 1000 - 0.06).toFixed(2));
    element.volume = Number((Number(element.volume) / 1000).toFixed(2));
    for (var i = element.brStartTime; i <= (element.brEndTime);) {
        allArr.push([i, element.volume]);
        i = numAdd(i, 0.1);
    }
})
lineArr.push([max, Number((volsum / time * 60).toFixed(2))])
option = {
    title: {
        text: '时间容积图',
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal',
        }
    },
    legend: {
        show: true,
        orient: 'vertical',
        right: 0,
        top: 30,
        itemGap: 4,
        selected: true,
        data: []
    },
    grid: {
        top: '45px',
        right: '70px',
        bottom: '50px',
    },
    xAxis: {
        min: 0,
        max: 10, //自定义个最大值，后面还会从新计算的
        interval: 1, //隔几显示一个刻度
        // splitNumber: 10,//分割段数
        boundaryGap: false, //x轴从0开始到结束显示
        onZero: true,
        name: '时间[S]',
        position: 'bottom',
        nameGap: 5, //轴名字距离轴距离
        splitLine: {
            show: false,
        },
        axisLabel: {
            showMinLabel: true,
            showMaxLabel: true,
            //如果图表高度固定的话可以设置一个的固定值显示在零刻度线下面
            // margin:'10',
        },
        axisTick: {
            show: true, //显示刻度线
            inside: false, //刻度线在下面
        },
        show: true,
    },
    yAxis: [{
            min: 0,
            max: 6,
            type: 'value',
            axisLabel: {
                show: true, //显示刻度值
                showMinLabel: true,
                showMaxLabel: true
            },
            interval: 1,
            // splitNumber: 12,
            axisTick: {
                show: true,
                inside: false
            },
            name: '容积[L]',
            splitLine: {
                show: false
            },
            show: true,
        },
        {
            min: 0,
            max: function(e) {
                if (e.max <= 120) {
                    return 120;
                } else {
                    return Math.ceil(e.max / 10) * 10;
                }
            },
            type: 'value',
            axisLabel: {
                show: true, //显示刻度值
                showMinLabel: false,
                showMaxLabel: true
            },
            interval: 20,
            // splitNumber: 6,
            axisTick: {
                show: true, //显示刻度
                inside: false //刻度向内向外
            },
            name: 'MVV[L/min]',
            splitLine: {
                show: false
            },
            show: true,
        }
    ],
    series: [{
            type: 'bar',
            //  barWidth: '10%',//暂时这个后面会从新计算柱子的宽度
            barWidth: ((allArr.length / (max * 10) * 100) + 10).toFixed(1) + '%', //暂时这个后面会从新计算柱子的宽度
            barGap: '0%',
            barCategoryGap: '0%',
            data: allArr,
            itemStyle: {
                normal: {
                    // color: "#000"//因为只有一个结果选中所以默认给个选中的蓝色吧
                    color: '#4e66a6',
                }
            },
            silent: true, //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
            yAxisIndex: 0, //指定使用第一个y轴
        },
        {
            type: 'line',
            step: 'end',
            symbol: 'none',
            itemStyle: {
                normal: {
                    // color: "#000",
                    color: '#4e66a6',
                    lineStyle: {
                        width: 1,
                    }
                }
            },
            data: lineArr,
            yAxisIndex: 1, //指定使用第二个y轴
        },
    ]
};