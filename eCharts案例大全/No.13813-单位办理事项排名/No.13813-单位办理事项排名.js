option = {
    backgroundColor: '#ffffff',
    title:{
        text:'单位办理事项排名',
         subtext: '市级',
        left:'left'
    },
    
    grid: {
        left: '3%',
        right: '4%',
        top:55,
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },data: ['区局', '南宁市行政审批局', '南宁市局', '柳州市局', '柳州市行政审批局', '桂林市局', '梧州市局', 
        '梧州市行政审批局', '北海市局', '北海市行政审批局', '防城港市局', '钦州市局','钦州市行政审批局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']

        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
           data: ['区局', '南宁市行政审批局', '南宁市局', '柳州市局', '柳州市行政审批局', '桂林市局', '梧州市局', 
        '梧州市行政审批局', '北海市局', '北海市行政审批局', '防城港市局', '钦州市局','钦州市行政审批局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']
}

    ],
    series: [{
            name: '事项申请数',
            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: '#00868B',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [110,119,125,132,132,134,135,150,157,160,166,171,171,178,178,179,185,195,199,203]
        }]
};