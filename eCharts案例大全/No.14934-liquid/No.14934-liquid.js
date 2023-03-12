option = {
				    series: [{
				        type: 'liquidFill',
				        shape: 'pin',
				        data: [0.0],
				        color: ['yellow'],
				        
				        //amplitude: 0,
				        backgroundStyle: {
				        	borderWidth: 1,
				        	borderColor: 'lightgray',
				        	color: 'white'
				        },
				        outline: {
				        	show: false
				        },
				        itemStyle: {
				        	normal:{
				        		opacity: 0.7
				        	},
				        	emphasis: {
				        		opacity: 0.7
				        	}
				        },
				        label: {
				            normal: {
				            	fontSize: 15,
				                color: 'lightgray'
				            }
				        }
				    }]
				};
				
var id = setInterval((function(){
    var data = 0;
    return function(){
        data = data + 1;
        myChart.setOption({
            series: [{data:[data / 10]}]
        });
        if(data == 10){
			clearInterval(id);
		}
    }
    
}()), 1000);
