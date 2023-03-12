const _legendList =  [ '启动会', '题目一', '题目二', '题目三', '题目四', '答辩准备' ]
const _map = {
    '2020-07-09': [1.5, _legendList[0]],
    '2020-07-11': [1, _legendList[0]],
    '2020-07-20': [1, _legendList[1]],
    '2020-07-23': [1, _legendList[1]],
    '2020-07-26': [1, _legendList[4]],
    '2020-07-27': [1.5, _legendList[4]],
    '2020-07-29': [2, _legendList[4]],
    '2020-08-16': [2, _legendList[1]],
    '2020-09-01': [1.5, _legendList[2]],
    '2020-09-05': [2, _legendList[2]],
    '2020-09-09': [1, _legendList[3]],
    '2020-09-12': [1, _legendList[5]],
    '2020-09-13': [1.5, _legendList[5]],
}

const _legend = [{
    text: _legendList[0],
    color: '#2cdfff'
}, {
    text: _legendList[1],
    color: '#f4e925'
}, {
    text: _legendList[2],
    color: '#aa4fff'
}, {
    text: _legendList[3],
    color: '#00ffea'
}, {
    text: _legendList[4],
    color: '#719df4'
}, {
    text: _legendList[5],
    color: '#ff680e'
}]
function getVirtulData(year) {
    year = year || '2020';
    var date = +echarts.number.parseDate(year + '-07-01');
    var end = +echarts.number.parseDate((+year) + '-10-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        const _date = echarts.format.formatTime('yyyy-MM-dd', time)
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            (_map[_date]) ? (_map[_date][0] * 600) : 0,
            (_map[_date]) ? (_map[_date][1]) : '',
        ]);
    }
    return data;
}

var data = getVirtulData(2020).sort(function (a, b) {
    return b[1] - a[1];
}).slice(0, 13);
console.log(data)
const cellSize = 50

function getSeries () {
    const _series = []
    _legend.forEach(item => {
        _series.push({
            name: item.text,
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        return echarts.format.formatTime('dd', params.value[0]);
                    },
                    offset: [-10, -15],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                }
            },
            data: data,
            symbolSize: function (val) {
                if (val[2] !== item.text) return
                return val[1] / 50;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                color: item.color,
                shadowBlur: 10,
                shadowColor: '#333'
            },
            zlevel: 1
        })
    })
    return _series
}
option = {
    backgroundColor: '#404a59',
    title: {
        top: 30,
        text: '',
        subtext: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '0',
        left: '100',
        data: _legendList,
        textStyle: {
            color: '#fff'
        }
    },
    calendar: [
        {
        top: 100,
          orient: 'vertical',
    cellSize: 50,
        left: 'center',
        range: ['2020-07-01', '2020-09-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            margin: 400
        },
        dayLabel: {
            firstDay: 1,
            nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            color: '#fff'
        },
        monthLabel: {
            nameMap: 'cn',
            margin: 20,
            color: '#fff'
        },
        itemStyle: {
            color: '#323c48',
            borderWidth: 1,
            borderColor: '#111'
        }
    }],
    series: getSeries()
};

