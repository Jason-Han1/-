option = {
    backgroundColor:'#fff',
    series: [{
        type: 'liquidFill',
        radius: '30%',
        center: ['30%', '30%'],
        data: [0.12, 0.1, 0.05],
        label: {
	       normal: {
	           show: true,
	           textStyle: {
	               color: '#294D99',
	               insideColor: '#fff',
	               fontSize: 50,
	               fontWeight: 'bold',
                   align: 'center',
                   baseline: 'middle'
               },
	           position: 'inside',
	           formatter:function(v){
	               var reverData = (1-v.value)*100;
	               return ''+reverData+'';
	           }
	        }
	    },
	    backgroundStyle: {
	        color: '#fff',
	        borderColor: '#4FA8F9',
            borderWidth: 5,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
	    },
        outline: {show: false},
    },{
        type: 'liquidFill',
        radius: '30%',
        center: ['70%', '30%'],
        data: [0.18, 0.13, 0.08],
        label: {
	       normal: {
	           show: true,
	           textStyle: {
	               color: '#294D99',
	               insideColor: '#fff',
	               fontSize: 50,
	               fontWeight: 'bold',
                   align: 'center',
                   baseline: 'middle'
               },
	           position: 'inside',
	           formatter:function(v){
	               var reverData = (1-v.value)*100;
	               return ''+reverData+'';
	           }
	        }
	    },
	    backgroundStyle: {
	        color: '#fff',
	        borderColor: '#4FA8F9',
            borderWidth: 5,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
	    },
        outline: {show: false},
    },{
        type: 'liquidFill',
        radius: '30%',
        center: ['15%', '75%'],
        data: [0.27, 0.2, 0.1],
        label: {
	       normal: {
	           show: true,
	           textStyle: {
	               color: '#294D99',
	               insideColor: '#fff',
	               fontSize: 50,
	               fontWeight: 'bold',
                   align: 'center',
                   baseline: 'middle'
               },
	           position: 'inside',
	           formatter:function(v){
	               var reverData = (1-v.value)*100;
	               return ''+reverData+'';
	           }
	        }
	    },
	    backgroundStyle: {
	        color: '#fff',
	        borderColor: '#4FA8F9',
            borderWidth: 5,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
	    },
        outline: {show: false},
    },{
        type: 'liquidFill',
        radius: '30%',
        center: ['50%', '75%'],
        data: [0.33, 0.2, 0.1],
        label: {
	       normal: {
	           show: true,
	           textStyle: {
	               color: '#294D99',
	               insideColor: '#fff',
	               fontSize: 50,
	               fontWeight: 'bold',
                   align: 'center',
                   baseline: 'middle'
               },
	           position: 'inside',
	           formatter:function(v){
	               var reverData = (1-v.value)*100;
	               return ''+reverData+'';
	           }
	        }
	    },
	    backgroundStyle: {
	        color: '#fff',
	        borderColor: '#4FA8F9',
            borderWidth: 5,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
	    },
        outline: {show: false},
    },{
        type: 'liquidFill',
        radius: '30%',
        center: ['85%', '75%'],
        data: [0.54, 0.4, 0.3],
        label: {
	       normal: {
	           show: true,
	           textStyle: {
	               color: '#294D99',
	               insideColor: '#fff',
	               fontSize: 50,
	               fontWeight: 'bold',
                   align: 'center',
                   baseline: 'middle'
               },
	           position: 'inside',
	           formatter:function(v){
	               var reverData = (1-v.value)*100;
	               return ''+reverData+'';
	           }
	        }
	    },
	    backgroundStyle: {
	        color: '#fff',
	        borderColor: '#4FA8F9',
            borderWidth: 5,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
	    },
        outline: {show: false},
    }]
};