 
var num = 100;
	var dataer=[11, 158, 176, 138, 149, 141,132, 154, 129, 193, 167, 132, 154];
	var dataec=[189, 96, 68, 76, 68, 49, 121,66, 57, 62, 43, 49, 78,];
	var cooarr=[];
 
	for(i in dataer){
		if(dataer[i] - dataec[i]>=num){
			cooarr.push({coord:[parseInt(i),dataer[i]]})
			//当小于某个数的时候，让标示变成黑色
		}else if(dataer[i] - dataec[i]<= -num){
			cooarr.push({coord:[parseInt(i),dataer[i]],itemStyle:{normal:{color:'#000'}}})
		}
	};
	console.log(cooarr)
 
 
option= {
 
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['平均价格','实际价格','采购总金额'],
        y:10
    },
 	   grid: {
    	top:'15%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        data: ['16/01','16/02','16/03','16/04','16/05','16/06','16/07','16/08','16/09','16/10','16/11','16/12','17/01']
    },
    yAxis: {
        type: 'value',
     
    },
    series: [
        {
            name:'平均价格',
            type:'line',
            data:dataer,
            markPoint: {
                data: cooarr
            },
           
        },
        {
        	name:'实际价格',
            type:'line',
            data:dataec,
        },
         {
        	name:'采购总金额',
            type:'bar',
            barWidth:'15%',
            data:[138, 146, 158, 166, 128, 129, 126,121,198, 166, 158, 176, 138,],
         },
         
    ]
};
