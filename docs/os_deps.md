# WSL2 Ubuntu dependencies for Electron

```bash
apt-get install \
libatk1.0-0 \
libatk-bridge2.0-0 \
libcups2 \
libgtk-3-0 \
libgbm1
```

```bash
# If node_modules exists already that was installed in WSL:

rm -r node_modules

# then:

npm install --platform=win32

# or:

npm_config_platform=win32 npm install
```

```bash
npm run make -- --platform=win32
```

However, some dependencies might break according to [Electron Forge: Developing with WSL](https://www.electronforge.io/guides/developing-with-wsl).
