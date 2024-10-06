
**Software Architecture: The Hard Parts** by Neal Ford, Mark Richards, Pramod Sadalage, and Zhamak Dehghani provides a comprehensive guide to navigating the complexities of modern distributed architectures. The book emphasizes trade-off analysis as a critical skill for architects, offering insights into making informed decisions amidst competing architectural demands.

Key highlights include:

- **Architectural Decision-Making**: The book presents a catalog of architectural decisions with associated pros and cons, helping architects understand the nuances of building distributed systems. It emphasizes the importance of data in architecture, focusing on who can access and modify it, and how to manage the separation between analytical and operational data.

- **Modularity and Decomposition**: It discusses the principles of modularity, including maintainability, testability, deployability, scalability, and fault tolerance. The authors explore architectural decomposition, analyzing coupling, and offering patterns for component-based decomposition.

- **Data Management**: The book covers data decomposition, from analyzing databases to creating data domains, and selecting appropriate database types, including relational, key-value, document, and cloud-native databases. It also addresses data ownership, distributed transactions, and eventual consistency patterns.

- **Service Granularity**: The authors discuss service granularity, balancing factors like scalability, fault tolerance, security, and data relationships, to find the right level of service granularity.

- **Reuse Patterns**: The text explores reuse patterns, including shared libraries, services, and platforms, emphasizing when and how code reuse adds value.

- **Distributed Workflows and Sagas**: It examines managing distributed workflows through orchestration and choreography, and delves into transactional sagas, offering patterns for managing state and ensuring consistency.

- **Contracts and Analytical Data**: The book discusses strict versus loose contracts, trade-offs in microservices, and managing analytical data through data warehouses, lakes, and meshes.

- **Trade-Off Analysis**: A significant focus is on trade-off analysis techniques, encouraging architects to assess coupling points, model relevant domain cases, and avoid common pitfalls like the "out-of-context" trap.

Overall, the book serves as a practical framework for architects to address the most challenging questions in modern software architecture, providing both theoretical background and real-world examples.



The text discusses the complexity and challenges faced in software architecture, emphasizing the absence of universal "best practices." Architects often encounter unique problems that require careful assessment of trade-offs rather than seeking silver-bullet solutions. The book "Software Architecture: The Hard Parts" focuses on decision-making strategies to help architects handle novel situations effectively.

O'Reilly Media, known for its technology and business training, offers resources like live training courses and a vast collection of texts and videos. The authors express gratitude to those who provided feedback and support during the book's creation, acknowledging the impact of the global pandemic on various communities, particularly healthcare workers.

The book highlights the importance of understanding that software architecture involves difficult decisions with long-term implications. Unlike technical topics with clear solutions, architecture problems are often unique and require architects to find the "least worst" combination of trade-offs. The book aims to provide timeless advice by focusing on decision-making processes rather than transient technological trends.

Data plays a crucial role in architecture, lasting longer than the systems themselves. The book distinguishes between operational data, essential for business operations, and analytical data, used for strategic decisions. Modern architecture challenges often arise from balancing data needs with architectural concerns.

Architectural Decision Records (ADRs) are recommended for documenting decisions, providing a structured format to capture context, decisions, and consequences. This practice helps ensure that architectural decisions are well-documented and understood.

Additionally, architecture fitness functions are discussed as a means of automating governance to ensure adherence to design principles. These functions help maintain the integrity of architectural decisions throughout the implementation process.

Overall, the text underscores the evolving nature of software architecture, the importance of data, and the need for effective documentation and governance to navigate the complexities of architectural decision-making.



In the early 2000s, the integration of software development and operations led to the emergence of DevOps, emphasizing automation and feedback. This evolution paralleled the shift from manual to automated operational tasks, enhancing speed and reducing errors. Continuous integration replaced lengthy integration phases, highlighting the importance of rapid feedback. The rise of virtual machines allowed operations to automate repetitive tasks, reflecting the current state of architecture governance.

Architects face challenges in ensuring developers adhere to chosen architectural styles. Traditionally, governance involved manual code reviews, prone to oversight. The concept of architectural fitness functions, introduced in "Building Evolutionary Architectures" by Neal Ford, Rebecca Parsons, and Patrick Kua, provides a solution. Fitness functions objectively assess architecture characteristics, enabling automated governance.

Fitness functions are categorized into atomic and holistic. Atomic functions address single characteristics, while holistic functions validate combinations of characteristics, considering their interplay. For instance, improving security might affect performance, and scalability can conflict with elasticity.

In Agile development, fitness functions complement unit tests by focusing on architecture characteristics rather than domain criteria. They help maintain structural integrity, preventing issues like cyclic dependencies. Tools like JDepend and ArchUnit facilitate the creation of fitness functions, ensuring adherence to architectural principles.

Fitness functions can be static or dynamic. Static functions return fixed outcomes, while dynamic ones consider context, such as scalability under varying user loads. Although most functions are automated, some require manual validation, like legal reviews. Continuous integration pipelines can incorporate fitness functions, automating governance tasks.

The Equifax data breach exemplifies the risks of manual processes. Automated fitness functions in deployment pipelines could have prevented such vulnerabilities by ensuring immediate detection and response to zero-day exploits.

Fitness functions also benefit architects by allowing them to engage in coding, creating executable architecture specifications. However, architects must balance fitness function complexity to avoid frustrating developers. These functions act as checklists, ensuring adherence to important principles and preventing technical debt.

The distinction between architecture and design is crucial. Architecture focuses on the "why" of decisions, emphasizing principles over implementation details. This approach helps architects make informed choices without delving into the myriad implementation options.

Overall, fitness functions represent a significant advancement in architecture governance, providing a structured, automated approach to maintaining integrity and ensuring adherence to architectural principles.



The text discusses distributed architectures, particularly microservices, emphasizing key architectural concepts such as coupling, communication, coordination, and atomicity. Coupling refers to the dependency between two components where changes in one may necessitate changes in another. It can be static or dynamic, influencing how components are connected and interact.

Communication between components can be synchronous or asynchronous, affecting how processes wait for responses. Coordination can be orchestrated, with a central entity managing workflows, or choreographed, where components share coordination responsibilities. Atomicity ensures consistent states across workflows, contrasting with eventual consistency.

The Sysops Squad Saga illustrates these concepts in a real-world context. Penultimate Electronics, a large retailer, uses the Sysops Squad for customer support. The system involves administrators, customers, experts, and managers who interact with a monolithic ticketing system. This system, however, suffers from issues like lost tickets, incorrect assignments, and frequent downtimes, prompting a need for architectural change.

The existing monolithic application handles various functions such as ticket management, reporting, and billing. It uses a single database schema for all its components, posing challenges in maintaining and scaling the system. The architecture team aims to transition to a distributed architecture, addressing issues of coupling and communication.

The text emphasizes the importance of understanding coupling in software architecture. Architects must balance decoupling with effective communication between components. The complexity of distributed systems, especially microservices, arises from the need to manage bounded contexts and transactionality, which were traditionally handled by centralized databases.

Trade-off analysis is crucial for architects to navigate these complexities, as there are no universal best practices applicable to all scenarios. The text highlights the necessity for architects to develop skills in analyzing trade-offs, using frameworks like the Architecture Trade-off Analysis Method (ATAM) to make informed decisions.

Overall, the text provides an in-depth look at the challenges and considerations in designing distributed architectures, using the Sysops Squad as a case study to explore practical applications of these concepts.



In software architecture, understanding and managing coupling is crucial, especially in distributed systems like microservices. Coupling refers to the interdependence between software components, where changes in one component may necessitate changes in another. Effective trade-off analysis requires untangling these interdependencies to evaluate their impact on system changes.

**Architecture Quantum**: This concept describes a deployable unit with high functional cohesion, static coupling, and synchronous dynamic coupling. It serves as a framework for analyzing how components connect and communicate.

- **Static Coupling**: This involves dependencies resolved through contracts, such as operating systems, frameworks, and libraries. It is concerned with how components are "wired" together, impacting deployability.

- **Dynamic Coupling**: This refers to runtime communication between components, which can be synchronous (waiting for a response) or asynchronous (allowing parallel processing).

**Independently Deployable**: Each architecture quantum represents a separate deployable unit. In microservices, this allows for independent deployment, enhancing scalability and flexibility. However, shared databases can hinder this independence.

**High Functional Cohesion**: This ensures that components within a quantum are closely related in function, aligning with domain-driven design principles. It helps maintain a clear boundary and scope for each service.

**Service Granularity**: Determining the right size for microservices is challenging. Too small services can lead to orchestration issues, while too large ones can hinder scalability. Architects must balance these trade-offs.

**Static Coupling Measurement**: This helps identify coupling points, such as databases, which often limit the number of quanta in a system. Monolithic architectures typically have a quantum of one due to their single deployment unit.

**Dynamic Quantum Coupling**: Involves communication styles and coordination strategies, such as synchronous vs. asynchronous communication and orchestration vs. choreography. These choices influence system design and performance.

**Microservices and Decoupling**: Microservices architectures aim for high decoupling, allowing services to operate independently. However, tight coupling with user interfaces can reduce the system to a single quantum.

**Micro-Frontends**: This approach integrates user interface elements with corresponding services, forming independent quanta. It supports loosely coupled communication and enhances modularity.

By understanding and applying these concepts, architects can design systems that effectively balance trade-offs, optimize deployability, and maintain functional cohesion. This ensures efficient and scalable software architecture in distributed environments.



