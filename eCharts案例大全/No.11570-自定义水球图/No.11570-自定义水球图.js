option = {
    series: [{
        name:'自定义水球图',
        type: 'liquidFill',
        data: [{
            value: 0.5,
            textStyle:{
                color:'red'
            }
        }],
        radius: '80%',
        shape: "path://M122.882,128.003 L5.118,128.003 C2.290,128.003 -0.003,125.710 -0.003,122.882 L-0.003,51.199 L64.000,-0.003 L96.593,26.072 L96.593,9.384 C96.593,8.442 97.357,7.678 98.300,7.678 L115.890,7.678 C116.833,7.678 117.597,8.442 117.597,9.384 L117.597,42.875 L128.003,51.199 L128.003,122.882 C128.003,125.710 125.710,128.003 122.882,128.003 ZM77.764,103.593 C77.764,98.070 73.287,93.593 67.764,93.593 L60.236,93.593 C54.713,93.593 50.236,98.070 50.236,103.593 L50.236,128.003 L77.764,128.003 L77.764,103.593 Z",
        phase: 0,
        center: ['50%', '50%'],
        waveAnimation: true,
        outline: {
            show: true,
            borderDistance: 1,
            itemStyle: {
                color: 'red',
                borderColor: 'transparent',
                borderWidth: 1,
            }
        },
        backgroundStyle: {
            color: '#ffffff',
        },
        borderColor: 'red',
        color:'red',
        itemStyle: {
            opacity: 0.5,
        },
        label: {
            show:false,
            color: 'blue',
            insideColor: 'transparent',
            fontWeight: 'bold',
            fontSize: 20,
            align: 'center',
            baseline: 'middle',
            position: 'inside'
        },
        emphasis: {
            itemStyle: {
                opacity: 0.8,
            }
        }
    }]
};