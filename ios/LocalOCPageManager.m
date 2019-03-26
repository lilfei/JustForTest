//
//  LocalOCPageManager.m
//  JustForTest
//
//  Created by 李龙飞 on 2019/3/26.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "LocalOCPageManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation LocalOCPageManager

// To export a module named LocalOCPageManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeLocalOCPageManager instead
// RCT_EXPORT_MODULE(AwesomeLocalOCPageManager);

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

// method 1
RCT_EXPORT_METHOD(addEvent1:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch){
    NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
    RCTLogInfo(@"create an event1 %@ at %@ at %@", name, location, date);
}

// method 2
RCT_EXPORT_METHOD(addEvent2:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString){
    NSDate *date = [RCTConvert NSDate:ISO8601DateString];
    RCTLogInfo(@"create an event2 %@ at %@ at %@", name, location, date);
}

// method 3
RCT_EXPORT_METHOD(addEvent3:(NSString *)name location:(NSString *)location date:(NSDate *)date){
    // Date is ready to use!
    RCTLogInfo(@"create an event3 %@ at %@ at %@", name, location, date);
}

// method dictionary
RCT_EXPORT_METHOD(addEvent4:(NSString *)name details:(NSDictionary *)details){
    NSString *location = [RCTConvert NSString:details[@"location"]];
    NSDate *time = [RCTConvert NSDate:details[@"time"]];
    RCTLogInfo(@"create an event4 %@ at %@ at %@", name, location, time);
}

// callback
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback){
    NSArray *events = [NSArray arrayWithObjects:@"3",@"4",@5,@"6", nil];
    callback(@[events]);
}



@end
