const mockData = [
    {total: "550", detail: "test1"},
    {total: "106", detail: "test2"},
    {total: "275", detail: "test3"},
    {total: "222", detail: "test4"},
    {total: "0", detail: "test5"},
]
//接口总数和标题文字
let value = 1288;
let title = '总数量';
option = {
    //中间圆形的 文字位置
     title: {
        text: '{a|' + value + '}\n{c|' + title + '}',
        x: '29.5%',
        y: '47%',
        textAlign:'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 30,
                    color: '#000',
                    fontWeight:'600',
                },
                c: {
                    fontSize:14,
                    color: '#555',
                    padding: [5, 0]
                }
            }
        }
    }, 
    grid: {
        left: 0
    },
     tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: '25%',
        left: '50%',
        data: mockData.map(item => item.detail), 
        icon: 'circle',
        formatter: params => { 
            const dataAll = mockData.map(item => Number(item.total))
            const total = dataAll.reduce((x, y) => parseInt(x, 10) + parseInt(y, 10))
            const value = Number(mockData.filter(item => item.detail === params)[0].total)
            if (total === 0) {
                return `{c|0}{d|个}{b|0%)}\n{a|${name}}`
            }
            const name = params
            return `\n\n{c|${value}}{d|个}{b|(${((value * 100) / total).toFixed(2)}%)}\n{a|${name}}`
        },
        textStyle: {
            rich: {
                a: {
                    color: '#847777e0',
                    width: 120,
                    fontSize: 14,
                    fontWeight: 'bold',
                    align: 'left',
                    padding: [5, 0]
                },
                b: {
                    color: '#847777e0',
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                 c: {
                    color: '#18355C',
                    fontSize: 20,
                    fontWeight: 'bold',
                }, d: {
                    color: '#18355C',
                    fontSize: 14,
                    fontWeight: 'bold',
                }
            }
        },  
        selectorPosition: 'start',
        align: 'left',
        itemHeight: 18,
        itemWidth: 12,
        itemGap: 0
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['42%', '30%'],
            center: ['30%', '50%'],
            clockwise: false,
            avoidLabelOverlap: false,
            hoverOffset: 10,
            legendHoverLink: true,
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#ffffff',
                }
            },
            data: [
                { 
                    value: mockData[0].total,
                    name: mockData[0].detail,
                    tooltip: formatterVal()
                },
                { 
                    value: mockData[1].total,
                    name: mockData[1].detail,
                    tooltip: formatterVal()
                },
                { 
                    value: mockData[2].total,
                    name: mockData[2].detail,
                    tooltip: formatterVal()
                },
                { 
                    value: mockData[3].total,
                    name: mockData[3].detail,
                    tooltip: formatterVal()
                },
                { 
                    value: mockData[4].total,
                    name: mockData[4].detail,
                    tooltip: formatterVal()
                },
            ]
        },
        {
            type: 'pie',
            radius: [0, '25%'],
            hoverAnimation: false,
            clockWise: false,
            center: ['30%', '50%'],
            tooltip: {
            formatter:  title +'：' + value,
            textStyle: {
                color: '#000'
            },
            backgroundColor: '#fff',
            extraCssText: 'box-shadow: 0px 0px 10px 0px rgba(19,83,88,0.2);'
            },
           /* tooltip: { //不现实总数的提示
                show: true
            },*/
            itemStyle: {
                normal: {
                    shadowBlur: 6,
                    shadowColor: '#444',
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 34, [{
                        offset: 0,
                        color: '#FFF',
                    }, {
                        offset: 1,
                        color: '#060f20'
                    }])
                }
            },
           label: {
                normal: {
                    show: false,
                },
            },
            data: [100]
        },
    ]
};

function formatterVal(){
 return   {
        formatter: '{b}({d}%)',
        textStyle: {
            color: '#000'
        },
        backgroundColor: '#fff',
        extraCssText: 'box-shadow: 0px 0px 10px 0px rgba(19,83,88,0.2);'
    }
}