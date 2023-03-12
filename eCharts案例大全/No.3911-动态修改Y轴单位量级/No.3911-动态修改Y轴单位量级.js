option = {
    tooltip: {
        confine: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#FFA980',
                opacity: 0.1
            }
        },
        // position: function(pt) {
        //     return [pt[0], 130];
        // },
        formatter: function(pt) {
            //印尼盾格式化
            var num = pt[0].value;
            if (num === null || num === "") {
                num = 0;
            } else {
                num = (num || 0).toString();
                var result = '';
                if (num.indexOf('-') > -1) {
                    num = num.replace("-", "")
                    while (num.length > 3) {
                        result = '.' + num.slice(-3) + result;
                        num = num.slice(0, num.length - 3);
                    }
                    if (num) {
                        result = '-' + num + result;
                    }
                } else {
                    while (num.length > 3) {
                        result = '.' + num.slice(-3) + result;
                        num = num.slice(0, num.length - 3);
                    }
                    if (num) {
                        result = num + result;
                    }
                }
            }
            return pt[0].name + '<br/>' + pt[0].marker + 'Rp' + (result) + '<br/>';
        },
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
        data: ['11/03', '12/03', '13/03', '14/03', '15/03', '16/03', '17/03'],
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
        name: $_yName,
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
            },
            //大于100W以百万未单位，其余以K为单位
            formatter: function(value, index) {
                if (value >= 1000000) {
                    value = value / 1000000;
                } else {
                    value = value / 1000;
                }
                return value;
            }
        }
    },
    series: [{
        name: 'Hour 24',
        type: 'bar',
        data: [0, 0, 0, 0, 5940455, 6653, 1015699],
        itemStyle: {
            barBorderRadius: [90, 90, 0, 0],
            color: "rgba(116,41,201, 1)"
        },
        barWidth: 6,
    }]
};