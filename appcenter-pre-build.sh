# #!/usr/bin/env bash

# # Example: Change bundle name of an iOS app for non-production
# if [ "$APPCENTER_BRANCH" != "master" ];
# then
#     plutil -replace CFBundleName -string "\$(PRODUCT_NAME) Beta" $APPCENTER_SOURCE_DIRECTORY/MyApp/Info.plist
# fi

#*********

Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@efegumuslu 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


microsoft
/
appcenter
2.6k
680
174
Code
Issues
1.1k
Pull requests
8
Actions
Wiki
Security
Insights
appcenter/sample-build-scripts/react-native/app-center-config/appcenter-pre-build.sh
@hopewise
hopewise better doc
Latest commit 3caee93 on Jul 17, 2019
 History
 1 contributor
41 lines (33 sloc)  1.36 KB
  
#!/usr/bin/env bash
#
# For Android/iOS apps, update the contents of the appcenter-config.json/ AppCenter-Config.plist file.
# this is useful when having muliple variations for the app, and need to track each variation independently using dedicated app token which is provided by the ms app center.
#
# DECLARE THE APP_CENTER_TRACKING_JSON ENVIRONMENT VARIABLE IN APP CENTER BUILD CONFIGURATION, SET
# TO THE CONTENTS OF YOUR appcenter-config.json FILE

if [ -z "$APP_CENTER_TRACKING_JSON" ]
then
    echo "You need define the APP_CENTER_TRACKING_JSON variable in App Center"
    exit
fi

if [ -z "$APP_CENTER_CURRENT_PLATFORM" ]
then
    echo "You need define the APP_CENTER_CURRENT_PLATFORM variable in App Center with values android or ios"
    exit
fi

# This is the path to the appcenter-config.json file

if [ "$APP_CENTER_CURRENT_PLATFORM" == "android" ]
then
    CONFIG_FILE="appcenter-config.json"
    APP_CENTER_TRACKING_JSON_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/src/main/assets/$CONFIG_FILE
else
    #iOS
    CONFIG_FILE="AppCenter-Config.plist"
    APP_NAME="my-app-name"
    APP_CENTER_TRACKING_JSON_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/$APP_NAME/$CONFIG_FILE
fi


echo "Updating $CONFIG_FILE"

echo "$APP_CENTER_TRACKING_JSON" > $APP_CENTER_TRACKING_JSON_FILE
sed -i -e 's/\\"/'\"'/g' $APP_CENTER_TRACKING_JSON_FILE

echo "File content:"
cat $APP_CENTER_TRACKING_JSON_FILE
