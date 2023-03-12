option = {
    title: {
        text: '甘特图',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: function () {
            var list = [];
            for (var i = 1; i <= 11; i++) {
                list.push('11月' + i + '日');
            }
            return list;
        }()
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200, 1100, 1000]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
        },

    ]
};
