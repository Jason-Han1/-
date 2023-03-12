
dataObj = {
    year: ['周考', '月考', '期中考试', '期末考试'],
    data: {
        value: [{
            name: '语文',
             value: [68,93,56,60]
        }, {
            name: '数学',
            value: [127, 108, 92, 76]
        }, {
            name: '英语',
            value: [54, 74, 43, 66]
        },{
            name: '政治',
             value: [92,110,122,107]
        }, {
            name: '历史',
            value: [142,133,101,89]
        }, {
            name: '地理',
            value: [106,87,94,76]
        },{
            name: '物理',
             value: [34,54,23,29]
        }, {
            name: '化学',
            value: [76,54,34,44]
        }, {
            name: '生物',
            value: [99,87,64,66]
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
                color: item.name ==='高一'?'#f0c725':item.name ==='高二'?'#0BE3FF':'#16f892'
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
        text: '学生多次考试的各学科的年级排名情况',
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
        name: '排名',
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