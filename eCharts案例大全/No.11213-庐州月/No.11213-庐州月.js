var lData = ['语文', '数学', '英语', '思想政治', '历史', '地理', '物理', '化学']
var classAverage = [135, 140, 131, 90, 90, 95, 88, 93]; // 班级平均分
var achievement = [120, 118, 100, 70, 70, 79, 75, 88]; // 个人成绩
var offTop = '5%';
option = {
    backgroundColor: '#0e4b86',
    color: ['#E7E906', '#0098EC'],
    title: {
        text: '各科目成绩',
        left: 'center',
        top: offTop,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon: 'roundRect',
        right: '3.5%',
        top: offTop,
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 20, // 例间距
        textStyle: {
            fontSize: 12,
            color: '#fff'
        },
        data: ['班级平均分', '个人成绩']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        height: '80%',
        containLabel: true
    },
    // hover 坐标轴指示器
    axisPointer: {
        lineStyle: {
            color: 'red',
            width: 2
        }
    },
    // 滚动条
    dataZoom: [{
            type: 'slider',
            show: true,
            // top: '25%',
            right: '5%',
            // bottom: '15%',
            height: 25,
            start: 0,
            end: 80,
            handleSize: '0', // 滑动条的 左右2个滑动小块的大小
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            textStyle: {
                color: "#fff"
            },
            fillerColor: '#3C62C0', // 拖动条的颜色
            borderColor: "none",
            backgroundColor: 'rgba(60, 98, 192, 0.302)',
            // showDetail: false // 即拖拽时候是否显示详细数值信息 默认true
        },
        {
            type: 'inside',
            start: 1,
            end: 80,
            zoomLock: true // 取消鼠标滚轮的放大放小功能, 只能拖动
        }
    ],
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: 'orange' // 边线的颜色
            }
        },
        axisLabel: {
            interval: 0, // 控制文字不因宽度不够而被隐藏
            textStyle: {
                fontSize: 14,
                color: '#fff'
            },
            margin: 10 // 文字与上侧的间距
        },
        axisTick: {
            show: false // 是否显示坐标轴刻度
        },
        // boundaryGap: true, // 坐标轴两边留白, 默认 true
        data: lData
    },
    yAxis: {
        type: 'value',
        splitNumber: 5, // 坐标轴的分割段数
        splitLine: {
            lineStyle: {
                color: "orange"
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10, // 间距
            textStyle: {
                fontSize: 12,
                color: "#fff"
            }
        }
    },
    series: [setDataFn('班级平均分', classAverage), setDataFn('个人成绩', achievement)]
};

/**
 * @param {String} name 
 * @param {Array} data 
 */
function setDataFn(name, data) {
    return {
        name: name || '',
        type: 'line',
        // stack: '总量', // 设置数据叠加
        symbol: "circle", // hover 的时候展示实心园
        symbolSize: 5, // 实心圆大小
        smooth: true, // 平滑曲线显示
        showSymbol: false, // hover 的时候才展示实心圆
        lineStyle: {
            width: 3 // 设置线条大小
        },
        data: data || ''
    }
}