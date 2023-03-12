var fontSize = (val) => {
    return val
}
let data = [{
    name: "a",
    value: 40
}, {
    name: "b",
    value: 30
}, {
    name: "c",
    value: 20
}, {
    name: "d",
    value: 10
}, {
    name: "e",
    value: 5
}]
option = {
    backgroundColor: '#012248',
    color: [
        'rgb(0,208,254)',
        'rgb(232,205,134)',
        'rgb(1,137,255)',
        'rgb(134,208,181)',
        'rgb(138,174,224)'
    ],
    legend: {
        // type: 'scroll',//过多时
        orient: 'vartical',
        x: 'left',
        top: 'center',
        left: '60%',
        textStyle: {
            color: '#ffffff',
            fontSize: fontSize(16)
        },
        // data: data.map((item) => item.name),
        itemWidth: 40,
        itemHeight: 20,
        itemGap :20
    },
    series: [{
        name: '分布',
        type: 'pie',
        clockwise: false, // 饼图的扇区是否是顺时针排布
        // minAngle: 20, //最小的扇区角度（0 ~ 360）
        radius: ['30%', '40%'],
        center: ['35%', '50%'],
        // avoidLabelOverlap: false,//是否启用防止标签重叠策略
        label: {
            normal: {
                show: false,
                position: 'center',
                color: '#ffffff',
                formatter: (value) => {
                    return (
                        value.name.split('|')[0] +
                        '\n' +
                        parseInt(value.percent) + '%'
                    )
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: fontSize(16)
                }
            }
        },
        data: data
    }]
}

setTimeout(() => {
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    })

    myChart.on('mouseover', (params) => {
        // console.log(params)
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: params.dataIndex,
            dataIndex: params.seriesIndex
        })
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: 0
        })
    })

    myChart.on('mouseout', (params) => {
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        })
    })
}, 1000)