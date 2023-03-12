let dataList = [{
    "date": "2019-10-01",
    "total": 0
}, {
    "date": "2019-10-02",
    "total": 0
}, {
    "date": "2019-10-03",
    "total": 0
}, {
    "date": "2019-10-04",
    "total": 0
}, {
    "date": "2019-10-05",
    "total": 0
}, {
    "date": "2019-10-06",
    "total": 0
}, {
    "date": "2019-10-07",
    "total": 0
}, {
    "date": "2019-10-08",
    "total": 0
}, {
    "date": "2019-10-09",
    "total": 0
}, {
    "date": "2019-10-10",
    "total": 0
}, {
    "date": "2019-10-11",
    "total": 0
}, {
    "date": "2019-10-12",
    "total": 0
}, {
    "date": "2019-10-13",
    "total": 0
}, {
    "date": "2019-10-14",
    "total": 0
}, {
    "date": "2019-10-15",
    "total": 14
}, {
    "date": "2019-10-16",
    "total": 2
}, {
    "date": "2019-10-17",
    "total": 0
}, {
    "date": "2019-10-18",
    "total": 0
}, {
    "date": "2019-10-19",
    "total": 0
}, {
    "date": "2019-10-20",
    "total": 0
}, {
    "date": "2019-10-21",
    "total": 1
}, {
    "date": "2019-10-22",
    "total": 3
}, {
    "date": "2019-10-23",
    "total": 2
}, {
    "date": "2019-10-24",
    "total": 1
}, {
    "date": "2019-10-25",
    "total": 0
}, {
    "date": "2019-10-26",
    "total": 0
}, {
    "date": "2019-10-27",
    "total": 0
}, {
    "date": "2019-10-28",
    "total": 0
}, {
    "date": "2019-10-29",
    "total": 0
}, {
    "date": "2019-10-30",
    "total": 0
}, {
    "date": "2019-10-31",
    "total": 0
}]
let thisDate = '2019-10-24'; //当前日期
let thisMonth = '2019-10'; //当前月份
let maxArr = [];
let bgColor = ['#ffffff', '#FFD8C9', '#FF784C', '#FFAF8B']; //填充色


let chartData = [];
dataList.forEach(item => {
    maxArr.push(item.total);
    chartData.push({
        value: [item.date, item.total],
        itemStyle: item.date === thisDate ? {
            borderColor: 'red'
        } : {}, //当前日期标注边框为红色
        symbol: 'rect' // 核心1，长方形来填充
    })
})

//visualMap 填充色对比 最大值
let maxNum = maxArr.sort((a, b) => b - a)[0];


option = {
    backgroundColor: '#fff',
    calendar: {
        left: 'center',
        top: '20%',
        orient: 'vertical',
        cellSize: 60, //大小
        range: thisMonth, //月份
        monthLabel: {
            show: false, //隐藏左侧文字
        },
        dayLabel: {
            firstDay: 1, //开始时间 1号开始
            nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        },
        yearLabel: {
            show: false, //隐藏title
        },
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: maxNum, //色值对比 最大值
        show: false, //隐藏工具栏
        inRange: {
            color: bgColor, //填充色
        },
    },
    series: [{
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize(params) { //核心2 
                if (params[0] === thisDate) {
                    return 60; //当前日期高亮 宽度高度设置成和单元格宽度高度一样
                } else {
                    return 1;
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                    },
                },
            },
            data: chartData,
        },
        {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: chartData,
        },
    ],
};