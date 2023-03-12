option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
     legend: {
        orient: 'vertical',
        right:0,
        y: "50%",
        textStyle:{
            fontSize:20,
            color: 'black'

        },
        data: [
            'China',
            'United States',
            'India', 
            'Russian Federation ',
            'Japan',
            'Rest of the world']
    },

    series: [{
        type: 'pie',
        radius: '65%',
        center: ['45%', '40%'],
        label:{
            normal:{
                show: true,
                position: "outer",
                textStyle:{
                    fontWeight:300,
                    fontSize:50,
                    color:'black'
                },
                formatter:'{d}%'
            },
        },
        data: [
            {
                value: 9056.8,
                name: 'China'
            },
            {
                value: 4833.1,
                name: 'United States'
            },
            {
                value: 2076.8,
                name: 'India'
            },
            {
                value: 1438.6,
                name: '	Russian Federation'
            },
            {
                value: 1147.1,
                name: 'Japan'
            },
            
            {
                value: 52591.9,
                name: 'Rest of the world'
            },
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};