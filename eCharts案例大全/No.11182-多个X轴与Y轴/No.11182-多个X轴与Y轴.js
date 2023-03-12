var x1 = [1.5, 2,   3.5, 4,   5,   6,   7];
var s1 = [120, 132, 101, 134, 90, 230, 210];
var s2 = [220, 182, 191, 234, 290, 330, 310];
var s3 = [150, 232, 201, 154, 190, 330, 410];


var x2 = [1,   2.4, 3,   4.2, 5.5, 6.5, 7.3];
var x3 = [1.8, 2.8, 3.8, 4.8, 5.8, 6.8, 7.8];

option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['s1','s2','s3']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
            min: 0,
            // max: 10,
            // interval: 1,
            boundaryGap : false,
            splitLine: {
            show: true,
            interval: 0
            }
            // data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    dataset: {
        source: [x1, s1, x2, s2, x3, s3]
      },
    series : [
        {
            name:'s1',
            type:'line',
            seriesLayoutBy: 'row'
            // areaStyle: {},
            // data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'s2',
            type:'line',
            seriesLayoutBy: 'row'
            // areaStyle: {},
            // data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'s3',
            type:'line',
            seriesLayoutBy: 'row'
            // areaStyle: {},
            // data:[150, 232, 201, 154, 190, 330, 410]
        }
    ]
};
