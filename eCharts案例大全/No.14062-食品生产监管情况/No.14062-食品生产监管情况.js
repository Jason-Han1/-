options=[{
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品经营情况',
        subtext: '事项办理类型发展趋势'
    },
    tooltip: {
        trigger: 'axis'
    }, 
    legend: {
        data:['新办']
    },
    grid: {
        left: '3%',
        right: '5%',
        top:'22%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
       name: '办理事项数',
        type: 'value',
        splitLine: {show: false},
        min: 0,
        max: 10000,
        interval: 2000,
    },
    series: [
         {
            name:'新办',
             color: ['#d82c26'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:5,//折线宽度
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#fbfa96' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#f72806' // 100% 处的颜色
                    }], false),
                    opacity: 0.4
                }
            },
            
            data:[4600, 3700, 2400, 4004, 1200, 3002, 6000, 3002, 801, 4088, 1203, 3321]
          
        }
       
    ]
},{
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品经营情况',
        subtext: '事项办理类型发展趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['变更']
    },
    grid: {
        left: '3%',
        right: '5%',
        top:'22%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
       name: '办理事项数',
        type: 'value',
        splitLine: {show: false},
        min: 0,
        max: 10000,
        interval: 2000,
    },
    series: [
        {
            name:'变更',
            
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:5,//折线宽度
                    },
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#0eb92e' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#f0e242' // 100% 处的颜色
                    }], false),
                    opacity: 0.4
                }
            },
            
            data:[1600, 1000, 800, 400,7500,600,1003,1006,5008,6002,1006,3006]
           
        }
    ]
},{
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品经营情况',
        subtext: '事项办理类型发展趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['延续']
    },
    grid: {
        left: '3%',
        right: '5%',
        top:'22%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
       name: '办理事项数',
        type: 'value',
        splitLine: {show: false},
        min: 0,
        max: 10000,
        interval: 2000,
    },
    series: [
        {
            name:'延续',
             color: ['#1ac52e'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:5,//折线宽度
                    },
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 1,
                    color: '#2bc5f2' // 0% 处的颜色
                }, {
                    offset: 0,
                    color: '#1ec23d' // 100% 处的颜色
                }], false),
                opacity: 0.4
                }
            },
            data:[600, 700, 2100, 4000, 2008, 4300,878, 5612, 6564, 3774, 2413, 1021]
          
        }
        
    ]
},{
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品经营情况',
        subtext: '事项办理类型发展趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['注销']
    },
    grid: {
        left: '3%',
        right: '5%',
        top:'22%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
       name: '办理事项数',
        type: 'value',
        splitLine: {show: false},
        min: 0,
        max: 10000,
        interval: 2000,
    },
    series: [
        {
            name:'注销',
            color: ['#337ae4'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:5,//折线宽度
                    },
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 1,
                    color: '#f22be6' // 0% 处的颜色
                }, {
                    offset: 0,
                    color: '#2ba9f2' // 100% 处的颜色
                }], false),
                opacity: 0.4
                }
            },
            data:[1200, 500, 8006, 4777,4878,3122,1003,600,5808,1002,3076,6005]
           
        }
        
    ]
}]