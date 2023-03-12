const array = [2, 3, 1, 4, 7, 5, 2, 1];
let arrName=[];
for(var i =0 ;i<array.length;i++){
    arrName.push(`下标${i}`)
}
option = {
    backgroundColor: '#010828',
    title:{
        text:"冒泡排序 ",
        textStyle:{
            color:"red"
        },
        left:'center',
        top:"30"
    },
    tooltip: {
        type: 'items'
    },
    grid:{
      top:"25%"  
    },
    xAxis: [{
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'white',
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            // formatter: function (val) {
            //     return val.split("").join("\n");
            // },
            textStyle: {
                fontSize: 12 //更改坐标轴文字大小
            },

        },
        data: arrName
    }],
    yAxis: [{
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value} '
            },
            axisLine: {
                lineStyle: {
                    color: 'white',
                }
            },
        }

    ],
    series: [{
        name: '预购队列',
        type: 'bar',
        barWidth: 50,
        label: {
            normal: {
                show: true,
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                position: 'top',
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#9e65ea'
                        }, //柱图渐变色
                        {
                            offset: 0.5,
                            color: '#855de6'
                        }, //柱图渐变色
                        {
                            offset: 1,
                            color: '#514ddd'
                        }, //柱图渐变色
                    ]
                )
            },
        },
        data: array
    }],
};
var i = 0,
    j = 0,
    num = 0;
var timer = setInterval(_ => {
    if (i >= array.length) {
        clearInterval(timer);
        alert("排序完成");
    }
    if (j > array.length - 1 - i) {
        j = 0;
        i++;
        console.log(array.length)
    }
    if (array[j] > array[j + 1]) {
        num = array[j]
        array[j] = array[j + 1]
        option.series[0].data[j] = array[j + 1]
        array[j + 1] = num
        option.series[0].data[j + 1] = num
        myChart.setOption(option)
    }
    j++;
}, 500)