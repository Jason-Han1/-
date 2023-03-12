option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: { // 去除坐标轴上的刻度线
            show: false
        },
        splitLine: { // 控制网格线是否显示
            lineStyle: { //  改变样式
                width: '0.2',
                color: '#507b7d' // 修改网格线颜色    
            }
        },
        axisLine: { // y轴的颜色和宽度
            show: false,
            lineStyle: {
                color: 'rgba(0,0,0,0.4)', // y坐标轴的轴线颜色
            }
        },
        axisLabel: { // x轴的字体样式
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
                fontSize: 10, // x轴字体大小
            }
        },
        data: ['16/02', '17/02', '18/02', '19/02', '20/02', '21/02', '22/02'],
    },
    yAxis: {
        name:"Millon Rp.",
        type: 'value',
        axisTick: { // 去除坐标轴上的刻度线
            show: false
        },
        splitLine: { // 控制网格线是否显示
            lineStyle: { //  改变样式
                width: '0.2',
                color: '#507b7d' // 修改网格线颜色    
            }
        },
        axisLine: { // y轴的颜色和宽度
            show: false,
            lineStyle: {
                color: 'rgba(0,0,0,0.4)', // y坐标轴的轴线颜色
            }
        },
        axisLabel: { // x轴的字体样式
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
                fontSize: 10, // x轴字体大小
            }
        }
    },
    tooltip: {
        confine: true,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                type: "dashed",
                color: "#cccccc"
            }
        },
        formatter: function(param) {
            var resultTooltip = "";
            var unit = "";
            resultTooltip =
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>"
            for (var i = 0; i < param.length; i++) {
                if (i > 0) {
                    resultTooltip += "<div style='padding-top:2px;'>"
                }
                if (i == 0) {
                    unit = "$_unit1";
                } else {
                    unit = "$_unit2";
                }
                resultTooltip +=
                    param[i].marker +
                    param[i].value + "</span><span style = 'float:right;'>" + unit + "</span>"

            }
            return resultTooltip
        },
        borderColor: "rgba(245, 245, 245, 0.8)",
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        right: "4%",
        data: ['Sales Amount', 'Refund Amount'],
        icon: "circle",
        selectedMode: false,
    },
    series: [{
            name: 'Sales Amount',
            data: [0.00, 0.00, 120.73, 0.03, 10, 0.03, 243.61],
            type: 'line',
            itemStyle: {
                color: "rgba(116,41,201,1)"
            },
            lineStyle: {
                width: 3.5,
            },
            smooth: 0.15,
            showSymbol: false,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: "rgba(116,41,201, 0.05)" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "rgba(116,41,201, 0.01)" // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name: 'Refund Amount',
            data: [0.00, 0.00, 0.00, 0.00, 17.96, 0.00, 0.00],
            type: 'line',
            itemStyle: {
                color: "rgba(253,189,76,1)"
            },
            lineStyle: {
                width: 3.5,
            },
            smooth: 0.15,
            showSymbol: false,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: "rgba(255,108,62, 0.2)" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "rgba(255,108,62, 0.1)" // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    ]
};