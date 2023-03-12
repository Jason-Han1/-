let dataLevel = {
    data:[{
        name: '极高风险区',
        data: [3.58, 1.12, 1.30, 3.24, 0.05, 0.23, 1.95, 2.28, 0.08, 3.68, 3.26, 2.56, 2.47, 5.3]
    },
    {
        name: '较高风险区',
        data: [15.2, 2.96, 0.21, 14.91, 0.22, 0.68, 3.82, 7.85, 0.05, 1.52, 1.42,1.81,1.34,2.45]
    },
    {
        name: '中风险区',
        data: [37.5, 3.21, 0.6, 33.89, 0.55, 1.96, 6.22, 13.21, 0.01, 27.29, 32.28,79.41,48.54,93.74]
    },
    {
        name: '低风险区',
        data: [47.42, 40.62, 103.35, 760.27,140.05,142.35, 172.97, 232.42, 66.69, 502, 769.66,758.77,652.12,1438.75]
    }
],
dataY:['苍南县', '洞头区', '经开区', '乐清市', '龙港市', '龙湾区','鹿城区', '瓯海区', '瓯江口',
'平阳县', '瑞安市', '泰顺县', '文成县', '永嘉县']
}

const dataArray = []
const datald = [] 
dataLevel.data.map(item => {
    datald.push(item.name)
    const dataObj = {
        name: item.name,
        type: 'bar',
        barWidth: '12',
        stack: '总量',
        itemStyle: {
            color: item.name === '极高风险区' ? '#FF0000' : 
            item.name === '较高风险区' ? '#FFA500' :
            item.name === '中风险区'?'#FFFF00':'#5EA6FE'
        },
        label: {
            normal: {
                show: false,
                position: 'insideRight'
            }
        },
        data: item.data
    }
    dataArray.push(dataObj)
})
    dataArray.push({
        name: '总计',
        type: 'bar',
        barWidth: '12',
        barGap: '-90%',
        data: [103.7, 47.91, 105.46, 812.31, 140.87, 145.22, 184.96, 255.76, 66.83, 534.49, 806.62, 842.55, 704.47, 1540.24],
        label: {
            normal: {
                color: '#fff',
                show: true,
                position: 'right'
            }
        },
        itemStyle: {
            color: 'rgba(0,0,0,0)'
        }
    })
option = {
    backgroundColor: 'black',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter:function(val){
            let name = ''
            let seriesName =''
            val.map(item=>{
                name = item.name
                seriesName += item.seriesName+'：'+item.value+'处</br>'
            })
            return name+'</br>'+seriesName
        }
    },
    legend: {
        data: datald,
        textStyle: {
            color: 'white',
            fontSize: 14
        }
    },
    grid: {
        top: '2%',
        left: '3%',
        right: '5%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: dataLevel.dataY,
        axisLine: {
            show: false,
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: dataArray
}