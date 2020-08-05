# # #!/usr/bin/env bash

# # # Example: Clone a required repository
# # git clone https://github.com/example/SomeProject

# # # Example: Install App Center CLI
# # npm install -g appcenter-cli

# # Force the 1.5.3 version of cocoapods
# echo "uninstalling all cocoapods versions"
# sudo gem uninstall cocoapods --all
# echo "installing cocoapods version "
# sudo gem install cocoapods -v 1.9.3

#**********************

echo "Uninstalling all cocoapods versions"
sudo gem uninstall cocoapods --all
sudo gem install cocoapods -v 1.9.3

# Upgrade Node to a version expected by React Native 0.60
set -ex
brew uninstall node@6
NODE_VERSION="8.10.0"
curl "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.pkg" > "$HOME/Downloads/node-installer.pkg"
sudo installer -store -pkg "$HOME/Downloads/node-installer.pkg" -target "/"

# Run Yarn
yarn