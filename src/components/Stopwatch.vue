<template>
  <div class="stopwatch-widget">
    <h2>STOPWATCH</h2>
    <div class="time-container">
      <p class="time">{{ formatTime }}</p>
    </div>
    <div class="button-container">
      <button @click="startStopwatch" :disabled="isRunning">Start</button>
      <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
      <button @click="resetStopwatch">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor(this.elapsedTime / 1000) % 60;
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const hours = Math.floor(this.elapsedTime / 3600000);

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    },
  },
  methods: {
    startStopwatch() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.startTime = Date.now();

        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
      }
    },
    stopStopwatch() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetStopwatch() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
      this.elapsedTime = 0;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget {
  background-color: #9babb8;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.stopwatch-widget h2 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
}

.time-container {
  margin-bottom: 20px;
}

.time {
  color: #fff;
  font-size: 48px;
  font-weight: bold;
}

.button-container {
  display: flex;
  justify-content: center;
}

.stopwatch-widget button {
  margin: 0 5px;
  padding: 10px 20px;
  background-color: #ffa0a0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.stopwatch-widget button:hover {
  background-color: #ff5d5d;
}

.stopwatch-widget button:disabled {
  background-color: #d7c0ae;
  color: #fff;
  cursor: not-allowed;
}
</style>
