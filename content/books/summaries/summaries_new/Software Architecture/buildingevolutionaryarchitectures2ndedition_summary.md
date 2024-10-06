
**Building Evolutionary Architectures** by Neal Ford, Rebecca Parsons, Patrick Kua, and Pramod Sadalage explores the necessity for software architectures to evolve in response to rapidly changing business and technology landscapes. This second edition focuses on techniques for creating agile architectures capable of adapting to constant change, emphasizing the importance of viewing architecture not as a static entity but as a dynamic, enabling force.

The book is structured into three parts:

1. **Mechanics**: This section introduces the concept of evolutionary architecture, discussing how teams can use tools and techniques to build fitness functions, deployment pipelines, and other mechanisms to govern and evolve software projects. It highlights the importance of guided and incremental change, ensuring architecture remains adaptable over time.

2. **Structure**: This part delves into architectural styles and design principles, such as coupling and reuse, that facilitate cleaner evolution. It covers concepts like connascence, architectural quanta, and independently deployable components, emphasizing the need for high functional cohesion and appropriate coupling.

3. **Impact**: The final section examines the intersection of engineering practices and structural considerations. It provides guidelines for building evolvable architectures, such as identifying dimensions affected by evolution, defining fitness functions, and using deployment pipelines. It stresses the importance of making decisions reversible and building anticorruption layers to mitigate external change.

Key concepts include:

- **Fitness Functions**: These are used to monitor and govern the state of architecture, ensuring it evolves in a controlled manner. They can be categorized by scope, cadence, and result, and are essential for automating architectural governance.

- **Incremental Change**: Emphasized as a core principle, incremental change allows architecture to adapt without significant disruption, supported by deployment pipelines and automated governance tools.

- **Connascence and Architectural Quanta**: These concepts help manage dependencies and granularity in software systems, ensuring components are independently deployable and maintain high cohesion.

- **Evolutionary Data**: The book discusses evolutionary database design, focusing on evolving schemas, managing data entanglement, and transitioning from relational to non-relational databases.

- **Pitfalls and Antipatterns**: It identifies common pitfalls like leaky abstractions and vendor lock-in, offering strategies to avoid them.

The authors, leveraging their expertise at Thoughtworks, advocate for continuous delivery and feedback loops as vital components of evolutionary architecture. They emphasize the role of culture, experimentation, and hypothesis-driven development in fostering an environment conducive to architectural evolution.

Overall, the book provides a comprehensive roadmap for building software architectures that can gracefully adapt to change, underscoring the importance of flexibility and continuous improvement in the modern software development landscape.



The concept of evolutionary architecture, introduced in 2017, emphasizes the need for software architectures to evolve over time to meet new demands and adapt to the changing software development ecosystem. Initially considered radical, the idea has gained traction as the industry recognizes that static architectures are impractical in a dynamic environment. The second edition of "Building Evolutionary Architectures" expands on this by providing updated techniques, tools, and case studies to facilitate the evolution of software systems.

The book is structured into three main parts: engineering practices, structural approaches, and holistic considerations. Part I focuses on the mechanics of evolutionary architecture, detailing engineering practices and verification methods that allow architectures to evolve. This includes continuous delivery, testing, and metrics, which are essential for managing change effectively. Part II addresses the structural design of software systems, exploring architectural styles and design principles that ease evolution and governance. Part III, titled "Impact," combines mechanics and structure, offering case studies, patterns, and antipatterns to guide architects and teams.

Key challenges in evolving software include managing "bit rot," where software quality deteriorates over time, and the dynamic nature of the software ecosystem. The complexity of modern software, with its numerous components and interactions, requires automated governance to handle the volume of changes and their effects. The ecosystem itself is in constant flux, with new tools and practices disrupting the status quo and necessitating new equilibria. For instance, the rise of containerization with Docker was an evolutionary step that emerged from the convergence of open-source operating systems and DevOps practices.

Architects play a crucial role in navigating these changes, balancing structural design to solve domain-specific problems while ensuring that architecture characteristics, such as scalability and maintainability, are protected. The book advocates for mechanisms akin to unit tests for these characteristics, providing ongoing assurance of architectural governance.

The authors draw on their consulting experience to present real-world case studies, using a fictional company, PenultimateWidgets, as a surrogate to illustrate practical applications of the discussed techniques. They emphasize that software architecture does not exist in isolation; it is intricately connected to the broader software development process. By adopting evolutionary principles, architects can ensure their systems remain robust and adaptable in the face of continuous change.

The book also includes typographical conventions for clarity and offers downloadable code examples to support learning. Readers are encouraged to engage with the material actively and apply the concepts to their work. The authors acknowledge the contributions of colleagues and technical reviewers who helped refine the book's content, underscoring the collaborative effort behind its creation.

Overall, "Building Evolutionary Architectures" provides a comprehensive guide for architects seeking to build systems that can gracefully adapt to evolving requirements and technological advancements. It combines theoretical insights with practical guidance, making it a valuable resource for navigating the complexities of modern software architecture.



In the context of software architecture, the role of an architect encompasses anyone making architectural decisions, necessitating collaboration across various roles. Agile projects still require architecture; the scale of the project dictates the level of architectural design needed. For simple tasks, minimal design suffices, whereas complex systems demand careful architectural considerations. The focus is on minimizing unnecessary design while allowing for iterative improvements.

**Evolutionary Architecture** is defined as supporting guided, incremental change across multiple dimensions. It involves using fitness functions to guide changes, ensuring architectural characteristics are protected and not degraded over time. Fitness functions serve as metrics to evaluate the impact of changes, making architectural decisions explicit and testable. This approach balances rapid change with the need for system rigor.

**Incremental Change** in software architecture allows for small, manageable updates both in development and deployment. This involves modularity and decoupling, as seen in microservices architecture. For example, a company might update a service to allow new functionality while maintaining the old version until all dependent services have migrated. Continuous Delivery practices support this incremental approach.

**Multiple Architectural Dimensions** must be considered in evolutionary architecture, reflecting the interconnected nature of systems. These dimensions include technical, data, security, and operational concerns. Architects must think beyond technical architecture to include all aspects that might evolve, using fitness functions to protect these dimensions.

Long-term planning in an ever-changing environment requires adaptability. Modern engineering practices, like DevOps, make change less expensive, allowing for more flexible planning. Architecture should be designed for changeability, treating evolvability as a meta-characteristic that safeguards other architectural qualities.

