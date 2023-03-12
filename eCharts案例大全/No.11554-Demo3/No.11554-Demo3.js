option   = {
        title: {
            text: '优创长文指标(PC)'
        },
        color:["#2B2B2B","#FF4500","#436EEE","#2E8B57"],
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        dataZoom:[
            {
                show:true,
                realtime:true,
                start:0,
                end:100,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '30%',
                handleStyle: {
                    color: '#80cbc4'
                },
                fillerColor:'#d8faf4',
                borderColor:"#b1b1b1"
            }
        ],
        toolbox: {
            show:true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        legend: {
            data:['优创长文uv','优创长文人均时长','热门长文uv均值','热门长文人均时长均值']
        },
        xAxis : [
            {
                type : 'category',
                splitLine : {
                    show : true,
                    interval:6,
                    lineStyle:{
                        type: 'dotted'
                    }

                },
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine : {
                    show : false
                },
                name:'uv',
                scale: true,
                position: 'left',
                offset: 0
            },
            {
                type : 'value',
                splitLine : {
                    show : false
                },
                name:'人均时长',
                scale: true,
                position: 'right',
                offset: 0
            },
            {
                type : 'value',
                splitLine : {
                    show : false
                },
                name:'uv均值',
                scale: true,
                position: 'left',
                offset: 80
            },
            {
                type : 'value',
                splitLine : {
                    show : false
                },
                name:'人均时长均值',
                scale: true,
                position: 'right',
                offset: 80
            }
        ],
        series : [
            {
                "name":"优创长文uv",
                "type":"line",
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 0,
                "data":[120, 132, 101, 134, 90, 230, 210]
            },
            {
                "name":'优创长文人均时长',
                "type":"line",
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 1,
                "data":[150, 232, 201, 154, 190, 330, 810]
            },
            {
                "name":'热门长文uv均值',
                "type":"line",
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 2,
                "data":[820, 932, 901, 934, 1290, 1330, 1320]
            },
            {
                "name":'热门长文人均时长均值',
                "type":"line",
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                yAxisIndex: 3,
                "data":[320, 332, 301, 334, 390, 330, 320]
            }
        ]
    };

