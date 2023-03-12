var data = {
    stationNames:["新城桥","湟水河","黄河什川","水厂鱼口"],
    levels:[
        ["18.72", "16.31", "20.88", "19.30"],
        ["16.67", "21.62", "17.95", "18.79"],
        ["21.01", "16.94", "20.39", "18.23"],
        ["17.87", "16.69", "15.38", "18.18"],
        ["17.87", "18.96", "17.83", "16.65"],
        ["7.85", "9.48", "7.57", "8.86"]    
    ]
}
option = {
    angleAxis: {
        type: 'category',
        color: '#ffffff',
        data: data.stationNames,
        z: 10,
        axisLabel: {
            interval: 0,
            show: true,
            color: "#000000",
            margin: 5,
            fontSize: 13
        },
    },
    grid: {
        left: '1%',
        right: '40%',
        bottom: '3%',
        containLabel: true
    },
    center: ['35%', '50%'],
    radiusAxis: {

        axisLabel: {
            formatter: '{value}',
            show: false,
            padding: [0, 0, 30, 0],
            color: "#577fa9",
            fontSize: 12
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            }
        }
    },
    polar: {
        radius: 90,
        center: ['35%', '50%'],
    },
    series: [{
        type: 'bar',
        data: data.levels[0],
        coordinateSystem: 'polar',
        color: '#14c7f8',
        name: 'I类',
        stack: 'a'
    }, {
        type: 'bar',
        data: data.levels[1],
        coordinateSystem: 'polar',
        color: '#15aaf1',
        name: 'II类',
        stack: 'a'
    }, {
        type: 'bar',
        data: data.levels[2],
        coordinateSystem: 'polar',
        color: '#24b462',
        name: 'III类',
        stack: 'a'
    }, {
        type: 'bar',
        data: data.levels[3],
        coordinateSystem: 'polar',
        color: '#ffd52e',
        name: 'IV类',
        stack: 'a'
    }, {
        type: 'bar',
        data: data.levels[4],
        coordinateSystem: 'polar',
        color: '#f97638',
        name: 'V类',
        stack: 'a'
    }, {
        type: 'bar',
        data: data.levels[5],
        coordinateSystem: 'polar',
        color: '#ff2919',
        name: '劣V类',
        stack: 'a'
    }],
    legend: {
        orient: 'vertical',
        height: 80,
        show: true,
        right: 10,
        top:"center",
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 15,
        textStyle: {
            fontSize: 12, //字体大小
            color: '#000000' //字体颜色
        },
        data: ['I类', 'II类', 'III类', 'IV类', 'V类', '劣V类']
    }
};