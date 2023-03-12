var data = [
    [8, 14, 20],
    [34, 54, 30],
    [2, 14, 23],
    [45, 34, 45],
    [12, 23, 12],
    [34, 23, 34],
    [2, 42, 13],
    [3, 16, 43],
    [54, 9, 31],
    [23, 12, 20]
];

var option = {
    tooltip: {
        show: "true",
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', 
        padding: [8, 10]
    },
    polar: {},
    radiusAxis: {
        axisTick:{show:false},
        axisLabel:{
            color:'#ffffff'
        }
    },
    angleAxis:{
        type:'category',
         data: ['负面情绪', '正面情绪', '中性情绪']
    },
    series: [{
        name: '媒体1',
            type: 'bar',
            stack:'a',
            data: data[0],
            coordinateSystem: 'polar',
        },{
            name: '媒体2',
            type: 'bar',
            stack:'a',
            data: data[1],
            coordinateSystem: 'polar',
        },
        {
            name: '媒体3',
            type: 'bar',
            stack:'a',
            data: data[2],
            coordinateSystem: 'polar',
        },
        {
            name: '媒体4',
            type: 'bar',
            stack:'a',
            data: data[3],
            coordinateSystem: 'polar',
        },
        {
            name: '媒体5',
            type: 'bar',
            stack:'a',
            data: data[4],
            coordinateSystem: 'polar',
        },
        {
            name: '媒体6',
            type: 'bar',
            stack:'a',
            data: data[5],
            coordinateSystem: 'polar',
        },
        {
            name: '媒体7',
            type: 'bar',
            stack:'a',
            data: data[6],
            coordinateSystem: 'polar',
        },
        {
            name: '媒体8',
            type: 'bar',
            stack:'a',
            data: data[7],
            coordinateSystem: 'polar',
        },
        {
            name: '媒体9',
            type: 'bar',
            stack:'a',
            data: data[8],
            coordinateSystem: 'polar',
        },
        {
            name: '媒体10',
            type: 'bar',
            stack:'a',
            data: data[9],
            coordinateSystem: 'polar',
        }
    ]
};