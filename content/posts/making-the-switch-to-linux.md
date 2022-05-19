---
title: "Making the Switch to Linux"
date: 2022-05-14T15:02:30-04:00
draft: true
---

It is important to have an operating system that you enjoy using. It should be able to do everything you need it to do without causing any distractions. Chances are, you are probably using Microsoft Windows, or Apple's OS X. These operating systems have dominated the commercial market and are pre-shipped with pretty much any PC you will buy in a store. It is easy to continue using these operating systems simply because you are familiar with it and you know what to expect. However, it is crucial that our computers work to the best of their ability and do not cause disturbances in our workflow. I have been reluctant to make the switch to Linux as my daily desktop driver, as I was unsure how it would affect my workflow and the applications I use. After using Linux on all of my machines for the past 3 months, I can affirmatively say... I'll never go back to a different OS.
In this article, I am going to share some of the awesome things I love about Linux, and why you should consider making the switch.


## Look & Feel
Typically, when users are debating over their favorite operating system, their ultimate argument to support their preference is *"I just like how it looks! (other-OS-here) is ugly!"* This can be closely pinpointed to the user interface differences between OS X and Windows.
Microsoft Windows uses a taskbar-based navigation, while OS X uses a dock-based navigation. Once a user becomes accustomed to one of these interfaces, it becomes very difficult to make a switch. Thankfully, Linux allows the user to pick whichever desktop environment they would like to use, including some bare-bones versions called "window managers". The fact that Linux allows you to pick which desktop you want to run and how you want to run it is the number one selling feauture for me. You are no longer forced to look at things on your computer screen that you wish weren't there. Let's take a look at *Desktop Environments* and then *Window Managers* to find out which one is best for you.

