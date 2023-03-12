app.title = '坐标轴刻度与标签对齐';
var data = [{
        "name": "<1",
        "value": 0
    },
    {
        "name": "1-3",
        "value": 1
    },
    {
        "name": "3-5",
        "value": 2
    },
    {
        "name": "5-10",
        "value": 3
    },
    {
        "name": "10-15",
        "value": 4
    },
    {
        "name": ">15",
        "value": 5
    }
];
var colors = [
    "#3BA0FF",
    "#FAD337",
    "#F2637B",
    "#36CBCB",
    "#FF9E00",
    "#4ECB74",
    "#975FE4",
    "#FFBCD9",
    "#CB6137"
];
var finalData = data.map((item, index) => {
    var arr = new Array(data.length).fill(0);
    arr[index] = item.value;
    return arr;
});
option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        type: 'scroll',
        x: 'center',
        data: data.map(item => item.name)
    },
    xAxis: {
        type: 'category',
        data: data.map(item => item.name),
        show: true
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        // minInterval: 1,
        axisLabel: {
            color: 'rgba(0,0,0,0.45)'
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: data.map((item, index) => {
        console.info('finalData', finalData[index]);
        return {
            name: item.name,
            data: finalData[index],
            barWidth: '60%',
            type: 'bar',
            stack: '堆叠法',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                        console.info('params', params);
                        return params.value || ''

                    },
                    fontSize: 12
                }
            }
        }
    })
};