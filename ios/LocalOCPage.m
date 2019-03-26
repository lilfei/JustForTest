//
//  LocalOCPage.m
//  JustForTest
//
//  Created by 李龙飞 on 2019/3/25.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "LocalOCPage.h"

@interface LocalOCPage ()

@end

@implementation LocalOCPage

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
		UIView *view1 = [[UIView alloc] init];
		view1.frame = CGRectMake(200, 200, 200, 200);
		view1.backgroundColor = [UIColor redColor];
		
		[self.view addSubview:view1];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
