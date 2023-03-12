 var count = 360;
    var data = [];
    for (var i = 0; i < count; i++) {
        data.push([1, i]);
    }
    option = {
         backgroundColor: '#394056',
        color: ['red'],
        title: {
            text: '100'+'%',
            textStyle:{
            	color:'#ffffff',
            	fontSize:45,
            	fontWeight:'normal',
            	fontFamily:'华文细黑',
            },
            x: 'center',
            y: 'center'
       },
        visualMap: [{
            show: false,
            dimension: 1,
            min: 0,
            max: count,
            inRange: {
                colorHue: [190, 60]
            }
        }],
        series: [{
            type: 'pie',
            radius : ['55%', '75%'],
            center: ['50%', '50%'],
            silent: true,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        }]
    }