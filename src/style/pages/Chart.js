import React, { useState, useEffect } from 'react'
import ReactEcharts from "echarts-for-react"
import { Row, Col, Card, CardBody, Label } from "reactstrap"

// Local imports
import Title from '../components/Title'
import { LineOpt, BarOpt, SunBurstOpt, PieOpt } from '../components/ChartOptions'

// MUIs
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'


const ROOT_PATH = 'https://echarts.apache.org/examples'

const weatherIcons = {
  Sunny: ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
  Cloudy: ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
  Showers: ROOT_PATH + '/data/asset/img/weather/showers_128.png'
};

export default function Chart() {
  const [data, setData] = useState([120, 200, 150, 80, 70, 110, 130])

  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      let new_data = data.map(i => {
        return Math.floor(Math.random() * 201)
      })  // Returns a random integer from 0 to 200
      setData(new_data)
    }, 5000)
    return () => clearInterval(intervalId);
  })  

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <React.Fragment>
          {/* <Title>Charts</Title> */}
          <Row>
            {/* Line */}
            <Col>
              <Typography component="p" variant="h4">
                Line Chart
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                Static Data
              </Typography>
              <ReactEcharts option={LineOpt(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], [120, 200, 150, 80, 70, 110, 130])} />
            </Col>
            {/* Bar */}
            <Col>
              <Typography component="p" variant="h4">
                Bar Chart
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                Random Data
              </Typography>
              <ReactEcharts option={BarOpt(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], data)} />
            </Col>
          </Row>
          <Row>
            {/* Sun Burst */}
            <Col>
              <Typography component="p" variant="h4">
                Sun Burst Chart
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                Static Data
              </Typography>
              <ReactEcharts option={SunBurstOpt([0, '120%'], data2)} />
            </Col>
            <Col>
              <Typography component="p" variant="h4">
                Pie Chart
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                Static Data
              </Typography>
              <ReactEcharts option={PieOpt(['CityA', 'CityB', 'CityD', 'CityC', 'CityE'], data3)} />
            </Col>
          </Row>
        </React.Fragment>
      </Container>
    </Box>
  )
}

const data2 = [
  {
    name: 'Grandpa',
    children: [
      {
        name: 'Uncle Leo',
        value: 15,
        children: [
          {
            name: 'Cousin Jack',
            value: 2
          },
          {
            name: 'Cousin Mary',
            value: 5,
            children: [
              {
                name: 'Jackson',
                value: 2
              }
            ]
          },
          {
            name: 'Cousin Ben',
            value: 4
          }
        ]
      },
      {
        name: 'Father',
        value: 10,
        children: [
          {
            name: 'Me',
            value: 5
          },
          {
            name: 'Brother Peter',
            value: 1
          }
        ]
      }
    ]
  },
  {
    name: 'Nancy',
    children: [
      {
        name: 'Uncle Nike',
        children: [
          {
            name: 'Cousin Betty',
            value: 1
          },
          {
            name: 'Cousin Jenny',
            value: 2
          }
        ]
      }
    ]
  }
]

const data3 = [
  {
    value: 1548,
    name: 'CityE',
    label: {
      formatter: [
        '{title|{b}}{abg|}',
        '  {weatherHead|Weather}{valueHead|Days}{rateHead|Percent}',
        '{hr|}',
        '  {Sunny|}{value|202}{rate|55.3%}',
        '  {Cloudy|}{value|142}{rate|38.9%}',
        '  {Showers|}{value|21}{rate|5.8%}'
      ].join('\n'),
      backgroundColor: '#eee',
      borderColor: '#777',
      borderWidth: 1,
      borderRadius: 4,
      rich: {
        title: {
          color: '#eee',
          align: 'center'
        },
        abg: {
          backgroundColor: '#333',
          width: '100%',
          align: 'right',
          height: 25,
          borderRadius: [4, 4, 0, 0]
        },
        Sunny: {
          height: 30,
          align: 'left',
          backgroundColor: {
            image: weatherIcons.Sunny
          }
        },
        Cloudy: {
          height: 30,
          align: 'left',
          backgroundColor: {
            image: weatherIcons.Cloudy
          }
        },
        Showers: {
          height: 30,
          align: 'left',
          backgroundColor: {
            image: weatherIcons.Showers
          }
        },
        weatherHead: {
          color: '#333',
          height: 24,
          align: 'left'
        },
        hr: {
          borderColor: '#777',
          width: '100%',
          borderWidth: 0.5,
          height: 0
        },
        value: {
          width: 20,
          padding: [0, 20, 0, 30],
          align: 'left'
        },
        valueHead: {
          color: '#333',
          width: 20,
          padding: [0, 20, 0, 30],
          align: 'center'
        },
        rate: {
          width: 40,
          align: 'right',
          padding: [0, 10, 0, 0]
        },
        rateHead: {
          color: '#333',
          width: 40,
          align: 'center',
          padding: [0, 10, 0, 0]
        }
      }
    }
  },
  { value: 735, name: 'CityC' },
  { value: 510, name: 'CityD' },
  { value: 434, name: 'CityB' },
  { value: 335, name: 'CityA' }
]