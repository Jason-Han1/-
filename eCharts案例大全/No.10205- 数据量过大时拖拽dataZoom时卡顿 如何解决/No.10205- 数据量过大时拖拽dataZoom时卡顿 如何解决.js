/*因为业务需要 xAxis的type必须是time，但是后台返回数据有4万条左右 
导致拖拽dataZoom时卡顿*/
var dataLen = 40000; //数据量
option = {
    title: {
        text: '时间坐标折线图',
        subtext: 'dataZoom支持'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var date = new Date(params.value[0]);
            data = date.getFullYear() + '-' +
                (date.getMonth() + 1) + '-' +
                date.getDate() + ' ' +
                date.getHours() + ':' +
                date.getMinutes();
            return data + '<br/>' +
                params.value[1] + ', ' +
                params.value[2];
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    dataZoom: {
        show: true,
        start: 0,
        end: 100,
        realtime: false,
        xAxisIndex: [0, 1]
    },
    legend: {
        data: ['series1']
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    grid: [{
        height: '30%'
    }, {
        height: '30%',
        top: '45%'
    }],
    xAxis: [{
        type: 'time',
        splitNumber: 10
    }, {
        type: 'time',
        gridIndex: 1,
        splitNumber: 10
    }],
    yAxis: [{
        type: 'value'
    }, {
        gridIndex: 1,
        type: 'value'
    }],
    series: [{
        name: 'series1',
        type: 'line',
        showAllSymbol: true,
        symbolSize: function(value) {
            return Math.round(value[2] / 10) + 2;
        },
        data: (function() {
            var d = [];
            var len = 0;
            var now = new Date();
            var value;
            while (len++ < dataLen) {
                d.push([
                    new Date(2014, 9, 1, 0, len * 200000),
                    (Math.random() * 30).toFixed(2) - 0
                ]);
            }
            return d;
        })()
    }, {
        name: 'series1',
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1,
        showAllSymbol: true,
        symbolSize: function(value) {
            return Math.round(value[2] / 10) + 2;
        },
        data: (function() {
            var d = [];
            var len = 0;
            var now = new Date();
            var value;
            while (len++ < dataLen) {
                d.push([
                    new Date(2014, 9, 1, 0, len * 200000),
                    (Math.random() * 30).toFixed(2) - 0
                ]);
            }
            return d;
        })()
    }]
};