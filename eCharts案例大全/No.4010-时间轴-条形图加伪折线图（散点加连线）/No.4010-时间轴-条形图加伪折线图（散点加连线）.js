var data = generateData();
var links = data.valueData5.map(function (item, i) {
    return {
        source: i,
        target: i + 1
    };
});
links.pop();
var option = {
    tooltip: {
        trigger:'item',axisPointer:{type:'shadow'},
        textStyle:{align:'left'},transitionDuration:0,
        formatter: function (params, ticket, callback) {
            var seriesName = params.seriesName;
            var ter = '';
            if (seriesName=='线路拜访') {
                ter = data.valueData1[params.dataIndex].title+"<br/>得分：";
            }
            if (seriesName=='线外拜访') {
                ter = data.valueData2[params.dataIndex].title+"<br/>得分：";
            }
            if (seriesName=='线路新增') {
                ter = data.valueData3[params.dataIndex].title+"<br/>得分：";
            }
            if (seriesName=='订单金额') {
                ter = data.valueData4[params.dataIndex].title+"<br/>成交金额：";
            }
            if (seriesName=='订单金额') {
                ter = data.valueData5[params.dataIndex].title+"<br/>成交金额：";
            }
            return params.seriesName+"<br/>"
                +ter+params.value+"<br/>"+params.name;
        }
    },
    grid: [{top:'30',bottom: '15%',right:'50',left:'55'}, 
           {top: '85%',bottom:'50',right:'50',left:'55'}
    ],
    dataZoom: [{type: 'slider', startValue: 465, endValue: 1260, zoomLock:'true',brushSelect:false}],       
    xAxis:[{type: 'category', data: data.categoryData,
           	axisLabel:{fontWeight:"bold",fontSize:10,interval:59}, axisTick:{interval:15}}
    ],
    yAxis:[{max:data.maxAmount,axisLine:{show:true},name: '订单金额',
            axisLabel:{
                	formatter: function (value, index) {
                	    if (value>999999){
                	        value = value+""; return value.substring(0, 6)+"\n"+value.substring(6)
                	    } else return value; 
                	},fontSize:10
                },
            },
           {max:data.maxScore,name: '分数',
            axisLabel:{fontSize:10},axisLine:{show:true}},
        {inverse: true, max:10,axisLabel:{fontSize:10 },axisLine:{show:false},interval:10}
    ],
    //legend:{},
    series: [{
        type: 'bar',
        name: "线路拜访",
        data: data.valueData1,barGap: '-100%',barWidth: "100%",
        itemStyle:{
            color:"#003366"
        }
    },{
        type: 'bar',
        name: "线外拜访",
        data: data.valueData2,barGap: '-100%',barWidth: "100%",
        itemStyle:{
            color:"#006699"
        }
    },{
        type: 'bar',
        name: "线路新增",
        data: data.valueData3,barGap: '-100%',barWidth: "100%",
        itemStyle:{
            color:"#4cabce"
        }
    },
    {   name: '得分',
        symbolSize: 5,
         //type: 'scatter',
        yAxisIndex: 1,
        data: data.valueData5,
        type: 'graph',
        links: links,
        lineStyle: {
            color:'#E43961',
            width: 2,
        },
        label: {
            show: false
        },
        coordinateSystem:'cartesian2d',
        zlevel:999999,
        itemStyle:{
            color:"#E43961"
        }
    }
    ,{
        type: 'bar',yAxisIndex: 2,
        name: "任务",
        data: data.valueData4,barGap: '-100%',barWidth: "100%",
        itemStyle:{
            color:"#4cabce"
        }
    }
    ]
};

function generateData() {
    var time = +new Date(2020, 10, 17);

    var categoryData = [];
	var valueData1 = [];
	var valueData2 = [];
	var valueData3 = [];
	var valueData4 = [];
	var valueData5 = [];
    var maxS = 100;
    var maxA = 1100;
    var minA = Math.floor(maxA*0.11);

    for (var i = 0; i <= 1440; i++) {
        categoryData.push(echarts.format.formatTime('hh:mm', time));
		if (i>=495 && i<500){
			valueData1.push({value:556,title:"门店1<br>工时30",type:"1"});
		}else {
			valueData1.push({value:0,title:""});
		}
		if (i>=510 && i<520){
			valueData2.push({value:681,title:"门店2<br>工时35",type:"1"});
		}else{
			valueData2.push({value:0,title:""});
		}
		if (i>=930 && i<=933) {
			valueData3.push({value:742,title:"门店3<br>工时35",type:"1"});
		}else{
			valueData3.push({value:0,title:""});
		}
		if (i>=495 && i<500) {
			valueData4.push({value:10,title:"门店1",type:"1"});
		}
		else{
			valueData4.push({value:0,title:"",type:"0"});
		}
		if (i==931 || i==953 || i==1013 || i==1133
		    || i==431 || i==453 || i==513 || i==533
		    || i==631 || i==653 || i==713 || i==733
		    || i==831 || i==853 ){
		    valueData5.push([echarts.format.formatTime('hh:mm', time),Math.floor(Math.random()*100)]);
		}
        time += 60000;
    }
	
    return {
        categoryData: categoryData,
        valueData1: valueData1,
        valueData2: valueData2,
        valueData3: valueData3,
        valueData4: valueData4,
        valueData5: valueData5,
        maxAmount:maxA,
        maxScore:maxS
    };
}