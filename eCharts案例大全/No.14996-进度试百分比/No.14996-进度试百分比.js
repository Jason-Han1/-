app.title = '条形图';
var _should = [150, 150, 200];
var _actual = [50, 100, 100];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(data) {
            console.log(data[0].dataIndex);
            var _str = "";
            _str += "应报道： " + _should[data[0].dataIndex] + " 人<br>";
            _str += "实报道： " + _actual[data[0].dataIndex] + " 人<br>";
            _str += "报到率： " + (_actual[data[0].dataIndex] * 100 / _should[data[0].dataIndex]).toFixed(2) + " %";
            return _str;
        }
    },
    legend: {
        show: false,
        top: 10,
        data: ['应报道人数', '已报到人数']
    },
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        top: 40,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: true,
        max: 120,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['学院1', '学院2', '学院3']
    },
    series: [{
        name: '应报道人数',
        type: 'bar',
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return _should[data.dataIndex] + " 人";
                },
                position: 'right',
                textStyle: {
                    color: '#000'
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#aaa',
                borderWidth: 5,
                borderColor: '#188333'
            }
        },
        data: [100, 100, 100]
    }, {
        name: '已报到人数',
        type: 'bar',
        barGap: '-100%',
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return "已报到人数：" + _actual[data.dataIndex] + " 人\n\n报到率： " + (_actual[data.dataIndex] * 100 / _should[data.dataIndex]).toFixed(2) + " % ";
                },
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#188333'
            }
        },
        data: _actual.map(function(item, index) {
            return parseInt(item / _should[index] * 100)
        })
    }]
};