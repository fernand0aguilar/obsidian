
**Unity Artificial Intelligence Programming (Fourth Edition)** focuses on integrating AI into games using Unity 2018. The book is authored by Dr. Davide Aversa, Aung Sithu Kyaw, and Clifford Peters, and published by Packt Publishing. It covers a range of AI techniques applicable to game development, emphasizing practical implementation in Unity.

### Key Topics Covered:

- **AI in Games**: The book discusses the unique application of AI in games compared to other fields, focusing on creating believable and interactive AI entities.

- **Finite State Machines (FSMs)**: FSMs are used to manage AI decisions by defining states and transitions. The book details implementing FSMs for game characters, including patrol, chase, attack, and dead states.

- **Randomness and Probability**: Techniques for incorporating randomness in games to enhance unpredictability are discussed. This includes understanding probability, independent events, and conditional probability.

- **Sensors**: The book covers implementing sensory systems for game characters, enabling them to perceive their environment through sight and touch, influencing their behavior.

- **Flocking**: Techniques for simulating group behaviors, such as flocking, swarming, and herding, are explored. The book provides methods for implementing these behaviors in Unity.

- **Path-Following and Steering**: Methods for AI characters to follow paths and avoid obstacles are presented. This includes using custom layers and obstacle avoidance strategies.

- **A* Pathfinding**: The book revisits the A* algorithm, a popular method for finding optimal paths in games. It provides a detailed implementation guide, including scene setup and testing.

- **Navigation Mesh**: Utilizing Unity’s navigation mesh to simplify pathfinding is discussed. This includes setting up maps, baking navigation meshes, and managing navigation areas and off-mesh links.

- **Behavior Trees**: Expanding on FSMs, behavior trees are introduced for managing complex AI behaviors. The book uses the Behavior Bricks plugin to implement these trees in Unity.

- **Machine Learning**: The book explores using Unity’s ML-Agents Toolkit for applying machine learning, specifically reinforcement learning, to game characters. It includes setup instructions and a practical example.

- **Integration**: The final chapter combines all learned elements into a comprehensive project, demonstrating the integration of AI techniques into a game.

### Additional Resources:

- **Code and Assets**: Example code and assets are available for download to support learning and implementation.

- **Tools and Plugins**: The book requires Unity 2018.2 or higher, Behavior Bricks for behavior trees, and Python 3.6 for machine learning sections.

### Authors and Expertise:

- **Dr. Davide Aversa**: Holds a Ph.D. in AI with expertise in interactive virtual agents and procedural content generation.
- **Aung Sithu Kyaw**: Specializes in graphics programming and interactive media.
- **Clifford Peters**: Experienced in reviewing Unity development books and game programming.

The book is designed for individuals with prior Unity experience and familiarity with C#. It aims to enhance game development skills by incorporating advanced AI techniques. Readers can access additional resources, updates, and support through Packt Publishing’s platforms.



Artificial Intelligence (AI) aims to enable computers to think and decide like living organisms, with applications varying across domains. Key AI research areas include:

- **Computer Vision**: Analyzing visual inputs for operations like facial and object recognition.
- **Natural Language Processing (NLP)**: Understanding human languages, addressing challenges like language ambiguity.
- **Common Sense Reasoning**: Drawing inferences from incomplete knowledge, a complex task for machines.

In gaming, AI enhances the fun factor by providing challenging opponents and realistic Non-Player Characters (NPCs). AI in games should balance computational demands with real-time processing needs, sharing resources with graphics and physics simulations. Techniques like Finite State Machines (FSMs) are common, providing a framework for state transitions in game entities, though they can become complex with numerous states.

**Randomness and Probability**: Introducing randomness in AI decisions prevents predictability, maintaining game challenge and fairness. It can be used for decision-making when information is insufficient or to simulate realistic behaviors.

**Sensor Systems**: AI characters gather environmental data to make decisions, using polling or event-driven messaging systems. Polling checks information directly, suitable for simpler games, while messaging systems efficiently handle complex interactions by broadcasting events to interested AI agents.

**Flocking, Swarming, and Herding**: Inspired by natural behaviors, these techniques use simple rules (separation, alignment, cohesion) to simulate complex group dynamics, reducing animation effort.

