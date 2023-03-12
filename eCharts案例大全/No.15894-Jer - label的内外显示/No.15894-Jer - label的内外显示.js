var xiangmu=['亭口水库建设工程','长武县实验小学建设工程','陕西煤化卫生防护区二期搬迁工程','村级“一事一议”建设工程','尚德昭仁财富广场建设工程','现代国业建设工程','亭口水库建设工程','亭枣公里三台至亭南段二级公路改造工程','牛弘南路拓宽工程',' 亭口水库建设工程'];
option = {
   
    legend: {
        orient : 'vertical',
        x : 'left',
        data:xiangmu
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : [100, 150],
            
            funnelAlign: 'left',
            max: 1048,
           label :{
               normal:{
                   show:true,
                   position:'inner',
                   formatter:'{c}%'
               }
           },
            data:[
                {value:11, name:xiangmu[0]},
                {value:9, name:xiangmu[1]},
                {value:12, name:xiangmu[2]},
                {value:8, name:xiangmu[3]},
                {value:20, name:xiangmu[4]},
                {value:5, name:xiangmu[5]},
                {value:8, name:xiangmu[6]},
                {value:5, name:xiangmu[7]},
                {value:12, name:xiangmu[8]},
                {value:10, name:xiangmu[9]}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius : [150, 150],
          
            funnelAlign: 'left',
            max: 1048,
             itemStyle : {
                normal : {
                    label : {
                        position : 'outer'
                    },
                    labelLine : {
                        show : true
                    }
                }
            },
            data:[
                {value:11, name:xiangmu[0]},
                {value:9, name:xiangmu[1]},
                {value:12, name:xiangmu[2]},
                {value:8, name:xiangmu[3]},
                {value:20, name:xiangmu[4]},
                {value:5, name:xiangmu[5]},
                {value:8, name:xiangmu[6]},
                {value:5, name:xiangmu[7]},
                {value:12, name:xiangmu[8]},
                {value:10, name:xiangmu[9]}
            ]
        }
    ]
};
