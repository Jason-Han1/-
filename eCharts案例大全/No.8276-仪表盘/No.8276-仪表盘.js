option = {
    backgroundColor: '#050d19',
    series: [
        {
            type: "gauge", //刻度轴表盘
            radius: "80%", //刻度盘的大小
            center: ["50%", "60%"], //刻度盘的位置
            splitNumber: 7, //刻度数量
            min:0,
            max:350,
            startAngle: 225, //开始刻度的角度
            endAngle: -45, //结束刻度的角度
            axisLine: { //刻度的线条
                show: true,
                lineStyle: {
                    width: 32, //定义一个宽15的数轴
                    color: [ //颜色为渐变色
                        [ 500/350,"#ff9900"],
                        [1, "#413e54"]
                    ]
                }
            },
            //分隔线样式。
            splitLine: { //表盘上的轴线
                show: false
            },
            axisTick: { //表盘上的刻度线
                show: false
            },
            axisLabel:{
              fontSize:18,
              distance:15,
              fontWeight:700
            },
            pointer: { //表盘上的指针
                show: true
            },
            itemStyle:{//表盘指针的颜色
              color:  '#ff990050',
              borderColor:'#ff9900',
              borderWidth:2
            },
            title: { //标题
                show: false
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '40%'],
                color: '#ffffff',
                formatter: function(params) {
                    if(params > 350){
                        return params +' Mbps'+"\n\nw(ﾟДﾟ)w 速度爆表";
                    }
                    return params+' Mbps'
                },
                textStyle: {
                    fontSize: 20
                }
            },
            data: [ //当前数值的数据
                {
                    name: "",
                    value: 500
                }
            ]
        }
    ]
};