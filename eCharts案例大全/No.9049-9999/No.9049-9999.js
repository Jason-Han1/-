
option = {
    color: ['#3398DB'],
    grid: {
        bottom: '8%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: {
        text: '9999'
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: false
        },
        "axisLabel": {
            "interval": 0,
            "show": true,
            "splitNumber": 15,
            "textStyle": {
                "fontFamily": "微软雅黑",
                "fontSize": 12
            }
        },
        data: [ "1", "2", "3", "4", "5", "6", "7", "8"]
    }, {
        position: 'bottom',
        offset: 80,
        axisLine: {
            onZero: false,
            show: false
        },
        axisTick: {
            length: 80,
            inside: true,
            alignWithLabel: false,
            interval: (a, b)=> {
                console.log(a,b)
                if(b==='1'  ||b==='3' || b==='4'){
                    return true
                }else{
                    return false
                }
                
            },
            lineStyle: {
                color: '#f00',
                fontSize: '14px'
            }
        },
        axisLabel: {
            inside: true,
          
        },
         data: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }],
    yAxis: [{
        type: 'value',
        //title: '9999'
    }],
    series: [{
            type: 'bar',
            barWidth: '60%',
            data: [108, 107, 82, 18, 17, 13, 44, 20, 19, 20, 19, 15, 46, 28, 22, 85, 48, 42, 96, 71, 35, 12, 6, 3, 83, 69, 57, 46, 43, 35, 20, 8, 6, 107, 100, 66],

            
        },
        {
            type: 'line',
            barWidth: '60%',
            symbol: 'circle',

            itemStyle: {
                color: 'red'
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: "red",
                        fontSize: 15
                    }
                }
            },
            data: [108, 107, 82, 18, 17, 13, 44, 20, 19, 20, 19, 15, 46, 28, 22, 85, 48, 42, 96, 71, 35, 12, 6, 3, 83, 69, 57, 46, 43, 35, 20, 8, 6, 107, 100, 66],

        }
    ]
};