**Preventing Architectural Degradation** involves protecting key characteristics from erosion, known as bit rot. Architects must ensure that the architecture remains robust against changes that might compromise its integrity. Evolutionary architecture overlaps with architectural governance, automating principles around design, quality, and security.

The term "evolutionary" is preferred over others like "incremental" or "agile" because it captures both the change over time and the guided nature of the architecture's evolution. The aim is not just to adapt but to support genuine, fundamental change. Unlike emergent design, which suggests architecture will develop naturally, evolutionary architecture involves intentional planning and scaffolding to support complex systems.

Overall, evolutionary architecture provides a framework for managing change, ensuring systems remain fit for purpose in dynamic environments. It emphasizes adaptability, guided evolution, and protection of architectural integrity over time.



Evolutionary architecture emphasizes adaptability, balancing necessary structure with flexibility to accommodate changes in the problem domain and ecosystem. Architects and developers must understand engineering practices to evolve software systems gracefully, while also governing software design and development practices. Key to this approach are fitness functions, akin to unit tests, which objectively assess architectural characteristics.

Fitness functions guide incremental changes across dimensions, inspired by evolutionary computing. They evaluate how close a solution is to an ideal state, akin to genetic algorithms. Architectural fitness functions ensure new features integrate without breaking existing ones, akin to quality assurance in software development. They require various tools, such as monitors, code metrics, chaos engineering, architecture testing frameworks, and security scanning.

Fitness functions encompass diverse tools depending on the architecture characteristics being governed. For instance, ArchUnit can prevent cyclic dependencies in code by testing for cycles. Fitness functions aren't always code-based; they can involve manual processes for regulatory reasons. They measure requirements like performance, reliability, security, and integration. For example, a performance fitness function might ensure service calls respond within a specific time frame.

Fitness functions are categorized by scope, cadence, result, invocation, proactivity, and coverage. Scope differentiates between atomic functions, which test specific aspects, and holistic functions, which assess combined architectural features. Cadence distinguishes triggered functions, executed upon events, from continual functions, which constantly verify aspects like transaction speed using techniques like synthetic transactions.

Monitoring-driven development (MDD) uses production monitors to assess system health, offering dynamic insights beyond traditional tests. Temporal fitness functions incorporate time, such as ensuring encryption library updates or managing back-ported features in software upgrades. These functions help prevent issues from outdated dependencies.

Fitness functions unify various architecture verification mechanisms, transforming ad hoc tests into structured evaluations. They enable precise discussions about architectural state and guide decisions, ensuring architecture evolves in line with critical requirements. By consolidating thresholds and requirements, fitness functions provide concrete criteria for evaluating architecture integrity and performance.

Overall, fitness functions allow architects to maintain a comprehensive understanding of their architecture's health, facilitating informed decision-making and ensuring systems remain robust and adaptable in evolving environments.



In software architecture, fitness functions are used to verify and maintain desirable characteristics such as scalability, security, and performance. They serve as a governance mechanism, similar to unit tests, but focus on architectural qualities rather than domain logic.

### Fitness Function Types

1. **Continuous vs. Triggered**:
   - **Continuous**: Real-time monitoring to immediately react to violations, such as disallowed communication between microservices. This approach offers instant feedback but adds runtime overhead.
   - **Triggered**: Periodic checks, such as log analysis, to assess compliance. While it avoids runtime costs, it may not be suitable for critical issues like security due to potential delays.

2. **Static vs. Dynamic**:
   - **Static**: Fixed outcomes, like pass/fail tests.
   - **Dynamic**: Adjusts based on real-time context, such as user load affecting responsiveness.

3. **Automated vs. Manual**:
   - **Automated**: Integrated into CI/CD pipelines for efficiency.
   - **Manual**: Necessary for aspects resistant to automation, such as legal requirements or exploratory testing.

4. **Intentional vs. Emergent**:
   - **Intentional**: Defined at project inception for known architectural goals.
   - **Emergent**: Developed in response to unforeseen needs during system evolution.

5. **Domain-Specific**:
   - Fitness functions focus on architectural principles rather than domain specifics, avoiding duplication with domain logic tests.

### Who Writes Fitness Functions?

Architects typically write and maintain fitness functions, collaborating with developers to ensure understanding and integration into the development process. They provide an objective measure of architectural fitness, helping to guide evolutionary architecture by preserving key characteristics over time.

### Challenges and Tools

Unlike domain testing, architecture fitness functions lack standardized tools due to their varied nature. Architects often need to create custom solutions using available DevOps tools to measure outcomes objectively.

### System-Wide Fitness Functions

These encompass multiple individual fitness functions, allowing architects to evaluate and prioritize architectural characteristics holistically. They help navigate trade-offs, such as between performance and security, by providing a unified framework for decision-making.

### Evolutionary Architecture

Fitness functions support evolutionary architecture by enabling guided, incremental change. This approach aligns with practices like Continuous Delivery, promoting small, manageable updates across development and operational dimensions.

Overall, fitness functions unify diverse verification techniques, ensuring that evolving software systems maintain their architectural integrity and meet their intended goals.



PenultimateWidgets employs an evolutionary architecture with a focus on incremental change, utilizing a microservices approach where each service is deployed using containers like Docker. This architecture supports gradual service upgrades, such as the introduction of a new star rating service allowing half-star ratings. Services can transition to the new version at their convenience, ensuring flexibility and minimizing disruption. Architectural monitoring is used to automatically remove unused services, enhancing efficiency.

Service discovery tools play a crucial role in managing service versions and contracts. When a new service version is deployed, it registers with the discovery tool, allowing callers to choose the appropriate version without needing immediate upgrades. This flexibility is supported by a proxy mechanism that routes requests to the correct service version based on caller needs.

Deployment pipelines are central to PenultimateWidgets' operations, automating tasks like testing, provisioning, and deployment. These pipelines facilitate continuous delivery, ensuring that changes are rigorously tested and verified before production deployment. The deployment pipeline includes multiple stages, each responsible for specific tasks such as unit testing, containerization, and executing fitness functions.

Fitness functions, both atomic and holistic, are integrated into the deployment pipeline to ensure architectural integrity and compliance with requirements. These functions are automated checks that validate aspects like scalability, security, and integration. For example, PenultimateWidgets' invoicing service uses a deployment pipeline with stages for replicating CI behavior, containerization, and executing fitness functions to ensure changes don't disrupt service availability or integration.

