# CRC Model

* [[notes/Carreer/Design/CRC/Classes]]
* [[notes/Carreer/Design/CRC/Responsibilities]]
* [[notes/Carreer/Design/CRC/Collaborations]]
* [[notes/Carreer/Design/CRC/Producer-Consumer with a published interface.]]


Go back to every instance, go through every single entity and ask what does it produce, where does it comes from and what are the information we need

IDK every entity, step up, go through the thing, make up a list and get things done.

Produces or consumes?
Make a list of what does it produce, or what does it consume.


When you find yourself doing the same thing over and over, it behooves you to find a way to reuse all that work,

CRC leads to good designs as you don't do the same thing 50 times in 50 different places.

It is an iterative process, you keep going over it and over it until all the issues are resolved and all the pieces are in place, then you make it run and find all the other shit you forgot or screwed up.


CRC, when you keep doing this you begin to see the commonality in things and thing which can be combined in one structure, 

the natural progression of things will lead you to the proper if you just CRC it.


Well, I just want you to see what CRC leads to, when you find yourself doing the same thing over and over, it behooves you to find a way to reuse all that work, which naturally leads you to build a framework which I did which took over 1 year to complete.


I put my hands under my legs and visualize everything I am seeing.  Going through every step of the process, not touching anything until I see the problem and where it must be happening.

I code the same way, never putting anything down until I see the whole process in my head, every step and everything which must be done in each step.

If you can visualize it, you can code it or fix it.  If you can't do that, for me it is a non starter.  

It is like a book, you don't need the book to read it as every book is a movie, you see it all in your head.  A program is the same way, you don't need the code, you need the movie in your head then all is clear.

Maybe everyone can't do that, but I can't code anything, can't fix anything until I see the movie.

Not being able to see it all in your head for me is like coming into a movie in the middle and trying to make sense of it.

I can't do it although I can make guesses.  If you truly visualize what is going on, with knowledge of what they are trying to do, you then know how they must be doing it.

It not necessary to understand the language to find the issue, when you know what is trying to be done you know all the ways they can try to do it.

The movie might be in a different language but the steps must be the same and thus the problem is easily identified.  A design in the same way, the language might be different, but the steps needed to get to the end must be the same.

Find the way which is right for you, but I highly encourage everyone to put down the pen, put their hands under their legs and close your eyes and visualize what must be happening or what must happen, the answer is there for you to see, don't need elaborate drawings as your mind has all the drawings you need.

Just make sure you are in the right movie theater, don't want to think you are on the beach and walk off a cliff in the Grand Canyon, lol.



There seems to be some questions about CRC so I will give an explanation I hope everyone can understand and how that applies.

Designing and building a system is similar to [[notes/Fixing my Life 1/MARS College/planning]] a trip to a destination.  

We first decide we want to go there, what we are going to do there and what are we going to bring back or deliver there.  

Depending on those answers, we might choose to:
	1.  Fly
	2.  Take a bus
	3.  Take a train
	4.  Walk
	5.  Ride a horse, bike, etc
	6.  Drive

In our case, lets say we need to go to Mexico and buy 1000 pounds of Mexican Jumping beans.  

Well, that makes #1, #2, #4, #5  pretty much out of the picture. Since it will cost a lot to transport the beans and we need transportation while there, we decide to drive.

So, we have now decided on the delivery mechanism for transporting us to Mexico.  Now, we need to plan what we are going to take with us and what are the restrictions for getting in, can we even drive there.

We check, yes, we can drive but we need a passport as ID.  We also want to buy the beans so we need money.  We also need to know how to get there.  We get out our trusty map and plan our route.  

So, now we know what we are responsible for delivering and now it only remains for us to get in the care with our required things and get there.

We have planned out our trip, which cities we will stop for gas, food and a place to sleep. Now we only need to go.  Once we go, occasionally we will pass a destination on our route and realize we are hungry and turn around and buy some snacks or a meal.

Once we arrive at the border of Mexico we must present our ID and then we are in.  But once in, we realize, we don't speak the language and they only accept peso's, not US dollars.

So, in order to buy the beans, we must convert our money into something they understand and will accept.  We do this and then ask where we can buy the beans and are taken there.  We buy the beans and then plan our destination home.

We are returned to the border by our friendly courier at which point we realize all of our unused peso's will not be accepted in the US so they are returned and exchanged for US dollars and we got our receipt for the beans and are now ready to go home.  We once again cross the border and are on our way home.

# Now, how is this like building a system.

