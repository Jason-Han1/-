option = {
    backgroundColor:'#000',
    grid:{
        top:0,
        bottom:0,
    },
    legend: {
        orient: 'vertical',
        left: '50',
        top: 'center',
        data: ['已受理', '已核实', '处置中', '已完成'],
        textStyle: {
            color: '#66dbfc',
            fontSize: 30,
        },
        itemWidth: 25,
        itemHeight: 25,
        itemGap:20,
    },
    series: [{
        name: '测试集',
        type: 'pie',
        color: ['#FFE000', '#EE82EE', '#40E0D0', '#00FFAF'],
        selectedMode: 'single',
        radius: [0, '65%'],
        center:['60%','50%'],
        labelLine: {
            normal: {
                show: false
            }
        },
        hoverAnimation: false,
        data: [{
                value: 70,
                name: '已受理'
            },
            {
                value: 10,
                name: '已核实'
            },
            {
                value: 10,
                name: '处置中'
            },
            {
                value: 10,
                name: '已完成'
            }
        ],
        label:{
            normal: {
                formatter: "{a|{d}%}"+"\n"+"\n"+"{b|{c}}"+"{b|个}",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                    a: {
                        color: "#fff",
                        fontSize: 30,
                    },
                    b:{
                        color: "#fff",
                       fontSize: 30,
                    }
                },
            },
             
        },
    }, ]
};