//
//  LocalOCPage.m
//  JustForTest
//
//  Created by 李龙飞 on 2019/3/25.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "LocalOCPage.h"
#import "AppDelegate.h"

@interface LocalOCPage ()

@property (nonatomic,strong) UILabel *label;
@property (nonatomic,strong) UIButton *btn;

@end

@implementation LocalOCPage

-(UILabel *)label{
		if (_label == nil) {
				_label = [[UILabel alloc] initWithFrame:CGRectMake(100, 200, 200, 50)];
				_label.backgroundColor = [UIColor greenColor];
				_label.textColor = [UIColor blackColor];
				_label.font = [UIFont systemFontOfSize:20];
				_label.text = @"这是原生OC页面";
		}
		return  _label;
}

-(UIButton *)btn{
		if (_btn == nil) {
				_btn = [[UIButton alloc] initWithFrame:CGRectMake(100, 400, 200, 50)];
				_btn.backgroundColor = [UIColor redColor];
				[_btn setTitle:@"返回RN页面" forState:UIControlStateNormal];
				[_btn setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
				[_btn addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
		}
		return  _btn;
}

// 点击事件
-(void) btnClick{
		AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
		[app.nav popViewControllerAnimated:TRUE];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
		self.navigationItem.title = @"我是第一个页面";
		self.view.backgroundColor = [UIColor grayColor];
		[self.view addSubview:self.label];
		[self.view addSubview:self.btn];
}

@end

