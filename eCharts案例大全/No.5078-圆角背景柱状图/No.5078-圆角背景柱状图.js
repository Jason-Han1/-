var itemStyle = {
            //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
            emphasis: {
                barBorderRadius: 50
            },
            normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: 50,
                label: {
                    show: true,//是否展示
                    position: 'top',	//在上方显示
                    textStyle: {
                        fontWeight:'bolder',
                        fontSize : 16,
                        fontFamily : '微软雅黑',
                    }
                },
                color: '#2F2F39'
            }
        }
option = {
    title: {
        text: '对外投资行业统计分析图（全国）',
        left: 'left',
        top: 0,
        textStyle: {
            fontSize: 12,
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 16,
                color: '#333'
            },
            rotate: 30,
        },
        data: ['赔偿案件', '民辖案件', '执行案件', '其他', '刑事案件', '民事案件', '行政案件']
    },
    yAxis: {
        type: 'value',
        show:false
    },
    series: [{
        data: [120, 200, 0, 80, 70, 110, 130],
        type: 'bar',
        barWidth:50,
        showBackground: true,
        backgroundStyle: {
            color: '#dddddd',
            barBorderRadius: 50
        },
        itemStyle: itemStyle
    }]
};
