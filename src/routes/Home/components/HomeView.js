import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import ChartComponent from './ChartComponent.js'
import { ChartCanvas, Chart, series } from "react-stockcharts";

export const HomeView = () => (
    <ChartComponent />
)

export default HomeView
