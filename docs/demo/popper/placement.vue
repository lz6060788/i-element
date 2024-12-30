<script setup lang="ts">
import {
  IPopper,
  IButton,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <div class="row top">
      <i-popper
        arrow
        content="这是一段描述占位符"
        placement="top-end"
      >
        <i-button>上左</i-button>
      </i-popper>
      <i-popper
        arrow
        content="这是一段描述占位符"
        placement="top"
      >
        <i-button>上中</i-button>
      </i-popper>
      <i-popper
        arrow
        content="这是一段描述占位符"
        placement="top-start"
      >
        <i-button>上右</i-button>
      </i-popper>
    </div>
    <div class="row center">
      <div class="left column">
        <i-popper
          arrow
          content="这是一段描述占位符"
          placement="left-end"
        >
          <i-button>左上</i-button>
        </i-popper>
        <i-popper
          arrow
          content="这是一段描述占位符"
          placement="left"
        >
          <i-button>左中</i-button>
        </i-popper>
        <i-popper
          arrow
          content="这是一段描述占位符"
          placement="left-start"
        >
          <i-button>左下</i-button>
        </i-popper>
      </div>
      <div class="placeholder" />
      <div class="right column">
        <i-popper
          arrow
          content="这是一段描述占位符"
          placement="right-end"
        >
          <i-button>右上</i-button>
        </i-popper>
        <i-popper
          arrow
          content="这是一段描述占位符"
          placement="right"
        >
          <i-button>右中</i-button>
        </i-popper>
        <i-popper
          arrow
          content="这是一段描述占位符"
          placement="right-start"
        >
          <i-button>右下</i-button>
        </i-popper>
      </div>
    </div>
    <div class="row bottom">
      <i-popper
        arrow
        content="这是一段描述占位符"
        placement="bottom-end"
      >
        <i-button>下左</i-button>
      </i-popper>
      <i-popper
        arrow
        content="这是一段描述占位符"
        placement="bottom"
      >
        <i-button>下中</i-button>
      </i-popper>
      <i-popper
        arrow
        content="这是一段描述占位符"
        placement="top-start"
      >
        <i-button>下右</i-button>
      </i-popper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px 0;

  .row {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;

    &.center {
      height: 120px;

      .column {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: end;
        justify-content: center;
      }

      .placeholder {
        width: 160px;
      }
    }
  }

  .trigger {
    padding: 8px;
    line-height: 40px;
    text-align: center;
    background-color: pink;
  }
}
</style>
