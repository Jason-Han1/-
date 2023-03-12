var data = [1,1,1,3,3,4,1,1,2,1,2,1,1,1,1,3,3,4,1,1,2,1,2,1,1,1,1,3,3,4,1,1,2,1,2,1,1,1,1,3,3,4,1,1,2,1,2,1];
var colors = ['#c23531','#2f4554', '#61a0a8', '#d48265'];
var lineColors = data.map((value, index) =>{
    var lineNumber = (1/60)*(index + 1);
    return [lineNumber, colors[value -1]]
});
option = {
    series: [{
        name: '颜色',
        type: 'gauge',
        center: ['50%', '50%'],
        radius: '56%',
        //min: 0,
        //max: 60,
        startAngle: 90,
        endAngle: -269.9999,
        //splitNumber: 12,
        animation: 0,
        pointer: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: lineColors,
                width: 300
            }
        },
        splitLine: { //分割线样式
            show: false,
            length: 18,
            lineStyle: {
                width: 1
            }
        },
        axisTick: {
            show: false
        }, //仪表盘刻度样式
        axisLabel: { //刻度标签
            show: false
        },
        title: {
            show: false
        },
        detail: {
            show: false
        },
        data: []
    }, {
        name: '小时',
        type: 'gauge',
        radius: '56%',
        min: 0,
        max: 12,
        startAngle: 90,
        endAngle: -269.99999,
        splitNumber: 12,
        axisLine: {
            lineStyle: {
                color: [
                    [1, '#153d70']
                ],
                width: 6
            }
        },
        axisLabel: {
            show: true,
            distance: -40,
            formatter: function(t) {
                return t ? t : '';
            },
            fontSize: 16,
            color: '#153d70'
        },
        axisTick: {
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            length: 16,
            lineStyle: {
                color: 'auto',
                width: 6
            }
        },
        pointer: { //指针
            length: '60%',
            width: 12
        },
        itemStyle: {
            color: '#153d70' //指针颜色
        },
        detail: {
            show: false
        },
        data: [{
            value: 9.6
        }]
    }, {
        name: '分钟',
        type: 'gauge',
        radius: '56%',
        min: 0,
        max: 60,
        startAngle: 90,
        endAngle: -269.99999,
        splitNumber: 60,
        axisLine: {
            show: false,
            lineStyle: {
                color: [
                    [1, '#153d70']
                ],
                width: 6
            }
        },
        axisLabel: {
            show: false,
            distance: 10
        },
        axisTick: {
            show: false,
            length: 4,
            lineStyle: {
                color: 'auto',
                width: 1
            }
        },
        splitLine: {
            show: false,
            length: 4,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        pointer: {
            length: '90%',
            width: 8
        },
        itemStyle: {
            color: '#153d70' //指针颜色
        },
        detail: {
            show: false
        },
        data: [{
            value: 50
        }]
    }, {
        name: '轴点',
        type: 'pie',
        radius: ['4%'],
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            color: '#153d70',
            borderWidth: 8,
            borderColor: 'rgba(255, 255, 255, 0.8)'
        },
        data: [1]
    }]
};