Architects often use message queues for asynchronous communication, but alternatives exist without them. Communication choices impact synchronization, error handling, transactionality, scalability, and performance. Consistency in communication ranges from atomic transactions to eventual consistency. Cross-service transactions are complex, and avoiding them is generally advised. Coordination in workflows involves orchestration and choreography, with complexity requiring more coordination. Communication, consistency, and coordination are interconnected, influencing architectural decisions and forming a three-dimensional space for trade-off analysis.

Dynamic coupling involves how services communicate, affecting performance and scalability. Static coupling relates to the dependencies required for service functionality. Understanding these couplings helps in risk mitigation and reliability analysis. For example, asynchronous calls allow services to operate independently, enhancing elasticity.

The concept of architecture quantum defines a bounded context in architectural terms, distinguishing between static and dynamic couplings. Static coupling focuses on dependencies, while dynamic coupling involves communication impact on operational characteristics. Tools can automate dependency tracking using container manifests and dependency files.

Architectural modularity addresses challenges like scalability and rapid change. Breaking monolithic applications into smaller parts enhances scalability and adaptability, crucial for mergers and acquisitions. This modularity aligns with strategic goals, offering increased capacity and flexibility. Explaining modularity through analogies, like water glasses representing resource capacity, aids in communicating benefits to stakeholders.

In summary, architects must balance communication, consistency, and coordination while considering static and dynamic couplings. Architectural modularity supports scalability and change, essential in today's evolving business and technical landscapes.



Architectural modularity offers significant benefits, including scalability and agility, which are crucial for businesses to adapt quickly to change. Agility in architecture allows technology to keep pace with business demands, facilitating rapid course corrections. Modularity is driven by business needs such as speed-to-market and competitive advantage, which are achieved through agility, scalability, availability, and fault tolerance.

**Key Architectural Characteristics:**

- **Maintainability:** This involves the ease of making changes, such as adding or removing features. High maintainability is achieved by reducing component coupling, enhancing cohesion, and managing component size. Monolithic architectures often suffer from low maintainability due to tightly coupled components, whereas modular architectures improve maintainability by isolating changes to specific domains or functions.

- **Testability:** Defined by the ease and completeness of testing, testability is crucial for agility. Monolithic architectures struggle with testability due to the broad scope of changes impacting many components. Modular architectures allow for more targeted testing, although increased service communication can complicate testing.

- **Deployability:** This encompasses the ease, frequency, and risk of deployments. Monolithic architectures often face challenges due to lengthy deployment processes and higher risks. Modular architectures support more frequent and lower-risk deployments, though increased inter-service communication can complicate deployment.

- **Scalability and Elasticity:** Scalability refers to maintaining responsiveness with increasing user load, while elasticity deals with responsiveness during sudden spikes. Modular architectures, especially microservices, excel in both due to their fine-grained, independently scalable components. However, excessive inter-service communication can hinder scalability.

- **Availability/Fault Tolerance:** This is the system's ability to remain operational despite failures. Monolithic systems generally have low fault tolerance, whereas modular systems can isolate failures to specific components, maintaining overall system functionality. Asynchronous communication is vital for fault tolerance in distributed systems.

**Application of Modularity:**

Architectural modularity does not necessarily imply distributed systems; it can be achieved in monolithic designs like modular monoliths or microkernel architectures. These styles organize components into well-defined domains, enhancing maintainability and testability without requiring a distributed approach.

**Practical Implications:**

For businesses like Sysops Squad, adopting modularity can address issues such as difficulty in applying changes and maintaining large codebases. By decoupling and partitioning functionality, businesses can improve maintainability and testability, thereby enhancing agility and responsiveness to change.

Overall, architectural modularity supports business agility by enabling faster, more reliable adaptations to market demands, ultimately contributing to competitive advantage.



Addison and Austen discussed the challenges of maintaining a monolithic application, Sysops Squad, which suffers from poor testability, deployability, and customer satisfaction issues. Addison highlighted that over 30% of test cases were obsolete or missing, impacting test completeness. The monolithic structure required full system deployment for minor changes, increasing deployment risk and causing delays.

Addison proposed transitioning to a distributed architecture to improve testability and deployability. By breaking the application into services, changes could be isolated, reducing testing scope and deployment risk. This approach would also enable more frequent and less risky deployments, addressing customer dissatisfaction due to system unavailability, crashes, and ticketing issues.

Austen and Addison identified that non-core functionalities, such as customer surveys and reporting, caused system freezes. By isolating these into separate services, they could enhance fault tolerance and scalability, ensuring core ticketing functions remained operational. This would also address database load issues and improve system availability for customers.

They prepared an Architecture Decision Record (ADR) to migrate the application, highlighting benefits like improved fault tolerance, scalability, agility, and reduced bug introduction. Although the migration would delay new features and incur costs, the business sponsors supported the plan.

To begin the architectural decomposition, Addison and Austen considered different approaches. Logan advised against the unstructured "Elephant Migration Anti-Pattern" and suggested component-based decomposition or tactical forking. The choice depends on the existing codebase structure. Component-based decomposition involves refining and extracting components incrementally, while tactical forking involves creating replicas and removing unwanted parts.

Architects must assess if a codebase is decomposable, considering its internal structure. Tools measuring afferent and efferent coupling can help evaluate this. Abstractness and instability metrics, derived from coupling, assess codebase balance. Distance from the main sequence, a holistic metric, indicates a component's relationship between abstractness and instability, guiding decomposition efforts.

Overall, transitioning to a distributed architecture aims to enhance system performance, maintainability, and customer satisfaction by isolating functionalities, improving test and deployment processes, and addressing structural inefficiencies.



In software architecture, balancing code abstraction and implementation is crucial to avoid the "zone of uselessness" (overly abstract code) and the "zone of pain" (overly implemented code). Tools help architects analyze codebases for restructuring, especially when dealing with technical debt. Two primary approaches for decomposing applications are component-based decomposition and tactical forking.

**Component-Based Decomposition:**
This approach involves breaking a monolithic application into well-defined components, which can eventually become services in a distributed architecture like microservices. Components are defined by their roles and operations, often represented through namespaces or directory structures. The process involves refactoring source code to create a set of components that facilitate migration to a service-based architecture. This architecture serves as a stepping-stone to microservices, allowing architects to determine domain granularity and focus on functional partitioning before database decomposition. It doesn't require operational automation or containerization and is a technical transition that doesn't necessitate organizational changes.

**Tactical Forking:**
Named by Fausto De La Torre, tactical forking is a pragmatic approach for restructuring unstructured codebases, or "big balls of mud." Instead of extracting parts of the system, this method involves deleting unnecessary code, making it easier to isolate desired functionality without dealing with high coupling. The process begins by cloning the entire monolith, allowing teams to delete unwanted code. This approach is quick and requires minimal upfront analysis but may result in services with redundant code and inconsistencies.

**Trade-Offs:**
Tactical forking allows immediate work with minimal analysis but may leave services with latent code. Component-based decomposition takes longer but avoids duplicate code and supports collaborative work to identify shared functionalities and boundaries.

**Sysops Squad Case Study:**
Addison and Austen evaluated their application's metrics and chose component-based decomposition due to its structured nature and existing component boundaries. They documented their decision in an Architecture Decision Record (ADR), highlighting the benefits of reduced duplicate code and more controlled migration. Tactical forking was considered but dismissed due to potential maintenance challenges.

**Component-Based Decomposition Patterns:**
These patterns provide a systematic approach to breaking apart monolithic applications. Key patterns include:

- **Identify and Size Components:** Manage and size components appropriately.
- **Gather Common Domain Components:** Consolidate common logic to reduce duplicate services.
- **Flatten Components:** Ensure source files reside within well-defined components.
- **Determine Component Dependencies:** Identify and refine dependencies for migration feasibility.
- **Create Component Domains:** Group components into logical domains.
- **Create Domain Services:** Physically separate monolithic architecture into domain services.

These patterns, supported by governance through fitness functions, ensure ongoing correctness during maintenance. Architecture stories, distinct from user stories, document structural changes to support business drivers like scalability and agility.

Overall, component-based decomposition provides a structured, incremental migration path, while tactical forking offers a faster, albeit less refined, alternative for restructuring chaotic codebases.



The text discusses the "Identify and Size Components Pattern" as a critical step in migrating from a monolithic architecture to a more modular system. This pattern focuses on identifying and cataloging architectural components of an application, ensuring they are appropriately sized. Proper sizing is essential because overly large components tend to be more coupled and harder to decompose into separate services, leading to a less modular architecture.

Component sizing is challenging; traditional metrics like source files or lines of code are inadequate due to varying coding styles. A useful metric is the total number of statements within a component, which helps indicate component complexity and size. Ideally, component sizes should fall within one to two standard deviations from the mean size to ensure consistency and modularity.

The pattern emphasizes the importance of having a consistent component size distribution, where no single component dominates the codebase. Tools often require manual or automated post-processing to accumulate total statements by component and calculate their percentage representation within the entire application.

Fitness functions are automated governance mechanisms that help maintain component sizes and detect new or removed components. Examples include ensuring no component exceeds a certain percentage of the codebase or deviates significantly from the mean component size. These functions are integrated into CI/CD pipelines to alert architects of potential issues.

