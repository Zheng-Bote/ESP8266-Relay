# ESP8266 Relay-Manager

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


See [Wiki pages](https://github.com/htpbbp/ESP8266-Relay/wiki) for details like 
- setup instructions
- how to use
- example project with hardware list
