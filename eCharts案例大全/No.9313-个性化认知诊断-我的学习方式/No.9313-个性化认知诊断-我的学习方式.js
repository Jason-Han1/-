var xxsjData = [
          {
            "name": "非公党建",
            "value": 10
          },
          {
            "name": "公共党建",
            "value": 21
          }
        ];
        option = {
            title:{
                text:'党组织建制',
                textStyle:{
                    fontSize:28,
                    fontFamily:"FZST",
                    color:'#fff'
                },
                left:'center',
            },
            legend: {
                orient: 'vertical',
                data: xxsjData,
                left:'center',
                top:'bottom',
                selectedMode: false
            },
            color: ['#dd5649', '#e7b84f', '#56ab2f','#4a9df5'],
            series: [{
                hoverAnimation:false,
                tooltip:{},
                name: '',
                type: 'pie',
                radius: ['25%', '55%'],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: function (data) { return data.percent.toFixed(0) + "%"; },
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        }
                    },
                    
                },
                data: xxsjData,
            }]
        };