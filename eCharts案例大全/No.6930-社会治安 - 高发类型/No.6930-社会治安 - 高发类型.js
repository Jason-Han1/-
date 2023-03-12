option = {
        title: {
          text: '高发类型',
          x:'center',
          y: '60%',
          textStyle: {
           fontSize: 20,
           color: '#333',
           fontWeight: 'bold',
          }
        },
        color: ['#10BFEB','#A71BEB','#11E081','#F82666','#E5B124','#1856F3'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show : true,
        },
        series : [
            {
                name:'高发类型',
                type:'pie',
                radius : [0, 90],
                center: ["50%", "45%"], 　
                labelLine: {    //图形外文字线
                    normal: {
                        length: 30,
                        length2: 50
                    }
                },
                label: {
                    normal: {
                        formatter: ' {d}%  \n  {b}  \n\n'
                    }
                },
                data:[
                    {value:20, name:'国宝'},
                    {value:30, name:'治安'},
                    {value:25, name:'新闻'},
                    {value:25, name:'措施'},
                    {value:20, name:'方法'},
                    {value:35, name:'行为'},
                ]
            }
        ]
};