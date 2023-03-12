
const date = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
const data1=[32,56,141,248,343,425,337,80]
const data2=[333.2,76.7,185.7,756.2,791.1,785.2,2349.3,163.4]

option = {
    backgroundColor: '#15253b',
    color:[],
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "top": 150,
        "left": 40,
        "right": -40,
        "bottom": 30,
        "containLabel": true
    },
    "legend": {
        data:['投资频数','投资金额(亿人民币)'],
        "top": 10,
        "right": 0,
        "textStyle": {
            "color": "#ffffffb3",
            "fontSize": 14
        },
        "type": "scroll",
        "pageIconColor": "#aaa",
        "pageIconInactiveColor": "#2f4554",
        "pageTextStyle": {
            "color": "#fff"
        }
    },
    "color": ["#73D9FF", "#FF7C7C", "#FEF1AB", "#f3a633", "#d5392e", "#ADC6FF"],
    "xAxis": {
        "type": "category",
        "data": date,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#a1aaff80"
            }
        },
        "axisLabel": {
            "color": "#ffffff99"
        }
    },
    "yAxis": [{
        "type": "value",
        min:0,
        max:600,
        "splitLine": {
            "lineStyle": {
                "color": "#ffffff1a"
            }
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "color": "#ffffff99"
        }
    },{
        type:'value',
        min:-10000,
        max:3000,
        show:false,
    }],
    "series": [
        {
            type:'bar',
            name:'投资频数',
            yAxisIndex:0,
            data:data1,
            barMaxWidth: 14,
        },
        {
            type:'line',
            name:'投资金额(亿人民币)',
            smooth:'true',
            yAxisIndex:1,
            data:data2
        }],
    "animationEasing": "quinticInOut"
}