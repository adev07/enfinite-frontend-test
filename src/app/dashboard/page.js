"use client";
import React, { useEffect, useState } from "react";
import DateRangePicker from "@/components/formControls/datepicker";
import Select from "@/components/formControls/select";
import { validMomentTimezones, mainData } from "@/data/data";
import { ColumnCharts } from "@/components/charts/column-chart";
import { LineCharts } from "@/components/charts/line-chart";
import moment from "moment-timezone";
import dayjs from "dayjs";
import { Table } from "antd";
import Loader from "@/components/loader";

function Dashboard() {
  const [selectedField, setSelectedField] = useState("Alpha 1");
  const [selectedWell, setSelectedWell] = useState("Tango-2");
  const [selectedDateRange, setSelectedDateRange] = useState([
    dayjs("2024-02-01"),
    dayjs("2024-02-20"),
  ]);
  const [selectedTimezone, setSelectedTimezone] = useState("America/Toronto");
  const [topWells, setTopWells] = useState([]);
  const [loading, setLoading] = useState(false);

  const fieldNameSet = new Set(mainData.map((data) => data["Field Name"]));
  const wellNameSet = new Set(mainData.map((data) => data["Well Name"]));
  const fieldNames = Array.from(fieldNameSet).map((field) => ({
    label: field,
    value: field,
  }));

  const wellNames = Array.from(wellNameSet).map((well) => ({
    label: well,
    value: well,
  }));

  const columnData = mainData
    .filter(
      (s) =>
        s["Field Name"] == selectedField &&
        s["Well Name"] == selectedWell &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[0])) >= 0 &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[1])) <= 0
    )
    .map((data) => ({
      value: Number(data["Production_1D"]),
      name: "Production_1D",
      time: moment
        .tz(data["Timestamp"], selectedTimezone)
        .format("YYYY-MM-DD ha z"),
    }));
  const columnData2 = mainData
    .filter(
      (s) =>
        s["Field Name"] == selectedField &&
        s["Well Name"] == selectedWell &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[0])) >= 0 &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[1])) <= 0
    )
    .map((data) => ({
      value: Number(data["Production_7D"]),
      name: "Production_7D",
      time: moment
        .tz(data["Timestamp"], selectedTimezone)
        .format("YYYY-MM-DD ha z"),
    }));

  const columnData3 = mainData
    .filter(
      (s) =>
        s["Field Name"] == selectedField &&
        s["Well Name"] == selectedWell &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[0])) >= 0 &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[1])) <= 0
    )
    .map((data) => ({
      value: Number(data["Production Target"]),
      name: "Production Target",
      time: moment
        .tz(data["Timestamp"], selectedTimezone)
        .format("YYYY-MM-DD ha z"),
    }));

  const date1 = dayjs(selectedDateRange[0]);
  const date2 = dayjs("2024-02-24T00:00:00+00:00");
  date1.diff(date2);

  const lineData = mainData
    .filter(
      (s) =>
        s["Field Name"] == selectedField &&
        s["Well Name"] == selectedWell &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[0])) >= 0 &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[1])) <= 0
    )
    .map((data) => ({
      value: Number(data.Production_1D),
      name: "Production_1D",
      time: moment
        .tz(data["Timestamp"], selectedTimezone)
        .format("YYYY-MM-DD ha z"),
    }))
    .sort((a, b) => {
      let timeA = new Date(a.time);
      let timeB = new Date(b.time);

      return timeA - timeB;
    });
  const lineData2 = mainData
    .filter(
      (s) =>
        s["Field Name"] == selectedField &&
        s["Well Name"] == selectedWell &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[0])) >= 0 &&
        dayjs(s["Timestamp"]).diff(dayjs(selectedDateRange[1])) <= 0
    )
    .map((data) => ({
      value: Number(data["Average Cycle Time"]),
      name: "Average Cycle Time",
      time: moment
        .tz(data["Timestamp"], selectedTimezone)
        .format("YYYY-MM-DD ha z"),
    }))
    .sort((a, b) => {
      let timeA = new Date(a.time);
      let timeB = new Date(b.time);
      return timeA - timeB;
    });

  const config = {
    data: {
      value: [...lineData, ...lineData2],
    },
    xField: "time",
    yField: "value",
    colorField: "name",
    normalize: { basis: "first", groupBy: "color" },
    axis: {
      y: {
        title: "Production 1D & Average Cycle Time",
        sort: true,
      },
      x: { title: "Time stamp" },
    },
    yAxis: {
      title: "Production Target",
      tickCount: 5,
      tickMethod: (values) => values.sort((a, b) => a - b),
    },
    tooltip: { channel: "y", valueFormatter: ".1f" },
  };

  const configBar = {
    data: {
      value: [...columnData, ...columnData2],
    },
    xField: "time",
    yField: "value",
    scrollbar: {
      x: {
        ratio: 0.5,
      },
    },
    colorField: "name",
    color: ["#ff7f0e", "#2ca02c"],
    group: true,
    axis: {
      y: {
        title: "Production 1D & Production 7D",
        sort: true,
      },
      x: { title: "Time stamp" },
    },
    style: {
      inset: 5,
    },
  };
  const configBar2 = {
    data: {
      value: [...columnData, ...columnData3],
    },
    xField: "time",
    yField: "value",
    scrollbar: {
      x: {
        ratio: 0.5,
      },
    },
    colorField: "name",
    group: true,
    axis: {
      y: {
        title: "Production 1D & Production Target",
        sort: true,
      },
      x: { title: "Time stamp" },
    },
    style: {
      inset: 5,
    },
  };

  useEffect(() => {
    const fieldData = mainData.filter(
      (data) => data["Field Name"] === selectedField
    );

    const wellProductionMap = new Map();
    fieldData.forEach((data) => {
      const wellName = data["Well Name"];
      const production = Number(data["Production_1D"]);
      if (!isNaN(production)) {
        if (wellProductionMap.has(wellName)) {
          wellProductionMap.set(
            wellName,
            wellProductionMap.get(wellName) + production
          );
        } else {
          wellProductionMap.set(wellName, production);
        }
      }
    });

    const sortedWells = Array.from(wellProductionMap.entries()).sort((a, b) => {
      if (isNaN(a[1])) return 1;
      if (isNaN(b[1])) return -1;
      return b[1] - a[1];
    });

    const formattedWells = sortedWells.map(([wellName, production]) => ({
      wellName,
      production: isNaN(production) ? 0 : production.toFixed(2),
    }));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTopWells(formattedWells);
  }, [selectedField]);

  const columns = [
    {
      title: "Well Name",
      dataIndex: "wellName",
      key: "wellName",
    },
    {
      title: "Production",
      dataIndex: "production",
      key: "production",
      sorter: (a, b) => a.production - b.production,
    },
  ];
  return (
    <div>
      {loading && <Loader />}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <Select
            options={wellNames}
            label={"Well Selection"}
            value={selectedWell}
            onChange={(selectedValue) => setSelectedWell(selectedValue)}
          />
        </div>
        <div className="bg-white p-4 rounded-lg">
          <Select
            options={fieldNames}
            label={"Field selection"}
            value={selectedField}
            onChange={(selectedValue) => setSelectedField(selectedValue)}
          />
        </div>
        <div className="bg-white p-4 rounded-lg">
          <DateRangePicker
            label={"Date range selection"}
            value={selectedDateRange}
            onChange={(selectedValue) => setSelectedDateRange(selectedValue)}
          />
        </div>
        <div className="bg-white p-4 rounded-lg">
          <Select
            label={"Timezone conversion"}
            options={validMomentTimezones.map((timezone) => ({
              label: timezone,
              value: timezone,
            }))}
            value={selectedTimezone}
            onChange={(selectedValue) => setSelectedTimezone(selectedValue)}
          />
        </div>
      </div>
      <div className="p-2 rounded-lg mt-4 bg-white">
        {lineData.length === 0 && lineData2.length === 0 && (
          <div className="text-center text-red-500">No data available</div>
        )}
        <LineCharts config={config} />
      </div>
      <div className="bg-white p-2 rounded-lg mt-4">
        {columnData.length === 0 &&
          columnData2.length === 0 &&
          columnData3.length === 0 && (
            <div className="text-center text-red-500">No data available</div>
          )}
        <ColumnCharts config={configBar} />
      </div>
      <div className="bg-white p-2 rounded-lg mt-4">
        {columnData.length === 0 &&
          columnData2.length === 0 &&
          columnData3.length === 0 && (
            <div className="text-center text-red-500">No data available</div>
          )}
        <ColumnCharts config={configBar2} />
      </div>
      <div className="mt-4">
        <h2 className="text-[#333333] opacity-70 font-semibold text-[16px] mb-2">
          Top Producing Wells in {selectedField}
        </h2>
        <div className="bg-white rounded-lg">
        <Table
          className="rounded-lg"
          pagination={false}
          columns={columns}
          dataSource={topWells}
        />
        </div>
      </div>
    </div>
    );
}

export default Dashboard;
