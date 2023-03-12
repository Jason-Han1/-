
var hours = ['0', '1', '2', '3', '4', '5', '6',
        '7', '8', '9','10','11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23'];
var days = [ '进', '出'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],
[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],
[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],
[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],
[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2]];

option = {

    polar: {},
    tooltip: {
        formatter: function (params) {
            return  hours[params.value[1]] + '点:  ' + days[params.value[0]]+params.value[2]+'次'
        }
    },
    angleAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        data: days,
        axisLine: {
            show: false
        },
        axisLabel: {
            rotate: 45
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'scatter',
        coordinateSystem: 'polar',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data
    }]
};