**Path Following and Steering**: AI characters navigate game worlds using steering behaviors, categorized into action selection, steering, and locomotion layers. Techniques include seek, flee, pursue, evade, and obstacle avoidance.

**A* Pathfinding**: A* is a popular algorithm in games for finding paths while avoiding obstacles, balancing performance and accuracy. It involves mapping environments into grids to navigate from start to goal points.

These AI methodologies contribute to creating engaging, dynamic, and realistic gaming experiences, requiring careful optimization and integration with other game systems.



The text discusses AI pathfinding techniques, focusing on A* algorithm, waypoints, and navigation meshes. It begins by explaining A* pathfinding using a 2D grid of square tiles. Each tile has a movement score calculated using G (the cost from the start to the current tile) and H (the estimated cost from the current tile to the target), summed to form F (F = G + H). The Manhattan method is used to estimate H, and the algorithm chooses the tile with the lowest F score to move towards the target. The process involves iterating over adjacent tiles, calculating scores, and tracing back from the target tile using parent tiles to find the shortest path.

The text highlights the limitations of A* on large maps due to computational demands, leading to the use of waypoints, which guide AI characters from start to target points. Waypoints reduce computation but can be problematic with dynamic obstacles and lack environmental information, potentially causing AI to get stuck.

A navigation mesh is introduced as a more effective solution. It uses convex polygons to represent traversable areas, providing more environmental information and allowing different AI entities to use the same mesh. Unity offers a built-in navigation mesh generator, simplifying implementation.

Behavior trees are discussed as an alternative to finite state machines (FSMs) for controlling AI logic. They provide a scalable approach to complex AI behavior, using tasks linked by control flow nodes like Sequence, Selector, and Parallel. Behavior trees offer flexibility and reusability, unlike FSMs, which can become cumbersome with many states and transitions.

The text also touches on locomotion, explaining how realistic movement is achieved in games. Unity's locomotion system extension blends animations and adjusts bone movements to ensure accurate foot placement on various surfaces, enhancing realism.

Finally, the text distinguishes between game AI and academic AI. Game AI aims to create challenging opponents for entertainment, while academic AI seeks to solve real-world problems. Various AI techniques used in games, such as FSMs, pathfinding, and behavior trees, are mentioned, with future chapters in the book exploring their implementation in Unity.




### Player's Tank Setup
The player's tank is composed of a tank body and a turret, allowing independent turret rotation using mouse movement. The tank uses a Rigidbody and Box Collider, with a SpawnPoint for bullet firing. The PlayerTankController class manages tank controls, utilizing W, A, S, D keys for movement and the left mouse button for shooting.

### Initialization and Update
The `PlayerTankController` class initializes turret and bullet spawn points. The `Update` function calls `UpdateWeapon` and `UpdateControl` to manage shooting and movement. Shooting is controlled by checking elapsed time against a fire rate, creating a Bullet object when conditions are met.

### Tank Control and Raycasting
Turret rotation uses raycasting to determine direction based on mouse position. A plane is generated to intersect the tank's position, and a ray is cast from the cursor to find the intersection point, which determines turret rotation. Movement is controlled by key inputs, adjusting speed and rotation.

### Bullet Class
The Bullet class includes properties for damage, speed, and lifetime. It uses `OnCollisionEnter` to trigger an explosion effect on impact, utilizing a prefab for visual effects. The `AutoDestruct` script automatically destroys objects after a set time.

### Waypoints and FSM
Waypoints are represented by Cube objects tagged as `WandarPoint`, used by tank AI to patrol the scene. The FSM (Finite State Machine) framework governs AI behavior, with states like Patrol, Chase, Attack, and Dead. The `FSM` class provides a structure for AI operations, requiring methods like `Initialize`, `FSMUpdate`, and `FSMFixedUpdate`.

### Enemy Tank AI
The `SimpleFSM` class extends `FSM`, implementing AI logic. Tanks patrol waypoints, chase the player when in range, and attack when close. The `UpdatePatrolState` and `UpdateChaseState` methods manage transitions between states based on player distance. The `UpdateAttackState` handles turret rotation and shooting.