The text provides a case study of the Sysops Squad application, where the Reporting component, initially 33% of the codebase, was decomposed into smaller components (Ticket Reports, Expert Reports, Financial Reports, and a shared component) to achieve a more balanced size distribution.

The "Gather Common Domain Components Pattern" is also introduced, which involves identifying and consolidating shared domain functionality into a single component. This helps eliminate duplicate services and streamline the transition to a distributed architecture. Shared domain functionality differs from infrastructure functionality, focusing on business processing logic common to some processes.

Overall, the text outlines a structured approach to component-based decomposition, emphasizing the need for consistent component sizing and the use of fitness functions to maintain architectural integrity during monolithic migration.



In large codebases, identifying and consolidating common domain functionality can reduce duplication and simplify architecture. For instance, if a class like `SMTPConnection` is used across multiple namespaces, it suggests a need for consolidation into a shared component. Similarly, components like Ticket Auditing, Billing Auditing, and Survey Auditing can be unified under a shared namespace, reducing code duplication.

A shared service or library can be created to manage common functionality. The choice between a shared service and a library involves trade-offs discussed in detail elsewhere. Automating governance for shared functionality is challenging due to its subjective nature. However, fitness functions can help identify common domain functionality. One such function identifies common names in leaf nodes of a component namespace, alerting architects to potential shared domain logic. This process involves analyzing directory structures and using exclusion lists to reduce false positives.

In practice, as shown in the Sysops Squad application, consolidating components like Customer Notification, Ticket Notify, and Survey Notify into a single Notification component can streamline functionality. However, this also increases coupling, which must be carefully analyzed. The consolidated component should not increase the overall afferent coupling. Addison and Austen, the architects, agreed to consolidate after ensuring the coupling remained manageable.

The Flatten Components pattern ensures components are distinct and not built hierarchically. This pattern involves moving orphaned classes from root namespaces to create well-defined components, ensuring all source code resides in leaf nodes. For example, in the Sysops Squad application, the Survey component can be flattened by moving survey template code into the `.survey` namespace or creating new components like `.survey.create` and `.survey.process`.

Shared code within a namespace should also be moved to a separate component, such as `.sharedcode`, to facilitate maintenance and metric analysis. This helps determine the feasibility of transitioning to a distributed architecture. Metrics like the percentage of shared code provide insights into potential challenges in breaking up a monolithic application.

Fitness functions can automate governance by ensuring no source code resides in root namespaces, thus maintaining a flat component structure. This involves identifying orphaned classes and ensuring they are appropriately placed within the application’s architecture.



In the process of monolithic migration, maintaining flat components is essential for effective maintenance. A fitness function alerts architects when orphaned classes appear, ensuring components remain organized. Addison applied the "Gather Common Domain Components Pattern" and identified orphaned classes in the Survey and Ticket components, leading to a decision to flatten these components. The Ticket component was particularly complex, with 45 orphaned classes related to ticket creation, maintenance, and completion. Addison and Sydney decided to separate these functionalities into distinct namespaces, forming a Ticket subdomain with shared, maintenance, and completion components.

For the Survey component, the functionality was less complex and rarely changed. Addison, with input from Sydney and Skyler, consolidated the Survey and Survey Templates into a single namespace, eliminating the need for separate components.

The "Determine Component Dependencies Pattern" helps assess the feasibility of migrating a monolithic application to a distributed architecture by analyzing component dependencies. This pattern focuses on the interactions between components rather than individual class dependencies. By using tools like dependency diagrams, architects can visualize component coupling and make informed decisions about breaking apart applications.

The pattern categorizes migration efforts into sizes: golf ball (straightforward), basketball (challenging), and airliner (extremely difficult). Minimal dependencies make an application a good candidate for migration, whereas high coupling complicates the process. Understanding dependencies aids in determining the feasibility and effort required for migration, preventing premature attempts that often lead to struggles.

Fitness functions automate governance by setting limits on component dependencies and ensuring certain components do not interact. These functions can trigger alerts when thresholds are exceeded, aiding architects in maintaining manageable coupling levels.

Addison used an IDE plug-in to generate a dependency diagram for the Sysops Squad application, revealing significant dependencies, particularly in the Notification, Ticketing, and Reporting components. By filtering out shared libraries, Addison found the core functionalities were relatively self-contained, making the application a suitable candidate for distributed architecture.

The "Create Component Domains Pattern" involves grouping related components into domains, facilitating the transition to service-based architecture. This pattern helps in organizing components into logical groups, paving the way for more coarse-grained domain services in the migration process.

Overall, these patterns and fitness functions provide structured approaches to managing component dependencies and organizing monolithic applications, ensuring smoother transitions to distributed architectures.



In service-based architecture, component domains are represented through hierarchical namespaces, aiding in the organization of functionality. Refactoring is often necessary to align namespaces with domain-driven design principles. For instance, in the Sysops Squad application, components related to customer functionality were restructured under a unified namespace to reflect their domain association.

To govern these component domains, fitness functions can be employed. These automated checks ensure that namespaces adhere to predefined domain lists, preventing unauthorized domain creation. For example, ArchUnit can be used to restrict application domains to ticket, customer, and admin.

The process of identifying and grouping components into domains, as demonstrated by Addison and Austen with the Sysops Squad application, involves collaboration with stakeholders and ensures cohesive domain structures. This alignment allows for the transition to a service-based architecture, where domains are extracted into separately deployed services. This architecture facilitates learning about domain services before potentially transitioning to microservices, avoiding premature fine-grained decomposition.

The Create Domain Services pattern involves moving well-defined component domains into standalone services, sharing a monolithic database initially. This approach allows for incremental migration from monolithic to distributed systems. Governance is maintained through fitness functions that ensure domain service components remain consistent.

Breaking apart a monolithic database is complex, requiring careful consideration of data disintegrators and integrators. Key drivers for decomposition include change control, connection management, scalability, fault tolerance, architectural quanta, and database type optimization. These factors help determine when and how to decompose a database, balancing between keeping data together and separating it for optimal architecture and performance.

Overall, the structured approach to component and data decomposition provides a controlled transition from monolithic to service-based architecture, setting the stage for further refinement into microservices if necessary.



In distributed architectures, managing database changes is crucial due to the complexity of coordinating multiple services. Breaking changes, such as altering table schemas, require updating all affected services, which can be challenging and error-prone, especially in systems with numerous services. Bounded contexts, a concept from Domain-Driven Design, help manage these changes by encapsulating services and their data, thus isolating changes to specific contexts. This approach also allows for database abstraction, where services interact through contracts (e.g., JSON) rather than direct database access, minimizing the impact of schema changes.

Connection management is another critical aspect. Establishing database connections is resource-intensive, and in distributed systems, each service instance typically maintains its own connection pool. This can lead to connection saturation, especially as services scale. Implementing a connection quota system, where each service is allocated a specific number of connections, helps manage this issue. Quotas can be evenly distributed initially and adjusted based on service needs to optimize resource use.

Scalability is a key advantage of distributed systems, but databases must also scale to handle increased demand. Shared databases can become bottlenecks, leading to performance degradation. By decomposing data into separate domains or using a database-per-service model, systems can achieve better scalability and performance, as fewer connections are needed per database.

Fault tolerance is improved by breaking apart databases, as it reduces the risk of a single point of failure. In a shared database setup, if the database fails, all services are affected. By distributing data across multiple databases, only specific services are impacted by a failure, allowing others to continue functioning.

Architectural quantum, defined as an independently deployable unit with high cohesion and coupling, guides when to split databases. A shared database ties services into a single quantum, but separating data allows services to form distinct quanta, each with its own architectural characteristics.

Finally, database type optimization recognizes that not all data is treated equally. Different data types may require different database solutions, and a monolithic database forces all data to conform to a single type. By decomposing data, systems can use the most suitable database type for each data domain, optimizing performance and efficiency.



In the context of database architecture, breaking apart monolithic data involves strategically moving specific data to more suitable database types. For instance, key-value data, such as country or product codes, may be better managed in a key-value database rather than a relational one. This process, known as data disintegration, allows for more efficient data management by optimizing database types according to data needs.

Conversely, data integration involves determining when to consolidate data. Key integration drivers include maintaining data relationships and ensuring database transactions. Relational databases often use foreign keys, triggers, and views to maintain data consistency and integrity, which complicates data separation. When implementing a microservices architecture, these artifacts must be carefully managed or removed to support a database-per-service pattern.

Database transactions are another crucial consideration. In a monolithic setup, multiple database actions can be executed within a single ACID transaction, ensuring data consistency. However, breaking data into separate schemas or databases complicates this, as distributed transactions may lead to consistency issues due to remote service calls.

The Sysops Squad case study highlights the challenges and justifications for database decomposition. Addison and Devon argue for breaking apart the Sysops Squad database to improve performance, scalability, and fault tolerance. They demonstrate that operational reports cause application freezes due to shared database connections, suggesting separate databases for reporting could alleviate the issue. Additionally, breaking the database into domain silos enhances fault tolerance, as a failure in one domain does not impact others.

To decompose a monolithic database, a five-step process is recommended. This involves analyzing the database to create data domains, assigning tables to these domains, and ensuring each service accesses only its domain, preventing cross-domain dependencies. Data domains are conceptual groupings of related tables and artifacts, such as foreign keys and views, within a functional scope.

