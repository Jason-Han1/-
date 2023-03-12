var dataAxis = ['身体状况极差', '身体状况较差', '身体状况良好', '身体状况较好', '身体状况很好'];
var data = [35, 20, 15, 20,10];
var colors = [
    [
        {offset: 0, color: 'rgba(152,125,230,.1)'},
        {offset: 1, color: 'rgba(152,125,230,1)'}
    ],
    [
        {offset: 0, color: 'rgba(152,1,230,.1)'},
        {offset: 1, color: 'rgba(152,1,230,1)'}
    ],
    [
        {offset: 0, color: 'rgba(1,125,230,.1)'},
        {offset: 1, color: 'rgba(1,125,230,1)'}
    ],
    [
        {offset: 0, color: 'rgba(152,125,2,.1)'},
        {offset: 1, color: 'rgba(152,125,2,1)'}
    ],
    [
        {offset: 0, color: 'rgba(52,25,30,.1)'},
        {offset: 1, color: 'rgba(52,25,30,1)'}
    ]
];
option = {
    title: {
                text: '健康人群分布图',
                subtext: '不同指标不同渐变色，指标带色顶部显示'
            },
            grid:{
                x: 0,
                y: 80,
                x2: 0,
                y2: 20,
            },
            legend: {
                data:dataAxis
            },
            xAxis: {
                show: false,
                type : 'category',
                axisLabel: {
                    inside: false
                }
            },
            yAxis: {
                axisLine: {
                    show: false,
                    lineStyle:{
                        color: '#ccc'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    color: '#555',
                    formatter: '{value}%',
                    align: 'right',
                    margin: 4
                }
            },
            series: (function(item){
                var series = [];

                for(var i = 0; i < item.length; i++){

                    series.push(
                        {
                            name: dataAxis[i],
                            type: 'bar',
                            data: [{value: data[i]}],
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        colors[i]
                                    ),
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: '{c}%',
                                        color:colors[i][1].color
                                    },
                                }
                            },
                            barWidth: '12%',
                            barCategoryGap:'50%',
                            animation: true
                        }
                    );

                }

                return series;

            })(data)
};