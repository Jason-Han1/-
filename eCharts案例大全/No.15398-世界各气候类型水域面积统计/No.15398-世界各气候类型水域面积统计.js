app.title = '坐标轴刻度与标签对齐';

option = {
        title : {
        text: '世界各气候类型水域面积统计',
        subtext: '(单位：万平方千米)'
    },
    color: ['#0099ff'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['冬干冷温','冬干温暖','冰原气候','地中海式','夏干冷温','常湿冷温','常湿温暖','荒漠气候','热带季风','热带干湿季','热带雨林','苔原气候','草原气候'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            // type : 'category',
            // data : ['10','20','30','40'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    series : [
        {
            name:'面积统计',
            type:'bar',
            barWidth: '60%',
            data:[11.43,22.43,0.05,8.83,6.63,174.06,17.82,28.68,10.27,20.35,10.24,39.13,28.63]
        },
        
    ],
    label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
    itemStyle: {
                normal: {
                 
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 153, 255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 153, 255, 0.1)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
};