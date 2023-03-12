let borderColor="#57e1fe"
let barColor="rgba(33, 168, 216,.6)"
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: true,},
        axisLine:{show: false,},
        axisTick:{show: false},
        data: ['总费用', '房租', '水电费']
    },
    yAxis: {
        type: 'value',
         splitLine: {show: true,},
        axisLine:{show: false,},
        axisTick:{show: false},
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
            barWidth:"40%",
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [2000, 1700, 1400]
        },
          {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            itemStyle:{
              color:borderColor  
            },
            label: {
                show: false,
            },
            data: [20, 20, 20]
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            // barWidth:"50%",
            itemStyle:{
              color:barColor  
            },
            label: {
                show: false,
                position: 'inside'
            },
            data: [1200, 500, 700]
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            itemStyle:{
              color:borderColor  
            },
            label: {
                show: false,
            },
            data: [20, 20, 20],
            markLine: {
                symbolSize:0,
                z:222,
            label: {
                show:false,
               
            },
            lineStyle: {
                type: "dashed",
                width:3,
                 color: "#30daff",
            },
            data: [
                {
                    name: '',
                    yAxis: 2100
                },
            ]
        },
        }
    ]
};