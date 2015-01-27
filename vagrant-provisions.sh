#!/usr/bin/env bash

# Set Environmental Variables
# Some packages use this to trigger silent or non-interactive mode
if ! grep -q "^CI\="  /etc/environment ; then
  echo "CI=true" | sudo tee -a /etc/environment
fi

# Import firewall configuration
sudo cp /vagrant/etc_sysconfig_iptables /etc/sysconfig/iptables
sudo /etc/init.d/iptables restart

# Install man becuase this is nice to have :P
yum install -y man 

# Install Oracle JDK, headers to bypass EULA
wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u75-b13/jdk-7u75-linux-x64.rpm -O jdk.rpm
sudo rpm -Uvh jdk.rpm

# Install elasticsearch
rpm --import https://packages.elasticsearch.org/GPG-KEY-elasticsearch
sudo ln -fs /vagrant/etc_yum.repos.d_elasticsearch.repo /etc/yum.repos.d/elasticsearch.repo
sudo yum install -y elasticsearch

# Configure elasticsearch from template yml
UUID="$(date | md5sum | cut -d' ' -f1)"
sed -e "s/\${UUID}/${UUID}/" /vagrant/elasticsearch.dev.yml | sudo tee /etc/elasticsearch/elasticsearch.yml
sudo chkconfig --add elasticsearch

# Start elasticsearch
sudo /etc/init.d/elasticsearch start

# Install nodejs, npm, and build tools
curl -sL https://rpm.nodesource.com/setup | sudo bash -
sudo yum install -y gcc-c++ make nodejs

# Configure npm
# npm config set prefix /home/vagrant/npm
# if ! grep -q "\/npm\/bin\"$" /home/vagrant/.bashrc ; then
#   echo 'export PATH="$PATH:$HOME/npm/bin"' | tee -a /home/vagrant/.bashrc
#   source /home/vagrant/.bashrc
# fi

sudo npm install -g grunt-cli karma bower

# # Clone jwt-auth demo
# if [ ! -d /home/vagrant/jwt-auth ]; then
#   git clone https://github.com/eckdanny/jwt-auth.git /home/vagrant/jwt-auth
#   cd /home/vagrant/jwt-auth && npm install
# fi


# Marvel Install
# cd /usr/share/elasticsearch
# sudo bin/plugin -i elasticsearch/marvel/latest
# sudo /etc/init.d/elasticsearch restart