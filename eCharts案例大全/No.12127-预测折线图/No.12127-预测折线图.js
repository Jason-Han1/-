let timeList = [
    '0:00',
    '2:00',
    '4:00',
    '6:00',
    '8:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
    '24:00',
];

let source = timeList.map((time,index) => {

    const data = {
        time: time,
        perdictCount:null,
        count: +(Math.random() * 10).toFixed(0)
    }
    if(index == 7){
                data.perdictCount = data.count -2; 

    } else if(index>7){
        data.perdictCount = data.count -2; 
        data.count = null;
    }
    return data;
})
console.log(source)
// let dataset = {
//     dimensions: ['time', 'count','perdictCount'],
//     source: source
// }
    const dataset= {
        "dimensions": ["time", "realCount", "predictCount"],
        "source": [{
            "time": "7:00",
            "realCount": 0,
            "predictCount": null
        }, {
            "time": "8:00",
            "realCount": 9,
            "predictCount": null
        }, {
            "time": "9:00",
            "realCount": 9,
            "predictCount": null
        }, {
            "time": "10:00",
            "realCount": 3,
            "predictCount": null
        }, {
            "time": "11:00",
            "realCount": 7,
            "predictCount": null
        }, {
            "time": "12:00",
            "realCount": 9,
            "predictCount": null
        }, {
            "time": "13:00",
            "realCount": 4,
            "predictCount": null
        }, {
            "time": "14:00",
            "realCount": 5,
            "predictCount": null
        }, {
            "time": "15:00",
            "realCount": 9,
            "predictCount": null
        }, {
            "time": "16:00",
            "realCount": 4,
            "predictCount": null
        }, {
            "time": "17:00",
            "realCount": 7,
            "predictCount": 6
        },
        {
            "time": "18:00",
            "realCount": null,
            "predictCount": 6
        }]
    };
option = {

    backgroundColor: "rgba(4,7,30,0.70)",

    legend: {},
    tooltip: {
        trigger: "axis"
    },
    dataset: dataset,
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: 'rgba(255,255,255,0.8)'
        }
    },
    yAxis: {
        axisLine:{
            show:false,
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        lineStyle: {
            color: 'rgba(0,136,212, 1)'

        },
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        itemStyle:{
          color:  'rgba(0,136,212, 1)',
        },
    },
    {
        type: 'line',
        symbol: 'circle',
        smooth:true,
        symbolSize: 5,
        lineStyle:{
            normal:{
                type:'dashed'
            }
        },
        showSymbol: false,
        itemStyle:{
          color:  'rgba(0,136,212, 1)',
        },
        // data:realCounts,
    }
    ]
};