var $deliveryRate24h = [12, 22, 33, 0]
var $deliveryRate48h = [22, 32, 53, 0]
var $deliveryRate72h = [10, 42, 63, 0]
option = {
    tooltip: {
        confine: true,
        trigger: 'axis',

        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            // color:'#0062ff',
            shadowStyle: {
              
                color: '#FFA980',
                opacity: 0.1
            }
        },
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>"
            for (var i = 0; i < param.length; i++) {

                if (i > 0) {
                    resultTooltip += "<div style='padding-top:2px;'>"
                }

                resultTooltip +=
                    param[i].marker +
                    "</span><span style = 'float:right;'>" + param[i].value + "k" + "</span>"

            }
            return resultTooltip
        },
    },
    legend: {
        selectedMode: false,
        data: ['Hour 24', 'Hour 48', 'Hour 72'],
        right: 0,
        top: 23,
        icon: "circle"
    },
    label: {
        textStyle: {
            color: 'black',
            fontSize: 16,
            fontWeight: 600
        }
    },
    grid: {
        height: 'auto',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['STD', 'SMD', 'NextDay', 'IDlite'],
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
    yAxis: {
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
    series: [{
            name: 'Hour 24',
            type: 'bar',
            data: $deliveryRate24h,
            itemStyle: {
                barBorderRadius: [90, 90, 0, 0],
                color: "rgba(116,41,201, 1)"
            },
            barWidth: '6%',
        },
        {
            name: 'Hour 48',
            type: 'bar',
            data: $deliveryRate48h,
            itemStyle: {
                barBorderRadius: [90, 90, 0, 0],
                color: "rgba(255,108,62, 1)"
            },
            barWidth: '6%',

        },
        {
            name: 'Hour 72',
            type: 'bar',
            data: $deliveryRate72h,
            itemStyle: {
                barBorderRadius: [90, 90, 0, 0],
                color: "rgba(253,189,76, 1)"
            },
            barWidth: '6%',
            barGap: "2.33"
        }
    ]
};