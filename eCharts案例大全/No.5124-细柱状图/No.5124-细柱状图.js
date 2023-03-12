option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    grid: {
        top:'15%',
        bottom:'5%',
        right : '5%'
    },
    xAxis: [{
        // x轴
        type: 'category',
        data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#CCCCCC'
            }
        }
    }],
    yAxis: [{
        name:'(次)',//y单位
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#CCCCCC'
            }
        },
        splitLine: {//坐标轴grid里面的分割线
            show: true,
            lineStyle:{
                type: 'solid',
                color: '#E7E7E7'
            }
        }
    }],
    series: [

        {
            type: 'bar',
            name: '就业率',
            barWidth: 5,
            itemStyle: {
                normal: {
                    //柱体的颜色
                    //右，下，左，上（0，1，0，0）
                    color: function(params) {
                        var colorList = [
                            ['#04FEFD', '#04FEFD'],
                            ['#07F9FD', '#07F9FD'],
                            ['#0DEEFC', '#0DEEFC'],
                            ['#0DEEFC', '#0DEEFC'],
                            ['#11E7FC', '#11E7FC'],
                            ['#15E1FC', '#15E1FC'],
                            ['#1AD8FB', '#1AD8FB'],
                            ['#1ED0FB', '#1ED0FB'],
                            ['#23C8FA', '#23C8FA'],
                            ['#28BEFA', '#28BEFA'],
                            ['#2DB6FA', '#2DB6FA'],
                            ['#33A9F6', '#33A9F6'],
                            ['#3D99F8', '#3D99F8'],
                            ['#3E99F8', '#3E99F8'],
                            ['#448FF8', '#448FF8'],
                            ['#4887F8', '#4887F8'],
                            ['#4D7EF7', '#4D7EF7'],
                            ['#5275F7', '#5275F7'],
                            ['#566EF6', '#566EF6'],
                            ['#5B66F6', '#5B66F6'],
                            ['#5E60F6', '#5E60F6'],
                            ['#625AF5', '#625AF5'],
                            ['#6751F5', '#6751F5'],
                            ['#6751F5', '#6751F5'],
                            ['#6751F5', '#6751F5'],
                            ['#6751F5', '#6751F5'],
                            ['#6751F5', '#6751F5'],
                            ['#6751F5', '#6751F5'],
                            ['#6751F5', '#6751F5'],
                            ['#6751F5', '#6751F5'],
                            ['#6751F5', '#6751F5'],

                        ];
                        var colorItem = colorList[params.dataIndex];
                        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colorItem[0]
                        },
                            {
                                offset: 1,
                                color: colorItem[1]
                            }
                        ], false);
                    },
                    barBorderRadius:[5,5,0,0]
                }
            },
            data: [25,27,29,31,33,31,29,27,25,27,29,31,33,35,37,39,41,39,37,35]
}]};