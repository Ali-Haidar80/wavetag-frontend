export const VIEWS_CHART_OPTIONS = {
  chart: {
    type: "spline",
    height: 271,
    borderRadius: 20,
  },
  title: {
    text: "",
  },
  xAxis: {
    labels: {
      format: "{value:%b %e}",
      style: {
        color: "#718EBF",
      },
    },
    lineColor: "#DFE5EE",
    tickWidth: 0,
  },
  yAxis: {
    title: {
      text: "",
    },
    labels: {
      enabled: false,
    },
    gridLineDashStyle: "longdash",
  },
  tooltip: {
    enabled: false,
  },
  legend: { enabled: false },
  plotOptions: {
    series: { color: "#FCAA0B" },
    spline: {
      marker: {
        radius: 6,
        lineColor: "#FCAA0B",
        fillColor: "#fff",
        lineWidth: 3,
      },
    },
  },
  series: [
    {
      marker: {
        symbol: "circle",
      },
      data: [{ x: new Date(), y: 3.7 }],
    },
  ],
  credits: {
    enabled: false,
  },
};

export const ViewChartsOptions = () => {
  let options = JSON.parse(JSON.stringify(VIEWS_CHART_OPTIONS));
  const chartPoints = [];
  Array.from({ length: 7 }, (item, index) => {
    chartPoints.push({ x: new Date(`2021/12/${index + 1}`), y: Math.random() });
  });
  options = {
    ...options,
    series: [{ ...options.series[0], data: chartPoints }],
  };
  return options;
};

export const LEADS_CHART_OPTIONS = {
  chart: {
    type: "spline",
    height: 271,
    borderRadius: 20,
  },
  title: {
    text: "",
  },
  xAxis: {
    labels: {
      format: "{value:%b %e}",
      style: {
        color: "#718EBF",
      },
    },
    lineColor: "#DFE5EE",
    tickWidth: 0,
  },
  yAxis: {
    title: {
      text: "",
    },
    labels: {
      enabled: false,
    },
    gridLineDashStyle: "longdash",
  },
  tooltip: {
    enabled: false,
  },
  legend: { enabled: false },
  plotOptions: {
    series: { color: "#16DBCC" },
    spline: {
      marker: {
        radius: 6,
        fillColor: "#fff",
        lineWidth: 3,
      },
    },
  },
  series: [
    {
      marker: {
        symbol: "url",
      },
      data: [{ x: new Date(), y: 3.7 }],
    },
  ],
  credits: {
    enabled: false,
  },
};
export const LeadChartsOptions = () => {
  let options = JSON.parse(JSON.stringify(LEADS_CHART_OPTIONS));
  const chartPoints = [];
  Array.from({ length: 7 }, (item, index) => {
    chartPoints.push({ x: new Date(`2021/12/${index + 1}`), y: Math.random() });
  });
  options = {
    ...options,
    series: [{ ...options.series[0], data: chartPoints }],
  };
  return options;
};

export const Trafficoptions = {
  chart: {
    type: "variablepie",
    height: 164,
    width: 164,
  },
  legend: true,
  title: {
    text: "",
  },
  tooltip: {
    enabled: false,
  },
  series: [
    {
      minPointSize: 10,
      innerSize: "40%",
      zMin: 0,
      name: "countries",
      borderRadius: 0,
      borderWidth: 0,
      dataLabels: {
        enabled: false,
      },
      data: [
        {
          y: 80,
          z: 165,
        },
        {
          y: 80,
          z: 45,
        },
        {
          y: 90,
          z: 75,
        },
        {
          y: 60,
          z: 105,
        },
      ],
      colors: ["#16DBCC", "#B1B1B1", "#EFA4F5", "#1814F3"],
    },
  ],
  credits: { enabled: false },
};
export const Viewoptions = {
  chart: {
    type: "variablepie",
    height: 164,
    width: 164,
  },
  legend: true,
  title: {
    text: "",
  },
  tooltip: {
    enabled: false,
  },
  series: [
    {
      minPointSize: 10,
      innerSize: "40%",
      zMin: 0,
      name: "countries",
      borderRadius: 0,
      borderWidth: 0,
      dataLabels: {
        enabled: false,
      },
      data: [
        {
          y: 80,
          z: 165,
        },
        {
          y: 80,
          z: 45,
        },
        {
          y: 90,
          z: 75,
        },
        {
          y: 60,
          z: 105,
        },
      ],
      colors: ["#FA00FF", "#B1B1B1", "#001171", "#1814F3"],
    },
  ],
  credits: { enabled: false },
};
