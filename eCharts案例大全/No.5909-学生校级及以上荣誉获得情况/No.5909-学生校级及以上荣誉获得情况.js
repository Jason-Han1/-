
dataObj = {
    year: ['2015年', '2016年', '2017年', '2018年','2019年','2020年'],
    data: {
        value: [{
            name: '三好生',
             value: [12,22 , 14,21,15,21],
        }, {
            name: '文化类竞赛',
            value: [8, 14, 17, 22,36,13]
        }, {
            name: '科技类竞赛',
            value: [24, 17, 7, 9,16,15]
        }, {
            name: '艺术类竞赛',
            value: [4, 34, 27, 12,19,23]
        }, {
            name: '其它',
            value: [10, 26, 18, 20,17,23]
        }]
    }
}
let dataArr = []

dataObj.data.value.map(item => {
    let datachild = []
    let newArr = {
        name: item.name,
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: item.value,
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: item.name ==='升学率'?'red':item.name ==='毕业率'?'#0BE3FF':'#16f892'
            }
        }
    }
      
dataArr.push(newArr)
}) 
console.log(dataArr) 
option = {
    backgroundColor: '#12193a',
    color: ['#f0c725', '#16f892'],
    title: {
        left: 'center',
        text: '学生校级及以上荣誉获得情况',
        textStyle: {
            color: '#FFFFFF',
            fontSize: '14',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        x: 'center',
        top: '25',
        textStyle: {
            color: '#c1cadf',
            "fontSize": 14
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        top: '25%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: dataObj.year,
        axisLine: {
            lineStyle: {
                color: 'rgba(240,199,37,0.5)'
            }
        },
        axisLabel: {
            interval: 0,
            color: '#c1cadf',
            fontSize:'15'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '数量 ',
        nameTextStyle: {
            color: '#c1cadf',
            align: 'right',
            lineHeight: 10
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(240,199,37,0.5)'
            }
        },
        axisLabel: {
            interval: 0,
            color: '#c1cadf',
            fontSize:'15'
        },
        splitLine: {
            show: false
        }
    }],
    series: dataArr
};