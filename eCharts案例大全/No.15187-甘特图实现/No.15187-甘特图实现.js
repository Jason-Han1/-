app.title = '堆叠条形图';


var lendata = ['采购', '乳化','灌包','发货'];
var customer = ['客户A/001/面膜', '客户A/002/香水', '客户B/005/精华', '客户c/125/冻干粉', '客户d/008/面膜', '客户d/006/套盒'];

var caigoub = ['2019-07-12','2019-07-15','2019-07-10','2019-07-12','2019-07-15','2019-07-20'];
var caigouo = ['2019-07-15','2019-07-16','2019-07-11','2019-07-13','2019-07-16','2019-07-25'];

var ruhuab = ['2019-07-13','2019-07-17','2019-07-11','2019-07-15','2019-07-18','2019-07-26'];
var ruhuao = ['2019-07-20','2019-07-20','2019-07-15','2019-07-20','2019-07-25','2019-07-30'];

var guanbaob = ['2019-07-24','2019-07-21','2019-07-16','2019-07-21','2019-07-26','2019-08-02'];
var guanbaoo = ['2019-07-30','2019-07-25','2019-07-20','2019-07-25','2019-07-30','2019-08-06'];

var fahuob = ['2019-08-01','2019-07-25','2019-07-25','2019-07-25','2019-08-01','2019-08-06'];
var fahuoo = ['2019-08-02','2019-07-26','2019-07-30','2019-07-30','2019-08-06','2019-08-07'];


option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
                var arrKey = new Array();
                var arrVale = new Array();
                var res = params[0].name + "</br>"
                for (var i = 0; i < params.length; i++) {
                    if (i == 0) continue;
                    var date0 = params[i - 1].data;
                    var date1 = params[i].data;
                    var name = params[i].seriesName;
                    if (arrKey.length <= 0) {
                        arrKey.push(name);
                        var html = name + ":</br>" + date0 + "~" + date1 + "</br>";
                        arrVale[0] = html;
                    }
                    var add = true;
                    for (var j = 0; j < arrKey.length; j++) {
                        if (name.indexOf(arrKey[j]) >= 0) {
                            add = false;
                            break;
                        }
                    }
                    if (add) {
                        var index = arrKey.push(name);
                        var html = name + ":</br>" + date0 + "~" + date1 + "</br>";
                        arrVale[index - 1] = html;
                    }
                    for (var j = 0; j < arrKey.length; j++) {
                        if (name != arrKey[j] && name.indexOf(arrKey[j]) >= 0) {
                            var html = "    " + date0 + "~" + date1 + "</br>";
                            arrVale[j] += html;
                            break;
                        }
                    }
                }
                for (var k = 0; k < arrVale.length; k++) {
                    res += arrVale[k];
                }
                return res;

            }
            // formatter: '{b}: {c}<br/>{b1}: {c1}'
    },
    legend: {
        data: lendata
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {
        type: 'category',
        data: customer
    },
    series: [{
        name: '投入隐藏线',
        type: 'bar',
        stack: '总量',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: caigoub
    }, {
        name: '采购',
        type: 'bar',
        stack: '总量',
        data: caigouo
    },{
        name: '投入隐藏线',
        type: 'bar',
        stack: '总量',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: ruhuab
    }, {
        name: '乳化',
        type: 'bar',
        stack: '总量',
        data: ruhuao
    },{
        name: '投入隐藏线',
        type: 'bar',
        stack: '总量',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: guanbaob
    }, {
        name: '灌包',
        type: 'bar',
        stack: '总量',
        data: guanbaoo,
    },{
        name: '投入隐藏线',
        type: 'bar',
        stack: '总量',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: fahuob
    }, {
        name: '发货',
        type: 'bar',
        stack: '总量',
        data: fahuoo
    }]
};