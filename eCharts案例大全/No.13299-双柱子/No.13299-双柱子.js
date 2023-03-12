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
    color: ['#5e94dd', '#49b5bd'],
}


option = {
    backgroundColor:'#fff',
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
        show: false
    },
    yAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: '0',
            textStyle: {
                fontSize: 12,
                color: '#687284',
            },
        },
        data: data.yAxis
    }],
    series: [{
            name: data.legend[0],
            type: 'bar',
            barWidth: data.barWidth||12,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#687284',
                    fontSize: '10',
                    formatter: function(params) {
                        return params.data * -1;
                    }
                },

            },
            data: data.xAxis[0]
        },
        {
            name: data.legend[1],
            type: 'bar',
            barWidth: data.barWidth||12,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#687284',
                    fontSize: '10',
                }
            },
            data: data.xAxis[1]
        },
    ]
}