var data = [
'00','01','02','03','04','05','06',"07",'08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'
];
var data1 = [40, 25, 45, 30, 40, 25, 45, 30, 40, 25, 45, 30,2,5,8,6,5,5,3,8,10,5,2,20];
option = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '0%',
        right: '3%',
        bottom: '0%',
        top: '10%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#1C3A9A',
                },
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#b8eeff',
                },
            },
            data: data,
        },
    ],
    yAxis: [
        {
            type: 'value',
            max:100,
            splitNumber:2,
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#1C3A9A',
                },
            },
            axisLabel: {
                show: true,
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#b8eeff',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1C3A9A',
                },
            },
        },
               {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 100,
            splitNumber: 2,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(67, 206, 23, 1)", "rgba(239, 220, 49, 1)"]
                }
            }
        }
    ],
    series: [
        {
            name: '',
            type: 'line',
            smooth: true,
            symbol: 'none',
            color:"rgba(13, 81, 143, 1)",
            lineStyle: {
                width: 1,
                shadowColor: 'rgba(13, 81, 143, 1)',
            },
            data: data1,
        },
    ],
};
