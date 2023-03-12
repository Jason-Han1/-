option = {
    backgroundColor:"#000",
    tooltip: {
        "show": true,
        "trigger": "item",
    },
    
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                //backgroundColor: '#999',
                borderRadius: 3,
                padding: [-10, -10]
            }
        },
        axisLine: {
                lineStyle: {
                    color: '#1968a0',
                    width: 1,
                    type: 'solid'
                },
            },

            splitArea: {
                areaStyle: {

                    color: ['#0a1044', '#0f2a5e']
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#19669d', '#19669d', '#19669d', '#19669d'],
                    width: 1
                }
            },
        indicator: [{
                    text: '家庭聚会',
                    max:1500
                }, {
                    text: '商务就餐',
                    max: 1500
                }, {
                    text: '日常就餐',
                    max: 1500
                }, {
                    text: '同学聚会',
                    max: 1500
                }, {
                    text: '朋友聚会',
                    max: 1500
                }, {
                    text: '情侣约会',
                    max: 1500
                }]
    },
    series: [{
        name: '就餐场合',
        type: 'radar',
        symbol: "circle",
        symbolSize: 3,
        areaStyle: {
                    normal: {
                        color: 'rgba(40,203,228,0.3)'
                    },
                },
        itemStyle: {
            color: 'rgba(40,202,206,1)',
            borderColor: 'rgba(40,202,206,.5)',
            borderWidth: 5,
        },
        
        data: [
                {
                    value: ["1200", "1000", "800", "1270", "1365", "1350"],
                    name: '就餐场合'
                }],
       
    }]
};