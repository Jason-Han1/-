

option = {
    title: {
        text: ''
    },
    color: ['#62BB46', '#1F77B4', '#FF9800', '#CDDC39', '#9C27B0', '#785549', '#FFBB78', '#002A46', '#ADFF2F', '#E35200', '#29AAE3', '#FFD700', '#737373', '#E066FF', '#BFBFBF', '#7FFF00'],
    tooltip: {
        //显示当前点的所有数据
        trigger: 'axis',
        //虚点横线（显示详细数据）
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        containLabel: true,
        left: '1%',
        right: '1%',
        bottom: '1%'
    },
    //图例
    legend: {
        type: 'scroll',
        x: 'center',
        y: 'top'
    },
    //X轴
    xAxis: {
        type: 'category',
        data:  ["A", "B", "C", "D软件", "E软件"],
        boundaryGap: true,
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
            
            lineHeight: 56
        }
    },
    //Y轴，双Y轴使用数组形式，
    yAxis: [{
            type: 'value',
            name: "用户数",
            //min: 0,   //Y轴最小值
            //max: LeftYaxisMax, //Y轴最大值
            //interval: LeftYaxisInterval,//每50设置一个点
            axisLabel: {
                formatter: "{value}" + "人"
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            name: "单位数",
            //min: 0,
            //max: RightYaxisMax,
            //interval: RightYaxisInterval,
            axisLabel: {
                formatter: "{value}" + "个"
            },
            splitLine: {
                show: false
            }
        }
    ],
    //数据
    series: [{
            "name": "用户数",
            "type": "bar",
            "data": [120, 114, 130, 156, 122],
            yAxisIndex :0
        },
        {
            "name": "单位数",
            "type": "bar",
            "data": [4, 5, 4, 9, 8],
            yAxisIndex :1
        }
    ]
};
myChart.on('click', function (object) {
                    if (object.componentType == "xAxis") {
                        alert(object.value);
                        var ComFamName = "";
                        ComFamName = object.value;
                        
                    }
});