option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['2017', '2018'],
        left:'right',
        textStyle:{
            color:'#666',
            fontSize:12
        }
    },
    grid : {
        left : '10%',
        top : '12%',
        bottom : '15%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#666'
            }
        },
        axisTick: { //刻度值线
            show: true
        },
        splitLine: { //网格线
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#4488BB',
                width: 3 // 粗细
            }
        },
    },
    yAxis: {
        type: 'value',
        name: '(万KW)',
        axisLabel: {
            color: '#666'
        },
        axisTick: { //刻度值线
             show: false
        },
        splitLine: { //网格线
             show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#4488BB',
                width: 3 // 粗细
            }
        },
        splitArea: {
			show: true,
			areaStyle: {
				color: ["#EAEBEC", "#FFF"]
			}
		}
    },
    series: [
        {
            name:2017,
            smooth:true, //平滑
            symbol:'none',
            type:'line',
            data:[100,33,1,1,32,1,1,3,1,1,3,1]
        },
        {
            name:2018,
            smooth:true, 
            symbol:'none',
            type:'line',
            data:[2, 42,1,1,32,1,2, 4,1,111,3,1]
        }
    ],
    color:["#9F9FA0","#FE0404"]
};