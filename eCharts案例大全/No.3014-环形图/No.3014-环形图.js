const title = '总量'
const color = ['#5E944A', '#C2A349', '#54B4DC', '#1D48BB', '#1C89FA']
const formatNumber = function (num) {
  const reg = /(?=(\B)(\d{3})+$)/g
  return num.toString().replace(reg, ',')
}
const chartIcon = [
   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgBtZNBTsJQEIb/eS3EjbFHwBOIJxAXJoYNLI0LCGuIwgnQEwBR9gQT41I2SOIGTwCewB6he+SN09JKC41Qgv/mdZqZ780/7z1gz6JwUGzlrEPjoAhDnREjC7AFVhZIVldMDkg7DNgSTaHpczbX45fGyF4DXrUuM2nTmATFTPxKUhDXBSucyIZFP3S+aXb+XH2fuoEZJKVNVf/txC3SNJ6ZehAHNLUqSycB0DJ1quh1HAZ69kITUIR2eq7aSCiPUOrmb8Gou7ux1o1EAGW0pBlbSL1+ddhZdMho+3j76WbUQwKVHvNNWbI+o6OwZ3lAsVnx2t5d0wXDB3o2GR/YVYxBMKq9WzZXdrKuuxdZrQwH22pOllsYD3QvKacmmCOBOBLFWN7ycBhOXO4q0OnX3o5Zo4JNPOJ7N1cub2Q8a5ZLD/k7ueAFbFZBXtgRePn+I0BmHhNRWWDNLWCSRjmxnVvUanv5PyR5Rl+yZNzvfm1IfwEl1z8Nnor10+B/ZIasueO328EmMfxcGuA/9QPSfJeCEWiMOwAAAABJRU5ErkJggg==',
   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrZRLUsJAEIa7J2OVO3MEPIF4AAksrAI3sFegOIF4AvUEwgnAwgPoRqhywcNyDZ7AHCF7SNoeSCAhgRAq/2YyU91fz/QjACkL/ZthJ69r2mkFQBgkKMtHOhLoanVNLEKw+Mxkzxk49GvbMCo0BmYIOOwUM5rEqc/5ndgh8hYCL3ipeEFssSgUbr9maiM9IyGw6YNxJBydOPQRBVxIrHMwD6iLhaa+g0AA0v0ZIKDWXGIrCshPhV1aEr57N/eE1GSKbhM9QAJpgC8oOKeE3avqZ3sJnPRK5OLN3F3/PAlw8lb644tk1Heu2md2yloBiRqkWuFIkSoIM9bAXG3Q5YMxHCvuhiXDA6YpGdhxlX8611kBmgUHau5sejcM5Ca1pZzakFC+tgw9mWfVhEMYxHMdUchtoGWoPnQrtk/cwM9GTdlCID2hJ49fi088/GWiWGKZJ+yM1MhSBBARRrzUGfYYC1spz7C862tu4vi0PUb7aN64qqY2qv1L7zyYQwfarlEbYrS22fGLS03/YbaaDuaAW8MAAAAASUVORK5CYII=',
   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGZSURBVHgBtZRPTsJAFMbf9A8bF84RIKKJK/EE4hoiNcKacALxBOoJhBuwBwUi7PEEwMpEMfQIXSt9z9eRlgIVhOCXNJ1pv/nNezNvBmDHEuGO1exLM7ZnAehnRJgiEFLwA0ByancIyOFBNrcHiO4QXbfXujy2l4BW8zVumLG+P1gIaBHSMDIKTZwQgTXtOkLgeT1zNPA6hm/SDbM8i0QN600mejsKaMSwyF4fKAmF154HAqHkqWddoophupUoIBD8KpVyoTu+RsKy4Ag5/BvYQET6A79sXqJaPXNQVcB8Z6TmFELY/DGxCfCqMxozJO61G9lkKMcdSfuJDEukSmFbEZcQlgIgb3kNEF9gWxG0ny6Y4QN3KWNuIiJZ6L6lvj5NB/4oASjDdWQs/JdEWp/rD7bVUsobbI4T5V0EOo/ZZMLbdVgruve83oUR/rqUcv75/Y7Tzq08X0oil+9+7PPCy0igpkOPb5AiF+XtephSmmFpr4FEdjBN2LF4jFbR/OPqFXUje3gaBBY28eVQVRaCKqxR4OGihv/UN7/boef4acp9AAAAAElFTkSuQmCC',
   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgBrZRNTsJQEMdnXosxYWGXJkYCJxBPICaCdQU3IJ5APIF6AuEG3EBZqCWwwBMAJ7ARTVx2L33jtH1QKqV8pP9F+97LzK8z82YKkLJwcWOUnozsfrYmQJwRUhEJDSAwAMnwDQgd9nB4YfP5iM/Hv+AOfqwrewl4aL7lM5QZhs7wTCjHsVGgdgJENUVw5JTOv3uVkbfVZ0Y6ag2mGOGXcKCB7MQBp6TXERSQM0DNX0eBSB4srACn3HRBb8ZGCBJWySfkLvs3hNDw0pVEt7CFBOEjCbAFUvvztdLygcdmjxTfnlgXhS147Nv/4Hzy3npilVFAylJAuvZbYUdxvUcBQwEnVqXNB++wq4g6AWMeYXrSIzu+5aPySzGjCQc2lOu1G64CcpMKbW/owhbC6DYmZbRhE5GaaUgC8lx6fSjVjSVJCveBL6IQgEMtpZwzu/cSsQqUDBSkVXNm74DNjBVAHPCjTiDucA1MqcRmJd9zoUyRkv4foyTabFyJ/4tf3fLpPPJFI0RqBUbBO0mE6NsIjP/FpaY/y6+ft07hWnUAAAAASUVORK5CYII=',
   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBtZNdTsJAEMf/s601RhP7aCIxegL1BOoJ9AbGE6gvEOKD+GAI+iDcgCPIDfAEwAlsIk187JuxtDvO8mWBIh/Bf9Jkdzrz25nZWWDFouTGLbC7ud65UIQTTTgyJiK4YPl63gEzArF5xNTUmlsx4vpnfsObAO4Uv/Zty2oMg8Gv0GilpqFwKKEX/V3AUXjm3201zcYe+Nhk3fzCzFF23UZYS+NFyr6E5gHQJbVm1qNAZpbyEh3guBwpq5wGFBimqUvYewqvpTc34uayjm+xgMiyXqQyT0jVdtapdIGZUsh9uveRcw4WAe6WwneJ2zfrds4hhRWrC5QyryRFD0tKYpuscTUE+vmNqjT6DUuKNNf8vFMdAlcpO7kxt7z7GB6tqTjAnIooMbvjQJghtdGIYGFujY2kSvnvYR6Zd53iOw4MfJlDc+uYlRjrB+NrwEn7RMmZ4ncBis4xK0FS55nnzrZMx7Qe6jpgXQrsHvOIcSppnvaW5A0PSvqMP6O/eIPnyoSmn3WOB/bRHsa60j+9gtkZdn2IuYb/1A/ldZkq8exAuQAAAABJRU5ErkJggg=='
]
const echartData = [{
  name: '无通行证闯禁',
  value: '256'
},
{
  name: '不按规定路线行驶',
  value: '212'
},
{
  name: '不按规定时间行驶',
  value: '231'
},
{
  name: '高速右转',
  value: '222'
},
{
  name: '疲劳驾驶',
  value: '244'
}
]
const total = function () {
    let num = 0
    echartData.forEach(item => {
        num =num + (+item.value)
    })
    return num
}
option = {
    color: color,
    tooltip: {
      trigger: 'item'
    },
    title: [{
      text: '{val|' + formatNumber(total()) + '}\n{name|' + title + '}',
      top: '40%',
      left: '40%',
      textAlign: 'center',
      textStyle: {
        rich: {
          val: {
            fontSize: 24,
            color: '#3196FA',
            fontWeight: 'bold'
          },
          name: {
            fontSize: 14,
            color: '#8F9CB2',
            padding: [10, 0]
          }
        }
      }
    }],
    legend: {
      orient: 'vertical',
      icon: 'none',
      x: '65%',
      y: 'center',
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 20,
      width: '263',
      align: 'left',
      formatter: function (name) {
        let str = ''
        let res = echartData.filter(v => v.name === name)
        res = res[0] || {}
        switch (name) {
          case '无通行证闯禁':
            str = '{a|}{name|' + name + ' }{value|' + res.value + '}{unit|次}'
            break;
          case '不按规定路线行驶':
            str = '{b|}{name|' + name + ' }{value|' + res.value + '}{unit|次}'
            break;
          case '不按规定时间行驶':
            str = '{c|}{name|' + name + ' }{value|' + res.value + '}{unit|次}'
            break;
          case '高速右转':
            str = '{d|}{name|' + name + ' }{value|' + res.value + '}{unit|次}'
            break;
          case '疲劳驾驶':
            str = '{e|}{name|' + name + ' }{value|' + res.value + '}{unit|次}'
            break;
        }
        return str
      },
      textStyle: {
        color: '#A6A6A6',
        rich: {
          a: {
            width: 20,
            height: 20,
            lineHeight: 20,
            backgroundColor: {
              image: chartIcon[0]
            },
            align: 'left'
          },
          b: {
            width: 20,
            height: 20,
            lineHeight: 20,
            backgroundColor: {
              image: chartIcon[1]
            },
            align: 'left'
          },
          c: {
            width: 20,
            height: 20,
            lineHeight: 20,
            backgroundColor: {
              image: chartIcon[2]
            },
            align: 'left'
          },
          d: {
            width: 20,
            height: 20,
            lineHeight: 20,
            backgroundColor: {
              image: chartIcon[3]
            },
            align: 'left'
          },
          e: {
            width: 20,
            height: 20,
            lineHeight: 20,
            backgroundColor: {
              image: chartIcon[4]
            },
            align: 'left'
          },
          name: {
            fontSize: 12,
            padding: [0, 0, 0, 5],
            width: 100
          },
          value: {
            fontSize: 20,
            color: '#3196FA',
            padding: [0, 5, 0, 50]
          },
          unit: {
            fontSize: 20
          }
        }
      }
      // formatter: function (name) {
      //   let res = echartData.filter(v => v.name === name)
      //   res = res[0] || {}
      //   const unit = res.unit || ''
      //   return '{name|' + name + '}{value|' + res.value + '}{unit|次}'
      // }
      // data: legendName
    },
    series: [{
      type: 'pie',
      radius: ['45%', '60%'],
      center: ['40%', '50%'],
      data: echartData,
      hoverAnimation: false,
      itemStyle: {
        normal: {
          borderColor: '#fff',
          borderWidth: 0
        }
      },
      labelLine: {
        show: false
      },
      label: {
        show: false
      }
    }]
  };
