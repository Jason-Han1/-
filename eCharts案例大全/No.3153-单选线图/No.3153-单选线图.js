var attrs = [
    {
        name: '贷款',
        unit: '元',
    },
    {
        name: '支付',
        unit: '元',
    },
    {
        name: '农富宝',
        unit: '元',
    },
    {
        name: '农信保',
        unit: '元',
    },
    {
        name: '农信租',
        unit: '元',
    },
    {
        name: '农信险',
        unit: '元',
    },
];
var xData = [
    '2020-08-07',
    '2020-08-08',
    '2020-08-09',
    '2020-08-10',
    '2020-08-11',
    '2020-08-12',
    '2020-08-13',
    '2020-08-14',
    '2020-08-15',
];
var lines = [
    [400, 400, 300, 300, 300, 400, 400, 400, 350],
    [400, 500, 500, 500, 500, 400, 400, 500, 500],
    [400, 600, 700, 700, 1000, 400, 400, 600, 700],
    [400, 400, 300, 300, 300, 400, 400, 400, 350],
    [400, 500, 500, 500, 500, 400, 400, 500, 500],
    [400, 600, 700, 700, 1000, 400, 400, 600, 700],
];
var colors = ['#109DFF','#F96503','#70F971']

var series = [];
for (var i = 0; i < lines.length; i++) {
    var item = {
        name: attrs[i].name,
        type: 'line',
        lineStyle: {
                normal: {
                    width: 3.5,
                    color: colors[0],
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: colors[0],
                    shadowColor: colors[0],
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: colors[0]
                }
            },
            smooth: true,
        data: lines[i],
    };
    series.push(item);
}

var option = {
    backgroundColor: '#060B1C',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'none',
        padding: 5,
        formatter: function (param) {
            var resultTooltip = '';
            resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:3px;border-radius:3px;'>" +
                "<div style='text-align:center;color:#C9C8CD'>" +
                param[0].name +
                '</div>' +
                "<div style='padding-top:5px;'>" +
                "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " +
                param[0].color +
                ";'></span>" +
                "<span style='color:#C9C8CD'> " +
                param[0].seriesName +
                ': </span>' +
                "<span style='color:" +
                param[0].color +
                "'>" +
                param[0].value +
                '</span></span><span>' +
                attrs[0].unit +
                '</span>';
            resultTooltip += '</div>' + '</div>';
            return resultTooltip;
        },
    },
    grid: {
        left: '5%',
        top: '10%',
        right: '5%',
        bottom: '10%',
    },
    legend: {
        show: true,
        icon: 'none',
        orient: 'horizontal',
        top: '2%',
        right: '2%',
        itemWidth: 15,
        itemHeight: 25,
        itemGap: 0,
        selectedMode: 'single',
        selected: {
            // // 选中'系列1'
            // '贷款': false,
            // // 不选中'系列2'
            // '支付': true,
            // '农富宝': false,
            // '农信保': false,
            // '农信租': false,
            // '农信险': false,
        },
        textStyle: {
            fontSize: 15,
            color: '#109DFF',
            backgroundColor: 'rgba(55,63,82,0.8)',
            borderWidth:1,
            borderRadius: 3,
            padding: [5, 8],
        },
        inactiveColor: '#ccc',
    },
    xAxis: [
        {
            type: 'category',
            data: xData,
            axisLabel: {
                show: true,
                fontSize: 9,
                textStyle: {
                    color: '#C9C8CD', //X轴文字颜色
                },
                formatter: function (value) {
                    var str = '';
                    str += value.substring(0, 10);
                    // str += value.substring(5, 7);
                    return str;
                },
            },
            axisLine: {
                show: true, //不显示x轴
                lineStyle: {
                    color: '#012749',
                },
            },
            axisTick: {
                show: false, //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
                show: false,
                width: 1,
                lineStyle: {
                    type: 'solid',
                    color: '#03202E',
                },
            },
            axisPointer: {
                //轴指示器
                type: 'shadow',
                z: 1,
                shadowStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(18,155,249,0)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(18,155,249,1)', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 2,
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            scale: false, //坐标轴起点不限制0
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 9,
                    color: '#C9C8CD', //X轴文字颜色
                },
            },
            splitLine: {
                show: true,
                width: 0.08,
                lineStyle: {
                    type: 'solid',
                    color: '#012749',
                },
            },
            axisTick: {
                show: false, //不显示刻度
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#012749',
                },
            },
            nameTextStyle: {
                color: '#FFFFFF',
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: series,
};
