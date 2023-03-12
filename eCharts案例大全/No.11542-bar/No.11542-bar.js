var imgDataURL = "/asset/get/s/data-1557111637874-scOLe_8k4.png";

var totalCost = [102, 102, 102]
var visits = [92, 102, 89]
var grade = ['伊家乡', '客访乡', '里心镇']
var yData = ['1','2','3']
var data = {
    grade: grade,
    totalCost: totalCost,
    visits: visits,
    yData:yData
};
option = {
    backgroundColor: '#05274C',
    grid: {
        left: '240',
        right: '100'
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            margin: 80,
            show: true,
            color: '#fff',
            fontSize: 16,
            padding:[6,10],
            backgroundColor:{
                image:imgDataURL
            }
            
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: data.yData
    },
    series: [{
        type: 'bar',
        barGap: '-100%',
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#00f2f1',
                fontSize: 16,
                formatter: 
                function(param) {
                    return data.visits[param.dataIndex];
                },
            }
        },
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 16,
                color: '#0b104b'
            },
        },
        z: 1,
        data: data.totalCost,
        // data: da
    }, {
        type: 'bar',
        barGap: '-98%',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 16,
                color: {
                    type: 'linear',
                    x: 0,
                    x1: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#249fdb'
                    }, {
                        offset: 1,
                        color: '#21bdb5'
                    }]
                }
            },
        },
        max: 1,
        label: {
            normal: {
                show: true,
                position: 'left',
                color: '#00f2f1',
                fontSize: 16,
                formatter: function(param) {
                    return data.grade[param.dataIndex]
                },
            }
        },
        labelLine: {
            show: true,
        },
        z: 2,
        data: data.visits,
    }]
}