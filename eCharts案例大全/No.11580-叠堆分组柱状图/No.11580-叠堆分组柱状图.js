app.title = '项目部物资采购统计表';

function suspensionFormatter(params, option) {
    var result = '';
    var series = option.series;
    var year_xAxis = option.xAxis[0].data; //第一个X轴的值
    var dataIndex = params[0].dataIndex;
    var years = 4;

    if (params.length > 0) {
        result += params[0].name + "</br>";
    }
    for (var i = 0; i < years; i++) {
        var index = dataIndex * years + i;
        result += year_xAxis[i] + "</br>";
        for (var p in series) {
            if (p == '3')
                continue;
                
            var dotHtml = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + option.color[p] + '"></span>'
            result += dotHtml + series[p].name + "：" + series[p].data[index] + "%</br>"
        }
    }


    return result;
}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return suspensionFormatter(params, option);
        }
    },
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    legend: {
        data: ['COGS', 'ROS', 'SG&A']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '30%',
        containLabel: true
    },
    xAxis: [{
            type: 'category',
            axisPointer: {
                type: 'none',
                show: false
            },
            data: ['2014', '2015', '2016', '2017', '2014', '2015', '2016', '2017', '2014', '2015', '2016', '2017', '2014', '2015', '2016', '2017']
        },
        {
            position: 'bottom',
            offset: 30,
            type: 'category',
            data: ['OP', 'EAI', 'EAII', 'ACT'],
            axisTick: {
                inside: true,
                length: 60,
            },
            axisLine: {
                show: true
            }
        }

    ],
    yAxis: {
        type: 'value'
    },
    series: [{
            name: 'COGS',
            type: 'bar',
            stack: '总量',

            label: {
                normal: {
                    show: true,
                }
            },
            data: [500, 302, 301, 222, 500, 302, 301, 222, 500, 302, 301, 222, 500, 302, 301, 222]
        },
        {
            name: 'ROS',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                }
            },
            data: [120, 680, 101, 222, 120, 680, 101, 222, 120, 680, 101, 222, 120, 680, 101, 222]
        },
        {
            name: 'SG&A',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                }
            },
            data: [220, 182, 792, 222, 220, 182, 792, 222, 220, 182, 792, 222, 220, 182, 792, 222]
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            label: {
                normal: {
                    show: false,
                }
            },
            data: [0, 0, 0, 0]
        }
    ]
};