Visualizing the database as a soccer ball, each hexagon represents a data domain with its dependencies. Cross-domain dependencies, like foreign keys and views, must be removed or refactored to maintain domain integrity. Database refactoring patterns can assist in safely breaking these dependencies, as illustrated by the example of the Payment domain where cross-domain references are eliminated.

In summary, the process of decomposing a monolithic database requires careful consideration of data relationships, transaction management, and domain boundaries. By strategically breaking apart and managing data domains, organizations can achieve optimized performance, scalability, and fault tolerance in their database architecture.



The text outlines a systematic approach for refactoring and optimizing database architecture in distributed systems, focusing on data sovereignty, scalability, and choosing appropriate database types.

**Step 3: Separate Database Connections to Data Domains**
- Refactor services to connect only to specific schemas, ensuring data sovereignty per service.
- Benefits include schema independence for teams and technology flexibility.
- Shortcomings involve performance issues with large data access, lack of referential integrity, and moving database code to the service layer.

**Step 4: Move Schemas to Separate Database Servers**
- Transition data domains to separate physical databases to improve scalability and fault tolerance.
- Two main methods: backup and restore (requires downtime) or replication (avoids downtime but needs more coordination).

**Step 5: Switch Over to Independent Database Servers**
- Finalize the migration by disconnecting old servers and optimizing new database servers for scalability and availability.

**Selecting a Database Type**
- The emergence of numerous database technologies since 2005 has led to a "Paradox of Choice," necessitating careful selection based on trade-offs.
- Key characteristics for evaluation include ease of learning, data modeling, scalability, availability, consistency, programming language support, and read/write priority.

**Relational Databases**
- Known for SQL and ACID properties, they offer flexible data modeling and balanced read/write capabilities.
- Challenges include complex replication setups and slower adoption of new architectural concepts.

**Aggregate Orientation**
- Focuses on related data structures, improving performance by reducing database joins but complicating data analysis across aggregates.

**Key-Value Databases**
- Operate like hash tables, prioritizing speed and scalability. They require careful aggregate design and offer tunable consistency.

**Document Databases**
- Use JSON/XML structures for human-readable data, providing flexibility and ease of learning. They support complex queries but require careful management of scalability and sharding.

Overall, the text emphasizes the importance of aligning database architecture with service domains and carefully choosing database types based on specific use cases and trade-offs.



NoSQL databases, often perceived as schema-less, allow data and schema attribute name duplication, offering flexibility but requiring applications to handle multiple schema versions. The term "schema-less" can be misleading as data always has an implicit schema. Column family databases, a NoSQL type, use rows with varying columns and are known for scalability and high throughput. They operate in clusters with a default replication factor of three, enhancing availability and partition tolerance. These databases allow tunable consistency, balancing consistency with availability.

Graph databases store entities as nodes with properties and explicit relationships as edges, enabling fast relationship traversal. They have a steep learning curve, particularly in modeling domains into nodes and relations. Graph databases support ACID transactions, providing consistency, and are optimized for read-heavy scenarios. Changing relationship types is costly, requiring careful planning.

NewSQL databases combine NoSQL scalability with relational features like ACID compliance. They support SQL, offering an easier learning curve and familiar data modeling. NewSQL databases enable horizontal scaling and improved availability with multiple active nodes, maintaining strong consistency. Popular options include CockroachDB, which provides high availability and partition tolerance.

Cloud native databases, such as Snowflake and Amazon Redshift, offer reduced operational burdens and cost transparency, with scalability managed through cloud resources. They support ACID transactions but vary in learning curves depending on their architecture. These databases cater to both read-heavy and write-heavy loads, with some geared towards data warehousing.

Time-series databases, driven by IoT and analytics trends, excel in storing sequences of data points over time. They are append-only, suited for read-heavy workloads, and often use SQL-like languages for querying. Consistency levels can be tuned, balancing consistency with availability.

In a case study, the Sysops Squad team debated migrating survey data from a relational to a document database. The discussion highlighted the need for collaboration between development and database teams to justify and implement such changes effectively, emphasizing the importance of aligning database decisions with user interface requirements.



Addison and the team discussed migrating customer survey data from a relational database to a document database to address flexibility and responsiveness issues. Parker, the Sysops Squad product owner, highlighted that frequent changes to the survey system were causing delays and frustration. The marketing department needed better flexibility and quicker IT responses, which were hindered by the current relational database structure.

The team considered two modeling options for the document database: a single aggregate document and a split model. The single aggregate model stored the entire survey and related questions as one document, simplifying data retrieval and UI rendering. However, it involved data duplication. The split model allowed questions to be reused across surveys but was more complex to render. Ultimately, the team chose the single aggregate model for its ease of use, despite the duplication.

An Architectural Decision Record (ADR) was created to document the decision to use a document database, citing improved flexibility and response times as key benefits. The transition would require downtime for data migration.

As the migration began, Addison and Austen faced challenges with service granularity decisions. They debated whether to break down services like ticketing and customer functionality into finer-grained microservices. Taylen advocated for smaller services based on the single-responsibility principle, while Logan advised balancing granularity disintegrators and integrators to avoid pitfalls in microservices architecture.

Granularity disintegrators provide reasons to break services into smaller parts, such as service scope, code volatility, scalability, fault tolerance, security, and extensibility. For example, a notification service with strong cohesion might not need to be split, while a customer service with weak cohesion could be divided into separate services for profile management, preferences, and comments.

Logan emphasized using metrics like the number of statements and public interfaces to objectively assess service granularity, rather than relying solely on subjective opinions. Achieving the right service granularity involves balancing these opposing forces to ensure modularity and efficiency in software architecture.



Service granularity is a crucial aspect of software architecture, focusing on creating services that perform a single responsibility effectively. Developers often struggle with determining the appropriate granularity due to subjective interpretations of single responsibilities. Key factors influencing service granularity include code volatility, scalability, fault tolerance, security, and extensibility.

**Code Volatility**: This refers to the rate of change in a service's code. For instance, if parts of a service, like postal letter notifications, change more frequently than others, such as SMS or email notifications, it may be beneficial to split them into separate services. This reduces testing scope and deployment risk.

**Scalability and Throughput**: Different components of a service might have varying scalability needs. For example, SMS notifications may require higher throughput compared to postal letters. Separating these functionalities allows each service to scale independently, optimizing resource use and performance.

**Fault Tolerance**: Separating services can enhance fault tolerance. If a component like email notifications frequently crashes, it can bring down an entire service. By isolating it, other functionalities like SMS and postal letters remain unaffected by these crashes.

**Security**: Combining functionalities like customer profiles and credit card information in one service can pose security risks. Splitting these into distinct services can enhance security by limiting access to sensitive functions.

**Extensibility**: Services should be designed with future growth in mind. For example, a payment service could be split into multiple services (e.g., credit card, gift card processing) to accommodate new payment methods easily, reducing testing and deployment complexity.

**Granularity Integrators**: While disintegrators guide breaking services apart, integrators suggest when to combine them. Key integrators include:

- **Database Transactions**: If ACID transactions are necessary, services might need to be combined to maintain data integrity.
- **Workflow and Choreography**: Excessive inter-service communication can impact fault tolerance and performance. If services are tightly coupled, combining them might improve reliability.
- **Shared Code and Database Relationships**: Services that share significant code or data might benefit from integration to avoid complexity and maintain consistency.

Balancing disintegration and integration drivers is essential for achieving optimal service granularity, ensuring services are both efficient and maintainable.



In distributed systems, managing data integrity and consistency is complex, often necessitating compensating transactions or state marking to restart transactions. When data integrity is critical, consolidating services might be advisable. Shared code, such as logging and security utilities, is common in software development. However, in distributed architectures, shared code can complicate service granularity. Shared libraries, like JAR files in Java or DLLs in .NET, are bound at compile time. Changes in shared libraries require coordinated updates across services, potentially leading to granularity integration. If shared domain functionality is significant, consolidating services can prevent deployment issues and version mismatches.

Frequent changes to shared code demand coordinated service updates, which can be mitigated through versioning. However, if changes are frequent, consolidating services may simplify this process. Unversionable defects or business rule changes affecting all services simultaneously might also necessitate service consolidation.

Data relationships influence service granularity. Services with intertwined data dependencies may face latency and reliability issues due to interservice communication. Consolidating services can alleviate these issues by reducing dependency-induced communication overhead.

Balancing service granularity involves understanding when to disintegrate or integrate services, considering trade-offs like data integrity, fault tolerance, and maintainability. Disintegrator drivers include single-purpose service scope, code volatility, scalability, fault tolerance, security access, and extensibility. Integrator drivers prioritize database transactions, workflow reliability, shared code maintainability, and data relationships.

Architects must collaborate with business stakeholders to analyze trade-offs and determine the optimal service granularity. For instance, maintaining a database transaction might outweigh agility if data integrity is prioritized. Conversely, security concerns might necessitate keeping services separate despite potential data consistency issues.

In practical scenarios, like the Sysops Squad's ticket assignment, deciding between consolidating or separating services involves analyzing the complexity and interdependence of functions. If assignment and routing are tightly bound, a single service might offer better performance and error handling. However, isolating code within a single service can address concerns about change control.

Ultimately, finding the right granularity requires evaluating business needs and technical constraints to ensure efficient and reliable service architecture.



In the discussion of service granularity and security, Austen and the team face a decision on how to structure customer registration services. The challenge is balancing the need for secure handling of sensitive information (credit card and password) with the requirement for an all-or-nothing transaction during customer registration. Austen proposes a single consolidated service to manage profile, credit card, password, and product information, ensuring ACID transactions and using the Tortoise security libraries for access control. This decision prioritizes transactionality over security separation but mitigates risks with robust security measures.

