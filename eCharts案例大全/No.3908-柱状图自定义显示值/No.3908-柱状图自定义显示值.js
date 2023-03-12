var legend = ['Courier App', 'Customer App', 'Customer Scheduling Order', 'Official Website', 'PC Client', 'VIP Customer Portal'];
option = {
    tooltip: {
        trigger: 'axis',
        show: false,
        axisPointer: {
            type: 'shadow'
        },
        confine: true,
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
    grid: {
        width: 'auto',
        height: 'auto',
        left: '3%',
        right: '15%',
        bottom: '3%',
        top: 0,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show: false,
        axisLabel: { // x轴的字体样式
            show: false, //这行代码控制着坐标轴x轴的文字是否显示
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
                return "22.222";
            }
        }
    },

    yAxis: {
        type: 'category',
        data: ["Sales", "Cost", "Profit"],
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
        axisLine: { // y轴的颜色和宽度
            show: false,
            lineStyle: {
                color: 'rgba(0,0,0,0.6)', // y坐标轴的轴线颜色
            }
        },
        axisLabel: { // x轴的字体样式
            show: true, //这行代码控制着坐标轴x轴的文字是否显示
            textStyle: {
                fontSize: '12sp', // x轴字体大小
                color: 'rgba(0,0,0,0.4)'
            },
            // formatter: function(value, index) {
            //     if (value >= 1000000) {
            //         value = value / 1000000;
            //     } else {
            //         value = value / 1000;
            //     }
            //     return "22.222";
            // }
        }
    },
    series: [{
        showBackground: false,
        type: 'bar',
        data: [2222, 44444, 5555],
        label: {
            normal: {
                show: true,
                formatter: function(v) {
                    var num = v.data;
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
                    return 'Rp' + result;
                },
            }
        },
        itemStyle: {
            normal: {
                //这里是重点
                color: function(params) {
                    //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = ['#FDBD4C', '#FF6C3E', '#7429C9'];
                    return colorList[params.dataIndex]
                },
                barBorderRadius: [0, 90, 90, 0],
            },
        },
        barWidth: 10,
    }]
};