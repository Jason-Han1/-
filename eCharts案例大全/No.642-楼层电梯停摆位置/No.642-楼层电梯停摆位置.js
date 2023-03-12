var data = [
    {name:"1#电梯",floorCount:6,nowFloor:4,type:0},//0停在某一楼层，1上行，2下行,还没做
    {name:"2#电梯",floorCount:7,nowFloor:1,type:1},
    {name:"3#电梯",floorCount:6,nowFloor:6,type:0},
    {name:"4#电梯",floorCount:6,nowFloor:4,type:2},
    {name:"5#电梯",floorCount:5,nowFloor:3,type:1}
];

function setSeries(){
    var series = [],xData = [],MaxCount = 0;
    for(let i = 0;i<data.length;i++){
        xData.push(data[i]["name"]);
        if(data[i]["floorCount"] > MaxCount) MaxCount = data[i]["floorCount"];
    }
    
    for(let i = 1; i <= MaxCount;i++){
        let bar = {
            data: [],
            type: 'bar',
            color: 'rgba(7, 7, 7, 1)',
            /*barGap: '-100%',//重叠*/
            stack: 'one', //堆叠
            barWidth: 50
        };
        let bar2 = {
            type: 'bar',
            stack: 'one', //堆叠
            color: 'rgba(125, 125, 125, 0)',
            barWidth: 50,
            data: []
        };
        for(let j=0;j<data.length;j++){
            if(i <= data[j].floorCount){
                
                bar.data.push(
                    {   value : 7,
                        itemStyle: {
                            borderColor: 'rgba(150, 150, 150, .3)',
                            borderWidth: '20',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                                    offset: 0,
                                    color: i!=data[j]["nowFloor"] ?"#087cf9":"#f51207"
                                },
                                {
                                    offset: 1,
                                    color: i!=data[j]["nowFloor"] ?"#09408a":"#e2746e"
                                }
                            ])
                        },
                        label: {
                            color: '#fff',
                            show: true,
                            position: 'inside',
                            formatter: i+'F'
            
                        }
                    }
                );
                bar2.data.push(2);
            }else{
                bar.data.push(null);
                bar2.data.push(null);
            }
            
        }
        series.push(bar);
        series.push(bar2);
        
    }
    var option = {
        backgroundColor: '#021228',//'#0494fc',
        title: {
            text: '',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#fff'
            }
        },
        tooltip: {
            show: false
        },
        grid: {
            top: 100,
            left: 10,
            right: 10,
            bottom: 100
        },
    
    
        xAxis: {
    
            data:xData,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                },
                show:false
            },
            axisLabel: {
                show:true,
                fontSize:14
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
        },
        series: series
    };
    
    myChart.setOption(option);
};

setSeries();

setInterval(function() {
	for(let i=0;i<data.length;i++){
		if(data[i].type === 1){
			if(data[i].nowFloor < data[i].floorCount){
				data[i].nowFloor++;
			}else{
				data[i].type = 2;
			}
		}
		else if(data[i].type === 2){
			if(data[i].nowFloor > 1){
				data[i].nowFloor--;
			}else{
				data[i].type = 1;
			}
		}
	}
	setSeries();
},2000);