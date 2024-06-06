export default {
  data() {},
  template: `
    <div
    id="pcoded"
    class="pcoded iscollapsed"
    nav-type="st2"
    theme-layout="vertical"
    vertical-placement="left"
    vertical-layout="wide"
    pcoded-device-type="desktop"
    vertical-nav-type="offcanvas"
    vertical-effect="shrink"
    vnavigation-view="view1"
    fream-type="theme1"
    layout-type="light"
>
    <div class="pcoded-overlay-box"></div>
    <div class="pcoded-container navbar-wrapper">
    <slot></slot>
    </div>
</div>
    `,
};
