
var data =  [{
    name: "漏洞攻击",
    // value: 0,
    children:[
      {name: "明文传输密码(1,954)", value: 1954},
      {name: "其他漏洞利用(1,717)", value: 1717},
      {name: "信息泄露漏洞(954)", value: 954},
      {name: "远程命令/代码执行(907)", value: 907},
      {name: "明文传输密码(1,954)", value: 1954},
      {name: "其他漏洞利用(1,717)", value: 1717},
      {name: "信息泄露漏洞(954)", value: 954},
      {name: "远程命令/代码执行(907)", value: 907},
      {name: "明文传输密码(1,954)", value: 1954},
      {name: "其他漏洞利用(1,717)", value: 1717},
      {name: "信息泄露漏洞(954)", value: 954},
      {name: "远程命令/代码执行(907)", value: 907},
      {name: "明文传输密码(1,954)", value: 1954},
      {name: "其他漏洞利用(1,717)", value: 1717},
      {name: "信息泄露漏洞(954)", value: 954},
      {name: "远程命令/代码执行(907)", value: 907},
      {name: "明文传输密码(1,954)", value: 1954},
      {name: "其他漏洞利用(1,717)", value: 1717},
      {name: "信息泄露漏洞(954)", value: 954},
      {name: "远程命令/代码执行(907)", value: 907},
      {name: "明文传输密码(1,954)", value: 1954},
      {name: "其他漏洞利用(1,717)", value: 1717},
      {name: "信息泄露漏洞(954)", value: 954},
      {name: "远程命令/代码执行(907)", value: 907},
      {name: "信息泄露漏洞(954)", value: 954},
      {name: "远程命令/代码执行(907)", value: 907},
    ]},
    {
      name: "暴力破解",
      // value: 1,
      children:[
        {name: "异常登录(1,954)", value: 1954},
        {name: "Web暴力破解(1,717)", value: 1717},
        {name: "RDP暴力破解(954)", value: 954},
        {name: "SSH暴力破解xxxx行(907)", value: 907},
      ]
    },
    {
      name: "恶意软件",
      // value: 2,
      children:[
        {name: "异常登录(1,954)", value: 1954},
        {name: "Web暴力破解(1,717)", value: 1717},
        {name: "RDP暴力破解(954)", value: 954},
        {name: "SSH暴力破解xxxx行(907)", value: 907},
        {name: "RDP暴力破解(954)", value: 954},
        {name: "SSH暴力破解xxxx行(907)", value: 907},
      ]
    },
    {
      name: "Webshell",
      // value: 3,
      children:[
        {name: "异常登录(1,954)", value: 1954},
      ]
    },
     {
      name: "网络钓鱼",
      // value: 4,
      children:[
        {name: "异常登录(1,954)", value: 1954},
         {name: "邮件恶意URL(1,954)", value: 1954},
      ]
    },
    {
      name: "拒绝服务攻击",
      // value: 3,
      children:[
        {name: "异常登录(1,954)", value: 1954},
      ]
    },
     {
      name: "网络异常流量",
      // value: 4,
      children:[
        {name: "异常登录(1,954)", value: 1954},
         {name: "邮件恶意URL(1,954)", value: 1954},
      ]
    },
    {
      name: "攻击探测",
      // value: 3,
      children:[
        {name: "异常登录(1,954)", value: 1954},
      ]
    },
  ]

option = {
  title: {
    text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
    subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
    textStyle: {
      fontSize: 14,
      align: 'center'
    },
    subtextStyle: {
      align: 'center'
    },
    sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
  },
  series: {
    type: 'sunburst',
    data: data,
    radius: [0, '95%'],
    sort: undefined,
    emphasis: {
      focus: 'ancestor'
    },
    levels: [
      {},
      {
        r0: '15%',
        r: '35%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          // rotate: 'tangential'
        }
      },
      {
        r0: '35%',
        r: '70%',
        label: {
          align: 'right'
        }
      },
      {
        r0: '70%',
        r: '72%',
        label: {
          position: 'outside',
          padding: 3,
          silent: false
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ]
  }
};