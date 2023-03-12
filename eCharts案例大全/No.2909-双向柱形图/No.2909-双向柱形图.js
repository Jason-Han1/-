data1 = [-500, -220, -100, -500, -100, -200, -600];
data2 = [500, 220, 100, 500, 100, 200, 600];
bgdata1 = new Array(data1.length).fill(Math.min(...data1));
bgdata2 = new Array(data2.length).fill(Math.max(...data2));
sdata2 = ['大米', '玉米', '蔬菜', '鸡蛋', '坚果', '苹果', '西瓜'];
sdata = ['大米1', '玉米1', '蔬菜1', '鸡蛋1', '坚果1', '苹果1', '西瓜1'];
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName +
                ' : ' +
                Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() +
                ' 万元<br/>'
            );
        },
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            position: 'right',
            offset: 50,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: sdata2,
        },
        {
            type: 'category',
            inverse: true,
            position: 'right',
            offset: 10,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#4AD5FB',
                    fontSize: '12',
                },
                formatter: function (value) {
                    if (value >= 10000) {
                        return (value / 10000).toLocaleString() + '万';
                    } else {
                        return value.toLocaleString();
                    }
                },
            },
            data: data2,
        },
        {
            type: 'category',
            inverse: true,
            position: 'left',
            offset: 50,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: sdata,
        },
        {
            type: 'category',
            inverse: true,
            position: 'left',
            offset: 10,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#FDC09E',
                    fontSize: '12',
                },
                formatter: function (value) {
                    value = Math.abs(value);
                    if (value >= 10000) {
                        return (value / 10000).toLocaleString() + '万';
                    } else {
                        return value.toLocaleString();
                    }
                },
            },
            data: data1,
        },
    ],
    series: [
        {
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#008BD3',
                        },
                        {
                            offset: 1,
                            color: '#52DDFF',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: data2,
        },
        {
            name: '金额1',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#F58954',
                        },
                        {
                            offset: 1,
                            color: '#FFCFB2',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: data1,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: bgdata2,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                },
            },
        },
        {
            name: '背景1',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: bgdata1,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                },
            },
        },
    ],
};
