// 返回数据
let marksData = [
    {
        value: [0, 1000],
        name: '数据2',
        count: 2220,
    },
    {
        value: [45, 35],
        name: '数据3',
        count: 4220,
    },
    {
        value: [85, 15],
        name: '数据4',
        count: 5220,
    },
];

// 各象限区域
let markArea = [
                // 第一象限
                [{
                    name: '第一象限',
                    xAxis: 50, // x 轴开始位置
                    yAxis: 1000, // y 轴结束位置(直接取最大值)
                    label: {
                    position: ['80%', '-10%'],
                }
                }, {
                    yAxis: 500 // y轴开始位置
                }],
                // 第二象限
                [{
                    name: '第二象限',
                    yAxis: 1000, // y 轴结束位置(直接取最大值)
                    label: {
                    position: ['0%', '-10%'],
                }
                }, {
                    xAxis: 50, // x 轴结束位置
                    yAxis: 500 // y轴开始位置
                }],
                // 第三象限
                [{
                    name: '第三象限',
                    yAxis: 500, // y 轴结束位置
                    label: {
                    position: ['0%', '95%'],
                }
                }, {
                    xAxis: 50, // x 轴结束位置
                    yAxis: 0 // y轴开始位置
                }],
                // 第四象限
                [{
                    name: '第四象限',
                    xAxis: 50, // x 轴开始位置
                    yAxis: 500, // y 轴结束位置
                    label: {
                    position: ['80%', '95%'],
                }
                }, {
                    yAxis: 0 // y轴开始位置
                }]
            ];
            

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        formatter: function (params) {
            let result = params.map((item) => {
                return item.name;
            });
            return result.join('<br/>');
        },
        textStyle: {
            color: '#000',
        },
    },
    grid: {
      left: '5%',
        right: '5%',
        bottom: '5%',
        top: '5%',
        containLabel: true,
    },
    xAxis: {
        name: '出勤率',
        nameTextStyle: {
            fontSize: 12,
            color: 'rgba(9,27,61,0.6)',
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
              color: 'rgba(9,27,61,0.6)',
            },
        },
        axisLine: {
            lineStyle: {
              color: '#DDDDDD',
            },
        },
        
    },
    yAxis: {
        boundaryGap: ['0', '10%'],
        name: '人均单量',
        nameTextStyle: {
            fontSize: 12,
            color: 'rgba(9,27,61,0.6)',
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show:false,
        },
        axisLabel: {
            margin: 20,
            showMaxLabel:false,
            textStyle: {
              color: 'rgba(9,27,61,0.6)',
            },
        },
        splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(9,27,61,0.1)',
            },
        },
    },
    series: {
        type: 'scatter',
        label: {
            show: true,
            position: 'right',
            formatter: '{b}',
            textStyle: {
                fontSize: 10,
                fontWeight: '400',
                color: 'rgba(9,27,61,0.6)',
            }
        },
        // 随机颜色&或者后端传递
        itemStyle:{
            color: function (e) {
                let randomColor = 'rgba(' + Math.floor(Math.random() * 240) + ',' + Math.floor(Math.random() * 240) + ',' + Math.floor(Math.random() * 240) + ',' + '.8' + ')'
                return randomColor.substring()
            }
        },
        data: marksData,
        
        // 中心点交集象限轴
        markLine: {
            animation: false,
            lineStyle: {
                color: 'rgba(9,27,61,0.2)',
                width: 1,
                dashOffset:5,
                type:'solid',
            },
            
            label: {
                show: false,
            },
            symbol: ['none', 'none'],
            silent: true,
            data: [
                {
                    xAxis: 60,
                },
                {
                    yAxis: 500,
                },
            ],
        },
        
        // 各象限区域
        markArea: {
            silent: true,
            itemStyle: {
                color: 'transparent',
            },
            label: {
                fontSize: 12,
                    fontWeight: '400',
                    color: 'rgba(9,27,61,0.6)',
            },
            data: markArea,
        },
    },
};

option.series.data = marksData.map((item)=>({
    ...item,
    // 点大小换算比例
    symbolSize: item.count / 100,
}));

