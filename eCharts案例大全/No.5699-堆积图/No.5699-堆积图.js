
var data=[
        {
            stack: '工单一',
            name: '需求',
            type: 'bar',
            barWidth: 25,
            data: [
                    {name:"L01",value:100,},
                    {name:"L02",value:200},
                    {name:"L03",value:200},
                    {name:"L04",value:200},
                    {name:"L05",value:200},
                    {name:"L06",value:200},
                    {name:"L07",value:200},
            ]
        },
        {
            stack: '工单一',
            name: '实际产出',
            type: 'bar',
            data: [
                    {name:"L01",value:30},
                    {name:"L02",value:40},
                    {name:"L03",value:100},
                    {name:"L04",value:40},
                    {name:"L05",value:10},
                    {name:"L06",value:70},
                    {name:"L07",value:46},
            ]
        },
        {
            stack: '工单二',
            name: '需求',
            type: 'bar',
            data: [
                    {name:"L01",value:0},
                    {name:"L02",value:140},
                    {name:"L03",value:0},
                    {name:"L04",value:40},
                    {name:"L05",value:10},
                    {name:"L06",value:0},
                    {name:"L07",value:46},
            ]
        },
        {
            stack: '工单二',
            name: '实际产出',
            type: 'bar',
            data: [
                    {name:"L01",value:0},
                    {name:"L02",value:40},
                    {name:"L03",value:0},
                    {name:"L04",value:40},
                    {name:"L05",value:10},
                    {name:"L06",value:0},
                    {name:"L07",value:46},
            ]
        }

    ];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['需求', '实际产出']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['L01', 'L02', 'L03', 'L04', 'L05', 'L06', 'L07']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: data
};