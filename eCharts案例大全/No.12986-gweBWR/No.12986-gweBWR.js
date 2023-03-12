var data=[110, 20, 36, 10, 50, 80, 100, 60];
var sum=0;
var percentdata =[];
for(var i=0; i<data.length;i++){
    sum +=data[i];
};
for(var j=0; j<data.length;j++){
    percentdata.push((((data[j]/sum)*100).toFixed(2)));
};
// console.log(percentdata);
option = {
          color: ['#1c9a4c'],
          grid: {
            left: '8%',
            right: '10%',
            top: '12%',
            bottom: '18%',
            containLabel: true
          },
          yAxis: {
            data: ["用户撞车", "SQL注入检测", "机器人登录",
            "账号盗用", "web高频攻击", "端口扫描", "内网连接…",
            "邮件外发",
            ],
            axisTick: {
              show: false
            },

          },

          xAxis: [{
            axisTick: {
              show: false
            },
            type: 'value',
            // max: 100,
            splitNumber: 5,
            axisLabel: {
              formatter: '{value}%'
            }
          }],
          series: [{
            name: '销量',
            type: 'bar',
            barWidth: '55%',
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{c}%',
                textStyle: {
                  color: 'black'
                }
              }
            },
            data: percentdata
          }]
        };