### Attack and Dead States
In the Attack state, the turret rotates towards the player, and bullets are fired. The Dead state triggers an explosion effect when health reaches zero, using `Explode` to apply physics forces and destroy the tank.

### Damage Handling
Tanks take damage from bullet collisions, reducing health based on bullet damage. The player's tank is immune to AI attacks in the current setup, but AI tanks will explode when their health is depleted.

### FSM Framework
The framework is adapted from a C# FSM framework, focusing on managing state transitions and AI behavior. The `AdvanceFSM` and `FSMState` classes form the core of the framework, providing a structured approach to implementing AI logic.



The framework for managing FSMState classes in AI tanks involves declaring transitions and states in the `AdvancedFSM.cs` file. Transitions include `SawPlayer`, `ReachPlayer`, `LostPlayer`, and `NoHealth`, while states include `Patrolling`, `Chasing`, `Attacking`, and `Dead`. The `AdvancedFSM` class maintains a list of FSMState objects, and the current state is updated via the `PerformTransition` method.

The `FSMState` class manages state transitions using a dictionary to map transitions to states. Methods like `AddTransition`, `DeleteTransition`, and `GetOutputState` facilitate this mapping. Child classes must implement the abstract methods `Reason` and `Act`, which determine state transitions and execute tasks, respectively.

State classes like `PatrolState`, `ChaseState`, `AttackState`, and `DeadState` inherit from `FSMState` and implement specific behaviors in their `Reason` and `Act` methods. For example, `PatrolState` checks player proximity and transitions to `ChaseState` if necessary, while `Act` involves updating destination points and moving the AI tank.

The `NPCTankController` class inherits from `AdvancedFSM`, setting up states and transitions using the `ConstructFSM` method. This setup allows for a modular approach where the `Reason` and `Act` methods are called in each game update cycle, eliminating the need for extensive conditional statements.

The framework's main steps include declaring transitions and states, writing state classes, implementing `Reason` and `Act` methods, creating and adding states, and calling the current state's methods during updates. This approach organizes code efficiently, making it scalable for larger projects.

In the context of randomness and probability, game AI uses these concepts to introduce unpredictability. Computers use Pseudorandom Number Generators (PRNGs) to simulate randomness. Unity’s `Random` class provides methods like `InitState`, `value`, and `Range` for generating random numbers. A simple dice game demonstrates these concepts, generating random numbers and checking them against user input.

Probability is defined as the frequency of an event occurring over repeated observations. It ranges between 0 and 1, where 0 means no chance, and 1 means certainty. Independent events, like rolling a die, do not affect each other's outcomes, while related events, like drawing cards from a deck, do.

This framework and understanding of randomness and probability are crucial for developing dynamic and realistic AI behaviors in games.



In probability, the likelihood of events A and B both occurring is found by multiplying their individual probabilities. For example, the probability of rolling two sixes with two dice is \( \frac{1}{6} \times \frac{1}{6} = \frac{1}{36} \). Conditional probability considers specific outcomes, like the sum of dice equaling seven, which occurs in six out of 36 possible outcomes, giving a probability of \( \frac{6}{36} = \frac{1}{6} \).

When using loaded dice, probabilities are adjusted to favor certain outcomes. For example, a loaded die might have a 34% chance of landing on six, with other sides having equal probabilities. This can be implemented programmatically to simulate randomness with weighted outcomes.

In game design, probability extends beyond dice to character attributes and AI behavior. For instance, character efficiencies in tasks like construction or research are assigned probabilities, affecting gameplay outcomes. Special items can be discovered with certain probabilities, adding an element of surprise and engagement for players.

Finite State Machines (FSMs) can incorporate randomness to make AI behavior less predictable. An AI tank might have a 50% chance to flee or chase a player, creating dynamic gameplay. This can be implemented by generating random numbers to decide actions, similar to drawing lottery numbers.

Dynamic AI adjusts difficulty based on player performance, keeping players in a "flow channel" where challenges match their skill levels. Adjusting AI aggressiveness or behavior probabilities can maintain engagement, though some players prefer consistent difficulty for a greater sense of achievement.

Slot machines illustrate randomness in gaming, using symbols and reels to determine outcomes. A basic slot machine generates random numbers for each reel, with a win requiring matching symbols. Real machines use Paytable and Reel Strips (PARS) to manage payouts and ensure the house retains a long-term advantage while providing intermittent rewards to players.

