var labelRight = {
    normal: {
        position: 'right'
    }
};
option = {
    title: {
        text: '交错正负轴标签',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (obj) {
            if(obj[0].value == 1){
                str = '异常'
            } else if(obj[0].value == -1) {
                str = '正常'
            }
            str = obj[0].name + '：<br>' + str
            return str;
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type : 'category',
        axisLine:{
            lineStyle:{
                color:"#619bc1",
                width:3,
                type:"solid"
            }
        },
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
        data : ['7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时']
    },
    yAxis: {
        min: -2,
        max: 2,
        nameLocation: 'end',
        type : 'value',
        position: 'left',
        axisLabel: {
            show: true,
            interval: 5,
            formatter: function (value, index) {
                var str = '';
                if(value == 2){
                    str = '异常'
                } else if(value == -2) {
                    str = '正常'
                }
                return str;
            }
            
        },
        axisTick: {show: false},
        splitLine: {show: false},
    },
    series : [
        {
            name:'状态',
            type:'bar',
            stack: '总量',
            label: {
                show: false,
                normal: {
                    show: true,
                    formatter: function (obj) {
                        var str = '';
                        if(obj.value == 1){
                            str = '异常'
                        } else if(obj.value == -1) {
                            str = '正常'
                        }
                        return str;
                    }
                }
            },
            data:[{value: -1, itemStyle: {color: 'green'}},-1,1,-1,-1,1,1,1,1,-1]
        }
    ]
};
