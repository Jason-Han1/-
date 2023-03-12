var option = {
    backgroundColor:'white',
    series: [{
        type: 'liquidFill',
        name: 'Multi-Data',
        radius:'60%',
        shape:"path://M18.98 5.7c-.24-2.36-2.24-4.2-4.66-4.2-1.95 0-3.6 1.18-4.32 2.87-.7-1.7-2.37-2.87-4.32-2.87-2.42 0-4.42 1.84-4.66 4.2L1 6.18c0 5.7 6.98 8.38 9 12.17 2.02-3.8 9-6.48 9-12.17 0-.16 0-.32-.02-.48z",
        data: [0.1],  //datat
        
        outline: {
            show: false,
            },  
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        
        label:{

            normal:{
                position:['50%','40%'],
                formatter:  '已经完成: {c}',
                textStyle:{
                    fontSize:30,
                    
                }
            }
        }
    }]
};
