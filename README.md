How to set up and run the code:
1. Visit https://markovfartlek.vercel.app/
2. Enter the amount of intervals you want in your workout
3. Click Generate Workout

Title: Markov Fartlek Generator

Description: <br>

A fartlek is a type of interval training that blends continuous training with interval training. The term "fartlek" is Swedish for "speed play," and it involves varying your pace throughout your run, alternating between fast segments and slower recovery periods. This type of training can help improve both speed and endurance.

This project uses a Markov chain to generate random fartlek workouts based on predefined interval speeds. The interval speeds are categorized into different routines, such as slow jog, tempo, sprint, and rest. The Markov chain ensures that the generated workouts follow a logical sequence, making them effective and enjoyable. The user can choose how many intervals they want in their workout, ranging from 1 all the way to 100 if they so desire!

The Markov chain is implemented using a transition matrix that defines the probabilities of moving from one interval speed to another. The code randomly selects the next interval based on the current interval and the defined probabilities.


Why is this system personally meaningful to me: <br>

As a runner, I have always been interested in finding new and effective ways to improve my performance. Fartlek training has been a valuable addition to my training regimen, as it allows me to vary my pace and challenge myself in different ways. By using a Markov chain to generate random fartlek workouts, I can keep my training fresh and exciting, while also ensuring that I am following a structured approach to interval training. This project combines my interests in running and programming, allowing me to create a tool that benefits both my physical fitness and my coding skills.


How working on it genuinely challenged me as a computer scientist: <br>

Translating the Markov chain code from Python to JavaScript was a significant challenge for me. For example, JavaScript does not have NumPy, so I couldn’t simply use numpy.random.choice() to select a workout routine based on the current state. Instead, I had to manually implement my own function that replicated NumPy’s behavior. I did this by generating a random number between 0 and 1 and summing the probabilities in the transition matrix until the sum exceeded the random number. The state where the sum crossed the random number became the next state. 

Another major challenge was designing a user-friendly interface. I wanted the system to be both intuitive and visually appealing, so I had to carefully consider how users would interact with it. Deciding how to display intervals in a clear, organized grid and using color-coding to convey the intensity of each routine required me to think like both a developer and a designer.

As next steps, I would like to add more workout routines to the transition matrix and even include time durations or distances for each interval. This would make the system more customizable and even more helpful for runners.


Is my system creative: <br>

Yes, I believe my system is creative. I designed the transition matrix based on my own running experience as a member of the Bowdoin Cross Country and Track team and from years of running in high school. Having done countless Fartlek workouts, I drew on my intuition to decide which efforts are most likely to follow each other. For instance, after a slow jog, it’s unlikely that another slow jog would follow - a tempo effort or sprint is far more plausible. Also, a fartlek usually starts with a slow jog to ease into the workout, which explains why the markov chain starts with a slow jog everytime.

Additionally, the system allows users to input any number of intervals, and the Markov Fartlek generator neatly formats them in a grid. This flexibility and focus on usability showcase the creativity behind the design and make the application more engaging and user-friendly.

Finally, I associated each routine with a specific color to make the interface more intuitive. Warmer colors like red and yellow were assigned to sprint and tempo efforts because they represent higher intensity - just as warm colors are often associated with urgency or action. Conversely, cooler colors like blue and green were assigned to rest and slow jog intervals, reflecting calmness and ease. This color-coding helps users quickly recognize the type of interval and understand the pacing demands at a glance.
