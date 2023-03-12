
var hours = [' ','阿昌', '白', '布朗', '德昂', '哈尼', '景颇', '拉祜', '傈僳','纳西','怒','羌','彝',' ',];
var days = [' ','一味', '二味', '三味', '四味', '五味', '六味以上',' ',];
var data = [
[1,1,0.356],[1,2,0.000],[1,3,0.258],[1,4,0.085],[1,5,0.000],[1,6,0.619],[1,7,0.000],[1,8,0.591],[1,9,0.321],[1,10,0.512],[1,11,0.273],[1,12,0.108],
[2,1,0.221],[2,2,0.667],[2,3,0.097],[2,4,0.239],[2,5,0.000],[2,6,0.286],[2,7,0.000],[2,8,0.227],[2,9,0.341],[2,10,0.141],[2,11,0.280],[2,12,0.392],
[3,1,0.144],[3,2,0.000],[3,3,0.419],[3,4,0.239],[3,5,0.520],[3,6,0.095],[3,7,0.022],[3,8,0.091],[3,9,0.161],[3,10,0.158],[3,11,0.207],[3,12,0.259],
[4,1,0.115],[4,2,0.000],[4,3,0.081],[4,4,0.113],[4,5,0.120],[4,6,0.000],[4,7,0.130],[4,8,0.045],[4,9,0.082],[4,10,0.069],[4,11,0.067],[4,12,0.127],
[5,1,0.077],[5,2,0.167],[5,3,0.113],[5,4,0.141],[5,5,0.080],[5,6,0.000],[5,7,0.370],[5,8,0.045],[5,9,0.056],[5,10,0.062],[5,11,0.060],[5,12,0.051],
[6,1,0.087],[6,2,0.167],[6,3,0.032],[6,4,0.183],[6,5,0.280],[6,6,0.000],[6,7,0.478],[6,8,0.000],[6,9,0.039],[6,10,0.058],[6,11,0.113],[6,12,0.063],
]
data = data.map(function (item) {
    return [item[1], item[0], item[2]];
});

option = {
    title: {
        text: ' ',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
    },
    legend: {
        data: ['Punch '],
        left: 'right'
    },
    tooltip: {
        position: 'top',
        formatter: function (params) {
            return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
        }
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: hours,
        axisLabel: {
            show: false
        },
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        axisLabel: {
            show: false
        },
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 150;
        },
        data: data,
        color: '#ddd',
    }]
};