<template>
  <div class="dashboard-container">

    <div class="grid">

      <!-- BALANCE CARD -->
      <div class="card balance-card">
        <h3 class="label">Balance Total</h3>
        <p class="amount">$562,000</p>
      </div>

      <!-- DAILY LIMIT -->
      <div class="card daily-limit">
        <h4>Daily Limit</h4>
        <p class="limit-amount">$2,500.00</p>
        <p class="limit-sub">spent of $20,000.00</p>

        <div class="progress-bar">
          <div class="progress" :style="{ width: '12.5%' }"></div>
        </div>

        <span class="percent">12.5%</span>
      </div>

      <!-- ACTIONS -->
      <div class="card actions">
        <div class="action-grid">
          <div class="action-btn"><i class="ri-add-circle-line"></i> Top Up</div>
          <div class="action-btn"><i class="ri-exchange-dollar-line"></i> Transfer</div>
          <div class="action-btn"><i class="ri-arrow-left-circle-line"></i> Request</div>
          <div class="action-btn"><i class="ri-time-line"></i> History</div>
        </div>
      </div>

      <!-- SAVING PLANS -->
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

      <!-- STATISTICS -->
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

      <!-- RECENT ACTIVITY -->
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
// Mock total, no API
</script>

<style scoped>
.dashboard-container {
  width: 100%;
  padding: 20px;
  background: #f4f7fa;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

/* CARD */
.card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 6px 20px rgba(43, 160, 255, 0.15);
}

/* BALANCE CARD */
.balance-card {
  grid-column: span 2;
}
.label {
  opacity: 0.6;
  font-size: 14px;
}
.amount {
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
  font-size: 14px;
  cursor: pointer;
}
.action-btn i {
  display: block;
  font-size: 22px;
  margin-bottom: 6px;
}

/* SAVING PLANS */
.header {
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
  margin: 0;
  font-size: 14px;
}
.activity .time {
  font-size: 12px;
  opacity: 0.6;
}

/* ---------------------- */
/* RESPONSIVE GRID */
/* ---------------------- */

/* Laptop */
@media (max-width: 1280px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .balance-card {
    grid-column: span 3;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .balance-card {
    grid-column: span 2;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .dashboard-container {
    padding: 10px;
  }
  .card {
    padding: 14px;
  }
}
</style>
