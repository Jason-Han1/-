var colorJSON = {
    "S+": 'rgb(113, 82, 150)',
    "S": 'rgb(114, 96, 172)',
    "A": 'rgb(162, 101, 171)',
    "B": 'rgb(140, 123, 187)',
    "C": 'rgb(159, 142, 196)',
    "D": 'rgb(195, 178, 212)',
    "E": 'rgb(211, 195, 219)'
};
var levels = ["S+", "S", "A", "B", "C", "D", "E"];
var dataJson = {
    'A': 2,
    'C': 3,
    'B': 1,
    'E': 1,
    'D': 1,
    'S+': 1,
    'S': 4
};
option = {
    legend: {
        orient: 'vertical',
        right: 0,
        formatter: '{name} 级'
    },
    tooltip: {},
    title: {
        text: '特效镜头量：总计 ' + Object.keys(dataJson).reduce(function(all, key) {
            return all + dataJson[key];
        }, 0) + ' 个',
        left: 'center',
        textAlign: 'center',
        textStyle: {
            fontSize: 24
        },
        top: 0
    },
    grid: [{
            x: 0,
            y: 60,
            width: '45%',
            height: '80%',
            containLabel: true
        },
        {
            x2: 0,
            y: 60,
            width: '35%',
            height: '80%',
            containLabel: true
        },
    ],
    xAxis: {
        type: 'value',
        max: dataJson,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: levels.map(function(key) {
            return key + (key.length > 1 ? '' : ' ') + '级'
        }),
        axisLabel: {
            interval: 0,
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            show: true,
            position: 'right',
            formatter: ' {c} 个'
        },
        data: levels.map(function(key) {
            return {
                name: key + ' 级',
                value: dataJson[key]
            }
        }),
        itemStyle: {
            color: 'rgb(137, 84, 212)'
        }
    }, {
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['75%', '60%'],
        data: levels.map(function(key) {
            return {
                name: key,
                value: dataJson[key]
            }
        }),
        label: {
            formatter: '{b} 级：{c}'
        },
        itemStyle: {
            color: function(params) {
                return colorJSON[params.name]
            }
        }
    }]
};