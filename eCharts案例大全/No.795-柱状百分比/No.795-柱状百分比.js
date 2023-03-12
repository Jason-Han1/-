var option = {
    backgroundColor: '222',
      grid: {
        top: '0',
        left: '0',
        right: '4.75%',
        bottom: '0',
        containLabel: true
      },
      yAxis: [{
        type: 'category',
        data: ['全年目标', '本月目标'],
        inverse: true,
        axisTick: {
          show: false
        },
        axisLabel: {
          margin: 20,
          textStyle: {
            fontSize: 18,
            color: '#fff'
          }
        },
        axisLine: {
          show: false
        }
      }],
      xAxis: [{
        type: 'value',
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      series: [{
        type: 'bar',
        barWidth: 14,
        data: [120, 60],
        label: {
          normal: {
            show: true,
            position: 'insideBottomRight',
            formatter: '{c}%',
            distance: 0,
            offset: [30, -20],
            color: '#fff',
            fontSize: 16,
            padding: [5, 15, 10, 15],
            backgroundColor: {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA+CAYAAAD5wvNAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ3NTQ1RkVGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ3NTQ1RkRGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvulhDwAAAQ3SURBVHja7J1JaBRBGIX/iZEQN1CjwVxUcL+4hUnUU8SDHjQiiqJR0EOCYMAtIG4HRQXBBUQkXgQxxoOieJZ4UzO4oAe3CKJoQI2IGhUTZHz/dI12mul090xcJvU+ePSkpqsTXr1Ud81Ud8UW1SZFYuJgtsn0z+Iqd+2TFPHWGY1tFVSJ96ZgOx5lo7AdDBX9OmbMczx3mas8076BZQUhfoe3ns+xve/7/X6JcpyIZRK17u+2+I7tF5S/w+vneP0YuoXX16G33mMk5kkkCiV7RkLroNXQbE/Tk39HkdEIaDK00JTr//kd6Dx0FnqfzcELsqgzBjoCvYCOQuUMS14QM22lbfYSOgGV/cnAaG/UAD2FtkKD2QZ5yyBoE/QkfkMaoIF9HZiJerqDDkND6He/YYhp0wRCM62vAlMN3YZm0t9+ywyoNX5TluYamFroEjSMnlrR21xEaGqzDcxGqBEaQC+tQdu6MX4r1faRArPEXEUTOzkRb01lIFRgpkJN7Fms72maEJqpQYHR4VUzR0LEZKA5nug55PYGZjM0nV4Rg2Zhi19g9FO/vfSIeNiDXqYsU2B28lREfE5Nu7yBKYE20Bviw3r0MiXuwNRAxfSF+FBsMtIjMIT0xpp0YEZDs+gHCWC2XvxqYOYL57OQYDQjVRqYCnpBQlKugZlCH0hIJmtgJtAHEpKJGphS+kBCUqqBGUofSEiGFtADEgUGhjAwhIEhDAzJQ7o0MJ/pAwnJZw3MG/pAQvJBA/OMPpCQtGlgHtMHEpInGphW+kBCckcDo08mStILEoBmpCV90XuXfpAA7ibi0p7+HOYc/SAB6KPOxB2Yb/SE+KDZOOsOTAd0hr4QH87gdNThDoxyAOqkN8RDp8mGeAPTDu2jP8TDfr3YzRQY5Th0jx4Rg2bhmLvAG5huaCX0iV5Zj34pvQq9S3dvgVHaoLXQD3pmLdr2NYmK1DOZJSgwylWonr5ZSz3CcjXTG71NoDoF1bGnsa5nqUtUptpeogZGOQ0t5zWNNcPnFYk5qTaXbAOjXBFnUQOOnvov96EKhOVy0I5h5/TqhXClOI+u4lcI/Qdty91QPDFXHoapEGUSeBd0UJyFKnRs/oV+5y1foZPQJATlANQVtmI2dw28Fmf5m3Fmq4s2cT7N/096gS1ts7HiLH/zKupBclmRrcP0NCq9ob9KnGfN6NOjnSX8nCcwDmRb/VW6zQWss4SfyCNxZlXqRLmcJ/wX9tEfqX/IBaN84RC0I8dj6Opm22xKo803sulziZtyqK91t9tmms2B0XO6Ppv4WhZ1W0zdJANjFzo6qJZod07o/Odlpq4wMHYOMRdLuBv6dB9d1vejrWYxMA46olhktrnsw8BYhPYeC3x6j84IvRADYxEPMlyfZHOdw8BYhHsElB5JtdAWh0JakBH9jGW4OJ9UN9GO3/wUYAAaXtVsjsG1HQAAAABJRU5ErkJggg=='
            }
          }
        },
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
              offset: 0,
              color: '#57eabf' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#2563f9' // 100% 处的颜色
            }], false),
            barBorderRadius: 14
          }
        }
      }, {
        type: "bar",
        barWidth: 14,
        xAxisIndex: 0,
        barGap: "-100%",
        data: [120, 120],
        itemStyle: {
          normal: {
            color: "#444a58",
            barBorderRadius: 14
          }
        },
        zlevel: -1
      }]
    };