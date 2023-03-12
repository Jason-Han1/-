option = {
    title:{
        text:'风玫瑰图',
        subtext:'虚构数据',
        left:'center'
    },
    angleAxis: {
       
       type: 'category',
        data: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'],
        z: 0,
         boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
                type: 'solid'
            }
        },
        axisLine: {
            show: false
        }
    },
    radiusAxis: {
         
    },
    polar: {
       
    },
    series: [{
        type: 'bar',
        data: [1.81, 0.62, 0.82, 0.59,0.62, 1.22, 1.61, 2.04,  2.66 ,2.96 ,2.53 ,1.97 ,1.64 ,1.32 ,1.58 ,1.51],
        coordinateSystem: 'polar',
        name: '<0.5m/s',
       stack: 'a',
       itemStyle:{
           normal:{
               color:'rgb(124, 181, 236)'
           }
       }
    }, {
        type: 'bar',
        data: [1.78, 1.09, 0.82, 1.22,2.20, 2.01, 3.06, 3.42,  4.74 ,4.14 ,4.01 ,2.66 ,1.71 ,2.40 ,4.28 , 5.00],
        coordinateSystem: 'polar',
        name: '0.5-2m/s',
       stack: 'a',
       itemStyle:{
           normal:{
               color:'rgb(67, 67, 72)'
           }
       }
    }, {
        type: 'bar',
        data: [0.16, 0.00, 0.07, 0.07,0.49, 1.55, 2.37, 1.97,  0.43 ,0.26 ,1.22 ,1.97 ,0.92 ,0.99 ,1.28 ,1.32],
        coordinateSystem: 'polar',
        name: '2-4m/s',
       stack: 'a',
       itemStyle:{
           normal:{
               color:'rgb(144, 237, 125)'
           }
       }
    }, {
        type: 'bar',
        data: [0.00, 0.00, 0.00, 0.00,0.00, 0.30, 2.14, 0.86,  0.00 ,0.00 ,0.49 ,0.79 ,1.45 ,1.61 ,0.76 ,0.13],
        coordinateSystem: 'polar',
        name: '4-6m/s',
       stack: 'a',
        itemStyle:{
           normal:{
               color:'rgb(247, 163, 92)'
           }
       }
    }, {
        type: 'bar',
        data: [0.00, 0.00, 0.00, 0.00,0.00, 0.13, 1.74, 0.53,  0.00 ,0.00 ,0.13 ,0.30 ,0.26 ,0.33 ,0.66 ,0.23],
        coordinateSystem: 'polar',
        name: '6-8m/s',
       stack: 'a',
        itemStyle:{
           normal:{
               color:'rgb(128, 133, 233)'
           }
       }
    }, {
        type: 'bar',
        data: [0.00, 0.00, 0.00, 0.00,0.00, 0.00, 0.39, 0.49,  0.00 ,0.00 ,0.00 ,0.00 ,0.10 ,0.00 ,0.69 ,0.13],
        coordinateSystem: 'polar',
        name: '8-10m/s',
        stack: 'a',
        itemStyle:{
           normal:{
               color:'rgb(241, 92, 128)'
           }
       }
    }, {
        type: 'bar',
        data: [0.00, 0.00, 0.00, 0.00,0.00, 0.00, 0.13, 0.00,  0.00 ,0.00 ,0.00 ,0.00 ,0.00 ,0.00 ,0.03 ,0.07],
        coordinateSystem: 'polar',
        name: '>10m/s',
        stack: 'a',
        itemStyle:{
           normal:{
               color:'rgb(228, 211, 84)'
           }
       }
    }],
    legend: {
        show: true,
        top:'bottom',
        right:'right',
        data: ['<0.5m/s', '0.5-2m/s', '2-4m/s','4-6m/s','6-8m/s','8-10m/s','>10m/s'],
       orient:'vertical'
    }
};
