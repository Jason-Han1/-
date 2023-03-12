function getDateTimeStamp(dateStr){
		return Date.parse(dateStr.replace(/-/gi,"/"));
	}

var nodeArray = [
			{
				title: "开始",
				description: "开始1",
				assignDate: "2017-10-22"
			},
			{
				title: "提交",
				description: "提交2",
				assignDate: "2017-10-27"
			},
			{
				title: "评审",
				description: "评审3",
				assignDate: "2017-11-02"
			},
			{
				title: "结束",
				description: "结束4",
				assignDate: "2017-12-30"
			}
		];
		
nodeArray.sort(function(a, b){
			return getDateTimeStamp(a.assignDate) - getDateTimeStamp(b.assignDate);
        });

var nArrayMaxIndex = nodeArray.length - 1;
    xMin = 	getDateTimeStamp(nodeArray[0].assignDate),	
    xMax = 	getDateTimeStamp(nodeArray[nArrayMaxIndex].assignDate),
    d = new Date(),
    today = getDateTimeStamp(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate());
    markPointOpt = [];

nodeArray.forEach(function(v,i){
    var sv = getDateTimeStamp(v.assignDate),
        //ic = sv > today ? "#fff" : "#7b9d6f",
        ic = sv > today || sv < today ? "#fff" : "#7b9d6f",
        bc = sv > today ? "#dfdfdf" : "#7b9d6f",
        p = i > 0 && i < nArrayMaxIndex ? "top" : "bottom";
    markPointOpt.push({
        name: v.assignDate,
        coord: [sv, 0, v.title],
        value: sv,
        symbol: "circle",
        symbolSize: 12,
        itemStyle:{
            normal:{
                color: ic,
                borderColor: bc,
                borderWidth: 2
            },
            emphasis:{
                color: ic,
                borderColor: bc,
                borderWidth: 2
            }
        },
        label:{
            normal:{
                position: p,
                formatter: function(params){
                    if(p == "bottom"){
                        return ['{b|'+params.name+'}', '{a|'+params.data.coord[2]+'}'].join('\n'); 
                    }else{
                        return ['{b|'+params.data.coord[2]+'}','{a|'+params.name+'}'].join('\n');
                    }
                },
                rich: {
                    a: {
                        align: "center",
                        padding: [0, 0, 5],
                        color: "#383838",
                    },
                    b: {
                        align: "center",
                        color: "#383838",
                    }
                }
            }
        }
    })
})

var markLineOpt = {
    lineStyle: {
        normal: {
            color: "#7b9d6f",
            width: 2,
            type: 'solid'
        }
    },
    silent: true,
    data: [[{
        coord: [xMin, 0],
        symbol: 'none'
    }, {
        coord: [today, 0],
        symbol: 'none'
    }]]
};

var option = {
    tooltip: {
        show: false
    },
    grid:{
        height: '5%'
    },
    xAxis: {
        axisLine:{
            lineStyle:{
                color:"#dfdfdf",
                width: 2
            }
        },
        axisTick:{
            show: false
        },
        axisLabel:{
            show: false
        },
        splitLine: {
            show: false
        },
        min: xMin, 
        max: xMax
    },
    yAxis: {
        show: false,
    },
    series: [
        {
            name: 'I',
            type: 'scatter',
            data: [],
            markLine: markLineOpt,
            markPoint: {
                data: markPointOpt
            }
        }
    ]
};