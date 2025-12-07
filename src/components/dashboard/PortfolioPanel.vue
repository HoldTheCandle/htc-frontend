<template>
  <div class="portfolio-panel-wrapper">
    <div class="card portfolio-panel">

      <!-- HEADER -->
      <div class="top-row">
        <div>
          <p class="portfolio-label">Portfolio</p>
          <h2 class="portfolio-amount">$562,000</h2>
        </div>
      </div>

      <!-- TIME RANGES -->
      <div class="range-selector">
        <span
          v-for="r in ranges"
          :key="r.key"
          :class="{ active: selectedRange === r.key }"
          @click="setRange(r.key)"
        >
          {{ r.label }}
        </span>
      </div>

      <!-- CHART -->
      <div class="chart-background">
        <ApexChart
          type="area"
          width="100%"
          height="100%"
          :options="computedOptions"
          :series="series"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ApexChart from "vue3-apexcharts";

/* ============================
   TIME RANGES
============================ */
const ranges = [
  { key: "1D", label: "1D" },
  { key: "1S", label: "1S" },
  { key: "1M", label: "1M" },
  { key: "1A", label: "1A" },
  { key: "MAX", label: "Máx" },
];

const selectedRange = ref("1D");
const setRange = (r) => (selectedRange.value = r);

/* ============================
   RANDOM WALK DATA
============================ */
function randomWalk(n = 140, start = 0.1) {
  let y = start;
  return Array.from({ length: n }).map(() => {
    y += (Math.random() - 0.45) * 0.03;
    return parseFloat(y.toFixed(3));
  });
}

const mockData = {
  "1D": randomWalk(120, 0.2),
  "1S": randomWalk(140, 0.1),
  "1M": randomWalk(170, 0.05),
  "1A": randomWalk(365, -0.1),
  "MAX": randomWalk(600, -0.2),
};

/* ============================
   LABEL MAP (máx 5)
============================ */
const xLabelMap = {
  "1D": ["9:00", "12:00", "15:00", "18:00", "21:00"],
  "1S": ["Mon", "Tue", "Wed", "Thu", "Fri"],
  "1M": ["W1", "W2", "W3", "W4", "W5"],
  "1A": ["Jan", "Apr", "Jul", "Oct", "Dec"],
  "MAX": ["2019", "2020", "2021", "2022", "2023"],
};

function formatXAxisLabel(idx, total, range) {
  const labels = xLabelMap[range];
  const positions = [
    0,
    Math.floor(total * 0.25),
    Math.floor(total * 0.5),
    Math.floor(total * 0.75),
    total - 1,
  ];
  const matchIndex = positions.indexOf(idx);
  return matchIndex !== -1 ? labels[matchIndex] : "";
}

/* ============================
   SERIES (solo 1, tipo area)
============================ */
const series = computed(() => [
  {
    name: "Portfolio",
    data: mockData[selectedRange.value],
  },
]);

/* ============================
   APEX OPTIONS
============================ */
const computedOptions = computed(() => ({
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    background: "transparent",
  },

  stroke: {
    curve: "smooth",
    width: 3,
    lineCap: "round",
    colors: ["#0CE7A6"], // verde limpio
  },

  // ⭐ Sombra suave debajo de la línea (gradient sólido -> transparente)
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 0,
      opacityFrom: 0.22,   // más sólido pegado a la línea
      opacityTo: 0,        // totalmente transparente abajo
      stops: [0, 100],
      colorStops: [
        {
          offset: 0,
          color: "rgba(12, 231, 166, 0.25)",
          opacity: 1,
        },
        {
          offset: 100,
          color: "rgba(12, 231, 166, 0)",
          opacity: 0,
        },
      ],
    },
  },

  markers: { size: 0 },
  dataLabels: { enabled: false },

  grid: { show: false },

  yaxis: {
    labels: { show: false },
  },

  xaxis: {
    labels: {
      show: true,
      style: { colors: "#7d8da1", fontSize: "11px" },
      formatter: (_, index) =>
        formatXAxisLabel(
          index,
          mockData[selectedRange.value].length,
          selectedRange.value
        ),
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: false },
  },

  tooltip: {
    enabled: true,
    shared: false,
    intersect: false,
    theme: "dark",
    y: {
      formatter: (val) => (val * 100).toFixed(2) + " %",
    },
  },

  crosshairs: {
    show: true,
    stroke: {
      color: "#6b7a90",
      width: 1,
      dashArray: 4,
    },
  },
}));
</script>

<style scoped>
.portfolio-panel-wrapper {
  width: 100%;
  margin-bottom: 25px;
}

.portfolio-panel {
  position: relative;
  height: 360px;
  padding: 20px;
  border-radius: 20px;

  /* Fondo único gris-azulado */
  background: #f5f8fc;

  /* Que no corte la sombra si sobresale un poco */
  overflow: visible;
}

/* HEADER */
.portfolio-label {
  font-size: 14px;
  opacity: 0.6;
}

.portfolio-amount {
  font-size: 42px;
  font-weight: 800;
}

/* RANGE SELECTOR */
.range-selector {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.range-selector span {
  font-size: 15px;
  cursor: pointer;
  opacity: 0.4;
  transition: 0.2s;
}

.range-selector span.active {
  opacity: 1;
  font-weight: 700;
  color: #000;
}

/* CHART */
.chart-background {
  position: absolute;
  inset: 0;
  padding-top: 90px;
  z-index: 1;
}

/* Controles encima de la gráfica */
.top-row,
.range-selector {
  position: relative;
  z-index: 10;
}
</style>