Continuous deployment, supported by feature toggles, allows new features to be deployed without immediate user exposure. This strategy enables QA testing in production environments, enhancing testing accuracy and efficiency. Feature toggles provide flexibility in managing feature releases, aligning with business needs for staged deployments.

PenultimateWidgets also employs consumer-driven contracts to maintain API consistency across services. These contracts involve consumers defining tests that the provider must pass, ensuring integration points remain stable despite service evolution. Deployment pipelines include stages for verifying API changes, ensuring they don't introduce inconsistencies or break existing functionality.

Overall, PenultimateWidgets' approach to evolutionary architecture emphasizes flexibility, automation, and rigorous testing, enabling seamless incremental changes while maintaining system integrity and performance.



In the realm of evolutionary architecture, fitness functions serve as an "engineering safety net," automating the maintenance of integration protocol consistency. This approach requires engineering maturity, as automated fitness functions alleviate manual tasks, allowing for smoother incremental changes. Deployment pipelines facilitate A/B testing and verification before changes go live.

Software engineering diverges from traditional engineering due to its distinct design and manufacturing processes. Unlike the costly and inflexible manufacturing in structural engineering, software compilation and deployment are automated, with design being the primary focus. Incremental change, backed by automated verification, is crucial for maintaining sanity in software development.

Architects play a dual role: designing software structures and governing development practices. Traditionally reliant on manual reviews, architects now leverage automated fitness functions for governance, evolving software engineering practices. This approach, inspired by genetic algorithms, aligns with the principles of eXtreme Programming (XP), which emphasizes automation and continuous integration. Continuous integration resolves merge conflicts daily, reducing overall integration time and complexity.

Fitness functions extend to architectural governance, automating checks and ensuring architectural integrity. Tools like JDepend and NDepend provide metrics for analyzing code structure, such as afferent and efferent coupling. These metrics help architects understand and manage dependencies, preventing the creation of a "Big Ball of Mud" architecture, where changes ripple unpredictably.

Robert Martin's metrics, such as abstractness and instability, assess the balance of a codebase. Abstractness measures the ratio of abstract to concrete elements, while instability evaluates the volatility due to coupling. These metrics combine into the "distance from the main sequence," indicating a component's balance between abstractness and instability. Components too abstract fall into the "zone of uselessness," while overly concrete ones enter the "zone of pain."

Architects use these metrics for evaluation and restructuring, ensuring a stable foundation before architectural shifts. Directionality of imports is another governance aspect, ensuring proper package dependencies. Automated tests, like JDepend's, enforce these rules, reducing reliance on bureaucratic guidelines.

Cyclomatic complexity, a measure of code complexity, is a longstanding metric used to evaluate method intricacy. By employing these metrics and fitness functions, architects can maintain code quality and architectural coherence, fostering an environment conducive to incremental change and automated governance.



Cyclomatic Complexity (CC) is a metric developed by Thomas McCabe Sr. in 1976 to measure code complexity, using graph theory to count decision points and execution paths. For example, a function without decisions has a CC of 1, while a function with one conditional has a CC of 2. The formula for CC is `CC = E - N + 2`, where `E` is edges (decisions) and `N` is nodes (lines of code). The metric helps identify code complexity, which can lead to issues like poor modularity and testability.

Industry standards suggest a CC under 10 is acceptable, though under 5 is preferable for well-factored code. Tools like Crap4j evaluate code quality by combining CC with code coverage. High CC values, such as a function with over 800, indicate problematic code. Practices like Test-Driven Development (TDD) inadvertently reduce complexity by encouraging smaller, cohesive methods.

Architects use CC to govern code complexity, setting thresholds and gradually improving values over time. This approach helps manage technical debt and prevent code degradation. For projects with high complexity, cascading fitness functions can issue warnings and escalate to errors, allowing teams to address issues progressively.

Turnkey tools assist architects in managing complex problems. For instance, PenultimateWidgets faced licensing issues with open-source libraries. They created a fitness function to track and compare library licenses, alerting lawyers to changes. This blend of automated detection and manual intervention ensures compliance.

Accessibility (A11y) tools, like Pa11y, help validate application support for users with differing capabilities. ArchUnit, a Java testing tool, allows architects to enforce architectural rules, such as package dependencies, class dependencies, inheritance, and annotations. These rules ensure proper component interaction and adherence to design principles.

ArchUnit's governance checks include layered architecture enforcement, ensuring dependencies only exist between adjacent layers. This prevents widespread changes due to dependency ripple effects. While ArchUnit is Java-specific, similar tools like NetArchTest exist for .NET, and linters for other languages offer structural checks.

Case studies illustrate practical applications of fitness functions. PenultimateWidgets tested a legacy system's integration capability, confirming its adequacy and saving resources. Another case involved auto-scaling a service for scalability, using canary releases to test changes. A third example involved deciding which features to port from a Java Swing application to a web app by logging user interactions to prioritize development.

Overall, these practices and tools enable architects to transform software development from a subjective craft to a measurable engineering discipline, ensuring code quality and maintainability.



The text discusses the use of fitness functions in software architecture, particularly for governance and integration in microservices and enterprise environments. Fitness functions are tools and metrics that provide objective measures to ensure systems meet specific requirements. They include tools like SonarCube, linting tools, and source-code verification tools. To effectively use them, they must be integrated into continuous verification processes.

In microservices, fitness functions govern communication between services. For example, ensuring that domain services communicate only with an orchestrator can be implemented using log messages with specific formats. Architects can write simple scripts to enforce such rules, reacting to violations either reactively or proactively. The choice depends on the criticality of the governance task.

Different implementations of fitness functions offer trade-offs. For instance, ensuring message reliability in a microservices architecture can be done by counting messages or using correlation IDs. The former checks service-level reliability, while the latter offers end-to-end reliability but requires maintaining state.

The text also explores the role of fitness functions in DevOps, using Netflix's Chaos Engineering as a case study. Netflix's Simian Army, including tools like Chaos Monkey and Latency Monkey, was designed to test the resilience of their systems under unexpected conditions. These tools forced developers to build robust systems capable of withstanding faults.

Enterprise architecture benefits from fitness functions by encapsulating business functionality behind platforms with managed contracts. This approach reduces implementation coupling, making architectures less brittle. Enterprise architects focus on defining capabilities rather than specific technologies, using fitness functions to ensure platforms meet strategic goals.

The Frozen Caveman Antipattern is highlighted, where architects revert to outdated concerns due to past experiences. Overcoming this requires realistic risk assessment and focusing on strategic vision rather than specific technology choices.

