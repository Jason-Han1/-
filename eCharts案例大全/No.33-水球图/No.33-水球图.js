
var value = 0.45;
var value1 = 0.76;
var data = [value, value1];
var option = {
     backgroundColor: '#0F224C',
    title: [
        {
            text: '本年收缴率',
            x: '22%',
            y: '70%',
            textStyle: {
                fontSize: 14,
                fontWeight: '100',
                color: '#5dc3ea',
                lineHeight: 16,
                textAlign: 'center',
            },
        },
        {
            text: '本月收缴率',
            x: '73%',
            y: '70%',
            textStyle: {
                fontSize: 14,
                fontWeight: '100',
                color: '#5dc3ea',
                lineHeight: 16,
                textAlign: 'center',
            },
        },
    ],
    series: [
        {
            type: 'liquidFill',
            radius: '47%',
            center: ['25%', '45%'],
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
            data: [value, value], // data个数代表波浪数
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
                },
            },
			            outline: {
			                // show: false
			                borderDistance: 0,
			                itemStyle: {
			                    borderWidth: 2,
			                    borderColor: '#112165',
			                },
			            },
        },


        { //第二个球的填充
            type: 'liquidFill',
            radius: '47%',
            center: ['75%', '45%'],
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
                            color: '#2aa1e3',
                        },
                        {
                            offset: 1,
                            color: '#08bbc9',
                        },
                    ],
                    globalCoord: false,
                },
            ],
            data: [value1, value1], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'RGBA(51, 66, 127, 0.7)',
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 28,
                        color: '#fff',
                    },
                },
            },
			            outline: {
			                // show: false
			                borderDistance: 0,
			                itemStyle: {
			                    borderWidth: 2,
			                    borderColor: '#112165',
			                },
			            },
        },
    ],
};
