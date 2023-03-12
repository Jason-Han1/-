option = {
    title: {
        text: '阶梯瀑布图',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'category',
            splitLine: {show:false},
            minInterval: 1000 * 60 * 60 * 24,
            maxInterval: 1000 * 60 * 60 * 24,
            axisTick: {
                interval: 0
            },
            data :  function (){
                var list = [];
                for (var i = 1; i <= 5; i++) {
                    list.push('11月' + i + '日');
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'辅助',
            type:'bar',
            stack: '总量',
            itemStyle:{
                normal:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                },
                emphasis:{
                    barBorderColor:'rgba(0,0,0,0)',
                    color:'rgba(0,0,0,0)'
                }
            },
            data:[0, 1, 3, 6, 10, 15]
        },
        {
            name:'访问量',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'top'}}},
            data:[1, 2, 3, 4, 5]
        }
    ]
};
                    