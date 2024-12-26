<template>
  <div
    id="arrow"
    data-popper-arrow
  />
</template>

<style scoped>
#arrow,
#arrow::before {
  position: absolute;
  box-sizing: border-box;
  width: calc(10px - var(--popper-border-width, 0px));
  height: calc(10px - var(--popper-border-width, 0px));
  background: var(--popper-background-color);
  transition: background 250ms ease-in-out;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}

/* Top arrow */
.popper[data-popper-placement^="top"] > #arrow {
  bottom: -5px;
}

.popper[data-popper-placement^="top"] > #arrow::before {
  border-right:
    var(--popper-border-width)
    var(--popper-border-style) var(--popper-border-color);
  border-bottom:
    var(--popper-border-width)
    var(--popper-border-style) var(--popper-border-color);
}

/* Bottom arrow */
.popper[data-popper-placement^="bottom"] > #arrow {
  top: -5px;
}

.popper[data-popper-placement^="bottom"] > #arrow::before {
  border-top:
    var(--popper-border-width)
    var(--popper-border-style) var(--popper-border-color);
  border-left:
    var(--popper-border-width)
    var(--popper-border-style) var(--popper-border-color);
}

/* Left arrow */
.popper[data-popper-placement^="left"] > #arrow {
  right: -5px;
}

.popper[data-popper-placement^="left"] > #arrow::before {
  border-top:
    var(--popper-border-width)
    var(--popper-border-style) var(--popper-border-color);
  border-right:
    var(--popper-border-width)
    var(--popper-border-style) var(--popper-border-color);
}

/* Right arrow */
.popper[data-popper-placement^="right"] > #arrow {
  left: -5px;
}
</style>
