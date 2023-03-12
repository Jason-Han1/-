let xData = [
    '实验实践场所数',
    '各类型实验实践场所数',
    '各类型实验实践场所数面积',
    '各类型实验实践场所所承担实验课门数',
];
let yData = [
    380,
    280,
    150,
    180
]
let color = {
    x:0,
    y:0,
    x2:0,
    y2:1,
    colorStops:[
        {
            color:'#21F7FF',
            offset:0
        },
        {
            color:'#008AFF',
            offset:1
        }
    ]
}
option = {
    xAxis: {
        data: xData,
        axisLabel: {
            interval: 0,
            // formatter: function (value) {
            //     var ret = ''; //拼接加\n返回的类目项
            //     var maxLength = 8; //每项显示文字个数
            //     var valLength = value.length; //X轴类目项的文字个数
            //     var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
            //     if (rowN > 1) {
            //         //如果类目项的文字大于5,
            //         for (var i = 0; i < rowN; i++) {
            //             var temp = ''; //每次截取的字符串
            //             var start = i * maxLength; //开始截取的位置
            //             var end = start + maxLength; //结束截取的位置
            //             //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
            //             temp = value.substring(start, end) + '\n';
            //             ret += temp; //凭借最终的字符串
            //         }
            //         return ret;
            //     } else {
            //         return value;
            //     }
            // },
            // interval:0,
            rotate:45,//倾斜度 -90 至 90 默认为0
            offset:[100,0],
            textStyle:{
                fontWeight:"bolder",
                color:"#CAEEFF"
            }
        },
        axisLine:{
            show:true,
            lineStyle:{
                color:'#31C2FF'
            }
        },
        axisTick:{
            show:false
        }
    },
    yAxis: {
        axisLine:{
            show:true,
            lineStyle:{
                color:'#31C2FF'
            }
        },
        splitLine:{
            lineStyle:{
                color:'#31C2FF'
            }
        }
    },
    series: [
        {
            type: 'bar',
            data: yData,
            barWidth:36,
            itemStyle:{
                color:color
            }
        },
    ],
};
