#import <UIKit/UIKit.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <RNChangeIconSpec/RNChangeIconSpec.h>
@interface ChangeIcon : NSObject <NativeChangeIconSpec>
#else
#import <React/RCTBridgeModule.h>
@interface ChangeIcon : NSObject <RCTBridgeModule>
#endif

@end
