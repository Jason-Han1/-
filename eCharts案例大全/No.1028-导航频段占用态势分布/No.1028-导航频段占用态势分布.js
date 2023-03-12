/** 
 * 
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 双折线图
 * 
 */
var xLabel = [1]
var goToSchool = [2]
for(var i = 900; i < 3100; i+=0.2){
    xLabel.push(i);
    goToSchool.push([i,Math.random() * 10 -23]);
     if(parseInt(i)%5===0){
        goToSchool.push([i,Math.random() * 12 -27]);
    }
    if(parseInt(i)%10===0){
        goToSchool.push([i,Math.random() * 12 -22]);
    }
    if(parseInt(i)==1561){
        goToSchool.push([i,15.8]);
    }
    if(parseInt(i)==1268){
        goToSchool.push([i,27.4]);
    }

}



option = {
    title: {
        text: '导航频段占用态势分布',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 25,
        },
        top: '5%',
        left: 'center',
    },
    backgroundColor: '#0e1c47',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'transparent',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(126,199,255,0)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(126,199,255,1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(126,199,255,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },
        
    },
    legend: {
        align: "left",
        right: '10%',
        top:'10%',
        type:'plain',
        textStyle:{
            color:'#7ec7ff',
            fontSize:16
        },
        // icon:'rect',
        itemGap:25,
        itemWidth:18,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
            {
                name: '上学'
            },
            {
                name: '放学'
            }
        ]
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '2%',
        bottom: '55%',
        // containLabel: true
    },
    xAxis: [{
        show:true,
        name:'频率（频段） / MHz',
        nameLocation: 'middle',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: 20,
            padding:70,
            fontWeight:'bolder'
        },
        type: 'value',

        min:1150,
        max:1630,

        maxInterval:1,
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#7ec7ff',
                padding: 16,
                fontSize: 14,
                fontWeight:'bolder'
            },
            formatter: function(value) {
                 if (parseInt(value)  == 1561) {
                    return "1561\r\n\r\nB1I"
                }
                if (parseInt(value)  == 1207) {
                    return "1207\r\n\r\nB2I\r\nE5b"
                }
                if (parseInt(value)  == 1268) {
                    return "1268\r\n\r\nB3I"
                }
                if (parseInt(value)  == 1575) {
                    return "1575\r\n\r\nB1C\r\nL1\r\nE1"
                }
                if (parseInt(value)  == 1227) {
                    return "1227\r\n\r\nL2"
                }
                if (parseInt(value)  == 1176) {
                    return "1176\r\n\r\nB2a\r\nL5\r\nE5a"
                }
                if (parseInt(value)  == 1602) {
                    return "1602\r\n\r\nG1"
                }
                if (parseInt(value)  == 1246) {
                    return "1246\r\n\r\nG2"
                }
                //return value
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#fff'
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: xLabel
    }],
    yAxis: [{
        name: '功率谱密度 / (dBm/Hz)',
        nameLocation: 'middle',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: 20,
            padding:50,
            fontWeight:'bolder'
        },
        min: -30,
       // max:30,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#192a44'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#233653"
            }

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#7ec7ff',
                padding: 16,
                fontSize: 14,
                fontWeight:'bolder'
            },
            formatter: function(value) {
                if (value === 0) {
                    return value
                }
                return value
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '',
        type: 'line',
        symbol: 'none', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: false,
        symbolSize: 0,
        smooth: false,
        lineStyle: {
            normal: {
                width: 1,
                color: "rgba(25,163,223,1)", // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "rgba(25,163,223,1)",
            borderColor: "#646ace",
            borderWidth: 0

        },
        label:{show:false},
        labelLine:{show:false},
        tooltip: {
            show: true
        },

        data: goToSchool
    }]
};

