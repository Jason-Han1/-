
lineRes = {
    '某某APP1':{
        xAxisData: ['2019-04-18','2019-04-19','2019-04-20','2019-04-21','2019-04-22','2019-04-23','2019-04-24'],
        seriesData: [100,250,600,250,300,1000,270]
    },
     '某某APP2':{
        xAxisData: ['2022-04-18','2022-04-19','2019-04-20','2019-04-21','2019-04-22','2019-04-23','2019-04-24'],
        seriesData: [200,250,1000,250,300,1000,270]
    },
     '某某APP3':{
        xAxisData: ['2033-04-18','2033-04-19','2019-04-20','2019-04-21','2019-04-22','2019-04-23','2019-04-24'],
        seriesData: [300,250,10,250,300,100,270]
    },
     '某某APP4':{
        xAxisData: ['2044-04-18','2044-04-19','2019-04-20','2019-04-21','2019-04-22','2019-04-23','2019-04-24'],
        seriesData: [400,25,1000,250,300,1000,27]
    },
     '某某APP5':{
        xAxisData: ['2055-04-18','2055-04-19','2019-04-20','2019-04-21','2019-04-22','2019-04-23','2019-04-24'],
        seriesData: [50,250,1000,25,300,100,270]
    }
}
barRes = {
    yAxisData: ['某某APP1','某某APP2','某某APP3','某某APP4','某某APP5'],
    seriesData: [120, 132, 101, 134, 190]
}

len = barRes.yAxisData.length;

curLineName = barRes.yAxisData[len-1];

setCurOption =(lineName)=>{
    return {
    title:[
        {
            text:'数据联动',
            x:'center',
        },
        {
            text:lineName,
            x:'center',
            top: '50%'
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    xAxis: [
        {
            type: 'value',
        },
        {
            type: 'category',
            boundaryGap: false,
            data: lineRes[lineName].xAxisData,
            gridIndex: 1
        }
    ],
    yAxis: [
        {
            type : 'category',
            axisTick : {show: false},
            data :barRes.yAxisData ,
        },
        {
            splitLine: {show: false},
            gridIndex: 1
        }
    ],
    grid: [{
        bottom: '60%'
    }, {
        top: '60%'
    }],
    series: [
        {
            name:'支出',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            data:barRes.seriesData
        },
        {
            name:'流量使用',
            type:'line',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: lineRes[lineName].seriesData,
            xAxisIndex: 1,
            yAxisIndex: 1
        }
    ]
};
} 


option = setCurOption(curLineName)

myChart.on('click', function(params) {
     myChart.setOption(setCurOption(params.name));
})