Overall, fitness functions provide a framework for architects to ensure systems align with organizational goals, allowing for continuous improvement and adaptation in a rapidly changing technological landscape.



GitHub faced scalability issues with its merge functionality, which relied on a shell script around command-line Git. To address this, they developed a replacement library, libgit2, and implemented merge functionality within it. However, deploying this new solution into production risked introducing bugs into existing functionality. To mitigate this risk, GitHub developers used Scientist, an open-source framework in Ruby, for holistic testing of code changes.

Scientist allows developers to compare existing and new code behaviors by encapsulating the current behavior in a `use` block and the experimental behavior in a `try` block. It ensures the existing behavior is returned to users even if the new code differs, thus safeguarding against negative impacts. Scientist randomizes the execution order of `use` and `try` blocks to prevent masking bugs and measures performance to aid in A/B testing. Exceptions in the `try` block are logged but not exposed to users.

In a case study, GitHub tested a new merge algorithm by deploying it to 1% of users. After four days with no issues, they fully replaced the old code. This approach exemplifies a fidelity fitness function—ensuring new systems maintain the same behavior as old ones during replacement. Such functions allow side-by-side comparisons and help manage technical debt without disrupting service.

Fitness functions, like Scientist, act as guardrails for architectural governance, similar to checklists used by surgeons and pilots. They enforce architectural principles and prevent system degradation over time. While they add overhead, they are crucial for maintaining codebase integrity and facilitating future evolution.

Documentation of fitness functions is vital. They can be documented within Architectural Decision Records (ADRs) or through behavior-driven development (BDD) frameworks like Cucumber, which map natural language to verification code. This ensures that developers understand the purpose of fitness functions and can maintain them effectively.

Connascence, a concept introduced by Meilir Page-Jones, provides a framework for understanding coupling in software architecture. It distinguishes between static connascence (source code-level coupling) and dynamic connascence (runtime coupling). Types of static connascence include Connascence of Name, Type, Meaning, Position, and Algorithm, each describing different levels of dependency between components. Dynamic connascence includes Connascence of Execution, highlighting the importance of execution order.

Overall, fitness functions and connascence provide valuable tools for architects to manage complexity and ensure that software systems can evolve gracefully without losing functionality or performance.



The concept of connascence in software architecture involves understanding dependencies and couplings between components. Key types include Connascence of Timing (CoT), where timing affects outcomes, Connascence of Values (CoV), where related values must change together, and Connascence of Identity (CoI), where components reference the same entity. Connascence is analyzed by strength, locality, and degree, guiding architects in refactoring and improving modularity.

Connascence strength refers to how easily a type of coupling can be refactored, with static connascence preferred over dynamic due to easier analysis. Locality measures the proximity of modules; closer modules can tolerate higher forms of connascence. Degree relates to the impact size, with lesser degrees causing less damage.

Eric Evans's Domain-Driven Design (DDD) introduces bounded context, emphasizing localized domains to prevent implementation details from leaking. This concept aligns with the principle of minimizing coupling to maintain architectural integrity. Architects aim to restrict implementation coupling to the tightest scope possible, enhancing system robustness.

Architectural quanta refer to independently deployable components with high functional cohesion. In monolithic architectures, the entire application is a single quantum, while microservices allow for multiple quanta, each deployable independently. Static coupling involves dependencies like databases, while dynamic coupling involves runtime communication.

High functional cohesion means related elements are closely aligned, supporting domain workflows. High static coupling indicates tightly wired elements, often involving contracts like REST or SOAP. Architectural quanta help define deployment boundaries and ensure systems are modular and adaptable.

In distributed architectures, quanta can vary. For example, a broker-style event-driven architecture may form multiple quanta if there are no static dependencies. Microservices typically form individual quanta due to high decoupling, allowing teams to innovate independently. However, tightly coupled user interfaces can reduce quanta to one, highlighting the importance of managing coupling points.

Overall, understanding and managing connascence, bounded contexts, and architectural quanta are crucial for building evolvable and resilient software architectures. These concepts help architects balance modularity, deployment flexibility, and system integrity.



In the context of microservices architecture, asynchronous communication is favored to avoid coupling between front-end and back-end components. A micro-frontend framework allows user interface elements to interact on behalf of services, facilitating loosely coupled communication using events. This setup forms architecture quanta, where each service and its corresponding micro-frontend have distinct architecture characteristics.

Static quantum diagrams help understand legacy architectures by illustrating how systems are interconnected, which aids in identifying impact areas during changes. Static coupling, like a shared database, creates single quanta, while dynamic coupling involves synchronous interactions at runtime. This dynamic coupling is influenced by communication synchronicity (synchronous vs. asynchronous), consistency (atomicity vs. eventual consistency), and coordination (orchestration vs. choreography).

Synchronous communication requires waiting for a response, which can block processing, while asynchronous communication allows parallel processing by using message queues. Architects must consider trade-offs in synchronization, error handling, transactionality, scalability, and performance when choosing communication methods.

Consistency in communication calls ranges from strict atomic transactions to eventual consistency. Cross-service transactions are complex and often avoided. Coordination involves orchestration or choreography, with orchestration being easier in synchronous architectures and choreography offering higher scalability with eventual consistency.

Contracts define how architecture parts connect, ranging from strict (e.g., gRPC) to loose (e.g., REST, GraphQL). Strict contracts mimic internal method calls but can lead to brittleness. Looser contracts, like those using JSON, allow for more flexibility and decoupling but lack certainty and verification.

Microservices architectures focus on business domains rather than technical dimensions, encapsulating all related components within a bounded context. This approach allows for incremental change and decouples services, enabling independent deployment and reducing coupling. Seven principles guide microservices: modeling around business domains, hiding implementation details, fostering a culture of automation, decentralization, and independent deployment.

Microservices architectures emphasize domain-driven design, where services are defined around business contexts, encapsulating technical architecture and dependencies. Services communicate via messaging, avoiding knowledge of each other's implementation details. This setup allows for service replacement without disrupting others and promotes a shared-nothing architecture to minimize coupling.

Overall, microservices architectures aim to create flexible, scalable systems that adapt to change efficiently, leveraging asynchronous communication and domain-focused design to achieve these goals.



Microservices architecture emphasizes the isolation of domains through bounded contexts, allowing developers to deploy services independently, automate tasks, and handle failures locally. This architecture is highly observable, leveraging monitoring and logging due to the impracticality of manually overseeing numerous services. Microservices adhere to principles like the Reactive Manifesto, supporting robust systems through patterns such as Circuit Breakers and bulkheads.

