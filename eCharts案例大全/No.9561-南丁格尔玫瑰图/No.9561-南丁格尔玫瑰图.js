option = {
    color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],

  
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    legend: {
         orient: 'vertical',
         top: "middle",
         right: "5%",
         textStyle: {
             color: '#f2f2f2',
             

         },
         icon: 'roundRect',
         data: ['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8'],
     },
  
    calculable : true,
    series : [
        
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 120],
            //center : ['75%', '50%'],
            roseType : 'area',
            label: {
                 normal: {
                     show: true,
                     formatter: "{d}%",
                     textStyle: {
                        
                     },
                     position: 'outside'
                 },
                 emphasis: {
                     show: true
                 }
             },
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
            ]
        }
    ]
};
