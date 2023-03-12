function formatTimeSFMForEchart(shijianchuo){  //时间戳转换为字符串精确到秒 13位
    var date = new Date(shijianchuo);
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (hours >= 0 && hours <= 9) {
      hours = "0" + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
      minutes = "0" + minutes;
    }
    if (second >= 0 && second <= 9) {
      second = "0" + second;
    }
    var currentdate = hours + seperator2 + minutes
    return currentdate;
 }
 
yData=[
  {
    "name": "清醒",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577366870,
          },
          {
            "xAxis": 1577367550,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#ff931e",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "离床",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577367550,
          },
          {
            "xAxis": 1577367800,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#747474",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "清醒",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577367800,
          },
          {
            "xAxis": 1577368990,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#ff931e",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N1",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577368990,
          },
          {
            "xAxis": 1577369290,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1c8fbf",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "清醒",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577369290,
          },
          {
            "xAxis": 1577369590,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#ff931e",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N1",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577369590,
          },
          {
            "xAxis": 1577369890,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1c8fbf",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577369890,
          },
          {
            "xAxis": 1577370790,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577370790,
          },
          {
            "xAxis": 1577371390,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N3",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577371390,
          },
          {
            "xAxis": 1577372590,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#004a7b",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577372590,
          },
          {
            "xAxis": 1577373190,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N3",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577373190,
          },
          {
            "xAxis": 1577373790,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#004a7b",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577373790,
          },
          {
            "xAxis": 1577374090,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577374090,
          },
          {
            "xAxis": 1577375890,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N1",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577375890,
          },
          {
            "xAxis": 1577376190,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1c8fbf",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N3",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577376190,
          },
          {
            "xAxis": 1577376790,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#004a7b",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577376790,
          },
          {
            "xAxis": 1577378590,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N3",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577378590,
          },
          {
            "xAxis": 1577379790,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#004a7b",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577379790,
          },
          {
            "xAxis": 1577380090,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577380090,
          },
          {
            "xAxis": 1577381290,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N1",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577381290,
          },
          {
            "xAxis": 1577381590,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1c8fbf",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577381590,
          },
          {
            "xAxis": 1577383090,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577383090,
          },
          {
            "xAxis": 1577383390,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N3",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577383390,
          },
          {
            "xAxis": 1577384290,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#004a7b",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577384290,
          },
          {
            "xAxis": 1577384590,
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577384590,
            
          },
          {
            "xAxis": 1577385490,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577385490,
            
          },
          {
            "xAxis": 1577386390,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577386390,
            
          },
          {
            "xAxis": 1577389990,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577389990,
            
          },
          {
            "xAxis": 1577391490,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577391490,
            
          },
          {
            "xAxis": 1577392990,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577392990,
            
          },
          {
            "xAxis": 1577393890,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577393890,
            
          },
          {
            "xAxis": 1577394940,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "离床",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577394940,
            
          },
          {
            "xAxis": 1577395030,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#747474",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "清醒",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577395030,
            
          },
          {
            "xAxis": 1577395320,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#ff931e",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N1",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577395320,
            
          },
          {
            "xAxis": 1577395620,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1c8fbf",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577395620,
            
          },
          {
            "xAxis": 1577397420,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577397420,
            
          },
          {
            "xAxis": 1577398920,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577398920,
            
          },
          {
            "xAxis": 1577399520,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577399520,
            
          },
          {
            "xAxis": 1577400120,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577400120,
            
          },
          {
            "xAxis": 1577401020,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N1",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577401020,
            
          },
          {
            "xAxis": 1577401320,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1c8fbf",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "REM",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577401320,
            
          },
          {
            "xAxis": 1577401920,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#97d7f3",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N2",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577401920,
            
          },
          {
            "xAxis": 1577402520,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#1f73aa",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "N3",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577402520,
            
          },
          {
            "xAxis": 1577403290,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#004a7b",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  },
  {
    "name": "中断",
    "type": "line",
    "z": 2,
    "animation": false,
    "markArea": {
      "silent": true,
      "data": [
        [
          {
            "xAxis": 1577403290,
            
          },
          {
            "xAxis": 1577403300,
            
          }
        ]
      ],
      "animation": false,
      "itemStyle": {
        "color": "#adadad",
        "borderWidth": 0
      }
    },
    "customerParma": "1"
  }
]

option = {
    color: ["#ff931e","#747474","#1c8fbf","#97d7f3","#1f73aa","#004a7b","#adadad"],
    dataZoom:[
       {
           type: "inside", 
           xAxisIndex: 0, 
           startValue: 1577366870, 
           endValue: 1577403309,
       }
    ],
    grid: {right: "5%", left: "10%", top: "30%", bottom: "25%"},
    xAxis: {
        type:"value",
        min: 1577366870,
        max: 1577403309,
        axisLabel: {
            color: '#ADADAD',
            formatter:function(e){
                return formatTimeSFMForEchart(e*1000);
            }
        },
        axisLine: {
            lineStyle: {
            color: '#ADADAD'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#e5e5e5'
            }
        },
        axisTick:{
            inside:true,
            show:false
        },
        // boundaryGap:false,
        // boundaryGap: ['50%', '0%'],
        nameGap:0,
        scale :true,
    },
     grid:{
        right:"10%",
        left:"10%",
        top:"30%",
        bottom:"25%"
    },
    yAxis: {
        type: 'value',
        splitNumber:5,
        max:100,
        axisLabel: {
            show: true,
            interval: 'auto',
            color: '#ADADAD',
        },
        axisLine: {
            lineStyle: {
                color: '#ADADAD',
                width: 1,
                type:"dotted"
            }
        },
        axisTick:{
            show:false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type:"dashed",
                color:"blue"
            }
        },
        show: true
    },  
    series:yData    
}         