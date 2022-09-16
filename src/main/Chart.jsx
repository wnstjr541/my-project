import ReactApexChart from "react-apexcharts";

function Chart(){
    return (
        <div>
            <ReactApexChart
                type="line"
                series={[
                    {
                        name: "숙련도",
                        data: [80, 80, 80, 90, 60],
                    },
                ]}
                options={{
                    theme: {
                        mode: "dark",
                    },
                    chart: {
                        height: 300,
                        width: 500,
                        toolbar: {
                            show: false,
                        },
                        background: "transparent",
                    },
                    stroke: {
                        curve: "smooth",
                        width: 4,
                    },
                    fill: {
                        type: "gradient",
                        gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                    },
                    colors: ["#000"],
                    tooltip: {
                        y: {
                            formatter: (value) => value + "%",
                        },
                    },  
                    xaxis: {
                        categories: ["html" , "css" , "javaScript" , "react" , "typescript"],
                    },  
                    yaxis: {
                        min : 32,
                        max : 100
                    }
                    
                }}
            />
        </div>
    )
}
export default Chart