option = {
    title: {
        text: '双十一的第一个十年'
    },
    xAxis: {
        data: ['2009','2010','2011','2012','2013','2014','2015','2016', '2017', '2018','2019']
    },
    yAxis: {},
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params[0].name+ '年：' + params[0].value + " 亿元";
        }
    },
    series: [{
        type: 'bar',
        data:[0.52, 9.36, 33.6, 191, 362, 571, 912.17, 1207, 1682, 2135, 2684]
    }]
};