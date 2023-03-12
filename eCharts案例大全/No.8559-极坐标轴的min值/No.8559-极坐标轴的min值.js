option = {
    angleAxis: {
        type: 'category',
        data: ['S1', 'S2', 'S3']
    },
    radiusAxis: {
        min: 1,
        max: 6
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [2, 2, 2],
        coordinateSystem: 'polar',
        itemStyle:{
            color:"blue"
            
        },
        name: 'A',
        stack: 'a'
    },
    {
        type: 'bar',
        data: [2, 2, 2],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    },
    {
        type: 'bar',
        data: [2, 2, 2],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};