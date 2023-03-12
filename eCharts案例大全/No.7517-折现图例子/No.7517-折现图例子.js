option = {
    tooltip: {
        // 坐标轴触发
        trigger: 'axis',
        // 坐标轴指示器配置
        axisPointer: {
            // 线
            type: "line",
            // 线样式
            lineStyle: {
                type: 'dashed',
                color: '#05E1B6',
            }
        },
        // 禁用跟随鼠的tips。如果开启，下面注释的部分要打开
        showContent: false
        // // tips背景色
        // backgroundColor : 'rgb(50,50,50)',
        // // tips内边距
        // padding: [5, 20],
        // // tips位置
        // position: function (point, params, dom, rect, size) {
        //     return [point[0] - size.contentSize[0] / 2, point[1] - size.contentSize[1] * 1.5];
        // },
        // // tips文字样式
        // textStyle:{
        //     color: '#05E1B6' 
        // },
        // // tisp文字内容
        // formatter: function(params, ticket, callback){
        //     var arr = params[0].value
        //     return `时间 : ${arr[0]}  用户人数 : ${arr[0]}人`;
        // }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
    },
    series: [{
        type: 'line',
        smooth: 0.6,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
            color: '#05E1B6',
            width: 2
        },
        itemStyle: {
            color: '#fff',
            borderColor: '#05E1B6'
        },
        // 高亮效果
        emphasis: {
            label: {
                show: true,
                color: '#05E1B6',
                // fontSize :15,
                padding: [10, 15],
                borderRadius: 5,
                backgroundColor: 'rgb(50,50,50)',
                formatter: '时间 :{@0}  用户人数 : {@1}人'
            },
            itemStyle: {
                color: '#04b390',
                borderWidth: 0
            },
        },
        areaStyle: {
            color: 'rgba(5, 255, 182, 0.2)'
        },
        data: [
            ['2019-10-10', 200],
            ['2019-10-11', 400],
            ['2019-10-12', 650],
            ['2019-10-13', 500],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
        ]
    }]
};