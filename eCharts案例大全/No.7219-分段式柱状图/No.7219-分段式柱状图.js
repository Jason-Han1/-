/*
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
重要的事情说三遍，没有脸的可以直接cv发布哈
*/

let data1 = [500, 500, 500, 500, 1000, 1000, 2000];
let data2 = [2000, 1000, 1500, 2000, 2000, 2500, 2000];
let data3 = [500, 2000, 2000, 2000, 2000, 2000, 2000];
option = {
    backgroundColor: '#011e2c',
    xAxis: {
        show: false
    },
    legend: {
        data: ['种类一', '种类二', '种类三'],
        selectedMode: false, //取消图例上的点击事件
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        position: 'right'
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid: {
        left: '20%',
        top: 15,
        right: '20%',
        bottom: '10%'
    },
    yAxis: [{
        show: true,
        data: ['类型一', '类型二', '类型三', '类型四', '类型五', '类型六'],
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 15,
            rich: {
                lg: {
                    backgroundColor: '#339911',
                    color: '#fff',
                    borderRadius: 15,
                    align: 'center',
                    width: 15,
                    height: 20
                }
            }
        }
    }, ],
    series: [{
            name: '种类一', // 行业类别
            stack: 2,
            type: 'bar',
            paddingTop: 10,
            zlevel: 100,
            data: data1,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 0, 0, 30],
                    color: '#5891ff'
                },
                animationEasing: 'elasticOut'
            }
        },
        {
            name: '种类二', // 行业类别
            type: 'bar',
            paddingTop: 10,
            zlevel: 100,
            stack: 2,
            data: data2,
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: '#1bc8c8'
                },
                animationEasing: 'elasticOut'
            }
        },
        {
            name: '种类三', // 行业类别
            type: 'bar',
            paddingTop: 10,
            zlevel: 100,
            stack: 2,
            data: data3,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    color: '#edc506'
                },
                animationEasing: 'elasticOut'
            },
            label: {
                show: true,
                position: 'right',
                offset: [9, 0],
                align: 'left',
                color: '#4891ff',
                formatter: function(params) {
                    return (
                        data1[params.dataIndex] +
                        data2[params.dataIndex] +
                        data3[params.dataIndex] +
                        '个'
                    );
                }
            }
        },
        {
            name: '背景柱子', 
            type: 'bar',
            data: [6000, 6000, 6000, 6000, 6000, 6000],
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#fff'
                },
            },
            label: {
               show: true,
                position: 'right',
                offset: [9, 0],
                align: 'left',
                color: '#4891ff',
                formatter: function(params) {
                    return (
                      parseInt((( data1[params.dataIndex] +
                        data2[params.dataIndex] +
                        data3[params.dataIndex])/(params.data))*100) +'%'
                        
                    );
                }
            }
        }
    ]
}