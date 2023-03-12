
option = {
     title: {
        text: '重庆市历年婴儿死亡率（1997-2017）',
        subtext: '数据来自2018重庆卫生和计划生育统计年鉴'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series : [
        {
            name:'婴儿死亡率（%）',
            type:'bar',
            barWidth: '60%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'cornflowerblue'},
                            {offset: 1, color: '#e9f0fc'}
                        ]
                    )
                },
            },
            data:[19.08, 20.85, 17.74, 15.90, 16.34, 15.45, 14.61, 13.64, 11.51, 9.94, 8.89, 8.15, 7.09, 7.75, 6.44, 5.56, 6.54, 5.56, 5.34, 4.30, 4.36]
        }
    ]
};
