<template>
  <div class="statistics-wrapper">
    <div class="card stats">

      <h4>Statistics (This Month)</h4>

      <div class="circle-chart">
        <svg viewBox="0 0 36 36">
          <path class="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path class="circle"
            stroke-dasharray="40, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        <div class="circle-value">$3,500</div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.circle-chart {
  width: 120px;
  height: 120px;
  margin: auto;
  position: relative;
}
.circle-bg {
  fill: none;
  stroke: #e2e8f0;
  stroke-width: 3.5;
}
.circle {
  fill: none;
  stroke: #0080ff;
  stroke-width: 3.5;
}
.circle-value {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
