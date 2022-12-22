# How to run Windows™ 95© on the web

You can view the [online demo](https://donno2048.github.io/win95/)

## Setup

- Download and install [dosbox](https://sourceforge.net/projects/dosbox/files/latest/download) to _C:\dosbox_
- Download [622C](http://www.rloe.com/randytheracer/622c.zip) and extract it into _C:\dosbox_
- Download and install [bochs](https://sourceforge.net/projects/bochs/files/latest/download) to _C:\bochs_
- Download and install [OSFMount](https://www.osforensics.com/downloads/osfmount.exe)
- Download the [windows 95 installation](https://github.com/donno2048/Win95-source/archive/master.zip) and extract it to _C:\win95_

## Steps

1. Copy C:\bochs\bximage.exe into C:\dosbox and run it, in the prompt press 1, and leave all the values as default (just press enter) except the hard disk size in megabytes which should be changed to 400
1. Run C:\dosbox\DOSBox.exe and in it run:

    ```bat
    imgmount 2 c.img -size 512,63,16,812 -t hdd -fs none
    boot 622c.img
    fdisk
    1
    1
    Y
    ```

1. When you see another prompt just press Enter to close DOSBox, then, open C:\dosbox\DOSBox.exe again and run:

    ```bat
    imgmount c c.img
    boot 622c.img
    format c:
    y
    win95
    ```

1. Close DOSBox, then, open OSFMount and choose Mount new… you need to find the image disk (C:\dosbox\c.img) then choose Mount all partitions option and uncheck the read-only option, then press ok, now if you open the file explorer you will see a new drive (D: in my case), drag&drop the C:\win95 folder into the new drive, then in OSFMount click on the new drive and then on Dismount

1. Open C:\dosbox\DOSBox.exe and run (complete the setup - remember that we have no actual hardware so we need to do a custom setup):

    ```bat
    imgmount c c.img
    boot 622c.img
    mouse.com
    c:
    cd win95
    setup /is
    ```

1. Open C:\dosbox\DOSBox.exe again and run (close DOSBox when the setup is done):

    ```bat
    imgmount c c.img
    c:
    cd win95
    extract /a mini.cab *.* /l c:/win95 /y
    boot c.img
    ```

1. Zip _c.img_ from the _DOSBox_ folder to a zip file named _win95.zip_ and put it in the same directory as the files in this folder, then run a local testing "site" using: `python -m SimpleHTTPServer` (you need Python to do that) and open http://localhost:8000/
