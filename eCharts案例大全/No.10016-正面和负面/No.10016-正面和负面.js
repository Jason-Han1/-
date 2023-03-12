/**
 * 外接数据
 * 
 */
var data = { //标准参数
    id: 'multipleThree',
    title: '正面和负面',
    legend: ['正面', '负面'],
    barWidth: 30,
    yAxis: ['最值得冒险', '知道不知道', '儿子娃娃', '正确人类', '纠结', '只要平凡'],
    xAxis: [
        [-80, 0, -60, -95, 0, -80],
        [0, 20, 0, 0, 80, 0]
    ],
    color: ['#5e94dd', '#f54545'],
    totalCost: [100, 100, 100, 100, 100, 100],
    totalCostf: [-100, -100, -100, -100, -100, -100]
}


option = {
    backgroundColor: '#fff',
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
                }
                if (i.seriesName == '正面' && Math.abs(i.data)) {
                    str += Math.abs(i.data)
                }
                if (i.seriesName == '负面' && Math.abs(i.data)) {
                    str += Math.abs(i.data) * -1
                }
            }
            return time + str;
        },
    },
    color: data.color,
    // legend: {
    //     top: 12,
    //     itemGap: 10,
    //     itemWidth: 10,
    //     itemHeight: 10,
    //     data: data.legend
    // },
    grid: {
        x: 200,
        x2: 100,
        y2: 30,
        containLabel: true
    },
    xAxis: {
        show: false,
    },
    yAxis: [{
        type: 'category',
        offset: 80,
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
            barWidth: data.barWidth,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#687284',
                    fontSize: '10',
                    formatter: function(params) {
                        return "";
                    }
                },

            },
            data: data.xAxis[0]
        },
        {
            name: data.legend[1],
            type: 'bar',
            barWidth: data.barWidth,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#687284',
                    fontSize: '10',
                    formatter: function(params) {
                        return "";
                    }
                }
            },
            data: data.xAxis[1]
        },
        {
            type: 'bar',
            barGap: '-100%',
            barWidth: data.barWidth,
            z: 1,
            data: data.totalCostf,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    color: '#666',
                    fontSize: 12,
                    offset: [0, 0],
                    formatter: function(param) {
                        return "100";
                        // var dd = datas.chartData;
                        // return dd[param.dataIndex] + '%';
                    },
                }
            },
            itemStyle: {
                emphasis: {
                    color: 'eee'
                },
                normal: {
                    color: '#eee',
                }
            },
        },
        {
            type: 'bar',
            barGap: '-100%',
            barWidth: data.barWidth,
            z: 1,
            data: data.totalCost,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#666',
                    fontSize: 12,
                    offset: [0, 0],
                    formatter: function(param) {
                        return "-100";
                        // var dd = datas.chartData;
                        // return dd[param.dataIndex] + '%';
                    },
                }
            },
            itemStyle: {
                emphasis: {
                    color: 'eee'
                },
                normal: {
                    color: '#eee',
                }
            },
        }
    ]
}