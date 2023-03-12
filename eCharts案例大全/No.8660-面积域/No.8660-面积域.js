option = {
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
        axisPointer: {
            snap: true
        }
    },
    // visualMap: {
    //     show: false,
    //     // type: 'continuous',
    //     type: 'piecewise',
    //     dimension: 0, // x轴
    //     // dimension: 1, // y轴
    //     pieces: [{
    //         gte: 5,
    //         lte: 8,
    //         color: 'red'
    //     },{
    //         gte: 10,
    //         lte: 13,
    //         color: 'red'
    //     }],
    //     // range: [10, 20],
    //     outOfRange: {
    //         color: 'blue'
    //     }
    // },
    series: [
        {
            name:'用电量',
            type:'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            areaStyle: {},
            markArea: {
                show: true,
                data: [ [{
                    name: '早高峰',
                    xAxis: '07:30',
                    itemStyle: {
                        color: '#ff8800'
                    }
                }, {
                    xAxis: '10:00'
                }], [{
                    name: '晚高峰',
                    xAxis: '17:30',
                    itemStyle: {
                        color: '#f34e33'
                    }
                }, {
                    xAxis: '21:15'
                }] ]
            }
        }
    ]
};


// var data = [300, 280, 250, 260, 270, 300, 300, 300, 400, 390, 300, 300, 300, 500, 600, 750, 800, 700, 600, 400];  //模拟动态数据
// var j = 0; 
// option.series[0].data = data; 
// // 连续为300时，颜色变为红色
// for(let i = 0; i < data.length; i++) {
//     if(data[i] === 300 && data[i + 1] === 300) {
//         option.visualMap.pieces[j] =  {gte: i, lte: i+1, color: 'red'}; 
//         j++; 
//     }
// }

// var data = [300, 280, 250, 260, 270, 300, 300, 300, 400, 390, 300, 300, 300, 500, 600, 750, 800, 700, 600, 400];  //模拟动态数据
// var max = Math.max.apply(Math, data); //数据的最大值
// option.series[0].data = data; 
// option.visualMap.pieces[0] = {gte: 300, lte: 500, color: 'red'}; 
