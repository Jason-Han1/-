option = {
  tooltip: {},
  title: [
    {
      text: '健康知识',
      left: '25%',
      textAlign: 'center',
      top: '32%'
    },
     {
      text: '健康信念',
      left: '75%',
      textAlign: 'center',
      top: '32%'
    },
     {
      text: '健康行为',
      left: '25%',
      textAlign: 'center',
      top: '65%'
    },
     {
      text: '健康技能',
      left: '75%',
      textAlign: 'center',
      top: '65%'
    },
  ],
  legend: {
    data: ['个人', '年级', '班级']
  },
  grid: {
    bottom: '72%'
  },
  xAxis: {
    type: 'category',
    data: ['健康知识', '健康技能', '健康行为', '健康信念']
  },
  yAxis: {
    type: 'value'
  },
  radar: [
    {
      center: ['25%', '50%'],
      radius: '20%',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    {
      center: ['75%', '50%'],
      radius: '20%',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    {
      center: ['25%', '82.5%'],
      radius: '20%',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    {
      center: ['75%', '82.5%'],
      radius: '20%',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    }
  ],
  series: [
    {
      type: 'bar',
      name: '个人',
      data: [266, 233, 455, 456],
      label: {
        show: true,
        position: 'top'
      }
    },
    {
      type: 'bar',
      name: '年级',
      data: [266, 233, 455, 234],
      label: {
        show: true,
        position: 'top'
      }
    },
    {
      type: 'bar',
      name: '班级',
      data: [266, 233, 455, 556],
      label: {
        show: true,
        position: 'top'
      }
    },
    {
      name: '健康知识',
      type: 'radar',
      radarIndex: 0,
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '个人'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '年级'
        },
        {
          value: [4000, 13000, 26000, 27000, 40000, 20000],
          name: '班级'
        }
      ]
    },
    {
      name: '健康知识',
      type: 'radar',
      radarIndex: 1,
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '个人'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '年级'
        },
        {
          value: [4000, 13000, 26000, 27000, 40000, 20000],
          name: '班级'
        }
      ]
    },
    {
      name: '健康知识',
      type: 'radar',
      radarIndex: 2,
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '个人'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '年级'
        },
        {
          value: [4000, 13000, 26000, 27000, 40000, 20000],
          name: '班级'
        }
      ]
    },
    {
      name: '健康知识',
      type: 'radar',
      radarIndex: 3,
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '个人'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '年级'
        },
        {
          value: [4000, 13000, 26000, 27000, 40000, 20000],
          name: '班级'
        }
      ]
    }
  ]
};