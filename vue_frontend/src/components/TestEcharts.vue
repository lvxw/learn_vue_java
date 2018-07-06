<template>
  <div>
      <el-row>
        <el-col :span="6"><div style="border: solid 1px red">ss</div></el-col>
        <el-col :span="6"><div style="border: solid 1px blue">ss</div></el-col>
        <el-col :span="6"><div style="border: solid 1px yellow">ss</div></el-col>
        <el-col :span="6"><div style="border: solid 1px green">ss</div></el-col>
      </el-row>
  </div>
<!--  <div class='charts'>
    <div id='myChart'></div>

  </div>-->
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'TestEcharts',
  data: function () {
    return {
      radio: '1',
      echarts_option: {
        'title': {
          'text': '在网率',
          'top': '55%',
          'left': 'center',
          'textStyle': {
            'fontSize': 12,
            'fontWeight': 'bold',
            'color': '#bcbfff'
          }
        },
        'tooltip': {
          'trigger': 'item',
          'formatter': '{a} : ({d}%)'
        },
        'series': [{
          'name': '在网率',
          'center': [
            '50%',
            '50%'
          ],
          'radius': [
            '49%',
            '50%'
          ],
          'clockWise': false,
          'hoverAnimation': false,
          'type': 'pie',
          'data': [{
            'value': 70,
            'name': '',
            'label': {
              'normal': {
                'show': true,
                'formatter': '{d} %',
                'textStyle': {
                  'fontSize': 12,
                  'fontWeight': 'bold'
                },
                'position': 'center'
              }
            },
            'labelLine': {
              'show': false
            },
            'itemStyle': {
              'normal': {
                'color': '#5886f0',
                'borderColor': new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00a2ff'
                }, {
                  offset: 1,
                  color: '#70ffac'
                }]),
                'borderWidth': 25
              },
              'emphasis': {
                'color': '#5886f0',
                'borderColor': new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#85b6b2'
                }, {
                  offset: 1,
                  color: '#6d4f8d'
                }]),
                'borderWidth': 25
              }
            }
          }, {
            'name': ' ',
            'value': 30,
            'itemStyle': {
              'normal': {
                'label': {
                  'show': false
                },
                'labelLine': {
                  'show': false
                },
                'color': 'rgba(0,0,0,0)',
                'borderColor': 'rgba(0,0,0,0)',
                'borderWidth': 0
              },
              'emphasis': {
                'color': 'rgba(0,0,0,0)',
                'borderColor': 'rgba(0,0,0,0)',
                'borderWidth': 0
              }
            }
          }]
        }, {
          'name': '在网率',
          'center': [
            '50%',
            '50%'
          ],
          'radius': [
            '70%',
            '72%'
          ],
          'clockWise': false,
          'hoverAnimation': false,
          'type': 'pie',
          'data': [{
            'value': 70,
            'name': '',
            'label': {
              'normal': {
                'show': true,
                'formatter': '{d} %',
                'textStyle': {
                  'fontSize': 12,
                  'fontWeight': 'bold'
                },
                'position': 'center'
              }
            },
            'labelLine': {
              'show': false
            },
            'itemStyle': {
              'normal': {
                'color': '#5886f0',
                'borderColor': new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00a2ff'
                }, {
                  offset: 1,
                  color: '#70ffac'
                }]),
                'borderWidth': 1
              },
              'emphasis': {
                'color': '#5886f0',
                'borderColor': new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#85b6b2'
                }, {
                  offset: 1,
                  color: '#6d4f8d'
                }]),
                'borderWidth': 1
              }
            }
          }, {
            'name': ' ',
            'value': 30,
            'itemStyle': {
              'normal': {
                'label': {
                  'show': false
                },
                'labelLine': {
                  'show': false
                },
                'color': 'rgba(0,0,0,0)',
                'borderColor': 'rgba(0,0,0,0)',
                'borderWidth': 0
              },
              'emphasis': {
                'color': 'rgba(0,0,0,0)',
                'borderColor': 'rgba(0,0,0,0)',
                'borderWidth': 0
              }
            }
          }]
        }]
      }
    }
  },
  mounted () {
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    myChart.setOption(this.echarts_option)
  }
}
</script>

<style></style>
