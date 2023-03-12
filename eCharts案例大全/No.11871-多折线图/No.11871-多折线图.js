let data = {
    title: ['蒸发量111', '降水量'],
    dataX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dataY: [
        [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 11, 22],
        [12.0, 14.9, 17.0, 23.2, 235.6, 176.7, 15.6, 12.2, 12.6, 50.0, 22, 11],
    ]
}

//计算最大值 
const calMax = (arr) => {
    let max = 0;
    arr.forEach((el) => {
        if (max < el) {
            max = el;
        }
    })
    let maxint = Math.ceil(max / 9.5); //不让最高的值超过最上面的刻度
    let maxval = maxint * 10; //让显示的刻度是整数
    return maxval;
}

let type = 'line' //bar

let maxArray = []
let list = data.dataY.map((item, index) => {
    maxArray.push(calMax(data.dataY[index]))
    let mod = {
        name: data.title[index],
        type: type,
        data: data.dataY[index],
        markPoint: {
            // data: [
            //   // { type: 'max', name: '最大值' },
            //   // { type: 'min', name: '最小值' }
            // ]
        },
        markLine: {
            // data: [
            //   // { type: 'average', name: '平均值' }
            // ]
        }
    }
    return mod
})

option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ['#4C84FF', '#9A47FF', '#FF884C', '#13C2C2', '#F04864', '#FACC14', '#2FC25B', '#66B5FF'],
    legend: {
        orient: 'horizontal',
        data: data.title,
        bottom: 0,
    },
    grid: {
        x: 60,
        y: 44,
        x2: 60,
        y2: 64,
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: data.dataX,
        lineStyle: {
            color: '#145617',
            width: 1
        },
        padding: 50,
        // 横坐标间隔
        axisLabel: {
            interval: 0,
        }
    }, ],
    yAxis: [{
        type: 'value',
        // 解决出现小数问题
        max: calMax(maxArray),
        interval: calMax(maxArray) / 5,
        min: 0
    }],
    series: list
};