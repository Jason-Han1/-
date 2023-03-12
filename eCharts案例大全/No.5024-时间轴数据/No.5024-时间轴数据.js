var data = generateData();

var option = {
    //title: {text: 'Data',left: 10},
    toolbox: {
        feature: {
            dataZoom: {yAxisIndex: false},
            saveAsImage: {pixelRatio: 2}
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'shadow'},
    },
    grid:  [
        {bottom: '40%'},
        {top: '60%'}
    ],
    dataZoom: [{
        type: 'inside',
        xAxisIndex: [0,1],
        start: 28,
        end: 95,
    }, {
        type: 'slider',
        xAxisIndex: [0,1],
        start: 28,
        end: 95,
    }],
    color: ["#003366", "#006699", "#4cabce", "#e5323e"],
    dataset:[{
        source: [
            data.categoryData,
            data.valueData1,
            data.valueData2,
            data.valueData3,
        ]
    }, {
        source:[
            data.categoryData,
            data.valueData4,
        ]
    }],
    xAxis:[
        {type: 'category', gridIndex: 0, zlevel:9999,
         axisLabel:{
             formatter: function (value, index) {
                 var ssp = value.split(":");
                return ssp[0]+":"+ssp[1];
            }
         }
        },
        {type: 'category', gridIndex: 1,show:false}
    ],
    yAxis:[
        {gridIndex: 0},
        {gridIndex: 1,inverse: true,}
    ],
    legend:{
    },
    series: [{
        type: 'bar',
        seriesLayoutBy: "row",
        large: true
    },{
        type: 'bar',
        seriesLayoutBy: "row",
        large: true,
    },{
        type: 'bar',
        seriesLayoutBy: "row",
        large: true
    },{
        type: 'bar',
        seriesLayoutBy: "row",
        xAxisIndex: 1, yAxisIndex: 1,datasetIndex: 1,
        large: true,
    }]
};

function generateData() {
    var time = +new Date(2020, 10, 17);

    var categoryData = ["type"];
	var valueData1 = ["线路拜访"];
	var valueData2 = ["线外拜访"];
	var valueData3 = ["线路新增"];
	var valueData4 = ["订单数据"];

    for (var i = 0; i <= 86400; i++) {
        categoryData.push(echarts.format.formatTime('hh:mm:ss', time));
		if (i>=28800 && i<30600){
			valueData1.push(56);
		}else {
			valueData1.push(0);
		}
		if (i>=29700 && i<33300){
			valueData2.push(81);
		}else{
			valueData2.push(0);
		}
		if (i>54000 && i<57605) {
			valueData3.push(42);
		}else{
			valueData3.push(0);
		}
		if ((i>=28800 && i<30600)
		    ||(i>=29700 && i<33300) ) {
			valueData4.push(4251);
		}else if (i>54000 && i<57605){
		    valueData4.push(100);
		}else{
			valueData4.push(0);
		}
        time += 1000;
    }
	
    return {
        categoryData: categoryData,
        valueData1: valueData1,
        valueData2: valueData2,
        valueData3: valueData3,
        valueData4: valueData4,
    };
}