Weighted probabilities in slots can make certain symbols appear more frequently, enhancing the gaming experience by increasing perceived chances of winning. This approach balances player engagement with the machine's profitability.

Overall, randomness and probability are crucial in game design, influencing mechanics, AI behavior, and player experience to create engaging and dynamic gameplay environments.



The text discusses the implementation of a slot machine game in Unity3D, focusing on probability manipulation and sensory systems for AI characters. The slot machine game logic involves adjusting the probability of symbols appearing on the reels to create different outcomes, such as jackpots, near misses, and losses disguised as wins. The probability of a zero symbol appearing on the first and third reels is increased to 30%, affecting game outcomes and player perception.

The code snippet provided shows how to set up a weighted reel system using an array list to manage symbol distribution. The `checkBet()` method evaluates different conditions to determine the result of a spin, including jackpots and disguised losses. The method adjusts player credits based on the outcome, enhancing the player's experience with visual effects.

In the AI sensory system, the text introduces the concept of implementing basic sensory mechanisms like sight and touch in game characters. These sensory systems allow AI characters to interact with their environment more realistically. The system comprises two main components: Aspect and Sense. The Aspect class defines what the AI senses, while the Sense class is an interface for implementing specific senses.

A demo setup includes a scene with obstacles, a player tank, and AI characters. The player tank is controlled using a script that responds to mouse clicks, moving towards a target position. The AI characters use a Wander script to move randomly within the scene, simulating autonomous behavior.

The sensory system's implementation involves creating a base Sense class with methods for initialization and updating senses. The Sight sense checks if a specific aspect is within the character's field of view and takes action if detected. The sensory system enhances AI realism by allowing characters to perceive and respond to their environment dynamically.

Overall, the chapter emphasizes using probability and sensory systems to create engaging and realistic game experiences, with a focus on modular code design for maintainability and efficiency. The text concludes with a brief mention of further reading on advanced probability techniques in game AI and a transition to implementing sensors for enhanced AI awareness in the next chapter.



In game AI development, implementing sensory systems is crucial for decision-making. This text discusses the implementation of two senses for AI characters: Sight and Touch. The Sight sense uses raycasting to detect players within the AI's field of view. By calculating the angle between the AI's forward vector and the player's position, and checking for obstructions, the AI can determine if a player is visible. This is visualized using the `OnDrawGizmos` method, which draws the AI's line of sight in Unity3D's editor.

The Touch sense is triggered when a player enters a specified range. This is achieved using Unity's collider system, where the AI's collider detects collisions with the player's collider. Upon collision, the AI checks if the detected object has the desired aspect, and a message is printed to the console for testing purposes.

The text also introduces flocking behavior, a system where multiple AI entities, called boids, move cohesively as a group. This behavior is based on Craig Reynold's algorithm, which uses three rules: Separation, Alignment, and Cohesion. Separation prevents collisions by maintaining a minimum distance between boids. Alignment ensures boids move in the same direction, and Cohesion keeps boids close to the group's center of mass.

In Unity3D, flocking is implemented by creating a scene with boid entities controlled by a central UnityFlockController. Each boid follows simple rules to simulate flocking behavior. The UnityFlock script defines movement parameters, such as speed and force, and calculates the boid's velocity based on neighboring boids and random forces. The controller updates the boids' movement points, ensuring realistic flock dynamics.

An alternative implementation uses Unity's physics engine with rigidbody components to manage boid movement and prevent overlap. This approach simplifies code by leveraging Unity's built-in physics properties for translation and steering.

Overall, these systems demonstrate how sensory and flocking behaviors can enhance AI realism and interactivity in games, providing a foundation for more complex decision-making processes.



The text provides a detailed explanation of implementing flocking behavior using Unity3D, focusing on the `Flock` and `FlockController` scripts. The `Flock` script manages individual boid behavior, utilizing a `Rigidbody` component for movement and implementing separation, cohesion, and alignment rules. The `steer()` method calculates forces based on these rules and applies them to adjust boid velocity, ensuring it stays within specified speed limits.

