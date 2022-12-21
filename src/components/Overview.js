// import MyBarChart from './graphs/BarGraph.js'
import MyLineChart from './graphs/LineGraph.js'
import MyDoughnutChart from './graphs/DonughtGraph.js'
export const Overview = () => {

    return (
        <div className="main-wrapper">
            <div className="sidebar"></div>
            <div className="main-page-wrapper">
                <div className="main-page-top">Welcome to your Health/Workout dashboard : 'Username'</div>
                <div className="main-page-middle-top-left"></div>
                <div className="main-page-middle-top-middle"></div>
                <div className="main-page-middle-top-right"></div>
                <div className="main-page-middle-bottom-left"><MyLineChart/></div>
                <div className="main-page-middle-bottom-right"><MyDoughnutChart/></div>
                <div className="main-page-bottom"></div>
            </div>
        </div>
    )
}