The architectural decision reflects a trade-off between maintaining security and ensuring cohesive data transactions. Austen's approach highlights the importance of understanding trade-offs in architectural decisions, showing that security can be managed through design rather than by separating functionalities into different services.

In the context of code reuse within distributed architectures, the team debates the use of shared libraries versus shared services. Taylen and Skyler discuss the granularity of shared code, with Taylen advocating for multiple shared libraries and shared services, while Skyler prefers a single shared DLL for ease of management. Addison suggests evaluating the trade-offs of each approach, emphasizing the complexities of code reuse in distributed systems.

The chapter explores techniques for managing code reuse, including code replication, shared libraries, shared services, and sidecars. Code replication involves copying shared code into each service, preserving bounded context but complicating updates. Shared libraries, common in distributed architectures, present challenges in dependency management and change control. The granularity of shared libraries affects the ease of managing dependencies and the impact of changes. Fine-grained libraries offer better change control but increase dependency complexity.

Versioning is crucial for shared libraries, providing backward compatibility and agility. This allows for immediate changes without forcing all services to adopt updates simultaneously. The discussion underscores the importance of thoughtful design and architecture in distributed systems, balancing reuse, security, and transactionality to achieve cohesive and maintainable solutions.



The text discusses complexities and trade-offs in shared library versioning and shared service techniques in distributed computing. Shared libraries allow for versioning, which enhances agility by enabling updates without impacting all services. However, versioning can be complex, requiring effective communication and management of deprecated versions. Custom deprecation strategies are preferred as they account for varying change frequencies among libraries, but they require careful maintenance. Conversely, global strategies are simpler but can cause frequent retesting and redeployment, reducing productivity.

Shared services, an alternative to shared libraries, encapsulate functionality in separately deployed services, allowing runtime changes without redeploying dependent services. However, this introduces risks such as runtime failures affecting entire systems. Versioning in shared services often involves API endpoint versioning, which can be challenging across multiple protocols, increasing complexity and risk.

Performance, scalability, and fault tolerance are critical considerations for shared services. Interservice calls introduce latency, and shared services must scale with dependent services, complicating management. Fault tolerance is a concern, as service unavailability affects all dependent services.

The text also introduces the Sidecar pattern, which decouples domain logic from operational concerns, facilitating consistent operational capabilities across services. This pattern contributes to forming a service mesh, enabling unified governance and operational control in microservices architectures. The Sidecar pattern is an orthogonal reuse pattern addressing specific coupling types, balancing domain independence with operational consistency.

Overall, the shared library technique is suitable for environments with low to moderate shared code changes, while the shared service technique is better for polyglot environments with frequent changes. The Sidecar pattern offers a solution for managing operational concerns across diverse platforms, supporting integration over common platforms.



The Sidecar pattern in software architecture is a technique used to isolate cross-cutting concerns, such as monitoring and logging, in a consistent manner. This approach allows architects to manage operational concerns separately from domain-specific behavior, enabling a clean separation of concerns. Orthogonal coupling is a concept where two distinct architectural components intersect without causing entanglement, which is crucial for maintaining independence in a distributed system.

The Sidecar pattern offers advantages such as consistent infrastructure coordination and isolated coupling, but it also has trade-offs like potential complexity and size growth. It is particularly useful for operational coupling, not domain coupling, ensuring that shared components like logging and monitoring are handled uniformly across services without each team managing them individually.

In practice, a shared infrastructure team typically manages the sidecar, providing services like monitoring, logging, service discovery, authentication, and authorization. This setup prevents inappropriate coupling by keeping domain-specific components out of the sidecar, thus maintaining the independence of microservices.

The concept of code reuse is often misunderstood, with many organizations viewing it as inherently beneficial. However, excessive reuse can lead to brittleness in architecture, as seen in orchestration-driven service-oriented architectures. Successful reuse is characterized by slow rates of change, as seen with operating systems and open-source frameworks. Platforms within organizations serve as new targets for reuse, with well-defined APIs that allow for internal changes without affecting external integrations.

A case study involving the Sysops Squad development team illustrates these principles. The team debated between using a shared data service and a shared library for common database logic across ticketing services. The decision to use a shared library was based on performance, scalability, and fault tolerance considerations, as well as the stability of the shared code. This approach minimized service coupling and reduced the risk of changes affecting multiple services.

The Sidecar pattern and careful consideration of code reuse highlight the importance of balancing abstraction, independence, and the rate of change in software architecture. These strategies help maintain a flexible and robust architecture, capable of adapting to evolving requirements without introducing unnecessary complexity or dependencies.



In distributed architectures, assigning data ownership to services is complex due to the need for bounded contexts and efficient data access. A service typically owns a table if it performs write operations on it, but complications arise with joint or common ownership scenarios. For instance, the Ticket Assignment service needs frequent reads from the expert profile table, but updates are managed by the User Maintenance service. This raises issues when multiple services require access to the same data, leading to discussions about database connections and service collaboration.

Three primary scenarios for data ownership are single, common, and joint ownership. Single ownership is straightforward, with one service writing to a table, like the Wishlist Service managing the Wishlist table. Common ownership involves multiple services needing write access, such as the Audit table accessed by Wishlist, Catalog, and Inventory services. A solution is to designate one service as the sole owner, using asynchronous messaging for other services to send data.

Joint ownership occurs when a few services within the same domain write to a table, such as the Product table managed by Catalog and Inventory services. Techniques to manage joint ownership include:

1. **Table Split Technique**: Divides a table into multiple tables, each owned by a different service. This requires careful synchronization to maintain data consistency, balancing availability and consistency.

2. **Data Domain Technique**: Creates a shared schema for services to share data, forming a broader bounded context. This resolves performance issues but complicates schema changes and governance of write operations.

3. **Delegate Technique**: Assigns single ownership to one service, which acts on behalf of others. Ownership can be based on primary domain priority or operational characteristics priority, depending on CRUD operations or performance needs.

Each technique has trade-offs involving data consistency, service independence, and operational efficiency. The choice between synchronous and asynchronous communication impacts performance and consistency, with the CAP theorem highlighting the trade-off between availability and consistency in distributed systems.

Ultimately, resolving data ownership in distributed systems requires careful consideration of service dependencies, data access needs, and architectural goals to ensure efficient and reliable operations. The approach chosen must align with the specific requirements and constraints of the system, balancing complexity with performance and consistency.



The text discusses various techniques for managing data ownership and distributed transactions in microservices architecture, focusing on the delegate and service consolidation techniques. The delegate technique assigns a single service as the sole table owner, necessitating interservice communication for updates. This can be synchronous, ensuring data consistency but impacting performance, or asynchronous, improving performance but leading to eventual consistency and potential data integrity issues. The trade-offs include high service coupling, lack of atomic transactions, and low fault tolerance for non-owner services.

Alternatively, the service consolidation technique combines multiple services into one, resolving dependency issues and improving atomic transactions. However, it increases deployment risk, testing scope, and impacts scalability, as all service parts must scale equally, potentially reducing fault tolerance.

The text also delves into distributed transactions, contrasting them with ACID transactions, which ensure atomicity, consistency, isolation, and durability within a single unit of work. Distributed transactions lack these properties, instead supporting BASE properties: basic availability, soft state, and eventual consistency. This means services are expected to be available, the state of transactions is not always known, and data will eventually become consistent.

For achieving eventual consistency, three patterns are discussed: background synchronization, orchestrated request-based, and event-based patterns. The background synchronization pattern uses a separate process to periodically synchronize data, often taking the longest time to achieve consistency but suitable for scenarios where immediate consistency is not critical.

Overall, the text highlights the trade-offs between ensuring data consistency and maintaining performance and fault tolerance in distributed systems, emphasizing the need for careful analysis when choosing the appropriate technique for data ownership and transaction management.



The text discusses patterns for managing distributed transactions, focusing on eventual consistency in distributed architectures. It examines three main patterns: background synchronization, orchestrated request-based, and event-based.

**Background Synchronization Pattern:**
- Utilizes an external process for data consistency, decoupling user responsiveness from transaction completion.
- At 11:23:00, a customer unsubscribes, and by 11:23:01, they receive confirmation. Background processes later synchronize data, like deleting records from Contract and Billing tables.
- The pattern's disadvantage is coupling data sources, breaking bounded contexts, complicating structural changes, and duplicating business logic. It suits closed systems but not tightly bounded contexts like microservices.

**Orchestrated Request-Based Pattern:**
- Synchronizes data sources during the business request, requiring an orchestrator to manage the transaction.
- An orchestrator, either an existing service or a dedicated one, handles the transaction, ensuring all data is in sync before responding to the user.
- This pattern favors consistency over responsiveness and involves complex error handling. If errors occur, the orchestrator must decide on retrying, compensating transactions, or other actions.

**Event-Based Pattern:**
- Popular for modern architectures, it uses asynchronous pub/sub messaging to achieve consistency.
- Services listen for events and respond, ensuring quick eventual consistency due to decoupled processing.
- Advantages include responsiveness and decoupling, but error handling is complex. Failures can lead to messages being sent to a dead letter queue for manual intervention.

The text also discusses data ownership and bounded contexts, emphasizing the importance of assigning table ownership to the service performing write operations. For joint-table ownership, options include using a common data domain or a delegate technique.

