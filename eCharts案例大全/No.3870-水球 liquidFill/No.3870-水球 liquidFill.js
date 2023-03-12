option = {
    title: {
        text: 'liquidFill Chart'
    },
    series: [{
        type:'liquidFill',
        data: [0.6,0.5,0.4,0.3],
    
        color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
        center: ['50%', '50%'],
        radius: '50%',
        amplitude: '8%',
        waveLength: '80%',
        phase: 'auto',
        period: 'auto',
        direction: 'right',
        shape: 'circle',
    
        waveAnimation: true,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        animationDuration: 2000,
        animationDurationUpdate: 1000,
    
        outline: {
            show: true,
            borderDistance: 8,
            itemStyle: {
                color: 'none',
                borderColor: '#294D99',
                borderWidth: 8,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.25)'
            }
        },
    
        backgroundStyle: {
            color: '#E3F7FF'
        },
    
        itemStyle: {
            opacity: 0.95,
            shadowBlur: 50,
            shadowColor: 'rgba(0, 0, 0, 0.4)'
        },
    
        label: {
            show: true,
            color: '#294D99',
            insideColor: '#fff',
            fontSize: 50,
            fontWeight: 'bold',
    
            align: 'center',
            baseline: 'middle',
            position: 'inside'
        },
    
        emphasis: {
            itemStyle: {
                opacity: 0.8
            }
        }
    }]
};