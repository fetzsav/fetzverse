---
title: "Pimping Linux"
date: 2022-06-28T11:12:40-04:00
draft: true
---



Many users are initially attracted to a Linux operating systems due to screenshots of other user's pimped-out desktops they have seen online. You can checkout some of the *best* of these desktops on [r/UnixPorn](https://reddit.com/r/unixporn). This high level of customization is not typically available on Windows or OS X. However, even on Linux, it is not as easy as simply *'clicking a button'*. You could spend many hours tweaking config files to customize your desktop to your taste. In this guide, we will be abstracting away as much of the configuration as possible, and focusing on getting you setup with a sexy desktop quickly. After following along with this article and completing all of the steps, you will have a much greater knowledge about how the appearance of your Linux desktop works and how to make any changes you may want. Anyways, let's get started.

## **Software We Will Be Using**
1. i3wm-gaps - Window Manager
2. Polybar - Status Bar
3. Rofi - Application Launcher & More
4. Picom - Appearance (window transparency & more)
5. Kitty - Terminal

I will be using Arch Linux, however, any distribution will work fine and produce the same results.

### i3wm-gaps - Setting up the Window Manager
**i3wm** is my favorite window manager due to it's simplicity to setup and use. In fact, on most setups, it works great out the box with a minimalistic look. Config changes can be applied without rebooting/relogging, which is quite handy. We will be using **i3wm-gaps**, which is a fork of the vanilla i3wm. i3wm-gaps stays up to date with the upstream branch of i3wm, so everything should work as expected. We will be opting for i3wm-gaps because of it's ability to put gaps inbetween windows (as the name implies). I think this pairs great with Picom's rounded corners and gives your desktop a sleek uniform look.

####  __Installation__
#####  Arch
{{< highlight go "linenos=table,linenostart=1" >}}
sudo pacman -Syu i3-gaps
{{< /highlight >}}
#### Ubuntu
{{< highlight go "linenos=table,linenostart=1" >}}
sudo add-apt-repository ppa:regolith-linux/release
sudo apt update
sudo apt install i3-gaps
{{< /highlight >}}

After i3 finishes installing, you should be able to select it as your desktop environment from your login screen (check the bottom right or left of the screen).
Before logging into i3, let's make sure our configuration is set properly and that we know how to use it. i3's configuration file can be found in the following location:
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


The i3 config is pretty self explanitory. We will be coming back here to add in some custom keybinds and add some startup commands to enable our wallpaper. Feel free to look through the config and get familiar. 

One last change I like to do is changing the keybind for *closing an application* from Mod+Shift+Q to just Mod+Q. Search for 'kill focused window' to find the keybind. Here is what mine looks like:
{{< highlight go "linenos=table,linenostart=1" >}}
#kill focused window
bindsym $mod+q kill
{{< /highlight >}}



