option = {    
    angleAxis: {
        type: 'category',
        startAngle: 78.75,
        clockwise : true,
        data: ["NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]
    },
     tooltip: {
     trigger: "axis",
     backgroundColor: "#eeeeee",
     textStyle: {
         color: "#000"
     },
     axisPointer: {
         type: 'cross',
         shadowStyle: {
             color: '#eeeeee',
             opacity:0.3,
         }
     },
     formatter: '{a} <br/>{b} : {c} ({d}%)'
     },
    radiusAxis: {},
    polar: {},
    
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1,8,4,3,7,6,5,3,5,4],
        coordinateSystem: 'polar',
        name: '1级',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1,3, 4, 3, 5, 1,8,4,3,7],
        coordinateSystem: 'polar',
        name: '2级',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1,3, 4, 3, 5, 1,8,4,3,7],
        coordinateSystem: 'polar',
        name: '3级',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1,3, 4, 3, 5, 1,8,4,3,7],
        coordinateSystem: 'polar',
        name: '4级',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1,3, 4, 3, 5, 1,8,4,3,7],
        coordinateSystem: 'polar',
        name: '5级',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1,3, 4, 3, 5, 1,8,4,3,7],
        coordinateSystem: 'polar',
        name: '6级',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1,3, 4, 3, 5, 1,8,4,3,7],
        coordinateSystem: 'polar',
        name: '7级',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4,3, 4, 3, 5, 1,8,4,3,7, 1, 2, 5],
        coordinateSystem: 'polar',
        name: '8级',
        stack: 'a'
    }],
    
    
    legend: {
        show: true,
        data: ['1级', '2级', '3级','4级','5级','6级','7级','8级']
    }
}