Well, when we decided what we wanted to do, we asked ourselves what would we be responsible for delivering once we were there.

We went to the bank, gathered the information and the money and our passport and we have fulfilled our responsibility.

So, that is a class and that is what it is responsible for.  

Now, we need to figure out how we are going to get there.  We chose the medium of transport amongst the available option and then having ascertained there would be a place to exchange our money for local currency off we went.

That is the first part of the collaboration.  Along the way we stopped for essential items needed and finally arrived at the border.  You can think of the transport medium in the case to be the internet.  Once there, our money was exchanged to something which local people would understand.

You can think of this as the messaging protocol.  How it was done was immaterial to both sides, it was just done according to predefined rules which both sides had agreed to.

Now, the other side was responsible for getting us to our buyer, they had decided on a transport medium, a currier which the buyer and the border had previously agreed upon.  

So, the each had a responsibilities (a class) and a medium for accomplishing delivery of the item (us).  They also provided the exchange of currency (our money for their money). This was done without either side know about it or how it was done (the separation of functions and knowledge of each other).

And because that is all they do, they could exchange any currency and neither side needs to worry about it because it will be taken care of for them (the messaging protocol which knows how to speak all the languages incoming and translate to the local language or currency).

Upon exiting, the reverse happens and we take home our beans and receipt and have fulfilled our responsibility.

Each step of the process was accomplished by defining the problem, creating a class who took responsibility for certain parts of the operation, each one independent of the other by totally capable of meeting its responsibilities.

We could have exchanged the car for a plane and all the other pieces still worked exactly as before because they don't know where the currency came from, they only know how to manage it.

The border the same way, the border at the edge of the country or an airport all must do almost exactly the same things.

On our side we could easily build components to manage all of our requirements, get the money, get the  passport, arrange for transportation.

In defining each task that leads us to the next task and so on and so on until we get to the destination.  

**That is CRC, working through each aspect and what does it do and what does it produce and how does it transport that product to another destination.**

# It is always iterative.

It is an iterative process, in the example above, we turned around because we were hungry.  Often times in designs we return to a spot in the design and add things or take things away either because we forgot something or the design and changed.

Imagine for a moment on our trip the road had been washed out, we would have had to back track and take another route.  That is why it is an iterative process.  We sometimes made bad assumptions or things changed or we forgot things and had to redo things.

It is always iterative.

Even when you get home you realize that you could have gone a different route which would have saved you two days, well, you update your design so next time you take advantage this.

This often happens during a design, you learn something new or because you have now fully developed the design you realize there is a better way to do it.

That is the iteration again.  The design is never totally finished, most often it is the quality vs quantity which forces completion.

If you had arrived at the border and asked for a shower or a meal or without the proper ID you would have been rejected because that is not the responsibility of the border to wash your or feed you.

It is their responsibility to check your ID and if good convert your currency and send you on your way.  If the ID is bad, they reject you.

If they included that functionality then they would not be reusable at the airport because the food options are totally different.

That is why each class has a predefined responsibility and is not tied to factors which change from instance to instance.  

That makes it reusable which leads to extensibility and scalability.

I liken it to driving a car, you can't drive if you can't see your destination and all that will need to be done to reach that destination.

If you have been following along, you might want to take a victory lap, but don't.  We would have never accomplished this.

On our side, who is going to get the money, make the travel arrangements, who is asking for the beans, how are going to deliver them.

Ok, back to the drawing board, we have to build those entities and decide how we are going to collaborate with them, by what mechanism??  Phone??  Email, etc. and how are we going to get the items we need delivered to us??

As I said, it is an iterative process, you keep going through it over and over again looking for things which were forgotten or don't work.

You can't email money. So, you have to talk with them. All of this relates to the CRM, all aspects of what has to be done and who is going to do it have to be figured out and implemented. 

You have to keep going over it and over it.  You don't want to drive to Mexico and realize you have no cash or no passport but that is what will happen if you don't implement all the necessary steps.

I do it in my head, others use drawings or something else.  

Each must plan the part given to them to do.

I do it in my head and dole out the pieces which someone else needs to do and let them figure out how to get that done.  UML, drawings, in your head (only if you are the only one doing) it.

well, I have explained it in the simplest way I know how.

That is how I do design, others have other ways.

I do what I do because I am a visual person, I have to see it before i can do it and in seeing it and CRC'ing it, I don't need a drawing, I know all the details because I see them like a movie (which never stops playing and drives me crazy, like watching Groundhog day every day until I start something else).