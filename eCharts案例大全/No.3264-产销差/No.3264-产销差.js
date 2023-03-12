let data1 = [0, 1538, 1438, 1338, 1238, 1138, 1038, 0, 0];
let data2 = [1638, '-', '-', '-', '-', '-', '-', '-', '-'];
let data3 = ['-', 100, 100, 100, 100, 100, 100, 1038, {
            value: -100,
            itemStyle: {
                color: 'rgb(242,109,72)'
            }
        }];
let data4 = ['-', '-', '-', '-', '-', '-', '-', '-100', '-'];
option = {
    legend: {
        data: ['支出', '收入', '产销差1', '产销差'],
        formatter: function (name) {
            if (name == '产销差1') return '';
            return name;
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
        data: (function () {
            var list = [];
            for (var i = 1; i <= 7; i++) {
                list.push('11月' + i + '日');
            }
            list.push('其他');
            list.push('产销差');
            return list;
        })(),
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
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
            data: data1,
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            color:'rgb(130,106,249)',
            label: {
                show: false,
                position: 'top',
            },
            data: data2,
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            color:'rgb(255,204,0)',
            label: {
                show: false,
                position: 'bottom',
            },
            data: data3,
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
             color:'rgb(255,204,0)',
            label: {
                show: false,
                position: 'bottom',
            },
            data: data4,
        },
          {
            name: '产销差1',
            type: 'bar',
            stack: '总量',
            color: 'rgb(242,109,72)',
            data: [],
        },
        {
            name: '产销差',
            type: 'bar',
            stack: '总量',
            color: 'rgb(20,170,159)',
            data: [],
        },
    ],
};
