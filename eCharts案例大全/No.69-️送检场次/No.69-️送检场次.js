option = {
  title: {
    text: '️送检场次',
    left: 'center',
    top: '36%'
  },
  legend: {
    bottom: '26%',
    left: 'center',
    width: 200
  },
  series: [
    {
      type: 'pie',
      radius: ['10%', '16%'],
      label: {
          show: false
      },
      data: [
        { value: 1048, name: '集团牧场' },
        { value: 735, name: '行业企业' },
        { value: 580, name: '家庭农场' },
        { value: 484, name: '动保饲料企业' },
        { value: 300, name: '兽医服务工作站' },
        { value: 300, name: '政府部门' }
      ]
    }
  ]
};