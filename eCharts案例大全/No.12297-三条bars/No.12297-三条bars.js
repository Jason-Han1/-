
var chartData = [10, 16, 17];
var chartName = ['2015', '2016', '2017'];
var labelName = ['流动比率','速动比率','现金比率']
var labelSetting = {
    normal: {
        show: true,
        position: 'insideRight',
        color:'#fff',
        // offset: [0, 0],//偏移
        textStyle: {
            fontSize: 16
        }
    }
};


option = {
    title: {
        text: '十年中国影视发展之数量对比图',
        subtext: '数据来源：国家统计局'
    },
    legend: {
        itemWidth: 18,
        itemHeight: 18,
        icon: 'rect',
        data: labelName,
        left: 'center',
        right: '66%',
        bottom: '5%',
    },

    grid: {
        containLabel: true,
        left: 25
    },
    yAxis: {    
        data: chartName,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                fontSize: 16
            }
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: labelName[0],
        type: 'bar',
        barWidth: '10%',
        label: labelSetting,
        barCategoryGap: '40%',
        data: [{
            value: 22.73,
           
        }, {
            value: 34,
          
        }, {
            value: 62.43,
          
        }, {}]
    }, {
        name: labelName[1],
        type: 'bar',
        barGap: '0%',
        label: labelSetting,
        barWidth: '10%',
        data: [{
            value: 23.31,
        }, {
            value: 46,
           
        }, {
            value: 90.07,
           
        }, {}]
    }, {
        name: labelName[2],
        type: 'bar',
        barWidth: '10%',
        barGap: '0%',
        label: labelSetting,
        data: [{
            value: 23.31,
           
        }, {
            value: 46,
            
        }, {
            value: 90.07,
            
        }, {}]
    }]
};