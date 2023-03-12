/**
 * 外接数据
 * 
 */
var data = { //标准参数
    id: 'multipleThree',
    title: '双柱子',
    legend: ['正面', '负面'],
    barWidth:30,
    yAxis: ['最值得冒险', '知道不知道', '儿子娃娃', '正确人类', '纠结', '只要平凡'],
    xAxis: [
        [-180, -150, -60, -95, -160, -80],
        [150, 220, 165, 300, 180, 200, ]
    ],
    color: ['#00C79A', '#FDAB2C'],
}


option = {
    backgroundColor:'#000',
    title: {
        text: data.title,
        left: 20,
        textStyle: {
            fontSize: 16,
            fontWeight: 500,
            color: '#414957'
        },
        top: 12
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: false // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var time = '';
            var str = '';
            for (var i of params) {
                time = i.name.replace(/\n/g, '') + '<br/>';
                if (i.data == 'null' || i.data == null) {
                    str += i.seriesName + '：无数据' + '<br/>'
                } else {
                    str += i.seriesName + '：' + Math.abs(i.data) + '<br/>'
                }
            }
            return time + str;
        },
    },
    legend: {
        top: 12,
        itemGap: 10,
        itemWidth: 10,
        itemHeight: 10,
        data: data.legend
    },
    color: data.color,
    grid: {
        x: 50,
        x2: 30,
        y2: 5,
        containLabel: true
    },
    xAxis: {
         axisLine: {
            lineStyle: {
                color: '#fff',
                opacity: 0.1
            }
        },
         axisTick: {
            show: false
        },
        splitLine: {
            show:false,
        },
         axisLabel: {
            show: true,
            interval: '0',
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)'
        },
    },
    yAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#fff',
                opacity: 0.1
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: '0',
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)'
        },
        data:data.yAxis,
    }],
    series: [{
            name: data.legend[0],
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            itemStyle: {
                borderWidth: 1,
                barBorderRadius: [8,0,0,8],
            },
            data: data.xAxis[0]
        },
        {
            name: data.legend[1],
            type: 'bar',
            barWidth: data.barWidth||12,
            stack: '总量',
             itemStyle: {
                borderWidth: 1,
                barBorderRadius: [0,8,8,0],
            },
            data: data.xAxis[1]
        },
    ]
}