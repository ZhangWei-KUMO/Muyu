# Build output

```log
Command line invocation:
    /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -workspace /Users/zhangwei/Desktop/Muyu/ios/Muyu.xcworkspace -configuration Debug -scheme Muyu -destination id=EF039094-6FE8-4F67-8FAD-F3CCC394913A

User defaults from command line:
    IDEPackageSupportUseBuiltinSCM = YES

note: Using new build system
note: Building targets in parallel
note: Planning build
note: Analyzing workspace
note: Using build description from disk
note: Build preparation complete
PhaseScriptExecution Start\ Packager /Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Script-FD10A7F022414F080027D42C.sh (in target 'Muyu' from project 'Muyu')
    cd /Users/zhangwei/Desktop/Muyu/ios
    /bin/sh -c /Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Script-FD10A7F022414F080027D42C.sh

PhaseScriptExecution Bundle\ React\ Native\ code\ and\ images /Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Script-00DD1BFF1BD5951E006B06BC.sh (in target 'Muyu' from project 'Muyu')
    cd /Users/zhangwei/Desktop/Muyu/ios
    export ACTION\=build
    export AD_HOC_CODE_SIGNING_ALLOWED\=YES
    export ALTERNATE_GROUP\=staff
    export ALTERNATE_MODE\=u+w,go-w,a+rX
    export ALTERNATE_OWNER\=zhangwei
    export ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\=YES
    export ALWAYS_SEARCH_USER_PATHS\=NO
    export ALWAYS_USE_SEPARATE_HEADERMAPS\=NO
    export APPLE_INTERNAL_DEVELOPER_DIR\=/AppleInternal/Developer
    export APPLE_INTERNAL_DIR\=/AppleInternal
    export APPLE_INTERNAL_DOCUMENTATION_DIR\=/AppleInternal/Documentation
    export APPLE_INTERNAL_LIBRARY_DIR\=/AppleInternal/Library
    export APPLE_INTERNAL_TOOLS\=/AppleInternal/Developer/Tools
    export APPLICATION_EXTENSION_API_ONLY\=NO
    export APPLY_RULES_IN_COPY_FILES\=NO
    export APPLY_RULES_IN_COPY_HEADERS\=NO
    export ARCHS\=x86_64
    export ARCHS_STANDARD\=arm64\ x86_64\ i386
    export ARCHS_STANDARD_32_64_BIT\=arm64\ i386\ x86_64
    export ARCHS_STANDARD_32_BIT\=i386
    export ARCHS_STANDARD_64_BIT\=arm64\ x86_64
    export ARCHS_STANDARD_INCLUDING_64_BIT\=arm64\ x86_64\ i386
    export ARCHS_UNIVERSAL_IPHONE_OS\=arm64\ i386\ x86_64
    export ASSETCATALOG_COMPILER_APPICON_NAME\=AppIcon
    export ASSETCATALOG_FILTER_FOR_DEVICE_MODEL\=iPhone13,2
    export ASSETCATALOG_FILTER_FOR_DEVICE_OS_VERSION\=14.5
    export AVAILABLE_PLATFORMS\=appletvos\ appletvsimulator\ iphoneos\ iphonesimulator\ macosx\ watchos\ watchsimulator
    export AppIdentifierPrefix\=A2SZ953D3V.
    export BITCODE_GENERATION_MODE\=marker
    export BUILD_ACTIVE_RESOURCES_ONLY\=YES
    export BUILD_COMPONENTS\=headers\ build
    export BUILD_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products
    export BUILD_LIBRARY_FOR_DISTRIBUTION\=NO
    export BUILD_ROOT\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products
    export BUILD_STYLE\=
    export BUILD_VARIANTS\=normal
    export BUILT_PRODUCTS_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator
    export BUNDLE_CONTENTS_FOLDER_PATH_deep\=Contents/
    export BUNDLE_EXECUTABLE_FOLDER_NAME_deep\=MacOS
    export BUNDLE_FORMAT\=shallow
    export BUNDLE_FRAMEWORKS_FOLDER_PATH\=Frameworks
    export BUNDLE_PLUGINS_FOLDER_PATH\=PlugIns
    export BUNDLE_PRIVATE_HEADERS_FOLDER_PATH\=PrivateHeaders
    export BUNDLE_PUBLIC_HEADERS_FOLDER_PATH\=Headers
    export CACHE_ROOT\=/var/folders/t0/19tx723j79df2bpxmbx0bm8w0000gn/C/com.apple.DeveloperTools/12.5.1-12E507/Xcode
    export CCHROOT\=/var/folders/t0/19tx723j79df2bpxmbx0bm8w0000gn/C/com.apple.DeveloperTools/12.5.1-12E507/Xcode
    export CHMOD\=/bin/chmod
    export CHOWN\=/usr/sbin/chown
    export CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED\=YES
    export CLANG_CXX_LANGUAGE_STANDARD\=c++14
    export CLANG_CXX_LIBRARY\=libc++
    export CLANG_ENABLE_MODULES\=YES
    export CLANG_ENABLE_OBJC_ARC\=YES
    export CLANG_MODULES_BUILD_SESSION_FILE\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/Session.modulevalidation
    export CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING\=YES
    export CLANG_WARN_BOOL_CONVERSION\=YES
    export CLANG_WARN_COMMA\=YES
    export CLANG_WARN_CONSTANT_CONVERSION\=YES
    export CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS\=YES
    export CLANG_WARN_DIRECT_OBJC_ISA_USAGE\=YES_ERROR
    export CLANG_WARN_EMPTY_BODY\=YES
    export CLANG_WARN_ENUM_CONVERSION\=YES
    export CLANG_WARN_INFINITE_RECURSION\=YES
    export CLANG_WARN_INT_CONVERSION\=YES
    export CLANG_WARN_NON_LITERAL_NULL_CONVERSION\=YES
    export CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF\=YES
    export CLANG_WARN_OBJC_LITERAL_CONVERSION\=YES
    export CLANG_WARN_OBJC_ROOT_CLASS\=YES_ERROR
    export CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER\=NO
    export CLANG_WARN_RANGE_LOOP_ANALYSIS\=YES
    export CLANG_WARN_STRICT_PROTOTYPES\=YES
    export CLANG_WARN_SUSPICIOUS_MOVE\=YES
    export CLANG_WARN_UNREACHABLE_CODE\=YES
    export CLANG_WARN__DUPLICATE_METHOD_MATCH\=YES
    export CLASS_FILE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/JavaClasses
    export CLEAN_PRECOMPS\=YES
    export CLONE_HEADERS\=NO
    export CODESIGNING_FOLDER_PATH\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Muyu.app
    export CODE_SIGNING_ALLOWED\=YES
    export CODE_SIGNING_REQUIRED\=YES
    export CODE_SIGN_CONTEXT_CLASS\=XCiPhoneSimulatorCodeSignContext
    export CODE_SIGN_IDENTITY\=-
    export CODE_SIGN_INJECT_BASE_ENTITLEMENTS\=YES
    export COLOR_DIAGNOSTICS\=NO
    export COMBINE_HIDPI_IMAGES\=NO
    export COMPILER_INDEX_STORE_ENABLE\=Default
    export COMPOSITE_SDK_DIRS\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/CompositeSDKs
    export COMPRESS_PNG_FILES\=YES
    export CONFIGURATION\=Debug
    export CONFIGURATION_BUILD_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator
    export CONFIGURATION_TEMP_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator
    export CONTENTS_FOLDER_PATH\=Muyu.app
    export COPYING_PRESERVES_HFS_DATA\=NO
    export COPY_HEADERS_RUN_UNIFDEF\=NO
    export COPY_PHASE_STRIP\=NO
    export COPY_RESOURCES_FROM_STATIC_FRAMEWORKS\=YES
    export CORRESPONDING_DEVICE_PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform
    export CORRESPONDING_DEVICE_PLATFORM_NAME\=iphoneos
    export CORRESPONDING_DEVICE_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS14.5.sdk
    export CORRESPONDING_DEVICE_SDK_NAME\=iphoneos14.5
    export CP\=/bin/cp
    export CREATE_INFOPLIST_SECTION_IN_BINARY\=NO
    export CURRENT_ARCH\=undefined_arch
    export CURRENT_PROJECT_VERSION\=1
    export CURRENT_VARIANT\=normal
    export DEAD_CODE_STRIPPING\=YES
    export DEBUGGING_SYMBOLS\=YES
    export DEBUG_INFORMATION_FORMAT\=dwarf-with-dsym
    export DEFAULT_COMPILER\=com.apple.compilers.llvm.clang.1_0
    export DEFAULT_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export DEFAULT_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export DEFINES_MODULE\=NO
    export DEPLOYMENT_LOCATION\=NO
    export DEPLOYMENT_POSTPROCESSING\=NO
    export DEPLOYMENT_TARGET_CLANG_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_CLANG_FLAG_NAME\=mios-simulator-version-min
    export DEPLOYMENT_TARGET_CLANG_FLAG_PREFIX\=-mios-simulator-version-min\=
    export DEPLOYMENT_TARGET_LD_ENV_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_LD_FLAG_NAME\=ios_simulator_version_min
    export DEPLOYMENT_TARGET_SETTING_NAME\=IPHONEOS_DEPLOYMENT_TARGET
    export DEPLOYMENT_TARGET_SUGGESTED_VALUES\=9.0\ 9.2\ 10.0\ 10.2\ 11.0\ 11.2\ 11.4\ 12.1\ 12.3\ 13.0\ 13.2\ 13.4\ 13.6\ 14.1\ 14.3\ 14.5
    export DERIVED_FILES_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/DerivedSources
    export DERIVED_FILE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/DerivedSources
    export DERIVED_SOURCES_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/DerivedSources
    export DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export DEVELOPER_FRAMEWORKS_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_FRAMEWORKS_DIR_QUOTED\=/Applications/Xcode.app/Contents/Developer/Library/Frameworks
    export DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Library
    export DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs
    export DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Tools
    export DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export DEVELOPMENT_LANGUAGE\=en
    export DOCUMENTATION_FOLDER_PATH\=Muyu.app/en.lproj/Documentation
    export DONT_GENERATE_INFOPLIST_FILE\=NO
    export DO_HEADER_SCANNING_IN_JAM\=NO
    export DSTROOT\=/tmp/Muyu.dst
    export DT_TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export DWARF_DSYM_FILE_NAME\=Muyu.app.dSYM
    export DWARF_DSYM_FILE_SHOULD_ACCOMPANY_PRODUCT\=NO
    export DWARF_DSYM_FOLDER_PATH\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator
    export EFFECTIVE_PLATFORM_NAME\=-iphonesimulator
    export EMBEDDED_CONTENT_CONTAINS_SWIFT\=NO
    export EMBED_ASSET_PACKS_IN_PRODUCT_BUNDLE\=NO
    export ENABLE_BITCODE\=NO
    export ENABLE_DEFAULT_HEADER_SEARCH_PATHS\=YES
    export ENABLE_HARDENED_RUNTIME\=NO
    export ENABLE_HEADER_DEPENDENCIES\=YES
    export ENABLE_ON_DEMAND_RESOURCES\=YES
    export ENABLE_PREVIEWS\=NO
    export ENABLE_STRICT_OBJC_MSGSEND\=YES
    export ENABLE_TESTABILITY\=YES
    export ENABLE_TESTING_SEARCH_PATHS\=NO
    export ENTITLEMENTS_DESTINATION\=__entitlements
    export ENTITLEMENTS_REQUIRED\=YES
    export EXCLUDED_ARCHS\=arm64\ 
    export EXCLUDED_INSTALLSRC_SUBDIRECTORY_PATTERNS\=.DS_Store\ .svn\ .git\ .hg\ CVS
    export EXCLUDED_RECURSIVE_SEARCH_PATH_SUBDIRECTORIES\=\*.nib\ \*.lproj\ \*.framework\ \*.gch\ \*.xcode\*\ \*.xcassets\ \(\*\)\ .DS_Store\ CVS\ .svn\ .git\ .hg\ \*.pbproj\ \*.pbxproj
    export EXECUTABLES_FOLDER_PATH\=Muyu.app/Executables
    export EXECUTABLE_FOLDER_PATH\=Muyu.app
    export EXECUTABLE_NAME\=Muyu
    export EXECUTABLE_PATH\=Muyu.app/Muyu
    export EXPANDED_CODE_SIGN_IDENTITY\=-
    export EXPANDED_CODE_SIGN_IDENTITY_NAME\=-
    export FILE_LIST\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Objects/LinkFileList
    export FIXED_FILES_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/FixedFiles
    export FRAMEWORKS_FOLDER_PATH\=Muyu.app/Frameworks
    export FRAMEWORK_FLAG_PREFIX\=-framework
    export FRAMEWORK_SEARCH_PATHS\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator\ \ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/OpenSSL-Universal/Frameworks\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates/OpenSSL\"
    export FRAMEWORK_VERSION\=A
    export FULL_PRODUCT_NAME\=Muyu.app
    export GCC3_VERSION\=3.3
    export GCC_C_LANGUAGE_STANDARD\=gnu99
    export GCC_DYNAMIC_NO_PIC\=NO
    export GCC_INLINES_ARE_PRIVATE_EXTERN\=YES
    export GCC_NO_COMMON_BLOCKS\=YES
    export GCC_OBJC_LEGACY_DISPATCH\=YES
    export GCC_OPTIMIZATION_LEVEL\=0
    export GCC_PFE_FILE_C_DIALECTS\=c\ objective-c\ c++\ objective-c++
    export GCC_PREPROCESSOR_DEFINITIONS\=DEBUG\=1\ \ COCOAPODS\=1\ FB_SONARKIT_ENABLED\=1
    export GCC_SYMBOLS_PRIVATE_EXTERN\=NO
    export GCC_TREAT_WARNINGS_AS_ERRORS\=NO
    export GCC_VERSION\=com.apple.compilers.llvm.clang.1_0
    export GCC_VERSION_IDENTIFIER\=com_apple_compilers_llvm_clang_1_0
    export GCC_WARN_64_TO_32_BIT_CONVERSION\=YES
    export GCC_WARN_ABOUT_RETURN_TYPE\=YES_ERROR
    export GCC_WARN_UNDECLARED_SELECTOR\=YES
    export GCC_WARN_UNINITIALIZED_AUTOS\=YES_AGGRESSIVE
    export GCC_WARN_UNUSED_FUNCTION\=YES
    export GCC_WARN_UNUSED_VARIABLE\=YES
    export GENERATED_MODULEMAP_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/GeneratedModuleMaps-iphonesimulator
    export GENERATE_MASTER_OBJECT_FILE\=NO
    export GENERATE_PKGINFO_FILE\=YES
    export GENERATE_PROFILING_CODE\=NO
    export GENERATE_TEXT_BASED_STUBS\=NO
    export GID\=20
    export GROUP\=staff
    export HEADERMAP_INCLUDES_FLAT_ENTRIES_FOR_TARGET_BEING_BUILT\=YES
    export HEADERMAP_INCLUDES_FRAMEWORK_ENTRIES_FOR_ALL_PRODUCT_TYPES\=YES
    export HEADERMAP_INCLUDES_NONPUBLIC_NONPRIVATE_HEADERS\=YES
    export HEADERMAP_INCLUDES_PROJECT_HEADERS\=YES
    export HEADERMAP_USES_FRAMEWORK_PREFIX_ENTRIES\=YES
    export HEADERMAP_USES_VFS\=NO
    export HEADER_SEARCH_PATHS\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/include\ \ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/CocoaAsyncSocket\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/DoubleConversion\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/FBLazyVector\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/FBReactNativeSpec\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/Flipper\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/Flipper-DoubleConversion\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/Flipper-Folly\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/Flipper-Glog\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/Flipper-PeerTalk\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/Flipper-RSocket\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/FlipperKit\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/RCT-Folly\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/RCTRequired\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/RCTTypeSafety\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/RNCAsyncStorage\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/RNGestureHandler\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/RNReanimated\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/RNScreens\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/RNVectorIcons\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-Core\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-RCTBlob\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-RCTText\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-callinvoker\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-cxxreact\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-jsi\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-jsiexecutor\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-jsinspector\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-perflogger\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React-runtimeexecutor\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/ReactCommon\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/Yoga\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/YogaKit\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/glog\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/libevent\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/react-native-blur\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/react-native-orientation\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/react-native-safe-area-context\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/react-native-video\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/react-native-webview\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/boost-for-react-native\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/boost-for-react-native\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/glog\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/RCT-Folly\"\ \"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Private/React-Core\"\ \"/include/\"
    export HIDE_BITCODE_SYMBOLS\=YES
    export HOME\=/Users/zhangwei
    export ICONV\=/usr/bin/iconv
    export INFOPLIST_EXPAND_BUILD_SETTINGS\=YES
    export INFOPLIST_FILE\=Muyu/Info.plist
    export INFOPLIST_OUTPUT_FORMAT\=binary
    export INFOPLIST_PATH\=Muyu.app/Info.plist
    export INFOPLIST_PREPROCESS\=NO
    export INFOSTRINGS_PATH\=Muyu.app/en.lproj/InfoPlist.strings
    export INLINE_PRIVATE_FRAMEWORKS\=NO
    export INSTALLHDRS_COPY_PHASE\=NO
    export INSTALLHDRS_SCRIPT_PHASE\=NO
    export INSTALL_DIR\=/tmp/Muyu.dst/Applications
    export INSTALL_GROUP\=staff
    export INSTALL_MODE_FLAG\=u+w,go-w,a+rX
    export INSTALL_OWNER\=zhangwei
    export INSTALL_PATH\=/Applications
    export INSTALL_ROOT\=/tmp/Muyu.dst
    export IPHONEOS_DEPLOYMENT_TARGET\=10.0
    export JAVAC_DEFAULT_FLAGS\=-J-Xms64m\ -J-XX:NewSize\=4M\ -J-Dfile.encoding\=UTF8
    export JAVA_APP_STUB\=/System/Library/Frameworks/JavaVM.framework/Resources/MacOS/JavaApplicationStub
    export JAVA_ARCHIVE_CLASSES\=YES
    export JAVA_ARCHIVE_TYPE\=JAR
    export JAVA_COMPILER\=/usr/bin/javac
    export JAVA_FOLDER_PATH\=Muyu.app/Java
    export JAVA_FRAMEWORK_RESOURCES_DIRS\=Resources
    export JAVA_JAR_FLAGS\=cv
    export JAVA_SOURCE_SUBDIR\=.
    export JAVA_USE_DEPENDENCIES\=YES
    export JAVA_ZIP_FLAGS\=-urg
    export JIKES_DEFAULT_FLAGS\=+E\ +OLDCSO
    export KEEP_PRIVATE_EXTERNS\=NO
    export LD_DEPENDENCY_INFO_FILE\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Objects-normal/undefined_arch/Muyu_dependency_info.dat
    export LD_ENTITLEMENTS_SECTION\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Muyu.app-Simulated.xcent
    export LD_GENERATE_MAP_FILE\=NO
    export LD_MAP_FILE_PATH\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Muyu-LinkMap-normal-undefined_arch.txt
    export LD_NO_PIE\=NO
    export LD_QUOTE_LINKER_ARGUMENTS_FOR_COMPILER_DRIVER\=YES
    export LD_RUNPATH_SEARCH_PATHS\=/usr/lib/swift\ \ @executable_path/Frameworks
    export LEGACY_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/PlugIns/Xcode3Core.ideplugin/Contents/SharedSupport/Developer
    export LEX\=lex
    export LIBRARY_DEXT_INSTALL_PATH\=/Library/DriverExtensions
    export LIBRARY_FLAG_NOSPACE\=YES
    export LIBRARY_FLAG_PREFIX\=-l
    export LIBRARY_KEXT_INSTALL_PATH\=/Library/Extensions
    export LIBRARY_SEARCH_PATHS\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator\ \"/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift/iphonesimulator\"\ \"/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/lib/swift-5.0/iphonesimulator\"\ \"\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/CocoaAsyncSocket\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/DoubleConversion\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/FBReactNativeSpec\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Flipper\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Flipper-DoubleConversion\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Flipper-Folly\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Flipper-Glog\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Flipper-PeerTalk\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Flipper-RSocket\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/FlipperKit\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/RCT-Folly\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/RCTTypeSafety\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/RNCAsyncStorage\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/RNGestureHandler\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/RNReanimated\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/RNScreens\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/RNVectorIcons\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-Core\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-CoreModules\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-RCTAnimation\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-RCTBlob\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-RCTImage\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-RCTLinking\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-RCTNetwork\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-RCTSettings\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-RCTText\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-RCTVibration\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-cxxreact\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-jsi\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-jsiexecutor\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-jsinspector\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/React-perflogger\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/ReactCommon\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Yoga\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/YogaKit\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/glog\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/libevent\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/react-native-blur\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/react-native-orientation\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/react-native-safe-area-context\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/react-native-video\"\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/react-native-webview\"
    export LINKER_DISPLAYS_MANGLED_NAMES\=NO
    export LINK_FILE_LIST_normal_x86_64\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Objects-normal/x86_64/Muyu.LinkFileList
    export LINK_WITH_STANDARD_LIBRARIES\=YES
    export LLVM_TARGET_TRIPLE_OS_VERSION\=ios10.0
    export LLVM_TARGET_TRIPLE_SUFFIX\=-simulator
    export LLVM_TARGET_TRIPLE_VENDOR\=apple
    export LOCALIZATION_EXPORT_SUPPORTED\=YES
    export LOCALIZED_RESOURCES_FOLDER_PATH\=Muyu.app/en.lproj
    export LOCALIZED_STRING_MACRO_NAMES\=NSLocalizedString\ CFCopyLocalizedString
    export LOCALIZED_STRING_SWIFTUI_SUPPORT\=YES
    export LOCAL_ADMIN_APPS_DIR\=/Applications/Utilities
    export LOCAL_APPS_DIR\=/Applications
    export LOCAL_DEVELOPER_DIR\=/Library/Developer
    export LOCAL_LIBRARY_DIR\=/Library
    export LOCROOT\=/Users/zhangwei/Desktop/Muyu/ios
    export LOCSYMROOT\=/Users/zhangwei/Desktop/Muyu/ios
    export MACH_O_TYPE\=mh_execute
    export MAC_OS_X_PRODUCT_BUILD_VERSION\=20F71
    export MAC_OS_X_VERSION_ACTUAL\=110400
    export MAC_OS_X_VERSION_MAJOR\=110000
    export MAC_OS_X_VERSION_MINOR\=110400
    export METAL_LIBRARY_FILE_BASE\=default
    export METAL_LIBRARY_OUTPUT_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Muyu.app
    export MODULES_FOLDER_PATH\=Muyu.app/Modules
    export MODULE_CACHE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/ModuleCache.noindex
    export MTL_ENABLE_DEBUG_INFO\=YES
    export NATIVE_ARCH\=x86_64
    export NATIVE_ARCH_32_BIT\=i386
    export NATIVE_ARCH_64_BIT\=x86_64
    export NATIVE_ARCH_ACTUAL\=x86_64
    export NO_COMMON\=YES
    export OBJC_ABI_VERSION\=2
    export OBJECT_FILE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Objects
    export OBJECT_FILE_DIR_normal\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Objects-normal
    export OBJROOT\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex
    export ONLY_ACTIVE_ARCH\=YES
    export OS\=MACOS
    export OSAC\=/usr/bin/osacompile
    export OTHER_CFLAGS\=\ -fmodule-map-file\=\"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/YogaKit/YogaKit.modulemap\"\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/FlipperKit/FlipperKit.modulemap\"\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"\ \ -DFOLLY_NO_CONFIG\ -DFOLLY_MOBILE\=1\ -DFOLLY_USE_LIBCPP\=1\ -DRNVERSION\=64
    export OTHER_CPLUSPLUSFLAGS\=\ -fmodule-map-file\=\"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/YogaKit/YogaKit.modulemap\"\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/FlipperKit/FlipperKit.modulemap\"\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"\ \ -DFOLLY_NO_CONFIG\ -DFOLLY_MOBILE\=1\ -DFOLLY_USE_LIBCPP\=1\ -DRNVERSION\=64
    export OTHER_LDFLAGS\=\ -ObjC\ -l\"CocoaAsyncSocket\"\ -l\"DoubleConversion\"\ -l\"FBReactNativeSpec\"\ -l\"Flipper\"\ -l\"Flipper-DoubleConversion\"\ -l\"Flipper-Folly\"\ -l\"Flipper-Glog\"\ -l\"Flipper-PeerTalk\"\ -l\"Flipper-RSocket\"\ -l\"FlipperKit\"\ -l\"RCT-Folly\"\ -l\"RCTTypeSafety\"\ -l\"RNCAsyncStorage\"\ -l\"RNGestureHandler\"\ -l\"RNReanimated\"\ -l\"RNScreens\"\ -l\"RNVectorIcons\"\ -l\"React-Core\"\ -l\"React-CoreModules\"\ -l\"React-RCTAnimation\"\ -l\"React-RCTBlob\"\ -l\"React-RCTImage\"\ -l\"React-RCTLinking\"\ -l\"React-RCTNetwork\"\ -l\"React-RCTSettings\"\ -l\"React-RCTText\"\ -l\"React-RCTVibration\"\ -l\"React-cxxreact\"\ -l\"React-jsi\"\ -l\"React-jsiexecutor\"\ -l\"React-jsinspector\"\ -l\"React-perflogger\"\ -l\"ReactCommon\"\ -l\"Yoga\"\ -l\"YogaKit\"\ -l\"glog\"\ -l\"libevent\"\ -l\"react-native-blur\"\ -l\"react-native-orientation\"\ -l\"react-native-safe-area-context\"\ -l\"react-native-video\"\ -l\"react-native-webview\"\ -l\"stdc++\"\ -framework\ \"AudioToolbox\"\ -framework\ \"CFNetwork\"\ -framework\ \"JavaScriptCore\"\ -framework\ \"MobileCoreServices\"\ -framework\ \"OpenSSL\"\ -framework\ \"Security\"\ -framework\ \"UIKit\"\ -ObjC\ -lc++
    export OTHER_SWIFT_FLAGS\=\ -D\ COCOAPODS\ -Xcc\ -fmodule-map-file\=\"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/YogaKit/YogaKit.modulemap\"\ -Xcc\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/FlipperKit/FlipperKit.modulemap\"\ -Xcc\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/React/React-Core.modulemap\"\ -Xcc\ -fmodule-map-file\=\"/Users/zhangwei/Desktop/Muyu/ios/Pods/Headers/Public/yoga/Yoga.modulemap\"\ -Xcc\ -DFB_SONARKIT_ENABLED\=1
    export PACKAGE_TYPE\=com.apple.package-type.wrapper.application
    export PASCAL_STRINGS\=YES
    export PATH\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/libexec:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/usr/local/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/local/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/local/bin:/Users/zhangwei/.nvm/versions/node/v12.13.1/bin:/Users/zhangwei/.nvm/versions/node/v12.1.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/go/bin:/Library/Apple/usr/bin
    export PATH_PREFIXES_EXCLUDED_FROM_HEADER_DEPENDENCIES\=/usr/include\ /usr/local/include\ /System/Library/Frameworks\ /System/Library/PrivateFrameworks\ /Applications/Xcode.app/Contents/Developer/Headers\ /Applications/Xcode.app/Contents/Developer/SDKs\ /Applications/Xcode.app/Contents/Developer/Platforms
    export PBDEVELOPMENTPLIST_PATH\=Muyu.app/pbdevelopment.plist
    export PER_ARCH_OBJECT_FILE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Objects-normal/undefined_arch
    export PER_VARIANT_OBJECT_FILE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Objects-normal
    export PKGINFO_FILE_PATH\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/PkgInfo
    export PKGINFO_PATH\=Muyu.app/PkgInfo
    export PLATFORM_DEVELOPER_APPLICATIONS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications
    export PLATFORM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/bin
    export PLATFORM_DEVELOPER_LIBRARY_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library
    export PLATFORM_DEVELOPER_SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs
    export PLATFORM_DEVELOPER_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Tools
    export PLATFORM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr
    export PLATFORM_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform
    export PLATFORM_DISPLAY_NAME\=iOS\ Simulator
    export PLATFORM_FAMILY_NAME\=iOS
    export PLATFORM_NAME\=iphonesimulator
    export PLATFORM_PREFERRED_ARCH\=x86_64
    export PLATFORM_PRODUCT_BUILD_VERSION\=18E182
    export PLIST_FILE_OUTPUT_FORMAT\=binary
    export PLUGINS_FOLDER_PATH\=Muyu.app/PlugIns
    export PODS_BUILD_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products
    export PODS_CONFIGURATION_BUILD_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator
    export PODS_PODFILE_DIR_PATH\=/Users/zhangwei/Desktop/Muyu/ios/.
    export PODS_ROOT\=/Users/zhangwei/Desktop/Muyu/ios/Pods
    export PODS_XCFRAMEWORKS_BUILD_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/XCFrameworkIntermediates
    export PRECOMPS_INCLUDE_HEADERS_FROM_BUILT_PRODUCTS_DIR\=YES
    export PRECOMP_DESTINATION_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/PrefixHeaders
    export PRESERVE_DEAD_CODE_INITS_AND_TERMS\=NO
    export PRIVATE_HEADERS_FOLDER_PATH\=Muyu.app/PrivateHeaders
    export PRODUCT_BUNDLE_IDENTIFIER\=org.reactjs.native.example.Muyu
    export PRODUCT_BUNDLE_PACKAGE_TYPE\=APPL
    export PRODUCT_MODULE_NAME\=Muyu
    export PRODUCT_NAME\=Muyu
    export PRODUCT_SETTINGS_PATH\=/Users/zhangwei/Desktop/Muyu/ios/Muyu/Info.plist
    export PRODUCT_TYPE\=com.apple.product-type.application
    export PROFILING_CODE\=NO
    export PROJECT\=Muyu
    export PROJECT_DERIVED_FILE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/DerivedSources
    export PROJECT_DIR\=/Users/zhangwei/Desktop/Muyu/ios
    export PROJECT_FILE_PATH\=/Users/zhangwei/Desktop/Muyu/ios/Muyu.xcodeproj
    export PROJECT_NAME\=Muyu
    export PROJECT_TEMP_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build
    export PROJECT_TEMP_ROOT\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex
    export PUBLIC_HEADERS_FOLDER_PATH\=Muyu.app/Headers
    export RECURSIVE_SEARCH_PATHS_FOLLOW_SYMLINKS\=YES
    export REMOVE_CVS_FROM_RESOURCES\=YES
    export REMOVE_GIT_FROM_RESOURCES\=YES
    export REMOVE_HEADERS_FROM_EMBEDDED_BUNDLES\=YES
    export REMOVE_HG_FROM_RESOURCES\=YES
    export REMOVE_SVN_FROM_RESOURCES\=YES
    export REZ_COLLECTOR_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/ResourceManagerResources
    export REZ_OBJECTS_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/ResourceManagerResources/Objects
    export REZ_SEARCH_PATHS\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator\ 
    export SCAN_ALL_SOURCE_FILES_FOR_INCLUDES\=NO
    export SCRIPTS_FOLDER_PATH\=Muyu.app/Scripts
    export SCRIPT_INPUT_FILE_COUNT\=0
    export SCRIPT_INPUT_FILE_LIST_COUNT\=0
    export SCRIPT_OUTPUT_FILE_COUNT\=0
    export SCRIPT_OUTPUT_FILE_LIST_COUNT\=0
    export SDKROOT\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator14.5.sdk
    export SDK_DIR\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator14.5.sdk
    export SDK_DIR_iphonesimulator\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator14.5.sdk
    export SDK_DIR_iphonesimulator14_5\=/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator14.5.sdk
    export SDK_NAME\=iphonesimulator14.5
    export SDK_NAMES\=iphonesimulator14.5
    export SDK_PRODUCT_BUILD_VERSION\=18E182
    export SDK_VERSION\=14.5
    export SDK_VERSION_ACTUAL\=140500
    export SDK_VERSION_MAJOR\=140000
    export SDK_VERSION_MINOR\=140500
    export SED\=/usr/bin/sed
    export SEPARATE_STRIP\=NO
    export SEPARATE_SYMBOL_EDIT\=NO
    export SET_DIR_MODE_OWNER_GROUP\=YES
    export SET_FILE_MODE_OWNER_GROUP\=NO
    export SHALLOW_BUNDLE\=YES
    export SHARED_DERIVED_FILE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/DerivedSources
    export SHARED_FRAMEWORKS_FOLDER_PATH\=Muyu.app/SharedFrameworks
    export SHARED_PRECOMPS_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/PrecompiledHeaders
    export SHARED_SUPPORT_FOLDER_PATH\=Muyu.app/SharedSupport
    export SKIP_INSTALL\=NO
    export SOURCE_ROOT\=/Users/zhangwei/Desktop/Muyu/ios
    export SRCROOT\=/Users/zhangwei/Desktop/Muyu/ios
    export STRINGS_FILE_INFOPLIST_RENAME\=YES
    export STRINGS_FILE_OUTPUT_ENCODING\=binary
    export STRIP_BITCODE_FROM_COPIED_FILES\=NO
    export STRIP_INSTALLED_PRODUCT\=YES
    export STRIP_STYLE\=all
    export STRIP_SWIFT_SYMBOLS\=YES
    export SUPPORTED_DEVICE_FAMILIES\=1,2
    export SUPPORTED_PLATFORMS\=iphoneos\ iphonesimulator
    export SUPPORTS_TEXT_BASED_API\=NO
    export SWIFT_INCLUDE_PATHS\=\ \"/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/YogaKit\"
    export SWIFT_OPTIMIZATION_LEVEL\=-Onone
    export SWIFT_PLATFORM_TARGET_PREFIX\=ios
    export SWIFT_RESPONSE_FILE_PATH_normal_x86_64\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Objects-normal/x86_64/Muyu.SwiftFileList
    export SWIFT_VERSION\=5.0
    export SYMROOT\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products
    export SYSTEM_ADMIN_APPS_DIR\=/Applications/Utilities
    export SYSTEM_APPS_DIR\=/Applications
    export SYSTEM_CORE_SERVICES_DIR\=/System/Library/CoreServices
    export SYSTEM_DEMOS_DIR\=/Applications/Extras
    export SYSTEM_DEVELOPER_APPS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications
    export SYSTEM_DEVELOPER_BIN_DIR\=/Applications/Xcode.app/Contents/Developer/usr/bin
    export SYSTEM_DEVELOPER_DEMOS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities/Built\ Examples
    export SYSTEM_DEVELOPER_DIR\=/Applications/Xcode.app/Contents/Developer
    export SYSTEM_DEVELOPER_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library
    export SYSTEM_DEVELOPER_GRAPHICS_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Graphics\ Tools
    export SYSTEM_DEVELOPER_JAVA_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Java\ Tools
    export SYSTEM_DEVELOPER_PERFORMANCE_TOOLS_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Performance\ Tools
    export SYSTEM_DEVELOPER_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes
    export SYSTEM_DEVELOPER_TOOLS\=/Applications/Xcode.app/Contents/Developer/Tools
    export SYSTEM_DEVELOPER_TOOLS_DOC_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/documentation/DeveloperTools
    export SYSTEM_DEVELOPER_TOOLS_RELEASENOTES_DIR\=/Applications/Xcode.app/Contents/Developer/ADC\ Reference\ Library/releasenotes/DeveloperTools
    export SYSTEM_DEVELOPER_USR_DIR\=/Applications/Xcode.app/Contents/Developer/usr
    export SYSTEM_DEVELOPER_UTILITIES_DIR\=/Applications/Xcode.app/Contents/Developer/Applications/Utilities
    export SYSTEM_DEXT_INSTALL_PATH\=/System/Library/DriverExtensions
    export SYSTEM_DOCUMENTATION_DIR\=/Library/Documentation
    export SYSTEM_KEXT_INSTALL_PATH\=/System/Library/Extensions
    export SYSTEM_LIBRARY_DIR\=/System/Library
    export TAPI_VERIFY_MODE\=ErrorsOnly
    export TARGETED_DEVICE_FAMILY\=1
    export TARGETNAME\=Muyu
    export TARGET_BUILD_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator
    export TARGET_DEVICE_IDENTIFIER\=EF039094-6FE8-4F67-8FAD-F3CCC394913A
    export TARGET_DEVICE_MODEL\=iPhone13,2
    export TARGET_DEVICE_OS_VERSION\=14.5
    export TARGET_DEVICE_PLATFORM_NAME\=iphonesimulator
    export TARGET_NAME\=Muyu
    export TARGET_TEMP_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build
    export TEMP_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build
    export TEMP_FILES_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build
    export TEMP_FILE_DIR\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build
    export TEMP_ROOT\=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex
    export TEST_FRAMEWORK_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Library/Frameworks\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator14.5.sdk/Developer/Library/Frameworks
    export TEST_LIBRARY_SEARCH_PATHS\=\ /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/usr/lib
    export TOOLCHAINS\=com.apple.dt.toolchain.XcodeDefault
    export TOOLCHAIN_DIR\=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain
    export TREAT_MISSING_BASELINES_AS_TEST_FAILURES\=NO
    export TeamIdentifierPrefix\=A2SZ953D3V.
    export UID\=501
    export UNLOCALIZED_RESOURCES_FOLDER_PATH\=Muyu.app
    export UNSTRIPPED_PRODUCT\=NO
    export USER\=zhangwei
    export USER_APPS_DIR\=/Users/zhangwei/Applications
    export USER_LIBRARY_DIR\=/Users/zhangwei/Library
    export USE_DYNAMIC_NO_PIC\=YES
    export USE_HEADERMAP\=YES
    export USE_HEADER_SYMLINKS\=NO
    export USE_LLVM_TARGET_TRIPLES\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_CLANG\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_LD\=YES
    export USE_LLVM_TARGET_TRIPLES_FOR_TAPI\=YES
    export USE_RECURSIVE_SCRIPT_INPUTS_IN_SCRIPT_PHASES\=YES
    export VALIDATE_DEVELOPMENT_ASSET_PATHS\=YES_ERROR
    export VALIDATE_PRODUCT\=NO
    export VALIDATE_WORKSPACE\=YES_ERROR
    export VALID_ARCHS\=arm64\ arm64e\ i386\ x86_64
    export VERBOSE_PBXCP\=NO
    export VERSIONING_SYSTEM\=apple-generic
    export VERSIONPLIST_PATH\=Muyu.app/version.plist
    export VERSION_INFO_BUILDER\=zhangwei
    export VERSION_INFO_FILE\=Muyu_vers.c
    export VERSION_INFO_STRING\=\"@\(\#\)PROGRAM:Muyu\ \ PROJECT:Muyu-1\"
    export WRAPPER_EXTENSION\=app
    export WRAPPER_NAME\=Muyu.app
    export WRAPPER_SUFFIX\=.app
    export WRAP_ASSET_PACKS_IN_SEPARATE_DIRECTORIES\=NO
    export XCODE_APP_SUPPORT_DIR\=/Applications/Xcode.app/Contents/Developer/Library/Xcode
    export XCODE_PRODUCT_BUILD_VERSION\=12E507
    export XCODE_VERSION_ACTUAL\=1251
    export XCODE_VERSION_MAJOR\=1200
    export XCODE_VERSION_MINOR\=1250
    export XPCSERVICES_FOLDER_PATH\=Muyu.app/XPCServices
    export YACC\=yacc
    export arch\=undefined_arch
    export variant\=normal
    /bin/sh -c /Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Intermediates.noindex/Muyu.build/Debug-iphonesimulator/Muyu.build/Script-00DD1BFF1BD5951E006B06BC.sh
+ DEST=/Users/zhangwei/Library/Developer/Xcode/DerivedData/Muyu-fzbvakropjqsmnapbolpkfnfkask/Build/Products/Debug-iphonesimulator/Muyu.app
+ [[ Debug = *Debug* ]]
+ [[ ! iphonesimulator == *simulator ]]
+ [[ -n '' ]]
+ case "$CONFIGURATION" in
+ [[ iphonesimulator == *simulator ]]
+ [[ -n '' ]]
+ echo 'Skipping bundling in Debug for the Simulator (since the packager bundles for you). Use the FORCE_BUNDLING flag to change this behavior.'
Skipping bundling in Debug for the Simulator (since the packager bundles for you). Use the FORCE_BUNDLING flag to change this behavior.
+ exit 0

/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 7.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'RNVectorIcons' from project 'Pods')
/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'boost-for-react-native' from project 'Pods')
/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 7.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'react-native-orientation' from project 'Pods')
/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'react-native-blur' from project 'Pods')
/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.4, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'Flipper-PeerTalk' from project 'Pods')
/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 7.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'react-native-video' from project 'Pods')
/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'Flipper-Glog' from project 'Pods')
/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'YogaKit' from project 'Pods')
/Users/zhangwei/Desktop/Muyu/ios/Pods/Pods.xcodeproj: warning: The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.5.99. (in target 'Flipper-DoubleConversion' from project 'Pods')
** BUILD SUCCEEDED **


```

# Error output

```log

```
