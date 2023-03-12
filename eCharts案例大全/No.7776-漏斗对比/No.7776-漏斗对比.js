var convertRatePostion = 10;
option = {
    backgroundColor: "#fff",
    height: 210,
    legend: {
        show: true,
        top: 20,
        textStyle: {
            fontSize: 10
        },
        data: ['今年至今', '全部至今']
    },
    xAxis: {
        min: -100,
        max: 100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "#eee",
                type: "dotted"
            }
        },
        axisLabel: {
            formatter: function(value, index) {
                return Math.abs(value) + "%"
            },
            color: "#aaa",
            fontSize: 10
        }
    },
    yAxis: {
        z: 11,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#fff",
                width: 1
            }
        },
        data: ['前', '中', '会', '后', '退'],
        inverse: true,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: "#000",
            interval: 0,
            fontSize: 11
        }
    },
    animationDurationUpdate: 1200,
    series: [
        {
            name: "今年至今",
            type: 'bar',
            barWidth: 40,
            barCategoryGap: 5,
            z: 10,
            label: {
                show: true,
                position: 'insideLeft',
                formatter: (params) => {
                    return `${Math.abs(params.value)}%`
                }
            },
            data: [
                { value: -100, itemStyle: { color: '#459AF0'} },
                { value: -90, itemStyle: { color: '#38C3B0'} }, 
                { value: -45, itemStyle: { color: '#86CA5A'} }, 
                { value: -21, itemStyle: { color: '#BFD44F'} }, 
                { value: -11, itemStyle: { color: '#FCE448'} }
            ],
            
        },
        {
            name: "全部至今",
            type: 'bar',
            barWidth: 40,
            z: 10,
            barGap: '-100%',
            label: {
                show: true,
                position: 'insideRight',
                formatter: '{c}%'
            },
            data: [
                { value: 100, itemStyle: { color: '#459AF0'} },
                { value: 70, itemStyle: { color: '#38C3B0'} }, 
                { value: 25, itemStyle: { color: '#86CA5A'} }, 
                { value: 11, itemStyle: { color: '#BFD44F'} }, 
                { value: 9, itemStyle: { color: '#FCE448'} }
            ]
            
        }
    ]
};