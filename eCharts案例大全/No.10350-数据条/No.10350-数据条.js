let max = 300,
    value = 100;

option = {
    backgroundColor: 'black', //背景必须与symbal颜色一样
    "xAxis": {
        type: 'value',
        "max": max,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": [{
        "type": "category",
        "inverse": false,
        "data": [],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            show:false,
          

        }
    }],
    "series": [{ //内
            type: 'bar',
            barWidth: 41,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function(e) {
                        return (e.value / max * 100).toFixed(2) + "%"
                    }
                }
            },
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                color: {
                  
                    colorStops: [{
                        offset: 0,
                        color: '#3c6384' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#4f8381' // 100% 处的颜色
                    }],
                  
                } //底色
            },
            data: [value]
        },
        { //框
            type: 'bar',
            barWidth: 41,
            barGap: '-100%',
            label: {
                normal: {
                    show: false,

                    position: 'right',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#363636', //底色
                   
                }
            },
            data: [max],
            z: 1,
        },
       
    ]
};