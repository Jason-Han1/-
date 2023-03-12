var interval = ['2s', '4s', '6s', '8s', '10s'];
var penetration = ['10%', '30%', '50%',
        '70%', '90%'];

var data = [[0,0,72.22],[0,1,70.83],[0,2,58.33],[0,3,26.38],[0,4,12.50],
            [1,0,87.50],[1,1,81.94],[1,2,58.33],[1,3,26.38],[1,4,12.50],
            [2,0,100],[2,1,98.61],[2,2,98.61],[2,3,94.44],[2,4,91.67],
            [3,0,100],[3,1,98.61],[3,2,98.61],[3,3,94.44],[3,4,91.67],
            [4,0,100],[4,1,100],[4,2,98.61],[4,3,98.61],[4,4,98.61],
];

				
		

	
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top'
    },
    grid: {
        height: '50%',
        top: '10%'
    },
    xAxis: {
        name:'采样间隔',
        nameTextStyle:{
            fontSize:15,
            color:'#000',
        },
        axisLabel:{
            color:'#000',
        },
        type: 'category',
        data: interval,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        name:"渗透率",
        nameTextStyle:{
            fontSize:15,
            color:'#000',
        },
        axisLabel:{
            color:'#000',
        },
        type: 'category',
        data: penetration,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 10,
        max: 100,
        calculable: true,
        right:"10",
        top:"30%",
        type: 'piecewise',
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};