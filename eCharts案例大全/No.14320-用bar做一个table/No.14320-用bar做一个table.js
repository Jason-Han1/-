  var bargap='80%';
    var tablehead= function (value, index) {
        if(value==500){
            return  '品名    ' ;
        }else if(value==1000){
            return  '特性    ' ;
        }else if(value==1500){
            return '类别    ' ;
        }else if(value==2000){
            return '数量    ' ;
        }else if(value==2500){
            return '供应商    ' ;
        }
    };
    var tablerowname=['二氧化硫','环氧乙烷','溴甲烷','二氧化硫','环氧乙烷','溴甲烷','溴甲烷','氨','二氟化氧','二氧化氮','氟','光气','环氧乙烷','甲醛' ];
    var itemColor=  {
        normal: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(14,125,218,0.8)'
                }, {
                    offset: 1, color: 'rgba(14,125,218,0.3)'
                }],
                globalCoord: false
            }
        }
    };
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        dataZoom: [
            {
                type: 'slider',
                show: true,
                yAxisIndex: [0],
                left: '93%',
                startValue: 1,
                endValue : 5,
                zoomLock:true
            }
        ],
        xAxis:  {
            axisLabel:{
                align:'right',
                formatter:tablehead
            },
            axisTick:{show:false},
            position: 'top',
            type: 'value'
        },
        yAxis: {
            axisLine:{show:false},
            axisTick:{show:false},
            type: 'category',
            data: tablerowname
        },
        series: [
            {
                name: '品名',
                type: 'bar',
                stack: '总量',
                barGap : bargap,
                label: {
                    normal: {
                        show: true
                    }
                },
                data: [500, 500, 500, 500, 500, 500, 500,500, 500, 500, 500, 500, 500, 500],
                animationDelay: function (idx) {
                    return idx * 10;
                },
                itemStyle:itemColor
            },
            {
                name: '特性',
                type: 'bar',
                stack: '总量',
                barGap : bargap,
                label: {
                    normal: {
                        show: true
                    }
                },
                data:  [500, 500, 500, 500, 500, 500, 500,500, 500, 500, 500, 500, 500, 500],
                animationDelay: function (idx) {
                    return idx * 10;
                },
                itemStyle:itemColor
            },
            {
                name: '类别',
                type: 'bar',
                stack: '总量',
                barGap : bargap,
                label: {
                    normal: {
                        show: true
                    }
                },
                data:  [500, 500, 500, 500, 500, 500, 500,500, 500, 500, 500, 500, 500, 500],
                animationDelay: function (idx) {
                    return idx * 10;
                },
                itemStyle:itemColor
            },
            {
                name: '数量',
                type: 'bar',
                stack: '总量',
                barGap : bargap,
                label: {
                    normal: {
                        show: true
                    }
                },
                data:  [500, 500, 500, 500, 500, 500, 500,500, 500, 500, 500, 500, 500, 500],
                animationDelay: function (idx) {
                    return idx * 10;
                },
                itemStyle:itemColor
            },
            {
                name: '供应商',
                type: 'bar',
                stack: '总量',
                barGap : bargap,
                label: {
                    normal: {
                        show: true
                    }
                },
                data:  [500, 500, 500, 500, 500, 500, 500,500, 500, 500, 500, 500, 500, 500],
                animationDelay: function (idx) {
                    return idx * 10;
                },
                itemStyle:itemColor
            }
        ]
    };