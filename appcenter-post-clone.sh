# #!/usr/bin/env bash

# # Example: Clone a required repository
# git clone https://github.com/example/SomeProject

# # Example: Install App Center CLI
# npm install -g appcenter-cli

# Force the 1.5.3 version of cocoapods
echo "uninstalling all cocoapods versions"
sudo gem uninstall cocoapods --all
echo "installing cocoapods version "
sudo gem install cocoapods -v 1.9.3