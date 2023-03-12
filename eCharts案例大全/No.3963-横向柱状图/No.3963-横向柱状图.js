var $colorList=['rgba(74,128,244,1.0)', 'rgba(116,41,201,1.0)', 'rgba(63,194,151,1.0)', 'rgba(255,108,62,1.0)', 'rgba(253,189,76,1.0)'];
option =  {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#FFA980',
                opacity: 0.1
            }
        },
        formatter: function(param) {
            return param[0].name + '<br/>' + param[0].marker + param[0].value
        },
    },
    label: {
        show: true,
        position: 'right',
        textStyle: {
            color: 'black',
            fontSize: 16,
            fontWeight: 600
        }
    },
    axisLabel: {
        color: "#000",
        interval: 0,
    },
    grid: {
        height:"auto",
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
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
        inverse:false,
        type: 'category',
        data: ['Facebook', 'Youtube', 'Google', 'Instagram', 'Others'],
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
        showBackground: true,
        name: 'Facebook',
        type: 'bar',
        data: [4, 3, 2, 1, 0],
        itemStyle: {
            color: function(params) {
                return $colorList[ params.dataIndex]
            },
            barBorderRadius: [0, 90, 90, 0],
        },
        barWidth: 10,
    }]
};