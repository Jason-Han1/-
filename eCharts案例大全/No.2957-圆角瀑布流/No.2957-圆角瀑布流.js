let data1 = [2900, 1200, 300, 200, 900, 300];

for (let i = 0; i < data1.length; i++) {
    if (i === 0) {
        data1[i] = {
            value: data1[i],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
                color: '#4DB6AC',
            },
        };
    } else if (i === data1.length - 1) {
        data1[i] = {
            value: data1[i],
            itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
                color: '#4DB6AC',
            },
        };
    } else {
        data1[i] = {
            value: data1[i],
            itemStyle: {
                barBorderRadius: [5, 5, 5, 5],
                color: '#FFCA28',
            },
        };
    }
}

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#BDBDBD',
            },
        },
        data: ['总费用', '房租', '水电费', '交通费', '伙食费', '日用品数'],
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
        axisLine: {
            show: false, //y轴线消失
        },

        axisTick: {
            show: false, //y轴坐标点消失
        },
        axisLabel: {
            textStyle: {
                color: '#BDBDBD',
            },
        },
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            barWidth: 20, //柱图宽度

            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)',
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)',
                },
            },
            data: [0, 1700, 1400, 1200, 300, 0],
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            data: data1,
            barWidth: 20, //柱图宽度

            label: {
                show: true, //开启显示
                position: 'top',

                textStyle: {
                    //数值样式
                    color: 'grey',
                    fontSize: 15,
                },
            },
        },
    ],
};
