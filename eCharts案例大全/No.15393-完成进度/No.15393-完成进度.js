 var count = 360;
 var percent=0.7;
 var visibleCount=count*percent;
    var data = [];
    for (var i = 0; i < visibleCount; i++) {
        data.push([1,i]);
    }
    for (var i = visibleCount; i < count; i++) {
        data.push([1,0]);
    }
    option = {
         backgroundColor: '#394056',
        color: ['#00cc00'],
        title: {
            text: Math.ceil(percent * 100) +'%',
            textStyle:{
            	color:'#ffffff',
            	fontSize:50,
            	fontWeight:'normal',
            	fontFamily:'华文细黑',
            },
            x: 'center',
            y: 'center'
       },
        visualMap: [{
            show: false,
            dimension: 1,
            seriesIndex:2,
            min: 0,
            max: visibleCount,
            inRange: {
                colorAlpha: [0,1]
            }
        }],
        series: [{
            type: 'pie',
            radius : ['54%', '55%'],
            center: ['50%', '50%'],
            silent: true,
                itemStyle: {
                    normal: {
                        color: 'RGB(0,0,0,0.1)',
                        shadowBlur: 10,
                        shadowColor: '#1b1e25',


                    }
                },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        },{
            type: 'pie',
            radius : ['75%', '76%'],
            center: ['50%', '50%'],
            silent: true,
                itemStyle: {
                    normal: {
                        color: 'RGB(0,0,0,0.1)',
                        shadowBlur: 10,
                        shadowColor: '#1b1e25',


                    }
                },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        },{
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