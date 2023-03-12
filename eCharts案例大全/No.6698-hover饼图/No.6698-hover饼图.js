let pieData = [{
        value: 1224,
        name: '正常排污企业'
    },
    {
        value: 415,
        name: '异常排放企业'
    },
    {
        value: 224,
        name: '临界达标企业'
    },
];

let totalNum = 0;

pieData.forEach(item => {
    totalNum += item.value
})

option = {
    backgroundColor: '#2c3e50',
    //设置主副标题
    title: {
        show: true,
        text: '企业数量',
        subtext: totalNum,
        left: 'center',
        top: 'center',
        z: 0,
        zlevel: 100,
        textStyle: {
            textAlign: 'center',
            color: '#BAE7FF',
            fontSize: 14,
        },
        subtextStyle: {
            textAlign: 'center',
            color: '#fff',
            fontSize: 30,
            fontWeight: 600,
        },
    },

    tooltip: {
        show: false,
        trigger: 'item',
        alwaysShowContent: true,
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    //图例
    legend: {
        show: false,
    },
    //设置图表撑满整个画布
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true,
    },

    series: [{
        name: '企业数量',
        type: 'pie',
        //自定义颜色
        color: ['#06B716', '#F5222D', '#FAAD14'],
        radius: ['60%', '90%'], //饼图大小
        avoidLabelOverlap: false,
        legendHoverLink: false, //移入leged不显示在中间
        textAlign: 'center',

        label: {
            normal: {
                show: true,
                position: 'center', //文字显示在中间
                align: 'center',
                verticalAlign: 'middle',
                textStyle: {
                    //设置文字样式
                    fontSize: '0',
                },
            },
            emphasis: {
                show: true, //文字至于中间时，这里需为true
                textStyle: {
                    //设置文字样式
                    fontSize: '14',
                    color: '#BAE7FF',
                },
                formatter: '{b|{b}} \n {c|{c}} {d|{d}%}', //图形外文字上下显示
                //样式设置
                rich: {
                    b: {
                        //name 文字样式
                        lineHeight: 20,
                        fontSize: 14,
                        textAlign: 'center',
                        color: '#BAE7FF',
                    },
                    c: {
                        //value 文字样式
                        lineHeight: 36,
                        color: '#fff',
                        fontSize: 30,
                        fontWeight: 600,
                    },
                    d: {
                        //百分比样式
                        fontSize: 12,
                        color: '#BAE7FF',
                    },
                },
            },
        },
        itemStyle: {
            borderWidth: 2,
            borderColor: '#2E3E62',
        },
        labelLine: {
            show: false,
        },
        data: pieData,
    }, ],
};

// 自动渲染echarts
window.addEventListener('resize', () => {
    myChart.resize()
})

//自定义事件
myChart.on('mouseover', (params) => {
    myChart.setOption({
        title: {
            show: false,
        },
        series: {
            label: {
                emphasis: {
                    rich: {
                        c: {
                            //value 文字样式
                            color: params.color,

                        }
                    }
                }
            }
        }
    })
})

//自定义事件
myChart.on('mouseout', (params) => {
    myChart.setOption({
        title: {
            show: true,
        },
    })
})