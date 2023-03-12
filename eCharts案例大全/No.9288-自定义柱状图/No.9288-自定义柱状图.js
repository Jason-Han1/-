 option = {
     backgroundColor: "#111c4e",

     grid: {
         left: '13%',
         right: '14%',
         bottom: '13%',
         top: '12%',
         containLabel: true
     },
     yAxis: [{
         type: 'category',
         scale : true,
         data: ['济南市', '青岛市', '临沂市', '东营市', '潍坊市','淄博市','烟台市','济宁市','聊城市','德州市','滨州市','威海市','菏泽市','日照市','泰安市','枣庄市'],
         axisLabel: {
             interval: 0,
             color: '#d3e0fa', //y轴字体颜色
             margin:250,
         },
         splitLine: {
             show: false
         },
         axisLine: {
             show: true
         },
         axisTick: {
             show: false
         }
     }],
     xAxis: [{
         type: 'value',
         show:false,
     }],
     series: [{
             type: 'pictorialBar',
             symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAAAiCAYAAABBalxiAAADqUlEQVR4nO2dT1PTQBiHHyyMDjge9ODFPwe9O3wBT3wlPyszMIgioPwREGihLaUe9n3dbUhKkaZt0t8z886mm20ml33ybpLdLKyt9xvALdBHCCFGZBH4CHwBNi02gC3gaornJYSYcRatXAY+WUDIQvaAr8C2lTtAe9InKISYTRYL6heANxafra5HEMo2QSTfrbws+RyFEDNIkTzyaADvLFJOCCL5AXyz8hdBNkKImvIQeRTx0mI1qbshZCn7wK5t7wEHtk8IUXHGIY+i4763SLkFjghS2SdkKAfAIfAbZStCVIay5FHEE+C1xWpmXw84JsrkMNk+AK4nd5pCiPuYtDyG0SCKJY9zQtZyksQpIWM5s7JT/mkKIWC25HEfLyw+DGlzSRTKKVEwfwjyObdtZTFCPJIqyWMUnlu8vaddlyiTS4tmEv77ysoWQThXKLsRAqifPEZlCXhl8VB6BIm0rMxGK9nXJkinZdvtpF0biUhUmHmVx2NoEDOcx9InZjUul2ay7fU3Vn9TUOdte5k6IUpD8pguC8CKRRlcE0TSIgzVOoSs54Y4BOva/t6Qdj071q39zpZiDpE86s0zK8eRJQ3DMygvIWRAeWUr097l5NlUtnTBpdmU/9dFJ6aA5CHGgWdQUL6oinA5pULxOhdQKjeXU7auqB3EbCu77TIbtl07JA9RF8oa+o2LIqk0kzbpdiqn7D2sdJ/fwHdS2WWHlek+uJu55Q1DswL8dwzJQ4jJsGxl2nlv8xoaDeJ0jS6xr6b/9wzJs70W8NTCs60Vonx8n99cX7Lw/U+IEnaR+Xm7NPwYPclD1IVRhiRFdekVN2/o4h0RBq/WfiPZKcoc0v/XBslDjAvvVH4V845V9KQmvWladFM1+2Qn795FLTtmFZA86o13svTx67BHsp2Cum5OmZWFmDMkj+nTJXS+9C3Ua8JVOH0PI+/djFFeGhOiFCSP/+OaONclfSU9rfN5MakQsq+pq4OLyjLP8mgSJsZdMDgZLp0kd8mgFFwStX12L8So1E0ePQan4vu6H2cESfjU/Au0HKIQj6JK8ugSFwPKrtmRrtuhrECICTBr8jjn7hKEHidIDELMDNOQR5O4svpPwiLILgjN0BSiIpQpj2PiKukee4ShhRCi4oxDHi3Cl+PS2EXrhApRax4qj0PC5yb9C3E7hJuYQog5Y5g8jogfud620HdphRBAlEeHIIlNYAPYIrwbIYQQuSysrfeXCDMW9Zq0EGJk/gLtZNelCqQwSwAAAABJRU5ErkJggg==',
             barWidth: '50',
             data: [320, 302, 0, 0, 0,320, 302, 0, 0, 0,320, 302, 0, 0, 0,200],
             label: {
                 show: true,
                 position: 'right',
                 color: 'red',
                 fontSize: 14,
                 formatter: function(param) {
                    if(param.value!==0){
                        return param.value
                    }else{
                        return "";
                    }
                 },
             },
         },
         {
             type: 'pictorialBar',
             symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAAAhCAYAAAABHu1cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD7UlEQVR4nO2dXW/TSBSGn7AFIaiQuOCKC4RYCWnhBnHFLX+J/8JPgj9Q8b2LtrDLNy1tmqRpEnMxc+pjd+w2revE7ftIRzM5Mx5bbd4zY89k3Mue3XtC4AXwEljn0doMgOf3aYQMstLn/SSrqJeqUyjvhSRZRrqsQX8Wz19VN8uO6Su01zvgS1/L4W0Vjtuv0yuez9c/zbZTf9fKv0HCt5/v1V570lf3f6it2zv8+1HTzoFjUmUVbabKC9dTqrcCrAJ3gYexaMDz+6+Bd8DbmI4QQnSClYTvCvAgGsAM+AD8TRD4e+AjMG3jAoUQ85ESdZkLwK1oj6NvD/iXIPB/YvofEroQC+cook5xEfgzmrFH6ME/xHQ92uZJLlAIMR/HFXWKi8DtaJ4+ucA/Enr0T8BWg+cWQkSaFHUVq8Bf0TwDgrg/A//H9HP06cGcEMekDVFXcQW4E63MBkHcX4FvwHeX38A92BdCFFmkqOu4Hq3cuwNMCML+SRC7z2/Gz79iPSHOHcsq6jpWgBvR7tbU6xPEvRXT7eiz1Od3gCF6ei/OAF0U9VFZjXZzjmNGhHv9IUHog5KVfUNg19UfocAgFsxZFvVxuBztJIwJ4h6RjwBGJd+IMAU4IASFsau35/LWlhBHRqJunkvRrjXYphf4kCB8y4/JRws+oFTVnxKCyRQFjDOJRN0NbATRZKAwxuSinxJGEjPyYGBBYxJ9M0JQmJU+Z/FYYpo5/8D5xSkjUQsbWVxt8ZwWQCxo+FHDTqmOBR0LIlYnIw82k5j3AcQCjm/Tl5/ZkYpELRbBSZ9bNI0XuAWact4CSDnvg4eNTCAPPJaHYlDxQcqf3/vLZZAHsEokaiHgD442UvGzGymhQlHYXvxejGXh2u0M5CMTw7eR+vyLosg3JGqxjPgvvYnEvszWe9bVmZD3bqlhuBeYF4m149v2vXUnkKhFHTb0MxEc9uDMp3asHWM9UN39c+cEtIxI1N3FT1WZ4AbkwrD8LsV5cRPo2JVXCVR0EIm6HVILUPz8sgnT5pJNdDsUF6f4eWkhkkjU9UwoLhG15aC2XHTozK8gs5VituxUiNY4L6KeEX7YsR1tM6bm63NwnfcA3d+JDtJ1Ue8SfnL5w5kXrZl2WRHnhmUWdUaYgzPRWvqN/PfT2wu7OiGWlGUQdZ98SyPb3shMD4SEmJO2RJ0RtiNaJxev7UvWb+kahDgXnIaotyjuHmpbBqvXFaIFTirqL4SN/M3W0UMpIRbKPKL+Sv42Dnszh+ZghVgyqkS9SxDuW+AN4T1aetOGEB3ARD0AXhNeZfsKeM+jtWljr7IVQrTGCvAU+LH/TmohRKf5DdUwgiIMppTbAAAAAElFTkSuQmCC',
             data: [0, 0, -341, -374, -390,0, 0, -341, -374, -390,0, 0, -341, -374, -390,0],
             barWidth: '50',
             label: {
                 show: true,
                 position: 'left',
                 color: 'green',
                 fontSize: 14,
                 formatter: function(param) {
                    if(param.value!==0){
                        return param.value;
                    }else{
                        return "";
                    }
                 },
             },
         },
     ]
 };