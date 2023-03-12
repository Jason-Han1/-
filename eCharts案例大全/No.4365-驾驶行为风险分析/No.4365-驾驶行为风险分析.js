const machine = [];
for (let i = 65; i < 91; i++) {
    machine.push('线路' + String.fromCharCode(i))
}
const xData = machine.slice();
const yData = [];
for(let i = 0;i<24;i++){
    yData.push(i+':00')
}
const rowData = [];

machine.forEach(function(item, index) {
    const current = item;
    yData.forEach(function(item, index) {
        rowData.push({
            target: item,
            source: current,
            value: Math.floor(Math.random() * 150),
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
            return [source + ':' + status
            ].join('<br/>')
        }
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLabel: {
            interval: 'auto',
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
            interval: 'auto',
            rotate: 0
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
        show: true,
        right: '0',
        bottom: '0',
        orient: 'horizontal',
        pieces: [{
                gt: 100,
                color: 'rgba(237, 89, 76, 1)',
                label: '拥堵'
            },{
                lt: 100,
                color: 'rgba(214, 170, 77, 1)',
                label: '缓行',
            },
            {
                lt: 50,
                color: 'rgba(39, 246, 177, 1)',
                label: '畅通'
            },
        ]
    }
};