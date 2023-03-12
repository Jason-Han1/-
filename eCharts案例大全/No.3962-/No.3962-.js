var $colorList = ['rgba(116,41,201,1.0)', 'rgba(253,189,76,1.0)', 'rgba(255,108,62,1.0)', 'rgba(63,194,151,1.0)', 'rgba(74,128,244,1.0)'];

option = option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#FFA980',
                opacity: 0.1
            }
        },
        confine: true,
        width: "20",
        formatter: function(params) {
            var radio = [6.422, 6.422, 5.5046, 5.5046, 5.0459, 3.6697, 3.6697, 3.211, 3.211, 2.7523, 6.422, 6.422, 5.5046, 5.5046, 5.0459, 3.6697, 3.6697, 3.211, 3.211, 2.7523];
            var newParamsName = '';
            var title = '';
            var titleLength = params[0].name.length;
            var rowCount = 40;
            var rowNumber = Math.ceil(titleLength / rowCount);
            // var limitationLength = 40;
            console.log(params);
            if (titleLength > rowCount) {
                for (var i = 0; i < rowNumber; i++) {
                    var tempStr = "";
                    var start = i * rowCount;
                    var end = start + rowCount;
                    if (i == rowNumber - 1) {
                        tempStr = params[0].name.substring(start, titleLength);
                    } else {
                        tempStr = params[0].name.substring(start, end) + "</br>";
                    }
                    newParamsName += tempStr;
                }
            } else {
                newParamsName = params[0].name;
            }
            var r = radio[params[0].dataIndex];
            console.log(params);
            //返回小圆圈和后面的数量
            return (newParamsName + "</br>" +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + params[0]['color'] + "'></span>" +
                params[0]['value'] + '(' + r + '%)');
        },
    },
    grid: {
        left: 0,
        right: '10%',
        bottom: '3%',
        top: 0,
        height: 'auto',
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
            },
            rotate: 60
        }
    },
    yAxis: {
        inverse: true,
        type: 'category',
        data: ['KAB. BANGKA BARAT', 'KOTA JAKARTA UTARA', 'KAB. BADUNG', 'KAB. BANGKA TENGAH', 'KAB. BANGKA SELATAN', 'KAB. BANGLI', 'KAB. SERANG', 'KAB. BELITUNG', 'KAB. TANGERANG', 'KAB. BELITUNG TIMUR'],
        formatter: function(value) {
            if (value.length > 16) {
                return value.substring(0, 16) + "...";
            } else {
                return value;
            }
        },
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
            formatter: function(name) {
                console.log("123");
                if (name.length > 16) {
                    return name.substring(0, 16) + "...";
                } else {
                    return name;
                }
            },
        }
    },
    series: [{
        showBackground: true,
        type: 'bar',
        data: [14, 14, 12, 12, 11, 8, 8, 7, 7, 6],
        itemStyle: {
            normal: {
                color: "rgba(116,41,201,1)",
                barBorderRadius: [0, 90, 90, 0],
                label: {
                    show: true,
                    position: 'right',
                    formatter: function(params) {
                        for (var i = 0,
                                l = option.series[0].data.length; i < l; i++) {
                            var val1 = params.value;
                            return val1;
                        }
                    },
                }
            }
        },
        barWidth: 10,
    }]
};