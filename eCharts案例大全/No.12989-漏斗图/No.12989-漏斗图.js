const data = {
    legend: ['分配名单量', '下发名单量', '执行名单量', '成功名单量'],
    value: [500, 350, 250, 130],
    title:'漏斗图',
    color:['#3FA7DC', '#E1CA74', '#5170A2', '#E1CA74'],
}

let {
    legend
} = data
var seriesData = []
data.value.forEach(function(item, index) {
    seriesData.push({
        value: item,
        name: data.legend[index]
    })
})

option = {
    title: {
        x: '2%',
        y: '2%',
        textStyle: {
            fontWeight: 400,
            fontSize: 16,
            color: '#687284'
        },
        text: data.title || ''
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    color:data.color,
    legend: {
        data: legend,
        orient: 'horizontal',
        bottom: 0,
        icon: 'circle',
        selectedMode: false,
        itemWidth: 6,
        itemHeight: 100,
        itemGap: 10,
        borderRadius: 6,
    },
    // calculable: true,
    series: [{
        name: '漏斗图',
        type: 'funnel',
        minSize: data.value[3],
        left: '20%',
        width: '60%',
        top: 0,
        gap: 2,
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    fontSize: 15,
                },
                formatter: '{c}',
            },
        },
        labelLine: {
            normal: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 0
            }
        },
        data: seriesData
    }]
};