The `FlockController` script initializes and manages the flock, setting parameters like minimum and maximum velocity, flock size, and behavior weights (center, velocity, separation, follow, and randomize). It also calculates the flock’s average center and velocity, updating these values to guide individual boids.

The `TargetMovement` script moves a target entity randomly, providing a dynamic leader for the flock to follow. This script calculates new movement points within defined bounds and updates the target’s position and rotation accordingly.

The text also covers path-following and obstacle avoidance in Unity3D. Path-following involves creating a sequence of waypoints using a `Path` script, which manages waypoint positions and visualizes the path in the editor. The `VehicleFollowing` script is attached to an agent (e.g., a cube) to follow this path. It calculates acceleration and velocity to steer the agent towards each waypoint, with options for looping the path.

Obstacle avoidance is implemented using raycasting. An agent navigates a scene with obstacles, attempting to reach a target while avoiding collisions. The setup involves organizing obstacles under a parent object and assigning a custom layer for collision detection. The text notes that this method is limited to local avoidance, and complex obstacle arrangements might trap the agent.

Overall, the text provides a comprehensive guide to implementing flocking, path-following, and obstacle avoidance behaviors in Unity3D, using scripts to control movement and interaction in a simulated environment.



In the context of Unity3D, layers are used to manage interactions between objects such as rendering, lighting, and physics. For obstacle avoidance, a specific layer, "Obstacles," is assigned to entities like walls. Raycasting can then selectively interact with these obstacles by using a layer mask, allowing the physics system to ignore non-obstacle objects. This setup is crucial for implementing path-following and steering behaviors in AI agents.

The VehicleAvoidance script initializes properties like speed and mass for a cube entity. It uses raycasting to detect mouse clicks, setting a target point for movement. The direction vector towards this target is calculated and adjusted using the `AvoidObstacles` method, which modifies the direction to prevent collisions with obstacles. This method utilizes raycasting to detect obstacles within a specified distance, adjusting the entity's movement direction based on the obstacle's normal vector.

Unity3D's layer system allows for selective interaction by using a 32-bit integer as a layer mask. For example, to only interact with the "Obstacles" layer (layer 8), a bitmask is set using bit shift operators (`1<<8`). This approach can be extended to multiple layers using bitwise OR operations.

The obstacle avoidance technique described does not compute the optimal path but instead directly moves towards the target, avoiding obstacles within a certain range. This method is suitable for dynamic scenarios but lacks pathfinding capabilities.

To address this, the A* pathfinding algorithm is introduced. A* is effective for determining the optimal path in games, using a grid-based representation of the world. The algorithm involves creating a `GridManager` class to convert the map into a 2D grid of nodes, each representing a tile. A `Node` class stores properties like position and costs (G and H values) for pathfinding.

The A* algorithm maintains two lists: the open list (nodes to explore) and the closed list (visited nodes). It calculates the total cost (F = G + H) for each node, prioritizing nodes with the lowest F value. The algorithm iteratively expands nodes, checking neighbors and updating costs, until the target is reached or no path is found. The path is then reconstructed by tracing back from the target node to the start node.

Implementing A* involves creating additional classes like `PriorityQueue` to efficiently manage nodes in the open list. The `PriorityQueue` uses sorting based on the estimated cost to ensure efficient retrieval of nodes. The `GridManager` class is implemented as a singleton to manage the grid representation, ensuring only one instance exists in the scene.

Overall, the combination of obstacle avoidance and A* pathfinding provides a robust framework for AI navigation in Unity3D, allowing for dynamic interaction with the environment and optimal pathfinding capabilities.



The text describes the implementation of an A* pathfinding algorithm in Unity, focusing on grid management and node traversal. The setup involves creating a grid representation using a 2D array of nodes, where each node can be marked as an obstacle based on the presence of game objects tagged as "Obstacle". The grid's dimensions and cell sizes are defined, and helper methods like `GetGridCellCenter`, `GetGridIndex`, `GetRow`, and `GetColumn` assist in navigating the grid.

