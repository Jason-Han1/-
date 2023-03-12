var dateList = ["06/23 09:43:12", "06/23 09:43:23", "06/23 09:47:12", "06/23 09:47:24", "06/23 09:51:12", "06/23 09:51:24", "06/23 09:55:12", "06/23 09:55:24", "06/23 09:59:12", "06/23 09:59:24", "06/23 10:03:12", "06/23 10:03:24", "06/23 10:07:12", "06/23 10:07:24", "06/23 10:11:12", "06/23 10:11:24", "06/23 10:15:12", "06/23 10:15:24", "06/23 10:19:12", "06/23 10:19:24", "06/23 10:23:12", "06/23 10:23:24", "06/23 10:27:11", "06/23 10:27:24", "06/23 10:31:12", "06/23 10:31:24", "06/23 10:35:12", "06/23 10:35:24", "06/23 10:39:12", "06/23 10:39:24", "06/23 10:40:00"]



option = {
    grid: [
        {left: '5%', top: '3%',  height: '14%'},
        {left: '5%', bottom: '16%',  height: '68%', borderWidth: 2},
    ],
    title: [{
        left: 'center',
    }, {
        show:false,
        top: '55%',
        left: 'center',
        text: 'Gradient along the x axis'
    }],
    tooltip: {
        trigger: 'axis',
        show: true,
        axisPointer: {
            show: false
        }
    },
    legend: {
        top: '2%',
        right: '5%',
        selectedMode: false,
        formatter: val => console.log(val),
        data: ['在床', '离床', 
        {name: '心率', icon: '', lineStyle: { width: 4, color: '#fff'  }, itemStyle: {borderWidth: 1}}, '体温', '呼吸']
    },
    xAxis: [{
        gridIndex: 0,
        boundaryGap: false,
        show: false,
        max: 3602,
        // scale: true,
        type: 'value'
    }, {
        show: true,
        data: dateList,
        boundaryGap: false,
        gridIndex: 1,
        axisLabel: {
            align: 'left',
        },
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
        splitLine: {
            show: true,
			lineStyle: {
				type: 'dashed',
				color: '#E5EBFF',
				width: 2 
			}
        },
    }],
    yAxis: [{
        data: [''],
        show:false,
        type: 'category',
        gridIndex: 0,
		axisLine: {
			show: false
		},
    }, {
        show: true,
        gridIndex: 1,
        splitLine: {
			show: true,
			lineStyle: {
				type: 'dashed',
				color: '#E5EBFF',
				width: 2
			}
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: true,
			length: 7,
			color: '#E5EBFF',
			lineStyle: {
				color: '#E5EBFF',
				width: 2
			}
		},
    }, {
        show: true,
        gridIndex: 1,
        splitLine: {
			show: true,
			lineStyle: {
				type: 'dashed',
				color: '#E5EBFF',
				width: 2
			}
		},
		axisLine: {
			show: false
		},
		axisTick: {
			show: true,
			length: 7,
			color: '#E5EBFF',
			lineStyle: {
				color: '#E5EBFF',
				width: 2
			}
		},
    }],
    series:[
        {
            name: '体温',
            type: 'line',
            data: [11, 203, 40, 107],
            xAxisIndex: 1,
            yAxisIndex: 2,
            symbol: 'none',
            showSymbol: false,
            smooth: true,
            smoothConstraint: true,
            smoothMonotone: 'x'
        },
        {
            name: '呼吸',
            type: 'line',
            data: [9, 103, 20, 57],
            xAxisIndex: 1,
            yAxisIndex: 1,
            showSymbol: false,
            smooth: true,
            symbol: 'none',
            smoothConstraint: true,
            smoothMonotone: 'x'
        },
        
        {
            name: '心率',
            type: 'line',
            data: [20, 83, 200, 157],
            xAxisIndex: 1,
            yAxisIndex: 1,
            showSymbol: false,
            smooth: true,
            symbol: 'none',
            smoothConstraint: true,
            smoothMonotone: 'x'
        },
    {
        name: '离床',
        "type":"bar",
        "barWidth":30,
        silent: true,
        "stack":"all",
        showSymbol: false,
        "itemStyle":{
            "color":"#E99392"
        },
        "data":[
            13
        ],
        gridIndex: 0
    },
    {
         name: '在床',
         legendHoverLink: false,
         showSymbol: false,
        "type":"bar",
        "barWidth":30,
        selectedMode: false,
        select: {
            label: {
                
            },
          itemStyle: {
              color: "#f66"
          }  
        },
        "stack":"all",
        "itemStyle":{
            "color":"#E5EBFF"
        },
        "data":[
            227
        ],
        gridIndex: 0
    },
    {
        name: '离床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E99392"
        },
        "data":[
            12
        ],
        gridIndex: 0
    },
    {
        name: '在床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E5EBFF"
        },
        "data":[
            240
        ],
        gridIndex: 0
    },
    {
         name: '离床',
         showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E99392"
        },
        "data":[
            11
        ],
        gridIndex: 0
    },
    {
        name: '在床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E5EBFF"
        },
        "data":[
            229
        ],
        gridIndex: 0
    },
    {
        name: '离床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E99392"
        },
        "data":[
            12
        ],
        gridIndex: 0
    },
    {
        name: '在床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E5EBFF"
        },
        "data":[
            228
        ],
        gridIndex: 0
    },
    {
        name: '离床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E99392"
        },
        "data":[
            12
        ],
        gridIndex: 0
    },
    {
         name: '在床',
         showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E5EBFF"
        },
        "data":[
            228
        ],
        gridIndex: 0
    },
    {
        name: '离床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E99392"
        },
        "data":[
            12
        ],
        gridIndex: 0
    },
    {
        name: '在床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E5EBFF"
        },
        "data":[
            228
        ],
        gridIndex: 0
    },
    {
        name: '离床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E99392"
        },
        "data":[
            12
        ],
        gridIndex: 0
    },
    {
        name: '在床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E5EBFF"
        },
        "data":[
            13
        ],
         gridIndex: 0
    },
    {
        name: '离床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E99392"
        },
        "data":[
            228
        ],
        gridIndex: 0
    },
    {
        name: '在床',
        showSymbol: false,
        "type":"bar",
        "barWidth":30,
        "stack":"all",
        "itemStyle":{
            "color":"#E5EBFF"
        },
        "data":[
            216
        ],
        gridIndex: 0
    }
]
};