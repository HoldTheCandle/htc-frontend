<template>
  <div class="recent-wrapper">
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
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
}
.user {
  font-size: 14px;
}
.time {
  font-size: 12px;
  opacity: 0.6;
}
</style>