The `AStar` class is central to the pathfinding process. It uses a priority queue (`openList`) and a hash set (`closedList`) to manage nodes during traversal. The `HeuristicEstimateCost` function calculates the estimated cost between nodes, ensuring it is admissible for the A* algorithm to find the shortest path. The `FindPath` method initializes lists and processes nodes, checking for the goal node and calculating costs for neighbors. If a node is not an obstacle and not in the closed list, it is added to the open list with updated cost values.

The `CalculatePath` method constructs the path by tracing parent nodes back to the start node, reversing the order to get a path from start to goal. Visualization is handled through Unity's Gizmos, drawing lines between nodes in the path.

A test script, `TestCode`, sets up the environment by referencing start and end nodes and periodically recalculating the path. The scene setup involves creating game objects for obstacles, start, and end points, and attaching scripts to manage the grid and pathfinding.

The text briefly mentions Unity's NavMesh, highlighting its advantages over grid-based pathfinding, such as using convex polygons for more natural paths and efficient representation of open and crowded spaces. NavMeshes are now available in Unity's free version, allowing for enhanced pathfinding capabilities without custom implementations.

Overall, the text provides a detailed walkthrough of setting up and testing an A* pathfinding system in Unity, emphasizing the importance of grid representation and node management while also introducing Unity's built-in NavMesh feature as an alternative for more complex scenarios.



In Unity, setting up a navigation system involves marking static obstacles as "Navigation Static" to inform the NavMesh generator. This process begins by opening the navigation window via Window | AI | Navigation. Key parameters include agent radius and height, and Max Slope, which dictates slope traversal capability. After setting these, clicking "Bake" generates the NavMesh.

To test pathfinding, add a Nav Mesh Agent component to an AI entity, such as a tank model. This component simplifies pathfinding by automatically determining paths when the destination property is set. A script, Target.cs, updates AI agent destinations based on mouse clicks, using raycasting to determine the target position.

In scenes with slopes, ensure objects are well-connected to avoid navigation gaps. Adjust the Max Slope as needed, and use Off Mesh Links to bridge any gaps, either automatically or manually. These links allow agents to traverse disconnected areas by teleporting or following a set path.

Navigation areas can represent different terrain costs. For instance, crossing water can be more costly than using a bridge. By setting different cost values in the Navigation window, AI agents will prefer less costly paths. This can be tested by placing target objects in various locations to observe path selection.

Off Mesh Links can be generated to connect separate planes, allowing AI agents to navigate across gaps. These can be set up manually by adding Off Mesh Link components to objects and defining start and end points. This approach offers precise control over agent movement across disjointed areas.

Behavior Trees (BTs) provide a scalable solution for AI decision-making, overcoming the limitations of Finite State Machines (FSMs). BTs consist of nodes that execute actions and return states: success, failure, or running. Nodes can be leaves (actions), decorators (modifiers), or composites (sequences/selectors).

Decorators like "Negate" invert outcomes, while composites like "Sequence" and "Selector" manage execution flow. BTs use a Blackboard for data exchange, allowing nodes to share information efficiently. This structure supports complex behaviors, such as a patrolling robot that operates based on proximity and time conditions.

A simple BT example involves a robot that patrols and shoots nearby targets during the day. The BT uses a "Repeat" decorator for continuous execution. A "Selector" node manages the sequence of actions, ensuring the robot only engages when conditions are met. This modular approach facilitates complex AI behavior management in games. 



The text discusses the implementation of Behavior Trees (BTs) in Unity using a tool called Behavior Bricks. BTs are a common AI pattern used to control game character behaviors. The Sequence | Condition | Action pattern in BTs is equivalent to an "if Condition is Success then Action" logic, allowing for streamlined AI behavior design.

**Behavior Bricks in Unity**: Behavior Bricks is a free tool developed by the Complutense University of Madrid for implementing BTs in Unity. It includes a visual editor for easy node management. To use Behavior Bricks, download it from the Unity Asset Store, import it into your project, and set up your scene.

**Setting Up the Scene**: The setup involves creating a floor, a player (sphere), and an enemy (cube) with a shootPoint for projectiles. Both player and enemy should have a NavMesh Agent component for movement, and the Directional light should have the MainLight tag.

**Day/Night Cycle**: A script is attached to the Direct Light object to simulate a day/night cycle. This script uses a sinusoidal wave to adjust light intensity, switching between day and night states. An OnChanged event triggers when the cycle changes, which can be used in the BT.

