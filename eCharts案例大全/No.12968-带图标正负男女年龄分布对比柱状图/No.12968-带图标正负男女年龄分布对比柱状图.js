var labelData = ['65岁以上  ','55-64岁  ','45-54岁  ','35-44岁  ','25-34岁  ','15-24岁  ','5-14岁  ','0-4岁  '];
var manData = [50, 28, 80, 65, 68, 60, 35, 52];
var womanData = [-50, -28, -40, -45, -38, -58, -26, -45];
option = {
    backgroundColor:'#fff',
    legend:{
        orient: 'horizontal', // 'vertical'
        x: '36%', // 'center' | 'left' | {number},
        y: 'top', // 'center' | 'bottom' | {number}
        data: [
        {
            name:'女性年龄分布',
            textStyle:{
                fontWeight:'bolder',
                padding: [10, 100, 15, 0]
                // color:'#cccccc'
            },
            icon:'image://data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5' +
                        'rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzcuOTYgNjkuNSI+CiAgPGRlZnM+CiAgICA8c3R5' +
                        'bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlP' +
                        'gogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjUiIHgyPSIwLjUiIHkyPSIxIiBncmFkaWVudF' +
                        'VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAzZWJiNyIvPgogICA' +
                        'gICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGEzN2YiIHN0b3Atb3BhY2l0eT0iMC42OTQiLz4KICAgIDwvbGluZWFy' +
                        'R3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSLnu4RfMjkwOSIgZGF0YS1uYW1lPSLnu4QgMjkwOSIgdHJhbnNmb3JtPSJ0cmFuc' +
                        '2xhdGUoMC4wNjIpIj4KICAgIDxwYXRoIGlkPSLot6/lvoRfMjM3IiBkYXRhLW5hbWU9Iui3r+W+hCAyMzciIGNsYXNzPSJjbHMtMS' +
                        'IgZD0iTTc5LjQzNiwxMC40NjdBMTAuNTE4LDEwLjUxOCwwLDEsMCw2OC45MjUsMjAuOTM0LDEwLjUxMiwxMC41MTIsMCwwLDAsNzk' +
                        'uNDM2LDEwLjQ2N1ptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuOTg2KSIvPgogICAgPHBhdGggaWQ9Iui3r+W+hF8yMzgi' +
                        'IGRhdGEtbmFtZT0i6Lev5b6EIDIzOCIgY2xhc3M9ImNscy0xIiBkPSJNMzcuNzg1LDE3Ni4wODNsLTUuNzU1LTIyLjVhMTMuNDE5L' +
                        'DEzLjQxOSwwLDAsMC0yNi4xODItLjIxN2wtNS44LDIyLjdhMy44MjUsMy44MjUsMCwwLDAsLjY2NywzLjIxOCwzLjc1OCwzLjc1OC' +
                        'wwLDAsMCwyLjkyOCwxLjQ3OXMyLjgyNy4wNTgsNS4wNi4wNzJjLjcyNSwyLjE0NiwxLjc4Myw1LjI5MiwyLjc1NCw4LjM1QTMuNzI' +
                        'xLDMuNzIxLDAsMCwwLDE1LDE5MS43NjloNy44NThhMy42NzcsMy42NzcsMCwwLDAsMy41MDgtMi41NTJjLjk3MS0zLjA1OSwyLjA1' +
                        'OS02LjMwNiwyLjc2OS04LjQ1MiwyLjIzMy0uMDE1LDUuMDYtLjAyOSw1LjA2LS4wMjlhMy43NjYsMy43NjYsMCwwLDAsMi45MjgtM' +
                        'S40NjQsMy42ODUsMy42ODUsMCwwLDAsLjY2Ny0zLjE4OVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMjIuMjY5KSIvPg' +
                        'ogIDwvZz4KPC9zdmc+Cg=='
        },
        {
            name:'男性年龄分布',
            textStyle:{
                fontSize:12,
                fontWeight:'bolder'
            },
            icon: 'image://data:image/svg+xml;base64,PHN2ZyBpZD0i57uEXzI5MDgiIGRhdGEtbmFtZT0i57uEIDI5MDgiIHhtbG5zPSJodHR' +
                        'wOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9' +
                        'IjAgMCAzNi45OTkgNzEuNDgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjb' +
                        'GluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW' +
                        '50IiB4MT0iMC41IiB5MT0iLTAuMzU2IiB4Mj0iMC41IiB5Mj0iMSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgo' +
                        'gICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYmM4ZmMiIHN0b3Atb3BhY2l0eT0iMC43OCIvPgogICAgICA8c3Rv' +
                        'cCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMTg0YjkiIHN0b3Atb3BhY2l0eT0iMC42OTQiLz4KICAgIDwvbGluZWFyR3JhZGllb' +
                        'nQ+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSLot6/lvoRfMjM1IiBkYXRhLW5hbWU9Iui3r+W+hCAyMzUiIGNsYXNzPSJjbHMtMSIgZD' +
                        '0iTTEyLjg5MSwxNDguMzc5QTE4Ljg3NiwxOC44NzYsMCwwLDAsMCwxNjYuNDg2djEyLjkyMWExLjE2NywxLjE2NywwLDAsMCwxLjE' +
                        '1NiwxLjE1Nkg3LjM5NHYxNS42YS45NzQuOTc0LDAsMCwwLC45NzguOTYzSDI4LjYyN2EuOTc0Ljk3NCwwLDAsMCwuOTc4LS45NjN2' +
                        'LTE1LjZoNC44MTZBMi41OCwyLjU4LDAsMCwwLDM3LDE3Ny45ODRWMTY1LjMzYzAtMTEuNjQ3LTEyLjEyMS0yMC43NDUtMjQuMTA4L' +
                        'TE2Ljk1MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEyNS42NDkpIi8+CiAgPHBhdGggaWQ9Iui3r+W+hF8yMzYiIGRhdGEtbm' +
                        'FtZT0i6Lev5b6EIDIzNiIgY2xhc3M9ImNscy0xIiBkPSJNNzMuOCwxMC43QTEwLjc1LDEwLjc1LDAsMSwwLDYzLjA1OCwyMS40LDE' +
                        'wLjc0NCwxMC43NDQsMCwwLDAsNzMuOCwxMC43Wm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NC41NSkiLz4KPC9zdmc+Cg=='
        }
    ]
        
    },
    // tooltip（提示框组件）
    tooltip: {
        //trigger(触发类型)，可选'item','axis','none'
        trigger: 'axis',
        axisPointer: {
            //指示器类型,可选'line','shadow','cross'
            type: 'shadow'
        },
        // 自定义提示内容
        formatter: function(a){
            var v = a[0];
            return v.name + '<br/>' + v.marker +v.seriesName + '：'+ Math.abs(v.value);
        }
    },
    xAxis: [{
        type: 'value',
        min:-100,max:0,
        gridIndex: 0,
        axisTick:{show: false, inside:false},
        axisLabel : {show: false},
        axisLine: {// Y轴轴线样式
            show: false,
            lineStyle:{
                color:'#000', 
            }
        },
        splitLine: {
            show: false
        }
    },{
        type: 'value',
        gridIndex: 1, min:0,max:100,
        axisTick:{show: false}, //是否显示刻度
        axisLine: {// Y轴轴线样式
            show: false, // 是否显示X轴
            lineStyle:{
                color:'#000', 
            }
        },
        axisLabel : {
            show: false //是否显示X轴内容
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
            type: 'category',
            gridIndex: 0,
            inverse: true,
            data: labelData,
            axisTick:{show:false},
            axisLabel : {show:false},
            axisLine: {// Y轴轴线样式
                show: false,
                lineStyle:{
                    color:'#000', 
                }
            }
        },{
            type: 'category',
            gridIndex: 1,
            inverse: true,
            data: labelData,
            axisTick:{show:false},
            axisLabel : {
            },
            axisLine: {
                show: false //是否显示轴线
            }
        }
    ],
    grid: [{
        top: 50,
        width: '40%',
        left: 35,gridIndex: 0,
    }, {
        top: 50,
        left: '50%',gridIndex: 1,
    }],
    color:['#2FACFA','#F5A623'],
    series: [
        {
            name: '女性年龄分布',
            type: 'bar',
            barWidth:'20',
            gridIndex: 0,
            itemStyle:{
                normal: {
                    show: true,
                    color: '#5de3e1',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                    label:{
                        show:true,position:'left',
                        formatter:function(v){
                            return (v.value * -1);
                        }
                    }
                }
            },
            data: womanData
        },
        {
            name: '男性年龄分布',
            type: 'bar',
            barWidth:'20',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle:{
                normal: {
                    show: true,
                    color: '#8A3EEB',
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                    label:{
                        show:true,position:'right',
                        formatter:function(v){
                            return v.value;
                        }
                    }
                }
            },
            data: manData
        }
      
    ]
};