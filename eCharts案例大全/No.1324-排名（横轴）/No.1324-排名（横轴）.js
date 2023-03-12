var data = [70, 34, 60, 70, 34, 60, 78, 69, 78, 69];
var titlename = ['1号机', '2号机', '3号机', '揭西五经富厂', '1号机', '2号机', '3号机', '4号机', '5号机', '5号机'];
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6', '#F8B448', '#8B78F6'];
option = {
    backgroundColor: '#fff',
    title: {
        text: '电耗排名TOP10',
        // x: 'left',
        textStyle: {
            fontSize:15,
            color: '#333'
        },
        // left: '6%',
        // top: '10%'
    },
    //图标位置
    grid: {
        // top: '20%',
        left: '15%'

    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
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
            color: '#333',
            formatter: (value, index) => {
                return [
                    `{lg|${index+1}}  ` + '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                lg: {
                    backgroundColor: '#8d7fec',
                    color: '#fff',
                    borderRadius: 15,
                    padding: 2,
                    align: 'center',
                    width: 15,
                    height: 15
                },
                title:{
                    backgroundColor: '#8d7fec',
                    color: '#fff',
                    width:77,
                    align:'left',
                    borderRadius: 5,
                    padding: 5,
                }
            }
        },
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#333',
                        fontSize: '16',
                    }
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    // 渐变色
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        // offset: 0,
                        // color: 'rgba(0,255,0)'
                    // }, {
                        // offset: 1,
                        // color: 'rgb(215 ,255,0)'
                    // }]),
                    
                }
            },

        },
    ]
};