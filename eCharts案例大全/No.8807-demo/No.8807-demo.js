   var colors = ['#9b92fe', '#29c18f', '#1f62ea', '#1990e9', '#49ddfc', '#6bdafe', '#39f381', '#e9e37c'];
    // option
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
    
        legend: {
            bottom: '2%',
            left:"10%",
            data: ['全部','正常完成', '延期完成', '正常进行中' ]
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '45%'],
                  center:['40%','50%'],
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                color: colors,
                data: [
                    {
                        value: 335,
                        name: '正常完成'
                    },
                    {
                        value: 679,
                        name: '延期完成'
                    },
                    {
                        value: 1548,
                        name: '正常进行中'
                    }
            ]
        },
          
          {
            name:'全部',
            type:'pie',
            color:["#b552ce"],
            radius: ['56%', '65%'],
             center:['40%','50%'],
             label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            data:[
                {value:335},
              
            ]
        }, 
    ]
    };