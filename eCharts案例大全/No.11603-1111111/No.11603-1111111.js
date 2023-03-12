var piePane = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVQ4jWP8//8/AwXgPxMluhkYGBhGDRg1YNQAKhnAwsDAQFF+BgBtSwUd6uvSywAAAABJRU5ErkJggg=='
var piePatternImg = new Image();
piePatternImg.src = piePane;
option = {
   
  tooltip: {
        show: false
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '15%',
    },
   yAxis: {
        data: ['平均CPU\n利用率'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    xAxis: {
       
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        type: 'bar', 
        stack: 'total',
        label: {
            show: true,
            position: 'top',
            padding: 10,
            color: '#2979ff',
            fontSize: 14,
            formatter: '{c}%'
        },
       
        barWidth: '40%',
        data: [49],
        z: 10
    },{
        type: 'bar',
        stack: 'total',
        itemStyle: {
            color: {
                image: piePatternImg,
                repeat: 'repeat'
            },
            opacity: 0.05
        },
        barWidth: '40%',
        data: [10],
        z: 51
    },


    ]
}