Overall, the document provides a detailed comparison of eventual consistency patterns, highlighting trade-offs between responsiveness, consistency, and complexity in distributed systems.



The text discusses challenges and solutions in distributed data architecture, focusing on data ownership, distributed transactions, and data access patterns.

Addison and Sydney debate how to handle data ownership between the Ticket Completion Service and the Survey Service. They decide the Survey Service should own the Survey table, using a delegation technique where necessary data is passed in a message to trigger the survey process. This decision separates the survey record creation from ticket completion, enhancing modularity.

In another scenario, the Ticket Assignment Service needs access to expert data owned by the User Management Service. Due to the high number of reads, remote calls are impractical. Addison and Sydney explore modifying the assignment algorithm to reduce queries, but Taylen, the algorithm maintainer, finds this unfeasible. They consider messaging but realize it presents the same latency issues as REST calls. The challenge highlights the difficulty of distributed architectures compared to monolithic systems.

The text introduces four data access patterns to address these challenges: Interservice Communication, Column Schema Replication, Replicated Cache, and Data Domain.

1. **Interservice Communication Pattern**: This pattern involves a service requesting data from another service using remote protocols. While simple, it suffers from performance issues due to network, security, and data latency. It also causes service coupling, impacting scalability and availability.

2. **Column Schema Replication Pattern**: Here, data columns are replicated across tables in different services, allowing direct access without remote calls. This improves performance and scalability but introduces data consistency and ownership issues, requiring data synchronization.

3. **Replicated Caching Pattern**: This pattern uses in-memory caching to synchronize data across services, enhancing responsiveness and fault tolerance. Each service maintains a synchronized cache, allowing quick data access without interservice communication. However, it requires careful management of data dependencies and startup timing.

The text illustrates these patterns with a Wishlist Service needing item descriptions from a Catalog Service. The Interservice Communication pattern leads to latency and coupling issues. Column Schema Replication improves access but risks data consistency. Replicated Caching offers the best performance by keeping data in-memory, though it depends on initial service availability for cache synchronization.

Overall, the text emphasizes the trade-offs in distributed data architecture, highlighting the balance between performance, consistency, and service independence.



The text discusses two data access patterns in distributed architectures: the Replicated Cache and Data Domain patterns, highlighting their respective trade-offs.

**Replicated Cache Pattern:**
- This pattern allows Wishlist Service instances to start independently of the Catalog Service once the cache is populated. It provides good data access performance and fault tolerance, as data remains available even if the Catalog Service is down.
- However, it struggles with high data volumes (over 500 MB) and high update rates, leading to potential data inconsistency. Each service instance requires its own cache, increasing memory usage.
- Configuration and setup can be challenging in cloud and container environments due to dynamic IP addresses.
- Advantages include no scalability issues and preserved data ownership, but it requires initial service startup dependency and can be complex to manage.

**Data Domain Pattern:**
- This pattern involves sharing data tables between services, allowing for direct SQL access and high data consistency and integrity. It eliminates service dependencies and enhances performance by avoiding additional data transfers.
- However, it introduces broader bounded contexts, requiring coordinated changes across services when table structures change, potentially impacting data ownership governance and security.
- The pattern is beneficial when multiple services need access to the same data without the overhead of replication or synchronization.

**Sysops Squad Saga Example:**
- The team considers data access methods for the Ticket Assignment Service needing expert profile data. They rule out service consolidation and shared data domains due to domain separation and database connection limitations.
- They opt for replicated caching, which allows the Ticket Assignment Service to function independently once the User Management Service populates the cache. This choice balances performance with fault tolerance but introduces a startup dependency.
- The team plans to research caching products and their licensing costs, ensuring feasibility within their deployment environment.

**Managing Distributed Workflows:**
- The text introduces orchestration and choreography as coordination patterns in distributed systems.
- Orchestration uses a mediator to manage workflows, handling state, behavior, and error conditions, suitable for complex workflows with multiple paths.
- It emphasizes decoupling by avoiding global orchestrators like ESBs, favoring workflow-specific orchestrators.
- An example illustrates a simple orchestration scenario for order placement, payment, and fulfillment, highlighting the need to handle both happy paths and error conditions.

These insights help architects choose appropriate patterns based on data volume, consistency needs, and system complexity, ensuring efficient and reliable distributed architectures.



In distributed workflows, orchestration and choreography are two prominent communication styles with distinct advantages and disadvantages. Orchestration involves a central orchestrator managing the workflow, which allows for centralized state management, error handling, and recoverability. However, it can become a bottleneck, reducing responsiveness, fault tolerance, and scalability due to increased coordination points and coupling.

In contrast, choreography distributes the workflow among services without a central coordinator, enhancing responsiveness, scalability, and fault tolerance. Each service acts independently, akin to dance partners executing pre-planned moves. While this reduces coupling, it complicates error handling, state management, and recoverability since no single entity oversees the workflow.

Error scenarios illustrate the trade-offs between these styles. In orchestration, if a payment is rejected, the orchestrator updates the order state and notifies the customer. Similarly, for back orders, it manages refunds and state updates without needing additional communication paths. Choreography, however, requires services to handle errors independently, increasing complexity as each service must issue compensating messages for errors, like back orders.

The choice between orchestration and choreography depends on the workflow's complexity and requirements. Orchestration suits complex workflows with frequent error conditions, while choreography excels in scalable, responsive systems with fewer errors. Architects must balance semantic coupling, inherent in the domain, with implementation choices to avoid increasing complexity unnecessarily.

State management in choreography can be handled through patterns like the Front Controller, which centralizes state in the first service, or stateless choreography, which queries services for real-time snapshots. Another approach is stamp coupling, embedding state in message contracts, allowing services to pass workflow state without additional queries.

Ultimately, the decision hinges on the workflow's needs for coordination, error handling, and scalability. Orchestration is beneficial for complex workflows requiring robust error management, while choreography is ideal for scalable systems with simpler error conditions. Understanding these trade-offs is crucial for architects designing distributed systems.



The text discusses managing distributed workflows, focusing on ticketing systems and transactional sagas. It examines the trade-offs between orchestration and choreography in ticket workflows, highlighting key considerations such as workflow control, state query, and error handling.

In orchestration, a central orchestrator manages the workflow, offering better control and error handling. This approach is beneficial for tracking ticket status and handling errors, but it may face scalability issues due to reliance on a single orchestrator. Choreography, on the other hand, involves decentralized control where services interact directly. It can offer better scalability and flexibility but lacks centralized error handling and control.

The text then explores transactional sagas, a pattern used in distributed systems to manage transactions. Sagas are sequences of local transactions where each step publishes an event to trigger the next. If a step fails, compensating transactions are used to undo previous changes. The concept originated in early distributed architectures to limit database lock scopes.

Eight saga patterns are identified, each with different combinations of communication, consistency, and coordination: Epic Saga (synchronous, atomic, orchestrated), Phone Tag Saga (synchronous, atomic, choreographed), and others. The Epic Saga mimics monolithic systems with synchronous communication and centralized orchestration, offering familiar behavior but presenting challenges in distributed environments due to high coupling and complexity.

The Phone Tag Saga replaces orchestration with choreography, reducing bottlenecks and potentially improving scalability. However, it increases complexity as services must handle workflow logic and error handling, which can impact performance and responsiveness.

Overall, choosing between orchestration and choreography involves trade-offs in control, scalability, and complexity. The text emphasizes the importance of understanding these trade-offs to select the most suitable pattern for specific architectural needs.



The text discusses various patterns for managing transactional workflows in distributed systems, focusing on their characteristics, trade-offs, and suitability for different scenarios.

### Phone Tag Saga (sac)
- **Communication**: Synchronous
- **Consistency**: Atomic
- **Coordination**: Choreographed
- **Coupling**: High
- **Complexity**: High
- **Responsiveness/Availability**: Low
- **Scale/Elasticity**: Low

This pattern is suitable for simple workflows with fewer error conditions. It offers slightly better characteristics than the Epic Saga but increases complexity due to the lack of an orchestrator.

### Fairy Tale Saga (seo)
- **Communication**: Synchronous
- **Consistency**: Eventual
- **Coordination**: Orchestrated
- **Coupling**: High
- **Complexity**: Very Low
- **Responsiveness/Availability**: Medium
- **Scale/Elasticity**: High

This pattern is popular in microservices architectures due to its balance of trade-offs. It uses eventual consistency, allowing each service to manage its transactions, reducing the complexity of coordination.

### Time Travel Saga (sec)
- **Communication**: Synchronous
- **Consistency**: Eventual
- **Coordination**: Choreographed
- **Coupling**: Medium
- **Complexity**: Low
- **Responsiveness/Availability**: Medium
- **Scale/Elasticity**: High

This pattern is ideal for high-throughput, one-way communication workflows. It lacks an orchestrator, requiring services to manage their workflow states, making it suitable for simple workflows.

### Fantasy Fiction Saga (aao)
- **Communication**: Asynchronous
- **Consistency**: Atomic
- **Coordination**: Orchestrated
- **Coupling**: High
- **Complexity**: High
- **Responsiveness/Availability**: Low
- **Scale/Elasticity**: Low

This pattern attempts to improve performance by using asynchronicity but adds complexity due to the need for transactional coordination. It is less effective than the Parallel Saga for performance improvements.

