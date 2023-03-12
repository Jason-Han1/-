var dataArr =[{
                value: 3400,
                name: '未达标',
            },
            {
                value:9500,
                name: '达标'
            }
        ];
option = {
    backgroundColor: 'black',
    // legend: {
    //     orient: 'vertical', // 'vertical'
    //     x: 'left', // 'center' | 'left' | {number},
    //     y: '80', // 'center' | 'bottom' | {number}
    //     padding: 10, // [5, 10, 15, 20]
    //     itemGap: 20,
    //     textStyle: {
    //         color: '#c3cad9'
    //     },
    // },
    title: {
        text: '达标',
        y: 'center',
        x: 'center',
        textStyle: {
            color: '#fff',
            fontSize:40,
            fontWeight:'400'
        }
    },

    tooltip: {
        // show:false,
        trigger: 'item',
        // formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        clockwise:false,
        radius: '50%',
        selectedMode: 'single',
        selectedOffset: 10,
        center: ['50%', '50%'],
        color: ['rgba(255,255,255,0)', '#165DAD'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data:dataArr,
        hoverAnimation:false,
        roseType: 'radius',
        itemStyle: {
            borderWidth: '20',
            color: 'pink',
            borderColor: '#FFF',
            normal: {
                // borderWidth: '10',
                // borderColor: 'rgba(0,0,0,2)',
            },
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        z:1
    },
    {
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["43%", "42.5%"],
        "hoverAnimation": false,
        "data": [{
            "name": "",
            "value": 45,
            "z": 5,
            "labelLine": {
                "show":false,
                "length2": 80,
                "lineStyle": {
                    "color": "#fffff",
                    "width": 1.5
                }
            },
            itemStyle:{
                normal:{
                    color:'#3EAADB'
                    // shadowColor: 'rgba(79,175,226,1)',
                    // shadowBlur: 20
                }
            },
            label: {
                normal: {
                position: 'inner',//隐藏引导线
                show : false//隐藏标识文字
                }
            }
        },
        ]
    }
    ]
};