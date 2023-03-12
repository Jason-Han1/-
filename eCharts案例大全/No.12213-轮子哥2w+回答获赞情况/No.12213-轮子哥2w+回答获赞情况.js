option = {
    title: {
        text: '轮子哥2w+回答获赞情况',
        subtext:'瀑布图',
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
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data:['赞同数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data: ['0','1-10','10-50','50-100','100-500','500-1k','1k-10k','10k+']
        /*data :  function (){
            var list = [];
            for (var i = 1; i <= 11; i++) {
                list.push('11月' + i + '日');
            }
            return list;
        }*/
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总人数',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data:[0,54,3780,12127,15850,20611,21135,21404,21406]
            //data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '人数',
            type: 'bar',
            stack: '总人数',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[54,3726,8347,3723,4761,524,269,2]
            //data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        }
    ]
};
