let nameArr = ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'];
let legend = ['2011年', '2012年', '2013年'];
const formatterYaxis = function() {
    let ret = [];
    for (let i = 0; i < nameArr.length; i++) {
        let obj = {};
        obj.data = nameArr;
        obj.show = false;
        if (i === 0) {
            obj.show = true;
        }
        ret.push(obj)
    }
    return ret;
}



const formatterSeries = function(grey) {
    let data = [
        [18203, 23489, 29034, 104970, 131744, 630230],
        [29325, 29438, 36000, 127594, 164141, 581807],
        [293025, 20488, 86000, 107594, 104141, 781807]
    ];
    dataGreyArr = [
        [28203, 23489, 29034, 104970, 131844, 630230],
        [29325, 29038, 36000, 127094, 164141, 581007],
        [299025, 20488, 86000, 107594, 104141, 781807]
    ];
    let retSeries = []
    let obj = {}
    // 分组
    data.forEach((item, index) => {
        item.forEach((val, valIndex) => {
            if (!obj[valIndex]) {
                obj[valIndex] = []
            }
            obj[valIndex].push({
                name: legend[index],
                type: 'bar',
                stack: legend[index],
                value: val,
                grey: dataGreyArr[index][valIndex],
                yAxisIndex: valIndex,
            })

        })
    })
    // 对各个分组排序
    for (key in obj) {
        obj[key].sort((a, b) => {
            return b.value - a.value
        })
        retSeries.push(obj[key])
    }

    // retSeries = retSeries.flat()
    retSeries = retSeries.reduce((acc, val) => acc.concat(val), []);
    retSeries.forEach(item => {
        let arr = new Array(nameArr.length);
        let greyArr = new Array(nameArr.length);
        arr[item.yAxisIndex] = item.value;
        greyArr[item.yAxisIndex] = item.grey;
        item.data = arr;
        item.greyArr = greyArr;
        delete item.value;
        delete item.grey;
    })
    console.log(retSeries)
    return retSeries;
}

let temGreyArr = formatterSeries();
temGreyArr.forEach(item => {
    item.data = item.greyArr;
    item.itemStyle = {
        normal: {
            color: "#DCDCDC",
        }
    }
    delete item.greyArr;
})
option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: "rgba(239, 232, 232, 0.2)"
            }
        },
        formatter: function(params) {
            let name = ''
            params.filter(item => item.value != undefined && item.color != '#DCDCDC').forEach(item => {
                name += item.seriesName + ': ' + item.value + '<br/>'
            })
            return name
        }
    },
    legend: {
        data: legend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: formatterYaxis(),
    series: formatterSeries().concat(temGreyArr),
};