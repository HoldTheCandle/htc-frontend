<template>
  <div class="saving-plans-wrapper">
    <div class="card saving-plans">

      <div class="header">
        <h4>Saving Plans</h4>
        <button class="add-btn">+ Add Plan</button>
      </div>

      <p class="text-small">Total Savings</p>
      <h3 class="value">$84,500</h3>

      <div class="bar-box">
        <p>Emergency Fund</p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: '60%' }"></div>
        </div>
        <small>$6,000 / $10,000</small>
      </div>

    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-btn {
  background: #0080ff;
  color: white;
  padding: 4px 10px;
  border-radius: 8px;
}
.value {
  font-size: 26px;
  font-weight: bold;
}
.progress-bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 6px;
}
.progress {
  height: 100%;
  background: #0080ff;
  border-radius: 6px;
}
</style>
