option = {
    grid: {
        top: '0',
        left: '0',
        right: '8%',
        bottom: '-20px',
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        inverse: true, //是否是反向坐标轴
        axisLine: {
            show: false, //隐藏坐标轴轴线
        },
        axisTick: {
            show: false, //隐藏坐标轴刻度
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    animation: false, //取消滚轴，滚动时的动画
    dataZoom: [ //滚轴配置项
        {
            type: 'slider',
            show: true,
            yAxisIndex: 0, //x y轴
            filterMode: 'none',
            width: 12,
            height: '100%',
            showDataShadow: false, //隐藏数据阴影
            left: '98%',
            start: 0, //开始
            end: 80, //结束
            textStyle: false, //隐藏文字
            zoomLock: true,
            handleSize: 0, //禁止修改控制手柄的尺寸
            showDetail: false, //隐藏文字
        },
        { //滑动
            type: 'inside',
            id: 'insideY',
            yAxisIndex: 0,
            start: 0,
            end: 10,
            zoomOnMouseWheel: false,
            moveOnMouseMove: true,
            moveOnMouseWheel: true,
        }
    ],
    series: [{
        data: [1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50],
        name: '合格率',
        type: 'bar',
        barWidth: 15,
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: '#00C7A9',
            },
        },
        zlevel: 11,
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#333',
                fontSize: 12,
            },
        },
    }, ],
};