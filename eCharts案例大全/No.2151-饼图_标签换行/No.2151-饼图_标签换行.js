option = {
    color:['#1caafe', '#fd845c', '#16ffc6', '#11ffff'],
    series: [{
            name: '核查赔付情况',
            type: 'pie',
            radius: ['58%', '70%'],
            label:{
                show:true,
                position:'outside',
                formatter:'{aa|{b}}\n{bb|{c}/{d}%}',
                color:'auto',
                padding: [0, -120],
                rich:{
                    aa:{
                        height:60,
                        align:"left",                     
                        fontSize:35, 
                        verticalAlign:'middle',  
                        fontFamily:'Agency FB',       
                    },
                    bb:{
                        height:60,
                        align:"left",                        
                        fontSize:45,
                        verticalAlign:'middle',
                        fontFamily:'Agency FB'
                    }
                }
            },
            labelLine:{
                show:true,
                length:15,
                length2:180,
                lineStyle:{
                    width:2
                }
            },
            data: [
                {value:150,name:'待核查'},
                {value:150,name:'已核查'},
                {value:150,name:'待赔付'},
                {value:150,name:'已赔付'}
            ]
        }
    ]
}