The architectural quantum in microservices is the service itself, enabling evolutionary architecture by allowing changes without affecting other services. This is achieved through integration points protected by fitness functions, such as consumer-driven contracts. Incremental changes are facilitated by bounded contexts and automation practices like Continuous Delivery and DevOps, which include deployment pipelines and testing.

Historically, the lack of automation and the high cost of operations led to shared resource architectures. However, advancements in Continuous Delivery and open-source software have shifted focus towards domain-centric architectures. Microservices avoid tight coupling by preferring duplication over reuse, as reuse often introduces unwanted dependencies. Each service maintains its own representation of shared entities, facilitating independent evolution and reducing coupling.

The Sidecar pattern helps manage operational concerns like monitoring and logging, decoupling them from domain logic. This pattern supports a service mesh, providing a consistent operational interface across services and enabling unified capabilities such as scaling and monitoring. The service mesh enhances governance and supports infrastructure needs across diverse platforms, maintaining consistency in cross-cutting concerns.

Data Mesh architecture applies similar principles to analytical data, promoting decentralized data management aligned with business domains. It introduces the concept of data as a product, encouraging domains to share high-quality data. The architecture includes a self-serve data platform and computational federated governance to ensure compliance and quality across domains. The data product quantum is a core architectural element, enabling discoverable and secure data sharing.

Overall, microservices and Data Mesh architectures focus on decoupling and domain-centric design, supporting evolution and adaptability while managing complexity through patterns like Sidecar and service mesh.



In modern distributed architectures like microservices, the concept of a Data Product Quantum (DPQ) plays a crucial role. A DPQ is an operationally independent but highly coupled component that acts as an interface for analytics and reporting within a system. It is adjacent to the service it supports, containing both code and data. DPQs are categorized into types like Source-aligned, Aggregate, and Fit-for-purpose, each serving different analytical needs.

The DPQ operates as a cooperative quantum, maintaining asynchronous communication with its associated service while ensuring eventual consistency. This separation allows for operational independence while maintaining tight contract coupling. The analytical quantum, responsible for business intelligence, interacts with DPQs through static quantum coupling, using either synchronous or asynchronous calls.

Data Mesh exemplifies the integration of microservices with analytical data, enabling architects to overlay one architecture atop another, facilitating domain-driven design (DDD) and well-governed access to necessary data.

Understanding the impact of structure on software system evolution is crucial. Controlled coupling, inspired by concepts like connascence and bounded context in DDD, is key to building evolvable architectures. Contracts facilitate communication between architecture parts without creating tight coupling, using flexible contracts and fitness functions.

Data considerations are vital in evolutionary architecture. Modern architectures like microservices require careful data partitioning, dependencies management, and transaction handling. Evolutionary Database Design focuses on evolving database schemas alongside code, treating changes as tested, versioned, and incremental. Database migration tools automate these changes, allowing for continuous delivery integration.

Shared Database Integration, a common pattern, uses databases as integration points, often leading to fossilized schemas. The Expand/Contract pattern helps manage schema changes, maintaining both old and new states during transitions to ensure backward compatibility.

Database migrations allow incremental schema and code changes, integrating into deployment pipelines for earlier verification and automation. However, challenges arise due to the antiquated tools and practices in data teams compared to software development. This lag is partly due to the relationship between database vendors and consumers, where innovation in data tools hasn't kept pace with development tools.

In summary, modern software architectures benefit from a strategic approach to data management, leveraging DPQs and evolutionary design principles to ensure flexibility and evolvability. Controlled coupling and effective use of contracts and migration tools are essential for maintaining system adaptability and performance.



Data teams often exhibit strong loyalty to specific database vendors, leading to stagnation in innovation as they rely solely on vendor-provided tools. This vendor allegiance results in a reluctance to adopt new engineering practices like Continuous Delivery. However, the rise of open source and NoSQL databases is challenging this hegemony.

Transactions, a form of coupling in architectures, complicate system evolution. Architects must consider transactional boundaries, which act like a strong nuclear force binding components, making changes difficult. When transitioning to more granular architectures, it's crucial to limit transactional contexts to avoid tight coupling.

Data teams often resist schema changes, leading to fossilized, complex schemas over time. Legacy data quality issues arise from multiple software generations, creating inconsistent data. To build evolutionary architectures, data teams must refactor schemas and improve data quality, balancing legacy data preservation with the need for change.

Referential integrity, a governance form at the schema level, can increase coupling, hindering evolution. Microservices architectures challenge traditional database perspectives by promoting data-per-service models, requiring careful management of read and write operations to avoid excessive interservice communication.

Stored procedures, while powerful, pose challenges in modern practices due to testing and refactoring difficulties. As systems migrate to microservices, stored procedures often need refactoring into application code, using patterns like Expand/Contract and Strangler Fig to transition functionality.

Organizations transitioning from monolithic to microservices architectures may rethink persistence strategies, opting for different databases based on specific problem domains. This flexibility allows for better alignment with business needs rather than adhering to a single standard.

Overall, building evolutionary architectures requires integrating effective data practices with modern engineering approaches, ensuring data can evolve alongside systems.



In the transition to microservices, breaking monolithic data into multiple, specialized databases is essential, though it comes with trade-offs. Architects must address data partitioning within bounded contexts, collaborating closely with data teams. Evolutionary architecture integrates mechanics and structure, focusing on continuous delivery and governance to create adaptable systems.

Key principles include:

1. **Last Responsible Moment**: Delay decisions until necessary to maximize information and optimize trade-offs.
2. **Evolvability**: Treat it as a primary concern, focusing on coupling, cohesion, and data integration. Continuous integration of database changes is essential.
3. **Postel’s Law**: Be conservative in what you send and liberal in what you accept, facilitating loose coupling and evolution.
4. **Testability**: Design architectures with testing in mind to ensure maintainability and ease of enhancement.
5. **Conway’s Law**: Align team structures with architectural goals to prevent unexpected coupling.

Mechanics for building evolutionary architectures involve:

- **Identifying Dimensions**: Determine which aspects of architecture need protection during evolution, involving technical, data, security, and scalability concerns.
- **Defining Fitness Functions**: Document and automate criteria to maintain architectural integrity, using deployment pipelines.
- **Deployment Pipelines**: Automate processes to enable incremental change, crucial for maintaining cycle time and supporting evolvability.

