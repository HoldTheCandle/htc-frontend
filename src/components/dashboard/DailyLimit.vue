<template>
  <div class="daily-limit-wrapper">
    <div class="card daily-limit">
      <h4>Daily Limit</h4>
      <p class="limit-amount">$2,500.00</p>
      <p class="limit-sub">spent of $20,000.00</p>

      <div class="progress-bar">
        <div class="progress" :style="{ width: '12.5%' }"></div>
      </div>

      <span class="percent">12.5%</span>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 6px;
  margin: 10px 0;
}
.progress {
  height: 100%;
  background: #0080ff;
  border-radius: 6px;
}
.percent {
  color: #0080ff;
  font-weight: bold;
}
</style>
