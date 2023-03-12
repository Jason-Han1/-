var hours = [0,1,2,3,4,5,6,7,8,9];
var ydays1 = ['0', '1万', '10万',
        '50万', '100万', '500万', '1000万', '5000万', '1亿', '10亿以上'].reverse();
var ydays2 = ['1万', '10万',
        '50万', '100万', '500万', '1000万', '5000万', '1亿', '10亿', '  '].reverse();

var data = []
for(let i = 0;i<10;i++) {
    for (let j = 0;j<10;j++) {
        data.push([i,j,parseInt(Math.random() * 10)])
    }
}

option = {
    title: {
        text: 'xx规模分布图',
        left: '8%',
        align: 'right'
    },
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        width: 650,
        height: 500,
        top: '10%'
    },
    xAxis: {
        show: false,
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: [{
        name: '单位(元)',
        type: 'category',
        data: ydays1,
        splitArea: {
            show: false
        },
        axisTick: {
          show: false  
        },
        axisLine: {
            show: false
        },
         splitLine: {
            show: false
        }
    },{
        type: 'category',
        data: ydays2,
        splitArea: {
            show: false
        },
        axisTick: {
          show: false  
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    visualMap: [{
        type: 'piecewise',
        splitNumber: 6,
        showLabel: false,
        pieces: [
            {gt: 9, color: '#F06326', symbol: 'rect'},
            {gt: 8, lt: 9, color: '#F06326', symbol: 'rect'},
            {gt: 7, lt: 8, color: '#F06326', symbol: 'rect'},
            {gt: 6, lt: 7, color: '#F48A5D', symbol: 'rect'},
            {gt: 5, lt: 6, color: '#F48A5D', symbol: 'rect'},
            {gt: 4, lt: 5, color: '#FFB366', symbol: 'rect'},
            {gt: 3, lt: 4, color: '#FFB366', symbol: 'rect'},
            {gt: 2, lt: 3, color: '#FFCF9F', symbol: 'rect'},
            {gt: 1, lt: 2, color: '#FFE7CF', symbol: 'rect'},
            {lt: 1, color: '#FFF4EB'},
        ],
        itemWidth: 16,
        itemHeight: 12,
        itemGap: 0,
        text: ['1000','0'],
        inverse: true,
        min: 0,
        max: 10,
        seriesIndex: [0],
        orient: 'horizontal',
        left: '5%',
        bottom: '5%'
    }],
    legend: {
       data: [{
            name: '当前项目预算所在区间',
            icon: 'circle',
        }],
        orient: 'horizontal', 
        seriesIndex: [1],
        right: '30%',
        bottom: '5%',
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 30,
        textStyle: {
            color: '#',
            fontSize: 16,
        },
    },
    series: [{
        name: '类似项目 Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            show: false
        },
        itemStyle: {
           borderWidth: '2',
           borderColor: '#fff'
        },
        zlevel: 2,
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },{
        name: '当前项目预算所在区间',
        type: 'scatter',
        color: '#2CB7CA',
        zlevel: 3,
        symbolSize: function (val) {
            return 15;
        },
       data: [
            [1,6,4]
        ]
    }]
};