### Linux Desktop Environments
I began my Linux journey using Desktop Environments *(or DE's for short)*. These are the full package method of getting your desktop up and running as quickly as possible. Installing a popular DE will automatically configure most of your sound settings, mouse settings, etc. along with provide you some control panels to modify these. If you are coming from Windows or OS X, then a desktop environment will probably make your transition easier and allow you to compute within your comfort zone.
Many Linux distributions have 'pre-flavored' versions with the desktop environment pre-installed. I do recommend using one of these *distribution flavors*, as the desktop environment will be configured to work with your specific operating system out-the-box. Yet, you can always install (and switch between) multiple different desktop environments if you can't decide on one. I'll give you a list of my favorite DE's.

#### GNOME - for OS X lovers
![gnome-desktop-png](/gnome-desktop.jpg)
  GNOME has been one of my favorite desktop environment since I began using Linux in ~2013. It is the default desktop environment that ships with Ubuntu these days, and for good reason. It is a highly customizable desktop that can achieve a sleek and modern look. Out of the box it may seem a little bland, but there is a great community behind the project that continues to release content. You can combine the GNOME desktop with some popular OS X-inspired themes to achieve a nice Mac replica desktop.
[GNOME Website](https://gnome.org)

### xfce - for lightweight systems


#### Cinnamon - for Windows lovers
![cinnamon-desktop-png](/cinnamon-desktop.png)
The Cinnamon desktop ships by default with *Linux Mint*. I have not used the Cinnamon desktop in at least 3 years, however I remember it working great. Personally, I am not a fan of the startmenu/taskbar based desktop environment that Microsoft Windows adopts. Yet, I think Cinnamon does a better job executing it than Microsoft does. This is my goto desktop if I am helping someone switch from Windows to Linux.

#### Deepin - my new goto
![deepin-desktop-png](/deepin-desktop.png)
**I love Deepin**. Previously, Deepin was a full distribution. Meaning, you couldn't install just the desktop environment onto your Ubuntu installation etc. I remember using the full Deepin distro a couple years ago, but not being able to give up Ubuntu at the time. These days, Deepin is available as a standalone desktop environment. So, now you can install it onto any distro you want. The design is sort of like a hybrid between Windows and OS X, but with some simple customizations you can make it more dock based or vice versa. All of the pre-bundled apps that come with the DE are sleek and pleasant to use. However I do reccomend it if you have a beefy machine.
[Checkout Deepin](https://www.deepin.org/en/dde/)


### Linux Window Managers
Your other option for display managment is a *window manager*. A *window manager* the most barebones approach to a graphical interface for your PC. It is the puzzle piece that controls placement of windows. Window managers are typically organized into workspaces... each workspace acting as it's own desktop. Before I began using a window manager, I imagined them to have less functionality than a full desktop environment. While this may hold true from a vanilla approach... I found this to not be the case as I became familiar with the software. I am currently using **i3-wm** on all of my machines, and it has increased my productivity and workflow without a doubt. I look forward to trying another manager (possibly **dwm**) in the future, but I am going to enjoy i3 for some time longer. 

#### What to expect
Instead of having a dock or taskbar, your windows are typically separated into workspaces which can be navigated between using a special key.
Most functionality of the window manager is accomplished using the special key (normally your command or windows key) combined with another key. For instance, here are some of the keybinds that I use for my i3-wm installation. *note: the mod key is my windows key*
- Mod+D: Opens my application launcher where I can launch any installed app
- Mod+ENTER: Opens a terminal in current workspace
- Mod+Q: Quit current application
- Mod+1,2,3...: Change workspaces
- Mod+SHIFT+1,2,3...: Move window to other workspace
- Mod+W,E,or S: Change window layout

This may seem overwhelming at first, but surprisingly doesn't take very long to learn. Once the muscle memory kicks in, your workflow is noticeably more fluid and productive. If you have never used a window manager before, I recommend trying one to see if you have the same experience. Switching back to desktop environments feels clunky and slow now.

#### Themeing Capabilities:

## GPU Support and Gaming
Before switching my daily driver to Linux, I was using Microsoft's Windows. The biggest reason I was using Windows was for support of my (newer) model video cards. Two of the desktop computers in my house have Nvidia 30 series GPUs in the system. If you are unaware... the 30 series are the latest model cards available from Nvidia. I also enjoy playing video games, hence, the video cards. Linux gaming has not been the best option for gamers in the past years, that is not a secret. On the previous occasions that I have tried to switch my daily-computers to Linux, driver incompatibility and unsupported game titles have eventually forced me back onto Windows.
I can confidently say that this is no longer the case. I was more than surprised to see how far Linux gaming has come along since last time I gave it a shot. If you've never gamed using a **window manager** before, then you are missing out. Handling full-screen games is no longer an issue and is easily managed using my window manager. Unfortunately, support is not 100% guarenteed across all titles, but recently that has been changing rapidly.

### Proton
Most of the credit for the larger availability of Linux supported games can be given to Proton. Proton is a software developed by Valve that allows Microsoft Windows games to run on Linux. This is the software behind the new *SteamDeck* and *SteamOS*. While yes, some games are not yet supported, I believe that we will see these games become supported in the future. Most of the reasons a game is not supported is due to an anti-cheat compatibility or something similar. It is only a matter of time before Valve is able to reach an agreement with anti-cheat companies to get them up and running on Proton.
You can check if your favorite games are supported at [ProtonDB](https://www.protondb.com/).

### Recent NVidia News
There is also another reason that Linux gaming has a bright future. This is because of NVidia's recent decision to open source their Linux drivers. Already, my Nvidia 3070 runs most games *better* than Windows. Yet, on Linux, we do not receive the same driver updates that are pushed to Windows and Mac computers. Users in the community (and some hackers) have been pushing Nvidia to release the source code for their drivers so that users can begin porting them to different systems. NVidia recently released their source code with a statement saying, *"This release is a significant step toward improving the experience of using NVIDIA GPUs in Linux, for tighter integration with the OS, and for developers to debug, integrate, and contribute back,"* [source](https://developer.nvidia.com/blog/nvidia-releases-open-source-gpu-kernel-modules/) I am looking foward to seeing what the open source community is able to do for us. I think this is a huge step forward for Linux, and especially Linux gaming. *Note: There is a lot of controversial discussion around this recent news involving the specifics and copyright of the driver source. I will be re-visiting the subject in a later article where we can dig deeper and see the real implications for the everyday Linux user.*


## Workflow Productivity
Sure, games are fun, and a Batman-themed desktop is pretty cool, but at the end of the day, functionality is the key ingredient. Your operating system needs to work for you, not against you. Your workflow and productivity should reap benefits by whichever operating system you decide to use. It has been a common misconception that Linux causes headaches and disturbs the user's workflow. Many people are afraid to switch to Linux due to thinking they're productivity will deterierate. I am here to inform you that none of that is true, and in fact, Linux will have a positive impact on your daily computing. 
The largest determining factor of how Linux will affect your everyday computer needs is which flavor (or distribution) you decide to install. I believe that the narrative '*linux is hard to use*' does hold water in some cases, but is not inheriently an issue with Unix systems. Comparibly, OS X can be equally as challenging for someone who has only used Windows their whole life. If it is your first time using Linux, there will of course be a learning curve. Especialy if you choose to install a barebones distribution such as *Gentoo Linux*, you will probably not have a very good experience to begin with. You may even write off Linux as too much trouble than it's worth. However, on the flip side, if you are a veterened Linux user, installing *Gentoo* or *Arch* may give you the perfect amount of control over your system to allow it to work exactly the way you want, maximizing your productivity.

### Picking your Distribution
To begin using Linux, you will need to decide upon a distribution to install. Since Linux is completely open source, many different organizations have developed their own interpretation of how the operating system should run. Linux, by itself, is just the kernal. The kernal is basically the core of the operating system that handles computations. Graphical interfaces, terminal emulators, package managers, and system services are just some of the other things that are needed for a functional daily-use operating system. This is where distributions come into the picture. Distributions take on the responsibility of bundling 

