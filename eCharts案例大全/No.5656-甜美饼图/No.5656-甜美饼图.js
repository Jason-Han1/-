function getData(color) {
    return [{
            value: 335,
            name: '一月',
            itemStyle: {
                color: color
            }
        },
        {
            value: 310,
            name: '二月',
            itemStyle: {
                color: color
            }
        },
        {
            value: 234,
            name: '三月',
            itemStyle: {
                color: color
            }
        },
        {
            value: 135,
            name: '四月',
            itemStyle: {
                color: color
            }
        },
        {
            value: 159,
            name: '五月',
            itemStyle: {
                color: color
            }
        }
    ]
}
option = {
    color: ['#efe5e1', '#d77c74', '#e9c5b3', '#efe5e1', '#bfcfd1'],
    backgroundColor: '#fff',
    title: {
        text: '甜美饼图',
        x: 'center',
        y: '5%',
        textStyle: {
            fontSize: 30,
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        icon: 'circle',
        y: 'center',
        x: 'right',
        data: getData().map(item => item.name)
    },
    series: [{
        name: '外圈',
        type: 'pie',
        radius: ['0%', '70%'],
        label: {
            normal: {
                show: false,
                // position: 'center'
            },
            // emphasis: {
            //     show: true,
            //     textStyle: {
            //         fontSize: '30',
            //         fontWeight: 'bold'
            //     }
            // }
        },
        itemStyle: {
            normal: {
                borderWidth: 5,
                borderColor: '#fff',
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: getData().map(item => {
            return {
                value: item.value,
                name: item.name
            }
        })
    }, {
        name: '内圈',
        type: 'pie',
        radius: ['48%', '49%'],
        hoverAnimation: false,
        label: {
            normal: {
                show: true,
                position: 'inside',
                color:'#000',
                formatter: (params) => {
                    return params.value / 100 + '%'
                },
            },
            // emphasis: {
            //     show: true,
            //     textStyle: {
            //         fontSize: '30',
            //         fontWeight: 'bold'
            //     }
            // }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: getData('transparent')
    }]
};

myChart.setOption(option);