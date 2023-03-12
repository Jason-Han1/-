var value = 0.5;
var value1 = 75.2
var value2 = 75.2
var data = [value, value, value, ];


var option = {
    backgroundColor: '#fff',
    title: [
        {
            text: '当前流量剩余：'+value1,
            left: '50%',
            top: "58%",
            textAlign: 'center',
            textStyle: {
                fontSize: '20',
                fontWeight: '400',
                color: '#fff',
                
                textAlign: 'center',
            },
        },
        {
            text: 'M',
            left: '61.5%',
            top: "58.5%",
            textAlign: 'center',
            textStyle: {
                fontSize: '18',
                fontWeight: '400',
                color: '#fff',
                
                textAlign: 'center',
            },
        },
        {
            text: '已用流量：'+value2+'M',
            left: '50%',
            top: "64%",
            textAlign: 'center',
            textStyle: {
                fontSize: '20',
                fontWeight: '400',
                color: '#fff',
                
                textAlign: 'center',
            },
        },
        {
            text: (value * 100).toFixed(0),
            left: '47.5%',
            top: '30%',
            textAlign: 'center',
            textStyle: {
                fontSize: 70,
                color: '#fff',
            },
        },

        {
            text:"%",
            left: '56%',
            top: '34%',
            textAlign: 'center',
            textStyle: {
                fontSize: 40,
                color: '#fff',
            },
        },
    ],
    series: [{
            type: 'liquidFill',
            radius: '70%',
            z: 6,
            center: ['50%', '50%'],
            amplitude: 20,
            backgroundStyle: {
                borderWidth: 1,
                color: 'rgba(201,219,252, 1)', // 球体
            },
             color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: '#133480',
                        },
                        {
                            offset: 0,
                            color: '#5F8EE8',
                        },
                    ],
                    globalCoord: false,
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: '#133480',
                        },
                        {
                            offset: 0,
                            color: '#5F8EE8',
                        },
                    ],
                    globalCoord: false,
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: '#5F8DE8',
                        },
                        {
                            offset: 0,
                            color: '#5F8DE8',
                        },
                    ],
                    globalCoord: false,
                },
            ],
            data: [value+0.02,
                {
                    value: value-0.01,
                    direction: 'left',
                },
                value-0.01,
            ],
            label: {
                normal: {
                    formatter: '',
                }
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            }
        },
       
        
    ]
}