### Horror Story (aac)
- **Communication**: Asynchronous
- **Consistency**: Atomic
- **Coordination**: Choreographed
- **Coupling**: Medium
- **Complexity**: Very High
- **Responsiveness/Availability**: Low
- **Scale/Elasticity**: Medium

This pattern combines stringent transactional requirements with loose coupling styles, leading to high complexity and low responsiveness. It is generally considered a poor choice due to the difficulties in managing transactions without an orchestrator.

### Parallel Saga (aeo)
- **Communication**: Asynchronous
- **Consistency**: Eventual
- **Coordination**: Orchestrated
- **Coupling**: Low
- **Complexity**: Low
- **Responsiveness/Availability**: High
- **Scale/Elasticity**: High

This pattern loosens the constraints of the Epic Saga by using asynchronous communication and eventual consistency, improving performance and scalability. It is suitable for complex workflows with a need for parallel execution.

Each pattern offers a unique set of trade-offs in terms of coupling, complexity, responsiveness, and scalability, providing architects with options to tailor their system designs according to specific requirements and constraints.



In microservices architecture, transaction boundaries are minimized to enhance scalability and isolation. Some services require high scalability and elasticity, while others prioritize security. Domain-level transaction isolation allows scalability around domain concepts. The Parallel Saga pattern benefits from asynchronous communication and eventual consistency, offering high responsiveness, availability, and scalability with low complexity and coupling. It suits complex workflows needing high scale.

The Anthology Saga pattern contrasts with the Epic Saga, using asynchronous communication and choreographed coordination, resulting in low coupling but high complexity. It excels in throughput, scalability, and elasticity, without orchestration, making it challenging for complex workflows. It's ideal for simple, linear workflows requiring high performance and scale.

State management and eventual consistency use finite state machines to track transactional saga states and correct errors through retries or manual actions. The Fairy Tale Saga example shows improved responsiveness but temporary data inconsistency. The state machine pattern outlines possible paths in a distributed architecture, managing transitions and actions.

Saga state machines start with a beginning state, transition through various states, and end with a closed state. For instance, a problem ticket workflow includes states like CREATED, ASSIGNED, ACCEPTED, and COMPLETED, with transitions based on actions like assigning tickets or sending surveys. State management allows for good responsiveness but may cause temporary data desynchronization.

Managing sagas involves designing and maintaining distributed transactions, often using annotations or attributes to document and associate services with sagas. Java and C# code examples show defining transactional sagas and identifying involved services. This helps define testing scopes and understand service impacts.

Custom tools can analyze codebases to provide real-time saga information, aiding developers and architects in managing transactional sagas. For example, a tool can list services involved in a specific saga, like NEW_TICKET, enhancing understanding of service interactions.

In the Sysops Squad scenario, workflows and diagrams illustrate transactional processes, such as marking tickets complete. The Epic Saga pattern requires synchronous operations for ticket status updates and survey sending, involving services like the Ticket Orchestrator and Survey Service. This approach highlights the need for compensating updates in transactional workflows.



The text discusses the complexities and challenges of distributed transactions in software architecture, particularly focusing on compensating updates and their impact on system behavior. It illustrates the workflow of a ticket management system where a Sysops Squad expert marks a ticket as complete, and the subsequent processes involved, including sending a survey to the customer and updating the ticket status. The absence of transactional isolation in distributed transactions can lead to side effects, as other services might act on data before the transaction completes. For instance, if the Survey Service is unavailable, a compensating update is issued to revert the ticket status, but other services like Analytics might have already processed the data, leading to inconsistencies.

Compensation failures are another issue, where attempts to revert a transaction state can fail, causing confusion about the ticket's status. These failures highlight the lack of responsiveness and the semantic coupling of end users to business processes. The text suggests that eventual consistency and asynchronous processing, as seen in Fairy Tale and Parallel Saga patterns, can mitigate some of these issues by reducing user impact and improving responsiveness.

The discussion transitions to contracts in software architecture, emphasizing the importance of choosing between strict and loose contracts. Strict contracts require adherence to specific details and are often used in RPC systems like gRPC, offering guaranteed fidelity but introducing brittleness due to tight coupling. Loose contracts, such as those used in REST and GraphQL, offer flexibility and reduce brittleness by modeling resources rather than method calls, allowing for changes without breaking existing functionality.

The text also touches on the trade-offs between strict and loose contracts. Strict contracts provide certainty and versioning but can lead to fragility in integration architecture. Loose contracts, while offering decoupling and flexibility, lack verification and may require additional logic to handle data. The decision on contract type depends on the specific needs of the architecture, balancing the need for flexibility against the need for certainty and control.

Overall, the text highlights the challenges of managing distributed transactions and the importance of carefully designing contracts to ensure robust and scalable architectures. It underscores the need for architects to understand the implications of their choices on system behavior and user experience, advocating for solutions that balance consistency, coordination, and communication.



In microservices architecture, contracts define how services interact, influencing the level of coupling and flexibility. Strict contracts ensure fidelity and provide clear documentation but create tight coupling, requiring simultaneous updates when changes occur. They are versioned, facilitating precision but can complicate integration without a clear deprecation strategy. Loose contracts, such as name-value pairs, offer high decoupling and easier evolution, though they lack strict management features, potentially leading to errors like misspelled names. To address this, consumer-driven contracts act as an architectural fitness function, allowing consumers to specify required data, ensuring contract fidelity while maintaining loose coupling.

Consumer-driven contracts enable variability in contract strictness and allow services to evolve independently, but they require mature engineering practices and involve using two mechanisms for validation. Stamp coupling, another integration pattern, involves passing large data structures between services, where each service interacts with only parts of the data. While it can facilitate complex workflows, it often leads to high coupling and bandwidth issues if not managed properly.

In distributed architectures, stamp coupling can inadvertently create over-coupling and excessive bandwidth usage, especially when large data structures are unnecessarily passed. However, it can be beneficial for workflow management, where it helps maintain state between services in a choreographed setup, albeit at the cost of increased coupling.

The Sysops Squad Saga illustrates practical contract management decisions. For instance, using loose contracts for mobile applications deployed via public app stores can offer flexibility and accommodate slower update cycles. This approach requires additional validation logic in orchestrators and applications but can be revisited if deployment policies change.

In the realm of data management, separating operational and analytical data remains a significant challenge. Traditional approaches like data warehouses aimed to address this by enabling specialized queries, but they often introduced issues such as complex transactional coordination. As architectures evolve, new paradigms like data mesh emerge to better handle the diverse needs of modern data usage, emphasizing the importance of understanding trade-offs in architectural decisions.



The Data Warehouse pattern evolved with several common characteristics, primarily focusing on extracting operational data from multiple sources into a central warehouse for analytical purposes. This involved transforming data into a unified schema, often using a Star Schema for dimensional modeling, which facilitated easier querying but required denormalization. The data warehouse allowed for centralized analysis, typically by data analysts, using SQL-like interfaces to generate business intelligence reports and dashboards. However, the pattern suffered from integration brittleness, extreme partitioning of domain knowledge, complexity, and limited functionality, often failing to deliver the expected business value due to synchronization bottlenecks and differences between operational and analytical contracts.

In response to these issues, the Data Lake pattern emerged, reversing the transformation process by loading data in its raw form and transforming it on demand. This approach suited machine learning use cases better and reduced upfront transformation work. However, it introduced challenges in discovering data relationships, managing PII, and maintaining data integrity. The Data Lake pattern still centralized data, requiring consumers to connect disparate datasets, often leading to stale data and operational bottlenecks.

The Data Mesh pattern, developed by Zhamak Dehghani, addresses these limitations by decentralizing data management and aligning it with business domains. It is based on four principles: domain ownership of data, treating data as a product, a self-serve data platform, and computational federated governance. This approach allows for peer-to-peer data sharing without centralized lakes or warehouses, empowering domain teams to build and maintain data products. The Data Mesh introduces the concept of a data product quantum (DPQ), a core architectural element that overlays modern distributed architectures like microservices, enabling a more flexible and domain-aligned data management strategy.



In modern architectures, a Data Product Quantum (DPQ) acts as an interface for analytical and reporting systems, integrating behavior and transactional data. DPQs are operationally independent but tightly coupled with services, enabling data analysis and business intelligence. There are three primary types of DPQs:

1. **Source-aligned DPQ**: Provides analytical data for a collaborating architecture quantum, often a microservice.
2. **Aggregate DPQ**: Combines data from multiple sources, either synchronously or asynchronously.
3. **Fit-for-purpose DPQ**: Tailored for specific needs like business intelligence or machine learning.

Each domain contributing to analysis includes a DPQ, which functions as a cooperative quantum, communicating asynchronously with its cooperator while maintaining tight contract coupling. The analytical quantum, responsible for reports and intelligence, statically couples with individual DPQs, using synchronous or asynchronous calls as needed.

**Data Mesh and Architecture Quantum**: DPQs are integral to architecture quanta, ensuring analytical reporting capabilities. They should remain orthogonal to service implementations, using asynchronous communication patterns for minimal operational impact. This approach aligns with modern architecture principles, promoting decoupling between analytical and operational data.

**Trade-offs of Data Mesh**: While suitable for microservices, data mesh requires careful contract coordination and supports eventual consistency. It excels in distributed architectures but poses challenges where data synchronization is critical. The mesh allows domain teams to control data transparency and quality, fostering incremental evolution in software ecosystems.

