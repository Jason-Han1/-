 option = {
    color :[ 'rgb(14,202,255)', 'rgb(14,202,255)','rgb(7,175,255)', 'rgb(7,175,255)', 'rgb(21,194,95)', 'rgb(21,194,95)', 'rgb(255,213,46)', 'rgb(255,213,46)', 'rgb(255,41,25)', 'rgb(255,41,25)'] ,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 20,
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        show: true,
        axisLabel:{
            formatter:function(value){
                var text = [];
                if(value == 0){
                    text.push("无")
                }else if(value == 2){
                    text.push("Ⅰ类")
                }else if(value == 4){
                    text.push("Ⅱ类")
                }else if(value == 6){
                    text.push("Ⅲ类")
                }else if(value == 8){
                    text.push("Ⅳ类")
                }else if(value == 10){
                    text.push("Ⅴ类")
                }else if(value == 12){
                    text.push("劣Ⅴ类")
                }
                return text;
            }
        }
    },
    series: [{
            data: [1, 1, 1, 1, 1, 1, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 10,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [1, 1, 1, 1, 1, 1, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 30,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [null, null, 1, 1, 1, 1, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 30,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [null, null, 1, 1, 1, 1, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 30,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [null, null, null, 1, 1, 1, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 10,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [null, null, null, 1, 1, 1, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 30,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [null, null, null, null, null, 1, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 30,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [null, null, null, null, null, 1, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 30,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [null, null, null, null, null, null, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 30,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        },
        {
            data: [null, null, null, null, null, null, 1],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 30,
            itemStyle: {
                borderWidth: 0, //用border设置两个柱形图之间的间距
                borderColor: 'rgba(255, 255, 255, 1)', //同背景色一样
                barBorderRadius: 60
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(255, 255, 255, 1)',
                }
            }

        }
    ]
};