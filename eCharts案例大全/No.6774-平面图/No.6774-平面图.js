const machine = [];
for (let i = 65; i < 91; i++) {
    machine.push('机器' + String.fromCharCode(i))
}
const xData = machine.slice();
const yData = machine.slice();

const rowData = [];

machine.forEach(function(item, index) {
    const current = item;
    machine.forEach(function(item, index) {
        rowData.push({
            target: item,
            source: current,
            value: Math.random() > 0.8 ? -1 : Math.floor(Math.random() * 100) + 1
        })
    })
})

const seriesData = rowData.map(function(item) {
    return [item.source, item.target, item.value]
})

option = {
    title: {
        text: '平面图',
        subtext: '展示各机器间的网络情况',
        left: 'center'
    },
    toolbox: {
        feature: {
            saveAsImage: {},
            dataZoom: {}
        }
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            var value = params.value
            var source = value[0]
            var target = value[1]
            var status = value[2]
            return [source + '-->' +
                target, status > -1 ? '延时:' + status : '高延时'
            ].join('<br/>')
        }
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: yData,
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        axisTick: {
            show: false
        }
    },
    series: {
        type: 'heatmap',
        data: seriesData,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            borderWidth: 1,
            borderColor: '#fff'
        }
    },
    visualMap: {
        show: false,
        pieces: [{
                gt: 0,
                color: '#66CC66'
            },
            {
                value: -1,
                color: '#CC5555'
            },
        ]
    }
};