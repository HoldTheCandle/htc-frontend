<template>
  <div class="dashboard-container">

    <!-- GRID PRINCIPAL -->
    <div class="grid">

      <!-- ***** CARD BALANCE ***** -->
      <div class="card balance-card">
        <div class="title-block">
          <h3 class="name">Tu Cuenta</h3>
          <p class="label">Balance Total</p>
          <p class="amount">$562,000</p>
        </div>
      </div>

      <!-- ***** DAILY LIMIT ***** -->
      <div class="card daily-limit">
        <h4>Daily Limit</h4>
        <p class="limit-amount">$2,500.00</p>
        <p class="limit-sub">spent of $20,000.00</p>

        <div class="progress-bar">
          <div class="progress" :style="{ width: '12.5%' }"></div>
        </div>

        <span class="percent">12.5%</span>
      </div>

      <!-- ***** ACCIONES ***** -->
      <div class="card actions">
        <div class="action-grid">
          <div class="action-btn"><i class="ri-add-circle-line"></i> Top Up</div>
          <div class="action-btn"><i class="ri-exchange-dollar-line"></i> Transfer</div>
          <div class="action-btn"><i class="ri-arrow-left-circle-line"></i> Request</div>
          <div class="action-btn"><i class="ri-time-line"></i> History</div>
        </div>
      </div>

      <!-- ***** SAVING PLANS ***** -->
      <div class="card saving-plans">
        <div class="header">
          <h4>Saving Plans</h4>
          <button class="add-btn">+ Add Plan</button>
        </div>

        <p class="total-savings">Total Savings</p>
        <h3 class="value">$84,500</h3>

        <div class="bar-box">
          <p>Emergency Fund</p>
          <div class="progress-bar">
            <div class="progress" :style="{ width: '60%' }"></div>
          </div>
          <small>$6,000 / $10,000</small>
        </div>
      </div>

      <!-- ***** STATISTICS ***** -->
      <div class="card stats">
        <h4>Statistics (This Month)</h4>

        <div class="circle-chart">
          <svg viewBox="0 0 36 36">
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle"
              stroke-dasharray="40, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          <div class="circle-value">$3,500</div>
        </div>
      </div>

      <!-- ***** RECENT ACTIVITY ***** -->
      <div class="card activity">
        <h4>Recent Activity</h4>

        <div class="item">
          <img src="/default-avatar.png" class="avatar" />
          <div>
            <p class="user">Jamie Smith updated account settings</p>
            <span class="time">16:05</span>
          </div>
        </div>

        <div class="item">
          <img src="/default-avatar.png" class="avatar" />
          <div>
            <p class="user">Alex Johnson logged in</p>
            <span class="time">13:05</span>
          </div>
        </div>

        <div class="item">
          <img src="/default-avatar.png" class="avatar" />
          <div>
            <p class="user">Morgan Lee added a new saving goal</p>
            <span class="time">11:50</span>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
// No API, todo mock.
</script>

<style scoped>
.dashboard-container {
  width: 100%;
  padding: 20px;
  background: #f4f7fa;
}

/* GRID LAYOUT */
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
}

/* GENERAL CARD */
.card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 6px 20px rgba(43, 160, 255, 0.15);
}

/* BALANCE CARD */
.balance-card {
  grid-column: span 2;
}
.title-block .label {
  color: rgba(26, 32, 44, 0.6);
}
.title-block .amount {
  font-size: 32px;
  font-weight: bold;
  color: #1a202c;
}

/* DAILY LIMIT */
.daily-limit .progress-bar {
  height: 10px;
  background: #e2e8f0;
  border-radius: 6px;
  margin: 10px 0;
}
.daily-limit .progress {
  height: 100%;
  background: #0080ff;
  border-radius: 6px;
}
.percent {
  font-weight: bold;
  color: #0080ff;
}

/* ACTIONS */
.action-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.action-btn {
  background: #f4f7fa;
  border-radius: 12px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}
.action-btn i {
  display: block;
  font-size: 22px;
  margin-bottom: 6px;
}

/* SAVING PLANS */
.saving-plans .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-btn {
  background: #0080ff;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 8px;
  cursor: pointer;
}
.value {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* STATISTICS */
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
  stroke-linecap: round;
}
.circle-value {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #1a202c;
}

/* ACTIVITY */
.activity .item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.activity .avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
}
.activity .user {
  font-size: 14px;
  margin: 0;
}
.activity .time {
  font-size: 12px;
  opacity: 0.6;
}
</style>
