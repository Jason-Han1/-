var getData = [
    {"month":"2018-04","count":2},{"month":"2018-05","count":0},{"month":"2018-06","count":3},
    {"month":"2018-07","count":3},{"month":"2018-08","count":2},{"month":"2018-09","count":4},
    {"month":"2018-10","count":5},{"month":"2018-11","count":5},{"month":"2018-12","count":3},
    {"month":"2019-01","count":3},{"month":"2019-02","count":0},{"month":"2019-03","count":0}]
    
var data1 = [];
for (var i = 0; i < getData.length; i++) {
    data1.push(getData[i].month);
} 

var data2 = [];
for (var i = 0; i < getData.length; i++) {
    data2.push(getData[i].count);
}
var max = Math.max.apply(null,data2);
option = {
    backgroundColor:'#fff',
    angleAxis: {
        type: 'category',
        z: 10,
        data: data1
    },
    radiusAxis: {
        max:max
    },
    polar: {
    },
    tooltip: {
        trigger: 'axis',
        formatter:'数据资产访问统计<br />时间：{b}<br />数量：{c}',
    },
    series: [{
        type: 'bar',
        data: data2,
        coordinateSystem: 'polar',
        name: '',
        stack: 'a'
    }]
};
