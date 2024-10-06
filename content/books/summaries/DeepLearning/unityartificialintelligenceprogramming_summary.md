
# Unity Artificial Intelligence Programming: Key Highlights

**Unity Artificial Intelligence Programming, Fourth Edition** is a comprehensive guide for integrating AI into games using Unity 2018. Authored by Dr. Davide Aversa, Aung Sithu Kyaw, and Clifford Peters, the book focuses on creating powerful and believable AI entities. 

## Authors and Contributors

- **Dr. Davide Aversa**: Holds a Ph.D. in AI and is interested in Interactive Virtual Agents and Procedural Content Generation.
- **Aung Sithu Kyaw**: Specializes in graphics programming and game development, with a background in digital media technology.
- **Clifford Peters**: Experienced programmer and reviewer of Unity-related books.

## Preface and Purpose

The book aims to teach readers how to incorporate various AI techniques into games, such as decision-making, movement, and pathfinding. It is intended for users with prior Unity experience and familiarity with C#.

## Key Topics Covered

### 1. Introduction to AI
- Overview of AI in games and its unique requirements compared to other domains.
- Basic AI techniques like Finite State Machines (FSMs), behavior trees, and pathfinding.

### 2. Finite State Machines (FSMs)
- Simplifies AI decision-making by managing behaviors and transitions between states.

### 3. Randomness and Probability
- Explores probability basics and how randomness can make AI behavior less predictable.

### 4. Implementing Sensors
- Develops sensory systems for AI to interact with the game world, enhancing awareness and decision-making.

### 5. Flocking
- Implements group behaviors for objects, allowing them to move together as a cohesive unit.

### 6. Path-Following and Steering Behaviors
- Techniques for AI characters to follow paths and navigate toward goals while avoiding obstacles.

### 7. A* Pathfinding
- A popular algorithm for finding optimal paths from a start to a target location.

### 8. Navigation Mesh
- Utilizes Unity's navigation mesh to simplify pathfinding and improve scene representation.

### 9. Behavior Trees
- Expands FSMs for complex games using plugins like Behavior Bricks to manage AI behaviors.

### 10. Machine Learning in Unity
- Applies machine learning to game characters using Unity's ML-Agent Toolkit, requiring Python and TensorFlow.

### 11. Putting It All Together
- Combines learned elements into a final project, creating an advanced vehicular battle game.

## Resources and Support

- **Code and Images**: Example code and color images are available for download from Packt's website.
- **Feedback and Errata**: Readers are encouraged to provide feedback and report errors through Packt's support channels.

## Conclusion

This book serves as a practical guide for developers looking to enhance their games with sophisticated AI techniques. By following the detailed chapters and examples, readers can create engaging and dynamic game experiences.

