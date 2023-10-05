<template>
  <div class="loading-container">
    <!-- in a wrapping svg define a symbol describing the actual bee -->
    <svg viewBox="0 0 600 600">
      <defs>
        <symbol id="bee" viewBox="0 0 170 100">
          <!-- translation to avoid cropping the stroke -->
          <g transform="translate(5 5)">
            <!-- body, with overlapping shadow and light source -->
            <path
              d="M 0 45 a 45 45 0 0 1 45 -45 h 80 a 25 25 0 0 1 25 25 q -45 65 -105 65 a 45 45 0 0 1 -45 -45"
              fill="#ffcd12"
              stroke="#000"
              stroke-width="10"
              stroke-linecap="round"
            ></path>
            <path
              d="M 5 45 a 40 40 0 0 0 45 40 q 60 0 105 -65 q -45 45 -105 60 a 50 50 0 0 1 -45 -40"
              fill="#c57a00"
              opacity="0.5"
            ></path>
            <path d="M 5 45 a 40 40 0 0 1 40 -40 h 20 q -50 0 -60 40" fill="#fff"></path>

            <!-- stripes -->
            <path
              d="M 60 2.5 a 82 82 0 0 1 0 82"
              fill="none"
              stroke="#000"
              stroke-width="15"
              stroke-linecap="round"
            ></path>
            <path
              d="M 90 2.5 a 74 74 0 0 1 0 74"
              fill="none"
              stroke="#000"
              stroke-width="15"
              stroke-linecap="round"
            ></path>

            <!-- wing, with overlapping shadow -->
            <path
              d="M 70 0 h 60 a 30 30 0 0 1 0 60 q -30 0 -60 -60"
              fill="#fff"
              stroke="#000"
              stroke-width="10"
              stroke-linecap="round"
            ></path>
            <path
              d="M 155 30 a 20 20 0 0 1 -20 20 q -30 0 -60 -45 q 25 45 60 55 a 20 20 0 0 0 20 -20"
              fill="#000"
              opacity="0.1"
            ></path>

            <!-- eye -->
            <circle cx="38" cy="35" r="12" fill="#252222"></circle>
            <circle cx="40" cy="32" r="4" fill="#fff"></circle>
          </g>
        </symbol>
      </defs>

      <!-- center the graphics in the wrapping svg
    wrap each bee in a group which is translated to have the bee rotate around the center
    -->
      <g transform="translate(300 300)">
        <g transform="rotate(0)" class="rotate">
          <!-- rotate this group -->
          <g transform="rotate(0)">
            <!-- starting point, to separate the bees -->
            <g transform="translate(0 -70)" class="translate">
              <!-- translation to separate from the center -->
              <use href="#bee" width="170" height="100" transform="translate(-85 -50)"></use>
              <!-- translation to center the bee graphics -->
            </g>
          </g>
        </g>
        <!-- repeat with different starting points (initial rotation) -->
        <g transform="rotate(0)" class="rotate">
          <g transform="rotate(120)">
            <g transform="translate(0 -70)" class="translate">
              <use href="#bee" width="170" height="100" transform="translate(-85 -50)"></use>
            </g>
          </g>
        </g>
        <g transform="rotate(0)" class="rotate">
          <g transform="rotate(240)">
            <g transform="translate(0 -70)" class="translate">
              <use href="#bee" width="170" height="100" transform="translate(-85 -50)"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.loading-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(62, 62, 62, 0.742);
    z-index: 1000;
}
.loading-container > svg {
  position: fixed;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vmin;
  height: auto;
  z-index: 1000;
}
/* animation to rotate the bees around the center */
.rotate {
  animation: rotate 5s infinite reverse cubic-bezier(0.25, 0.45, 0.75, 0.55); /* timing function slightly different than linear to give a bit of a nod to each step */
}
/* rotate the bees around the center in multiple steps, this to have the timing function affect each step */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(120deg);
  }
  67% {
    transform: rotate(240deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
