option = {
    backgroundColor: '#fff',
    angleAxis: {
        interval: 0,
        type: 'category',
        startAngle: 98,
        data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9 ', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        axisLine: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#BCBCBC",
            fontSize: 12
        },
        axisTick: {
            show: false, //刻度线
            alignWithLabel: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#F1EBF0",
                width: 1,
                type: "solid",
                // shadowOffsetY:100
            }
        }
    },
    radiusAxis: {
 
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
         axisTick: {
            show: false, //刻度线
 
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#F1EBF0",
                width: 1,
                type: "solid"
            }
        }
    },
    polar: {},
    series: [{
        type: 'bar',
         
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, , 7, 3, 2, 1],
        coordinateSystem: 'polar',
        itemStyle: {
            color: '#EE796E'
        },
    }],
};