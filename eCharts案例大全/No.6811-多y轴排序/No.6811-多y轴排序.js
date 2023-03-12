 const formatterYaxis = function(arr) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.data = arr;
        obj.show =false;
        if (i === 0) {
           obj.show =true; 
        }
        ret.push(obj)
    }
    return ret;
 }
 
 const  formatterSeries = function() {
    let data = [[18203, 23489, 29034, 104970, 131744, 630230], 
                [19325, 23438, 31000, 121594, 134141, 681807]
                ];
    let  nameArr = ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'];
    let  retSeries = []
    data.forEach((item, index) => {
        item.forEach(val => {
            let data = new Array(item.length);
            data[index] = val;
            retSeries.push({
                name: nameArr[index],
                type: 'bar',
                data: data,
                yAxisIndex: index,
            })
        })
    })
    return retSeries;
 }

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['S2011年', 'S2012年', 'S2013年', 'S2014年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.001]
    },
    yAxis: formatterYaxis(['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']),
    series: [{
            name: 'S2012年',
            type: 'bar',
            data: [19325, null, null, null, null, null]
        },
        {
            name: 'S2011年',
            type: 'bar',
            data: [18203, null, null, null, null, null]
        },
        {
            name: 'S2013年',
            type: 'bar',
            data: [1932, null, null, null, null, null]
        },
        {
            name: 'S2014年',
            type: 'bar',
            data: [9325, null, null, null, null, null]
        },
        {
            name: 'S2011年',
            type: 'bar',
            data: [null, 23489, null, null, null, null],
            yAxisIndex: 1
        },
        {
            name: 'S2012年',
            type: 'bar',
            data: [null, 8438, null, null, null, null],
            yAxisIndex: 1
        },
        {
            name: 'S2014年',
            type: 'bar',
            data: [null, 3438, null, null, null, null],
            yAxisIndex: 1
        },
        {
            name: 'S2013年',
            type: 'bar',
            data: [null, 2343, null, null, null, null],
            yAxisIndex: 1
        },
        {
            name: 'S2013年',
            type: 'bar',
            data: [null, null, 2343],
            yAxisIndex: 2
        }
    ]
};