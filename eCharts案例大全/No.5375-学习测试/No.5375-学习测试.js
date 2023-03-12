option = {
    title: {
        text: '保单继续率', //这个是整体图标的标题
        textStyle: {
            color: 'red', //文字颜色
            fontSize: 30 //文字大小
        },
        top: "1%", //距离上面百分比
        left: 'center' //标题位子 left center right
    },
    backgroundColor: 'rgba(255,250,221,0.5)', //背景颜色
    xAxis: {
        data: ['银行保险', '个人营销', '电销', '网销']
    },
    grid: { //可以控制上下左右边距
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: "10%",
        containLabel: true, //是否包含内容
    },
    legend: { //图例组件，颜色和名字
        right: 10,
        top: '15%',
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        data: [{
                name: '计划生产重量',
            }
        ],
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 16,
        }
    },
    tooltip: { //提示框组件 鼠标落在上面显示的提示
        trigger: 'axis',
        formatter: '{b}<div style="width:50px;height:50px;background-color:yellow;"></div>', //这里可以接收html代码哦
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: 'red'
            }
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};