app.title = '嵌套环形图';
let data = [{value:8, name:'直达'},
                {value: 28, name:'其他'},
                
      
            ]
option = {
   
    backgroundColor: '#fff',
    graphic:[{
        type:'text',
        left:'45%',
        top:'45%',
        style:{
            text:'8',
            fill:'#0299f1',
            fontSize:65
        }
    },
    {
        type:'text',
        left:'50%',
        top:'48%',
        style:{
            text:'/36',
            fill:'#e4e4e4',
            fontSize:30
        }
    },
    {
        type:'text',
        left:'center',
        top:'55%',
        style:{
            text:'课程次数',
            fill:'#e4e4e4',
             font: 'normal 18px "Microsoft YaHei", sans-serif'
        }
    }],
    tooltip: {
        formatter: "{a}：<br/>{b}: {c}人"
    },
             
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['25%', '30%'],
            color: ['#ff6633', '#e4e4e4'],
         
            
            itemStyle: {
                
            },
            label: {
               normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data:data
        },
        {
            name:'',
            type:'pie',
            hoverAnimation: true,
            silent: true,
            radius: [0, '30%'],
            color: ['#f15a24'],
            label:{ 
                show: false,
                formatter: '24/36\n \n 课程次数',
                color: '#30b7ef',
                position: 'center',
                fontSize:24,
              
                rich: {
                    pre: {
                        fontSize: 30,
                        color: '#333'
                    }
                }
            },
           
        },
    ]
};