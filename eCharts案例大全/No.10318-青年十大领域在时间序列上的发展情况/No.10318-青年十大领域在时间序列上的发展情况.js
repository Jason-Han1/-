option = {
    title: {
        text: '青年十大领域在时间序列上的发展情况（北京）',
        subtext: '本图均为虚拟数据',
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
                tar = params[2];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data:['降低','增加']
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
        data :  function (){
            var list = [];
            for (var i = 2010; i <= 2018; i++) {
                list.push( i + '年');
            }
            return list;
        }()
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack: '总量',
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
            data: [0,46,27,83,31,1,56,79,61,41]
        },
        {
            name: '增加',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [46,'-', 56, '-', '-', 55, 23,'-','-', '-']
        },
        {
            name: '降低',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            },
            data: ['-',19,'-',52,30,'-','-',18,20]
        }
    ]
};
