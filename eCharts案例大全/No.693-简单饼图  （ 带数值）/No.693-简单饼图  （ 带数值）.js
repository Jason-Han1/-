var color = [
    '#0CD2E6',
    '#3751E6',
    '#FFC722',
    '#886EFF',
];
var legend = [
    'A需求类型',
    'B需求类型',
    'C需求类型',
    'D需求类型',
];

var seriesData = [
    { "name": "A需求类型", "value": 30 },
    { "name": "B需求类型", "value": 10 },
    { "name": "C需求类型", "value": 15 },
    { "name": "D需求类型", "value": 23 },
]

var option = {
    backgroundColor:'#050e31',
    color: color,
    grid: {
        top: '15%',
        left: 0,
        right: '1%',
        bottom: 5,
    },
    legend: [{
        orient: 'vertical',
        top: 'center',
        icon:"circle",
        right: 180,
        textStyle:{
          color:'#ffffff', 
          fontSize:16
        },
        data: legend.slice(0,2),
    },{
        orient: 'vertical',
        top: 'center',
        icon:"circle",
        right: 40,
        textStyle:{
          color:'#ffffff',  
          fontSize:16
        },
        data: legend.slice(2,4),
    }],
    series: [{
        name: '需求类型占比',
        type: 'pie',
        center: ['40%', '50%'],
        radius: ['50%', '75%'],
        showEmptyCircle :true,
        itemStyle: {
            normal: {
                borderColor: "#050e31",
                borderWidth: 2
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{value|{c}}',
                rich: {
                    value: {
                        fontSize: 20,
                        color:'#ffffff',
                    },
                },
            }
        },
        labelLine: {
            show: false,
            length: 0,
            length2: 0,
        },
        data: seriesData,
    }],
};

myChart.setOption(option);
