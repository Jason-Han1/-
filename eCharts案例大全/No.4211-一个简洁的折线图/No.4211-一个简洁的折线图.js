let datas={
    yData:[502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ],
    xData:['A', 'B', 'C', 'D', 'E', 'F']
}
let xData=datas.xData;
let yData=datas.yData;
let color="#4aa3f0";
let textColor="#0172E4";
let axisLineColor="#0172E4";
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            
            },
        },
    xAxis: [{
        show: true,
        type: 'category',
        axisLine: {
             show: true,
            lineStyle:{
                color:axisLineColor,
            }
        },
        splitArea: {
            show: false,
            
        },
        axisLabel: {
            color: textColor
        },
        splitLine: {
            show: false,
          
        },
        axisTick:{
            show: false
        },
        boundaryGap: true,
        data: xData,

    }],
    grid: {
        x: '5%',
        y: '5%',
        x2: '5%',
        y2: '5%',
        borderWidth: 1
    },
    yAxis: [{
        type: 'value',
        splitLine: {
           show: true,
            lineStyle:{
                color,
                type:"dashed"
            }
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:axisLineColor,
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: textColor,
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '',
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: false,
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
                normal: {
                    color
                },
            },
            itemStyle: {
                color,
            },
            data: yData
        },

    ]
};