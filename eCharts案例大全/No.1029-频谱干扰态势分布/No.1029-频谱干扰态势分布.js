/** 
 * 
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 双折线图
 * 
 */
var xLabel = [1]
var goToSchool = [2]
for(var i = 900; i < 3100; i++){
    xLabel.push(i);
    goToSchool.push([i,Math.random() * 10 -23]);
     if(i%5===0){
        goToSchool.push([i,Math.random() * 12 -27]);
    }
    if(i%10===0){
        goToSchool.push([i,Math.random() * 12 -22]);
    }
    if(i==1561){
        goToSchool.push([i,25.8]);
    }
    if(i==1268){
        goToSchool.push([i,15.4]);
    }
}



option = {
    title: {
        text: '频谱干扰态势分布',
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
        name:'频率 / MHz',
        nameLocation: 'middle',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: 20,
            padding:50,
            fontWeight:'bolder'
        },
        type: 'value',

        min:920,
        max:3080,

         maxInterval:1,
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#7ec7ff',
                padding: 16,
                fontSize: 14,
                fontWeight:'bolder'
            },
            formatter: function(value) {
                 if (parseInt(value) % 100 === 0) {
                    return value
                }
                //return value
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#192a44'
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
            show: true,
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
            borderWidth: 2

        },
        tooltip: {
            show: true
        },

        data: goToSchool
    }]
};

