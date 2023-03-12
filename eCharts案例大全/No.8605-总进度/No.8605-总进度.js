option = {
    backgroundColor:'#0e2147',
    title:{
        text:'总进度',
        subtext:'共1000个',
        show:true,
        textStyle:{
            color:'#fff'
        },
        top:'68%',
        left:'center'
    },
    series: [
        {
            center: [
                "50%",
                "50%",
            ],
            radius: [
                "30%",
                "31%"
            ],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 40,
                            color:'#ffffff',
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#25d055",
                    borderColor: "#25d055",
                    borderWidth: 8
                },
            },
            data: [
                {
                    value: '20',
                    name: "20%"
                },
                {
                    name: " ",
                    value: 80,
                    itemStyle: {
                        normal: {
                            label: {
                                "show": false
                            },
                            labelLine: {
                                "show": false
                            },
                            color: "#eee",
                            borderColor: "#eee",
                            borderWidth: 0
                        },
                    }
                }
            ]
        }
    ]
};