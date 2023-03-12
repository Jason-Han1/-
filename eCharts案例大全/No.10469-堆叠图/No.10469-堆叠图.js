
var  linedata=[100,200,100,33,44];
var  bardata=[320, 332,101, 334, 390];
var xData=['1月', '2月', '3月', '4月', '5月'];

option = {
    title: {
        text: '新增情况',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
        },
        left:30
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend:{
        data:["次数","户数"],
        itemWidth:14,
        itemHeight:14,
        right:30
    },
    grid: {
        left: '30',
        right: '30',
        bottom: '20',
        containLabel: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
    },
    calculable: true,
    xAxis: {

        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: { //轴上的线样式
                width: 0.6, //这里是为了突出显示加上的
            },
        },
        axisTick: {
            show: true
        },
        axisLabel: { //轴上的数据样式
        },
        data: xData,
    },
    yAxis: {
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
               
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: 'black'
            }
        }
    },
    series: [{
        name:"次数",
            type: 'bar',
            barWidth: '30%', // 柱形的宽度
            barGap: 0,
            data: bardata,
              stack: '合并'
        },
        {
            type: 'bar',
            data: linedata,
            symbol: 'circle',
            name: '户数',
            symbolSize:6,
            lineStyle:{
                width:2
            },
              stack: '合并'
          
        }
    ]
};

 myChart.on('click', function (params) {
 var name = params.name;
 console.log(name)



 });





