option = {
          backgroundColor: '#fff',
          title: {
            left: 'center',
            bottom: 20,
            text: '申请方',
            textStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              color: '#333'
            },
            subtext: '满意度',
            subtextStyle: {
              color: '#333'
            }
          },
          series: [
            {
              type: "liquidFill",
              name: '申请方',
              radius: "85%",
              center: ['50%', '45%'],
              shape: "path://M657.462,490.835c-21.359-45.771-82.071-35.092-82.471,18.032-0.221,29.177,28.91,40.083,48.306,51.747,18.807,11.312,32.193,26.786,34.291,33.373,1.8-6.454,16.705-22.366,34.115-33.689,19.036-12.382,48.527-22.572,48.306-51.748C739.607,455.294,677.839,446.889,657.462,490.835Z",
              data: [0.7, 0.7, 0.7], //datat
              color: ['#fc8b8b'],
              outline: {
                show: false,
              },
              backgroundStyle: {
                color: '#edd4d4',
                borderColor: "#fff",
                borderWidth: 1,
                shadowColor: "rgba(0, 0, 0, 0.4)",
                shadowBlur: 0,
              },
              label: {
                normal: {
                  position: ["50%", "40%"],
                  formatter: () => {
                    return (0.7 * 100) + '%'
                  },
                  textStyle: {
                    fontSize: 30,
                  },
                },
              },
            },
          ],
        }
