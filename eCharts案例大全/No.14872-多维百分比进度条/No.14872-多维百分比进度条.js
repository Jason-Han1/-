app.title = '堆叠条形图';
var _boyActual = [50, 100, 120];
var _boyShould = [150, 150, 120];
var _girlActual = [70, 100, 120];
var _girlShould = [150, 120, 150];
var _college = ['学院1', '学院2', '学院3'];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(data) {
            console.log(data[0].dataIndex);
            var _str = _college[data[0].dataIndex] + "<br>";
            _str += "男应报道： " + _boyShould[data[0].dataIndex] + " 人<br>";
            _str += "男实报道： " + _boyActual[data[0].dataIndex] + " 人<br>";
            _str += "男报到率： " + (_boyActual[data[0].dataIndex] * 100 / _boyShould[data[0].dataIndex]).toFixed(2) + " %<br>";
            _str += "女应报道： " + _girlShould[data[0].dataIndex] + " 人<br>";
            _str += "女实报道： " + _girlActual[data[0].dataIndex] + " 人<br>";
            _str += "女报到率： " + (_girlActual[data[0].dataIndex] * 100 / _girlShould[data[0].dataIndex]).toFixed(2) + " %";
            return _str;
        }
    },
    legend: {
        show: true,
        top: 10,
        data: ['男', '女']
    },
    grid: {
        left: '1%',
        right: '6%',
        bottom: '3%',
        top: 40,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: true,
        max: 100,
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
    yAxis: [{
        type: 'category',
        position: "left",
        data: _college
    }, {
        type: 'category',
        position: "left",
        data: _college
    }, {
        type: 'category',
        position: "left",
        data: _college
    }],
    series: [{
        name: '男应报道人数',
        type: 'bar',
        yAxisIndex: 0,
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return _boyShould[data.dataIndex] + " 人";
                },
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#aaa'
            }
        },
        data: [100,100,100]
    }, {
        name: '女应报道人数',
        type: 'bar',
        yAxisIndex: 0,
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return _girlShould[data.dataIndex] + " 人";
                },
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#aaa'
            }
        },
        data: [100,100,100]
    }, {
        name: '男',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return _boyActual[data.dataIndex] + " 人 (" + (_boyActual[data.dataIndex] * 100 / _boyShould[data.dataIndex]).toFixed(2) + " %) ";
                },
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#188333'
            }
        },
        data: _boyActual.map(function(item, index) {
            return parseInt(item / _boyShould[index] * 100)
        })
    },{
        name: '占位',
        type: 'bar',
        yAxisIndex: 1
    }, {
        name: '占位',
        type: 'bar',
        yAxisIndex: 2
    },{
        name: '女',
        type: 'bar',
        yAxisIndex: 2,
        zlevel:2,
        label: {
            normal: {
                show: true,
                formatter: function(data) {
                    return  _girlActual[data.dataIndex] + " 人 (" + (_girlActual[data.dataIndex] * 100 / _girlShould[data.dataIndex]).toFixed(2) + " %) ";
                },
                position: 'insideRight'
            }
        },
        itemStyle: {
            normal: {
                color: '#c54040'
            }
        },
        data: _girlActual.map(function(item, index) {
            return parseInt(item / _girlShould[index] * 100)
        })
    }]
};