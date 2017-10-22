# Tegra Go Collector

After doing some research found the solution. Run the below command.
```echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p```