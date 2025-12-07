<template>
  <div class="actions-panel-wrapper">
    <div class="card actions">
      <div class="action-grid">
        <div class="action-btn"><i class="ri-add-circle-line"></i> Top Up</div>
        <div class="action-btn"><i class="ri-exchange-dollar-line"></i> Transfer</div>
        <div class="action-btn"><i class="ri-arrow-left-circle-line"></i> Request</div>
        <div class="action-btn"><i class="ri-time-line"></i> History</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.action-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.action-btn {
  background: #f4f7fa;
  padding: 12px;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
}
.action-btn i {
  font-size: 22px;
  margin-bottom: 4px;
  display: block;
}
</style>
