option = {
    title: {
        text: '',
        top: '12%',
        left: '28%',
        textStyle: {fontSize: 22}
    },
    singleAxis: {
        type: 'category',
        bottom: '50%',
        top: '50%',
        right: '30%',
        data: ['中关村科学城'],
        axisLabel: {fontSize: 16, fontWeight: 'bold'},
        axisLine: {show: false},
        axisTick: {show: false}
    },
    legend: {
        show: false,
        left: '28%',
        top: '17%',
        textStyle: {fontSize: 14},
        itemWidth: 20,
        itemHeight: 20
    },
    series: [{
        type: 'scatter',
        name: '常住人口密度',
        coordinateSystem: 'singleAxis',
        data: [43460],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.2
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.7, color: '#61a0a8'},
        label: {
            show: true,
            position: 'outside',
            offset:[160,60],
            formatter: function(param){
                return "——————————————"+param.value+"人/平方公里";
            }
        },
        labelLine: {    //引导线设置
             normal: {
                  show: true,   //引导线显示
             }
         }
    },{
        type: 'scatter',
        name: '工作人口密度',
        coordinateSystem: 'singleAxis',
        data: [18471],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.3
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.8, color: '#d48265'},
        label: {
            show: true,
            position: 'outside',
            offset:[160,60],
            formatter: function(param){
                return "——————————————"+param.value+"人/平方公里";
            }
        },
        labelLine: {    //引导线设置
             normal: {
                  show: true,   //引导线显示
                  lineStyle:{
                     color:'#d48265',
                  },
                  smooth: 0.2,
                  length: this.standSize / 50,
                  length2: this.standSize / 100,
                  
             },
         }
    },{
        type: 'scatter',
        name: '工作人口密度',
        coordinateSystem: 'singleAxis',
        data: [4840],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.3
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.8, color: '#d45265'},
        label: {
            show: true,
            position: 'outside',
            offset:[160,60],
            formatter: function(param){
                return "——————————————"+param.value+"人/平方公里";
            }
        },
        labelLine: {    //引导线设置
             normal: {
                  show: true,   //引导线显示
             }
         }
    }]
};