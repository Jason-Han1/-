var value = {
    "xAxis": ["1月", "2月", "3月"],
    //"xAxis1": ["长沙市\n2019", "长沙市\n2018", "株洲市\n2019", "株洲市\n2018", "湘潭市\n2019", "湘潭市\n2018", "长沙市\n2019", "长沙市\n2018", "株洲市\n2019", "株洲市\n2018", "湘潭市\n2019", "湘潭市\n2018", "长沙市\n2019", "长沙市\n2018", "株洲市\n2019", "株洲市\n2018", "湘潭市\n2019", "湘潭市\n2018", "长沙市\n2019", "长沙市\n2018", "株洲市\n2019", "株洲市\n2018", "湘潭市\n2019", "湘潭市\n2018"],
    "xAxis2": ["长沙市", "株洲市", "湘潭市", "长沙市", "株洲市", "湘潭市", "长沙市", "株洲市", "湘潭市"],

    "legend": ["优", "良", "轻度", "中度", "中度", "重度"],
    "series": [{
            "name": "优",
            "barWidth": 20,
            "type": "bar",
            "barGap": "0.5",
            "stack": "2019",
            "xAxisIndex": "1",
            "data": ["0", "7", "0", "7", "0", "6", "0", "2", "5"],
            "label": {
                show: true,
                position: 'bottom',
                offset: [5, 0],
                formatter: '2019',
                color: '#666'
            }
        }, {
            "name": "良",
            "barWidth": 20,
            "type": "bar",
            //    "barGap": "0.5",
            "stack": "2019",
            "xAxisIndex": "1",
            "data": ["4", "10", "2", "10", "2", "8", "0"]
        }, {
            "name": "轻度",
            "barWidth": 20,
            "type": "bar",
            //    "barGap": "0.5",
            "stack": "2019",
            "xAxisIndex": "1",
            "data": ["13", "9", "0", "11", "0", "12", "6"]
        }, {
            "name": "中度",
            "barWidth": 20,
            "type": "bar",
            //    "barGap": "0.5",
            "stack": "2019",
            "xAxisIndex": "1",
            "data": ["0", "5", "2", "3", "0", "5", "3", "3", "0"]
        }, {
            "name": "重度",
            "barWidth": 20,
            "type": "bar",
            //    "barGap": "0.5",
            "stack": "2019",
            "xAxisIndex": "1",
            "data": ["0", "0", "10", "0", "10", "0", "4", "1"]

        }, {
            "name": "严重",
            "barWidth": 20,
            "type": "bar",
            //   "barGap": "0.5",
            "stack": "2019",
            "xAxisIndex": "1",
            "data": ["0", "0", "0", "0", "0", "0", "0", "0"]
        },
        
        {
            "name": "优",
            "barWidth": 20,
            "type": "bar",
            // "barGap": "0.5",
            "stack": "2018",
            "xAxisIndex": "1",
            "data": ["10", "7", "0", "7", "0", "6", "0", "2", "0"],
            "label": {
                show: true,
                position: 'bottom',
                offset: [-5, 0],
                formatter: '2018',
                color: '#666'
            }
        }, {
            "name": "良",
            "barWidth": 20,
            "type": "bar",
            //  "barGap": "0.5",
            "stack": "2018",
            "xAxisIndex": "1",
            "data": ["4", "10", "12", "10", "2", "8", "0", "12"]
        }, {
            "name": "轻度",
            "barWidth": 20,
            "type": "bar",
            //  "barGap": "0",
            "stack": "2018",
            "xAxisIndex": "1",
            "data": ["13", "9", "0", "11", "0", "12", "16", "6"]
        }, {
            "name": "中度",
            "barWidth": 20,
            "type": "bar",
            //  "barGap": "0",
            "stack": "2018",
            "xAxisIndex": "1",
            "data": ["0", "5", "2", "3", "0", "5", "3", "3"]
        }, {
            "name": "重度",
            "barWidth": 20,
            "type": "bar",
            //   "barGap": "0",
            "stack": "2018",
            "xAxisIndex": "1",
            "data": ["0", "0", "10", "0", "10", "0", "4"]
        }, {
            "name": "严重",
            "barWidth": 20,
            "type": "bar",
            //  "barGap": "0",
            "stack": "2018",
            "xAxisIndex": "1",
            "data": ["10", "0", "0", "0", "0", "10", "0", '0',"5"]

        }



    ]
};
option = {
    color: ['#33CC00', '#4F88F8', '#FFCC00', '#FF6600', '#CC0000', '#660077'],
    title: {
        text: "各地市预报等级分布图 ",
        x: 'left',
        textStyle: {
            "fontSize": 14
        }
    },
    legend: {
        data: ['优', '良', '轻度', '中度', '重度', '严重'],
    },
    tooltip: {

    },
    grid: {
        x2: 40,
        y2: 60,
        x: 50,
        y: 40
    },
    // toolbox: echartsUtil.def.toolbox,
    yAxis: {
        type: 'value',
    },
    xAxis: [{
        type: 'category',
        data: value.xAxis,
        offset: 30,
        axisLabel: {
            textStyle: {
                color: 'black',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
        },
        axisTick: {
            length: 30
        }
    }, {
        type: 'category',
        data: value.xAxis2,
        position: 'bottom',
        axisLabel:{
            padding: [10, 0]
        }
    }],
    calculable: true,
    series: value.series
}