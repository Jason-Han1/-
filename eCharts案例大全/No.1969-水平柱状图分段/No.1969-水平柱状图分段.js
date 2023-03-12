var spNum = 5,
    _max = 1600;
var legendData = ['雨天', '阴天', '晴天'];
var y_data = ['下海', '入地', '上天'];
var _datamax = [100, 100, 100, 100, 100, 100],
    _data1 = [300, 300, 1000],
    _data2 = [200, 200, 300],
    _data3 = [1000, 1000, 300];
var fomatter_fn = function (v) {
    console.log(v);
    return `${v.value}`;
    // return `${v.seriesName}${v.value}`
};
var _label = {
    normal: {
        show: true,
        position: 'inside',
        formatter: fomatter_fn,
        textStyle: {
            color: '#333',
            fontSize: 16,
        },
    },
};
option = {
    // backgroundColor: '#091034',
    title: [
        {
            subtext: '1600(m)',
            right: '10%',
            top: '20%',
            textAlign: 'left',
            subtextStyle: {
                color: '#333',
                fontSize: 14,
            },
        },
        {
            subtext: '1500(m)',
            right: '10%',
            top: '50%',
            textAlign: 'left',
            subtextStyle: {
                color: '#333',
                fontSize: 14,
            },
        },
        {
            subtext: '1500(m)',
            right: '10%',
            top: '80%',
            textAlign: 'left',
            subtextStyle: {
                color: '#333',
                fontSize: 14,
            },
        },
    ],
    legend: {
        left: '23%',
        data: legendData,
        textStyle: {
            color: '#333',
        },
    },
    grid: {
        containLabel: true,
        left: 0,
        right: 150,
        bottom: 30,
    },
    tooltip: {
        show: true,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        textStyle: {
            color: '#3c3c3c',
            fontSize: 16,
        },
        formatter: function (p) {
            console.log(p);
            var _arr = p.seriesName.split('/'),
                idx = p.seriesIndex; //1，2，3
            return '名称：' + p.seriesName + '<br>' + '长度：' + p.value;
            // return '名称：' + p.seriesName + '<br>' + '长度：' + p.value + '<br>' + '占比：' + (p.value / _max * 100).toFixed(0) + '%';
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)',
    },
    xAxis: {
        splitNumber: spNum,
        interval: _max / spNum,
        max: _max,
        axisLabel: {
            show: false,
            formatter: function (v) {
                var _v = ((v / _max) * 100).toFixed(0);
                return _v == '0' ? _v : _v + '%';
            },
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: [
        {
            data: y_data,
            axisLabel: {
                fontSize: 16,
                color: '#333',
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        {
            show: false,
            data: y_data,
            axisLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'bar',
            name: '雨天',
            stack: '2',
            label: _label,
            legendHoverLink: false,
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: 'rgb(100, 224, 234)',
                },
                emphasis: {
                    color: 'rgb(100, 244, 244)',
                },
            },
            data: _data1,
        },
        {
            type: 'bar',
            name: '阴天',
            stack: '2',
            legendHoverLink: false,
            barWidth: 25,
            label: _label,
            itemStyle: {
                normal: {
                    color: 'rgb(144, 144, 144)',
                },
                emphasis: {
                    color: 'rgb(144, 164, 154)',
                },
            },
            data: _data2,
        },
        {
            type: 'bar',
            stack: '2',
            name: '晴天',
            legendHoverLink: false,
            barWidth: 25,
            label: _label,
            itemStyle: {
                normal: {
                    color: 'rgb(254,221,89)',
                },
                emphasis: {
                    color: 'rgb(254,241,99)',
                },
            },
            data: _data3,
        },
    ],
};
