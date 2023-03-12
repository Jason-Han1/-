var data1 = [2000, 2040, 85, 66, 65, 56, 52, 52, 45, 42]
var data2 = [100, 31.65, 20.27, 20.03, 18.72, 14.12,100 ]
option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        // axisTick: {
        //     alignWithLabel: true //X轴坐标文字和坐标的对应方式
        // },
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize:'20',
            },
            formatter:'{value}年'
        },
    }
    ],
    yAxis: [{
        type: 'value'
    },{
      type: 'value',
      min: 0,
      max: 100,
      interval: 20,
      axisLabel: {
        show:false
      }
    }
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            barMaxWidth:80,
            data: data1,
            label: {
                show: true,
                position: "top",
                color: '#000',
                fontSize:20
            },
        },
        {
            name: "报到率",
            type: 'pictorialBar',
            symbol: "rect",
            barMaxWidth:80,
            symbolSize: ['80%', 30],
            symbolPosition: 'top',
            z:10,
            color: 'red',
            yAxisIndex:1,
            label: {
                show: true,
                fontSize:16,
                color: '#fff',
                formatter:'{@c}%'
            },
            data: data2
        },
    ]
};