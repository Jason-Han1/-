var dataPie = {
    dataName:["满意","基本满意","一般"],
    dataValue:[12,88,2],
}

option = {
    //backgroundColor: "#0C1564",
    title:[
        {
            text:"自定义legend",
            left: '5%',
            // bottom: '1%',
            textStyle:{
                fontSize:14,
                //color:'#'
            }},
    ],

    tooltip: {
        trigger: 'item',
        formatter: "{b}%"
    },
    grid: {
        "left": "50%",
        "right": "1%",
        "top": "1%",
        height:"50%",
        containLabel: true
    },
    legend: {
        left: 'left',
        top:'center',
        bottom: '2%',
        orient: 'vertical',
//            x: 'right',文字在图例颜色的右边了
        itemWidth: 12,
        itemHeight:10,
        textStyle:{    //图例文字的样式
            color:[
                '#ff7c00',
                '#efb521',
                '#fb0100'
            ],
            fontSize:12
        },
        data:dataPie.dataName,
        formatter: function(name) {
            var index = 0;
            // console.log(dataPie);
            dataPie.dataName.forEach(function(value,i){
                if(value == name){
                    index = i;
                }
            });
            return name + " " + dataPie.dataValue[index] + "%";
        },
//            data数据中若存在''，则表示换行，用''切割。

    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '40%',
            center: ['40%', '50%'],
            calculable:true,
            clockwise: true,
            data: [{
                value: 10,
                name: '满意'
            }, {
                value: 88,
                name: '基本满意'
            },
                {
                    value: 2,
                    name: '一般'
                }
            ],

            label: {
                normal: {
                    formatter: '{c}%',
                    position:'inner',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
//                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
//                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },

    ],
    color: [
        '#ff7c00',
        '#efb521',
        '#fb0100'

    ],

};