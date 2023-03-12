option ={
     backgroundColor : '#ccc',
    title : {
       
        text: '  优良率',
        subtext: `64%`,
        subtextStyle: {
            fontSize : 20,
            padding: 20,
            color: 'white'
        },
        x: '25%',
        y: '40%',
        textStyle: {
            fontWeight: 'normal',
            color: '#B2DDFF',
            fontSize: 12
        }
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: '0%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle : {
            color : 'white',
            padding: 13
        },
        data: ['I-II类 20%','I-II类 40%','I-II类 30%','I-II类 10%','I-II类 60%']
    },
    color : ['#3AA7F9','#F56C7C','#FD9A36','#EBE028','#31CE65','#20DACD','#D671F5','#F430E8','#8A31FB'],
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : ['70%','90%'],
            center: ['33%', '50%'],
            data:[
                {value:335, name:'I-II类 20%'},
                {value:310, name:'I-II类 40%'},
                {value:234, name:'I-II类 30%'},
                {value:135, name:'I-II类 10%'},
                {value:1548, name:'I-II类 60%'}
            ],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                }
            },
        }
    ]
};