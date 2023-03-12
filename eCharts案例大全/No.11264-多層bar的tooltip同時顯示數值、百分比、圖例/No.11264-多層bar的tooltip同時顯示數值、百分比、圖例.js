option = {
    color: ['#ffb1bc', '#ff737f', '#ff4f5c', '#C9001B', '#AE051C'],
    tooltip: {
        trigger: 'axis',
        formatter: function(obj) {
            let total = 0;
            let str = '';
            for (let i = 0; i < obj.length; i++) {
                total += obj[i]['value'];
            }
            for (let i = 0; i < obj.length; i++) {
                str = str + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + obj[i]['color'] + ';"></span>' + ' ' +
                    obj[i]['seriesName'] + ' : ' + obj[i]['value'] +
                    ' (' + (obj[i]['value'] / total * 100).toFixed(1) + ' %)' + '</br>'
            }
            return str;
        }
    },
    xAxis: {
        name: '月份',
        type: 'category',
        data: ['2019-01', '2019-02', '2019-03', '2019-04']
    },
    yAxis: {
        name: '張',
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}'
        },
    },
    series: [{
                type: 'bar',
                stack: '總量',
                name: '全票',
                barWidth: '40px',
                data: [30, 29, 31, 33],
            },
            {
                type: 'bar',
                stack: '總量',
                name: '半票',
                barWidth: '40px',
                data: [30, 31, 39, 37],
            },
            {
                type: 'bar',
                stack: '總量',
                name: '學生票',
                barWidth: '40px',
                data: [30, 20, 30, 30],
            },
            {
                type: 'bar',
                stack: '總量',
                name: '身障票',
                barWidth: '40px',
                data: [10, 10, 10, 10],
            },
    ]
};