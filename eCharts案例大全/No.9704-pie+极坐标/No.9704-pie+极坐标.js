option = {
    backgroundColor:"#0B1837",
    color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
   
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#fff",
                width: 10,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: false,
            color: "#fff",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
       
        axisLine: {
            show: false,
            lineStyle: {
                color: "#fff",
                width: 1,
                type: "solid"
            },
        } ,
        splitLine:{
            show:false
            
        },
        axisLabel: {
            interval: 0,
            show: false,
            color: "#fff",
            margin: 8,
            fontSize: 16
        }
    },
     
    series: [  {
        type: 'pie',
        radius: ["80%", "81%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        animation:false,
        name: "",
        data: [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#0B4A6B"
                }
            }
        }]
    },{
        stack: 'a',
        type: 'pie',
        // radius: ['20%', '80%'],
        roseType: 'area',
        zlevel:10,
        label: {
            normal: {
                show: false,
                formatter: "{c}",
                textStyle: {
                    fontSize: 12,
                },
                position: 'outside'
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 22,
                name: 'IDS'
            },
            {
                value: 5,
                name: 'VPN'
            },
            {
                value: 15,
                name: '交换机'
            },
            {
                value: 25,
                name: '防火墙'
            },
            {
                value: 20,
                name: 'WAF'
            },
            {
                value: 35,
                name: '堡垒机'
            }
        ]
    }, ]
}