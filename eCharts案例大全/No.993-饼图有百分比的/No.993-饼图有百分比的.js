option = {
    backgroundColor:'#00000000',
   
    color: ['#797AFF', '#507AFF', '#51D9A2', '#FFC371'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
       
    },
    //   legend: {
    //     type:"scroll",
    //     orient: 'vertical',
    //     left:'10%',
    //     align:'left',
    //     top:'middle',
    //     textStyle: {
    //         color:'#8C8C8C',
    //         fontSize: 12
    //     },
        
    // },
      legend: {
        icon: "circle",
        orient: 'horizontal',
        // x: 'left',
      //  right: 300,
        bottom: 200,
        align: 'right',
        textStyle: {
            color: "#fff"
        },
        itemGap: 20
    },
    series : [
        {
            
            name:'业务警种',
            type:'pie',
            radius: ['0%', '28%'],
            label:{
                fontSize: 14
            },
                   label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
            
             labelLine: {
                length: 30,
                length2: 50,
                show: true,
                color: '#00ffff'
            },

            data:[
                {value:20, name:'1-3年'},
                {value:60, name:'3-5年'},
                {value:25, name:'5-8年'},
                {value:25, name:'8年以上'},
         
            ]
        }
    ]
};
