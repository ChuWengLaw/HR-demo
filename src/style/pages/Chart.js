import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import ReactEcharts from "echarts-for-react"
import { LineOpt, BarOpt, SunBurstOpt } from '../components/ChartOptions'
import { Row, Col, Card, CardBody, Label } from "reactstrap"

// MUIs
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'

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

  var data2 = [
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
                Sun Burst Chart
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                Static Data
              </Typography>
            </Col>
          </Row>
        </React.Fragment>
      </Container>
    </Box>
  )
}
