/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "LocalOCPage.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import <React/RCTLog.h>

@implementation AppDelegate

- (void)doPushNotification:(NSNotification *)notification{
    RCTLogInfo(@"React 成功收到===>通知");
    LocalOCPage *ocPage = [[LocalOCPage alloc] init];
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [app.nav pushViewController:ocPage animated:YES];
    
    //注意不能在这里移除通知否则pus进去后有pop失效
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"JustForTest" initialProperties:nil];
    
    rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:0.0f alpha:0.5f];
    
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    
    // 添加本地监听
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(doPushNotification:) name:@"RNOpenOneVC" object:nil];
    
//    // without nav收到
//    UIViewController *rootViewController = [UIViewController new];
//    rootViewController.view = rootView;
//    self.window.rootViewController = rootViewController;
//    [self.window makeKeyAndVisible];
//    return YES;
    
    UIViewController *rootViewController = [UIViewController new];
    rootViewController.view = rootView;
    _nav = [[UINavigationController alloc] initWithRootViewController:rootViewController];
    _nav.navigationBar.hidden = TRUE;
    
    self.window.rootViewController = _nav;
    [self.window makeKeyAndVisible];
    return YES;

}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
#if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
