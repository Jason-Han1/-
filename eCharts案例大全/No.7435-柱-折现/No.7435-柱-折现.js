let setData = {
    lineData: [34, 56, 78, 23, 52],
    xAxisData: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
    legend:  ['活跃数据', '累计数据', '活跃度'],
    data:{
        data1: [[1,2,4,5,6,],[1,3,4,6,7]],
        data2: [[1,2,5,6,7],[1,3,4,5,7],]
    },
}
let {lineData, legend, data, xAxisData } = setData;
let series = [{
    type: 'line',
    data:lineData,
    name: '活跃度',
    yAxisIndex: 1,
}];
    let barLegend = ['活跃度'];
    Object.keys(data).map(key => {
        data[key].map((nums, ind )=> {
            barLegend.push(key+'_'+legend[ind])
            let obj = {
                type: 'bar',
                data: nums,
                name: key+'_'+legend[ind],
                stack: key,
                barWidth: 8,
                yAxisIndex: 0,
            };
            series.push(obj);
        })
    })
series.push({
    type: 'bar',
    data: xAxisData.map(_ => 1),
    barWidth: 20,
    yAxisIndex: 2,
    xAxisIndex: 1,
    barGap: '-100%',
   itemStyle: {
        normal: {
            color: 'rgba(224,224,224,.2)'
        },
        emphasis: {
            color: 'rgba(224,224,224,.2)'
        }
    },
    z: -1,
})
option = {
    title: {
        text: '管理工具',
        bottom: "10%",
        left: "25%",
        subtext: "生产管理",
        textStyle: {
            fontSize: 14,
            color: '#fff',
            fontWeight: 'normal'
        },
        subtextStyle: {
            fontSize: 14,
            color: '#fff'
        }
    },
    grid: {
        bottom: '30%'
    },
    legend:{
        data: barLegend,
        show: true,
        formatter: (name) => {
            return name.split('_')[1] || name
        },
        bottom: '10%',
        width: 310,
    },
    xAxis: [{
        data: xAxisData,
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
    },{
        data: xAxisData,
        show: false,
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },{
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        max: 100,
        axisLabel: {
            formatter: (val) => {
                return val +'%'
            }
        }
    },{
        type: 'value',  
        show: false,
    }],
    series:series,
};