var districtList = ['听力', '口语', '阅读', '写作']
var bN = [12000, 20000, 15000, 8000],
    lN = [6000, 8008, 12000, 2000];


option = {
    backgroundColor: '#fff',

    legend: {
        x: 'center', //用百分比 处理块与文字位置
        y: 'bottom',
        orient: 'horizontal',
        textStyle: {
            fontSize: 12,
            lineHeight: 45,
            color: '#666',
        },
        selectedMode: false,    //选中哪个图例 false后图例不可点击
        data: ['个人', '整体']
    },
    xAxis: {
        type: 'category',
        data: districtList,
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
    },
    grid: { //用于处理图标放入过多空白问题
        top: '5%', //距上边距

        left: '5%', //距离左边距

        right: '5%', //距离右边距

        bottom: '10%', //距离下边距
    },
    series: [{
        name: '个人',
        data: lN,
        type: 'bar',
        color: '#1185fd',
        showBackground: false,

    }, {
        name: '整体',
        data: bN,
        type: 'bar',
        color: '#ff9191',
        showBackground: false,

    }]
};