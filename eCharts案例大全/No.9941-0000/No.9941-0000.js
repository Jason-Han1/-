const data = {
    '种子/天使轮': [18, 26, 56, 104, 137, 108, 61, 12],
    'PreA/A/A+轮': [8, 13, 58, 95, 139, 202, 157, 42],
    'PreB/B/B+轮': [3, 10, 13, 27, 39, 64, 50, 20],
    'C/C+轮': [1, 4, 7, 7, 10, 20, 32, 3],
    'D-IPO轮': [2, 2, 4, 8, 2, 5, 13, 1],
    '战略投资': [0, 1, 3, 7, 16, 26, 23, 2],
}

const date = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
let da = [];
date.forEach((_,i) => {
   const sum = Object.keys(data).map(v=>data[v][i]).reduce((s,i)=>s+=i,0)
   da.push(sum)
})

option = {
    backgroundColor: '#15253b',
    color:[],
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "top": 10,
        "left": 10,
        "right": 10,
        "bottom": 10,
        "containLabel": true
    },
    "legend": {
        "data": Object.keys(data).map(v => ({
            name: v,
            icon: 'rect'
        })),
        "itemWidth": 12,
        "itemHeight": 12,
        "top": 10,
        "right": 0,
        "textStyle": {
            "color": "#ffffffb3",
            "fontSize": 15
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
    "yAxis": {
        "type": "value",
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
    },
    "series": Object.keys(data).map(v => {
        return {
            type: 'bar',
            data: data[v].map((j,i) => {
                return j/da[i]
            }),
            "barMaxWidth": 14,
            "stack": "one",
            "name": v
        }
    }),
    "animationEasing": "quinticInOut"
}