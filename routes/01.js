let a=`<html lang="en" style="font-size: 17.0667px; --status-bar-height: 0px; --top-window-height: 0px; --window-left: 0px; --window-right: 0px; --window-margin: 0px; --tab-bar-height: 50px; --window-top: calc(0px + env(safe-area-inset-top)); --window-bottom: calc(0px + env(safe-area-inset-bottom));"><head>
    <script>if (typeof globalThis === 'undefined') {
  window.globalThis = window
}</script>

    <script type="module" src="/@vite/client"></script>

    <meta charset="UTF-8">
    <script>
      var coverSupport = 'CSS' in window && typeof CSS.supports === 'function' && (CSS.supports('top: env(a)') ||
        CSS.supports('top: constant(a)'))
      document.write(
        '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' +
        (coverSupport ? ', viewport-fit=cover' : '') + '" />')
    </script><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover">
    <title>个人信息</title>
    <!--preload-links-->
    <!--app-context-->
  <style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/framework/base.css">* {
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  -webkit-user-select: none;
  user-select: none;
  width: 100%;
  height: 100%;
}

/* body,
uni-page-body {
  background-color: var(--UI-BG-0);
  color: var(--UI-FG-0);
} */

body {
  overflow-x: hidden;
  font-size: 16px;
}

uni-app,
uni-page,
uni-page-wrapper,
uni-page-body {
  display: block;
  box-sizing: border-box;
  width: 100%;
}

uni-page-wrapper {
  position: relative;
}

#app,
uni-app,
uni-page,
uni-page-wrapper {
  height: 100%;
}

/* toast,modal,actionSheet,picker,layout */
.uni-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
/* toast,modal,actionSheet,picker */
.uni-fade-enter-active,
.uni-fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.uni-fade-enter-from,
.uni-fade-leave-active {
  opacity: 0;
}

.uni-loading,
uni-button[loading]:before {
  background-color: transparent;
  background-image: url('data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=');
  background-repeat: no-repeat;
}

.uni-loading {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  animation: uni-loading 1s steps(12, end) infinite;
  background-size: 100%;
}

@keyframes uni-loading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

html {
  /* --UI-BG-0: #ededed; */
  --primary-color: #007aff;
  --UI-BG: #fff;
  --UI-BG-1: #f7f7f7;
  --UI-BG-2: #fff;
  --UI-BG-3: #f7f7f7;
  --UI-BG-4: #4c4c4c;
  --UI-BG-5: #fff;
  --UI-FG: #000;
  --UI-FG-0: rgba(0, 0, 0, 0.9);
  --UI-FG-HALF: rgba(0, 0, 0, 0.9);
  --UI-FG-1: rgba(0, 0, 0, 0.5);
  --UI-FG-2: rgba(0, 0, 0, 0.3);
  --UI-FG-3: rgba(0, 0, 0, 0.1);
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/framework/async.css">.uni-async-error {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: #999;
  padding: 100px 10px;
  text-align: center;
}
.uni-async-loading {
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
  text-align: center;
}

.uni-async-loading .uni-loading {
  width: 30px;
  height: 30px;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/framework/pageHead.css">uni-page-head {
  display: block;
  box-sizing: border-box;
}

.uni-page-head {
  position: fixed;
  left: var(--window-left);
  right: var(--window-right);
  height: 44px;
  height: calc(44px + constant(safe-area-inset-top));
  height: calc(44px + env(safe-area-inset-top));
  padding: 7px 3px;
  padding-top: calc(7px + constant(safe-area-inset-top));
  padding-top: calc(7px + env(safe-area-inset-top));
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 998;
  color: #fff;
  background-color: #000;
  transition-property: all;
}

.uni-page-head * {
  box-sizing: border-box;
}

.uni-page-head .uni-btn-icon {
  overflow: hidden;
  min-width: 1em;
  font-style: normal;
}

.uni-page-head-titlePenetrate,
.uni-page-head-titlePenetrate .uni-page-head-bd,
.uni-page-head-titlePenetrate .uni-page-head-bd * {
  pointer-events: none;
}

.uni-page-head-titlePenetrate * {
  pointer-events: auto;
}

.uni-page-head.uni-page-head-transparent .uni-page-head-ft > div {
  justify-content: center;
}

.uni-page-head ~ .uni-placeholder {
  width: 100%;
  height: 44px;
  height: calc(44px + constant(safe-area-inset-top));
  height: calc(44px + env(safe-area-inset-top));
}

.uni-placeholder-titlePenetrate {
  pointer-events: none;
}

.uni-page-head-hd {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.uni-page-head-bd {
  position: absolute;
  left: 70px;
  right: 70px;
  min-width: 0;
  -webkit-user-select: auto;
          user-select: auto;
}

.uni-page-head-btn {
  position: relative;
  width: auto;
  margin: 0 2px;
  word-break: keep-all;
  white-space: pre;
  cursor: pointer;
  font-size: 0px;
}

/* .uni-page-head-btn svg {
} */

.uni-page-head-transparent .uni-page-head-btn {
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
}

.uni-page-head-btn-red-dot::after {
  content: attr(badge-text);
  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
  color: white;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 18px;
  overflow: hidden;
  transform: scale(0.5) translate(40%, -40%);
  transform-origin: 100% 0;
}

.uni-page-head-btn-red-dot[badge-text]::after {
  font-size: 12px;
  width: auto;
  min-width: 18px;
  max-width: 42px;
  text-align: center;
  padding: 0 3px;
  transform: scale(0.7) translate(40%, -40%);
}

.uni-page-head-btn-select svg {
  vertical-align: middle;
  margin-left: 2px;
  transform: rotate(270deg) scale(0.8);
}

.uni-page-head-search {
  position: relative;
  display: flex;
  flex: 1;
  margin: 0 2px;
  line-height: 30px;
  font-size: 15px;
}

.uni-page-head-search-input {
  width: 100%;
  height: 100%;
  padding-left: 34px;
  text-align: left;
}

.uni-page-head-search-placeholder {
  position: absolute;
  max-width: 100%;
  height: 100%;
  padding-left: 34px;
  overflow: hidden;
  word-break: keep-all;
  white-space: pre;
}

.uni-page-head-search-placeholder-right {
  right: 0;
}

.uni-page-head-search-placeholder-center {
  left: 50%;
  transform: translateX(-50%);
}

.uni-page-head-search-icon {
  position: absolute;
  top: 0;
  left: 2px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.uni-page-head-ft {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  font-size: 13px;
}

.uni-page-head__title {
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.uni-page-head__title .uni-loading {
  width: 16px;
  height: 16px;
  margin-top: -3px;
}

.uni-page-head__title .uni-page-head__title_image {
  width: auto;
  height: 26px;
  vertical-align: middle;
}

.uni-page-head-shadow {
  overflow: visible;
}

.uni-page-head-shadow::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 5px;
  background-size: 100% 100%;
}

.uni-page-head-shadow-grey::after {
  background-image: url('https://cdn.dcloud.net.cn/img/shadow-grey.png');
}

.uni-page-head-shadow-blue::after {
  background-image: url('https://cdn.dcloud.net.cn/img/shadow-blue.png');
}

.uni-page-head-shadow-green::after {
  background-image: url('https://cdn.dcloud.net.cn/img/shadow-green.png');
}

.uni-page-head-shadow-orange::after {
  background-image: url('https://cdn.dcloud.net.cn/img/shadow-orange.png');
}

.uni-page-head-shadow-red::after {
  background-image: url('https://cdn.dcloud.net.cn/img/shadow-red.png');
}

.uni-page-head-shadow-yellow::after {
  background-image: url('https://cdn.dcloud.net.cn/img/shadow-yellow.png');
}

uni-page-head[uni-page-head-type='default'] ~ uni-page-wrapper {
  height: calc(100% - 44px);
  height: calc(100% - 44px - constant(safe-area-inset-top));
  height: calc(100% - 44px - env(safe-area-inset-top));
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/framework/tabBar.css">uni-tabbar {
  display: block;
  box-sizing: border-box;
  width: 100%;
  z-index: 998;
}

.uni-tabbar {
  display: flex;
  z-index: 998;
  box-sizing: border-box;
}

.uni-tabbar-top,
.uni-tabbar-bottom,
.uni-tabbar-top .uni-tabbar,
.uni-tabbar-bottom .uni-tabbar {
  position: fixed;
  left: var(--window-left);
  right: var(--window-right);
}

.uni-app--showlayout + .uni-tabbar-top,
.uni-app--showlayout + .uni-tabbar-bottom,
.uni-app--showlayout + .uni-tabbar-top .uni-tabbar,
.uni-app--showlayout + .uni-tabbar-bottom .uni-tabbar {
  left: var(--window-margin);
  right: var(--window-margin);
}

.uni-tabbar-bottom .uni-tabbar {
  bottom: 0;
  padding-bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.uni-tabbar ~ .uni-placeholder {
  width: 100%;
  margin-bottom: 0;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}

.uni-tabbar * {
  box-sizing: border-box;
}

.uni-tabbar__item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  font-size: 0;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.uni-tabbar__bd {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.uni-tabbar__icon {
  position: relative;
  display: inline-block;
  margin-top: 5px;
}

.uni-tabbar__icon.uni-tabbar__icon__diff {
  margin-top: 0px;
  width: 34px;
  height: 34px;
}

.uni-tabbar__icon img {
  width: 100%;
  height: 100%;
}

.uni-tabbar__iconfont {
  font-family: 'UniTabbarIconFont';
}

.uni-tabbar__label {
  position: relative;
  text-align: center;
  font-size: 10px;
}

.uni-tabbar-border {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
}

.uni-tabbar__reddot {
  position: absolute;
  top: 2px;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f43530;
  color: #ffffff;
  transform: translate(40%, 0%);
}

.uni-tabbar__badge {
  width: auto;
  height: 16px;
  line-height: 16px;
  border-radius: 16px;
  min-width: 16px;
  padding: 0 2px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
}

.uni-tabbar__mid {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background-size: 100% 100%;
}

.uni-app--showtabbar uni-page-wrapper {
  display: block;
  height: calc(100% - var(--tab-bar-height));
  height: calc(100% - var(--tab-bar-height) - constant(safe-area-inset-bottom));
  height: calc(100% - var(--tab-bar-height) - env(safe-area-inset-bottom));
}
.uni-app--showtabbar uni-page-wrapper::after {
  content: '';
  display: block;
  width: 100%;
  height: var(--tab-bar-height);
  height: calc(var(--tab-bar-height) + constant(safe-area-inset-bottom));
  height: calc(var(--tab-bar-height) + env(safe-area-inset-bottom));
}
.uni-app--showtabbar
  uni-page-head[uni-page-head-type='default']
  ~ uni-page-wrapper {
  height: calc(100% - 44px - var(--tab-bar-height));
  height: calc(
    100% - 44px - constant(safe-area-inset-top) - var(--tab-bar-height) -
      constant(safe-area-inset-bottom)
  );
  height: calc(
    100% - 44px - env(safe-area-inset-top) - var(--tab-bar-height) -
      env(safe-area-inset-bottom)
  );
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/framework/nvue.css">[nvue] uni-view,
[nvue] uni-label,
[nvue] uni-swiper-item,
[nvue] uni-scroll-view {
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
}

[nvue] uni-button {
  margin: 0;
}

[nvue-dir-row] uni-view,
[nvue-dir-row] uni-label,
[nvue-dir-row] uni-swiper-item {
  flex-direction: row;
}

[nvue-dir-column] uni-view,
[nvue-dir-column] uni-label,
[nvue-dir-column] uni-swiper-item {
  flex-direction: column;
}

[nvue-dir-row-reverse] uni-view,
[nvue-dir-row-reverse] uni-label,
[nvue-dir-row-reverse] uni-swiper-item {
  flex-direction: row-reverse;
}

[nvue-dir-column-reverse] uni-view,
[nvue-dir-column-reverse] uni-label,
[nvue-dir-column-reverse] uni-swiper-item {
  flex-direction: column-reverse;
}

[nvue] uni-view,
[nvue] uni-image,
[nvue] uni-input,
[nvue] uni-scroll-view,
[nvue] uni-swiper,
[nvue] uni-swiper-item,
[nvue] uni-text,
[nvue] uni-textarea,
[nvue] uni-video {
  position: relative;
  border: 0px solid #000000;
  box-sizing: border-box;
}

[nvue] uni-swiper-item {
  position: absolute;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/input.css">uni-input {
  display: block;
  font-size: 16px;
  line-height: 1.4em;
  height: 1.4em;
  min-height: 1.4em;
  overflow: hidden;
}

uni-input[hidden] {
  display: none;
}

.uni-input-wrapper,
.uni-input-placeholder,
.uni-input-form,
.uni-input-input {
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: inherit;
}

.uni-input-wrapper,
.uni-input-form {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

.uni-input-placeholder,
.uni-input-input {
  width: 100%;
}

.uni-input-placeholder {
  position: absolute;
  top: auto !important;
  left: 0;
  color: gray;
  overflow: hidden;
  text-overflow: clip;
  white-space: pre;
  word-break: keep-all;
  pointer-events: none;
  line-height: inherit;
}

.uni-input-input {
  position: relative;
  display: block;
  height: 100%;
  background: none;
  color: inherit;
  opacity: 1;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  text-indent: inherit;
  text-transform: inherit;
  text-shadow: inherit;
}

.uni-input-input[type='search']::-webkit-search-cancel-button,
.uni-input-input[type="search"]::-webkit-search-decoration {
  display: none;
}

.uni-input-input::-webkit-outer-spin-button,
.uni-input-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
          appearance: none;
  margin: 0;
}

.uni-input-input[type='number'] {
  -moz-appearance: textfield;
}

.uni-input-input:disabled {
  /* 用于重置iOS14以下禁用状态文字颜色 */
  -webkit-text-fill-color: currentcolor;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/api/modal.css">uni-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: block;
  box-sizing: border-box;
}

.uni-modal {
  position: fixed;
  z-index: 999;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
}

.uni-modal * {
  box-sizing: border-box;
}

.uni-modal__hd {
  padding: 1em 1.6em 0.3em;
}

.uni-modal__title {
  font-weight: 400;
  font-size: 18px;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.uni-modal__bd {
  padding: 1.3em 1.6em 1.3em;
  min-height: 40px;
  font-size: 15px;
  line-height: 1.4;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  color: #999999;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
}

.uni-modal__textarea {
  resize: none;
  border: 0;
  margin: 0;
  width: 90%;
  padding: 10px;
  font-size: 20px;
  outline: none;
  border: none;
  background-color: #eee;
  text-decoration: inherit;
}

.uni-modal__ft {
  position: relative;
  line-height: 48px;
  font-size: 18px;
  display: flex;
}

.uni-modal__ft:after {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #d5d5d6;
  color: #d5d5d6;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}

.uni-modal__btn {
  display: block;
  flex: 1;
  color: #3cc51f;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  cursor: pointer;
}

.uni-modal__btn:active {
  background-color: #eeeeee;
}

.uni-modal__btn:after {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-left: 1px solid #d5d5d6;
  color: #d5d5d6;
  transform-origin: 0 0;
  transform: scaleX(0.5);
}

.uni-modal__btn:first-child:after {
  display: none;
}

.uni-modal__btn_default {
  color: #353535;
}

.uni-modal__btn_primary {
  color: #007aff;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/api/toast.css">uni-toast {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: block;
  box-sizing: border-box;
  pointer-events: none;
  font-size: 16px;
}

.uni-sample-toast {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 80%;
}

.uni-simple-toast__text {
  display: inline-block;
  vertical-align: middle;
  color: #ffffff;
  background-color: rgba(17, 17, 17, 0.7);
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 13px;
  text-align: center;
  max-width: 100%;
  word-break: break-all;
  white-space: normal;
}

uni-toast .uni-mask {
  pointer-events: auto;
}

.uni-toast {
  position: fixed;
  z-index: 999;
  width: 8em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(17, 17, 17, 0.7);
  text-align: center;
  border-radius: 5px;
  color: #ffffff;
}

.uni-toast * {
  box-sizing: border-box;
}

.uni-toast__icon {
  margin: 20px 0 0;
  width: 38px!important;
  height: 38px!important;
  vertical-align: baseline!important;
}

.uni-icon_toast {
  margin: 15px 0 0;
}

.uni-icon_toast.uni-icon-success-no-circle:before {
  color: #ffffff;
  font-size: 55px;
}

.uni-icon_toast.uni-loading {
  margin: 20px 0 0;
  width: 38px;
  height: 38px;
  vertical-align: baseline;
}

.uni-toast__content {
  margin: 0 0 15px;
}</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/api/action-sheet.css">uni-actionsheet {
  display: block;
  box-sizing: border-box;
}

.uni-actionsheet {
  position: fixed;
  left: 6px;
  right: 6px;
  bottom: 6px;
  transform: translate(0, 100%);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  z-index: 999;
  visibility: hidden;
  transition: transform 0.3s, visibility 0.3s;
}

.uni-actionsheet.uni-actionsheet_toggle {
  visibility: visible;
  transform: translate(0, 0);
}

.uni-actionsheet * {
  box-sizing: border-box;
}

.uni-actionsheet__menu,
.uni-actionsheet__action {
  border-radius: 5px;
  background-color: #fcfcfd;
}

.uni-actionsheet__action {
  margin-top: 6px;
}

.uni-actionsheet__cell,
.uni-actionsheet__title {
  position: relative;
  padding: 10px 6px;
  text-align: center;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}

.uni-actionsheet__title {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  color: var(--UI-FG);
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #e5e5e5;
}

.uni-actionsheet__cell:before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}

.uni-actionsheet__cell:active {
  background-color: #ececec;
}

.uni-actionsheet__cell:first-child:before {
  display: none;
}

@media screen and (min-width: 500px) and (min-height: 500px) {
  .uni-mask.uni-actionsheet__mask {
    background: none;
  }

  .uni-actionsheet {
    width: 300px;
    left: 50%;
    right: auto;
    top: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
  }

  .uni-actionsheet.uni-actionsheet_toggle {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  .uni-actionsheet__menu {
    box-shadow: 0px 0 20px 5px rgba(0, 0, 0, 0.3);
  }

  .uni-actionsheet__action {
    display: none;
  }
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/resize-sensor.css">@keyframes once-show {
  from {
    top: 0;
  }
}
uni-resize-sensor,
uni-resize-sensor > div {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
uni-resize-sensor {
  display: block;
  z-index: -1;
  visibility: hidden;
  animation: once-show 1ms;
}
uni-resize-sensor > div > div {
  position: absolute;
  left: 0;
  top: 0;
}
uni-resize-sensor > div:first-child > div {
  width: 100000px;
  height: 100000px;
}
uni-resize-sensor > div:last-child > div {
  width: 200%;
  height: 200%;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/swiper.css">uni-swiper {
  display: block;
  height: 150px;
}

uni-swiper[hidden] {
  display: none;
}

.uni-swiper-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
}

.uni-swiper-slides {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.uni-swiper-slide-frame {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.uni-swiper-dots {
  position: absolute;
  font-size: 0;
}

.uni-swiper-dots-horizontal {
  left: 50%;
  bottom: 10px;
  text-align: center;
  white-space: nowrap;
  transform: translate(-50%, 0);
}

.uni-swiper-dots-horizontal .uni-swiper-dot {
  margin-right: 8px;
}

.uni-swiper-dots-horizontal .uni-swiper-dot:last-child {
  margin-right: 0;
}

.uni-swiper-dots-vertical {
  right: 10px;
  top: 50%;
  text-align: right;
  transform: translate(0, -50%);
}

.uni-swiper-dots-vertical .uni-swiper-dot {
  display: block;
  margin-bottom: 9px;
}

.uni-swiper-dots-vertical .uni-swiper-dot:last-child {
  margin-bottom: 0;
}

.uni-swiper-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  cursor: pointer;
  transition-property: background-color;
  transition-timing-function: ease;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.uni-swiper-dot-active {
  background-color: #000000;
}

.uni-swiper-navigation {
  width: 26px;
  height: 26px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -13px;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  border-radius: 50%;
  opacity: 1;
}

.uni-swiper-navigation-disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.uni-swiper-navigation-hide {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}

.uni-swiper-navigation-prev {
  left: 10px;
}

.uni-swiper-navigation-prev svg {
  margin-left: -1px;
  left: 10px;
}

.uni-swiper-navigation-prev.uni-swiper-navigation-vertical {
  top: 18px;
  left: 50%;
  margin-left: -13px;
}

.uni-swiper-navigation-prev.uni-swiper-navigation-vertical svg {
  transform: rotate(90deg);
  margin-left: auto;
  margin-top: -2px;
}

.uni-swiper-navigation-next {
  right: 10px;
}

.uni-swiper-navigation-next svg {
  transform: rotate(180deg);
}

.uni-swiper-navigation-next.uni-swiper-navigation-vertical {
  top: auto;
  bottom: 5px;
  left: 50%;
  margin-left: -13px;
}

.uni-swiper-navigation-next.uni-swiper-navigation-vertical svg {
  margin-top: 2px;
  transform: rotate(270deg);
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/swiper-item.css">uni-swiper-item {
  display: block;
  overflow: hidden;
  will-change: transform;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: grab;
}

uni-swiper-item[hidden] {
  display: none;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/movable-area.css">uni-movable-area {
  display: block;
  position: relative;
  width: 10px;
  height: 10px;
}

uni-movable-area[hidden] {
  display: none;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/movable-view.css">uni-movable-view {
  display: inline-block;
  width: 10px;
  height: 10px;
  top: 0px;
  left: 0px;
  position: absolute;
  cursor: grab;
}

uni-movable-view[hidden] {
  display: none;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/api/location-view.css">.uni-system-open-location {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  z-index: 999;
}

.uni-system-open-location .map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 80px;
  height: auto;
}

.uni-system-open-location .info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: white;
  padding: 15px;
  box-sizing: border-box;
  line-height: 1.5;
}

.uni-system-open-location .info>.name {
  font-size: 17px;
  color: #111111;
}

.uni-system-open-location .info>.address {
  font-size: 14px;
  color: #666666;
}

.uni-system-open-location .info>.nav {
  position: absolute;
  top: 50%;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: -25px;
  background-color: #007aff;
}

.uni-system-open-location .info>.nav>svg {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.uni-system-open-location .map-move {
  position: absolute;
  bottom: 50px;
  right: 10px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  background-color: white;
  border-radius: 50%;
  pointer-events: auto;
  cursor: pointer;
  box-shadow: 0px 0 5px 1px rgba(0, 0, 0, 0.3);
}

.uni-system-open-location .map-move>svg {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
}

.uni-system-open-location .nav-btn-back {
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 44px;
  height: 44px;
  padding: 6px;
  cursor: pointer;
}

.uni-system-open-location .nav-btn-back>svg {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px;
  box-sizing: border-box;
}

.uni-system-open-location .map-content {
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  bottom: 0;
  overflow: hidden;
}

.uni-system-open-location .map-content.fix-position {
  top: -74px;
  bottom: -44px;
}

.uni-system-open-location .map-content>iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.uni-system-open-location .actTonav {
  position: absolute;
  right: 16px;
  bottom: 56px;
  width: 60px;
  height: 60px;
  border-radius: 60px;
}</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/api/location-picker.css">.uni-system-choose-location {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  z-index: 999;
}

.uni-system-choose-location .map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
}

.uni-system-choose-location .map-location {
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 32px;
  height: 52px;
  margin-left: -16px;
  cursor: pointer;
  background-size: 100%;
}

.uni-system-choose-location .map-move {
  position: absolute;
  bottom: 50px;
  right: 10px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  background-color: white;
  border-radius: 50%;
  pointer-events: auto;
  cursor: pointer;
  box-shadow: 0px 0 5px 1px rgba(0, 0, 0, 0.3);
}

.uni-system-choose-location .map-move>svg {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
}

.uni-system-choose-location .nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background-color: transparent;
  background-image: linear-gradient( to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
}

.uni-system-choose-location .nav-btn {
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 60px;
  height: 44px;
  padding: 6px;
  line-height: 32px;
  font-size: 26px;
  color: white;
  text-align: center;
  cursor: pointer;
}

.uni-system-choose-location .nav-btn.confirm {
  left: auto;
  right: 0;
}

.uni-system-choose-location .nav-btn.disable {
  opacity: 0.4;
}

.uni-system-choose-location .nav-btn>svg {
  display: block;
  width: 100%;
  height: 100%;
  /* line-height: inherit; */
  border-radius: 2px;
  box-sizing: border-box;
  padding: 3px;
}

.uni-system-choose-location .nav-btn.confirm>svg {
  background-color: #007aff;
  padding: 5px;
}

.uni-system-choose-location .menu {
  position: absolute;
  top: 300px;
  left: 0;
  width: 100%;
  bottom: 0;
  background-color: white;
}

.uni-system-choose-location .search {
  display: flex;
  flex-direction: row;
  height: 50px;
  padding: 8px;
  line-height: 34px;
  box-sizing: border-box;
  background-color: white;
}

.uni-system-choose-location .search-input {
  flex: 1;
  height: 100%;
  border-radius: 5px;
  padding: 0 5px;
  background: #ebebeb;
}

.uni-system-choose-location .search-btn {
  margin-left: 5px;
  color: #007aff;
  font-size: 17px;
  text-align: center;
}

.uni-system-choose-location .list {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  bottom: 0;
  padding-bottom: 10px;
  /* background-color: #f6f6f6; */
}

.uni-system-choose-location .list-loading {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
}

.uni-system-choose-location .list-item {
  position: relative;
  padding: 10px;
  padding-right: 40px;
  cursor: pointer;
}

.uni-system-choose-location .list-item>svg {
  display: none;
  position: absolute;
  top: 50%;
  right: 10px;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  box-sizing: border-box;
  padding: 5px;
}

.uni-system-choose-location .list-item.selected>svg {
  display: block;
}

.uni-system-choose-location .list-item:not(:last-child)::after {
  position: absolute;
  content: "";
  height: 1px;
  left: 10px;
  bottom: 0;
  width: 100%;
  background-color: #d3d3d3;
}

.uni-system-choose-location .list-item-title {
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.uni-system-choose-location .list-item-detail {
  font-size: 12px;
  color: #808080;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media screen and (min-width: 800px) {
  .uni-system-choose-location .map {
    top: 0;
    height: 100%;
  }
  .uni-system-choose-location .map-move {
    bottom: 10px;
    right: 320px;
  }
  .uni-system-choose-location .menu {
    top: 54px;
    left: auto;
    right: 10px;
    width: 300px;
    bottom: 10px;
    max-height: 600px;
    box-shadow: 0px 0 20px 5px rgba(0, 0, 0, 0.3);
  }
}</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-h5/style/map.css">uni-map {
  position: relative;
  width: 300px;
  height: 150px;
  display: block;
}

uni-map[hidden] {
  display: none;
}
/* 处理高德地图 marker label 默认样式 */
.amap-marker-label{
  padding:0;
  border:none;
  background-color: transparent;
}
/* 处理高德地图 open-location icon 被遮挡问题 */
.amap-marker>.amap-icon>img{
  left:0!important;
  top:0!important;
}

.uni-map-control{
  position:absolute;
  width:0;
  height:0;
  top:0;
  left:0;
  z-index:999;
}
.uni-map-control-icon{
  position:absolute;
  max-width:initial;
}</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/scroll-view.css">uni-scroll-view {
  display: block;
  width: 100%;
}

uni-scroll-view[hidden] {
  display: none;
}

.uni-scroll-view {
  position: relative;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  /* display: flex; 时在安卓下会导致scrollWidth和offsetWidth一样 */
  height: 100%;
  max-height: inherit;
}

.uni-scroll-view-scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.uni-scroll-view-scrollbar-hidden {
  -moz-scrollbars: none;
  scrollbar-width: none;
}

.uni-scroll-view-content {
  width: 100%;
  height: 100%;
}

.uni-scroll-view-refresher {
  position: relative;
  overflow: hidden;
}

.uni-scroll-view-refresh {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.uni-scroll-view-refresh-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647),
    0 1px 4px rgba(0, 0, 0, 0.117647);
}

.uni-scroll-view-refresh__spinner {
  transform-origin: center center;
  animation: uni-scroll-view-refresh-rotate 2s linear infinite;
}

.uni-scroll-view-refresh__spinner > circle {
  stroke: currentColor;
  stroke-linecap: round;
  animation: uni-scroll-view-refresh-dash 2s linear infinite;
}

@keyframes uni-scroll-view-refresh-rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes uni-scroll-view-refresh-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style><style type="text/css" data-vite-dev-id="D:/Uni_app_Projects/address_book/wechat3/App.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">/**
 * 这里是uni-app内置的常用样式变量
 *
 * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量
 * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App
 *
 */
/**
 * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能
 *
 * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件
 */
/* 颜色变量 */
/* 行为相关颜色 */
/* 文字基本颜色 */
/* 背景颜色 */
/* 边框颜色 */
/* 尺寸变量 */
/* 文字尺寸 */
/* 图片尺寸 */
/* Border Radius */
/* 水平间距 */
/* 垂直间距 */
/* 透明度 */
/* 文章场景相关 */
.u-line-1 {
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical !important;
}
.u-line-2 {
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical !important;
}
.u-line-3 {
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical !important;
}
.u-line-4 {
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical !important;
}
.u-line-5 {
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical !important;
}
.u-border {
  border-width: 0.5px !important;
  border-color: #dadbde !important;
  border-style: solid;
}
.u-border-top {
  border-top-width: 0.5px !important;
  border-color: #dadbde !important;
  border-top-style: solid;
}
.u-border-left {
  border-left-width: 0.5px !important;
  border-color: #dadbde !important;
  border-left-style: solid;
}
.u-border-right {
  border-right-width: 0.5px !important;
  border-color: #dadbde !important;
  border-right-style: solid;
}
.u-border-bottom {
  border-bottom-width: 0.5px !important;
  border-color: #dadbde !important;
  border-bottom-style: solid;
}
.u-border-top-bottom {
  border-top-width: 0.5px !important;
  border-bottom-width: 0.5px !important;
  border-color: #dadbde !important;
  border-top-style: solid;
  border-bottom-style: solid;
}
.u-reset-button {
  padding: 0;
  background-color: transparent;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}
.u-reset-button::after {
  border: none;
}
.u-hover-class {
  opacity: 0.7;
}
.cursor-pointer {
  cursor: pointer;
}
.u-flex,
.u-flex-row,
.u-flex-x {
  display: flex;
  flex-direction: row;
}
.u-flex-y,
.u-flex-column {
  display: flex;
  flex-direction: column;
}
.u-flex-x-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.u-flex-xy-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.u-flex-y-center {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.u-flex-x-left {
  display: flex;
  flex-direction: row;
}
.u-flex-x-reverse,
.u-flex-row-reverse {
  flex-direction: row-reverse;
}
.u-flex-y-reverse,
.u-flex-column-reverse {
  flex-direction: column-reverse;
}
.u-flex.u-flex-reverse,
.u-flex-row.u-flex-reverse,
.u-flex-x.u-flex-reverse {
  flex-direction: row-reverse;
}
.u-flex-column.u-flex-reverse,
.u-flex-y.u-flex-reverse {
  flex-direction: column-reverse;
}
.u-flex-fill {
  flex: 1 1 auto;
}
.u-margin-top-auto,
.u-m-t-auto {
  margin-top: auto !important;
}
.u-margin-right-auto,
.u-m-r-auto {
  margin-right: auto !important;
}
.u-margin-bottom-auto,
.u-m-b-auto {
  margin-bottom: auto !important;
}
.u-margin-left-auto,
.u-m-l-auto {
  margin-left: auto !important;
}
.u-margin-center-auto,
.u-m-c-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}
.u-margin-middle-auto,
.u-m-m-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
.u-flex-wrap {
  flex-wrap: wrap;
}
.u-flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.u-flex-start {
  justify-content: flex-start;
}
.u-flex-center {
  justify-content: center;
}
.u-flex-end {
  justify-content: flex-end;
}
.u-flex-between {
  justify-content: space-between;
}
.u-flex-around {
  justify-content: space-around;
}
.u-flex-items-start {
  align-items: flex-start;
}
.u-flex-items-center {
  align-items: center;
}
.u-flex-items-end {
  align-items: flex-end;
}
.u-flex-items-baseline {
  align-items: baseline;
}
.u-flex-items-stretch {
  align-items: stretch;
}
.u-flex-self-start {
  align-self: flex-start;
}
.u-flex-self-center {
  align-self: center;
}
.u-flex-self-end {
  align-self: flex-end;
}
.u-flex-self-baseline {
  align-self: baseline;
}
.u-flex-self-stretch {
  align-self: stretch;
}
.u-flex-content-start {
  align-content: flex-start;
}
.u-flex-content-center {
  align-content: center;
}
.u-flex-content-end {
  align-content: flex-end;
}
.u-flex-content-between {
  align-content: space-between;
}
.u-flex-content-around {
  align-content: space-around;
}
.u-flex-middle {
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
}
.u-flex-grow {
  flex-grow: 1;
}
.u-flex-shrink {
  flex-shrink: 1;
}
.u-margin-0, .u-m-0 {
  margin: 0 !important;
}
.u-padding-0, .u-p-0 {
  padding: 0 !important;
}
.u-m-l-0 {
  margin-left: 0 !important;
}
.u-p-l-0 {
  padding-left: 0 !important;
}
.u-margin-left-0 {
  margin-left: 0 !important;
}
.u-padding-left-0 {
  padding-left: 0 !important;
}
.u-m-t-0 {
  margin-top: 0 !important;
}
.u-p-t-0 {
  padding-top: 0 !important;
}
.u-margin-top-0 {
  margin-top: 0 !important;
}
.u-padding-top-0 {
  padding-top: 0 !important;
}
.u-m-r-0 {
  margin-right: 0 !important;
}
.u-p-r-0 {
  padding-right: 0 !important;
}
.u-margin-right-0 {
  margin-right: 0 !important;
}
.u-padding-right-0 {
  padding-right: 0 !important;
}
.u-m-b-0 {
  margin-bottom: 0 !important;
}
.u-p-b-0 {
  padding-bottom: 0 !important;
}
.u-margin-bottom-0 {
  margin-bottom: 0 !important;
}
.u-padding-bottom-0 {
  padding-bottom: 0 !important;
}
.u-margin-2, .u-m-2 {
  margin: 0.0625rem !important;
}
.u-padding-2, .u-p-2 {
  padding: 0.0625rem !important;
}
.u-m-l-2 {
  margin-left: 0.0625rem !important;
}
.u-p-l-2 {
  padding-left: 0.0625rem !important;
}
.u-margin-left-2 {
  margin-left: 0.0625rem !important;
}
.u-padding-left-2 {
  padding-left: 0.0625rem !important;
}
.u-m-t-2 {
  margin-top: 0.0625rem !important;
}
.u-p-t-2 {
  padding-top: 0.0625rem !important;
}
.u-margin-top-2 {
  margin-top: 0.0625rem !important;
}
.u-padding-top-2 {
  padding-top: 0.0625rem !important;
}
.u-m-r-2 {
  margin-right: 0.0625rem !important;
}
.u-p-r-2 {
  padding-right: 0.0625rem !important;
}
.u-margin-right-2 {
  margin-right: 0.0625rem !important;
}
.u-padding-right-2 {
  padding-right: 0.0625rem !important;
}
.u-m-b-2 {
  margin-bottom: 0.0625rem !important;
}
.u-p-b-2 {
  padding-bottom: 0.0625rem !important;
}
.u-margin-bottom-2 {
  margin-bottom: 0.0625rem !important;
}
.u-padding-bottom-2 {
  padding-bottom: 0.0625rem !important;
}
.u-margin-4, .u-m-4 {
  margin: 0.125rem !important;
}
.u-padding-4, .u-p-4 {
  padding: 0.125rem !important;
}
.u-m-l-4 {
  margin-left: 0.125rem !important;
}
.u-p-l-4 {
  padding-left: 0.125rem !important;
}
.u-margin-left-4 {
  margin-left: 0.125rem !important;
}
.u-padding-left-4 {
  padding-left: 0.125rem !important;
}
.u-m-t-4 {
  margin-top: 0.125rem !important;
}
.u-p-t-4 {
  padding-top: 0.125rem !important;
}
.u-margin-top-4 {
  margin-top: 0.125rem !important;
}
.u-padding-top-4 {
  padding-top: 0.125rem !important;
}
.u-m-r-4 {
  margin-right: 0.125rem !important;
}
.u-p-r-4 {
  padding-right: 0.125rem !important;
}
.u-margin-right-4 {
  margin-right: 0.125rem !important;
}
.u-padding-right-4 {
  padding-right: 0.125rem !important;
}
.u-m-b-4 {
  margin-bottom: 0.125rem !important;
}
.u-p-b-4 {
  padding-bottom: 0.125rem !important;
}
.u-margin-bottom-4 {
  margin-bottom: 0.125rem !important;
}
.u-padding-bottom-4 {
  padding-bottom: 0.125rem !important;
}
.u-margin-5, .u-m-5 {
  margin: 0.15625rem !important;
}
.u-padding-5, .u-p-5 {
  padding: 0.15625rem !important;
}
.u-m-l-5 {
  margin-left: 0.15625rem !important;
}
.u-p-l-5 {
  padding-left: 0.15625rem !important;
}
.u-margin-left-5 {
  margin-left: 0.15625rem !important;
}
.u-padding-left-5 {
  padding-left: 0.15625rem !important;
}
.u-m-t-5 {
  margin-top: 0.15625rem !important;
}
.u-p-t-5 {
  padding-top: 0.15625rem !important;
}
.u-margin-top-5 {
  margin-top: 0.15625rem !important;
}
.u-padding-top-5 {
  padding-top: 0.15625rem !important;
}
.u-m-r-5 {
  margin-right: 0.15625rem !important;
}
.u-p-r-5 {
  padding-right: 0.15625rem !important;
}
.u-margin-right-5 {
  margin-right: 0.15625rem !important;
}
.u-padding-right-5 {
  padding-right: 0.15625rem !important;
}
.u-m-b-5 {
  margin-bottom: 0.15625rem !important;
}
.u-p-b-5 {
  padding-bottom: 0.15625rem !important;
}
.u-margin-bottom-5 {
  margin-bottom: 0.15625rem !important;
}
.u-padding-bottom-5 {
  padding-bottom: 0.15625rem !important;
}
.u-margin-6, .u-m-6 {
  margin: 0.1875rem !important;
}
.u-padding-6, .u-p-6 {
  padding: 0.1875rem !important;
}
.u-m-l-6 {
  margin-left: 0.1875rem !important;
}
.u-p-l-6 {
  padding-left: 0.1875rem !important;
}
.u-margin-left-6 {
  margin-left: 0.1875rem !important;
}
.u-padding-left-6 {
  padding-left: 0.1875rem !important;
}
.u-m-t-6 {
  margin-top: 0.1875rem !important;
}
.u-p-t-6 {
  padding-top: 0.1875rem !important;
}
.u-margin-top-6 {
  margin-top: 0.1875rem !important;
}
.u-padding-top-6 {
  padding-top: 0.1875rem !important;
}
.u-m-r-6 {
  margin-right: 0.1875rem !important;
}
.u-p-r-6 {
  padding-right: 0.1875rem !important;
}
.u-margin-right-6 {
  margin-right: 0.1875rem !important;
}
.u-padding-right-6 {
  padding-right: 0.1875rem !important;
}
.u-m-b-6 {
  margin-bottom: 0.1875rem !important;
}
.u-p-b-6 {
  padding-bottom: 0.1875rem !important;
}
.u-margin-bottom-6 {
  margin-bottom: 0.1875rem !important;
}
.u-padding-bottom-6 {
  padding-bottom: 0.1875rem !important;
}
.u-margin-8, .u-m-8 {
  margin: 0.25rem !important;
}
.u-padding-8, .u-p-8 {
  padding: 0.25rem !important;
}
.u-m-l-8 {
  margin-left: 0.25rem !important;
}
.u-p-l-8 {
  padding-left: 0.25rem !important;
}
.u-margin-left-8 {
  margin-left: 0.25rem !important;
}
.u-padding-left-8 {
  padding-left: 0.25rem !important;
}
.u-m-t-8 {
  margin-top: 0.25rem !important;
}
.u-p-t-8 {
  padding-top: 0.25rem !important;
}
.u-margin-top-8 {
  margin-top: 0.25rem !important;
}
.u-padding-top-8 {
  padding-top: 0.25rem !important;
}
.u-m-r-8 {
  margin-right: 0.25rem !important;
}
.u-p-r-8 {
  padding-right: 0.25rem !important;
}
.u-margin-right-8 {
  margin-right: 0.25rem !important;
}
.u-padding-right-8 {
  padding-right: 0.25rem !important;
}
.u-m-b-8 {
  margin-bottom: 0.25rem !important;
}
.u-p-b-8 {
  padding-bottom: 0.25rem !important;
}
.u-margin-bottom-8 {
  margin-bottom: 0.25rem !important;
}
.u-padding-bottom-8 {
  padding-bottom: 0.25rem !important;
}
.u-margin-10, .u-m-10 {
  margin: 0.3125rem !important;
}
.u-padding-10, .u-p-10 {
  padding: 0.3125rem !important;
}
.u-m-l-10 {
  margin-left: 0.3125rem !important;
}
.u-p-l-10 {
  padding-left: 0.3125rem !important;
}
.u-margin-left-10 {
  margin-left: 0.3125rem !important;
}
.u-padding-left-10 {
  padding-left: 0.3125rem !important;
}
.u-m-t-10 {
  margin-top: 0.3125rem !important;
}
.u-p-t-10 {
  padding-top: 0.3125rem !important;
}
.u-margin-top-10 {
  margin-top: 0.3125rem !important;
}
.u-padding-top-10 {
  padding-top: 0.3125rem !important;
}
.u-m-r-10 {
  margin-right: 0.3125rem !important;
}
.u-p-r-10 {
  padding-right: 0.3125rem !important;
}
.u-margin-right-10 {
  margin-right: 0.3125rem !important;
}
.u-padding-right-10 {
  padding-right: 0.3125rem !important;
}
.u-m-b-10 {
  margin-bottom: 0.3125rem !important;
}
.u-p-b-10 {
  padding-bottom: 0.3125rem !important;
}
.u-margin-bottom-10 {
  margin-bottom: 0.3125rem !important;
}
.u-padding-bottom-10 {
  padding-bottom: 0.3125rem !important;
}
.u-margin-12, .u-m-12 {
  margin: 0.375rem !important;
}
.u-padding-12, .u-p-12 {
  padding: 0.375rem !important;
}
.u-m-l-12 {
  margin-left: 0.375rem !important;
}
.u-p-l-12 {
  padding-left: 0.375rem !important;
}
.u-margin-left-12 {
  margin-left: 0.375rem !important;
}
.u-padding-left-12 {
  padding-left: 0.375rem !important;
}
.u-m-t-12 {
  margin-top: 0.375rem !important;
}
.u-p-t-12 {
  padding-top: 0.375rem !important;
}
.u-margin-top-12 {
  margin-top: 0.375rem !important;
}
.u-padding-top-12 {
  padding-top: 0.375rem !important;
}
.u-m-r-12 {
  margin-right: 0.375rem !important;
}
.u-p-r-12 {
  padding-right: 0.375rem !important;
}
.u-margin-right-12 {
  margin-right: 0.375rem !important;
}
.u-padding-right-12 {
  padding-right: 0.375rem !important;
}
.u-m-b-12 {
  margin-bottom: 0.375rem !important;
}
.u-p-b-12 {
  padding-bottom: 0.375rem !important;
}
.u-margin-bottom-12 {
  margin-bottom: 0.375rem !important;
}
.u-padding-bottom-12 {
  padding-bottom: 0.375rem !important;
}
.u-margin-14, .u-m-14 {
  margin: 0.4375rem !important;
}
.u-padding-14, .u-p-14 {
  padding: 0.4375rem !important;
}
.u-m-l-14 {
  margin-left: 0.4375rem !important;
}
.u-p-l-14 {
  padding-left: 0.4375rem !important;
}
.u-margin-left-14 {
  margin-left: 0.4375rem !important;
}
.u-padding-left-14 {
  padding-left: 0.4375rem !important;
}
.u-m-t-14 {
  margin-top: 0.4375rem !important;
}
.u-p-t-14 {
  padding-top: 0.4375rem !important;
}
.u-margin-top-14 {
  margin-top: 0.4375rem !important;
}
.u-padding-top-14 {
  padding-top: 0.4375rem !important;
}
.u-m-r-14 {
  margin-right: 0.4375rem !important;
}
.u-p-r-14 {
  padding-right: 0.4375rem !important;
}
.u-margin-right-14 {
  margin-right: 0.4375rem !important;
}
.u-padding-right-14 {
  padding-right: 0.4375rem !important;
}
.u-m-b-14 {
  margin-bottom: 0.4375rem !important;
}
.u-p-b-14 {
  padding-bottom: 0.4375rem !important;
}
.u-margin-bottom-14 {
  margin-bottom: 0.4375rem !important;
}
.u-padding-bottom-14 {
  padding-bottom: 0.4375rem !important;
}
.u-margin-15, .u-m-15 {
  margin: 0.46875rem !important;
}
.u-padding-15, .u-p-15 {
  padding: 0.46875rem !important;
}
.u-m-l-15 {
  margin-left: 0.46875rem !important;
}
.u-p-l-15 {
  padding-left: 0.46875rem !important;
}
.u-margin-left-15 {
  margin-left: 0.46875rem !important;
}
.u-padding-left-15 {
  padding-left: 0.46875rem !important;
}
.u-m-t-15 {
  margin-top: 0.46875rem !important;
}
.u-p-t-15 {
  padding-top: 0.46875rem !important;
}
.u-margin-top-15 {
  margin-top: 0.46875rem !important;
}
.u-padding-top-15 {
  padding-top: 0.46875rem !important;
}
.u-m-r-15 {
  margin-right: 0.46875rem !important;
}
.u-p-r-15 {
  padding-right: 0.46875rem !important;
}
.u-margin-right-15 {
  margin-right: 0.46875rem !important;
}
.u-padding-right-15 {
  padding-right: 0.46875rem !important;
}
.u-m-b-15 {
  margin-bottom: 0.46875rem !important;
}
.u-p-b-15 {
  padding-bottom: 0.46875rem !important;
}
.u-margin-bottom-15 {
  margin-bottom: 0.46875rem !important;
}
.u-padding-bottom-15 {
  padding-bottom: 0.46875rem !important;
}
.u-margin-16, .u-m-16 {
  margin: 0.5rem !important;
}
.u-padding-16, .u-p-16 {
  padding: 0.5rem !important;
}
.u-m-l-16 {
  margin-left: 0.5rem !important;
}
.u-p-l-16 {
  padding-left: 0.5rem !important;
}
.u-margin-left-16 {
  margin-left: 0.5rem !important;
}
.u-padding-left-16 {
  padding-left: 0.5rem !important;
}
.u-m-t-16 {
  margin-top: 0.5rem !important;
}
.u-p-t-16 {
  padding-top: 0.5rem !important;
}
.u-margin-top-16 {
  margin-top: 0.5rem !important;
}
.u-padding-top-16 {
  padding-top: 0.5rem !important;
}
.u-m-r-16 {
  margin-right: 0.5rem !important;
}
.u-p-r-16 {
  padding-right: 0.5rem !important;
}
.u-margin-right-16 {
  margin-right: 0.5rem !important;
}
.u-padding-right-16 {
  padding-right: 0.5rem !important;
}
.u-m-b-16 {
  margin-bottom: 0.5rem !important;
}
.u-p-b-16 {
  padding-bottom: 0.5rem !important;
}
.u-margin-bottom-16 {
  margin-bottom: 0.5rem !important;
}
.u-padding-bottom-16 {
  padding-bottom: 0.5rem !important;
}
.u-margin-18, .u-m-18 {
  margin: 0.5625rem !important;
}
.u-padding-18, .u-p-18 {
  padding: 0.5625rem !important;
}
.u-m-l-18 {
  margin-left: 0.5625rem !important;
}
.u-p-l-18 {
  padding-left: 0.5625rem !important;
}
.u-margin-left-18 {
  margin-left: 0.5625rem !important;
}
.u-padding-left-18 {
  padding-left: 0.5625rem !important;
}
.u-m-t-18 {
  margin-top: 0.5625rem !important;
}
.u-p-t-18 {
  padding-top: 0.5625rem !important;
}
.u-margin-top-18 {
  margin-top: 0.5625rem !important;
}
.u-padding-top-18 {
  padding-top: 0.5625rem !important;
}
.u-m-r-18 {
  margin-right: 0.5625rem !important;
}
.u-p-r-18 {
  padding-right: 0.5625rem !important;
}
.u-margin-right-18 {
  margin-right: 0.5625rem !important;
}
.u-padding-right-18 {
  padding-right: 0.5625rem !important;
}
.u-m-b-18 {
  margin-bottom: 0.5625rem !important;
}
.u-p-b-18 {
  padding-bottom: 0.5625rem !important;
}
.u-margin-bottom-18 {
  margin-bottom: 0.5625rem !important;
}
.u-padding-bottom-18 {
  padding-bottom: 0.5625rem !important;
}
.u-margin-20, .u-m-20 {
  margin: 0.625rem !important;
}
.u-padding-20, .u-p-20 {
  padding: 0.625rem !important;
}
.u-m-l-20 {
  margin-left: 0.625rem !important;
}
.u-p-l-20 {
  padding-left: 0.625rem !important;
}
.u-margin-left-20 {
  margin-left: 0.625rem !important;
}
.u-padding-left-20 {
  padding-left: 0.625rem !important;
}
.u-m-t-20 {
  margin-top: 0.625rem !important;
}
.u-p-t-20 {
  padding-top: 0.625rem !important;
}
.u-margin-top-20 {
  margin-top: 0.625rem !important;
}
.u-padding-top-20 {
  padding-top: 0.625rem !important;
}
.u-m-r-20 {
  margin-right: 0.625rem !important;
}
.u-p-r-20 {
  padding-right: 0.625rem !important;
}
.u-margin-right-20 {
  margin-right: 0.625rem !important;
}
.u-padding-right-20 {
  padding-right: 0.625rem !important;
}
.u-m-b-20 {
  margin-bottom: 0.625rem !important;
}
.u-p-b-20 {
  padding-bottom: 0.625rem !important;
}
.u-margin-bottom-20 {
  margin-bottom: 0.625rem !important;
}
.u-padding-bottom-20 {
  padding-bottom: 0.625rem !important;
}
.u-margin-22, .u-m-22 {
  margin: 0.6875rem !important;
}
.u-padding-22, .u-p-22 {
  padding: 0.6875rem !important;
}
.u-m-l-22 {
  margin-left: 0.6875rem !important;
}
.u-p-l-22 {
  padding-left: 0.6875rem !important;
}
.u-margin-left-22 {
  margin-left: 0.6875rem !important;
}
.u-padding-left-22 {
  padding-left: 0.6875rem !important;
}
.u-m-t-22 {
  margin-top: 0.6875rem !important;
}
.u-p-t-22 {
  padding-top: 0.6875rem !important;
}
.u-margin-top-22 {
  margin-top: 0.6875rem !important;
}
.u-padding-top-22 {
  padding-top: 0.6875rem !important;
}
.u-m-r-22 {
  margin-right: 0.6875rem !important;
}
.u-p-r-22 {
  padding-right: 0.6875rem !important;
}
.u-margin-right-22 {
  margin-right: 0.6875rem !important;
}
.u-padding-right-22 {
  padding-right: 0.6875rem !important;
}
.u-m-b-22 {
  margin-bottom: 0.6875rem !important;
}
.u-p-b-22 {
  padding-bottom: 0.6875rem !important;
}
.u-margin-bottom-22 {
  margin-bottom: 0.6875rem !important;
}
.u-padding-bottom-22 {
  padding-bottom: 0.6875rem !important;
}
.u-margin-24, .u-m-24 {
  margin: 0.75rem !important;
}
.u-padding-24, .u-p-24 {
  padding: 0.75rem !important;
}
.u-m-l-24 {
  margin-left: 0.75rem !important;
}
.u-p-l-24 {
  padding-left: 0.75rem !important;
}
.u-margin-left-24 {
  margin-left: 0.75rem !important;
}
.u-padding-left-24 {
  padding-left: 0.75rem !important;
}
.u-m-t-24 {
  margin-top: 0.75rem !important;
}
.u-p-t-24 {
  padding-top: 0.75rem !important;
}
.u-margin-top-24 {
  margin-top: 0.75rem !important;
}
.u-padding-top-24 {
  padding-top: 0.75rem !important;
}
.u-m-r-24 {
  margin-right: 0.75rem !important;
}
.u-p-r-24 {
  padding-right: 0.75rem !important;
}
.u-margin-right-24 {
  margin-right: 0.75rem !important;
}
.u-padding-right-24 {
  padding-right: 0.75rem !important;
}
.u-m-b-24 {
  margin-bottom: 0.75rem !important;
}
.u-p-b-24 {
  padding-bottom: 0.75rem !important;
}
.u-margin-bottom-24 {
  margin-bottom: 0.75rem !important;
}
.u-padding-bottom-24 {
  padding-bottom: 0.75rem !important;
}
.u-margin-25, .u-m-25 {
  margin: 0.78125rem !important;
}
.u-padding-25, .u-p-25 {
  padding: 0.78125rem !important;
}
.u-m-l-25 {
  margin-left: 0.78125rem !important;
}
.u-p-l-25 {
  padding-left: 0.78125rem !important;
}
.u-margin-left-25 {
  margin-left: 0.78125rem !important;
}
.u-padding-left-25 {
  padding-left: 0.78125rem !important;
}
.u-m-t-25 {
  margin-top: 0.78125rem !important;
}
.u-p-t-25 {
  padding-top: 0.78125rem !important;
}
.u-margin-top-25 {
  margin-top: 0.78125rem !important;
}
.u-padding-top-25 {
  padding-top: 0.78125rem !important;
}
.u-m-r-25 {
  margin-right: 0.78125rem !important;
}
.u-p-r-25 {
  padding-right: 0.78125rem !important;
}
.u-margin-right-25 {
  margin-right: 0.78125rem !important;
}
.u-padding-right-25 {
  padding-right: 0.78125rem !important;
}
.u-m-b-25 {
  margin-bottom: 0.78125rem !important;
}
.u-p-b-25 {
  padding-bottom: 0.78125rem !important;
}
.u-margin-bottom-25 {
  margin-bottom: 0.78125rem !important;
}
.u-padding-bottom-25 {
  padding-bottom: 0.78125rem !important;
}
.u-margin-26, .u-m-26 {
  margin: 0.8125rem !important;
}
.u-padding-26, .u-p-26 {
  padding: 0.8125rem !important;
}
.u-m-l-26 {
  margin-left: 0.8125rem !important;
}
.u-p-l-26 {
  padding-left: 0.8125rem !important;
}
.u-margin-left-26 {
  margin-left: 0.8125rem !important;
}
.u-padding-left-26 {
  padding-left: 0.8125rem !important;
}
.u-m-t-26 {
  margin-top: 0.8125rem !important;
}
.u-p-t-26 {
  padding-top: 0.8125rem !important;
}
.u-margin-top-26 {
  margin-top: 0.8125rem !important;
}
.u-padding-top-26 {
  padding-top: 0.8125rem !important;
}
.u-m-r-26 {
  margin-right: 0.8125rem !important;
}
.u-p-r-26 {
  padding-right: 0.8125rem !important;
}
.u-margin-right-26 {
  margin-right: 0.8125rem !important;
}
.u-padding-right-26 {
  padding-right: 0.8125rem !important;
}
.u-m-b-26 {
  margin-bottom: 0.8125rem !important;
}
.u-p-b-26 {
  padding-bottom: 0.8125rem !important;
}
.u-margin-bottom-26 {
  margin-bottom: 0.8125rem !important;
}
.u-padding-bottom-26 {
  padding-bottom: 0.8125rem !important;
}
.u-margin-28, .u-m-28 {
  margin: 0.875rem !important;
}
.u-padding-28, .u-p-28 {
  padding: 0.875rem !important;
}
.u-m-l-28 {
  margin-left: 0.875rem !important;
}
.u-p-l-28 {
  padding-left: 0.875rem !important;
}
.u-margin-left-28 {
  margin-left: 0.875rem !important;
}
.u-padding-left-28 {
  padding-left: 0.875rem !important;
}
.u-m-t-28 {
  margin-top: 0.875rem !important;
}
.u-p-t-28 {
  padding-top: 0.875rem !important;
}
.u-margin-top-28 {
  margin-top: 0.875rem !important;
}
.u-padding-top-28 {
  padding-top: 0.875rem !important;
}
.u-m-r-28 {
  margin-right: 0.875rem !important;
}
.u-p-r-28 {
  padding-right: 0.875rem !important;
}
.u-margin-right-28 {
  margin-right: 0.875rem !important;
}
.u-padding-right-28 {
  padding-right: 0.875rem !important;
}
.u-m-b-28 {
  margin-bottom: 0.875rem !important;
}
.u-p-b-28 {
  padding-bottom: 0.875rem !important;
}
.u-margin-bottom-28 {
  margin-bottom: 0.875rem !important;
}
.u-padding-bottom-28 {
  padding-bottom: 0.875rem !important;
}
.u-margin-30, .u-m-30 {
  margin: 0.9375rem !important;
}
.u-padding-30, .u-p-30 {
  padding: 0.9375rem !important;
}
.u-m-l-30 {
  margin-left: 0.9375rem !important;
}
.u-p-l-30 {
  padding-left: 0.9375rem !important;
}
.u-margin-left-30 {
  margin-left: 0.9375rem !important;
}
.u-padding-left-30 {
  padding-left: 0.9375rem !important;
}
.u-m-t-30 {
  margin-top: 0.9375rem !important;
}
.u-p-t-30 {
  padding-top: 0.9375rem !important;
}
.u-margin-top-30 {
  margin-top: 0.9375rem !important;
}
.u-padding-top-30 {
  padding-top: 0.9375rem !important;
}
.u-m-r-30 {
  margin-right: 0.9375rem !important;
}
.u-p-r-30 {
  padding-right: 0.9375rem !important;
}
.u-margin-right-30 {
  margin-right: 0.9375rem !important;
}
.u-padding-right-30 {
  padding-right: 0.9375rem !important;
}
.u-m-b-30 {
  margin-bottom: 0.9375rem !important;
}
.u-p-b-30 {
  padding-bottom: 0.9375rem !important;
}
.u-margin-bottom-30 {
  margin-bottom: 0.9375rem !important;
}
.u-padding-bottom-30 {
  padding-bottom: 0.9375rem !important;
}
.u-margin-32, .u-m-32 {
  margin: 1rem !important;
}
.u-padding-32, .u-p-32 {
  padding: 1rem !important;
}
.u-m-l-32 {
  margin-left: 1rem !important;
}
.u-p-l-32 {
  padding-left: 1rem !important;
}
.u-margin-left-32 {
  margin-left: 1rem !important;
}
.u-padding-left-32 {
  padding-left: 1rem !important;
}
.u-m-t-32 {
  margin-top: 1rem !important;
}
.u-p-t-32 {
  padding-top: 1rem !important;
}
.u-margin-top-32 {
  margin-top: 1rem !important;
}
.u-padding-top-32 {
  padding-top: 1rem !important;
}
.u-m-r-32 {
  margin-right: 1rem !important;
}
.u-p-r-32 {
  padding-right: 1rem !important;
}
.u-margin-right-32 {
  margin-right: 1rem !important;
}
.u-padding-right-32 {
  padding-right: 1rem !important;
}
.u-m-b-32 {
  margin-bottom: 1rem !important;
}
.u-p-b-32 {
  padding-bottom: 1rem !important;
}
.u-margin-bottom-32 {
  margin-bottom: 1rem !important;
}
.u-padding-bottom-32 {
  padding-bottom: 1rem !important;
}
.u-margin-34, .u-m-34 {
  margin: 1.0625rem !important;
}
.u-padding-34, .u-p-34 {
  padding: 1.0625rem !important;
}
.u-m-l-34 {
  margin-left: 1.0625rem !important;
}
.u-p-l-34 {
  padding-left: 1.0625rem !important;
}
.u-margin-left-34 {
  margin-left: 1.0625rem !important;
}
.u-padding-left-34 {
  padding-left: 1.0625rem !important;
}
.u-m-t-34 {
  margin-top: 1.0625rem !important;
}
.u-p-t-34 {
  padding-top: 1.0625rem !important;
}
.u-margin-top-34 {
  margin-top: 1.0625rem !important;
}
.u-padding-top-34 {
  padding-top: 1.0625rem !important;
}
.u-m-r-34 {
  margin-right: 1.0625rem !important;
}
.u-p-r-34 {
  padding-right: 1.0625rem !important;
}
.u-margin-right-34 {
  margin-right: 1.0625rem !important;
}
.u-padding-right-34 {
  padding-right: 1.0625rem !important;
}
.u-m-b-34 {
  margin-bottom: 1.0625rem !important;
}
.u-p-b-34 {
  padding-bottom: 1.0625rem !important;
}
.u-margin-bottom-34 {
  margin-bottom: 1.0625rem !important;
}
.u-padding-bottom-34 {
  padding-bottom: 1.0625rem !important;
}
.u-margin-35, .u-m-35 {
  margin: 1.09375rem !important;
}
.u-padding-35, .u-p-35 {
  padding: 1.09375rem !important;
}
.u-m-l-35 {
  margin-left: 1.09375rem !important;
}
.u-p-l-35 {
  padding-left: 1.09375rem !important;
}
.u-margin-left-35 {
  margin-left: 1.09375rem !important;
}
.u-padding-left-35 {
  padding-left: 1.09375rem !important;
}
.u-m-t-35 {
  margin-top: 1.09375rem !important;
}
.u-p-t-35 {
  padding-top: 1.09375rem !important;
}
.u-margin-top-35 {
  margin-top: 1.09375rem !important;
}
.u-padding-top-35 {
  padding-top: 1.09375rem !important;
}
.u-m-r-35 {
  margin-right: 1.09375rem !important;
}
.u-p-r-35 {
  padding-right: 1.09375rem !important;
}
.u-margin-right-35 {
  margin-right: 1.09375rem !important;
}
.u-padding-right-35 {
  padding-right: 1.09375rem !important;
}
.u-m-b-35 {
  margin-bottom: 1.09375rem !important;
}
.u-p-b-35 {
  padding-bottom: 1.09375rem !important;
}
.u-margin-bottom-35 {
  margin-bottom: 1.09375rem !important;
}
.u-padding-bottom-35 {
  padding-bottom: 1.09375rem !important;
}
.u-margin-36, .u-m-36 {
  margin: 1.125rem !important;
}
.u-padding-36, .u-p-36 {
  padding: 1.125rem !important;
}
.u-m-l-36 {
  margin-left: 1.125rem !important;
}
.u-p-l-36 {
  padding-left: 1.125rem !important;
}
.u-margin-left-36 {
  margin-left: 1.125rem !important;
}
.u-padding-left-36 {
  padding-left: 1.125rem !important;
}
.u-m-t-36 {
  margin-top: 1.125rem !important;
}
.u-p-t-36 {
  padding-top: 1.125rem !important;
}
.u-margin-top-36 {
  margin-top: 1.125rem !important;
}
.u-padding-top-36 {
  padding-top: 1.125rem !important;
}
.u-m-r-36 {
  margin-right: 1.125rem !important;
}
.u-p-r-36 {
  padding-right: 1.125rem !important;
}
.u-margin-right-36 {
  margin-right: 1.125rem !important;
}
.u-padding-right-36 {
  padding-right: 1.125rem !important;
}
.u-m-b-36 {
  margin-bottom: 1.125rem !important;
}
.u-p-b-36 {
  padding-bottom: 1.125rem !important;
}
.u-margin-bottom-36 {
  margin-bottom: 1.125rem !important;
}
.u-padding-bottom-36 {
  padding-bottom: 1.125rem !important;
}
.u-margin-38, .u-m-38 {
  margin: 1.1875rem !important;
}
.u-padding-38, .u-p-38 {
  padding: 1.1875rem !important;
}
.u-m-l-38 {
  margin-left: 1.1875rem !important;
}
.u-p-l-38 {
  padding-left: 1.1875rem !important;
}
.u-margin-left-38 {
  margin-left: 1.1875rem !important;
}
.u-padding-left-38 {
  padding-left: 1.1875rem !important;
}
.u-m-t-38 {
  margin-top: 1.1875rem !important;
}
.u-p-t-38 {
  padding-top: 1.1875rem !important;
}
.u-margin-top-38 {
  margin-top: 1.1875rem !important;
}
.u-padding-top-38 {
  padding-top: 1.1875rem !important;
}
.u-m-r-38 {
  margin-right: 1.1875rem !important;
}
.u-p-r-38 {
  padding-right: 1.1875rem !important;
}
.u-margin-right-38 {
  margin-right: 1.1875rem !important;
}
.u-padding-right-38 {
  padding-right: 1.1875rem !important;
}
.u-m-b-38 {
  margin-bottom: 1.1875rem !important;
}
.u-p-b-38 {
  padding-bottom: 1.1875rem !important;
}
.u-margin-bottom-38 {
  margin-bottom: 1.1875rem !important;
}
.u-padding-bottom-38 {
  padding-bottom: 1.1875rem !important;
}
.u-margin-40, .u-m-40 {
  margin: 1.25rem !important;
}
.u-padding-40, .u-p-40 {
  padding: 1.25rem !important;
}
.u-m-l-40 {
  margin-left: 1.25rem !important;
}
.u-p-l-40 {
  padding-left: 1.25rem !important;
}
.u-margin-left-40 {
  margin-left: 1.25rem !important;
}
.u-padding-left-40 {
  padding-left: 1.25rem !important;
}
.u-m-t-40 {
  margin-top: 1.25rem !important;
}
.u-p-t-40 {
  padding-top: 1.25rem !important;
}
.u-margin-top-40 {
  margin-top: 1.25rem !important;
}
.u-padding-top-40 {
  padding-top: 1.25rem !important;
}
.u-m-r-40 {
  margin-right: 1.25rem !important;
}
.u-p-r-40 {
  padding-right: 1.25rem !important;
}
.u-margin-right-40 {
  margin-right: 1.25rem !important;
}
.u-padding-right-40 {
  padding-right: 1.25rem !important;
}
.u-m-b-40 {
  margin-bottom: 1.25rem !important;
}
.u-p-b-40 {
  padding-bottom: 1.25rem !important;
}
.u-margin-bottom-40 {
  margin-bottom: 1.25rem !important;
}
.u-padding-bottom-40 {
  padding-bottom: 1.25rem !important;
}
.u-margin-42, .u-m-42 {
  margin: 1.3125rem !important;
}
.u-padding-42, .u-p-42 {
  padding: 1.3125rem !important;
}
.u-m-l-42 {
  margin-left: 1.3125rem !important;
}
.u-p-l-42 {
  padding-left: 1.3125rem !important;
}
.u-margin-left-42 {
  margin-left: 1.3125rem !important;
}
.u-padding-left-42 {
  padding-left: 1.3125rem !important;
}
.u-m-t-42 {
  margin-top: 1.3125rem !important;
}
.u-p-t-42 {
  padding-top: 1.3125rem !important;
}
.u-margin-top-42 {
  margin-top: 1.3125rem !important;
}
.u-padding-top-42 {
  padding-top: 1.3125rem !important;
}
.u-m-r-42 {
  margin-right: 1.3125rem !important;
}
.u-p-r-42 {
  padding-right: 1.3125rem !important;
}
.u-margin-right-42 {
  margin-right: 1.3125rem !important;
}
.u-padding-right-42 {
  padding-right: 1.3125rem !important;
}
.u-m-b-42 {
  margin-bottom: 1.3125rem !important;
}
.u-p-b-42 {
  padding-bottom: 1.3125rem !important;
}
.u-margin-bottom-42 {
  margin-bottom: 1.3125rem !important;
}
.u-padding-bottom-42 {
  padding-bottom: 1.3125rem !important;
}
.u-margin-44, .u-m-44 {
  margin: 1.375rem !important;
}
.u-padding-44, .u-p-44 {
  padding: 1.375rem !important;
}
.u-m-l-44 {
  margin-left: 1.375rem !important;
}
.u-p-l-44 {
  padding-left: 1.375rem !important;
}
.u-margin-left-44 {
  margin-left: 1.375rem !important;
}
.u-padding-left-44 {
  padding-left: 1.375rem !important;
}
.u-m-t-44 {
  margin-top: 1.375rem !important;
}
.u-p-t-44 {
  padding-top: 1.375rem !important;
}
.u-margin-top-44 {
  margin-top: 1.375rem !important;
}
.u-padding-top-44 {
  padding-top: 1.375rem !important;
}
.u-m-r-44 {
  margin-right: 1.375rem !important;
}
.u-p-r-44 {
  padding-right: 1.375rem !important;
}
.u-margin-right-44 {
  margin-right: 1.375rem !important;
}
.u-padding-right-44 {
  padding-right: 1.375rem !important;
}
.u-m-b-44 {
  margin-bottom: 1.375rem !important;
}
.u-p-b-44 {
  padding-bottom: 1.375rem !important;
}
.u-margin-bottom-44 {
  margin-bottom: 1.375rem !important;
}
.u-padding-bottom-44 {
  padding-bottom: 1.375rem !important;
}
.u-margin-45, .u-m-45 {
  margin: 1.40625rem !important;
}
.u-padding-45, .u-p-45 {
  padding: 1.40625rem !important;
}
.u-m-l-45 {
  margin-left: 1.40625rem !important;
}
.u-p-l-45 {
  padding-left: 1.40625rem !important;
}
.u-margin-left-45 {
  margin-left: 1.40625rem !important;
}
.u-padding-left-45 {
  padding-left: 1.40625rem !important;
}
.u-m-t-45 {
  margin-top: 1.40625rem !important;
}
.u-p-t-45 {
  padding-top: 1.40625rem !important;
}
.u-margin-top-45 {
  margin-top: 1.40625rem !important;
}
.u-padding-top-45 {
  padding-top: 1.40625rem !important;
}
.u-m-r-45 {
  margin-right: 1.40625rem !important;
}
.u-p-r-45 {
  padding-right: 1.40625rem !important;
}
.u-margin-right-45 {
  margin-right: 1.40625rem !important;
}
.u-padding-right-45 {
  padding-right: 1.40625rem !important;
}
.u-m-b-45 {
  margin-bottom: 1.40625rem !important;
}
.u-p-b-45 {
  padding-bottom: 1.40625rem !important;
}
.u-margin-bottom-45 {
  margin-bottom: 1.40625rem !important;
}
.u-padding-bottom-45 {
  padding-bottom: 1.40625rem !important;
}
.u-margin-46, .u-m-46 {
  margin: 1.4375rem !important;
}
.u-padding-46, .u-p-46 {
  padding: 1.4375rem !important;
}
.u-m-l-46 {
  margin-left: 1.4375rem !important;
}
.u-p-l-46 {
  padding-left: 1.4375rem !important;
}
.u-margin-left-46 {
  margin-left: 1.4375rem !important;
}
.u-padding-left-46 {
  padding-left: 1.4375rem !important;
}
.u-m-t-46 {
  margin-top: 1.4375rem !important;
}
.u-p-t-46 {
  padding-top: 1.4375rem !important;
}
.u-margin-top-46 {
  margin-top: 1.4375rem !important;
}
.u-padding-top-46 {
  padding-top: 1.4375rem !important;
}
.u-m-r-46 {
  margin-right: 1.4375rem !important;
}
.u-p-r-46 {
  padding-right: 1.4375rem !important;
}
.u-margin-right-46 {
  margin-right: 1.4375rem !important;
}
.u-padding-right-46 {
  padding-right: 1.4375rem !important;
}
.u-m-b-46 {
  margin-bottom: 1.4375rem !important;
}
.u-p-b-46 {
  padding-bottom: 1.4375rem !important;
}
.u-margin-bottom-46 {
  margin-bottom: 1.4375rem !important;
}
.u-padding-bottom-46 {
  padding-bottom: 1.4375rem !important;
}
.u-margin-48, .u-m-48 {
  margin: 1.5rem !important;
}
.u-padding-48, .u-p-48 {
  padding: 1.5rem !important;
}
.u-m-l-48 {
  margin-left: 1.5rem !important;
}
.u-p-l-48 {
  padding-left: 1.5rem !important;
}
.u-margin-left-48 {
  margin-left: 1.5rem !important;
}
.u-padding-left-48 {
  padding-left: 1.5rem !important;
}
.u-m-t-48 {
  margin-top: 1.5rem !important;
}
.u-p-t-48 {
  padding-top: 1.5rem !important;
}
.u-margin-top-48 {
  margin-top: 1.5rem !important;
}
.u-padding-top-48 {
  padding-top: 1.5rem !important;
}
.u-m-r-48 {
  margin-right: 1.5rem !important;
}
.u-p-r-48 {
  padding-right: 1.5rem !important;
}
.u-margin-right-48 {
  margin-right: 1.5rem !important;
}
.u-padding-right-48 {
  padding-right: 1.5rem !important;
}
.u-m-b-48 {
  margin-bottom: 1.5rem !important;
}
.u-p-b-48 {
  padding-bottom: 1.5rem !important;
}
.u-margin-bottom-48 {
  margin-bottom: 1.5rem !important;
}
.u-padding-bottom-48 {
  padding-bottom: 1.5rem !important;
}
.u-margin-50, .u-m-50 {
  margin: 1.5625rem !important;
}
.u-padding-50, .u-p-50 {
  padding: 1.5625rem !important;
}
.u-m-l-50 {
  margin-left: 1.5625rem !important;
}
.u-p-l-50 {
  padding-left: 1.5625rem !important;
}
.u-margin-left-50 {
  margin-left: 1.5625rem !important;
}
.u-padding-left-50 {
  padding-left: 1.5625rem !important;
}
.u-m-t-50 {
  margin-top: 1.5625rem !important;
}
.u-p-t-50 {
  padding-top: 1.5625rem !important;
}
.u-margin-top-50 {
  margin-top: 1.5625rem !important;
}
.u-padding-top-50 {
  padding-top: 1.5625rem !important;
}
.u-m-r-50 {
  margin-right: 1.5625rem !important;
}
.u-p-r-50 {
  padding-right: 1.5625rem !important;
}
.u-margin-right-50 {
  margin-right: 1.5625rem !important;
}
.u-padding-right-50 {
  padding-right: 1.5625rem !important;
}
.u-m-b-50 {
  margin-bottom: 1.5625rem !important;
}
.u-p-b-50 {
  padding-bottom: 1.5625rem !important;
}
.u-margin-bottom-50 {
  margin-bottom: 1.5625rem !important;
}
.u-padding-bottom-50 {
  padding-bottom: 1.5625rem !important;
}
.u-margin-52, .u-m-52 {
  margin: 1.625rem !important;
}
.u-padding-52, .u-p-52 {
  padding: 1.625rem !important;
}
.u-m-l-52 {
  margin-left: 1.625rem !important;
}
.u-p-l-52 {
  padding-left: 1.625rem !important;
}
.u-margin-left-52 {
  margin-left: 1.625rem !important;
}
.u-padding-left-52 {
  padding-left: 1.625rem !important;
}
.u-m-t-52 {
  margin-top: 1.625rem !important;
}
.u-p-t-52 {
  padding-top: 1.625rem !important;
}
.u-margin-top-52 {
  margin-top: 1.625rem !important;
}
.u-padding-top-52 {
  padding-top: 1.625rem !important;
}
.u-m-r-52 {
  margin-right: 1.625rem !important;
}
.u-p-r-52 {
  padding-right: 1.625rem !important;
}
.u-margin-right-52 {
  margin-right: 1.625rem !important;
}
.u-padding-right-52 {
  padding-right: 1.625rem !important;
}
.u-m-b-52 {
  margin-bottom: 1.625rem !important;
}
.u-p-b-52 {
  padding-bottom: 1.625rem !important;
}
.u-margin-bottom-52 {
  margin-bottom: 1.625rem !important;
}
.u-padding-bottom-52 {
  padding-bottom: 1.625rem !important;
}
.u-margin-54, .u-m-54 {
  margin: 1.6875rem !important;
}
.u-padding-54, .u-p-54 {
  padding: 1.6875rem !important;
}
.u-m-l-54 {
  margin-left: 1.6875rem !important;
}
.u-p-l-54 {
  padding-left: 1.6875rem !important;
}
.u-margin-left-54 {
  margin-left: 1.6875rem !important;
}
.u-padding-left-54 {
  padding-left: 1.6875rem !important;
}
.u-m-t-54 {
  margin-top: 1.6875rem !important;
}
.u-p-t-54 {
  padding-top: 1.6875rem !important;
}
.u-margin-top-54 {
  margin-top: 1.6875rem !important;
}
.u-padding-top-54 {
  padding-top: 1.6875rem !important;
}
.u-m-r-54 {
  margin-right: 1.6875rem !important;
}
.u-p-r-54 {
  padding-right: 1.6875rem !important;
}
.u-margin-right-54 {
  margin-right: 1.6875rem !important;
}
.u-padding-right-54 {
  padding-right: 1.6875rem !important;
}
.u-m-b-54 {
  margin-bottom: 1.6875rem !important;
}
.u-p-b-54 {
  padding-bottom: 1.6875rem !important;
}
.u-margin-bottom-54 {
  margin-bottom: 1.6875rem !important;
}
.u-padding-bottom-54 {
  padding-bottom: 1.6875rem !important;
}
.u-margin-55, .u-m-55 {
  margin: 1.71875rem !important;
}
.u-padding-55, .u-p-55 {
  padding: 1.71875rem !important;
}
.u-m-l-55 {
  margin-left: 1.71875rem !important;
}
.u-p-l-55 {
  padding-left: 1.71875rem !important;
}
.u-margin-left-55 {
  margin-left: 1.71875rem !important;
}
.u-padding-left-55 {
  padding-left: 1.71875rem !important;
}
.u-m-t-55 {
  margin-top: 1.71875rem !important;
}
.u-p-t-55 {
  padding-top: 1.71875rem !important;
}
.u-margin-top-55 {
  margin-top: 1.71875rem !important;
}
.u-padding-top-55 {
  padding-top: 1.71875rem !important;
}
.u-m-r-55 {
  margin-right: 1.71875rem !important;
}
.u-p-r-55 {
  padding-right: 1.71875rem !important;
}
.u-margin-right-55 {
  margin-right: 1.71875rem !important;
}
.u-padding-right-55 {
  padding-right: 1.71875rem !important;
}
.u-m-b-55 {
  margin-bottom: 1.71875rem !important;
}
.u-p-b-55 {
  padding-bottom: 1.71875rem !important;
}
.u-margin-bottom-55 {
  margin-bottom: 1.71875rem !important;
}
.u-padding-bottom-55 {
  padding-bottom: 1.71875rem !important;
}
.u-margin-56, .u-m-56 {
  margin: 1.75rem !important;
}
.u-padding-56, .u-p-56 {
  padding: 1.75rem !important;
}
.u-m-l-56 {
  margin-left: 1.75rem !important;
}
.u-p-l-56 {
  padding-left: 1.75rem !important;
}
.u-margin-left-56 {
  margin-left: 1.75rem !important;
}
.u-padding-left-56 {
  padding-left: 1.75rem !important;
}
.u-m-t-56 {
  margin-top: 1.75rem !important;
}
.u-p-t-56 {
  padding-top: 1.75rem !important;
}
.u-margin-top-56 {
  margin-top: 1.75rem !important;
}
.u-padding-top-56 {
  padding-top: 1.75rem !important;
}
.u-m-r-56 {
  margin-right: 1.75rem !important;
}
.u-p-r-56 {
  padding-right: 1.75rem !important;
}
.u-margin-right-56 {
  margin-right: 1.75rem !important;
}
.u-padding-right-56 {
  padding-right: 1.75rem !important;
}
.u-m-b-56 {
  margin-bottom: 1.75rem !important;
}
.u-p-b-56 {
  padding-bottom: 1.75rem !important;
}
.u-margin-bottom-56 {
  margin-bottom: 1.75rem !important;
}
.u-padding-bottom-56 {
  padding-bottom: 1.75rem !important;
}
.u-margin-58, .u-m-58 {
  margin: 1.8125rem !important;
}
.u-padding-58, .u-p-58 {
  padding: 1.8125rem !important;
}
.u-m-l-58 {
  margin-left: 1.8125rem !important;
}
.u-p-l-58 {
  padding-left: 1.8125rem !important;
}
.u-margin-left-58 {
  margin-left: 1.8125rem !important;
}
.u-padding-left-58 {
  padding-left: 1.8125rem !important;
}
.u-m-t-58 {
  margin-top: 1.8125rem !important;
}
.u-p-t-58 {
  padding-top: 1.8125rem !important;
}
.u-margin-top-58 {
  margin-top: 1.8125rem !important;
}
.u-padding-top-58 {
  padding-top: 1.8125rem !important;
}
.u-m-r-58 {
  margin-right: 1.8125rem !important;
}
.u-p-r-58 {
  padding-right: 1.8125rem !important;
}
.u-margin-right-58 {
  margin-right: 1.8125rem !important;
}
.u-padding-right-58 {
  padding-right: 1.8125rem !important;
}
.u-m-b-58 {
  margin-bottom: 1.8125rem !important;
}
.u-p-b-58 {
  padding-bottom: 1.8125rem !important;
}
.u-margin-bottom-58 {
  margin-bottom: 1.8125rem !important;
}
.u-padding-bottom-58 {
  padding-bottom: 1.8125rem !important;
}
.u-margin-60, .u-m-60 {
  margin: 1.875rem !important;
}
.u-padding-60, .u-p-60 {
  padding: 1.875rem !important;
}
.u-m-l-60 {
  margin-left: 1.875rem !important;
}
.u-p-l-60 {
  padding-left: 1.875rem !important;
}
.u-margin-left-60 {
  margin-left: 1.875rem !important;
}
.u-padding-left-60 {
  padding-left: 1.875rem !important;
}
.u-m-t-60 {
  margin-top: 1.875rem !important;
}
.u-p-t-60 {
  padding-top: 1.875rem !important;
}
.u-margin-top-60 {
  margin-top: 1.875rem !important;
}
.u-padding-top-60 {
  padding-top: 1.875rem !important;
}
.u-m-r-60 {
  margin-right: 1.875rem !important;
}
.u-p-r-60 {
  padding-right: 1.875rem !important;
}
.u-margin-right-60 {
  margin-right: 1.875rem !important;
}
.u-padding-right-60 {
  padding-right: 1.875rem !important;
}
.u-m-b-60 {
  margin-bottom: 1.875rem !important;
}
.u-p-b-60 {
  padding-bottom: 1.875rem !important;
}
.u-margin-bottom-60 {
  margin-bottom: 1.875rem !important;
}
.u-padding-bottom-60 {
  padding-bottom: 1.875rem !important;
}
.u-margin-62, .u-m-62 {
  margin: 1.9375rem !important;
}
.u-padding-62, .u-p-62 {
  padding: 1.9375rem !important;
}
.u-m-l-62 {
  margin-left: 1.9375rem !important;
}
.u-p-l-62 {
  padding-left: 1.9375rem !important;
}
.u-margin-left-62 {
  margin-left: 1.9375rem !important;
}
.u-padding-left-62 {
  padding-left: 1.9375rem !important;
}
.u-m-t-62 {
  margin-top: 1.9375rem !important;
}
.u-p-t-62 {
  padding-top: 1.9375rem !important;
}
.u-margin-top-62 {
  margin-top: 1.9375rem !important;
}
.u-padding-top-62 {
  padding-top: 1.9375rem !important;
}
.u-m-r-62 {
  margin-right: 1.9375rem !important;
}
.u-p-r-62 {
  padding-right: 1.9375rem !important;
}
.u-margin-right-62 {
  margin-right: 1.9375rem !important;
}
.u-padding-right-62 {
  padding-right: 1.9375rem !important;
}
.u-m-b-62 {
  margin-bottom: 1.9375rem !important;
}
.u-p-b-62 {
  padding-bottom: 1.9375rem !important;
}
.u-margin-bottom-62 {
  margin-bottom: 1.9375rem !important;
}
.u-padding-bottom-62 {
  padding-bottom: 1.9375rem !important;
}
.u-margin-64, .u-m-64 {
  margin: 2rem !important;
}
.u-padding-64, .u-p-64 {
  padding: 2rem !important;
}
.u-m-l-64 {
  margin-left: 2rem !important;
}
.u-p-l-64 {
  padding-left: 2rem !important;
}
.u-margin-left-64 {
  margin-left: 2rem !important;
}
.u-padding-left-64 {
  padding-left: 2rem !important;
}
.u-m-t-64 {
  margin-top: 2rem !important;
}
.u-p-t-64 {
  padding-top: 2rem !important;
}
.u-margin-top-64 {
  margin-top: 2rem !important;
}
.u-padding-top-64 {
  padding-top: 2rem !important;
}
.u-m-r-64 {
  margin-right: 2rem !important;
}
.u-p-r-64 {
  padding-right: 2rem !important;
}
.u-margin-right-64 {
  margin-right: 2rem !important;
}
.u-padding-right-64 {
  padding-right: 2rem !important;
}
.u-m-b-64 {
  margin-bottom: 2rem !important;
}
.u-p-b-64 {
  padding-bottom: 2rem !important;
}
.u-margin-bottom-64 {
  margin-bottom: 2rem !important;
}
.u-padding-bottom-64 {
  padding-bottom: 2rem !important;
}
.u-margin-65, .u-m-65 {
  margin: 2.03125rem !important;
}
.u-padding-65, .u-p-65 {
  padding: 2.03125rem !important;
}
.u-m-l-65 {
  margin-left: 2.03125rem !important;
}
.u-p-l-65 {
  padding-left: 2.03125rem !important;
}
.u-margin-left-65 {
  margin-left: 2.03125rem !important;
}
.u-padding-left-65 {
  padding-left: 2.03125rem !important;
}
.u-m-t-65 {
  margin-top: 2.03125rem !important;
}
.u-p-t-65 {
  padding-top: 2.03125rem !important;
}
.u-margin-top-65 {
  margin-top: 2.03125rem !important;
}
.u-padding-top-65 {
  padding-top: 2.03125rem !important;
}
.u-m-r-65 {
  margin-right: 2.03125rem !important;
}
.u-p-r-65 {
  padding-right: 2.03125rem !important;
}
.u-margin-right-65 {
  margin-right: 2.03125rem !important;
}
.u-padding-right-65 {
  padding-right: 2.03125rem !important;
}
.u-m-b-65 {
  margin-bottom: 2.03125rem !important;
}
.u-p-b-65 {
  padding-bottom: 2.03125rem !important;
}
.u-margin-bottom-65 {
  margin-bottom: 2.03125rem !important;
}
.u-padding-bottom-65 {
  padding-bottom: 2.03125rem !important;
}
.u-margin-66, .u-m-66 {
  margin: 2.0625rem !important;
}
.u-padding-66, .u-p-66 {
  padding: 2.0625rem !important;
}
.u-m-l-66 {
  margin-left: 2.0625rem !important;
}
.u-p-l-66 {
  padding-left: 2.0625rem !important;
}
.u-margin-left-66 {
  margin-left: 2.0625rem !important;
}
.u-padding-left-66 {
  padding-left: 2.0625rem !important;
}
.u-m-t-66 {
  margin-top: 2.0625rem !important;
}
.u-p-t-66 {
  padding-top: 2.0625rem !important;
}
.u-margin-top-66 {
  margin-top: 2.0625rem !important;
}
.u-padding-top-66 {
  padding-top: 2.0625rem !important;
}
.u-m-r-66 {
  margin-right: 2.0625rem !important;
}
.u-p-r-66 {
  padding-right: 2.0625rem !important;
}
.u-margin-right-66 {
  margin-right: 2.0625rem !important;
}
.u-padding-right-66 {
  padding-right: 2.0625rem !important;
}
.u-m-b-66 {
  margin-bottom: 2.0625rem !important;
}
.u-p-b-66 {
  padding-bottom: 2.0625rem !important;
}
.u-margin-bottom-66 {
  margin-bottom: 2.0625rem !important;
}
.u-padding-bottom-66 {
  padding-bottom: 2.0625rem !important;
}
.u-margin-68, .u-m-68 {
  margin: 2.125rem !important;
}
.u-padding-68, .u-p-68 {
  padding: 2.125rem !important;
}
.u-m-l-68 {
  margin-left: 2.125rem !important;
}
.u-p-l-68 {
  padding-left: 2.125rem !important;
}
.u-margin-left-68 {
  margin-left: 2.125rem !important;
}
.u-padding-left-68 {
  padding-left: 2.125rem !important;
}
.u-m-t-68 {
  margin-top: 2.125rem !important;
}
.u-p-t-68 {
  padding-top: 2.125rem !important;
}
.u-margin-top-68 {
  margin-top: 2.125rem !important;
}
.u-padding-top-68 {
  padding-top: 2.125rem !important;
}
.u-m-r-68 {
  margin-right: 2.125rem !important;
}
.u-p-r-68 {
  padding-right: 2.125rem !important;
}
.u-margin-right-68 {
  margin-right: 2.125rem !important;
}
.u-padding-right-68 {
  padding-right: 2.125rem !important;
}
.u-m-b-68 {
  margin-bottom: 2.125rem !important;
}
.u-p-b-68 {
  padding-bottom: 2.125rem !important;
}
.u-margin-bottom-68 {
  margin-bottom: 2.125rem !important;
}
.u-padding-bottom-68 {
  padding-bottom: 2.125rem !important;
}
.u-margin-70, .u-m-70 {
  margin: 2.1875rem !important;
}
.u-padding-70, .u-p-70 {
  padding: 2.1875rem !important;
}
.u-m-l-70 {
  margin-left: 2.1875rem !important;
}
.u-p-l-70 {
  padding-left: 2.1875rem !important;
}
.u-margin-left-70 {
  margin-left: 2.1875rem !important;
}
.u-padding-left-70 {
  padding-left: 2.1875rem !important;
}
.u-m-t-70 {
  margin-top: 2.1875rem !important;
}
.u-p-t-70 {
  padding-top: 2.1875rem !important;
}
.u-margin-top-70 {
  margin-top: 2.1875rem !important;
}
.u-padding-top-70 {
  padding-top: 2.1875rem !important;
}
.u-m-r-70 {
  margin-right: 2.1875rem !important;
}
.u-p-r-70 {
  padding-right: 2.1875rem !important;
}
.u-margin-right-70 {
  margin-right: 2.1875rem !important;
}
.u-padding-right-70 {
  padding-right: 2.1875rem !important;
}
.u-m-b-70 {
  margin-bottom: 2.1875rem !important;
}
.u-p-b-70 {
  padding-bottom: 2.1875rem !important;
}
.u-margin-bottom-70 {
  margin-bottom: 2.1875rem !important;
}
.u-padding-bottom-70 {
  padding-bottom: 2.1875rem !important;
}
.u-margin-72, .u-m-72 {
  margin: 2.25rem !important;
}
.u-padding-72, .u-p-72 {
  padding: 2.25rem !important;
}
.u-m-l-72 {
  margin-left: 2.25rem !important;
}
.u-p-l-72 {
  padding-left: 2.25rem !important;
}
.u-margin-left-72 {
  margin-left: 2.25rem !important;
}
.u-padding-left-72 {
  padding-left: 2.25rem !important;
}
.u-m-t-72 {
  margin-top: 2.25rem !important;
}
.u-p-t-72 {
  padding-top: 2.25rem !important;
}
.u-margin-top-72 {
  margin-top: 2.25rem !important;
}
.u-padding-top-72 {
  padding-top: 2.25rem !important;
}
.u-m-r-72 {
  margin-right: 2.25rem !important;
}
.u-p-r-72 {
  padding-right: 2.25rem !important;
}
.u-margin-right-72 {
  margin-right: 2.25rem !important;
}
.u-padding-right-72 {
  padding-right: 2.25rem !important;
}
.u-m-b-72 {
  margin-bottom: 2.25rem !important;
}
.u-p-b-72 {
  padding-bottom: 2.25rem !important;
}
.u-margin-bottom-72 {
  margin-bottom: 2.25rem !important;
}
.u-padding-bottom-72 {
  padding-bottom: 2.25rem !important;
}
.u-margin-74, .u-m-74 {
  margin: 2.3125rem !important;
}
.u-padding-74, .u-p-74 {
  padding: 2.3125rem !important;
}
.u-m-l-74 {
  margin-left: 2.3125rem !important;
}
.u-p-l-74 {
  padding-left: 2.3125rem !important;
}
.u-margin-left-74 {
  margin-left: 2.3125rem !important;
}
.u-padding-left-74 {
  padding-left: 2.3125rem !important;
}
.u-m-t-74 {
  margin-top: 2.3125rem !important;
}
.u-p-t-74 {
  padding-top: 2.3125rem !important;
}
.u-margin-top-74 {
  margin-top: 2.3125rem !important;
}
.u-padding-top-74 {
  padding-top: 2.3125rem !important;
}
.u-m-r-74 {
  margin-right: 2.3125rem !important;
}
.u-p-r-74 {
  padding-right: 2.3125rem !important;
}
.u-margin-right-74 {
  margin-right: 2.3125rem !important;
}
.u-padding-right-74 {
  padding-right: 2.3125rem !important;
}
.u-m-b-74 {
  margin-bottom: 2.3125rem !important;
}
.u-p-b-74 {
  padding-bottom: 2.3125rem !important;
}
.u-margin-bottom-74 {
  margin-bottom: 2.3125rem !important;
}
.u-padding-bottom-74 {
  padding-bottom: 2.3125rem !important;
}
.u-margin-75, .u-m-75 {
  margin: 2.34375rem !important;
}
.u-padding-75, .u-p-75 {
  padding: 2.34375rem !important;
}
.u-m-l-75 {
  margin-left: 2.34375rem !important;
}
.u-p-l-75 {
  padding-left: 2.34375rem !important;
}
.u-margin-left-75 {
  margin-left: 2.34375rem !important;
}
.u-padding-left-75 {
  padding-left: 2.34375rem !important;
}
.u-m-t-75 {
  margin-top: 2.34375rem !important;
}
.u-p-t-75 {
  padding-top: 2.34375rem !important;
}
.u-margin-top-75 {
  margin-top: 2.34375rem !important;
}
.u-padding-top-75 {
  padding-top: 2.34375rem !important;
}
.u-m-r-75 {
  margin-right: 2.34375rem !important;
}
.u-p-r-75 {
  padding-right: 2.34375rem !important;
}
.u-margin-right-75 {
  margin-right: 2.34375rem !important;
}
.u-padding-right-75 {
  padding-right: 2.34375rem !important;
}
.u-m-b-75 {
  margin-bottom: 2.34375rem !important;
}
.u-p-b-75 {
  padding-bottom: 2.34375rem !important;
}
.u-margin-bottom-75 {
  margin-bottom: 2.34375rem !important;
}
.u-padding-bottom-75 {
  padding-bottom: 2.34375rem !important;
}
.u-margin-76, .u-m-76 {
  margin: 2.375rem !important;
}
.u-padding-76, .u-p-76 {
  padding: 2.375rem !important;
}
.u-m-l-76 {
  margin-left: 2.375rem !important;
}
.u-p-l-76 {
  padding-left: 2.375rem !important;
}
.u-margin-left-76 {
  margin-left: 2.375rem !important;
}
.u-padding-left-76 {
  padding-left: 2.375rem !important;
}
.u-m-t-76 {
  margin-top: 2.375rem !important;
}
.u-p-t-76 {
  padding-top: 2.375rem !important;
}
.u-margin-top-76 {
  margin-top: 2.375rem !important;
}
.u-padding-top-76 {
  padding-top: 2.375rem !important;
}
.u-m-r-76 {
  margin-right: 2.375rem !important;
}
.u-p-r-76 {
  padding-right: 2.375rem !important;
}
.u-margin-right-76 {
  margin-right: 2.375rem !important;
}
.u-padding-right-76 {
  padding-right: 2.375rem !important;
}
.u-m-b-76 {
  margin-bottom: 2.375rem !important;
}
.u-p-b-76 {
  padding-bottom: 2.375rem !important;
}
.u-margin-bottom-76 {
  margin-bottom: 2.375rem !important;
}
.u-padding-bottom-76 {
  padding-bottom: 2.375rem !important;
}
.u-margin-78, .u-m-78 {
  margin: 2.4375rem !important;
}
.u-padding-78, .u-p-78 {
  padding: 2.4375rem !important;
}
.u-m-l-78 {
  margin-left: 2.4375rem !important;
}
.u-p-l-78 {
  padding-left: 2.4375rem !important;
}
.u-margin-left-78 {
  margin-left: 2.4375rem !important;
}
.u-padding-left-78 {
  padding-left: 2.4375rem !important;
}
.u-m-t-78 {
  margin-top: 2.4375rem !important;
}
.u-p-t-78 {
  padding-top: 2.4375rem !important;
}
.u-margin-top-78 {
  margin-top: 2.4375rem !important;
}
.u-padding-top-78 {
  padding-top: 2.4375rem !important;
}
.u-m-r-78 {
  margin-right: 2.4375rem !important;
}
.u-p-r-78 {
  padding-right: 2.4375rem !important;
}
.u-margin-right-78 {
  margin-right: 2.4375rem !important;
}
.u-padding-right-78 {
  padding-right: 2.4375rem !important;
}
.u-m-b-78 {
  margin-bottom: 2.4375rem !important;
}
.u-p-b-78 {
  padding-bottom: 2.4375rem !important;
}
.u-margin-bottom-78 {
  margin-bottom: 2.4375rem !important;
}
.u-padding-bottom-78 {
  padding-bottom: 2.4375rem !important;
}
.u-margin-80, .u-m-80 {
  margin: 2.5rem !important;
}
.u-padding-80, .u-p-80 {
  padding: 2.5rem !important;
}
.u-m-l-80 {
  margin-left: 2.5rem !important;
}
.u-p-l-80 {
  padding-left: 2.5rem !important;
}
.u-margin-left-80 {
  margin-left: 2.5rem !important;
}
.u-padding-left-80 {
  padding-left: 2.5rem !important;
}
.u-m-t-80 {
  margin-top: 2.5rem !important;
}
.u-p-t-80 {
  padding-top: 2.5rem !important;
}
.u-margin-top-80 {
  margin-top: 2.5rem !important;
}
.u-padding-top-80 {
  padding-top: 2.5rem !important;
}
.u-m-r-80 {
  margin-right: 2.5rem !important;
}
.u-p-r-80 {
  padding-right: 2.5rem !important;
}
.u-margin-right-80 {
  margin-right: 2.5rem !important;
}
.u-padding-right-80 {
  padding-right: 2.5rem !important;
}
.u-m-b-80 {
  margin-bottom: 2.5rem !important;
}
.u-p-b-80 {
  padding-bottom: 2.5rem !important;
}
.u-margin-bottom-80 {
  margin-bottom: 2.5rem !important;
}
.u-padding-bottom-80 {
  padding-bottom: 2.5rem !important;
}
.u-primary-light {
  color: #ecf5ff;
}
.u-warning-light {
  color: #fdf6ec;
}
.u-success-light {
  color: #f5fff0;
}
.u-error-light {
  color: #fef0f0;
}
.u-info-light {
  color: #f4f4f5;
}
.u-primary-light-bg {
  background-color: #ecf5ff;
}
.u-warning-light-bg {
  background-color: #fdf6ec;
}
.u-success-light-bg {
  background-color: #f5fff0;
}
.u-error-light-bg {
  background-color: #fef0f0;
}
.u-info-light-bg {
  background-color: #f4f4f5;
}
.u-primary-dark {
  color: #398ade;
}
.u-warning-dark {
  color: #f1a532;
}
.u-success-dark {
  color: #53c21d;
}
.u-error-dark {
  color: #e45656;
}
.u-info-dark {
  color: #767a82;
}
.u-primary-dark-bg {
  background-color: #398ade;
}
.u-warning-dark-bg {
  background-color: #f1a532;
}
.u-success-dark-bg {
  background-color: #53c21d;
}
.u-error-dark-bg {
  background-color: #e45656;
}
.u-info-dark-bg {
  background-color: #767a82;
}
.u-primary-disabled {
  color: #9acafc;
}
.u-warning-disabled {
  color: #f9d39b;
}
.u-success-disabled {
  color: #a9e08f;
}
.u-error-disabled {
  color: #f7b2b2;
}
.u-info-disabled {
  color: #c4c6c9;
}
.u-primary {
  color: #3c9cff;
}
.u-warning {
  color: #f9ae3d;
}
.u-success {
  color: #5ac725;
}
.u-error {
  color: #f56c6c;
}
.u-info {
  color: #909399;
}
.u-primary-bg {
  background-color: #3c9cff;
}
.u-warning-bg {
  background-color: #f9ae3d;
}
.u-success-bg {
  background-color: #5ac725;
}
.u-error-bg {
  background-color: #f56c6c;
}
.u-info-bg {
  background-color: #909399;
}
.u-main-color {
  color: #303133;
}
.u-content-color {
  color: #606266;
}
.u-tips-color {
  color: #909193;
}
.u-light-color {
  color: #c0c4cc;
}
.u-safe-area-inset-top {
  padding-top: 0;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
.u-safe-area-inset-right {
  padding-right: 0;
  padding-right: constant(safe-area-inset-right);
  padding-right: env(safe-area-inset-right);
}
.u-safe-area-inset-bottom {
  padding-bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.u-safe-area-inset-left {
  padding-left: 0;
  padding-left: constant(safe-area-inset-left);
  padding-left: env(safe-area-inset-left);
}
uni-toast {
  z-index: 10090;
}
uni-toast .uni-toast {
  z-index: 10090;
}
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
/*每个页面公共css */</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/text.css">uni-text[selectable] {
  cursor: auto;
  -webkit-user-select: text;
          user-select: text;
}

uni-text {
  white-space: pre-line;
}
</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/view.css">uni-view {
  display: block;
}
uni-view[hidden] {
  display: none;
}
</style><style type="text/css" data-vite-dev-id="D:/Uni_app_Projects/address_book/wechat3/node_modules/uview-plus/components/u-col/u-col.vue?vue&amp;type=style&amp;index=0&amp;scoped=3677f292&amp;lang.scss">/**
 * 这里是uni-app内置的常用样式变量
 *
 * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量
 * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App
 *
 */
/**
 * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能
 *
 * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件
 */
/* 颜色变量 */
/* 行为相关颜色 */
/* 文字基本颜色 */
/* 背景颜色 */
/* 边框颜色 */
/* 尺寸变量 */
/* 文字尺寸 */
/* 图片尺寸 */
/* Border Radius */
/* 水平间距 */
/* 垂直间距 */
/* 透明度 */
/* 文章场景相关 */
.u-empty[data-v-3677f292],
.u-empty__wrap[data-v-3677f292],
.u-tabs[data-v-3677f292],
.u-tabs__wrapper[data-v-3677f292],
.u-tabs__wrapper__scroll-view-wrapper[data-v-3677f292],
.u-tabs__wrapper__scroll-view[data-v-3677f292],
.u-tabs__wrapper__nav[data-v-3677f292],
.u-tabs__wrapper__nav__line[data-v-3677f292] {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
}
.u-col[data-v-3677f292] {
  padding: 0;
  box-sizing: border-box;
}
.u-col-0[data-v-3677f292] {
  width: 0;
}
.u-col-1[data-v-3677f292] {
  width: 8.3333333333%;
}
.u-col-2[data-v-3677f292] {
  width: 16.6666666667%;
}
.u-col-3[data-v-3677f292] {
  width: 25%;
}
.u-col-4[data-v-3677f292] {
  width: 33.3333333333%;
}
.u-col-5[data-v-3677f292] {
  width: 41.6666666667%;
}
.u-col-6[data-v-3677f292] {
  width: 50%;
}
.u-col-7[data-v-3677f292] {
  width: 58.3333333333%;
}
.u-col-8[data-v-3677f292] {
  width: 66.6666666667%;
}
.u-col-9[data-v-3677f292] {
  width: 75%;
}
.u-col-10[data-v-3677f292] {
  width: 83.3333333333%;
}
.u-col-11[data-v-3677f292] {
  width: 91.6666666667%;
}
.u-col-12[data-v-3677f292] {
  width: 100%;
}</style><style type="text/css" data-vite-dev-id="D:/Uniapp/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/style/image.css">uni-image {
  width: 320px;
  height: 240px;
  display: inline-block;
  overflow: hidden;
  position: relative;
}

uni-image[hidden] {
  display: none;
}

uni-image > div {
  width: 100%;
  height: 100%;
  background-repeat:no-repeat;
}

uni-image > img {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
          user-select: none;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

uni-image > .uni-image-will-change {
  will-change: transform;
}
</style><style type="text/css" data-vite-dev-id="D:/Uni_app_Projects/address_book/wechat3/node_modules/uview-plus/components/u-icon/u-icon.vue?vue&amp;type=style&amp;index=0&amp;scoped=1c933a9a&amp;lang.scss">/**
 * 这里是uni-app内置的常用样式变量
 *
 * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量
 * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App
 *
 */
/**
 * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能
 *
 * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件
 */
/* 颜色变量 */
/* 行为相关颜色 */
/* 文字基本颜色 */
/* 背景颜色 */
/* 边框颜色 */
/* 尺寸变量 */
/* 文字尺寸 */
/* 图片尺寸 */
/* Border Radius */
/* 水平间距 */
/* 垂直间距 */
/* 透明度 */
/* 文章场景相关 */
.u-empty[data-v-1c933a9a],
.u-empty__wrap[data-v-1c933a9a],
.u-tabs[data-v-1c933a9a],
.u-tabs__wrapper[data-v-1c933a9a],
.u-tabs__wrapper__scroll-view-wrapper[data-v-1c933a9a],
.u-tabs__wrapper__scroll-view[data-v-1c933a9a],
.u-tabs__wrapper__nav[data-v-1c933a9a],
.u-tabs__wrapper__nav__line[data-v-1c933a9a] {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
}
@font-face {
  font-family: "uicon-iconfont";
  src: url("https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf") format("truetype");
}
.u-icon[data-v-1c933a9a] {
  display: flex;
  align-items: center;
}
.u-icon--left[data-v-1c933a9a] {
  flex-direction: row-reverse;
  align-items: center;
}
.u-icon--right[data-v-1c933a9a] {
  flex-direction: row;
  align-items: center;
}
.u-icon--top[data-v-1c933a9a] {
  flex-direction: column-reverse;
  justify-content: center;
}
.u-icon--bottom[data-v-1c933a9a] {
  flex-direction: column;
  justify-content: center;
}
.u-icon__icon[data-v-1c933a9a] {
  font-family: uicon-iconfont;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.u-icon__icon--primary[data-v-1c933a9a] {
  color: #3c9cff;
}
.u-icon__icon--success[data-v-1c933a9a] {
  color: #5ac725;
}
.u-icon__icon--error[data-v-1c933a9a] {
  color: #f56c6c;
}
.u-icon__icon--warning[data-v-1c933a9a] {
  color: #f9ae3d;
}
.u-icon__icon--info[data-v-1c933a9a] {
  color: #909399;
}
.u-icon__img[data-v-1c933a9a] {
  height: auto;
  will-change: transform;
}
.u-icon__label[data-v-1c933a9a] {
  line-height: 1;
}</style><style type="text/css" data-vite-dev-id="D:/Uni_app_Projects/address_book/wechat3/node_modules/uview-plus/components/u-row/u-row.vue?vue&amp;type=style&amp;index=0&amp;scoped=f8e42af4&amp;lang.scss">/**
 * 这里是uni-app内置的常用样式变量
 *
 * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量
 * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App
 *
 */
/**
 * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能
 *
 * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件
 */
/* 颜色变量 */
/* 行为相关颜色 */
/* 文字基本颜色 */
/* 背景颜色 */
/* 边框颜色 */
/* 尺寸变量 */
/* 文字尺寸 */
/* 图片尺寸 */
/* Border Radius */
/* 水平间距 */
/* 垂直间距 */
/* 透明度 */
/* 文章场景相关 */
.u-empty[data-v-f8e42af4],
.u-empty__wrap[data-v-f8e42af4],
.u-tabs[data-v-f8e42af4],
.u-tabs__wrapper[data-v-f8e42af4],
.u-tabs__wrapper__scroll-view-wrapper[data-v-f8e42af4],
.u-tabs__wrapper__scroll-view[data-v-f8e42af4],
.u-tabs__wrapper__nav[data-v-f8e42af4],
.u-tabs__wrapper__nav__line[data-v-f8e42af4] {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
}
.u-row[data-v-f8e42af4] {
  display: flex;
  flex-direction: row;
}</style><style type="text/css" data-vite-dev-id="D:/Uni_app_Projects/address_book/wechat3/pages/personal/personal.vue?vue&amp;type=style&amp;index=0&amp;scoped=6ae23533&amp;lang.scss">/**
 * 这里是uni-app内置的常用样式变量
 *
 * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量
 * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App
 *
 */
/**
 * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能
 *
 * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件
 */
/* 颜色变量 */
/* 行为相关颜色 */
/* 文字基本颜色 */
/* 背景颜色 */
/* 边框颜色 */
/* 尺寸变量 */
/* 文字尺寸 */
/* 图片尺寸 */
/* Border Radius */
/* 水平间距 */
/* 垂直间距 */
/* 透明度 */
/* 文章场景相关 */
#alink[data-v-6ae23533] {
  color: #65779e;
  font-size: 0.9375rem;
  text-decoration: none;
}</style></head>
  <body data-v-6ae23533="">
    <div id="app" data-v-app=""><uni-app class=""><uni-page data-page="pages/personal/personal" type=""><!----><uni-page-wrapper><uni-page-body data-v-6ae23533=""><uni-view data-v-6ae23533="" class="content" style="margin-left: 1.875rem; margin-right: 1.875rem;"><!-- 		<up-navbar  left-icon="close" leftIconSize="18px"
					:border-bottom="false"  
					@leftClick="backmy" 
					z-index="1001" placeholder fixed>
		</up-navbar> --><!-- X下面的boRDER --><!-- <up-gap  height="1" bg-color="#f7f7f7" margin-top="0" margin-bottom="0"></up-gap> --><uni-view data-v-6ae23533="" class="big-title" style="display: flex; justify-content: center; align-items: center; margin: 3.75rem 0px;"><uni-text data-v-6ae23533="" style="font-size: 1.5625rem; font-weight: bold;"><span>个人信息</span></uni-text></uni-view><uni-view data-v-6ae23533="" class="item-information" style="width: 100%; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" style="color: rgb(127, 127, 127); margin-bottom: 0.3125rem; font-size: 0.9375rem;">证件信息</uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">姓名</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(127, 127, 127);">**飞</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">性别</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(25, 25, 25);">男</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-1c933a9a="" data-v-6ae23533="" class="u-icon u-icon--right"><uni-text data-v-1c933a9a="" class="u-icon__icon uicon-arrow-right u-iconfont" hover-class="" style="font-size: 15px; line-height: 15px; font-weight: normal; top: 0px; color: rgb(178, 178, 178);"><span></span></uni-text><!-- 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 --><!--v-if--></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">国籍</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(127, 127, 127);">中国</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">证件类型</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(127, 127, 127);">居民身份证</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">证件号</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(127, 127, 127);">4****************2</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">证件有效期</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(25, 25, 25);font-size: 1.0175rem;">2019-02-01 至 2029-02-01</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-1c933a9a="" data-v-6ae23533="" class="u-icon u-icon--right"><uni-text data-v-1c933a9a="" class="u-icon__icon uicon-arrow-right u-iconfont" hover-class="" style="font-size: 15px; line-height: 15px; font-weight: normal; top: 0px; color: rgb(178, 178, 178);"><span></span></uni-text><!-- 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 --><!--v-if--></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: 1.71875rem; width: 100%; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" style="color: rgb(127, 127, 127); margin-bottom: 0.3125rem; font-size: 0.9375rem;">其他信息</uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">职业类型</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(25, 25, 25);">商业及服务业工作人员</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-1c933a9a="" data-v-6ae23533="" class="u-icon u-icon--right"><uni-text data-v-1c933a9a="" class="u-icon__icon uicon-arrow-right u-iconfont" hover-class="" style="font-size: 15px; line-height: 15px; font-weight: normal; top: 0px; color: rgb(178, 178, 178);"><span></span></uni-text><!-- 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 --><!--v-if--></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">地址</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(25, 25, 25);">中国大陆 广州 深圳 八卦岭宿舍区</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-1c933a9a="" data-v-6ae23533="" class="u-icon u-icon--right"><uni-text data-v-1c933a9a="" class="u-icon__icon uicon-arrow-right u-iconfont" hover-class="" style="font-size: 15px; line-height: 15px; font-weight: normal; top: 0px; color: rgb(178, 178, 178);"><span></span></uni-text><!-- 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 --><!--v-if--></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="item-information" style="margin-top: auto; margin-bottom: auto; border-bottom: 0.03125rem solid rgb(229, 229, 229);"><uni-view data-v-6ae23533="" class="item" style="margin-top: 0.9375rem; margin-bottom: 0.9375rem;"><uni-view data-v-f8e42af4="" data-v-6ae23533="" class="u-row" style="align-items: center; justify-content: flex-start;"><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-4" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 33.3333%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple-light" style="font-size: 1.1875rem;">手机号</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-6ae23533=""><!----></uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-6" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 50%; margin-left: 0%;"><uni-view data-v-6ae23533="" class="demo-layout bg-purple" style="color: rgb(25, 25, 25);">147******91</uni-view></uni-view><uni-view data-v-3677f292="" data-v-6ae23533="" class="u-col u-col-1" style="padding-left: 0px; padding-right: 0px; align-items: stretch; justify-content: flex-start; text-align: left; flex: 0 0 8.33333%; margin-left: 0%;"><uni-view data-v-1c933a9a="" data-v-6ae23533="" class="u-icon u-icon--right"><uni-text data-v-1c933a9a="" class="u-icon__icon uicon-arrow-right u-iconfont" hover-class="" style="font-size: 15px; line-height: 15px; font-weight: normal; top: 0px; color: rgb(178, 178, 178);"><span></span></uni-text><!-- 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 --><!--v-if--></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view data-v-6ae23533="" class="UpdateName" style="display: flex; justify-content: center; align-items: center; margin-top: 3.375rem; margin-bottom: 4.6875rem; padding-bottom: 1.875rem;"><!-- <text style="color: #65779e; font-size: 30rpx;"  >更新实名</text> --><a data-v-6ae23533="" id="alink" href="https://pay.wechatpay.cn/realname/personcenter?nocestr2=">更新实名</a></uni-view></uni-view></uni-page-body></uni-page-wrapper></uni-page><uni-tabbar class="uni-tabbar-bottom" style="display: none;"><div class="uni-tabbar" style="background-color: rgb(255, 255, 255); backdrop-filter: none;"><div class="uni-tabbar-border" style="background-color: rgba(0, 0, 0, 0.33);"></div><div class="uni-tabbar__item"><div class="uni-tabbar__bd" style="height: 50px;"><div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 24px; height: 24px;"><img src="/static/image/tabbar/wechat.png"></div><div class="uni-tabbar__label" style="color: rgb(25, 190, 107); font-size: 11px; line-height: normal; margin-top: 3px;">微信</div><!----></div></div><div class="uni-tabbar__item"><div class="uni-tabbar__bd" style="height: 50px;"><div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 24px; height: 24px;"><img src="/static/image/tabbar/contact.png"></div><div class="uni-tabbar__label" style="color: rgb(0, 0, 0); font-size: 11px; line-height: normal; margin-top: 3px;">通讯录</div><!----></div></div><div class="uni-tabbar__item"><div class="uni-tabbar__bd" style="height: 50px;"><div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 24px; height: 24px;"><img src="/static/image/tabbar/find.png"></div><div class="uni-tabbar__label" style="color: rgb(0, 0, 0); font-size: 11px; line-height: normal; margin-top: 3px;">发现</div><!----></div></div><div class="uni-tabbar__item"><div class="uni-tabbar__bd" style="height: 50px;"><div class="uni-tabbar__icon uni-tabbar__icon__diff" style="width: 24px; height: 24px;"><img src="/static/image/tabbar/my.png"></div><div class="uni-tabbar__label" style="color: rgb(0, 0, 0); font-size: 11px; line-height: normal; margin-top: 3px;">我</div><!----></div></div></div><div class="uni-placeholder" style="height: 50px;"></div></uni-tabbar></uni-app></div>
    <script type="module" src="/main.js?t=1732026705077"></script>
  

</body></html>`;
 $done({body:a});