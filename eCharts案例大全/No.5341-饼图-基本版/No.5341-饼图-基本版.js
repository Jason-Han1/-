let data = [{
    name: "a",
    value: 40
},{
    name: "b",
    value: 30
},{
    name: "c",
    value: 20
},{
    name: "d",
    value: 10
}]
option = {
    backgroundColor: '#012248',
    color: [
        '#81afe7',
        '#69d4b5',
        '#cfd4d8',
        '#f08080',
        '#ebcc7b',
        '#d2d17c',
    ],
    grid: {
        left: 'center',
        top: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a}：<br/>{b} : {c}({d}%)'
    },
    legend: {
        top: 'center',
        right: '15%',
        itemWidth: 20,
        itemHeight: 16,
        orient: 'vertical',
        itemGap: 12,
        textStyle: {
            fontSize: 16,
            color: 'rgba(255,255,255,1)'
        },
        data: data.map((item)=>{return item.name})
    },
    series: [{
        name: '分布',
        type: 'pie',
        radius: [0,'50%'],
        center: ['50%', '50%'],
        data: data,
        label: {
            fontSize: 16,
            show: false
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 50,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
}