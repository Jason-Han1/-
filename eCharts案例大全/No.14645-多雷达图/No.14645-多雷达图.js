var color ="#189cbb";
var scale = 1;
var weekData = [
                {text: 'Sun', max: 100},
                {text: 'Mon', max: 100},
                {text: 'Tue', max: 100},
                {text: 'Wed', max: 100},
                {text: 'Thu', max: 100},
                {text: 'Fri', max: 100},
                {text: 'Sat', max: 100},
            ];
var student = [60,73,85,40,50,40,30];
option = {
    backgroundColor: '#031f2d',
    tooltip: {
        trigger: 'axis'
    },
    radar: [
        {
            indicator: weekData,
            center: ['50%','50%'],
            radius: '50%',
            name: {
                textStyle: {
                    color: color,
                    fontSize: 18*scale,
                    fontWeight:'bold'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#0b5263',
                    opacity: 0.5,
                    width:3*scale
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: '#0b5263',
                    opacity: 0.2
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: color,
                    type:"dashed",
                }
            }
        },
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            data: [
                {
                    value: student,
                    name: '考生数量对比'
                }
            ],
            symbolSize: 10*scale,
            itemStyle: {
                normal: {
                    borderColor: '#ffc72b',
                    borderWidth: 3*scale,
                }
            },
            lineStyle:{
                normal:{
                    color:"#ffc72b",
                    width:3*scale
                }
            },
            areaStyle: {
                normal: {
                    color: '#ffc72b',
                    opacity: 0.5
                }
            }
        },
    ]
};
