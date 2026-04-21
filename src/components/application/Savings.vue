<template>
  <div class="status">
    <el-dialog v-model="visible" title="Pay-Per-Use Savings Calculator" class="mt-12" width="600px">
      <div class="text-center py-4">
        <p class="mb-8" style="color: var(--el-text-color-secondary);">Stop paying $80+/month for subscriptions. Pay fractions of a cent per generation.</p>
        <div style="display: flex; flex-direction: row; gap: 1rem; align-items: stretch; justify-content: center; flex-wrap: wrap;">
          <el-card shadow="hover" style="flex: 1; min-width: 250px;">
            <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--el-color-primary);">Midjourney</h3>
            <p style="font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;">Subscription: $30/mo</p>
            <p style="font-size: 1.5rem; font-weight: bold; margin-top: 1rem;">$0.04 <span style="font-size: 0.75rem; font-weight: normal; color: #9ca3af;">/ image</span></p>
          </el-card>
          <el-card shadow="hover" style="flex: 1; min-width: 250px;">
            <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--el-color-primary);">Suno AI</h3>
            <p style="font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;">Subscription: $10/mo</p>
            <p style="font-size: 1.5rem; font-weight: bold; margin-top: 1rem;">$0.015 <span style="font-size: 0.75rem; font-weight: normal; color: #9ca3af;">/ track</span></p>
          </el-card>
          <el-card shadow="hover" style="flex: 1; min-width: 250px; border: 2px solid var(--el-color-primary);">
            <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--el-color-primary);">Total Savings</h3>
            <p style="font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;">Assuming 50 generations each</p>
            <p style="font-size: 1.875rem; font-weight: bold; margin-top: 1rem; color: #22c55e;">Over 90% Cheaper</p>
          </el-card>
        </div>
      </div>
    </el-dialog>
    <el-button circle class="entry" @click="visible = true">
      <font-awesome-icon icon="fa-solid fa-bolt" class="icon" />
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElButton, ElDialog, ElCard } from 'element-plus';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'SavingsStatus',
  components: {
    ElButton,
    ElDialog,
    ElCard,
    FontAwesomeIcon
  },
  data() {
    return {
      visible: false
    };
  }
});
</script>

<style lang="scss" scoped>
.status {
  .entry {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--el-border-color);
    background-color: var(--el-bg-color-overlay);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    
    .icon {
      font-size: 16px;
      color: var(--el-text-color-primary);
    }
  }
}
</style>
