option = {
    legend: { //图例组件，颜色和名字
        right: '10px',
        top: '10px',
        itemGap: 10,
        itemWidth: 18,
        itemHeight: 10,
        data: [
            {
                name: '用户数量',
            }
        ],
        textStyle: {
            color: '#606266',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',

        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                color: '#ffde33'
            }, {
                gt: 100,
                lte: 150,
                color: '#ff9933'
            }, {
                gt: 150,
                lte: 200,
                color: '#cc0033'
            }, {
                gt: 200,
                lte: 300,
                color: '#660099'
            }, {
                gt: 300,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
    series: [{
            type: 'line',
            name: '用户数量',
            data: [10, 190, 110, 150, 200, 400, 500],
            itemStyle: {
                normal: {
                    show: true,
                    // color: '#5768EF',
                    borderWidth: 5,
                }
            },

        },
       
    ]
};