For new projects, building evolvability is more straightforward, allowing for immediate implementation of incremental change and fitness functions. Retrofitting existing systems requires addressing component coupling, mature engineering practices, and developer skill in crafting fitness functions. Continuous delivery practices are vital for evolutionary architecture, providing a foundation for advanced capabilities.

Challenges arise with COTS (commercial off-the-shelf) systems, which often lack support for incremental change and appropriate coupling. Architects must manage integration points and build robust fitness functions where possible. Migrating architectures, particularly from monoliths to service-based models like microservices, involves addressing existing coupling, including transactional and data coupling. These migrations require careful consideration of the architectural dimensions affected by evolution.

In summary, evolutionary architecture emphasizes adaptability through strategic decision-making, collaboration, and automation, ensuring systems can evolve with changing requirements and technologies.



In software development, companies sometimes build custom solutions instead of using existing tools. This can lead to maintenance burdens, as seen with a client who created their own infrastructure and later struggled with upkeep instead of innovation. Architects must avoid building for novelty's sake and carefully consider trade-offs before committing to custom solutions.

Migrating from a monolithic to a service-based architecture involves challenges like service granularity, transactional boundaries, and database issues. Architects must understand the reasons for migration beyond trends, focusing on incremental changes and operational isolation. Proper service granularity is crucial; too large services retain monolithic issues, while too granular ones increase orchestration overhead.

When decomposing a monolith, identifying service boundaries is key. This can be done through business functionality groups, transactional boundaries, or deployment goals. Larger services reduce coordination issues but increase operational challenges. Shared modules also pose a challenge; splitting dependencies can help maintain functionality while avoiding excessive coupling.

Metrics like Lack of Cohesion in Methods (LCOM) help determine if modules should be split. High LCOM indicates poor cohesion, suggesting a need for separation. Sharing dependencies via libraries or duplicating them can reduce coupling, although replication is generally discouraged in microservices.

Separating the business layers from the UI is another step in migration. This involves creating a proxy layer between UI components and backend services, allowing for service discovery and coordination. Gradual migration, starting with larger services, is preferred to avoid performance issues.

Incorporating evolutionary architecture involves controlling variability. Immutable infrastructure, where systems are programmatically defined and unchangeable after deployment, helps reduce unexpected changes. This concept extends to development environments, ensuring consistency across systems.

The hazards of "snowflake" servers, which are manually configured and differ from each other, are highlighted by a cautionary tale where lack of automation led to significant financial loss. Reversible decisions, such as using blue/green deployments and feature toggles, allow for easier recovery from failures.

Overall, building evolvable architectures requires careful planning, understanding trade-offs, and leveraging modern practices like DevOps to ensure flexibility and resilience in software systems.



Feature toggles and canary releasing are key strategies in software deployment, allowing developers to release changes to a small user group to vet them before full deployment. If issues arise, toggles can revert changes, minimizing risk. Service routing in microservices can also facilitate canary releases by directing requests based on context.

Software development faces challenges due to "unknown unknowns," unforeseen issues that arise during a project. Agile methodologies embrace iterative development to adapt to these challenges. Evolvable architectures are preferred over predictable ones, as they allow for easier adaptation to change. An anticorruption layer is a safeguard against tightly coupling projects to specific libraries, enabling easier updates or replacements.

Architects should embrace the "last responsible moment" principle, making decisions only when necessary to avoid premature complexity and technical debt. An example is using simple solutions initially, like BackgrounDRb for message queuing, and replacing them with more robust solutions when needed. This approach allows for flexibility and easier transitions.

Sacrificial architectures are designed to be discarded if successful, allowing teams to learn and improve. Notable examples include eBay and Twitter, which started with simpler architectures and evolved as they scaled. Cloud environments make this approach more feasible by reducing initial resource requirements. However, teams must eventually build robust architectures to support growth.

Managing external dependencies is crucial for maintaining evolutionary architecture. Dependencies provide benefits but also introduce risks, such as breaking changes. The "left pad" incident exemplifies the dangers of trivial dependencies causing widespread disruption. A proactive approach to dependency management involves treating external updates as pull requests, integrating them only after successful testing.

Frameworks and libraries differ in their impact on an application. Frameworks often require more aggressive updates due to their integral role, while libraries can be updated more passively. Versioning services internally, using either version numbering or internal resolution, helps manage changes while minimizing coupling.

Overall, building evolvable architectures involves balancing flexibility with stability, managing technical debt, and making informed decisions about dependencies and architectural changes.



In the context of evolving architectures, PenultimateWidgets exemplifies effective microservices adaptation by transitioning its star rating service from whole-star to half-star ratings. This was achieved by adding a new database column and using a proxy component to manage version differences, allowing seamless evolution without forcing dependent services to adapt immediately. This approach highlights the importance of additive changes in data evolution, minimizing disruption.

Fitness Function-Driven Architecture is a method where architecture design is guided by predefined performance metrics, akin to test-driven development. The LMAX architecture is a prime example, where a fitness function was used to achieve high transaction speeds in Java, eventually leading to the development of input and output disruptors. This approach emphasizes "mechanical sympathy," understanding the underlying hardware and software layers to optimize performance.

Evolutionary architecture requires a balance between fitness functions and structure to ensure adaptability. Despite the rise of continuous integration and test-driven development, many architects still rely on outdated governance practices. To build resilient systems, architects must focus on coupling control and feedback mechanisms.

Pitfalls and antipatterns in architecture, such as the Last 10% Trap and Vendor King, highlight the challenges of over-reliance on tools and frameworks. The Last 10% Trap occurs when tools like 4GLs or low-code environments fail to meet complex requirements, leading to incomplete solutions. Architects should evaluate tool limitations early to avoid this trap.

The Vendor King antipattern arises when organizations overly depend on vendor software, limiting their ability to evolve. Treating vendor products as integration points and using anticorruption layers can mitigate this issue.

Leaky abstractions present another challenge, as modern software relies on complex stacks of abstractions. As these layers increase, so does the potential for hidden faults, complicating debugging and analysis. Understanding at least one layer below the abstraction in use is crucial for managing these complexities.

In summary, evolutionary architecture demands careful consideration of coupling, adaptability, and the limitations of tools and abstractions. By focusing on these aspects, architects can build systems capable of evolving with changing requirements and technologies.



Understanding the layer below in software is crucial, but complexity increases as technology becomes more specialized. This complexity, known as the dynamic equilibrium problem, requires mechanisms like fitness functions to protect fragile architecture points. Fitness functions, defined by architects, are deployed to ensure abstractions don't leak undesirably.

