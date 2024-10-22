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
