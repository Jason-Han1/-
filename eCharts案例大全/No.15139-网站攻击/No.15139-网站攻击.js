option = {
    title: {
        text: '网站攻击'
    },
    legend:{
        top:'bottom',
        data:['a.pinggan.com','b.pinggan.com','c.pinggan.com','d.pinggan.com','e.pinggan.com']
    },
    color: ["#FF0000", "#00BFFF", "#FF00FF", "#1ce322", "#000000", '#EE7942'],
    tooltip:{
      trigger: 'axis'  
    },
    xAxis: {
        name:'attack type',
        data: ['null', 'SQL注入', '代码执行', '任意文件下载', '任意目录浏览', '信息泄露', '恶意上传文件','跨域脚本攻击']
    },
    yAxis: {
        name:'shell'
    },
    series: [{
        name:'a.pinggan.com',
        type: 'line',
        data:[220, 182, 171, 214, 210, 310, 290,270]
    },
    {
        name:'b.pinggan.com',
        type: 'line',
        data:[200, 162, 191, 204, 230, 290, 310,290]
    },
    {
        name:'c.pinggan.com',
        type: 'line',
        data:[180, 142, 151, 234, 250, 250, 250,310]
    }
    ,{
        name:'d.pinggan.com',
        type: 'line',
        data:[220, 162, 131, 194, 270, 270, 290,270]
    },{
        name:'e.pinggan.com',
        type: 'line',
        data:[160, 182, 171, 174, 290, 330, 270,250]
    }]
};