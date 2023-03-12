 var value = 0.5;
 var data = [value, value];
 option = {
     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#0f0248'
    }, {
        offset: 1,
        color: '#0f0248'
    }]),
    title: [
        {
            text: 'BANDWIDTHUSE',
            x: 'center',
            y: '70%',
            textStyle: {
                color: '#FFF',
                fontSize: 20,
                fontWeight: 'normal',
            }
        }, {
           text: (value * 100).toFixed(0) + '%',
            x: 'center',
            top: '58%',
            textStyle: {
                fontSize: '80',
                color: '#FFF',
            },
        }],
     series: [{
         type: 'liquidFill',
         radius: '80%',
         center: ['50%', '50%'],
        //   shape: 'roundRect',
         data: data,
         backgroundStyle: {
             color: {
                 type: 'linear',
                 x: 1,
                 y: 0,
                 x2: 0.5,
                 y2: 1,
                 colorStops: [{
                     offset: 1,
                     color: '#0f0248'
                 }, {
                     offset: 0,
                     color: '#0f0248'
                 }],
                 globalCoord: false
             },
         },
         outline: {
             borderDistance: 10,
             itemStyle: {
                 borderWidth: 10,
                 borderColor: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 0,
                     y2: 1,
                     colorStops: [{
                         offset: 0,
                         color: '#962498'
                     }, {
                         offset: 1,
                         color: '#eb0a51'
                     }],
                     globalCoord: false
                 },
                 shadowBlur: 10,
                 shadowColor: '#000',
             }
         },
         color: ['rgba(210, 2, 124,0.3)', 'rgba(147, 78, 233,.3)'],
         label: {
             normal: {
                 formatter: '',
             }
         }
     }, ]
 };