**Designing Enemy Behavior**: The enemy behavior is structured as follows:
1. If it's night, the enemy is deactivated.
2. If the target is very close, the enemy shoots.
3. If the target is further, the enemy chases.
4. Otherwise, the enemy wanders.

The order of nodes is crucial, with conditions ordered from most to least restrictive. The Wander behavior is a reusable BT node included in Behavior Bricks.

**Implementing Nodes**: After designing the BT, check if Behavior Bricks includes necessary nodes. It provides nodes like IsTargetClose, MoveToGameObject, Wander, and AlwaysTrue. Custom nodes like ShootOnce and Shoot are created for shooting actions. The ShootOnce class extends GOAction, using attributes to specify parameters like shootPoint and bullet velocity. The Shoot class extends ShootOnce, adding a delay for continuous shooting.

**IsNight Condition**: The IsNight condition checks if it's nighttime by monitoring the DayNightCycle. It uses the MonitorCompleteWhenTrue and MonitorFailWhenFalse functions to efficiently manage state changes.

**Building the Tree**: Create the BT by right-clicking in the Unity inspector, selecting Behavior Tree, and connecting nodes in the editor. Configure nodes with parameters from the blackboard or constants.

**Attaching the BT**: Attach the BT to the enemy by adding the Behavior Executor component and linking the BT. Set blackboard parameters like player, floor, shootPoint, and bullet with appropriate objects.

**Summary**: This chapter covers BT fundamentals and their implementation in Unity using Behavior Bricks. The demo involves a player and a patrolling robot with a day/night cycle. BTs are essential for modern game AI, and further resources are available for in-depth learning.

**External Resources**: Links to Behavior Bricks documentation and additional reading on BTs are provided for those interested in exploring further.



The Unity Machine Learning Agents Toolkit (ML-Agents Toolkit) offers a comprehensive solution for integrating machine learning into Unity environments. Primarily using reinforcement learning, it enables the creation of autonomous game agents that learn through rewards and actions, similar to training a dog with commands and treats. Agents interact with their environment, receive rewards or penalties, and adjust their actions to maximize rewards.

The ML-Agents Toolkit consists of three main components: a Unity plugin, a Python package for interfacing with TensorFlow trainers, and a package for interfacing with OpenAI Gym. Installation involves cloning the ML-Agents repository and setting up dependencies, including Python 3.6 and TensorFlow. For Windows, Anaconda is recommended to manage Python environments, while macOS and Linux users can use pip3 for installation.

To utilize the toolkit, users must understand its core entities: the Agent, Brain, and Academy. The Agent performs actions and receives rewards, the Brain decides the actions using various modes (Player, Heuristic, External, Internal), and the Academy manages training configurations and scenarios.

Creating a scene in Unity involves setting up these components. A simple 3D scene with objects like a lane, sphere, and cube is constructed. Scripts are written to define agent behavior, including resetting the agent's position and collecting observations from the environment. The `AgentAction` method is central to defining how agents react to inputs and how they are rewarded or penalized.

Training involves switching the Brain type to External and running training commands through the command line, which utilizes TensorFlow to optimize agent behavior. Once trained, the model can be tested by switching the Brain type to Internal and observing the agent's learned actions in the Unity environment.

The chapter provides a basic introduction to the ML-Agents Toolkit, covering installation, setup, and a simple training example. It suggests further exploration through the toolkit's documentation and additional resources for a deeper understanding of reinforcement learning.

In a subsequent chapter, the text discusses applying AI techniques, including navigation meshes and finite-state machines, to a complex game scenario. The example involves enhancing a tank combat game, inspired by the TANKS! tutorial, with AI-controlled enemy tanks, demonstrating real-world application of AI in game development.



The text provides a detailed guide on implementing AI in a game using Unity, focusing on adding automated navigation and AI-controlled tanks. Initially, it emphasizes familiarizing oneself with an existing project by exploring game structure, scripts, and components. This includes running the game, modifying code, and using Debug messages to understand information flow.

The process begins with creating a NavMesh for automated navigation, essential for AI movement. NavMesh generation involves setting parameters like agent size and slope values to accommodate tank dimensions. After baking the NavMesh, patrolling points are added for AI pathfinding.

