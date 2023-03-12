var data = [
        [20, 30, 40, 20],
        [20, 30, 40, 20],
        [20, 30, 40, 20],
    ],
    legendData = ['实际质量损失率', '质量损失率目标', '实际质量损失额'],
    xAxisData = ['本部', '子公司', '中车成都', '中车广东'],
    colorArr = ['#3082FF', '#E0F0FF', '#FEAF1B'],
    barWidth = '40%';
var seriesData = [];
var toalData = [];
var html = 'aa';
var yAxisName = '';
var yAxisData = [
    {
        name: yAxisName,
        nameTextStyle: {
            color: '#4B525E',
            fontSize: 12,
            fontFamily: 'PingFang',
        },
        type: 'value',
        axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            textStyle: {
                color: '#4B525E',
                fontStyle: 'normal',
                fontFamily: 'PingFang',
                fontSize: 12,
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#E6EAF3',
            },
        },
        splitLine: {
            show: false,
        },
    },
];
legendData.forEach((item, i) => {
    if (html == 'aa') {
        yAxisData[0].name = '%';
        gridTop = '27%';
        yAxisData.push({
            name: '万元',
            nameTextStyle: {
                color: '#4B525E',
                fontSize: 12,
                fontFamily: 'PingFang',
            },
            type: 'value',
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                textStyle: {
                    color: '#4B525E',
                    fontStyle: 'normal',
                    fontFamily: 'PingFang',
                    fontSize: 12,
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#E6EAF3',
                },
            },
            splitLine: {
                show: false,
            },
        });
        legend = {
            width: 8,
            height: 8,
            itemGap: 6,
            padding: [10, 8],
            fontSize: 12,
        };
        if (i < 2) {
            seriesData.push({
                name: legendData[i],
                type: 'bar',
                stack: '总量',
                barWidth: barWidth,
                data: data[i],
            });
        } else {
            seriesData.push({
                name: legendData[i],
              yAxisIndex: 1,
                type: 'line',
                symbolSize: 10,
                symbol: 'circle',
                lineStyle: {
                    normal: {
                        color: colorArr[i],
                        width: 2,
                        shadowBlur: 3,
                        shadowColor: 'rgba(0,0,0,0.2)',
                        shadowOffsetY: 10,
                    },
                },
                data: data[i],
            });
        }
    } else {
        seriesData.push({
            name: legendData[i],
            type: 'bar',
            stack: '总量',
            barWidth: barWidth,
            data: data[i],
        });
    }
});
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (obj) {
            if (html == 'aa') {
                var str = '';
                var total = 0;
                str = obj[0].name + '月<br />';
                obj.map((item, i) => {
                    if (item.seriesName == '实际质量损失率') {
                        if (i == 0) {
                            let subStr = item.marker + item.seriesName + '：' + item.value + '%' + '<br />';
                            str += subStr;
                        }
                        total += Number(item.value);
                    }
                    if (item.seriesName == '实际质量损失额') {
                        let subStr = item.marker + item.seriesName + '：' + item.value + '万元' + '<br />';
                        str += subStr;
                    }
                    if (item.seriesName == '质量损失率目标') {
                        total += Number(item.value);
                        str += item.marker + item.seriesName + ':' + total + '%' + '<br />';
                    }
                });
                return str;
            } else {
                var str = '';
                var total = 0;
                str = obj[0].name + '<br />';
                obj.map((item) => {
                    let subStr = item.marker + item.seriesName + '：' + item.value + '人' + '<br />';
                    str += subStr;
                    total += parseInt(item.value);
                });
                str += '总人数：' + total + '人';
                return str;
            }
        },
    },
    legend: {
        itemWidth: 10,
        itemHeight: 10,
        padding: [10, 20],
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        // 大小 和位置 文字样式
        itemGap: 8,
        x: 'center',
        top: 10,
        textStyle: {
            fontSize: 12,
            color: '#5D6C8E',
            fontFamily: 'PingFang',
        },
        data: legendData,
    },
    color: colorArr,
    grid: {
        left: '3%',
        right: '4%',
        top: '24%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#E6EAF3',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                margin: 15,
                textStyle: {
                    color: '#4B525E',
                    fontStyle: 'normal',
                    fontFamily: 'PingFang',
                    fontSize: 12,
                },
            },
            data: xAxisData,
        },
    ],
    yAxis:yAxisData,
    series: seriesData,
};
