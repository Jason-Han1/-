let uploadedDataURL = "/asset/get/s/data-1564397227487-wUWbjIAqP.png";

let Datetime = ["28/19", "20", "21", "22", "23", "29/00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
let WIN_S_Avg_10mi = ["3.3", "2.9", "2.8", "2.4", "1.8", "1.2", "2", "2.3", "3.3", "2.3", "1.5", "1.3", "2.2", "2", "3.9", "3.9", "3.5", "4.5", "4.2", "1.9", "3.2", "1.3", "1.1", "1"];
let WIN_D_Avg_10mi = ["171", "145", "186", "168", "160", "115", "132", "150", "180", "156", "157", "158", "164", "182", "194", "218", "232", "195", "198", "286", "141", "143", "206", "201"];

let seriesData = echarts.util.map(WIN_S_Avg_10mi, function(item, index) {
    return {
        value: WIN_S_Avg_10mi[index],
        symbolRotate: -WIN_D_Avg_10mi[index]
    };
});


option = {
    title: {
        text: '风向 风速',
        left: 'center',
        top: '20%'
    },
    grid: {
        left: '10%',
        top: '30%',
        right: '10%',
        bottom: '30%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' },
        formatter: function (params, ticket, callback) {
            let index = params[0].dataIndex;
            let Htm = `${Datetime[index]}:00<br>${WIN_S_Avg_10mi[index]}m/s `
            return Htm;
        }
    },
    dataZoom: [{
        bottom: '20%',
        start: 50,
        end: 100
    }, {
        type: 'inside'
    }],
    xAxis: {
        boundaryGap: false,
        axisLabel: {
            textStyle: { color: '#333333', fontSize: 12 }
        },
        axisLine: {
            lineStyle: { color: '#707070' }
        },
        data: Datetime
    },
    yAxis: {
        name: '风速(m/s)',
        nameGap: 35,
        nameTextStyle: { color: '#333333' },
        axisLabel: {
            textStyle: { color: '#333333', fontSize: 12 }
        },
        splitLine: {
            lineStyle: { color: '#DBDBDB', type: 'dashed' }
        },
        axisLine: { show: false },
        axisTick: { show: false },
    },
    series: [{
        type: 'line',
        color: '#FFE282',
        smooth: true,
        symbol: `image://${uploadedDataURL}`,
        symbolSize: 20,
        // -- 渐变 v1 --
        // areaStyle: {
        //     color: {
        //         type: 'linear',
        //         x: 0, y: 0, x2: 0, y2: 1,
        //         colorStops: [{
        //             offset: 0,
        //             color: 'rgba(255,226,130, 0.7)'
        //         }, {
        //             offset: 1,
        //             color: 'rgba(255,226,130,0)'
        //         }],
        //         globalCoord: false
        //     }
        // },
        
        // -- 渐变 v2 --
        areaStyle: {
            // 修改 x1,y1,x,y 得到不同的渐变方式
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(137,19,227, 0.8)'
            }, {
                offset: 1,
                color: 'rgba(0,255,255,0.2)'
            }])
        },
        lineStyle: {
            color: {
                // 修改 x,y,x1,y1 得到不同的渐变方式
                type: 'linear', x: 1, y: 0, x2: 0, y2: 0,
                // 0% 处的颜色 // 100% 处的颜色
                colorStops: [
                    { offset: 0, color: '#00FFFF' }, 
                    { offset: 1, color: '#8D12E9' }
                ],
                global: false
            }, width: 2
        },
        
        data: seriesData
    }]
};