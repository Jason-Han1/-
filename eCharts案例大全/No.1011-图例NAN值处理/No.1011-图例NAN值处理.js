
var xdata = ['病假','事假','婚丧假','产假','其他'];

var ydata = [20,30,40,50,10];

var s= 0;
for(var i=0;i<ydata.length;i++){
    s=s+ydata[i];
}
console.log('s',s)
var d=[];
for(var i=0;i<xdata.length;i++){
    d.push({
        name:xdata[i],
        value:ydata[i],
        pt:s == 0 ? 0 : (ydata[i]/s*100).toFixed(1) //三元
        
    });
}


option = {
   /*
    graphic:{
      elements:[
          {
              type:'image',
              style:{
                image:imgUrl,
            
                height:40,
                width:40,
              },
              left:'25%',
              top:65,
          }
              
              
              
          
          
          ]  
    },
    */
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        icon: 'circle',
        x: '50%',
        y: 'center',
        itemWidth: 10,
        itemGap: 30,
        align: 'left',
        textStyle:{
        rich:{
            fontSize: 16,
            color:'#666',
            a:{
                width:45,
                align:'left'
            },
            b:{
                width:60,
                align:'right'
            },
            c:{
                width:35,
                align:'right'
            },
        },
        },
        formatter: function(name) {
            let res = d.filter(v=>v.name === name);
            res = res[0];
            return '{a|'+name+'}{b|'+res.value+'人}  {c|'+res.pt+'%}'
        }
        
    },
    
    color:["#3398FF","#2ADA91","#FFA633","#FFC333","#687AFF"],
    series: [
        {
         
            type: 'pie',
         
            radius: ['40%', '60%'],
            center: ['25%','50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            
            data: d
         
        }
    ]
};
return option;