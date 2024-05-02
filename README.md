[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uYb6fuja)
#### Rita Close Creative Coding
### 2024 MDDN342 Assignment 2 | Randomised Collections
# Facing a Hydra
Pages Link: https://23-mddn342.github.io/randomised-collection-RitaClose/

### Design Process

#### Face Code
For this project, I wanted to investigate facial variations on some kind of creature. In the end I chose the Hydra because of it's covienient bodily arrangement and because I have always found Ancient Greek Mythology particularly fascinating.

I began this project by blocking out the proportions of the Hydra's face. I added in the tilting motion right from the beginning to make it easier to integrate other features later on. Apart from the eyes, teeth, and horns, the hydra's facial structure is almost entirely made up with quads. It took quite a while to join them all up in a rotating system.

Initially I set up the face one side at a time because I thought it would be easy to either mirror all of the elements onto the other side but it ended up being more trouble than I anticipated and I had to create a second function for the other side of the face. Though it was irritating doing everything twice, I do think there are worse ways I could have done it, especially as the different sides of the face needed to be drawn in different orders anyway depending on which side was facing the camera. Given the time over again though I would have liked to investigate other ways of doing this.

After I stitched all the features together I knew I wanted to add scales on top to add extra detail - and I figured I could use maps to do so - but it took me a bit to work out how. In the end I used a combination of maps and for loops to create a function that found each X and Y point in the quad and evenly space a given number of shapes (in this case arcs) along the area.

#### Arrangement
Despite coming up with a solid plan for how the Hydra heads would connect to their necks at the beginning of the project, I wasn't actually expecting it to work as well as it did. Sure, there are still issues but I think they are mostly negligible. I used bezier curves to connect the heads to the necks which linked together at the bottom central point of the screen. I then added bezierPoint functions to find the points at which to position the scales along them.

#### Reflection
Overall I am very happy with how the project turned out. If I had more time to improve it I would spend more time making the horns more detailed, and clean up the seams between the heads and the necks.
In terms of randomisation, I experimented with the Gaussian Selection using the getAveragedRandom function for the head tilt and the jaw, but I found that this detracted from the unique poses of each face because the extremes of each varable are actually the most interesting variations of them. Instead I used this technique for the eyes and left the face tilt as completely random. I used conditional randomness for the smoke - which only appears if the jaw is open, and the nostrils - which will only flare if there is smoke. The smoke variable is also set up with weighted randomness so it only appears 20% of the time when the Hydra's jaw is open.

### Randomised Variables
#### Sideways Tilt - Continuous: -10, 10
Although I have done 2D work, I am most at home in a 3D rendering engine, which is why I decided to try and emulate this style along the X axis, using a tilt that gives the ilusion of three dimentions by moving all of the verticies along a parabolic arc towards the bottom of the screen. I created this main variable first so I could create all the additional ones around this feature. I decided not to create a full 180 degree rotation because it would have broken some of the other facial features, and I thought that though I wanted variation in how the head was facing the camera, I still wanted them to have a general forward direction.

#### Jaw Drop - Continuous: 0, 3.5
What dragon-like creature would be complete without an opening mouth? The jaw actually took me a while to perfect because it changes shape so much as the head tilts sideways. The other challenge to this was creating the cavity inside the mouth. I ended up just changing the jaw's interior colour as it rotated past the halfway point as well as adding in geometry for the back of the throat. I let the jaw variable extend as far as I thought would be appropriate without distorting the rest of the face, especiallly from the side view of the Hydra.

#### Eye Tilt - Continuous: -0.5, 0.5
The tilting eyes on this face system is the main source of emotion on the creature. The idea was to create range from sad to angry with a resting expression in the middle. The eyes turned out to be challenging because of the way they need to change when rotating behind the dominant side of the face. I also took time to move the eye direction as the head tilts so that the Hydra is always looking forward on it's local axis. With the change in expression, the Iris and Pupil also grow to fill the avaliable space.

#### Smoke - Discrete
As my only discrete variable, the smoke that the Hydra breathes is both necessary, and adds an extra element of life to the creature. The smoke will only apear if the jaw is open a certain distance and even then only has a 20% chance of appearing. When the Hydra blows smoke their nostrils also flare a little bit too.

#### Base Colour & Eye Colour - Continous: 0, 360
The final two editable variables on the face are the colours of the face and the eyes respectively. These variables are randomised with an averaged random so they will stay around their base colours with only minor changes and outliers to create visual interest. I decided to make the Hydra with cool toned colours because I wanted it to seem more natural and part of the earth - this is also why I chose a background colour that it could blend into - one that reflected the type of environment a creature such as this may dwell.

#### Beheaded Hydra - Discrete
Occationally, (5% of the time) the arrangement will draw a beheaded Hydra head instead of the completed head. This is primarily just a series of ellipses with the odd bit of dripping blood, but I think it is quite an effective addition to my creature.

### Journal
I began this project knowing I wanted to create a dragon-like creature and due to the random multiples of the creature the Laconian Hydra is the natural choice.

##### 16/04
I have started adding the jaw and teeth. The idea with this is the hydra will be able to open and shut it's mouth - I am aiming to have the teeth displace accordingly along the jaw without having to tamper with all of them individualy. I might make the teeth be discrete variables too.

##### 18/04
I have begun to clean up the jaw area so there are less random artifacts hanging around. I have also added in an eyetilt, though it is not entirely working yet. Next I am going to work on adding the rest of the neck, backing for the throat, and some teeth before I move on to the horns and then the colour scheme. After that will just be adding deatails to the face as well as joining each head to necks in the arrangement area.

##### 23/04
I have started editing the arrangment file and discovered that instead of using complicated maths to work out where the shapes need to go I can just find the points on a bezier curve and add detailing with shapes through that method. Next I will be adding teeth, finishing the horns, and working out how to add in a discrete variable or two.

##### 30/04
I discovered a way to use mapping to fill the space of the quads with scales using arcs. I am super happy with the result and I think it's going to be really cool mixed with everything else. I then used the same technique of mapping for the teeth - which I am almost finished - just have to add in some front teeth. I might leave the horns as they are if I run out of time but I will consider adding more detail to them later. After I add in the back of the throat and fix the eyes the face will be done then I can add in special randomness conditions and a discrete variable then just commenting to finish.

##### 01/05
I have finally added a discrete variable in the form of smoke that can be either turned on or off. Hopefully this counts enough. I will make it less common tomorrow when I tackle randomness.