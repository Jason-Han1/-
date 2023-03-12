// var myChart = echarts.init(document.getElementById('jiaoshinainling'));
    var data = { //标准参数
        id: 'multipleThree',
        legend: ['男', '女'],
        barWidth: 30,
        yAxis: ['<=25', '<=35', '<=45', '<=55', '>55'],
        xAxis: [
            [-293, -382, -403, -320, -84],
            [1008, 2067, 702, 269, 21]
        ],
        color: ['#5e94dd', '#49b5bd'],
    }
    var colorList = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#3e86f7' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#6dc5e9' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    };
    var colorList2 = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#6dc5e9' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#3e86f7' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    };
    jiaoshinianling = {
        title: {
            text: data.title,
            left: 20,
            textStyle: {
                fontSize: 16,
                fontWeight: 500,
                color: '#414957'
            },
            top: 12
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: false // 默认为直线，可选为：'line' | 'shadow'
            },
            extraCssText:'width:auto;height:auto;',
            formatter: function (params) {
                var time = '';
                var str = '';
                for (var i of params) {
                    time = i.name.replace(/\n/g, '') + '<br/>';
                    if (i.data == 'null' || i.data == null) {
                        str += i.seriesName + '：无数据' + '<br/>'
                    } else {
                        str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
                    }
                }
                return time + str;
            },
        },
        legend: {
            bottom: 0,
            itemGap: 10,
            itemWidth: 12,
            itemHeight: 10,
            data: data.legend,
            textStyle: {
                color: '#8597c1',
                fontSize: 16
            }
        },
        color: data.color,
        grid: {
            x: 20,
            y: 40,
            x2: 50,
            y2: 30,
            containLabel: true
        },
        xAxis: {
            type: 'value',
            min: -2000,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8597c1'
                }
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        yAxis: [{
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8597c1'
                },
                symbol: ['none', 'arrow'],
                symbolSize: [4, 4],
                onZeroAxisIndex: -1000

            },

            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: '0',
                textStyle: {
                    fontSize: 16,
                    color: '#8597c1'
                }
            },
            offset: 1,
            data: data.yAxis

        }],
        series: [{
            name: data.legend[0],
            type: 'bar',
            barWidth: '30%',

            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#8597c1',
                    fontSize: '16',
                    formatter: function (params) {
                        return params.data * -1;
                    }
                },

            },
            data: data.xAxis[0],
            itemStyle: {
                color: function (params) {

                    return colorList;
                },
            },
        },
            {
                name: data.legend[1],
                type: 'bar',
                barWidth: '30%',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#8597c1',
                        fontSize: '16',
                    }
                },
                data: data.xAxis[1],
                itemStyle: {
                    color: function (params) {

                        return colorList2;
                    },
                },
            },
        ]
    }
    myChart.setOption(jiaoshinianling);
