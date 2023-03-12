option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '4.4节','8.0节','10节', '14节'
            ],
        },
        
        
        
        title: {
            subtext: '测试数据'
        },
        tooltip: {
        },
        legend: {
            left: 'right',
            data: ['0°浪向', '45°浪向', '90°浪向', '135°浪向', '180°浪向'],
            selected: {
                '135°浪向': false, '180°浪向': false
            }
        },
        // calculable : true,
        grid: {
            top: 80,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    // label: {
                    //     show: true,
                    //     formatter: function (params) {
                    //         return params.value.replace('\n', '');
                    //     }
                    // }
                }
            }
        },
        xAxis: [
            {   
                'name': '浪周期(s)',
                'type':'value',
                'axisLabel':{'interval':'aotu'},
                'data':[
                    10,12,13,14,15,16,17,18,19
                ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '轴功率（kw）'
            }
        ],
        series: [
            {name: '0°浪向', type: 'line'},
            {name: '45°浪向', type: 'line'},
            {name: '90°浪向', type: 'line'},
            {name: '135°浪向', type: 'line'},
            {name: '180°浪向', type: 'line'},
        ]
    },
    options: [
        {
            title: {text: '压载对水航速4.4节,不同浪向下浪周期轴功率'},
            series : [
                {data: [[1,2],[2,5],[3,5], [14,6],[15,7]]}, //0°浪周期-轴功率
                {data: [[1,4],[2,5],[3,7], [4,9],[5,17]]},
                {data: [[1,3],[2,2],[3,6], [4,16],[5,20]]},
                {data: [[1,1],[2,10],[3,4], [4,18],[5,21]]},
                {data: [[1,12],[2,6],[3,19], [4,25],[5,17]]},
            ]
        },
        {
            title : {text: '压载对水航速8.0节,不同浪向下浪周期轴功率'},
            series : [
                {data: [[1,2],[2,5],[3,5], [34,6],[25,7]]},
                {data: [[1,4],[2,5],[3,7], [4,9],[5,17]]},
                {data: [[1,3],[2,2],[3,6], [4,16],[5,20]]},
                {data: [[1,1],[2,10],[3,4], [4,18],[5,21]]},
                {data: [[1,12],[2,6],[3,19], [4,25],[5,17]]},
            ]
        },
        {
            title : {text: '压载对水航速10.0节,不同浪向下浪周期轴功率'},
            series : [
                {data: [[1,2],[2,5],[3,5], [4,6],[15,7]]},
                {data: [[1,4],[2,5],[3,7], [4,9],[5,17]]},
                {data: [[1,3],[2,2],[3,6], [4,16],[5,20]]},
                {data: [[1,1],[2,10],[3,4], [4,18],[5,21]]},
                {data: [[1,12],[2,6],[3,19], [4,25],[5,17]]},
            ]
        },
        {
            title : {text: '压载对水航速14.0节,不同浪向下浪周期轴功率'},
            series : [
                {data: [[1,2],[2,5],[3,5], [4,6],[5,7]]},
                {data: [[1,4],[2,5],[3,7], [4,9],[5,17]]},
                {data: [[1,3],[2,2],[3,6], [4,16],[5,20]]},
                {data: [[1,1],[2,10],[3,4], [4,18],[5,21]]},
                {data: [[1,12],[2,6],[3,19], [4,25],[5,17]]},
            ]
        },

    ]
};



console.log(JSON.stringify(option));
