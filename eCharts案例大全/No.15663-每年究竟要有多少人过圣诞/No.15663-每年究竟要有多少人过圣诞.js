var option = {
    title:{
        text:'每年究竟要有多少人过圣诞'
    },
    series: [{
        type: 'liquidFill',
        animation: true,
        waveAnimation: true,
        data: [0.76, 0.70, 0.68],
        color: ['#49d088', '#38b470', '#2aaf66'],
        center: ['25%', '50%'],
        waveLength: '60%',
        amplitude: 8,
        radius: '70%',
        label: {
            normal: {
                formatter: function() {
                    return '世界\n\n76%人口';
                },
                textStyle: {
                    fontSize: 22,
                    color: '#44c078'
                },
                position: ['50%', '30%']
            }
        },
        outline: {
            itemStyle: {
                borderColor: '#49d088',
                borderWidth: 5
            },
            borderDistance: 0
        },
        itemStyle: {
            normal: {
                backgroundColor: '#fff'
            }
        }
    }, {
        animation: true,
        waveAnimation: true,

        type: 'liquidFill',
        data: [0.66, 0.6, 0.5],
        color: ['#eb594b', '#e44d46', '#dc403f'],
        center: ['75%', '50%'],
        radius: '70%',
        amplitude: 8,
        label: {
            normal: {
                formatter: function() {
                    return '中国\n\n66%人口'
                },
                textStyle: {
                    fontSize: 22,
                    color: '#e35140'
                },
                position: ['50%', '30%']
            }
        },
        outline: {
            itemStyle: {
                borderColor: '#e35140',
                borderWidth: 5
            },
            borderDistance: 0
        },
        itemStyle: {
            normal: {
                backgroundColor: '#fff'
            }
        }
    }]
};

myChart.on("click",function(e){alert("你点击了水球！");})