var data = [110, 98, 100, 99, 80,110, 98, 100, 99, 80,80,10]
var titlename = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var valdata = ['11.03亿','9.06亿','12.60亿','10.85亿','10.00亿','9.89亿','7.34亿','9.56亿','12.10亿','12.13亿','8.99亿','0']
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
option = { 
    title: {
        text: '每月销售额统计',
        left: '50%',
        textAlign: 'center',
        textStyle:{
          color:'#FFF',
          fontSize:'24'
        },
        top:20
    },
    backgroundColor: '#0e2147',
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            rich: {
                lg: {
                    backgroundColor: '#339911',
                    color: '#fff',
                    padding: 5,
                    align: 'center',
                    width: 15,
                    height: 15,
                },
            }
        },


    }, {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
            textStyle: {
                fontSize:12,
                color: '#fff',
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
        name: '销售完成占比',
        type: 'bar',
        yAxisIndex: 1,
        data: data,
        barWidth: 30,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            }
        },
    }]
};