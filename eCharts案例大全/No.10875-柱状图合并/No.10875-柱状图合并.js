 var colors = ['#EA6942', '#DA4F79', '#6C5BF7', '#65C993'];
    var name=['南宁市','柳州市', '桂林市','百花市','北海市'];
     var data1=[375,286,258,239,130];
    var data2=[353,269,236,152,101];
    var data3=[253,199,146,142,201];
   var data4=[253,199,146,142,201];

    var a = 18;//X fontSize
    var b = 15;//轴数据 fontSize
    var xAxisTextColor = '#FFFFFF';//'#4e7199';//字体颜色
    var legendColor = '#FFFFFF';//legend颜色


    var option = {
        backgroundColor:'#000000',
        // title: {
        //     text: '',
        //     textStyle:{
        //         fontSize: '22'
        //     }
        // },
        color: colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'cross'}
        },
        grid: {
            //top:'10%',
            left: '20%',

        },
        legend: {
            data: ['1', '2', '3', '4'],
            //right:'right',
            orient: 'vertical',
            x: '35',
            y: '30',
            icon: "circle",
            //x: 'left',
            textStyle: {
                fontSize: a,
                color: legendColor
            },
        },
        xAxis: {
            type: 'category',

            data: name,
            axisLabel: {
                textStyle: {//字体样式
                    fontSize: a,
                    color: xAxisTextColor,
                },
            },
            splitLine: {show: false},//去掉网格
            axisTick: {//去掉轴上面的刻度
                show: false
            },
            axisLine: {//轴坐标线
                show: false,
            }
        },
        yAxis: [
            {//第一个Y轴
                name: '个',
                nameTextStyle: {
                    color: xAxisTextColor,
                    fontSize: a,
                },
                type: 'value',
                splitLine: {//网线
                    show: false,
                    lineStyle: {
                        type: 'dotted'
                    }
                },
                //min: min,//设置Y轴最小值
                //max: 100,//设置Y轴最大值
                axisLabel: {//左边Y轴字
                    formatter: '{value}',
                    textStyle: {
                        color: xAxisTextColor,
                        fontSize: a,
                    }
                },
                axisTick: {//去掉轴上面的刻度
                    show: false
                },
                axisLine: {//右边Y轴坐标线
                    show: false,
                }
            },
        ],
        series: [{
            name: '1',
            stack: '总量',
            type: 'bar',
            barWidth: 30,
            data: data1
        },
            {
                name: '2',
                stack: '总量',
                type: 'bar',
                barWidth: 30,
                data: data2
            },
            {
                name: '3',
                stack: '总量',
                type: 'bar',
                barWidth: 30,
                data: data3
            }, {
                name: '4',
                stack: '总量',
                type: 'bar',
                barWidth: 30,
                data: data4
            }]
    };