For more information, visit [Packt Publishing](https://www.packtpub.com).


# Summary of AI Concepts and Applications

Artificial Intelligence (AI) aims to enable computers to think and make decisions like living organisms. This vast field encompasses various domains and applications, each addressing different problems. Key areas of AI research include:

- **Computer Vision**: Involves analyzing visual inputs for tasks like facial and object recognition.
- **Natural Language Processing (NLP)**: Enables machines to understand and process human languages, despite challenges like language ambiguity.
- **Common Sense Reasoning**: Attempts to mimic human-like reasoning, which remains a complex challenge.

## AI in Gaming

AI plays a crucial role in enhancing the fun and challenge of games by providing intelligent opponents and realistic Non-Player Characters (NPCs). The goal is to make NPCs seem intelligent through appropriate reactions to game situations, without consuming excessive computational resources.

### AI Techniques in Games

1. **Finite State Machines (FSMs)**: Simple yet effective models used in games to manage NPC states and transitions. They are widely implemented using basic programming constructs like if/else or switch statements.

2. **Randomness and Probability**: Introduces variability in AI behavior to avoid predictability and maintain game balance, making AI opponents neither too perfect nor too predictable.

3. **Sensor Systems**: AI characters rely on sensor systems to gather information about their environment, using methods like polling and event-driven messaging systems. Polling checks information directly, while messaging systems use events to inform AI agents of changes.

4. **Flocking, Swarming, and Herding**: Inspired by natural group behaviors, these techniques use simple rules to simulate complex group dynamics. Craig Reynolds' algorithm for flocking behavior is a foundational concept.

5. **Path Following and Steering**: AI characters navigate the game world using steering behaviors, which include seeking, fleeing, avoiding obstacles, and path following. These behaviors are essential for realistic movement and interaction.

6. **A* Pathfinding**: A popular algorithm for pathfinding in games, A* is known for its efficiency and accuracy. It helps characters navigate environments while avoiding obstacles, crucial for games like Real-Time Strategy (RTS).

## Implementation in Unity

The text discusses implementing these AI techniques in Unity, a popular game development platform. While detailed explanations of the techniques are beyond the scope, resources like "Programming Game AI by Example" and "Artificial Intelligence for Games" are recommended for deeper understanding.

In summary, AI in games enhances player experience by creating challenging and dynamic interactions. Techniques like FSMs, randomness, sensor systems, flocking, steering, and A* pathfinding are integral to developing intelligent game behavior. The balance between computational efficiency and realistic AI behavior is critical, ensuring games are both engaging and technically feasible.


The text provides an overview of AI pathfinding techniques and game AI concepts, focusing on A* pathfinding, waypoints, navigation meshes, behavior trees, and locomotion systems.

### A* Pathfinding
- A* pathfinding uses a grid-based system to determine the shortest path from a starting point to a target. It calculates movement scores for adjacent tiles using G (cost from start to current tile) and H (estimated cost to target), with the sum called F (F = G + H).
- The method relies on Manhattan length for estimating H, simplifying path calculations.
- The process involves evaluating adjacent tiles and selecting the one with the lowest F score, storing previous tiles as parents for path tracing.

### Waypoints and Navigation Meshes
- Waypoints offer a simpler pathfinding method, guiding AI characters from start to target points. However, they can be inefficient and problematic with dynamic environments.
- Navigation meshes use convex polygons to represent traversable areas, offering more environmental information and adaptability for different AI entities.
- Unity provides built-in navigation mesh generation, simplifying implementation.

### Behavior Trees
- Behavior trees are used to manage AI logic, featuring tasks connected by control flow nodes like Sequence, Selector, and Parallel.
- Selector nodes try tasks sequentially until one succeeds, while Sequence nodes complete all tasks in order.
- Parallel nodes execute tasks simultaneously, and Decorator nodes modify task behaviors.

### Locomotion Systems
- Locomotion systems mimic realistic movement, adjusting animations for different surfaces and slopes.
- Unity's locomotion extension blends animations for natural character movement.

### Game AI vs. Academic AI
- Game AI focuses on creating entertaining NPCs with limited resources, while academic AI aims to solve complex real-world problems.
- Techniques like FSMs, random behaviors, and pathfinding are commonly used in games.

### Finite State Machines (FSMs)
- FSMs are introduced as a foundational AI technique, with a focus on implementing them in Unity3D.
- The chapter outlines a tank game example where enemy tanks use FSMs to chase and attack the player's tank.

This overview sets the stage for further exploration of AI techniques within the Unity engine, beginning with FSMs in the next chapter.



# Summary of Chapter 2: Player's Tank and AI Implementation

## Player's Tank Setup

The player's tank is a Unity game object composed of a Tank body and a Turret, allowing for independent turret rotation. It includes components like Rigidbody and Box Collider. The Turret is a child of the Tank, enabling it to follow the Tank's movements while rotating independently based on mouse input. A SpawnPoint is used for bullet firing, and the Tank is tagged as "Player."

## PlayerTankController Class

The `PlayerTankController` manages tank controls using W, A, S, D keys for movement and the mouse for aiming and shooting. The controller initializes with key variables like speed and rotation speed, and the `Start` and `Update` functions handle setup and ongoing updates.

### Shooting Mechanics

The tank fires bullets when the left mouse button is clicked, with a controlled shooting rate to prevent continuous fire. The `UpdateWeapon` function checks elapsed time against the shooting rate before instantiating a Bullet object.

### Tank Control

The tank's turret is rotated using raycasting to determine mouse position on the battlefield. The `UpdateControl` function manages tank movement based on keyboard input, adjusting speed and direction.

## Bullet Class

The Bullet prefab uses a laser-like material and includes properties like damage, speed, and lifetime. On collision, it triggers an explosion effect and is destroyed. The `AutoDestruct` script handles automatic object destruction after a set time.

## Waypoints and AI Setup

Waypoints are represented by Cube objects tagged as "WandarPoint" for AI navigation. These are invisible in the game view but serve as targets for AI patrol routes.

## FSM Framework for AI Tanks

An abstract `FSM` class defines methods for AI tank behavior, including patrolling, chasing, attacking, and handling the dead state. The `SimpleFSM` class inherits from `FSM` and implements these behaviors through states:

- **Patrol**: The tank moves between waypoints, switching to chase mode if the player is nearby.
- **Chase**: The tank follows the player and transitions to attack mode when in range.
- **Attack**: The tank targets the player, firing bullets while maintaining a distance.
- **Dead**: The tank explodes when health reaches zero.

### State Transitions

The AI transitions between states based on player proximity and health status, using methods like `UpdatePatrolState`, `UpdateChaseState`, and `UpdateAttackState`.

## FSM Framework Usage

The FSM framework used is adapted from the Unity C# FSM framework. It structures AI behavior into manageable states and transitions, providing a robust system for handling complex AI logic.

This setup allows for dynamic interactions between the player's tank and AI opponents, offering a comprehensive gameplay experience with realistic tank controls and challenging AI behavior.



In this chapter, we explore the implementation of Finite State Machines (FSM) in Unity3D for AI-controlled tanks. The FSM framework consists of states and transitions, managed by the `AdvancedFSM` class. Key components include `FSMState` classes, which handle transitions and actions, and the `NPCTankController` class, which inherits from `AdvancedFSM`.

### FSM Structure

- **Transitions and States**: Defined using enums, transitions include `SawPlayer`, `ReachPlayer`, and `LostPlayer`, while states include `Patrolling`, `Chasing`, `Attacking`, and `Dead`.
- **State Management**: `AdvancedFSM` maintains a list of `FSMState` objects and tracks the current state. Methods like `AddFSMState` and `DeleteState` manage the state list, while `PerformTransition` updates the current state based on transitions.

### FSMState Class

- **Transition Mapping**: Uses a dictionary to map transitions to states. Methods like `AddTransition` and `DeleteTransition` manage these mappings.
- **Abstract Methods**: `Reason` and `Act` must be implemented by child classes. `Reason` checks if a state transition should occur, while `Act` executes state-specific actions.

### State Classes

- **Example - PatrolState**: Implements `Reason` and `Act` methods. `Reason` checks the distance to the player and transitions to `ChaseState` if close. `Act` handles movement and rotation towards patrol points.

### NPCTankController Class

- **State Setup**: Constructs FSM by creating instances of state classes and defining transitions using `AddTransition`.
- **Execution**: Calls `Reason` and `Act` of the current state during game updates, simplifying code management by avoiding complex conditional statements.

### Benefits

- **Modular Design**: States are encapsulated in separate classes, making the code more manageable and scalable.
- **Simplified Logic**: Eliminates extensive conditional logic, enhancing clarity and maintainability.

### Randomness and Probability in Games

- **Purpose**: Introduces unpredictability, enhancing gameplay experience by making AI behavior less predictable.
- **Random Number Generation**: Utilizes Pseudorandom Number Generators (PRNG) for game applications, providing sequences that mimic true randomness.
- **Unity's Random Class**: Offers methods like `Range` to generate random values within specified limits.

### Dice Game Example

- A simple Unity3D scene demonstrates randomness with a dice game, where players guess the dice roll outcome. Random numbers are generated using Unity's `Random.Range`.

### Probability Concepts

- **Definitions**: Probability is the likelihood of an event occurring, calculated as the ratio of successful outcomes to total possible outcomes.
- **Event Independence**: Events can be independent (e.g., dice rolls) or related (e.g., drawing cards from a deck), affecting probability calculations.

This chapter lays the foundation for using FSMs in game AI, emphasizing modularity and scalability, while also introducing randomness and probability to enhance game dynamics.



### Probability and Randomness in Game Design

#### Basic Probability Concepts
Understanding probability is crucial in game design, especially when dealing with events like dice throws. For instance, the probability of rolling two sixes with two dice is calculated by multiplying individual probabilities (1/6 * 1/6 = 1/36). Conditional probability explores scenarios like achieving a specific sum with dice; for example, a sum of seven has six possible combinations, resulting in a probability of 6/36 or 1/6.

#### Loaded Dice and Algorithms
Loaded dice alter the fairness by increasing the probability of certain outcomes. For example, if a dice is loaded to favor the number six, the probability might be adjusted to 0.34, with other numbers sharing the remaining probability. Implementing this involves generating a random number and returning six if it falls within a specific range.

#### Character Traits and Game Mechanics
Probability distributions can define character efficiencies in games, such as workers, scientists, and professionals, each excelling in different tasks. For example, a worker can complete construction tasks faster than a scientist. Special items can be discovered with varying probabilities, adding surprise elements to gameplay.

#### Finite State Machines (FSM) and AI Behavior
FSMs in AI can utilize probability to add unpredictability. Instead of a deterministic response, an AI tank might have a 50% chance to flee when spotting a player. This is implemented by generating random values to decide between possible actions, creating a more dynamic and engaging AI behavior.

#### Dynamic Difficulty Adjustment
Game difficulty can be adjusted by analyzing player performance, ensuring challenges match player skills. This keeps players in the "flow channel," where the game remains engaging without becoming too easy or hard. However, overly adjusting difficulty can detract from player satisfaction, as some players prefer overcoming challenging AI.

#### Slot Machine Mechanics
Slot machines use probability to determine outcomes, with a typical setup involving three reels and 10 symbols, resulting in 1,000 possible combinations. Winning typically requires matching symbols across reels. Real slot machines use a Paytable and Reel Strips (PARS) to balance payouts, ensuring the house wins in the long run while providing intermittent rewards to players.

#### Weighted Probability and Game Balance
To enhance player engagement, games often use weighted probabilities to increase the frequency of certain outcomes, like specific symbols on slot reels. This can create the illusion of frequent wins, maintaining player interest. However, designing these probabilities requires careful balance to ensure long-term profitability and player satisfaction.

### Conclusion
Incorporating probability into game design enhances player experience by introducing uncertainty and variability. Whether through loaded dice, AI behavior, or slot machines, understanding and manipulating probabilities can create more engaging and dynamic gameplay.



### Summary

In the discussed chapter, the focus is on implementing probability and randomness in game AI, specifically through a slot machine simulation using Unity3D. The slot machine is designed to manipulate player perception by disguising losses as small wins. Initially, the zero symbol had a 10% probability of appearing on the first and third reels, which was increased to 30% to skew outcomes. The `SlotMachineWeighted.cs` script manages the game mechanics, including reel spinning and bet checking, using weighted probability for symbol occurrence.

Key components include:
- **Probability Adjustment**: The zero symbol's probability is increased to 30%, affecting the outcome of spins.
- **Weighted Reel Poll**: An array list is used to distribute symbols according to their probability, allowing for random selection during spins.
- **Bet Checking Logic**: The `checkBet()` method evaluates the spin results based on several conditions: jackpot, disguised win, near miss, and matching symbols. A jackpot yields 50 times the bet, while a disguised win returns half the bet. Matching symbols on the first and third reels offer double the bet.

The slot machine's design aims to enhance player engagement by creating the illusion of frequent wins, despite actual losses. The chapter also explores the concept of a "near miss" to keep players invested, using visual and auditory cues to enhance the experience.

The latter part of the chapter introduces sensory systems in AI, focusing on how NPCs perceive their environment. This involves implementing basic senses like sight and touch to make AI behavior more realistic. The sensory system consists of two main elements:
- **Aspect and Sense**: Senses perceive specific aspects, such as sound or sight, to interact with the environment.
- **Implementation in Unity**: A demo is set up where NPCs use sensory systems to detect player presence and react accordingly. The `Sense` class serves as a base for specific senses, like `Sight`, which detects aspects within a field of view and distance.

The chapter concludes with a preview of the next topic—implementing sensors to enhance AI awareness of surroundings, crucial for decision-making and realistic behavior. Further reading is suggested for advanced probability techniques in game AI, such as Bayesian methods.

Overall, the chapter provides insights into using probability to influence game outcomes and enhance AI realism through sensory systems, demonstrating practical applications in Unity3D.



### Summary

This text explores implementing sensory systems and flocking behaviors in game AI using Unity3D. It focuses on two senses for AI characters: Sight and Touch, and discusses a flocking system inspired by Craig Reynolds' algorithm.

#### Sensory Systems

**Sight Sense**:
- **DetectAspect Method**: Uses raycasting to determine if a player is within the AI's field of view. The AI checks the angle between its forward vector and the direction to the player. If within view, a ray is cast to detect the player, considering obstacles that might block sight.
- **OnDrawGizmos Method**: Visualizes the AI's line of sight in the Unity editor using debug lines.
- **Implementation**: Attach the script to an AI character and set the aspect name to "Enemy" to detect players.

**Touch Sense**:
- **Touch.cs**: Triggered when the player is within a specific range of the AI. It uses a box collider with the IsTrigger flag enabled.
- **OnTriggerEnter Method**: Detects collision events with the player and prints "Enemy Touch Detected" when the player's aspect matches the AI's target aspect.

**Testing**: In Unity3D, moving the player tank near the AI character triggers console messages indicating detection by sight or touch.

#### Flocking Behavior

**Overview**:
- **Concept**: Simulates the movement of a group of objects (boids) as a cohesive unit, mimicking natural flocking behaviors.
- **Rules**:
  - **Separation**: Prevents collisions by maintaining a minimum distance between boids.
  - **Alignment**: Aligns each boid's direction with the average direction of the flock.
  - **Cohesion**: Moves boids towards the center of the flock's mass.

**Implementation**:
- **UnityFlock.cs**: Controls individual boid behavior using variables for speed, force, and distance to implement the flocking rules. It calculates velocities and updates positions based on cohesion, alignment, and separation.
- **UnityFlockController.cs**: Manages the flock's movement by updating its position and directing boids towards a random destination within set boundaries.

**Alternative Implementation**:
- Utilizes Unity's physics engine with rigidbody components to simplify code and prevent boid overlap, allowing for more realistic movement and interactions.

#### Conclusion

The chapter introduces sensory systems as part of a larger AI decision-making framework, suggesting further integration with behavior systems. The flocking behavior demonstration shows how simple rules can lead to complex group dynamics, a key concept in emergent behavior. Future chapters will expand on these ideas, exploring behavior trees and flocking algorithms in more detail.



### Summary

The text provides a detailed explanation of implementing flocking behavior in Unity using a combination of C# scripts and Unity components. The flocking behavior is based on Craig Reynolds' algorithm, which includes separation, cohesion, and alignment, as well as following a leader. The implementation involves two main scripts: `Flock.cs` and `FlockController.cs`.

#### Flock Script

- **Purpose**: Manages individual boid behavior within the flock.
- **Key Components**:
  - **Rigidbody**: Used to apply physics-based movement.
  - **Steer Method**: Calculates the boid's velocity by considering cohesion (moving towards the flock center), alignment (matching velocity with the flock), separation (avoiding crowding), and following a leader. Randomization is added for natural movement.
  - **Velocity Control**: Ensures boid speeds remain within specified minimum and maximum limits.

#### FlockController Script

- **Purpose**: Manages the overall flock's behavior and properties.
- **Key Components**:
  - **Properties**: Includes velocity limits, flock size, and weights for different behaviors.
  - **Instantiation**: Creates boid instances and assigns them to a list for management.
  - **Update Method**: Continuously calculates the average center and velocity of the flock to adjust individual boid behavior accordingly.

#### Target Movement

- **Script**: `TargetMovement.cs` controls a moving target for the flock to follow.
- **Functionality**: Moves the target to random points within a defined boundary, guiding the flock's movement dynamically.

### Path-Following and Steering Behaviors

The text also introduces path-following and obstacle avoidance as essential steering behaviors in game development.

#### Path-Following

- **Path Script**: Manages a sequence of waypoints for entities to follow.
- **VehicleFollowing Script**: Controls an entity's movement along the path. It calculates acceleration and adjusts velocity based on proximity to waypoints, allowing for smooth transitions and looping paths.

#### Obstacle Avoidance

- **Setup**: Involves creating obstacles and an agent that navigates around them using raycasting.
- **Limitations**: The method only avoids obstacles directly in front of the agent, which can lead to challenges in complex environments.

Overall, the text emphasizes the flexibility of flocking algorithms for various applications, such as simulating birds, fish, or crowds. It also highlights the importance of path-following and obstacle avoidance in creating realistic and interactive game environments. These foundational behaviors are crucial for developing more advanced navigation systems in future chapters.



# Summary

In this text, we explore the implementation of path-following and steering behaviors in Unity3D, focusing on obstacle avoidance and the A* pathfinding algorithm. The discussion begins with setting up layers for game objects, specifically using layers for raycasting to detect obstacles. By assigning a layer to objects, such as "Obstacles," we can selectively interact with them, ignoring non-obstacles like vegetation.

## Obstacle Avoidance

The obstacle avoidance script for a cube entity is introduced, detailing how the entity avoids walls. The script initializes properties such as speed, mass, and force, and uses a raycasting method to detect obstacles within a certain distance. The `AvoidObstacles` method calculates a new direction vector when an obstacle is detected, using the normal vector of the hit point and applying a force to change the direction.

The script updates the entity's position and rotation based on mouse input, using raycasting to determine the target position. It calculates the direction to the target and calls the `AvoidObstacles` method to adjust for any obstacles. The entity then moves towards the target position if no obstacles are detected.

## Layer Masks in Unity3D

Unity3D uses layers and layer masks to manage interactions between objects. A layer mask is a 32-bit integer representing which layers to consider during operations like raycasting. By using bitwise operations, specific layers can be targeted. For example, setting a bitmask to target layer 8 involves shifting a bit to the left by 8 positions. This allows for precise control over which objects interact with raycasts.

## A* Pathfinding Algorithm

The text transitions to implementing the A* pathfinding algorithm, which is widely used for its efficiency in finding paths in games. The algorithm works by representing the world as a simplified 2D grid, with nodes representing traversable or obstacle tiles. The `Node` class stores information such as position, cost, and whether it's an obstacle.

The A* algorithm uses two lists: an open list for nodes to be explored and a closed list for visited nodes. The algorithm calculates the total cost (F) for each node, combining the cost from the start node (G) and the estimated cost to the target (H). Nodes are processed in order of their F value, using a priority queue to manage them efficiently.

The `PriorityQueue` class manages the open list, ensuring nodes are sorted by their estimated cost. The `GridManager` class handles the 2D grid, using a singleton pattern to maintain a single instance representing the map.

## Conclusion

This chapter provides foundational techniques for building path-following agents with obstacle avoidance in Unity3D. By understanding layers, raycasting, and implementing simple avoidance behaviors, developers can create dynamic simulations like traffic or crowd systems. The introduction of the A* algorithm sets the stage for more complex pathfinding, which will be further explored in subsequent chapters.

The text emphasizes practical applications of these techniques, suggesting their use in various scenarios, such as vehicle simulations on roads or crowd dynamics with biped characters. The combination of these methods with finite state machines can lead to more intelligent and responsive AI behaviors in interactive environments.



# Summary

This document describes the implementation of an A* pathfinding algorithm in Unity3D, focusing on the creation and management of a grid-based map system. Key components include the `GridManager` for handling grid nodes, obstacles, and visualization, and the `AStar` class for executing the pathfinding algorithm.

## Grid Setup

- **Variables and Initialization**: The grid is defined by the number of rows and columns, grid tile size, and boolean flags for visualization. Nodes are stored in a 2D array.
- **Obstacle Detection**: Obstacles are identified using Unity's tagging system. The `CalculateObstacles` method marks grid nodes as obstacles based on their positions.

## Helper Methods

- **Grid Cell Operations**: Methods like `GetGridCellCenter`, `GetGridCellPosition`, and `GetGridIndex` manage grid cell data, converting between grid indices and world positions.
- **Neighbor Retrieval**: `GetNeighbours` retrieves adjacent nodes, excluding obstacles, aiding the pathfinding process.

## Visualization

- **Debugging with Gizmos**: The `OnDrawGizmos` method visualizes the grid and obstacles using Unity's Gizmos, providing a visual aid during development.

## A* Pathfinding Algorithm

- **Data Structures**: Uses a `PriorityQueue` for open nodes and a `HashSet` for closed nodes.
- **Heuristic Function**: `HeuristicEstimateCost` calculates the estimated cost between nodes using vector magnitude, ensuring the heuristic is admissible.
- **Pathfinding Process**: 
  - Initializes with the start node.
  - Iteratively processes nodes with the lowest cost.
  - Updates costs and parent nodes for neighbors.
  - Constructs the path once the goal is reached using `CalculatePath`.

## Testing and Visualization

- **TestCode Class**: Implements a test scenario using start and end nodes, updating paths at set intervals.
- **Path Visualization**: Draws the calculated path in the Scene view using `Debug.DrawLine`.

## Scene Setup

- **Unity Scene Configuration**: Demonstrates setting up a Unity scene with obstacles, start, and end nodes, using tags for identification.
- **GridManager Configuration**: Configures grid parameters in the Unity Inspector for testing.

## Conclusion

The chapter concludes with a discussion on the benefits of using Unity's NavMesh for pathfinding. NavMeshes offer a more efficient and natural pathfinding solution by using convex polygons instead of a grid. This approach is now available in Unity's free version, enhancing accessibility for developers.

The document emphasizes the importance of understanding basic pathfinding algorithms like A* to leverage advanced techniques such as Unity's NavMesh for AI pathfinding.




### Navigation Mesh Setup and Baking

To set up a navigation mesh (NavMesh) in Unity, mark static obstacles as "Navigation Static" to inform the NavMesh generator about areas to avoid. Access the Navigation window via `Window | AI | Navigation` to configure properties like agent radius and slope. Default values can be used initially, and clicking "Bake" will generate the NavMesh.

### Adding AI Agents

With the NavMesh set, add AI agents, such as a tank model or a simple shape, and attach the Nav Mesh Agent component. This automates pathfinding by setting a destination property. The agent will navigate the mesh, avoiding obstacles.

### Updating Agent Destinations

Use a `Target.cs` script to update agent destinations based on mouse clicks. It detects mouse clicks, performs a raycast to find the clicked position, and updates the destination for all agents. This allows agents to move toward the clicked location while avoiding static obstacles.

### Working with Slopes and Navigation Areas

Ensure slopes are well-connected to avoid gaps in the NavMesh. Adjust the Max Slope property to control agent movement over slopes. Navigation areas can be defined with different costs, influencing pathfinding decisions. For instance, crossing water can be made more costly than using a bridge, encouraging agents to choose easier paths.

### Off Mesh Links

Off Mesh Links bridge gaps in the NavMesh, allowing agents to traverse disconnected areas. These can be autogenerated or manually set. In manual setup, spheres are used as start and end points, and an Off Mesh Link component is added to connect them. This enables agents to teleport across gaps.

### Behavior Trees for AI

Behavior Trees (BTs) offer a scalable method for AI decision-making, overcoming the limitations of Finite State Machines (FSMs). BTs consist of nodes that return success, failure, or running states. Nodes can be leaves (actions), decorators (modifiers), or composites (with multiple children). The Blackboard data structure facilitates information exchange between nodes.

### Example: Patrolling Robot

A patrolling robot BT might have a sequence to check if it's night and if a target is close. If the target is close and it's not night, the robot could engage. This structure allows complex behaviors to be managed efficiently.

### Conclusion

This chapter covers setting up NavMeshes, using Nav Mesh Agents for pathfinding, and employing Off Mesh Links for navigation continuity. It introduces Behavior Trees as a superior alternative to FSMs for complex AI behaviors, emphasizing their scalability and maintainability.



### Summary

Behavior Trees (BTs) are essential for AI in game development, allowing for structured decision-making processes. This text provides a detailed guide on implementing BTs in Unity using the Behavior Bricks plugin, developed by the Complutense University of Madrid. Behavior Bricks offers a visual editor to create and connect nodes without additional coding.

**Installation and Setup:**
1. **Install Behavior Bricks**: Access the Unity Asset Store, search for Behavior Bricks, download, and import it into your project.
2. **Scene Setup**: 
   - Add objects like a plane (Floor), a sphere (Player), and a cube (Enemy) to the scene.
   - Create a `shootPoint` for the Enemy.
   - Implement a NavMesh for movement and ensure the Directional light has the MainLight tag.

**Implementing a Day/Night Cycle:**
- Attach a script to the Direct Light object to simulate a day/night cycle using a sinusoidal wave to adjust light intensity and trigger an `OnChanged` event for transitions.

**Designing Enemy Behavior:**
- Draft a BT for enemy behavior:
  - Deactivate at night.
  - Shoot if the target is very close.
  - Chase if the target is further away.
  - Wander if no target is nearby.
- Sequence nodes from most to least restrictive conditions.

**Node Implementation:**
- **Pre-existing Nodes**: Utilize Behavior Bricks' built-in nodes like `IsTargetClose`, `MoveToGameObject`, `Wander`, and `AlwaysTrue`.
- **Custom Nodes**: 
  - **ShootOnce**: Create a bullet and set its velocity.
  - **Shoot**: Extend `ShootOnce` for continuous shooting with a delay.
  - **SleepForever**: A non-consuming action that never ends.
  - **IsNightCondition**: Checks if it's night by monitoring light changes and suspending BT execution until conditions change.

**Building the Tree:**
- Use the BT editor to create and connect nodes according to the designed behavior.
- Set input parameters for nodes using either constant values or blackboard references.

**Attaching the BT to the Enemy:**
- Add a Behavior Executor component to the Enemy object.
- Link the created BT and set blackboard parameters (e.g., `player`, `floor`, `shootPoint`, `bullet`) to appropriate objects.

**Conclusion:**
This chapter explores BTs' role in game AI, demonstrating their implementation through a Unity demo involving a player and a patrolling robot with a day/night cycle. BTs are fundamental to modern game AI, and Behavior Bricks offers a user-friendly way to integrate them into projects.

**External Resources:**
- Behavior Bricks project and documentation.
- Articles and chapters on BTs and AI for further exploration.

Machine learning's relevance in AI is briefly mentioned, highlighting its increasing integration into various technologies, including games.



# Summary

The Unity Machine Learning Agents Toolkit (ML-Agents Toolkit) is a comprehensive set of tools designed to facilitate the creation of autonomous game agents using machine learning algorithms. It integrates seamlessly with Unity, eliminating the need for external frameworks. The toolkit focuses on reinforcement learning, a method where agents learn by receiving rewards or punishments based on their actions, analogous to training a dog with rewards.

## Key Components of ML-Agents Toolkit

1. **Unity Plugin**: Found in the UnitySDK subfolder, this plugin integrates the toolkit with Unity.
2. **Python Package**: Provides an interface for Unity and TensorFlow trainers, stored in the ml-agents folder.
3. **OpenAI Gym Interface**: Located in the gym-unity folder, it supports training reinforcement learning agents.

## Installation Process

### Windows
- Use Anaconda to install Python 3.6, as the toolkit is compatible with this version.
- Set up an Anaconda environment with `conda create -n ml-agents python=3.6`.
- Install TensorFlow using `pip install tensorflow==1.7.1`.
- Clone the ML-Agents Toolkit repository and install dependencies with `pip install .`.

### macOS and Linux
- Install Python 3.6 and run `pip3 install .` in the ml-agents folder.

## Using the ML-Agents Toolkit

### Core Entities

- **Agent**: The central object that performs actions, receives environmental information, and rewards.
- **Brain**: Determines the agent's actions. Types include Player, Heuristic, External, and Internal modes.
- **Academy**: Manages training configurations and scenario parameters.

### Creating a Scene

1. Create a simple 3D scene in Unity.
2. Add a Rigidbody component to the sphere.
3. Create an Academy object and a Brain object within it.
4. Implement scripts for agent behavior and the Academy.

### Implementing Agent Behavior

- **SphereAcademy Script**: Sets up the training environment.
- **SphereAgent Script**: Manages agent actions, observations, and rewards. It includes methods like `AgentReset`, `CollectObservations`, and `AgentAction`.

### Training the Agent

- Change the Brain Type to External.
- Use the command `mlagents-learn config/trainer_config.yaml --run-id=firstRun --train` to start training.
- After training, switch the Brain Type to Internal to use the trained model.

## Final Steps

Connect all components:
- Attach the SphereAgent script to the sphere.
- Connect the Brain object to the SphereAgent.
- Set the Decision Frequency and link the target object.

## Training and Running the Model

- Train the agent by pressing Play in Unity and running the command-line interface.
- After training, use the trained model to observe the agent's learned behavior.

## Conclusion

This chapter introduces the basics of using the ML-Agents Toolkit in Unity, covering installation, setup, and training. While it provides a foundational understanding, further exploration of the toolkit's capabilities is encouraged. For more detailed information, refer to the ML-Agents documentation and additional resources on reinforcement learning.

For a more advanced application, the next chapter will involve integrating AI into a complex game scenario, using techniques like navigation meshes and finite-state machines.




# Summary

This chapter focuses on enhancing a simple tank combat game by integrating AI techniques, specifically using Unity's navigation meshes and finite state machines (FSM). The process begins by familiarizing oneself with the existing game project, understanding its structure, scripts, and components. This foundational knowledge is crucial for making modifications and implementing new features effectively.

## Automated Navigation

The first significant task is adding automated navigation to the game. Initially, all tanks are user-controlled, but introducing AI requires a world representation for AI movement. This is achieved using NavMeshes, which facilitate pathfinding on a flat ground surface. Key steps include:

1. **NavMesh Creation**: Open the Navigation window to adjust parameters, particularly the baking agent size, to accommodate the tanks' dimensions. Set an Agent Radius of 1.8 and a Max Slope of 20, then bake the NavMesh.

2. **Patrolling Points**: Create empty GameObjects tagged as `PatrolPoint` to define paths for AI tanks.

## AI Agent Setup

Since the game lacks built-in AI support, an AI-controlled agent must be added manually:

1. **Prefab Duplication**: Copy the `CompleteTank` prefab, rename it `CompleteTankAI`, and add a NavMesh Agent component for movement.

2. **Script Modifications**: Adjust the `TankShooting` and `TankMovement` scripts by introducing a Boolean variable `m_IsAI` to disable player input and manage AI-specific actions like shooting with a constant force.

3. **GameManager Adjustments**: Update the GameManager script to spawn both player and AI tanks by adding a new AI tank prefab variable and modifying the `SpawnAllTanks` function.

## Decision-Making AI with FSM

The AI uses a simple FSM with two states: patrolling and shooting. The AI tank starts in the Patrol state, moving between patrol points. If a player enters its range, it switches to the Attack state, targeting and shooting at the player. If the player exits the range, the AI reverts to patrolling.

### FSM Implementation

1. **FSM Class**: Create a base FSM class extending `Complete.TankMovement` to handle core functionalities like patrol point management and state transitions.

2. **AITankController Script**: Develop a script that extends the FSM class, managing states (Patrol, Attack, Dead) and actions. The script uses Unity’s physics engine to detect players and switch states accordingly.

3. **State Functions**: Implement functions for each state, handling transitions, targeting, and shooting.

## Conclusion

The chapter demonstrates applying AI techniques in Unity, providing a foundation for more complex implementations. Suggestions for further enhancements include adding a Chasing state or replacing the FSM with a Behavior Tree. This project serves as a starting point for exploring AI in game development, encouraging experimentation and refinement.

For further learning, additional resources like "Unity 2018 Artificial Intelligence Cookbook" and "Unity 2018 Cookbook" are recommended. These resources offer insights into advanced AI techniques and Unity features, promoting continued growth in game development skills.



# Summary of AI Techniques and Implementations

## Overview of Artificial Intelligence (AI) in Games
Artificial Intelligence (AI) is pivotal in game development, employing various techniques to create realistic and engaging experiences. Key AI techniques include A* pathfinding, Behavior Trees (BTs), Finite State Machines (FSMs), and sensor systems. These techniques are utilized to simulate character behaviors, navigation, and decision-making processes.

## Pathfinding and Navigation
### A* Pathfinding
- **A* Algorithm**: A widely used pathfinding and graph traversal algorithm, essential for navigation.
- **Components**: Includes classes like `AStar`, `GridManager`, `Node`, and `PriorityQueue`.
- **Implementation**: Involves setting up scenes and classes to facilitate smooth navigation.

### Navigation Meshes
- **NavMesh**: Used for automated navigation, allowing characters to move efficiently within a game environment.
- **Setup**: Involves creating agents and setting up navigation areas to manage character movement.

## AI Character Behavior
### Finite State Machines (FSMs)
- **FSM Framework**: Utilized for decision-making AI, involving states, transitions, and events.
- **Classes**: Includes `AdvanceFSM`, `FSMState`, and `NPCTankController`.

### Behavior Trees (BTs)
- **Structure**: Composed of nodes like sequence, selector, and parallel decorator.
- **Implementation**: Used in designing complex behaviors such as enemy patrolling and day/night cycles.

### Flocking and Steering Behaviors
- **Flocking**: Simulates group movement with behaviors like alignment, cohesion, and separation.
- **Steering**: Involves path following, obstacle avoidance, and dynamic AI adjustments.

## AI Techniques and Tools
### Sensor Systems
- **Components**: Include messaging and polling systems, enabling characters to perceive their environment.
- **Senses**: Sight and touch senses are implemented to enhance AI awareness.

### Probability and Randomness
- **Probability**: Used in decision-making processes, incorporating conditional probabilities and event dependencies.
- **Randomness**: Implemented using pseudorandom number generators (PRNG) and cryptographically secure methods.

## Game Development Tools and References
### Unity and Machine Learning
- **Unity ML-Agents Toolkit**: Facilitates AI training and simulation using Python and TensorFlow.
- **Physics Engine**: Supports behavioral simulations like flocking and obstacle avoidance.

### Additional Tools
- **OpenAI Gym**: Provides a platform for developing and comparing reinforcement learning algorithms.
- **Pip3 and TensorFlow**: Essential for setting up machine learning environments.

## Conclusion
AI in game development leverages a range of techniques and tools to create immersive and intelligent character behaviors. By integrating pathfinding, FSMs, BTs, and sensor systems, developers can enhance gameplay dynamics and realism. Unity and other development platforms offer robust support for implementing these AI strategies effectively.