**Pitfall: Resume-Driven Development**  
Architects can be distracted by new technologies, often leading to resume-driven development. Instead, architecture should be chosen based on the problem domain to deliver desired capabilities with minimal constraints. Avoid building architecture for its own sake.

**Incremental Change**  
Historically, software wasn't designed for agility. Modern practices, such as Continuous Delivery, support evolutionary architecture by fostering incremental change. 

**Antipattern: Inappropriate Governance**  
Traditional governance models, which valued shared resources, are outdated. Modern architectures, like microservices, favor isolated components, making homogenized environments less relevant. Companies should embrace polyglot environments, allowing teams to choose suitable technology stacks, thus avoiding overengineering.

**Forced Decoupling**  
Microservices aim for extreme decoupling, allowing services to be replaced without side effects. Different technology stacks can prevent accidental coupling, although this may reduce developer portability. A "just enough" governance model, offering a few standardized technology stacks, balances flexibility and standardization.

**Case Study: “Just Enough” Governance at PenultimateWidgets**  
PenultimateWidgets adopted a three-tier governance model:  
- **Small Projects**: Ruby on Rails and MySQL  
- **Medium Projects**: GoLang with databases like Cassandra or MongoDB  
- **Large Projects**: Java and Oracle  

**Pitfall: Lack of Speed to Release**  
Continuous Delivery practices are crucial for evolutionary architecture. Cycle time, the time from feature initiation to production, measures engineering efficiency. Faster cycle times enable quicker architectural evolution.

**Business Concerns**  
Business-driven inappropriate coupling can constrain future options. Common pitfalls include:

- **Product Customization**: Customizable software can impede evolvability due to increased testing and complexity.
- **Reporting Atop the System of Record**: Monolithic architectures often struggle with reporting needs. Microservices can solve this by separating behavior and using event streaming for reporting databases.

**Pitfall: Excessively Long Planning Horizons**  
Long planning cycles can lead to irrational attachment to initial assumptions. Breaking work into smaller deliverables tests feasibility and avoids irreversible decisions. Architects should avoid technologies requiring significant upfront investment without end-user validation.

In summary, evolutionary architecture involves trade-offs across technical, business, and operational domains. Understanding these dynamics and employing modern practices like fitness functions and appropriate governance models are key to managing complexity and enabling agility.



In software architecture, patterns provide contextual advice, recognizing that each decision involves trade-offs. Unlike best practices, which suggest a one-size-fits-all solution, architectural decisions require ongoing evaluation. Implementing evolutionary architecture involves technical and business considerations, including team impacts and organizational structure.

**Conway’s Law** highlights how organizational communication structures influence system design. Rigid hierarchies often lead to inflexible solutions, increasing coordination overhead, especially in layered architectures. For example, changing service contracts can be challenging if it requires coordination between separate teams. Thus, architects should align team structures with architectural goals.

Traditional team divisions, such as frontend, backend, and database developers, often focus on technical capabilities rather than business outcomes. This can lead to inefficiencies, as teams optimize for immediate tasks rather than strategic goals. Instead, structuring teams around service boundaries, as seen in microservices architectures, reduces communication overhead and aligns with business capabilities.

The **Inverse Conway Maneuver** suggests organizing teams to mirror the desired architecture. Cross-functional teams, covering all product roles, minimize operational friction. Roles adapt within this structure, covering architecture, business analysis, data management, development, design, operations, product management, and testing. This setup eliminates coordination friction and aligns teams with business goals.

Amazon's "Two Pizza" teams exemplify this approach, emphasizing communication and ownership. Small, cross-functional teams foster responsibility and reduce silos, encouraging better collaboration and quality. Automating DevOps tasks further supports this by freeing resources and embedding operations within development teams.

Organizing teams around business capabilities rather than job functions aligns architecture with domain needs. This shift from technical to domain-centric architecture reflects the common unit of change in software projects. Team Topologies introduces patterns like stream-aligned and enabling teams, emphasizing cognitive load management. Teams should balance domain complexity with technical challenges to maintain efficiency.

Adopting a product-focused mindset over project-based work encourages ongoing responsibility and quality. Projects often end, leading to disconnection from operational realities. Viewing software as a product ensures continuous engagement and alignment with business objectives, fostering a more integrated and responsive development environment.



The transition from a project to a product mindset involves three key changes: products have a longer lifespan, each product has a dedicated owner, and cross-functional teams are formed. These teams, which include PMs, BAs, designers, developers, QA, and more, are responsible for the product's long-term quality. This approach encourages developers to focus on quality metrics and defect reduction, providing a long-term vision. Mik Kersten's book "Project to Product" explores these organizational changes.

Large development teams are less effective due to the exponential growth in communication links as team size increases. Smaller, cross-functional teams reduce these links and improve efficiency by minimizing coordination across silos. Fitness functions can ensure integration integrity between teams.

Team structure significantly affects software architecture. Architects play a crucial role in shaping the technical culture and ensuring systems are built to evolve. They should encourage a culture of experimentation, where teams regularly run small experiments to test new ideas and integrate successful ones. Experimentation can be supported by bringing in external ideas, encouraging continuous improvement, using spike solutions, and creating innovation time.

Budgeting in evolutionary architecture must adapt to changing priorities, moving away from long-term predictability. The relationship between architectural quanta and cost is crucial; as quanta increase, costs per quantum decrease until reaching an optimal point. Architects aim to find a balance between quantum size and cost, considering company-specific needs.

Architects must demonstrate the business value of evolutionary architecture, emphasizing capabilities like A/B testing and hypothesis-driven development. This approach uses the scientific method to test hypotheses, allowing teams to build features based on data rather than assumptions. For example, Facebook's experimentation with user feedback improved their photo flagging system.

Hypothesis-driven development requires coordination across evolutionary architecture, modern DevOps, and requirements gathering. Service-based architectures, like microservices, facilitate running multiple application versions simultaneously, enabling experiments to determine the most effective solutions.

Fitness functions help validate architectural hypotheses. For instance, PenultimateWidgets used a UDP protocol for ETL communication, monitored by a custom tool, demonstrating practical application in real-world projects.



The text discusses various case studies and strategies for improving software architecture through fitness functions and evolutionary architecture principles. 

**Fitness Functions for Monitoring:**
A team discovered that 40% of messages were lost at high scale with their custom monitoring tool. To address this, they implemented a fitness function to calculate message loss and decided to replace the tool when loss exceeded 10%.

