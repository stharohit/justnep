<template>
  <div class="col-11 m-auto">
    <div class="resturant-outlet">
      <ul class="row skeleton-list">
        <li class="item col-md-4">
          <div class="card-demo">
            <div class="infos">
              <div class="thumbnail"></div>
              <div class="date">
                <span class="skeleton-bone"></span>
              </div>
            </div>
            <div class="title">
              <span class="skeleton-bone"></span>
              <span class="skeleton-bone"></span>
            </div>
          </div>
        </li>
        <li class="item col-md-4">
          <div class="card-demo">
            <div class="infos">
              <div class="thumbnail"></div>
              <div class="date">
                <span class="skeleton-bone"></span>
              </div>
            </div>
            <div class="title">
              <span class="skeleton-bone"></span>
              <span class="skeleton-bone"></span>
            </div>
          </div>
        </li>
        <li class="item col-md-4">
          <div class="card-demo">
            <div class="infos">
              <div class="thumbnail"></div>
              <div class="date">
                <span class="skeleton-bone"></span>
              </div>
            </div>
            <div class="title">
              <span class="skeleton-bone"></span>
              <span class="skeleton-bone"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
%skeleton-placeholder {
  position: relative;
  overflow: hidden;
  background-color: #ececec;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateX(-100%);
    content: "";
    background: linear-gradient(0.25turn, transparent, #fff, transparent);
    pointer-events: none;
    opacity: 0.8;
    animation: skeleton-animation 2s infinite;
  }
}

@mixin skeleton-background($animate: true) {
  @extend %skeleton-placeholder;
  @if $animate != true {
    &::before {
      display: none;
    }
  } @else {
    &:not(:empty) {
      &::before {
        display: none;
      }
    }
  }
}

@mixin skeleton-bone(
  $width: null,
  $maxWidth: null,
  $height: null,
  $maxHeight: null,
  $multipleDirection: false,
  $multipleSpacing: null,
  $lastWidth: null,
  $animate: true
) {
  .skeleton-bone {
    @if $width != null {
      width: $width;
    } @else {
      width: 100%;
    }
    @if $maxWidth != null {
      max-width: $maxWidth;
    }
    @if $height != null {
      height: $height;
    } @else {
      height: 100%;
    }
    @if $maxHeight != null {
      max-height: $maxHeight;
    }
    @if $multipleDirection !=false and $multipleSpacing !=null {
      &:not(:first-child) {
        @if $multipleDirection == top {
          margin: $multipleSpacing 0 0 0;
        } @else if $multipleDirection == right {
          margin: 0 $multipleSpacing 0 0;
        } @else if $multipleDirection == bottom {
          margin: 0 0 $multipleSpacing 0;
        } @else if $multipleDirection == left {
          margin: 0 0 0 $multipleSpacing;
        }
      }
      @if $lastWidth != null {
        &:not(:only-child):last-child {
          max-width: $lastWidth;
        }
      }
    }
    @if $animate != true {
      &::before {
        display: none;
      }
    }
  }
}
.resturant-outlet {
  margin-top: 50px;
}
ul {
  list-style: none;
  padding: 0;
}

.skeleton-bone {
  display: block;
  @extend %skeleton-placeholder;
}

.btn-fill {
  cursor: pointer;
  padding: 6px 12px 3px 12px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1em;
  text-transform: uppercase;
  background-color: #e15554;
  border-radius: 10px;
  color: #fff;
  position: absolute;
  right: 100%;
  top: 32px;
  transition: 0.5s ease;
  &:hover {
    background-color: #e1548f;
  }
  &.disabled {
    pointer-events: none;
    filter: grayscale(100%);
    opacity: 0.2;
  }
}

.skeleton-list {
  position: relative;
  .item {
    border-bottom: 1px solid #fafafa;
    position: relative;
    .card-demo {
      display: flex;
      flex-direction: column;
      padding: 15px;
      border-radius: 6px;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      .infos {
        width: 100%;
        margin-right: 16px;
        .thumbnail {
          width: 100%;
          padding-bottom: 56.25%;
          background-size: cover;
          @include skeleton-background();
        }
        .date {
          margin-top: 8px;
          font-size: 12px;
          line-height: 16px;
          @include skeleton-bone($height: 16px, $maxWidth: 70%);
        }
      }
      .title {
        width: 65%;
        font-size: 18px;
        font-weight: bold;
        @include skeleton-bone(
          $height: 20px,
          $multipleDirection: top,
          $multipleSpacing: 12px,
          $lastWidth: 70%
        );
      }
    }
  }
}

@keyframes skeleton-animation {
  0% {
    transform: translateX(-100%);
  }
  30% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
