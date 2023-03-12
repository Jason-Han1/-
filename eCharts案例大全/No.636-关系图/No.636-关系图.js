 option = {
     backgroundColor:'#040f23',
     tooltip: {},
     animationDurationUpdate: function(idx) {
         // 越往后的数据延迟越大
         return idx * 100;
     },
     animationEasingUpdate: 'bounceIn',
     color: ['#fff', '#fff', '#fff'],
     series: [{
         type: 'graph',
         layout: 'force',
         force: {
             repulsion: 30,
             edgeLength: 10
         },
         roam: true,
         label: {
             normal: {
                 show: true,
                 position: 'inside',
                 formatter: '{c}' + '\n\n' + '{b}',
                 fontSize: 16,
                 fontStyle: '400',
             }
         },
         data: [{
             "name": "一级",
             "value": "NO.2",
             x: 80,
             y: 6,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#ff8400",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#ff8400",
                     "color": "#11213b"
                 }
             }
         }, {
             "name": "二级",
             "value": "NO.3",
             x: 0,
             y: 0,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#03fc62",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#03fc62",
                     "color": "#11213b"
                 }
             },

         }, {
             "name": "三级",
             "value": "NO.4",
             x: 0,
             y: 0,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#aa61b2",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#aa61b2",
                     "color": "#11213b"
                 }
             }
         }, {
             "name": "总集",
             "value": 'NO.1',
             "symbolSize": 200,
             x: 0,
             y: 0,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#0a95e6",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#0a95e6",
                     "color": "#11213b"
                 }
             }
         }, {
             "name": "四级",
             "value": "NO.5",
             x: 0,
             y: 0,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#00fff7",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#00fff7",
                     "color": "#11213b"
                 }
             }
         }, {
             "name": "五级",
             "value": "NO.6",
             x: 0,
             y: 0,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#f06467",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#f06467",
                     "color": "#11213b"
                 }
             }
         }, {
             "name": "六级",
             "value": "NO.7",
             x: 0,
             y: 0,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#f06467",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#f06467",
                     "color": "#11213b"
                 }
             }
         }, {
             "name": "七级",
             "value": "NO.8",
             x: 0,
             y: 0,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#03fc62",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#03fc62",
                     "color": "#11213b"
                 }
             }
         }, {
             "name": "八级",
             "value": "NO.9",
             x: 0,
             y: 0,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#00fff7",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#00fff7",
                     "color": "#11213b"
                 }
             }
         }, {
             "name": "九级",
             "value": "NO.10",
             x: 0,
             y: 0,
             "symbolSize": 160,
             "draggable": true,
             "itemStyle": {
                 "normal": {
                     "borderColor": "#f06467",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#f06467",
                     "color": "#11213b"
                 }
             }
         }],
         links: [{
                 "source": "一级",
                 "target": "总集"
             },
             {
                 "source": "二级",
                 "target": "总集"
             },
             {
                 "source": "三级",
                 "target": "总集"
             },
             {
                 "source": "四级",
                 "target": "总集"
             },
             {
                 "source": "五级",
                 "target": "总集"
             },
             {
                 "source": "六级",
                 "target": "总集"
             }, {
                 "source": "七级",
                 "target": "总集"
             }, {
                 "source": "八级",
                 "target": "总集"
             }, {
                 "source": "九级",
                 "target": "总集"
             }
         ]
     }]
 }