The AI tank setup involves duplicating a tank prefab, adding a Nav Mesh Agent component, and modifying scripts to differentiate AI from player-controlled tanks. The TankShooting script is adjusted to prevent AI from shooting using player controls, introducing a Boolean variable `m_IsAI` to manage this. Similarly, the Tank Movement script is modified to disable player input for AI tanks, replacing manual movement with FSM and pathfinding.

The GameManager script is updated to spawn both player and AI tanks. A new public variable for the AI tank prefab is added, and the `SpawnAllTanks` function is modified to instantiate the AI tank as the last tank.

The AI decision-making is implemented using a Finite State Machine (FSM) with states for patrolling and attacking. The FSM class extends existing tank movement code, storing patrol points and managing state transitions. The AI tank patrols predefined points and switches to attack mode when players are within range, rotating towards the player and firing at intervals.

The `AITankController` script defines the FSM states and manages transitions based on player proximity. The patrol state involves selecting random patrol points and setting them as destinations for the NavMeshAgent. The attack state involves targeting the player, adjusting tank orientation, and firing. The dead state stops the tank's actions upon health depletion.

The text concludes by suggesting enhancements like adding a chasing state or replacing the FSM with a behavior tree for more complex AI behavior. It encourages further exploration of AI techniques in Unity, highlighting the potential for improvement and learning in game AI development.

Overall, the guide provides a comprehensive approach to integrating AI in Unity games, leveraging NavMesh for navigation and FSM for decision-making, while offering insights into enhancing AI capabilities.



This text provides a comprehensive guide on various Artificial Intelligence (AI) techniques and their implementation in game development, focusing on systems such as A* pathfinding, Finite State Machines (FSM), and Behavior Trees (BTs). Here's a distilled summary of the key components:

### A* Pathfinding
- **A* Algorithm**: A crucial pathfinding and graph traversal algorithm used to find the shortest path. It involves classes like `AStar`, `GridManager`, `Node`, and `PriorityQueue` for implementation.
- **Scene Setup**: Involves configuring the environment for pathfinding with components like `TestCode` and `scene`.

### AI Techniques
- **Finite State Machine (FSM)**: Used for decision-making AI, involving states, transitions, and events. Classes like `AdvanceFSM` and `FSMState` structure the FSM framework.
- **Behavior Trees (BTs)**: Used to model complex AI behaviors. Components include nodes like composite, decorator, and leaf nodes. Implementations are demonstrated with patrolling robot examples.
- **Flocking Behavior**: Involves alignment, cohesion, and separation to simulate group movement, utilizing a `FlockController` class.

### Navigation Systems
- **Navigation Mesh (NavMesh)**: Used for automated navigation, involving baking and setting up agents. `NavMesh` agents are configured to navigate areas and avoid obstacles.
- **Obstacle Avoidance**: Implemented using custom layers and exploring different avoidance strategies.

### AI in Games
- **Non-Player Characters (NPCs)**: AI techniques are applied to control NPC behaviors using FSMs and BTs.
- **AI Character Senses**: Implemented through classes like `Sense`, which includes sight and touch senses for dynamic interaction.

### Probability and Randomness
- **Probability in AI**: Includes concepts like conditional probability and weighted probability, applied in scenarios like slot machines.
- **Randomness**: Implemented using Pseudorandom Number Generators (PRNG) and Cryptographically Secure Pseudo-Random Number Generators (CSPRNG) for unpredictability in games.

### Unity and Machine Learning
- **Unity ML-Agents Toolkit**: Facilitates training AI agents using reinforcement learning. Installation and implementation involve setting up Python and TensorFlow environments.
- **Unity Physics Engine**: Used to simulate realistic physics for AI behaviors, such as flocking and obstacle avoidance.

### Additional Concepts
- **Game Structure**: Covers the setup of game components and AI integration.
- **Sensor Systems**: Implemented for detecting and responding to environmental changes, using messaging and polling systems.
- **Research Areas**: Highlights AI applications in common sense reasoning, computer vision, and Natural Language Processing (NLP).

This guide serves as a foundational resource for implementing AI in games, offering insights into both theoretical concepts and practical applications.
