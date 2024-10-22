// USER PROFILE
export const userProfileMenu =
[
    { name: 'Dashboard', icon: 'mdi-home', route: 'dashboard', routeGroup: 'Home', component: 'ProfileUser/Dashboard', isRoute: true },
    { name: 'C profile', icon: 'mdi-office-building', route: '/company', routeGroup: 'Company', component: '', subMenu:
    [
        { name: 'Main data', route: 'profile.company.base.index', routeGroup: 'Company-BasicData', component: 'ProfileUser/Company/Base', isRoute: true, prefix: '/company/user' },
        { name: 'Credit limit', route: 'profile.company.limit.index', routeGroup: 'Company-Credit', component: 'ProfileUser/Company/DataControllerL', isRoute: true, prefix: '/company/credit' },
        { name: 'Documents', route: 'profile.company.base_document.index', routeGroup: 'Company-Documents', component: 'ProfileUser/Company/Documents', isRoute: true, prefix: '/company/document' },
        { name: 'EDM', route: 'profile.company.eds.index', routeGroup: 'Company-EDS', component: 'ProfileUser/Company/EDS', isRoute: true },
    ]},
    { name: 'Counterparties', icon: 'mdi-account-group', route: '/counterparties', routeGroup: 'Counterparties', component: '', subMenu:
    [
        { name: 'My counterparties', route: 'profile.company.my_counterparties.index', routeGroup: 'Counterparties-MyCounterparties', component: 'ProfileUser/Company/MyCounterparties', isRoute: true,  prefix: '/counterparties' },
        { name: 'Invitations', route: '/counterparties/Invitations', routeGroup: 'Counterparties-Invitations', component: '', },
        { name: 'Requests', route: '/counterparties/requests', routeGroup: 'Counterparties-Requests', component: '', },
        { name: 'Blocked', route: '/counterparties/blocked', routeGroup: 'Counterparties-Blocked', component: '', },
    ]},
    { name: 'Products', icon: 'mdi-disc-player', route: '/products', routeGroup: 'Products', component: '', },
    { name: 'Deals', icon: 'mdi-handshake', route: '/deals', routeGroup: 'Deals', component: '', subMenu:
    [
        { name: 'Sales', route: '/deals/sales', routeGroup: 'Deals-Sales', component: '', },
        { name: 'Procurement', route: '/deals/procurement', routeGroup: 'Deals-Procurement', component: '', },
    ]},
    { name: 'Factoring', icon: 'mdi-briefcase', route: '/factoring', routeGroup: 'Factoring', component: '', },
    { name: 'EDM', icon: 'mdi-draw-pen', route: '/edm', routeGroup: 'edm', component: '', },
    { name: 'Delivery', icon: 'mdi-truck-delivery', route: '/delivery', routeGroup: 'Delivery', component: '', },
    { name: 'Advertising', icon: 'mdi-advertisements', route: '/advertising', routeGroup: 'Advertising', component: '', },
    { name: 'Favourites', icon: 'mdi-heart', route: '/favourites', routeGroup: 'Favourites', component: '', subMenu:
    [
        { name: 'Products', route: '/favourites/products', routeGroup: 'Favourites-Products', component: '', },
        { name: 'Procurement', route: '/favourites/procurement', routeGroup: 'Favourites-Procurement', component: '', },
        { name: 'Counterparties', route: '/favourites/documentation', routeGroup: 'Favourites-Counterparties', component: '', },
    ]},
];

// USER PROFILE SETTINGS
export const userProfileSettingsMenu =
[
    { name: 'Messages', icon: 'mdi-message-text-outline', route: '/messages', routeGroup: 'Messages', component: '', },
    { name: 'My Companies', icon: 'mdi-account-multiple-outline', route: '/companies', routeGroup: 'Companies', component: '', },
    { name: 'Help', icon: 'mdi-help-circle-outline', route: '/help', routeGroup: 'Help', component: '', subMenu:
    [
        { name: 'Documentation', route: '/help/documentation', routeGroup: 'Help-Documentation', component: '', },
        { name: 'Chat', route: '/help/chat', routeGroup: 'Help-Chat', component: '', },
    ]},
    { name: 'Settings', icon: 'mdi-cog-outline', route: '/settings', routeGroup: 'Settings', component: '', subMenu:
    [
        { name: 'Account', route: 'profile.show', routeGroup: 'User-Profile', component: 'Profile/Show', isRoute: true },
        { name: 'API Tokens', route: 'api-tokens.index', routeGroup: 'User-APITokens', component: 'API/Index', isRoute: true },
        { name: 'Users', route: 'profile.members.index', routeGroup: 'User-Members', component: 'ProfileUser/Members', isRoute: true },
    ]},
];
