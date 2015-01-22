#!/usr/bin/env bash

# Set Environmental Variables
# Some packages use this to trigger silent or non-interactive mode
if ! grep -q "^CI\="  /etc/environment ; then
  echo "CI=true" | sudo tee -a /etc/environment
fi


yum install man -y

rpm --import https://packages.elasticsearch.org/GPG-KEY-elasticsearch

sudo ln -fs /vagrant/etc_yum.repos.d_elasticsearch.repo /etc/yum.repos.d/elasticsearch.repo

sudo yum install -y elasticsearch

# sudo rm -f /etc/elasticsearch/elasticsearch.yml
# sudo ln -fs /vagrant/elasticsearch.dev.yml /etc/elasticsearch/elasticsearch.yml

sed -e "s/\${UUID}/${UUID}/" /vagrant/elasticsearch.dev.yml | sudo tee /etc/elasticsearch/elasticsearch.yml

sudo chkconfig --add elasticsearch

# Add Oracle JDK
wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u75-b13/jdk-7u75-linux-x64.rpm -O jdk.rpm
sudo rpm -Uvh jdk.rpm

sudo service elasticsearch start

# OPEN PORT 9200!!!

# Install Java and ES, start on normal runlevels
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update

# Silent install, bypass Oracle EULA
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections

# Continue with install...
sudo apt-get install -y oracle-java7-installer
wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.4.1.deb
sudo dpkg -i elasticsearch-1.4.1.deb
sudo update-rc.d elasticsearch defaults 95 10

# Configure ES
if [ ! -f /etc/elasticsearch/elasticsearch.yml~ ]; then
  ES_DEV="/vagrant/elasticsearch.dev.yml"
  UUID="$(date | md5sum | cut -d' ' -f1)"
  sed -e "s/\${UUID}/${UUID}/" ${ES_DEV} > /tmp/elasticsearch.yml
  sudo cp /etc/elasticsearch/elasticsearch.yml /etc/elasticsearch/elasticsearch.yml~
  sudo mv /tmp/elasticsearch.yml /etc/elasticsearch/elasticsearch.yml
fi

# Start 'er up!
sudo /etc/init.d/elasticsearch start

# Install node
sudo apt-get update
# Official Debian Technical Committee's answer to package naming collision with `node`
sudo apt-get install -y git nodejs nodejs-legacy npm

# Configure npm
npm config set prefix /home/vagrant/npm
if ! grep -q "\/npm\/bin\"$" /home/vagrant/.bashrc ; then
  echo 'export PATH="$PATH:$HOME/npm/bin"' | tee -a /home/vagrant/.bashrc
  source /home/vagrant/.bashrc
fi

# Clone jwt-auth demo
if [ ! -d /home/vagrant/jwt-auth ]; then
  git clone https://github.com/eckdanny/jwt-auth.git /home/vagrant/jwt-auth
  cd /home/vagrant/jwt-auth && npm install
fi
