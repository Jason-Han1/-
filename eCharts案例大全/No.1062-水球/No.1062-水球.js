
var value = 0.45;
var value1 = 0.76;
var data = [value];
var option = {
     backgroundColor: '#0F224C',
    title: [
        {
            text: '本年收缴率',
            x: '50%',
            y: '70%',
            textStyle: {
                fontSize: 14,
                fontWeight: '100',
                color: '#5dc3ea',
                lineHeight: 16,
                textAlign: 'center',
            },
        }
    ],
    graphic: [{
         type: 'group',
         left: 'center',
         top: '35%',
         children: [{
             type: 'text',
             z: 100,
             left: '40',
             top: 'middle',
             style: {
                 fill: '#aab2fa',
                 text: '流量统计',
                 font: '20px Microsoft YaHei'
             }
         }]
     }],
    series: [
        {
            type: 'liquidFill',
            radius: '47%',
            center: ['50%', '45%'],
            color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#446bf5',
                        },
                        {
                            offset: 1,
                            color: '#2ca3e2',
                        },
                    ],
                    globalCoord: false,
                },
            ],
            data: [value], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'RGBA(51, 66, 127, 0.7)',
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 50,
                        color: '#fff',
                    },
                }
            },
			            outline: {
			                 show: false,
			                borderDistance: 10,
			                itemStyle: {
			                    borderWidth: 2,
			                    borderColor: '#112165',
			                },
			            },
        },


    ],
};
