

option = {
    backgroundColor: "#001131",
    grid: {
            width: '70%',
            height: '90%',
            left: '5%',
            right: '25%',
            bottom: '5%',
            containLabel: true
        },

    "calculable": true,
   xAxis : [
                    {
                        type : 'value',
                        axisLabel:{
                            show: false
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show: false
                        },
                        splitLine:{
                            show: false
                        }
                    }

                ],
                yAxis : [
                    {
                        type : 'category',
                        position:'right',
                        data : ['南三村人口','户籍人口/流动人口','企业人口'],
                        axisLabel:{
                            show: true,
                            textStyle:{
                                color:'#fff'
                            }
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show: true
                        }
                    }
                ],

    "series": [{
            name: "",
            type: "bar",
            stack: "人口",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
                normal: {
                    color: "#0083c4",
                    label: {
                        show: true,
                        textStyle: {
                            "color": "#fff"
                        },
                        formatter: '{c}人'
                    }
                }
            },
            data: [
                68000,
                25698,
                57422,
             
            ],
        },

        {
            "name": "男",
            type: "bar",
            stack: "人口",
            itemStyle: {
                normal: {
                    color: "#f4b183",
                    barBorderRadius: 0,
                    label: {
                        show: true,
                        formatter: function(p) {
                            return p.value > 0 ? (p.value+"人") : '';
                        }
                    }
                }
            },
            data: [
                0,
                25687,
                0,
       
            ]
        }
    ]
}