option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    dataZoom: [
        //给x轴设置滚动条
        {
            start: 0, //默认为0
            end: 100 - 1500 / 31, //默认为100
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            handleSize: 0, //滑动条的 左右2个滑动条的大小
            height: 10, //组件高度
            left: '10%', //左边的距离
            right: '10%', //右边的距离
            bottom: 26, //右边的距离
            borderColor: '#000',
            fillerColor: '#269cdb',
            borderRadius: 5,
            backgroundColor: '#33384b', //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            realtime: true, //是否实时更新
            filterMode: 'filter',
        },
        //下面这个属性是里面拖到
        {
            type: 'inside',
            show: true,
            xAxisIndex: [0],
            start: 0, //默认为1
            end: 100 - 1500 / 31, //默认为100
        },
    ],
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
        },
    ],
};
