# ESP8266 Relay-Manager v001

## Controlling a relay via web based ESP8266, as an example a powerstrip.

### Features:

- [x] web based configuration of:
  - [x] WiFi
  - [x] Hostname
  - [x] Relais
  - [x] MQTT
  - [x] file uploader
  - [ ] file manager
  - [x] ESP8266 updater
  - [ ] Alexa integration
  - [ ] Google Assistant integration
- [x] web based WiFi configuration
  - [x] auto connect to configured WiFi. If no WiFi configured, an Access Point with web based configuration starts
- [x] web based configuration of 1, 4 or 8 Relais
  - [x] web based defined aliases for each Relay
- [x] web based MQTT configuration to publish and subscribe topics
- [x] multicast DNS query support
- [x] API (HTTP GET-Parameter) for remote control (e.g. Smarthome integration)
- [x] Web uploader for customized Webpages
- [x] Wep pages with Bootstrap design (CDN: Internet connect requiered)
  - [ ] local Bootstrap design
- [x] OTA updater via Web (control via web interface or API)
- [ ] Alexa Support (coming soon)
- [ ] Google Assistand support - maybe
- [x] EasySetup: Arduino binary for download and install
- [ ] Source Code: After clean up and inline documentation the source code will be provided here, too


See [Wiki pages](https://github.com/Zheng-Bote/ESP8266-Relay/wiki) for details like 
- setup instructions
- how to use
- example project with hardware list

- - - 

# ESP8266-Relay: Initial Configuration
- the Hardware-Setup will be described in the **ESP8266-Relay: Hardware Setup**
- the Firmware flashing will be described in the **ESP8266-Relay: Firmware Setup**

1. WiFi Configuration
2. uploading Webpages
3. Relay configuration
4. System Configuration (Hostname, MQTT-Server, MQTT-Queues, Firmware Update-Server,...)

## WiFi Configuration
On first time starting the ESP8266-Relayserver no WiFi configuration will be found so the ESP8266-Relayserver will starting with it's own Accesspoint **esp_relay** and IP-Address **192.168.4.1**


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/01_wifi.png" alt="" />



Connect with a WiFi client like Smartphone or Tablet to the Accesspoint **esp_relay** and open your browser.
In most cases the WiFi software offers you to automatical open **http://192.168.4.1** or **http://esp_relay.local**


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/02_wifi.jpg" alt="" />



If no automaticall redirect happens please open your browser an go to **http://192.168.4.1** or **http://esp_relay.local**.
Open **Configure WiFi** where the available WiFi Networks are listed or choose **Configure WiFi (No Scan)** to configure your WiFi settings manually.  


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/03_wifi.jpg" alt="" />



Choose your WiFi network and fill in your WiFi password. Click **safe** and the Accesspoint **esp_relay** will be closed. Connect with your Smartphone, Tablet or PC to your regualr network.


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/04_wifi.jpg" alt="" />



The **ESP8266-Relayserver** will restarting and trying to connect to your configured WiFi.


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/05_wifi.jpg" alt="" />



## Initial Configuration
Open with your Internet Browser **http://esp_relay.local**.
With a simple upload formular you can upload the webpages.

 
<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/06_initial.png" alt="" />



Firstly upload the file **upload.htm**


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/07_initial.png" alt="" />


...and click the button **upload**


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/08_initial.png" alt="" />



...an automatical redircet should show you a simple file explorer. Click on **/upload.htm**. 
If the automatical redirect doesn't happens please go to URLi **http://esp_relay.local/update.htm**.

 
<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/09_initial.png" alt="" />



Now the upload form looks a little bit better now. Please choose as 2nd file to upload **tools.js**.


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/10_initial.png" alt="" />



From now on all default web pages will got a navigation menue. Of course the navigation links will working after the upload of all necessary web pages is successully done. 
So please repeat the uploads for the other web files now.


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/11_initial.png" alt="" />



Choose from the menue **File Info**.
Now the SPIFF filesystem on your ESP8266-Realyserver should looks like this one:
(Of course you can upload your own, modified web pages. To use your own web pages please have a look to the source code of the provided HTML pages or read the API documentation).


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/12_initial.png" alt="" />



The menue call **Home** with the relay status looks still stand-by...

 
<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/13_initial.png" alt="" />



Also the menue **Sys Info** shows just a little bit...


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/14_initial.png" alt="" />



## Relais Shield Configuration

Calling the menu **Relay Config** will enable you to configure your relais.
Depending on the installed Relay Shield you can choose here your configuration:
- 1 Relay
- 4 Relais
- 8 Relais

Optional you can choose to protect your configurations with a password. It's not really secure but it will works for current "normal-non-hacker-people-and-kids".
 

<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/15_relay-cfg_0.png" alt="" />


If you choose the 1-Relay config you can fill in a "human readable" name for your relay.

When finished filling in please don't forget to click the button **Save configuration** !!!


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/16_relay-cfg_1.png" alt="" />



If you choose the 4-Relais config you can fill in the "human readable" names for your relais:

When finished filling in please don't forget to click the button **Save configuration** !!!


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/17_relay-cfg_4.png" alt="" />



If you choose the 8-Relais config you can fill in the "human readable" names for your relais:

When finished filling in please don't forget to click the button **Save configuration** !!!


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/18_relay-cfg_8.png" alt="" />



<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/19_relay-cfg.png" alt="" />




## Power-Status


After finishing successfully the relay configuration you can go via the menu **Home** to the Relay Status.

Here you got an overview of your configured Relais and their power status. Of course there's also an API available so you can power-on or power-off your relais remotely, as an example via a Raspberry Pi or your Smarthome Automatisation tool like **Fhem** or **OpenHab** and so on.


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/20_power-status.png" alt="" />



## System-Infos

Now also the System-Informations on the menue **Sys-Info** show a little bit more now ...
(some more configuration options will following with upcoming updates...)


<img src="https://github.com/Zheng-Bote/ESP8266-Relay/blob/master/Images/21_sysinfos.png" alt="" />



