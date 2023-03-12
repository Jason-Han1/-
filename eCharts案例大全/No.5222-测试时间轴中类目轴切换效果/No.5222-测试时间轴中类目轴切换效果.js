
colors = ['red', 'orange', 'yellow', 'green', 'pink', 'blue', 'purple', 'black', 'gray', 'Indigo']
yAxisData = ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']
timeLineData = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

categoryColor = {}
for (var i = 0 ; i < 10 ; i++) {
    categoryColor[yAxisData[i]] = colors[i]
}

function shuffle(arr) {
    for (let i=arr.length-1; i>=0; i--) {
        let rIndex = Math.floor(Math.random()*(i+1));
        let temp = arr[rIndex];
        arr[rIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

yAxisDatas = []
yAxisDatas.push(shuffle(yAxisData));
for(var i = 1 ; i < 10 ; i++) {
    yAxisDatas.push(shuffle(yAxisDatas[i - 1]).concat());
}

options = []
for (var s = 0 ; s < 10 ; s++) {
    
    var categoryData = yAxisDatas[s]
    
    // 随机十个数字
    var value = []
    for (var i = 0 ; i < 10 ; i++) {
        value.push(Math.round(30 + Math.random() * 500))
    }
    value = value.sort((v1, v2) => v1 - v2)
    
    var datas = []
    for (var i = 0 ; i < 10 ; i++) {
        datas.push({
            value: value[i],
            itemStyle: {
                color: categoryColor[categoryData[i]],
            }
        })
    }
    options.push({
        yAxis: {
            data: categoryData,
        },
        series: [{
            type: 'bar',
            data:datas,
            itemStyle: {
                barBorderRadius: 5,
            },
            barWidth: 20,
            label: {
                show:true,
                position: 'right',
            },
        }]
    })
}

option = {
    baseOption: {
        title: {
            text: '测试时间轴中类目轴切换效果'
        },
        yAxis: {
            type: 'category',
            data: [],
            axisLabel: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            }
        },
        xAxis: {
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            }
        },
        timeline: {
            show: false,
            // loop: false,
            autoPlay: true,
            data: timeLineData
        }
    },
    options: options,
};