colors = [
    ['#389af4', '#dfeaff'],
    ['#ff8c37', '#ffdcc3'],
    ['#ffc257', '#ffedcc'],
    ['#fd6f97', '#fed4e0'],
    ['#a181fc', '#e3d9fe']
]
option = {
    title: {
        text: '数据饼状图'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    series: [{
        name: '简易的',
        type: 'pie',
        clockWise: false,
        radius: [60, 70],
        itemStyle: {
            normal: {
                /*  color: colors[index][0],
                  shadowColor: colors[index][0],*/
                shadowBlur: 0,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            }
        },
        hoverAnimation: false,
        /*  center: [index * 20 + 10 +'%', '50%'],*/
        data: [{
            value: 80,
            label: {
                normal: {
                    formatter: function(params) {
                        return params.value + '%';
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold',
                        color: colors[1][0]
                    }
                }
            },


        }, {
            value: 20,
            itemStyle: {
                normal: {
                    color: '#0000'
                },
                emphasis: {
                    color: '#0000'
                }
            }
        }]
    }]
}