**Case Study - Sysops Squad**: A practical implementation involves the Sysops Squad using a data mesh to become data-driven in expert supply planning. Each new service includes a DPQ, with domain teams managing their cooperative quanta. The platform offers self-serve capabilities, enabling teams to create new analytical use cases by connecting to existing DPQs.

A federated governance group standardizes DPQ aspects like data-sharing contracts and access control. The platform enriches DPQ sidecars with policy execution capabilities. For expert supply, a new DPQ aggregates data from various sources, using machine learning to provide daily recommendations.

**Ensuring Data Accuracy**: The Expert Supply DPQ must receive complete daily data snapshots to maintain trend analysis accuracy. Incomplete data is avoided to prevent skewed results, with contracts ensuring loosely coupled data sources.

**Building Trade-off Analysis**: Effective trade-off analysis in architecture involves identifying entangled dimensions, analyzing coupling, and assessing the impact of changes. Static coupling diagrams map dependencies, while dynamic coupling considers workflow communication. Iterative design and sample topologies help architects evaluate trade-offs efficiently.

Overall, the data mesh approach and careful trade-off analysis facilitate robust, adaptable architectures that address both operational and analytical needs.



In the realm of software architecture, trade-offs are a critical consideration, focusing on coupling, complexity, responsiveness/availability, and scale/elasticity. The analysis involves understanding the dynamics of communication, consistency, and coordination, as exemplified by the "Parallel Saga" pattern. This pattern has low coupling and complexity, with high responsiveness and elasticity, making it a favorable choice in many scenarios.

A consolidated comparison of various patterns shows a direct inverse correlation between coupling level and scalability. High coupling often results in reduced scalability and responsiveness due to the increased likelihood of workflow failures when multiple services are involved. This iterative analysis approach allows architects to explore different architectural dimensions and their implications.

Trade-off analysis in software architecture often relies on qualitative rather than quantitative methods due to the unique nature of each architecture. Architects are encouraged to build dimensional matrices to compare coupled concerns and perform qualitative analysis to inform decision-making. A useful tool in this process is the MECE (Mutually Exclusive, Collectively Exhaustive) list, which ensures comprehensive and non-overlapping comparisons.

Context is crucial in trade-off analysis. Architects must avoid the "out-of-context" trap by ensuring decisions are made within the relevant context, balancing the correct set of trade-offs. This approach involves modeling relevant domain scenarios to identify the most significant trade-offs, such as deciding between shared services or libraries in distributed architectures.

Architects should focus on the bottom line rather than overwhelming stakeholders with technical details. This involves distilling trade-off analyses into key points for stakeholders to consider, such as the choice between synchronous and asynchronous communication in microservices architectures. The goal is to enable stakeholders to focus on outcomes rather than technical intricacies.

Evangelism and enthusiasm for specific technologies can lead to biased decision-making. Architects must remain objective, avoiding the enhancement of positives and diminishment of negatives. Scenario analysis is a powerful tool to counteract evangelism, allowing architects to model likely scenarios and discover the real trade-offs involved.

In summary, effective trade-off analysis in software architecture requires iterative exploration, qualitative assessment, contextual understanding, and clear communication of key points. By focusing on these areas, architects can navigate the complexities of architectural decision-making and achieve optimal design solutions.



The text discusses a classic software architecture decision involving the monorepo approach. The tech lead supports this strategy, while the architect emphasizes the importance of trade-offs rather than taking opposing positions. The architect agrees to try the monorepo approach but insists on gathering metrics to avoid negative outcomes, such as accidental coupling between projects. They implement fitness functions to prevent such issues. The text advises architects to focus on trade-offs rather than evangelizing solutions, as this adds value by honing analytical skills.

The discussion highlights the need for constant trade-off analysis in architecture, viewing it as an advantage rather than a disadvantage. By isolating dimensions and modeling trade-offs, teams gain valuable insights into their unique ecosystem. Testing is emphasized as the engineering rigor of software development, allowing for flexibility and quantitative analysis.

The text references various architecture concepts and techniques, including cyclomatic complexity, component coupling, technical versus domain partitioning, and different architectural styles like layered and microservices architecture. It also includes a list of Architecture Decision Records (ADRs) that document decisions made throughout the book, such as migrating to a distributed architecture and using document databases.

Additionally, the text provides a comprehensive list of trade-off tables and figures, summarizing trade-offs around specific architectural concerns. These include database adoption characteristics, code replication, shared libraries, service techniques, and various communication patterns. The importance of understanding trade-offs in areas like orchestration, choreography, and state management is emphasized.

Overall, the text underscores the significance of trade-off analysis in software architecture, advocating for a nuanced approach that considers the unique aspects of each system rather than relying on generic solutions.



The text covers a wide array of topics related to database management, architectural design, and data ownership strategies. Key points include:

1. **Data Domains and Ownership**: Data domains are critical in decomposing monolithic architectures, allowing for independent service deployment. Assigning tables to data domains and creating separate schemas can enhance modularity and scalability. Ownership models vary, including single, common, and joint ownership, with techniques like service consolidation and table splitting used to manage these.

2. **Database Types and Optimization**: Different database types, such as relational, NoSQL, and NewSQL, offer various benefits. Optimization involves choosing the right type based on factors like scalability, fault tolerance, and data access patterns. Techniques like database-per-service and schema separation help achieve these optimizations.

3. **Distributed Data Access and Transactions**: Distributed architectures require careful management of data access and transactions. Patterns like Column Schema Replication and Replicated Caching are used to manage distributed data. ACID and BASE transactions are discussed, with eventual consistency being a key consideration in distributed systems.

4. **Modularity and Granularity**: Modularity is essential for maintainability, deployability, and fault tolerance. Granularity affects service scope and is influenced by factors like data relationships and database transactions. Balancing granularity involves trade-offs between integration and disintegration drivers.

5. **Architectural Patterns and Design**: Patterns such as Domain-Driven Design (DDD), microservices, and event-driven architectures are explored. These patterns help manage complexity and improve system resilience. Techniques like bounded context and choreography versus orchestration are used to manage workflows and data dependencies.

6. **Security and Fault Tolerance**: Security concerns, especially around sensitive data like PCI, are addressed through granularity and service design. Fault tolerance is achieved through strategies like choreography, orchestration, and shared libraries.

7. **Code Reuse and Shared Services**: Shared libraries and services are crucial for code reuse, promoting consistency and efficiency. Strategies for versioning and managing shared components are discussed to maintain system integrity.

8. **Sysops Squad Saga**: This recurring example illustrates the practical application of these concepts, showing how a fictional team navigates challenges in system design and data management.

The text provides a comprehensive guide to managing complex systems through strategic architectural decisions, focusing on scalability, modularity, and data sovereignty.



The text provides a comprehensive overview of various software architecture concepts and practices. Key topics include:

1. **Change Risk and Fault Tolerance**: Emphasizes the importance of managing change risk (pages 228-234) and implementing fault tolerance (page 232) to ensure system reliability and performance.

2. **Scalability and Performance**: Discusses scalability (page 232) and performance (page 231), highlighting the need for systems to handle growth efficiently.

3. **Distributed Architectures**: Covers side effects in distributed systems (page 361) and the Sidecar pattern (pages 234-239) as a method to manage these complexities.

4. **Single Point of Failure (SPOF)**: Identifies SPOF as a critical risk (page 143) and suggests architectural strategies to mitigate it.

5. **SOLID Principles**: Focuses on the single responsibility principle (page 190) and its relation to granularity (pages 186, 190), ensuring modular and maintainable code.

6. **Data Management**: Explores data management techniques, including the Snowflake cloud-native database (page 175), BASE transactions (page 267), and eventual consistency (page 267).

7. **Coupling and Cohesion**: Discusses static and dynamic coupling (pages 23, 28, 29) and their impact on system architecture, emphasizing trade-off analysis (page 401).

8. **State Management**: Examines state machines (pages 352-355) and state management techniques, including compensating updates (page 355).

9. **Workflow Management**: Details workflow management strategies, including orchestration and choreography (pages 305, 313), and the use of state machines (pages 352-355).

10. **Transactional Sagas**: Describes transactional saga patterns (pages 323, 358-364), including compensating transactions and eventual consistency.

11. **Domain-Driven Design**: Highlights the importance of domain partitioning (pages 388) and domain workflows (page 311) for maintainability and scalability.

12. **Granularity and Modularity**: Discusses granularity (pages 185, 209-216) and modularity drivers like speed-to-market (page 49) and testability (page 54).

13. **Visualization Tools**: Stresses the importance of visualization in architecture (page 116), with tools like JDepend (page 66) and SonarQube (page 10) for code analysis.

14. **Version Control and API Versioning**: Covers version control systems (page 191) and API endpoint versioning (page 230) to manage code changes and maintain strict contracts (page 370).

15. **Trade-off Analysis**: Emphasizes the iterative nature of trade-off analysis (page 403) and the importance of assessing trade-offs to achieve optimal architecture.

16. **Transactional Patterns and State Management**: Explores various saga patterns (page 323) and state management techniques (page 351), focusing on compensating updates and eventual consistency.

17. **Tools and Techniques**: Describes tools like ArchUnit (page 129) and techniques such as tactical forking (page 72-78) for effective software architecture management.

Overall, the text provides a detailed exploration of software architecture principles, emphasizing the importance of balancing trade-offs, managing dependencies, and ensuring system resilience and scalability.