**Security Dependencies:**
PenultimateWidgets faced a security breach due to library dependencies. To speed up security checks, they integrated an automated stage in their continuous integration pipeline to scan dependencies against a real-time block list, providing quick feedback and alerts for vulnerabilities.

**Concurrency and Fidelity Fitness Functions:**
The team used the Strangler Fig pattern to replace legacy systems incrementally. They faced issues with concurrency, estimating 120 requests/second, but the system crashed under load. A fitness function revealed the need for a scaling factor of 1,200 requests/second. For fidelity, they ensured new systems replicated old behaviors, identifying undocumented data sources.

**Enterprise Fitness Functions:**
Enterprise architects play a crucial role in guiding architecture through fitness functions that address scalability, security, and other cross-cutting concerns. Automated governance, such as deployment pipelines, allows for consistent testing and rapid response to vulnerabilities, like zero-day exploits.

**Bounded Contexts and Architecture Quanta:**
The text emphasizes the reconciliation of reuse and isolation through bounded contexts and architecture quanta. It highlights the conflict between layered architecture and Domain-Driven Design (DDD), advocating for fitness functions to maintain separation without cross-cutting reuse.

**Strategies for Evolutionary Architecture:**
Organizations should start with low-hanging fruit for early wins or tackle high-value areas to demonstrate commitment. Testing is crucial, and infrastructure improvements may be necessary. The text illustrates infrastructure's impact on architecture, using a company reliant on extensive HTTP session state as an example of poor practices leading to inefficiencies.

In summary, the text outlines the importance of fitness functions and automated processes in maintaining software architecture's reliability, security, and scalability. It provides strategies for implementing evolutionary architecture, emphasizing the balance between reuse and isolation, and the need for robust infrastructure and testing practices.



The text discusses the challenges and strategies associated with implementing evolutionary architecture in software development. It highlights the complexity of managing legacy systems and the necessity of balancing various architectural considerations like security, scalability, and deployability.

A case study of PenultimateWidgets illustrates the pitfalls of overengineering with strict guidelines and the benefits of using fitness functions within deployment pipelines to automate critical checks. This approach allows teams to tailor specific requirements like availability to their services, avoiding unnecessary complexity.

The future of evolutionary architecture involves integrating AI and generative testing to enhance anomaly detection and handle edge cases more effectively. The text emphasizes that no universal solution exists for architectural challenges, and companies should assess the benefits of evolutionary architecture based on their specific needs.

The text also explores why companies might choose evolutionary architecture. It offers adaptability in rapidly changing markets, supporting incremental change and reducing the risk of obsolescence. The example of Amazon's shift from a monolithic to a microservices architecture illustrates how decoupling enhances scalability and evolvability.

However, the text acknowledges situations where evolutionary architecture may not be suitable. These include highly coupled systems, domain-specific architectures that prioritize other characteristics, and scenarios where a sacrificial architecture is more practical.

Ultimately, evolutionary architecture is not a one-size-fits-all solution but a holistic approach requiring careful consideration of business goals, technical constraints, and the ability to adapt to change. The focus on modularity, automation, and fitness functions helps manage complexity and facilitate continuous evolution.



The text discusses various aspects of evolutionary architecture, focusing on adaptability, guided change, and the use of fitness functions. It emphasizes the importance of identifying dimensions affected by evolution and using deployment pipelines to automate processes. Key principles include the last responsible moment principle, making decisions reversible, and organizing teams around business capabilities.

**Fitness Functions:** These are central to evolutionary architecture, serving as tools for architectural governance and experimentation. They are categorized into atomic versus holistic, automated versus manual, and static versus dynamic. Fitness functions help in maintaining system integrity and adaptability, allowing for incremental changes and continuous integration.

**Architectural Evolution:** The text highlights the challenges of evolving software architecture, such as migrating from monolithic to service-based architectures. It stresses the need for refactoring, restructuring, and mitigating external changes. Sacrificial architectures and the removal of needless variability are strategies to enhance evolvability.

**Organizational Factors:** The role of team structure and culture is crucial, with a focus on cross-functional teams and balancing cognitive load. Conway's Law is discussed, suggesting that the architecture of a system reflects the organization that built it. The Inverse Conway Maneuver is proposed to align team structures with desired architecture.

**Data Management:** The evolution of databases from relational to nonrelational and the management of data duplication are discussed. Shared Database Integration and inappropriate data entanglement are identified as challenges, with solutions involving orthogonal data coupling.

**Pitfalls and Antipatterns:** Common pitfalls include the Last 10% trap, leaky abstractions, and the Vendor King antipattern. The text warns against inappropriate governance and the customization pitfall, advocating for "just enough" governance and focusing on product over project.

**Business Considerations:** The business case for evolutionary architecture includes reduced cycle time and improved adaptability. It highlights the importance of aligning architectural decisions with business capabilities and using business metrics like cycle time as indicators of success.

**Technological Aspects:** The text covers the use of containers, microservices, and cloud environments, emphasizing the need for a supporting ecosystem. It discusses the role of chaos engineering and the importance of testing, including generative testing and canary releases.

Overall, the text provides a comprehensive overview of evolutionary architecture, emphasizing adaptability, guided change, and the strategic use of fitness functions to drive architectural decisions. It integrates technical, organizational, and business perspectives to foster a holistic approach to software architecture evolution.



The text provides details about the cover and design elements of the book "Building Evolutionary Architectures." The cover features the open brain coral (Trachyphyllia geoffroyi), known for its distinctive folds and vibrant colors. This coral is native to the Indian Ocean and thrives by consuming photosynthetic output during the day and capturing prey at night. It is popular in aquariums due to its striking appearance and easy-to-meet dietary needs. The coral is listed as Near Threatened on the IUCN Red List.

The book's cover illustration is by Karen Montgomery, inspired by an antique engraving from Jean Vincent Félix Lamouroux’s work. The fonts used include Gilroy Semibold and Guardian Sans for the cover, Adobe Minion Pro for the text, Adobe Myriad Condensed for headings, and Dalton Maag’s Ubuntu Mono for code.

O’Reilly Media, the publisher, emphasizes learning from experts through various formats, including books, online courses, videos, and interactive learning. The company is known for its commitment to providing resources for skill development and expertise building.

©2022 O’Reilly Media, Inc. All rights reserved. O’Reilly is a registered trademark of O’Reilly Media, Inc.
