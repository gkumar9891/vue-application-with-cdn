import ProductTable from './ProductTable.js';
import ProgressCard from './ProgressCard.js';
import Summary from './Summary.js'
import WhatNew from './WhatNew.js';
import LatestActivity from './LatestActivity.js';
import commonMethods from '../mixins/commonMethods.js';

export default {
    components: {
        Summary,
        ProgressCard,
        WhatNew,
        ProductTable,
        LatestActivity,
    },
    mixins: [commonMethods],
    methods: {
        getClassForSummary(title) {
            let obj = {
                Impressions: 'blue',
                Goal: 'green',
                Impact: 'yellow'
            }
            return obj[title];
        }
    },
    template: `
    <div class="pcoded-main-container" style="margin-top: 73px;">
    <div class="pcoded-wrapper">
        <nav class="pcoded-navbar" style="display:none!Important;" navbar-theme="theme1" active-item-theme="theme1" sub-item-theme="theme2" active-item-style="style0" pcoded-navbar-position="fixed">
            <div class="nav-list">
                <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: 100%; height: 100%;">
                    <div class="pcoded-inner-navbar main-menu" style="overflow: hidden; width: 100%; height: 100%;">
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Navigation</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="pcoded-hasmenu active" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon"><i class="feather icon-home"></i></span>
                                    <span class="pcoded-mtext">Dashboard</span>
                                </a>
                                <ul class="pcoded-submenu" style="display: none;">
                                    <li class="active">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Default</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">CRM</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Analytics</span>
                                            <span class="pcoded-badge label label-info">NEW</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon"><i class="feather icon-sidebar"></i></span>
                                    <span class="pcoded-mtext">Page layouts</span>
                                    <span class="pcoded-badge label label-warning">NEW</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Vertical</span>
                                        </a>
                                        <ul class="pcoded-submenu">
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Static Layout</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Header Fixed</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Compact</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Sidebar Fixed</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Horizontal</span>
                                        </a>
                                        <ul class="pcoded-submenu">
                                            <li class="">
                                                <a href="#" target="_blank" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Static Layout</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" target="_blank" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Fixed layout</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" target="_blank" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Static With Icon</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" target="_blank" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Fixed With Icon</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Bottom Menu</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-menu"></i>
                                    </span>
                                    <span class="pcoded-mtext">Navigation</span>
                                </a>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-layers"></i>
                                    </span>
                                    <span class="pcoded-mtext">Widget</span>
                                    <span class="pcoded-badge label label-danger">100+</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Statistic</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Data</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Chart Widget</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">UI Element</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-box"></i>
                                    </span>
                                    <span class="pcoded-mtext">Basic</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Alert</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Breadcrumbs</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Button</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Box-Shadow</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Accordion</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Generic Class</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Tabs</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Color</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Label Badge</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Progress Bar</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">List</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Tooltip And Popover</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Typography</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Other</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-gitlab"></i>
                                    </span>
                                    <span class="pcoded-mtext">Advance</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Draggable</span>
                                        </a>
                                    </li>

                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Modal</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Notifications</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Rating</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Range Slider</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Slider</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Syntax Highlighter</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Tour</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Tree View</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Nestable</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Toolbar</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-package"></i>
                                    </span>
                                    <span class="pcoded-mtext">Extra</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Session Timeout</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Session Idle Timeout</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Offline</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-aperture rotate-refresh"></i>
                                    </span>
                                    <span class="pcoded-mtext">Animations</span>
                                </a>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-command"></i>
                                    </span>
                                    <span class="pcoded-mtext">Icons</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Font Awesome</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Themify</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Simple Line Icon</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Forms</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-clipboard"></i>
                                    </span>
                                    <span class="pcoded-mtext">Form</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Components</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Add-On</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Advance</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Validation</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-edit-1"></i>
                                    </span>
                                    <span class="pcoded-mtext">Form Picker</span>
                                    <span class="pcoded-badge label label-warning">NEW</span>
                                </a>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-feather"></i>
                                    </span>
                                    <span class="pcoded-mtext">Form Select</span>
                                </a>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-shield"></i>
                                    </span>
                                    <span class="pcoded-mtext">Form Masking</span>
                                </a>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-tv"></i>
                                    </span>
                                    <span class="pcoded-mtext">Form Wizard</span>
                                </a>
                            </li>
                        </ul>
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Tables</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-credit-card"></i>
                                    </span>
                                    <span class="pcoded-mtext">Bootstrap Table</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Basic Table</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Sizing Table</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Border Table</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Styling Table</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-inbox"></i>
                                    </span>
                                    <span class="pcoded-mtext">Data Table</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Basic Initialization</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Advance Initialization</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Styling</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">API</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Ajax</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Server Side</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Plug-In</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Data Sources</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-server"></i>
                                    </span>
                                    <span class="pcoded-mtext">DT Extensions</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">AutoFill</span>
                                        </a>
                                    </li>
                                    <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Button</span>
                                        </a>
                                        <ul class="pcoded-submenu">
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Basic Button</span>
                                                </a>
                                            </li>
                                            <li class="">
                                                <a href="#" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Data Export</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Col Reorder</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Fixed Columns</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Fixed Header</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Key Table</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Responsive</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Row Reorder</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Scroller</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Select Table</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-hash"></i>
                                    </span>
                                    <span class="pcoded-mtext">FooTable</span>
                                </a>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-airplay"></i>
                                    </span>
                                    <span class="pcoded-mtext">Handson Table</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Appearance</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Data Operation</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Rows Columns</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Columns Only</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Cell Features</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Cell Types</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Integrations</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Rows Only</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Utilities</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-edit"></i>
                                    </span>
                                    <span class="pcoded-mtext">Editable Table</span>
                                </a>
                            </li>
                        </ul>
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Chart And Maps</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-pie-chart"></i>
                                    </span>
                                    <span class="pcoded-mtext">Charts</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Google Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">ChartJs</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">List Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Float Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Knob chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Morris Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Nvd3 Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Peity Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Radial Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Rickshaw Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Sparkline Chart</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">C3 Chart</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-map"></i>
                                    </span>
                                    <span class="pcoded-mtext">Maps</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Google Maps</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Vector Maps</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Google Map Search API</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Location</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Pages</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-unlock"></i>
                                    </span>
                                    <span class="pcoded-mtext">Authentication</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Login</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Registration</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" target="_blank" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Forgot Password</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" target="_blank" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Lock Screen</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-sliders"></i>
                                    </span>
                                    <span class="pcoded-mtext">Maintenance</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Error</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Comming Soon</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Offline UI</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-mail"></i>
                                    </span>
                                    <span class="pcoded-mtext">Email</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Compose Email</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Inbox</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Read Mail</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">App</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-bookmark"></i>
                                    </span>
                                    <span class="pcoded-mtext">To-Do</span>
                                </a>
                            </li>
                        </ul>
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Extension</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-file-plus"></i>
                                    </span>
                                    <span class="pcoded-mtext">Editor</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">CK-Editor</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">WYSIWYG Editor</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-calendar"></i>
                                    </span>
                                    <span class="pcoded-mtext">Event Calendar</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Full Calendar</span>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">CLNDER</span>
                                            <span class="pcoded-badge label label-info">NEW</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-scissors"></i>
                                        <b>IC</b>
                                    </span>
                                    <span class="pcoded-mtext">Image Cropper</span>
                                </a>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-upload-cloud"></i>
                                    </span>
                                    <span class="pcoded-mtext">File Upload</span>
                                </a>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-briefcase"></i>
                                    </span>
                                    <span class="pcoded-mtext">Change Loges</span>
                                    <span class="pcoded-badge label label-warning">1.0</span>
                                </a>
                            </li>
                        </ul>
                        <div class="pcoded-navigation-label" menu-title-theme="theme1">Other</div>
                        <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid" subitem-border="false">
                            <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-list"></i>
                                    </span>
                                    <span class="pcoded-mtext">Menu Levels</span>
                                </a>
                                <ul class="pcoded-submenu">
                                    <li class="">
                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Menu Level 2.1</span>
                                        </a>
                                    </li>
                                    <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Menu Level 2.2</span>
                                        </a>
                                        <ul class="pcoded-submenu">
                                            <li class="">
                                                <a href="javascript:void(0)" class="waves-effect waves-dark">
                                                    <span class="pcoded-mtext">Menu Level 3.1</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="">
                                        <a href="javascript:void(0)" class="waves-effect waves-dark">
                                            <span class="pcoded-mtext">Menu Level 2.3</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="">
                                <a href="javascript:void(0)" class="disabled waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-power"></i>
                                        <b>D</b>
                                    </span>
                                    <span class="pcoded-mtext">Disabled Menu</span>
                                </a>
                            </li>
                            <li class="">
                                <a href="#" class="waves-effect waves-dark">
                                    <span class="pcoded-micon">
                                        <i class="feather icon-watch"></i>
                                    </span>
                                    <span class="pcoded-mtext">Sample Page</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 124.873px;"></div>
                    <div class="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
                </div>
            </div>
        </nav>

        <div class="pcoded-content" style="margin-left:0px!important;">
            <div class="page-header card">
                <div class="row align-items-end">
                    <div class="col-lg-8">
                        <div class="page-header-title">
                            <i class="feather icon-home bg-c-blue"></i>
                            <div class="d-inline">
                                <h5>Dashboard</h5>
                                <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="page-header-breadcrumb">
                            <ul class="breadcrumb breadcrumb-title">
                                <li class="breadcrumb-item">
                                    <a href="#"><i class="feather icon-home"></i></a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Dashboard</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pcoded-inner-content">
                <div class="main-body">
                    <div class="page-wrapper">
                        <div class="page-body">
                            <div class="row">
                                <div class="col-md-12 col-xl-8">
                                    <div class="card sale-card">
                                        <div class="card-header">
                                            <h5>Deals Analyticssss</h5>
                                        </div>
                                        <div class="card-block">
                                            <div id="sales-analytics" class="chart-shadow" style="height: 380px; overflow: hidden; text-align: left;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-xl-4">
                                    <Summary>
                                        <template #value="{value, title}">
                                            <h3 :class="['f-w-700', 'text-c-' + getClassForSummary(title)]">{{ formatIndianNumber(value) }}</h3>
                                        </template>
                                        <template #icon="{title}">
                                            <i v-if="title == 'Impressions'" class="fas fa-eye bg-c-blue"></i>
                                            <i v-else-if="title == 'Goal'" class="fas fa-bullseye bg-c-green"></i>
                                            <i v-else-if="title == 'Impact'" class="fas fa-hand-paper bg-c-yellow"></i>
                                        </template>
                                    </Summary>
                                </div>

                                <div class="col-xl-12">
                                    <ProgressCard >
                                        <template #progress="{title}">
                                            <div v-if='title == "Published Project"' class="progress-bar bg-c-red" style="width: 35%;"></div>
                                            <div v-else-if='title == "Completed Task"' class="progress-bar bg-c-blue" style="width: 65%;"></div>
                                            <div v-else-if='title == "Successfull Task"' class="progress-bar bg-c-green" style="width: 85%;"></div>
                                            <div v-else-if='title == "Ongoing Project"' class="progress-bar bg-c-yellow" style="width: 65%;"></div>
                                        </template>
                                    </ProgressCard>
                                </div>

                                <div class="col-md-12 col-xl-4">
                                    <div class="card card-blue text-white">
                                        <div class="card-block p-b-0">
                                            <div class="row m-b-50">
                                                <div class="col">
                                                    <h6 class="m-b-5">Sales In July</h6>
                                                    <h5 class="m-b-0 f-w-700">$2665.00</h5>
                                                </div>
                                                <div class="col-auto text-center">
                                                    <p class="m-b-5">Direct Sale</p>
                                                    <h6 class="m-b-0">$1768</h6>
                                                </div>
                                                <div class="col-auto text-center">
                                                    <p class="m-b-5">Referal</p>
                                                    <h6 class="m-b-0">$897</h6>
                                                </div>
                                            </div>
                                            <div id="sec-ecommerce-chart-line" class="" style="height: 60px; padding: 0px; position: relative;">
                                                <canvas class="flot-base" width="367" height="60" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 60px;"></canvas>
                                                <div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                                                    <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;">
                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 8px; text-align: center;">0.0</div>
                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 71px; text-align: center;">2.5</div>
                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 133px; text-align: center;">5.0</div>
                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 196px; text-align: center;">7.5</div>
                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 259px; text-align: center;">
                                                            10.0
                                                        </div>
                                                        <div style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 321px; text-align: center;">
                                                            12.5
                                                        </div>
                                                    </div>
                                                    <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px;">
                                                        <div style="position: absolute; top: 52px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">0</div>
                                                        <div style="position: absolute; top: 37px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">10</div>
                                                        <div style="position: absolute; top: 23px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">20</div>
                                                        <div style="position: absolute; top: 8px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">30</div>
                                                    </div>
                                                </div>
                                                <canvas class="flot-overlay" width="367" height="60" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 60px;"></canvas>
                                            </div>
                                            <div id="sec-ecommerce-chart-bar" style="height: 195px; padding: 0px; position: relative;">
                                                <canvas class="flot-base" width="367" height="195" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 195px;"></canvas>
                                                <div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                                                    <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;">
                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 8px; text-align: center;">0.0</div>
                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 70px; text-align: center;">2.5</div>
                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 133px; text-align: center;">
                                                            5.0
                                                        </div>
                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 196px; text-align: center;">
                                                            7.5
                                                        </div>
                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 259px; text-align: center;">
                                                            10.0
                                                        </div>
                                                        <div style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 322px; text-align: center;">
                                                            12.5
                                                        </div>
                                                    </div>
                                                    <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px;">
                                                        <div style="position: absolute; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">0</div>
                                                        <div style="position: absolute; top: 163px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">5</div>
                                                        <div style="position: absolute; top: 130px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">10</div>
                                                        <div style="position: absolute; top: 98px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">15</div>
                                                        <div style="position: absolute; top: 65px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">20</div>
                                                        <div style="position: absolute; top: 33px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">25</div>
                                                        <div style="position: absolute; top: 0px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">30</div>
                                                    </div>
                                                </div>
                                                <canvas class="flot-overlay" width="367" height="195" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 195px;"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-12">
                                    <WhatNew>
                                        <template #icon={message}>
                                            <img v-if="message.toLowerCase().includes('posted')" src="./template_files/avatar-4.jpg" alt="user image" class="img-radius img-40 align-top m-r-15 update-icon">
                                            <i v-if="message.toLowerCase().includes('pending')" class="feather icon-briefcase bg-c-red update-icon"></i>
                                            <i v-if="message.toLowerCase().includes('received')" class="feather icon-check f-w-600 bg-c-green update-icon"></i>

                                        </template>

                                    </WhatNew>
                                </div>
                                <div class="col-xl-4 col-md-6">
                                    <LatestActivity></LatestActivity>
                                </div>

                                <div class="col-md-12">
                                    <ProductTable></ProductTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="styleSelector"></div>
    </div>
    </div>
    `
}