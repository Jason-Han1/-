var data = {
    title: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
    project1: [11, 32, 43, 44, 75, 36, 67, 73, 79, 100, 141],
    project2: [14, 20, 29, 31, 55, 76, 45, 88, 43, 88, 81],
    project3: [33, 12, 34, 22, 56, 21, 53, 78, 66, 90,79],
};

//创建表格
function getTableLine(num) {
    var list = [];
    var bottom = 149;
    var height = 25;
    for (var i = 0; i < num; i++) {
        list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: 80,
            style: {
                fill: '#ccc'
            },
            shape: {
                x1: 2000,
            }
        });
    }
    return list;
}
//5行表格
var lineList = getTableLine(5);


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data: ['项目一', '项目二', '项目三']
    },
    grid: {
        bottom: '150',
        left: '10%',
        right: '80',
    },
    dataZoom: [{
            type: 'inside',
            filterMode: 'filter',
            show: true,
            start: 0,
            end: 50,
            height: 17,
            xAxisIndex: [0, 1, 2, 3]//随滚动条缩放的4行数组
        },
        {
            type: 'slider',
            filterMode: 'filter',
            show: true,
            start: 0,
            end: 50,
            height: 17,
            xAxisIndex: [0, 1, 2, 3]//随滚动条缩放4行数组
        }
    ],
    xAxis: [{
            name: '年份',
            type: 'category',
            position: 'bottom',
            boundaryGap: true,
            data: data.title,
            splitLine: {
                show: true
            },
            axisTick: {
                length: 100
            },
        },
        {
            name: '项目一',
            type: 'category',
            position: 'bottom',
            offset: 25,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            nameTextStyle: {
                color: '#585858',
                padding: [0, 0, -25]
            },
            nameLocation: 'start',
            data: data.project1
        },
        {
            name: '项目二',
            type: 'category',
            position: 'bottom',
            offset: 50,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            nameTextStyle: {
                color: '#585858',
                padding: [0, 0, -25]
            },
            nameLocation: 'start',
            data: data.project2
        },
        {
            name: '项目三',
            type: 'category',
            position: 'bottom',
            offset: 75,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            nameTextStyle: {
                color: '#585858',
                padding: [0, 0, -25]
            },
            nameLocation: 'start',
            data: data.project3
        }
    ],
    yAxis: [{
        type: 'value',
        name: '万元',
    }, ],
    series: [{
            name: '项目一',
            type: 'line',
            label: {
                show: true,
                position: 'top',
            },
            data: data.project1
        },
        {
            name: '项目二',
            type: 'line',
            data: data.project2
        },
        {
            name: '项目三',
            type: 'line',
            data: data.project3
        },
    ],
    graphic: lineList
};