#import <UIKit/UIKit.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <RNChangeIconSpec/RNChangeIconSpec.h>
#endif
#import <React/RCTBridgeModule.h>
@interface ChangeIcon : NSObject <RCTBridgeModule, UIApplicationDelegate>

@end
