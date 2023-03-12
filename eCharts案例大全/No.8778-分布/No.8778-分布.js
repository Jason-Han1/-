function randomData() {
    return Math.round(Math.random()*2500);
}
var data1=[  {name: '湖北',value: 9074 },
                {name: '浙江',value: 661 },
                {name: '广东',value: 604 },
                {name: '河南',value: 493 },
                {name: '湖南',value: 463 },
                {name: '安徽',value: 340 },
                {name: '江西',value: 333 },
                {name: '重庆',value: 262 },
                {name: '江苏',value: 236 },
                {name: '四川',value: 231 },
                {name: '山东',value: 225 },
                {name: '北京',value: 183 },
                {name: '上海',value: 182 },
                {name: '福建',value: 159 },
                {name: '陕西',value: 116 },
                {name: '广西',value: 111 },
                {name: '河北',value: 104 },
                {name: '云南',value: 99 },
                {name: '黑龙江',value: 95 }, 
                {name: '辽宁',value: 64 },
                {name: '海南',value: 63 },
                {name: '山西',value: 56 },
                {name: '天津',value: 48 },
                {name: '甘肃',value: 40 },
                {name: '贵州',value: 38 },
                {name: '宁夏',value: 28 },
                {name: '内蒙古',value: 27 },
                {name: '吉林',value: 23 },
                {name: '新疆',value: 21 },
                {name: '香港',value: 14 },
                {name: '台湾',value: 10 },
                {name: '青海',value: 11 },
                {name: '澳门',value: 8 }, 
                {name: '西藏',value: 1 },
                {name: '南海诸岛',value:0 }
                ];

option = {
   // backgroundColor: "#043270",
    title: {
        text: '分布',
        subtext: '数据来源：官方微博数据统计',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    visualMap: {
        seriesIndex: 0,
        min: 0,
        max: 500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],    
         inRange: {
            color: ['#fff','#ffff33' ,'#bf444c'] // 蓝绿
        },
        calculable: true
    },
    grid: {
        height: 200,
        width: 8,
        right: 80,
        left:80,
        bottom: 10
    },
    xAxis: {
        type: 'category',
        data: [],
        splitNumber: 1,
        show: false
    },
    yAxis: {
        position: 'right',
        min: 0,
        max: 20,
        splitNumber: 20,
        inverse: true,
        axisLabel: {
            show: true
        },
        axisLine: {
            show: false  
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: []
    },
    series: [
        {
            zlevel: 1,
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            roam: true,
            left: 50,
            right: 50,
            label: {
                normal: {
                    show: true,
                    formatter:'{b} : {c} '
                },
                emphasis: {
                    show: true
                }
            },
             itemStyle: {
            normal: {
                borderColor: "rgba(147, 235, 248, 1)",
                borderWidth: 1,
                areaColor: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                            offset: 0,
                            color: "rgba(147, 235, 248, 0)" // 0处的颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(147, 235, 248, .2)" // 100处的颜色
                        }
                    ],
                    globalCoord: false 
                },
                shadowColor: "rgba(128, 217, 248, 1)",
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            //鼠标移入
            emphasis: {
                areaColor: "#389BB7",
                borderWidth: 0
            }
        },
            data:data1
        },
  
    ]
};

