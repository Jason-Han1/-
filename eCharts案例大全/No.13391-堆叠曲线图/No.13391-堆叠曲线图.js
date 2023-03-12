let data = [
        {
            "countArray": [8,3,3,6,6,2,3,0,4,7,5,1,3,1,3,5,8,2,6],
            "name": "主叫次数"
        },
        {
            "countArray": [2,4,8,5,9,5,8,4,5,1,6,2,5,4,8,2,7,5,3],
            "name": "被叫次数"
        },
        {
            "countArray": [4,5,7,8,3,6,4,6,2,5,1,6,8,9,4,1,3,8,5],
            "name": "主短次数"
        },
        {
            "countArray": [6,1,5,3,6,4,6,8,0,3,4,5,3,5,2,6,5,6,2],
            "name": "被短次数"
        }]
let seriesObjs = []
let categories = []
for (let i = 0; i < 24; i++) {
    categories.push(i)
}
let color = ['#00AAFF', '#FF6767', '#EF9D33', '#00B386'];
seriesObjs = [
    {
        name: '主叫',
        type: 'line',
        showSymbol: false,
        data: []
    },
    {
        name: '被叫',
        type: 'line',
        showSymbol: false,
        data: []
    },
    {
        name: '主短',
        type: 'line',
        showSymbol: false,
        data: []
    },
    {
        name: '被短',
        type: 'line',
        showSymbol: false,
        data: []
    }
];
data.forEach(item => {
    if (item.name === '主叫次数') {
        item.countArray.forEach(items => {
            seriesObjs[0].data.push(items);
        });
    } else if (item.name === '被叫次数') {
        item.countArray.forEach(items => {
            seriesObjs[1].data.push(items);
        });
    } else if (item.name === '主短次数') {
        item.countArray.forEach(items => {
            seriesObjs[2].data.push(items);
        });
    } else if (item.name === '被短次数') {
        item.countArray.forEach(items => {
            seriesObjs[3].data.push(items);
        });
    }
});
option = {
    backgroundColor: '#000',
    color: color,
    grid: {
        // 是否显示网格
        show: false,
        width: '80%',
        left: '20%',
        right: '20%',
        bottom: '20%',
        top: '20%'
    },
    legend: {
        right: 0,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: color
        },
        data: ['主叫', '被叫', '主短', '被短']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: true,
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                color: '#344755',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        data: categories
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: false,
            color: '#fff'
        },
        splitNumber: 2,
        axisLine: {
            lineStyle: {
                color: '#344755',
                width: 2
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    grid: {
        // 是否显示网格
        show: false,
        width: '97%',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        },
        formatter: function (params) {
            let axisName = '通联时段：' + params[0].dataIndex + '点-' + (params[0].dataIndex + 1) + '点'
            let nameVal = ''
            params.forEach((item) => {
                let span = `<div style="width: 8px;height: 8px;display: inline-block;
                  background: ${item.color};margin-right: 5px;border-radius: 50%"></div>`
                nameVal += span + item.seriesName + '：' + item.data + '次<br/>'
            })
            return `${axisName} <br/> ${nameVal}`
        }
    },
    series: seriesObjs
};