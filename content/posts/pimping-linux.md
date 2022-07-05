---
title: "Pimping Linux"
date: 2022-06-28T11:12:40-04:00
draft: true
---





Many users are initially attracted to a Linux operating systems due to screenshots of other user's pimped-out desktops they have seen online. You can checkout some of the *best* of these desktops on [r/UnixPorn](https://reddit.com/r/unixporn). This high level of customization is not typically available on Windows or OS X. However, even on Linux, it is not as easy as simply *'clicking a button'*. You could spend many hours tweaking config files to customize your desktop to your taste. In this guide, we will be abstracting away as much of the configuration as possible, and focusing on getting you setup with a sexy desktop quickly. After following along with this article and completing all of the steps, you will have a much greater knowledge about how the appearance of your Linux desktop works and how to make any changes you may want. Anyways, let's get started.

## **Software We Will Be Using**
1. **{{<underline text="i3wm-gaps">}}** - Window Manager  
  **i3wm** is my favorite window manager due to it's simplicity to setup and use. In fact, on most setups, it works great out the box with a minimalistic look. Config changes can be applied without rebooting/relogging, which is quite handy. We will be using **i3wm-gaps**, which is a fork of the vanilla i3wm. i3wm-gaps stays up to date with the upstream branch of i3wm, so everything should work as expected. We will be opting for i3wm-gaps because of it's ability to put gaps inbetween windows (as the name implies). I think this pairs great with Picom's rounded corners and gives your desktop a sleek uniform look 
2.  **{{<underline text="Polybar">}}**- Status Bar  
   Instead of using the default status bar provided by i3, we are going to be opting for Polybar. Polybar offers more customization options and also has some premade themes that we can find online. First, let's install Polybar.
3. **{{<underline text="Rofi">}}** - Application Launcher & More
4. **{{<underline text="Picom">}}**- Appearance (window transparency & more)  
   Picom is the final touch to your desktop appearance to really start making things look good. Picom has quite a few different things that it can accomplish. You can find all of the available settings on their Github page. Although, we will only be using Picom for transparency and 'rounded corners' for our windows.
5. **{{<underline text="Kitty">}}** - Terminal  
I will be using Arch Linux, however, any distribution will work fine and produce the same results.
Before making customization changes, we are going to install each package first.


### Polybar - Task/Status Bar
####  Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu polybar
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo add-apt-repository ppa:regolith-linux/release
sudo apt update
sudo apt install polybar
{{< /highlight >}}


### i3WM - Window Manager
####  Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu i3-gaps
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo add-apt-repository ppa:regolith-linux/release
sudo apt update
sudo apt install i3-gaps
{{< /highlight >}}

### Rofi - Application Launcher
Instead of using i3's default dmenu, we are going to opt for Rofi. Rofi also has themes that you can download / apply to match your system. This is going to be a quick an easy installation, and then we can take a look at the themes available to us.
#### Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu rofi
{{< /highlight >}}
{{< highlight go "linenos=table,linenostart=1" >}}
sudo apt update && sudo apt install rofi
{{< /highlight >}}
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu rofi
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo add-apt-repository ppa:regolith-linux/release
sudo apt update
sudo apt install rofi
{{< /highlight >}}

### Picom - Transparency & Rounded Corners
Picom is the final touch to your desktop appearance to really start making things look good. Picom has quite a few different things that it can accomplish. You can find all of the available settings on their Github page. Although, we will only be using Picom for transparency and 'rounded corners' for our windows.
#### Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu picom
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo apt install picom
{{< /highlight >}}

## Configuration

### Polybar
Polybar works nicely out of the box. Configuration options can be found at the following location:
{{< highlight go>}}
~/.config/polybar
{{< /highlight >}}
However, we are going to be downloading a theme pack to give you some more options. The theme pack we will be using is from Github and can be found at [adi1090x/polybar-themes](https://github.com/adi1090x/polybar-themes)
Installing these themes is easy. CD into your *Downloads* directory and clone the repository. Chmod the install script that is inside and run it.
{{< highlight go "linenos=table,linenostart=1" >}}
git clone --depth=1 https://github.com/adi1090x/polybar-themes.git
cd polybar-themes
chmod +x setup.sh
./setup.sh
{{< /highlight >}}
Run through the installer script. You can pick Bitmap or Standard versions, it is up to you. 

### i3
After i3 finishes installing, you should be able to select it as your desktop environment from your login screen (check the bottom right or left of the screen).
Before logging into i3, let's make sure our configuration is set properly and that we know the basics. i3's configuration file can be found in the following location:
{{< highlight go "linenos=table,linenostart=1" >}}
~/.config/i3/config
{{< /highlight >}}
Let's go ahead and open that up with your favorite editor and make some quick changes.
*note: if the file does not exist please run the command: **i3-config-wizard** in your terminal.*
The first edit we are going to make is setting the gap size between each of our windows. Add the following lines to the top of your file:
{{< highlight go "linenos=table,linenostart=1" >}}
for_window [class=".*"] border pixel 0
gaps inner 10
gaps outer 5
{{< /highlight >}}
**line 1:** removes titlebar from windows and sets border to 0px. If you want a border around your windows, you may change 0 to something else.  
**line 2:** sets gap inbetween windows  
**line 3:** sets gap between screen edge and windows  
The i3 config is pretty self explanatory. We will be coming back here to add in some custom keybinds and add some startup commands to enable our wallpaper. Feel free to look through the config and get familiar. 
One last change I like to do is changing the keybind for *closing an application* from Mod+Shift+Q to just Mod+Q. Search for 'kill focused window' to find the keybind. Here is what mine looks like:
{{< highlight go "linenos=table,linenostart=1" >}}
#kill focused window
bindsym $mod+q kill
{{< /highlight >}}

### Picom
By default, the Picom configuration file is not going to be present. Picom does come with an example configuration file that we can copy into it's proper location. Let's do that now.
{{<highlight go "linenos=table,linenostart=1" >}}
cp /etc/xdg/picom.conf ~/.config/picom/picom.conf
{{</highlight>}}

Go ahead and open up the Picom configuration file. The file has explanatory comments, so feel free to set it how you prefer.
The following lines are the main lines that are responsible for how my configuration looks

{{< highlight go "linenos=table,linenostart=1" >}}
##shadow behind windows to add depth
shadow = true;
shadow-radius = 20;
##transparency on unfocused windows
inactive-opacity = 0.95;

##rounded corners
corner-radius = 15
rounded-corners-exclude = [
    "window_type = 'dock'",
    "window_type = 'desktop'"
]
{{< /highlight >}}

