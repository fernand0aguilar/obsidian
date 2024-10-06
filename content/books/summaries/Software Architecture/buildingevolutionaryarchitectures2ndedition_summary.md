
# Summary of "Building Evolutionary Architectures" (2nd Edition)

**Authors**: Neal Ford, Rebecca Parsons, Patrick Kua, and Pramod Sadalage  
**Forewords by**: Mark Richards & Martin Fowler  
**Publisher**: O’Reilly Media, Inc.  
**ISBN**: 978-1-492-09754-9

## Overview

"Building Evolutionary Architectures" addresses the need for adaptable software architectures in a rapidly changing technological landscape. The authors emphasize viewing architecture as a dynamic enabler rather than a fixed obstacle. This updated edition incorporates recent advancements in software development practices to support architectural evolution.

## Key Concepts

### Evolutionary Architecture

- **Definition**: An approach that embraces change, allowing architecture to evolve in response to shifting requirements and technological advancements.
- **Guided Change**: Involves intentional modifications to architecture, steered by fitness functions and feedback loops.
- **Incremental Change**: Supports gradual improvements, reducing the risk of large-scale failures.

### Fitness Functions

- **Purpose**: Serve as automated tests to ensure architectural integrity and guide evolution.
- **Types**: Include atomic vs. holistic, triggered vs. continual, and static vs. dynamic.
- **Implementation**: Can be automated or manual, intentional or emergent, and should cover domain-specific needs.

### Deployment Pipelines

- **Role**: Facilitate incremental changes and integration of fitness functions, ensuring continuous delivery and architectural compliance.

### Architectural Governance

- **Automation**: Utilizes fitness functions for governance, monitoring aspects like coupling, complexity, and compliance with open source licenses.
- **Tools**: Includes ArchUnit and code linters to enforce standards.

## Structure and Design

### Architecture Styles

- **Coupling and Cohesion**: Emphasizes high functional cohesion and manageable coupling for cleaner evolution.
- **Microservices**: Used as a case study for evolutionary architecture, highlighting reuse patterns and operational coupling.

### Evolutionary Data

- **Database Design**: Focuses on evolving schemas and managing data entanglement.
- **Case Studies**: Demonstrate transitions from relational to non-relational databases, addressing data integrity and duplication.

## Impact and Implementation

### Building Evolvable Architectures

- **Principles**: Includes designing for testability, using deployment pipelines, and maintaining appropriate coupling.
- **Migration**: Offers guidelines for transitioning existing architectures to evolutionary models.

### Pitfalls and Antipatterns

- **Common Issues**: Identifies traps like the "Last 10% Trap," vendor lock-in, and inappropriate governance.
- **Solutions**: Encourages "just enough" governance and minimizing planning horizons.

## Practical Application

- **Organizational Factors**: Discusses the influence of company culture and Conway’s Law on architecture.
- **Case Studies**: Provide real-world examples of applying evolutionary principles to enterprise architecture.

## Conclusion

The book serves as a comprehensive guide for software leaders to adapt their architectures to the ever-changing demands of the business and technology environments. By leveraging continuous delivery and fitness functions, organizations can ensure their systems remain robust and responsive.

**Note**: The book emphasizes the importance of continuous learning and adaptation in software architecture, marking a departure from traditional, static approaches.



# Summary of "Building Evolutionary Architectures"

## Introduction

The concept of evolving software architecture was once considered radical. Initially, the idea that architecture could change over time faced skepticism. However, the need for systems to evolve to meet user demands and adapt to the changing software ecosystem has become evident. The second edition of "Building Evolutionary Architectures" addresses this need by providing updated techniques and tools to facilitate evolutionary architecture.

## Book Structure

The book is divided into three parts:

1. **Mechanics**: Focuses on engineering practices and verification methods that support architectural evolution. This includes testing, metrics, and governance practices.
   
2. **Structure**: Discusses how to design architecture in a way that facilitates evolution. This section covers architectural styles, design principles like coupling and reuse, and structural considerations that ease governance.

3. **Impact**: Combines mechanics and structure, featuring case studies, advice, patterns, and antipatterns to aid architects and teams in enabling evolution.

## Case Studies

Real-world case studies are presented through a surrogate company, PenultimateWidgets, to illustrate the application of techniques discussed. These examples are derived from the authors' consulting experiences and contributions from colleagues.

## Conventions and Code Use

The book uses specific typographical conventions for new terms, program listings, and commands. Code examples are available online and can be used freely in programs and documentation, with certain restrictions on reproduction and distribution.

## Evolutionary Architecture Concepts

### Challenges

Software faces "bit rot," a gradual decline in quality over time. Managing the numerous components in modern software against a dynamic backdrop is challenging. The software development ecosystem is constantly evolving, demanding agile and adaptive architectural approaches.

### Continuous Delivery and Change

Continuous Delivery practices have shifted the equilibrium in software development by integrating operations into the lifecycle. This has altered perceptions of change, requiring architects to adapt dynamically, much like a unicyclist balancing new loads.

### Microservices and Ecosystem Evolution

The rise of microservices illustrates how architectural approaches evolve with the ecosystem. Initially impractical due to resource constraints, microservices became viable as open-source operating systems and DevOps practices matured.

### Architectural Design

Architectural design involves solving domain-specific problems while considering architecture characteristics, such as scalability and maintainability. These characteristics, also known as nonfunctional requirements or system quality attributes, are crucial for long-term project success.

## Conclusion

"Building Evolutionary Architectures" provides mechanisms and design techniques to ensure architectural governance and adaptability. By understanding these concepts, architects can manage change in a deterministic way, ensuring the longevity and effectiveness of software systems.

For more information, resources, and support, visit the companion website at [evolutionaryarchitecture.com](http://evolutionaryarchitecture.com).



# Summary of Key Concepts in Evolutionary Architecture

## Role of Architects in Agile Projects

Architects play a crucial role in making architectural decisions, regardless of their official title. In agile projects, architecture is essential, but its complexity should match the project's scale. For simple tasks, minimal architecture is needed, while complex projects require detailed planning. The focus is on minimizing unnecessary design while enabling iterative improvements.

## Evolutionary Architecture

### Definition and Components

An evolutionary software architecture supports guided, incremental change across multiple dimensions. This involves:

- **Guided Change**: Using fitness functions to ensure changes align with desired architectural characteristics. These functions act as benchmarks to evaluate and protect architectural features over time.
- **Incremental Change**: Facilitating small, manageable updates in development and deployment. This involves modularity and decoupling, allowing systems to evolve without extensive rework.
- **Multiple Architectural Dimensions**: Recognizing that architecture encompasses technical, data, security, and operational aspects, among others. Each dimension must be considered to maintain system evolvability.

### Fitness Functions

Fitness functions are tools to guide architectural decisions, ensuring they meet organizational needs while remaining adaptable. They help safeguard against undesirable changes, maintaining the architecture's integrity.

## Long-Term Planning and Architectural Degradation

### Adapting to Change

Architects must plan for inevitable changes in technology and business environments. Modern practices, like DevOps, reduce the cost of change, allowing for more adaptive, long-term planning.

### Preventing Degradation

Architectures often degrade over time due to shortcuts and unforeseen changes. By embedding evolvability as a core characteristic, architects can protect the essential features of a system, ensuring it remains robust and scalable.

## Why Evolutionary Architecture?

The term "evolutionary" emphasizes guided, fundamental change rather than mere adaptation. It focuses on building systems fit for purpose in changing environments, avoiding ad hoc solutions that increase complexity.

### Comparison to Emergent Design

Unlike emergent design, which suggests architecture can develop spontaneously, evolutionary architecture requires intentional planning and structure. It balances flexibility with the need for initial scaffolding to manage complex systems effectively.

## Conclusion

Evolutionary architecture is about creating systems that can adapt and evolve without losing their core characteristics. By considering multiple dimensions and using fitness functions, architects can ensure their systems remain relevant and effective in dynamic environments.




## Summary

**Evolutionary Architecture**  
Evolutionary architecture emphasizes adaptability, allowing software systems to evolve gracefully in response to changing domains and ecosystems. Architects balance necessary structure and governance with minimizing friction, ensuring systems can grow without becoming static.

**Fitness Functions**  
Fitness functions, borrowed from evolutionary computing, are crucial in guiding architectural evolution. They serve as objective integrity assessments for architectural characteristics, akin to unit tests for domain-specific applications. These functions help automate governance and facilitate incremental change.

**Categories of Fitness Functions**  
1. **Scope:**
   - **Atomic:** Focus on singular aspects, like unit tests verifying modular coupling.
   - **Holistic:** Test combinations of architectural aspects to ensure real-world compatibility.

2. **Cadence:**
   - **Triggered:** Run based on specific events, such as unit tests during deployment.
   - **Continual:** Constant verification, like monitoring transaction speeds in production.
   - **Temporal:** Include a time component, ensuring periodic checks for updates or compatibility.

**Tools and Techniques**  
- **Monitors:** Verify performance and scalability.
- **Code Metrics:** Embed checks within tests for design criteria.
- **Chaos Engineering:** Introduce faults to build system resilience.
- **Architecture Testing Frameworks:** Automate architecture validations.
- **Security Scanning:** Ensure design decisions align with security requirements.

**Example: Preventing Component Cycles**  
Component cycles, which create dependencies among components, are an architectural antipattern. Tools like ArchUnit can automate checks for cycles, integrating them into continuous build processes to prevent their occurrence.

**Implementation and Challenges**  
Architects must implement fitness functions across various dimensions, including performance, reliability, and security. Performance functions might measure response times, while coding standards might be maintained through cyclomatic complexity checks.

**Integration with Existing Practices**  
Fitness functions unify existing testing and monitoring practices, providing a structured approach to non-functional requirements. They allow precise evaluations of architecture, supporting informed trade-off decisions.

**Conclusion**  
Fitness functions are integral to evolutionary architecture, ensuring systems can adapt while maintaining integrity. By integrating various tools and techniques, architects can effectively govern and guide architectural evolution, supporting long-term software success.



### Summary

The text discusses the concept of fitness functions in software architecture, emphasizing their role in maintaining architectural integrity and supporting evolutionary architecture. Fitness functions are mechanisms to ensure software systems meet specific architectural criteria and adapt to changes over time. They can be continuous or triggered, static or dynamic, automated or manual, and intentional or emergent, each with its own trade-offs.

**Continuous vs. Triggered Fitness Functions:**
- **Continuous Fitness Functions:** These provide real-time monitoring and immediate feedback, useful for critical governance issues like security. However, they add runtime overhead, impacting performance and scalability.
- **Triggered Fitness Functions:** These run periodically, analyzing logs for compliance, reducing runtime impact but potentially delaying critical feedback.

**Static vs. Dynamic Fitness Functions:**
- **Static Fitness Functions:** Offer fixed results, like binary pass/fail, often used for predefined architectural metrics.
- **Dynamic Fitness Functions:** Adapt based on real-time context, such as adjusting responsiveness based on user load.

**Automated vs. Manual Fitness Functions:**
- **Automated Functions:** Integrated into continuous delivery pipelines for efficiency. However, some aspects, like legal requirements, may necessitate manual intervention.
- **Manual Fitness Functions:** Used when automation is impractical, requiring human verification.

**Intentional vs. Emergent Fitness Functions:**
- **Intentional Functions:** Defined at the project’s inception to guide architectural governance.
- **Emergent Functions:** Develop as the system evolves, addressing unforeseen architectural needs.

**Domain-Specific Fitness Functions:**
Fitness functions focus on architectural principles rather than domain-specific logic. They coexist with other verification mechanisms, ensuring architectural concerns like elasticity are addressed independently of domain-specific tests.

**Development and Maintenance:**
Architects and developers collaboratively create and maintain fitness functions, ensuring they align with evolving architectural requirements. This collaboration helps prevent governance rules from being seen as burdensome.

**System-Wide vs. Individual Fitness Functions:**
The text emphasizes the importance of system-wide fitness functions, which aggregate individual fitness functions to provide a holistic view of architectural trade-offs. These functions help architects balance conflicting priorities, such as performance and security.

**Implementation Challenges:**
Unlike domain-specific testing tools, architecture fitness functions lack standardized frameworks, requiring custom solutions. Architects focus on outcomes rather than implementation details, using various tools and processes to achieve objective architectural evaluations.

**Evolutionary Architecture:**
Fitness functions support evolutionary architecture by guiding incremental changes across multiple dimensions, ensuring the architecture remains adaptable and resilient. This approach contrasts with static architectural models, promoting continuous improvement and adaptation.

In conclusion, fitness functions are critical for managing architectural integrity, supporting guided evolution, and balancing trade-offs in software systems. They provide a unified framework for architectural verification, enabling teams to maintain and evolve complex systems effectively.



PenultimateWidgets has adopted a microservices architecture, allowing for incremental changes and evolution of their systems. A notable upgrade was the introduction of a half-star rating service, which services can transition to at their convenience. This upgrade exemplifies the company's evolutionary architecture, where services are containerized and deployed using a service discovery tool. This tool helps manage service versions and contracts, allowing for gradual transitions without immediate pressure on existing services.

The architecture relies on deployment pipelines to automate tasks and ensure system readiness. These pipelines, akin to continuous integration servers, facilitate testing, provisioning, and deployment. They support multistage builds, allowing for comprehensive verification of production readiness, unlike continuous integration servers focused solely on integration.

PenultimateWidgets employs deployment pipelines to maintain architectural integrity through fitness functions. These functions are automated checks that ensure system changes adhere to architectural guidelines. The deployment pipeline includes stages for testing, containerization, and executing both atomic and holistic fitness functions. This approach ensures changes don't negatively impact system functionality.

Continuous deployment is another practice PenultimateWidgets utilizes, deploying changes to production once they pass all pipeline tests. Feature toggles are used to manage the release of new features, allowing for safe deployment without immediate user exposure. This approach also enables QA testing in production environments.

A case study on PenultimateWidgets' invoicing service illustrates the deployment pipeline's role in ensuring scalability, integration, security, and auditability. The pipeline includes stages for replicating CI server functions, containerization, executing fitness functions, manual security reviews, and audits, culminating in production deployment.

Another case study focuses on API consistency, where the deployment pipeline verifies API changes through design, setup, development, deployment, and operation stages. Tools like Spectral and Pact are used for testing API specifications and integration, ensuring consumer-driven contracts are maintained.

Overall, PenultimateWidgets' use of deployment pipelines and evolutionary architecture practices ensures that their systems can adapt and evolve without compromising functionality or integration.



In software engineering, fitness functions serve as an "engineering safety net," automating the maintenance of integration protocol consistency and relieving developers from manual chores. These functions require a mature level of engineering practice to be effective. The deployment pipeline, including A/B testing, allows for incremental changes and automated verification, which are crucial for evolving software architecture.

Historically, attempts to equate software development with traditional engineering disciplines, like structural engineering, have failed due to fundamental differences. In software, manufacturing is akin to compilation and deployment, which are automated, shifting the focus entirely to design. This allows for rapid and flexible changes, unlike traditional engineering where manufacturing is costly and less forgiving.

The evolution of software engineering practices is exemplified by the concept of automating architectural governance. Architects traditionally relied on manual methods like code reviews, but now use automated fitness functions to enforce governance policies. This approach, inspired by genetic algorithms, allows for continuous evolution of software projects.

Kent Beck's introduction of eXtreme Programming (XP) in the 1990s emphasized practices like continuous integration, which reduces integration issues by ensuring developers commit code frequently. Automation in integration and other areas minimizes manual tasks and enhances consistency, as seen during the DevOps revolution with tools like Puppet and Chef.

Fitness functions, when combined with continuous integration, represent an evolution in engineering practices, extending to architectural governance. These functions can operate at various levels, from code-based analysis to enterprise architecture, and are organized to provide a structured approach to governance.

Code-based fitness functions include metrics like afferent and efferent coupling, which measure incoming and outgoing connections in a codebase. High coupling can lead to complex, hard-to-maintain codebases. Tools like JDepend and IntelliJ help analyze and visualize coupling to assist architects in restructuring and understanding codebases.

Robert Martin's metrics, such as abstractness and instability, further aid in assessing a codebase's balance. Abstractness measures the ratio of abstract to concrete artifacts, while instability reflects the volatility due to coupling. The distance from the main sequence metric combines these to evaluate architectural health, identifying zones of uselessness and pain where code is either too abstract or too rigid.

Architects can use these metrics to refactor code, improving abstractness and reducing instability. This ensures a solid foundation before restructuring or migrating to new architectures. Automated fitness functions help maintain code quality, preventing degradation over time.

Directionality of imports is another governance aspect, ensuring proper package dependencies. Tools like JDepend allow developers to write tests that enforce import rules, preventing architecture violations and promoting focus on domain problems.

Overall, fitness functions and automated governance represent significant advances in software engineering, providing architects with powerful tools to ensure the long-term evolution and health of software systems.



### Cyclomatic Complexity (CC)

Cyclomatic Complexity (CC) is a metric developed by Thomas McCabe Sr. in 1976 to measure code complexity through graph theory, focusing on decision points that create execution paths. For instance, a function with no conditionals has CC = 1, while one with a single conditional has CC = 2. The formula is CC = E - N + 2, where E is edges (decisions) and N is nodes (lines of code). For complex systems with interconnected methods, CC = E - N + 2P, with P as connected components.

### Importance of Managing Complexity

High complexity indicates "code smell," affecting modularity, testability, and deployability. Industry standards suggest keeping CC under 10, but ideally under 5 for well-factored code. Tools like Crap4j assess code quality by combining CC and code coverage. Excessive complexity, such as a function with CC over 800, is detrimental. Practices like Test-Driven Development (TDD) naturally reduce complexity by encouraging smaller, cohesive methods.

### Fitness Functions and Governance

Architects can use fitness functions to manage complexity, gradually enforcing lower CC values. This approach helps address technical debt and prevents future deterioration. Tools like ArchUnit in Java and NetArchTest in .NET enable governance by defining architectural rules, such as package dependencies, class dependencies, inheritance, annotations, and layered architecture.

### Turnkey Tools and Legal Concerns

Ready-made tools vary by ecosystem. For example, Black Duck monitors open-source licenses. PenultimateWidgets developed a custom solution to track license changes, highlighting a mix of automated and manual governance.

### Accessibility and Other Characteristics

Tools like Pa11y assess accessibility, ensuring applications support diverse capabilities. ArchUnit allows defining package dependencies and component access rules, ensuring architectural integrity.

### Case Studies

1. **Availability Fitness Function**: PenultimateWidgets tested a legacy system for integration by measuring error rates, confirming its reliability without needing a rewrite.

2. **Load-Testing with Canary Releases**: To handle increased load, PenultimateWidgets implemented auto-scaling and used canary releases to test performance, allowing gradual scaling adjustments.

3. **Feature Porting**: For a Java Swing application, PenultimateWidgets used logging to determine feature popularity, guiding the feature porting process to a web application effectively.

These examples illustrate how fitness functions and governance tools transform software development into a measurable engineering discipline.



The text explores the concept of "fitness functions" in software architecture, highlighting their role in automating governance and ensuring system reliability. Fitness functions are metrics or tools that provide objective measures and feedback for acceptable use, often integrated into continuous verification processes. Examples include linting tools and source-code verification tools like SonarCube and PMD. The text emphasizes that while many fitness functions apply to individual applications, they are also crucial in integration architecture, particularly in microservices environments.

In microservices, fitness functions can govern communication between services. An example involves ensuring domain services communicate only with an orchestrator service. A fitness function can be implemented using log messages with specific formats and scripting languages to check for unauthorized communication. This approach can be reactive, analyzing logs periodically, or proactive, monitoring real-time communication.

The text also discusses fitness functions for reliability, using microservices architecture as an example. One method involves instrumenting containers to check message counts, while another uses correlation IDs to ensure message traceability. Each method has trade-offs, such as service-level versus end-to-end reliability.

Chaos engineering is introduced as a method to test system resilience under unpredictable conditions. Netflix's Simian Army, including tools like Chaos Monkey and Janitor Monkey, exemplifies this approach by creating controlled chaos to ensure systems can withstand faults. These tools force developers to build resilient systems and continually verify architectural characteristics like scalability and resiliency.

Enterprise architecture benefits from fitness functions by encapsulating business functionality within platforms, reducing implementation coupling. This approach allows architects to focus on strategic goals rather than technology choices, overcoming the "Frozen Caveman" antipattern where architects fixate on outdated concerns.

Overall, fitness functions provide a framework for architects to ensure system reliability, governance, and strategic alignment, allowing for continuous improvement and adaptation in dynamic environments.



GitHub faced a scalability issue with its merge functionality, traditionally managed by a shell script around command-line Git. To address this, the Git engineering team developed `libgit2`, a library to handle merges more efficiently. The challenge was deploying this new solution without introducing bugs, which led to the creation of Scientist, an open-source framework in Ruby. Scientist facilitates holistic, continuous testing by running experiments that compare new and old code behaviors.

### Scientist Framework

**Experiment Structure:**
- **Use Block (Control):** Encapsulates existing behavior.
- **Try Block (Candidate):** Contains new behavior for testing.

**Key Features:**
- **Randomization:** Prevents false positives by randomizing the execution order of use and try blocks.
- **Performance Monitoring:** Measures durations to aid A/B performance testing.
- **Exception Handling:** Logs exceptions from the try block without exposing them to end users.
- **Result Comparison:** Logs differences between use and try results, always returning the control value to users.

In GitHub’s case, 1% of users tested the new merge functionality. After successful testing, the old code was removed. This approach exemplifies using a fitness function to refactor critical infrastructure confidently.

### Fitness Functions

Fitness functions, like Scientist, ensure architectural governance by encoding design rules into automated checks. They serve as a checklist to prevent errors during complex tasks, akin to those used by surgeons and pilots. By automating these principles, they maintain code quality and prevent degradation over time.

**Documentation:**
- Tests provide honest documentation, ensuring principles are followed despite external pressures.
- Architectural Decision Records (ADRs) can include fitness functions to document design governance.
- Tools like Cucumber map native language to verification code, offering a way to document and execute architectural decisions.

### Connascence

Connascence describes coupling in software, crucial for understanding and improving architecture evolution. It is divided into:

- **Static Connascence:** Source code-level coupling, including:
  - **Connascence of Name (CoN):** Agreement on entity names.
  - **Connascence of Type (CoT):** Agreement on entity types.
  - **Connascence of Meaning (CoM):** Agreement on value meanings.
  - **Connascence of Position (CoP):** Agreement on value order.
  - **Connascence of Algorithm (CoA):** Agreement on algorithms.

- **Dynamic Connascence:** Execution-time coupling, such as:
  - **Connascence of Execution (CoE):** Importance of execution order.

Connascence provides a language to discuss and improve coupling, enhancing architecture evolvability.

### Conclusion

Fitness functions and connascence are tools to manage architectural evolution, ensuring systems remain robust and adaptable. By implementing these strategies, architects can prevent system rot and support continuous development, much like guardrails on a road. This approach aligns with the principles of evolutionary architecture, focusing on appropriate coupling to balance benefits with overhead and cost.



### Connascence in Software Architecture

**Connascence Types:**
- **Connascence of Timing (CoT):** Involves timing issues, such as race conditions, where the execution order affects outcomes.
- **Connascence of Values (CoV):** Occurs when related values must change together, often seen in distributed system transactions.
- **Connascence of Identity (CoI):** Requires multiple components to reference the same entity, like a shared data structure.

**Connascence Properties:**
- **Strength:** Indicates the ease of refactoring; static connascence is preferable due to easier analysis and improvement.
- **Locality:** Measures proximity in the codebase; closer proximity is less damaging.
- **Degree:** Relates to impact size; lesser degrees are less harmful.

**Guidelines for Connascence:**
1. Minimize connascence by encapsulating systems.
2. Reduce connascence crossing boundaries.
3. Maximize connascence within boundaries.

**Intersection with Bounded Context:**
- **Domain-Driven Design (DDD):** Uses bounded contexts to keep implementation details localized, preventing brittleness in architecture.
- **Architectural Integrity:** Avoid exposing implementation details, such as database schemas, to maintain robustness.

### Architectural Quanta and Granularity

**Concept of Architecture Quantum:**
- **Definition:** An independently deployable component with high functional cohesion and coupling.
- **Static Coupling:** Deals with dependencies like operating systems and libraries.
- **Dynamic Coupling:** Involves runtime communication, either synchronously or asynchronously.

**Characteristics of Architecture Quantum:**
- **Independently Deployable:** Each quantum is a separate deployable unit, crucial for distributed architectures like microservices.
- **High Functional Cohesion:** Ensures related elements are structurally proximate, aligning with DDD's bounded context.
- **High Static Coupling:** Indicates tightly wired elements, often seen in monolithic architectures.

**Granularity in Architecture:**
- **Monolithic Architectures:** Typically have a single quantum due to shared databases and coupling points.
- **Distributed Architectures:** Can have multiple quanta if designed to avoid common coupling points.

**Microservices and Quanta:**
- **Decoupling:** Allows for independent service operation and deployment.
- **Coupling Challenges:** User interfaces can create coupling points, reducing the granularity of architecture quanta.

**Benefits of Understanding Quanta:**
- **Common Language:** Provides clarity among architects, developers, and operations.
- **Service Granularity:** Aids in determining optimal trade-offs for deployability and engineering practices.

In summary, understanding connascence and architectural quanta helps architects design systems with better modularity and less brittleness by focusing on encapsulation, cohesion, and decoupling. This approach aligns with modern architectural practices like microservices and DDD.



### Evolutionary Architecture Topologies

**Micro-Frontend Frameworks**: In microservices architecture, micro-frontends allow user interface elements to be emitted from services themselves, facilitating loosely coupled communication via events. This setup creates architecture quanta, where each service with its UI component forms a distinct quantum with unique characteristics.

**Static and Dynamic Coupling**: Static coupling, such as shared databases, creates fixed connections between systems, impacting how changes affect the architecture. Dynamic coupling involves synchronous or asynchronous interactions during runtime, influencing workflows and decision-making in distributed architectures.

**Communication Types**:
- **Synchronous**: Requires the requestor to wait for a response, impacting synchronization and performance.
- **Asynchronous**: Allows parallel processing, using message queues or other frameworks, enhancing scalability.

**Consistency and Coordination**: Consistency ranges from atomic transactions to eventual consistency. Coordination can be orchestrated or choreographed, affecting how services interact and scale.

**Contracts in Architecture**: Contracts define how components connect, ranging from strict (e.g., gRPC) to loose (e.g., REST, GraphQL). Strict contracts ensure precise integration but can lead to brittleness. Loose contracts offer flexibility but require careful management to avoid fragility.

**Microservices as Evolutionary Architecture**:
- **Bounded Contexts**: Microservices define physical boundaries around architectural elements, allowing incremental changes. Each service encompasses necessary components like databases and search engines.
- **Domain Segregation**: Unlike layered architectures, microservices focus on domain concepts, reducing coupling and enhancing evolvability.
- **Principles**:
  - **Business Domain Modeling**: Emphasizes business context over technical architecture.
  - **Implementation Encapsulation**: Hides technical details within service boundaries.
  - **Automation Culture**: Utilizes Continuous Delivery and automated testing.
  - **Decentralization**: Prefers duplication over coupling to maintain independence.
  - **Independent Deployment**: Services are expected to deploy independently, reducing dependencies.

Overall, microservices architecture supports evolutionary changes by focusing on business domains, minimizing coupling, and leveraging automation, ensuring a flexible and scalable system design.



### Microservices Architecture Overview

Microservices architecture emphasizes decoupling, allowing developers to deploy services independently without affecting others. This approach supports automation in deployment and operations, including continuous delivery and parallel testing. Key features include:

- **Isolation of Failure**: Each service handles errors independently, using patterns like Circuit Breaker to enhance robustness.
- **Observability**: Essential for monitoring numerous services, making logging and monitoring critical.

### Evolutionary Architecture

Microservices serve as a prime example of evolutionary architecture due to their ability to change incrementally. Each service can evolve independently, protected by integration points like consumer-driven contracts. Automation and continuous delivery practices facilitate these changes.

### Incremental Change and Fitness Functions

Microservices allow incremental changes within bounded contexts. Fitness functions guide changes, ensuring services remain functional and integrated. Testing techniques have advanced alongside microservices, supporting both atomic and holistic evaluations.

### Historical Context and Adoption

Earlier, machine provisioning was manual and time-consuming, hindering microservices adoption. With advancements in virtual machines and open-source software, automation became feasible, leading to more domain-centric architectures.

### Reuse Patterns and Challenges

While code reuse is beneficial, it often leads to coupling, which microservices avoid. Instead, microservices prefer duplication to maintain decoupling. For instance, services like Checkout and Shipping maintain separate Customer representations, sharing data as needed without consolidating.

### Sidecar Pattern and Service Mesh

The Sidecar pattern decouples operational capabilities from domain logic, facilitating consistent operational interfaces across services. A service mesh emerges when sidecars are consistently used, allowing centralized control over capabilities like monitoring and logging.

### Data Mesh: Orthogonal Coupling

Data Mesh applies microservices principles to analytical data, emphasizing domain ownership and data as a product. It introduces:

- **Domain Ownership**: Domains own and share data, promoting decentralized access.
- **Data as a Product**: Encourages domains to offer data in a consumer-friendly manner.
- **Self-Serve Data Platform**: Provides tools for domains to manage data products efficiently.
- **Computational Federated Governance**: Ensures consistent governance across domains using automated policies embedded in data products.

Data Mesh aligns data architecture with business domains, supporting peer-to-peer data consumption and decentralized management.

### Conclusion

Microservices and Data Mesh exemplify modern architectural approaches that prioritize decoupling, incremental change, and domain-centric designs. These architectures leverage automation and strategic patterns to manage complexity and foster scalability.



In modern distributed architectures, data product quanta (DPQs) are essential components that interface with services, providing analytical and reporting capabilities. DPQs are operationally independent yet tightly coupled to their associated services, facilitating analytics and business intelligence. Several types of DPQs exist, including source-aligned, aggregate, and fit-for-purpose quanta, each serving different analytical needs. These quanta ensure that each domain contributing to business intelligence includes a DPQ, allowing for asynchronous interactions and eventual consistency.

DPQs operate as cooperative quanta, communicating with services via asynchronous communication while maintaining tight contract coupling. This setup allows for operational independence but ensures that both operational and analytical data are managed effectively. The data mesh concept exemplifies the integration of microservices and analytical data, offering a roadmap for managing coupling in distributed architectures.

Evolutionary architecture emphasizes the importance of controlled coupling for building adaptable systems. Contracts allow different architecture parts to communicate without creating tight coupling points, facilitating governance and change. Evolutionary database design is crucial in supporting adaptable architectures, focusing on evolving schemas alongside code and integrating database changes into deployment pipelines.

Database migrations are tools that allow incremental changes to schemas, treating database changes like source code changes. This approach includes rigorous testing, versioning, and using migration scripts to apply changes automatically. The Expand/Contract pattern is a refactoring technique that manages schema changes while maintaining backward compatibility, allowing for a transition phase where both old and new states coexist.

Shared database integration, where multiple applications share a database, often leads to fossilized schemas. The Expand/Contract pattern helps untangle this coupling by maintaining both old and new states during transitions. This ensures backward compatibility and allows systems to evolve without breaking dependent applications.

Inappropriate data entanglement can hinder architectural evolution. Many organizations face challenges due to outdated tools and practices in data management. Database structures are often tightly coupled with application code, making refactoring complex and leading to suboptimal database designs. The data world lags behind in engineering practices, partly due to the relationship between database vendors and their consumers, which impedes innovation in data tools.

Overall, understanding and managing data and database design are critical for creating evolvable architectures. By integrating data considerations into architectural planning and using modern engineering practices, teams can build systems that adapt to changing requirements while maintaining stability and performance.



In many enterprises, data teams often exhibit strong loyalty to specific database vendors, resulting in stagnation of innovation and reluctance to adopt new tools. This vendor allegiance can lead to an impedance mismatch between developers and data teams, hindering the integration of modern engineering practices like Continuous Delivery. However, the rise of open-source and NoSQL databases is challenging this vendor dominance.

Transactional coupling presents another challenge in both monolithic and distributed architectures, as it binds components tightly, making system evolution difficult. Transactions are popular with business analysts for their ability to coordinate complex systems, but architects must carefully manage transactional boundaries to avoid excessive coupling. Microservices architectures, which aim for small service quanta, often struggle with transactional systems due to their inherent coupling.

Data teams frequently resist changing database schemas, resulting in fossilized structures that complicate system evolution. This resistance can lead to poor data quality and outdated schemas, which impede the ability to implement evolutionary architectures. It is essential for data teams to regularly refactor schemas and improve data quality to support system evolution.

Case studies, such as PenultimateWidgets, illustrate the challenges and strategies for evolving data architectures. For instance, introducing a new routing scheme requires managing both old and new data structures simultaneously. The Expand/Contract pattern can facilitate this transition by allowing both versions to coexist until the old version is phased out.

Microservices architectures pose additional challenges, such as managing data duplication and referential integrity. Teams must decide who owns and updates data versus who can read it, often using caching strategies to optimize performance. Event-driven architectures can help maintain referential integrity across distributed systems.

Stored procedures and triggers, common in traditional databases, may need refactoring when transitioning to microservices. The Expand/Contract pattern can be used to migrate these functionalities into application code, ensuring a smooth transition without disrupting existing systems.

Finally, organizations transitioning from monolithic to microservices architectures may reconsider their persistence mechanisms. Different problem domains may benefit from specialized databases, such as graph or NoSQL databases, rather than sticking to a single relational database. This flexibility allows architects to choose the best tools for specific problems, enhancing the overall system architecture.

In summary, successful evolutionary data architectures require breaking vendor dependencies, managing transactional coupling, regularly refactoring schemas, and adopting modern engineering practices. By addressing these challenges, organizations can build flexible, evolvable systems that adapt to changing business needs.



### Summary

The transition to microservices architecture involves breaking down monolithic data structures into more suitable types, such as key/value pairs or graph databases, to improve efficiency. This shift requires careful consideration of trade-offs, as using multiple databases can introduce complexity. Architects must communicate these trade-offs to data teams and collaborate closely to ensure successful implementation.

**Evolutionary Architecture Principles:**

1. **Last Responsible Moment:** Delay decisions until the last responsible moment to maximize information and improve trade-off analysis. Early decisions can lead to overengineering, while late decisions may fail to meet architectural goals.

2. **Architect and Develop for Evolvability:** Evolvability should be a primary concern, requiring architects to consider data integration and dependencies as crucial as code. Continuous integration of database changes is essential.

3. **Postel’s Law:** Be conservative in what you send and liberal in what you accept to minimize coupling. This principle aids in creating flexible contracts and communication protocols.

4. **Architect for Testability:** Design architectures with testing in mind to facilitate easier testing of isolated components. This approach aligns with the single responsibility principle, enhancing maintainability and evolvability.

5. **Conway’s Law:** Team structure impacts architecture. Architects should consider this when designing systems to ensure alignment with organizational dynamics.

**Building Evolvable Architectures:**

- **Identify Dimensions Affected by Evolution:** Determine which architectural aspects need protection during evolution, such as data design and security. Collaborate with various teams to identify these dimensions.

- **Define Fitness Functions:** Establish fitness functions for each dimension to monitor and maintain architectural integrity. These functions can be automated or manual.

- **Use Deployment Pipelines:** Automate fitness functions within deployment pipelines to encourage incremental change and maintain good cycle time, crucial for evolutionary architecture.

**Greenfield vs. Existing Projects:**

- **Greenfield Projects:** Easier to build evolvability from the start with deployment pipelines and fitness functions. Selecting appropriate architectural patterns facilitates evolutionary architecture.

- **Retrofitting Existing Architectures:** Focus on reducing component coupling and enhancing engineering practices. Overcome challenges posed by commercial off-the-shelf (COTS) software, which often lacks support for evolvability.

**Challenges and Strategies:**

- **COTS Software:** Often lacks automation and testing capabilities, making it difficult to integrate into evolutionary architectures. Developers must build logical barriers and robust fitness functions to manage these systems.

- **Migrating Architectures:** Transitioning from monolithic to service-based architectures, such as microservices, is complex due to existing coupling. Architects must address not only class coupling but also transactional and data coupling.

Overall, the key to successful evolutionary architecture lies in balancing trade-offs, prioritizing testability, and fostering collaboration across teams to accommodate the dynamic nature of software systems.



In the realm of software development, companies often face the dilemma of building custom infrastructure versus leveraging existing open-source solutions. A case study highlights a company that built its own application server and web framework due to unavailable capabilities. However, as open-source tools became accessible, they chose to maintain their custom infrastructure due to minor differences, resulting in their top developers being stuck in maintenance mode instead of innovating.

Architects often face the challenge of migrating outdated monolithic applications to modern service-based architectures. A critical first step is understanding the coupling points within the codebase. This involves addressing service granularity, transactional boundaries, and database issues. The goal is to split the architecture into domains for easier incremental changes, aligning with evolutionary architecture principles.

When decomposing a monolithic architecture, determining the correct service granularity is essential. Large services can alleviate issues like transactional contexts but do little to break the monolith into smaller pieces. Conversely, overly granular components can lead to excessive orchestration and communication overhead. Architects must carefully balance these factors.

Migration involves identifying new service boundaries, which can be partitioned by business functionality, transactional boundaries, or deployment goals. Coarser service granularity can reduce coordination problems, but larger services may escalate operational difficulties.

Migrating shared modules presents additional challenges. Architects may need to split shared libraries to maintain dependencies. Metrics like LCOM (Lack of Cohesion in Methods) can help determine whether a module should be split. If a module scores high in LCOM, it indicates low cohesion and may need restructuring.

Separating business layers from the UI is another crucial step. Even in microservices architectures, UIs often resolve back to a monolith. Early separation of UIs creates an anticorruption layer, insulating UI changes from architecture changes. Service discovery is also vital, allowing services to find and communicate with each other effectively.

Gradual migration is preferred over tackling the entire architecture at once. Breaking the monolith into larger services initially, then iterating on restructuring, helps manage complexity. Fitness functions play a critical role in ensuring integration points remain stable during migration.

Building evolutionary architectures requires removing needless variability and making decisions reversible. Immutable infrastructure, where systems are defined programmatically, helps control change factors, reducing the testing burden. This approach aligns with the goal of stability in Continuous Delivery.

The hazards of "snowflake" servers, which are manually configured and maintained, are illustrated through a cautionary tale. Automating deployments and removing outdated feature flags are essential practices to avoid such pitfalls.

Reversible decisions are crucial in evolving systems. Techniques like blue/green deployments and feature toggles allow for quick rollbacks and adjustments, ensuring systems can adapt to unexpected failures.

Overall, architects must balance innovation with practicality, leveraging existing tools where possible, and ensuring systems are built to evolve over time.



### Summary

Feature toggles and canary releasing are essential techniques in software development, allowing developers to deploy changes to a small user subset, reducing risk by enabling quick rollbacks if issues arise. Service routing in microservices also facilitates canary releases by directing requests based on context.

**Evolvable Architectures:** Software systems face "unknown unknowns," unpredictable challenges that cannot be designed for upfront. Agile methodologies embrace iterative changes to accommodate these uncertainties. Evolvability, the ability to incorporate changes seamlessly, is preferred over predictability in architecture. Anticorruption layers are used to insulate projects from external dependencies, allowing for easier upgrades or replacements without disrupting core functionality.

**Last Responsible Moment Principle:** This principle advises making decisions at the latest possible point to avoid premature complexity and technical debt. For instance, a project initially using a simple message queue library can later switch to a more robust solution as needs evolve, facilitated by abstraction layers.

**Sacrificial Architectures:** These are temporary architectures intended to be replaced once a concept proves successful. They allow rapid market entry and learning from initial iterations. Twitter and eBay exemplify this approach, starting with simpler systems and evolving as requirements grew.

**Managing Technical Debt:** Projects often accumulate technical debt, leading to complex, unmanageable systems. It's crucial to address design compromises early to prevent inappropriate coupling and other antipatterns that hinder restructuring.

**Mitigating External Change:** Software relies heavily on external dependencies like libraries and frameworks. Managing these dependencies is vital to maintaining stability. The "11 Lines of Code That Broke the Internet" incident highlights the risks of relying on trivial dependencies. A proactive approach involves treating external updates as pull requests, only integrating beneficial changes after thorough testing.

**Libraries vs. Frameworks:** Libraries are preferred over frameworks due to lower coupling, making them easier to swap out. Frameworks, forming the application's scaffolding, require aggressive updates to avoid becoming outdated. Libraries can be updated passively as needed.

**Versioning Services:** In integration architectures, versioning service endpoints is crucial as behavior evolves. Two common patterns are Version Numbering, creating new endpoints for changes, and Internal Resolution, where logic determines the correct version based on context. Limiting supported versions minimizes testing and maintenance burdens.

Overall, building evolutionary architectures involves strategic planning and adaptability, ensuring systems can evolve without significant disruption. Techniques like feature toggles, anticorruption layers, and sacrificial architectures, combined with proactive dependency management, enable robust and flexible software development.



# Summary

## Internal Versioning and Evolution

PenultimateWidgets utilizes a microservices architecture to facilitate small changes, such as transitioning their star rating system to support half-star ratings. This change involved adding a new database column and a proxy component to manage version differences. The service supports both old and new formats until all dependencies transition, demonstrating an additive change approach which avoids altering the database schema.

## Fitness Function-Driven Architecture

Fitness functions are utilized in architecture similarly to test-driven development in agile software. They ensure that critical capabilities remain a priority during design. The LMAX architecture is a notable example, where a fitness function was used to achieve high transaction speeds in Java, ultimately leading to the development of the input and output disruptors pattern. This approach emphasizes "mechanical sympathy," understanding underlying systems to optimize performance.

## Evolutionary Architecture Practices

Successful evolutionary architecture integrates fitness functions and structure for adaptability. Despite the rise of continuous integration and test-driven development, many architects still rely on outdated practices. To build resilient systems, architects should focus on fitness functions and contract-based coupling to ensure adaptability to changes in domain and technology.

## Pitfalls and Antipatterns

### Last 10% Trap and Low Code/No Code

Tools like low-code/no-code environments promise rapid development but often fall short in complex scenarios, leading to the "Last 10% Trap." Architects should evaluate these tools by testing their limits rather than their ease of use.

### Reuse and Bottlenecks

PenultimateWidgets faced challenges with a reusable component that became a bottleneck. To mitigate such issues, architects should allow teams to fork or decouple components when they hinder evolution, ensuring that reusable assets continue to provide value.

### Vendor King Antipattern

Relying heavily on vendor software can pathologically couple an organization to a tool, limiting flexibility. To avoid this, treat vendor products as integration points and build anticorruption layers to manage changes.

### Leaky Abstractions

Modern software relies heavily on abstractions, which can be imperfect and lead to issues. Increased complexity in technology stacks exacerbates this, making debugging and analysis challenging. Developers should understand at least one layer below their current abstraction to manage potential faults effectively.

## Conclusion

Architects must continually evaluate and adapt their strategies to maintain evolvability. By using fitness functions, managing coupling, and being aware of potential pitfalls, they can build systems that are resilient to change and maintain high performance standards.



### Summary

In the realm of software development, understanding the complexities of evolving technology stacks is crucial. As software becomes more specialized, architects face challenges in maintaining dynamic equilibrium, where increased complexity can lead to fragile integration points. Fitness functions are employed to protect these points, ensuring that architectural abstractions remain intact during deployment.

A common pitfall in software architecture is "resume-driven development," where architects choose technologies to enhance their resumes rather than solve specific problems. Effective architecture should be driven by the problem domain rather than the allure of new technologies.

Incremental change in software development is often hindered by legacy systems designed for cost reduction and resource sharing, rather than agility. Modern practices like Continuous Delivery support evolutionary architecture by promoting agile development and reducing cycle times, which is crucial for rapid architectural evolution.

Inappropriate governance models, which prioritize shared resources and homogenized environments, are outdated in the modern development ecosystem. Microservices architectures, which embrace polyglot environments, provide flexibility and reduce inadvertent coupling, allowing teams to choose the most suitable technology stack for their needs.

Forced decoupling is a goal of microservices, achieved by using different technology stacks to prevent accidental coupling. Some companies, like Wunderlist, encourage diverse stacks to prioritize decoupling over developer portability. A "just enough" governance model, with a few standardized technology stacks, balances flexibility and standardization.

Speed to release is critical for evolutionary architecture, with Continuous Delivery practices emphasizing data-driven results and cycle time reduction. Faster cycle times enable quicker architectural evolution, akin to rapid genetic experimentation in biology.

Business concerns can drive inappropriate architectural decisions, such as excessive product customization, which complicates testing and impedes evolvability. Reporting requirements can lead to inadvertent coupling when systems of record and reporting share the same architecture, complicating evolutionary change.

Excessively long planning horizons can result in irrational attachment to initial assumptions, hindering adaptability. To avoid this, architects should focus on smaller, early deliverables and avoid technologies requiring significant upfront investment without validation.

In summary, evolutionary architecture involves balancing technical, business, and operational considerations. It requires careful governance, adaptability, and a focus on reducing cycle times to facilitate rapid evolution and alignment with business needs.



# Summary

Software architecture involves evaluating trade-offs for each decision, rather than relying on best practices. Patterns and antipatterns provide contextual advice, helping architects make informed choices. Implementing evolutionary architecture requires addressing both technical and business concerns, including organizational impacts.

## Organizational Factors

### Conway’s Law

Melvin Conway’s Law states that the communication structures within organizations influence system design. Architects should consider how work is divided and coordinated among teams. Traditional functional silos can lead to inflexible solutions and increased coordination overhead, especially in layered architectures. Aligning teams with service boundaries, as in microservices, can reduce communication issues.

### Cross-Functional Teams

Domain-centric, cross-functional teams eliminate operational friction by including all necessary roles, such as architecture, business analysis, data management, development, design, operations, product management, and testing. This structure minimizes coordination delays and aligns teams with architectural goals.

### Amazon’s "Two Pizza" Teams

Amazon’s approach involves small, cross-functional teams responsible for their services, fostering ownership and reducing communication complexity. This model leverages human social behavior to enhance team accountability and performance.

### Automating DevOps

Automating DevOps tasks can free resources and integrate operations personnel into development teams, improving efficiency and collaboration. This approach enables organizations to focus on domain-centric architectures rather than technical silos.

### Business Capabilities

Organizing teams around business capabilities rather than job functions aligns with domain-centric architectures. This structure supports continuous value delivery and reduces cognitive load. Stream-aligned teams focus on specific business domains, while enabling and platform teams provide necessary support.

### Product Over Project

Shifting from a project to a product mindset encourages long-term responsibility and quality. Projects have a temporal nature, leading to disconnection between developers and their code. Viewing software as a product fosters continuous improvement and operational alignment.

In summary, adopting evolutionary architecture involves aligning team structures with business domains, automating processes, and fostering cross-functional collaboration to enhance agility and reduce coordination challenges.



The text discusses the shift from project-based to product-based development, emphasizing long-term ownership and quality. Cross-functional teams, with roles like PMs, designers, and developers, focus on continuous product evolution. The book "Project to Product" by Mik Kersten explores this cultural shift. Smaller, cross-functional teams are recommended to reduce communication complexity, as large teams struggle with excessive connection management.

Organizational structure significantly impacts software architecture. Architects should foster a culture that supports evolutionary architecture by understanding team dynamics and encouraging practices that prioritize evolvability. Experimentation is crucial for evolution, and companies should integrate small experiments to test new ideas and improve systems. Techniques like A/B testing and innovation time, as seen in Google and Atlassian, support this culture.

Budgeting in evolutionary architecture should reflect dynamic priorities, finding a balance in architectural quanta to optimize costs. Architects must communicate the business value of evolutionary architecture to stakeholders, emphasizing capabilities like hypothesis-driven development. This approach involves testing hypotheses with experiments, as demonstrated by Facebook's handling of flagged photos using user feedback.

Hypothesis-driven development leverages the scientific method to build features based on validated hypotheses rather than assumptions. This method integrates user feedback into the development process, enabling more user-centric software design. Service-based architectures, like microservices, facilitate this by allowing multiple application versions for testing.

Fitness functions serve as experimental tools to validate architectural decisions, ensuring that solutions meet evolving needs. The text concludes with a case study of UDP communications in an ETL ecosystem, highlighting the practical application of these principles.

Overall, the text underscores the importance of adaptability, experimentation, and user involvement in creating resilient and responsive software architectures.



### Summary

In response to issues with lost completion messages, a team developed a fitness function to evaluate the reliability of their custom monitoring tool. They discovered that 40% of messages were lost at high scale, prompting a shift to a more standard implementation. This highlighted the importance of fitness functions in testing hypotheses and ensuring system reliability.

PenultimateWidgets faced a security breach due to vulnerabilities in library dependencies. To address this, they integrated a security scanning stage in their continuous integration pipeline. This automated process checks library versions against a block list, ensuring quick feedback and freeing up human resources for more complex tasks.

The company also implemented a concurrency fitness function to address frequent crashes in a new microservice. By measuring real-time performance, they found the service needed to support 1,200 requests per second, far more than initially estimated. This led to an updated scaling factor, showcasing the utility of fitness functions in maintaining availability and performance.

Another challenge was ensuring the new system replicated the behavior of an old system when using the Strangler Fig pattern. They developed a fidelity fitness function to verify consistency, which also uncovered undocumented data dependencies, enhancing their understanding of the legacy system.

Enterprise architects play a crucial role in guiding architecture through enterprise-wide fitness functions. These functions help manage purposeful coupling points and platform choices, ensuring consistent infrastructure support across services. In cases like zero-day vulnerabilities, automated governance through deployment pipelines allows rapid response and testing across projects, enhancing security and compliance.

The text discusses challenges in achieving reuse without brittleness, particularly in reconciling enterprise-level reuse with bounded contexts. Fitness functions are used to prevent damaging cross-bounded context communication, supporting separation of concerns without adverse side effects.

For organizations with complex, intertwined architectures, starting with low-hanging fruit or high-value areas can demonstrate the benefits of evolutionary architecture. Testing and infrastructure improvements often precede more ambitious architectural changes, with a focus on enhancing modularity and reducing technical debt. The importance of comprehensive testing is emphasized, as it supports incremental change and the effective implementation of fitness functions.

The narrative includes an example where poor infrastructure and operational silos led to inefficient server use, highlighting the critical impact of infrastructure on architecture. Addressing such issues is essential for enabling evolutionary architecture and improving system performance and reliability.



### Summary

In the context of evolutionary architecture, companies face challenges when adapting legacy systems and ensuring scalability and evolvability. Developers at a company, overwhelmed by server management and costs, formed a guerilla DevOps group to restructure applications, highlighting the need for a collaborative approach involving architects, developers, and other stakeholders to determine the best roadmap.

**Case Study: PenultimateWidgets**
PenultimateWidgets aimed to revamp its legacy platform by listing desired properties like security and scalability. However, verifying these properties proved challenging, leading to overengineering. To address this, they defined criteria as fitness functions and created deployment pipeline templates, allowing teams to add specific checks for their services.

**Future of Evolutionary Architecture**
As teams grow familiar with evolutionary practices, they will integrate them into standard operations, exploring new capabilities like data-driven development. AI frameworks can enhance fitness functions by detecting anomalies, while generative testing, popular in functional programming, offers comprehensive testing by analyzing statistical outcomes.

**Benefits of Evolutionary Architecture**
Evolutionary architecture supports adaptability in rapidly changing markets. It allows companies to react to shifts without major rework, as seen with Amazon's transition from a monolithic to a microservices architecture, improving scalability and evolvability. Advanced capabilities like A/B testing become feasible with decoupled architectures, enhancing technical responsiveness.

**Cycle Time and Business Metrics**
Cycle time, the duration from development to deployment, has become a critical business metric. Companies with shorter cycle times gain competitive advantages, pushing organizations toward incremental change and continuous deployment.

**Challenges and Considerations**
- **Big Ball of Mud**: Highly coupled systems may require more effort to evolve than to rewrite.
- **Domain-Specific Architectures**: These focus on specific characteristics, making evolution challenging.
- **Sacrificial Architecture**: Designed to be discarded, often used to test market viability before building a robust system.
- **Business Longevity**: Companies not planning long-term may not benefit from evolutionary architecture.

**Summary of Evolutionary Architecture**
Building evolutionary architectures is not a one-size-fits-all solution. It requires a holistic approach, emphasizing automation and incremental change. Architects should focus on high-value fitness functions and ensure coupling control and verification automation to facilitate evolution. This approach allows systems to adapt to technical and domain changes effectively.

Overall, evolutionary architecture offers a framework for organizations to remain agile and responsive, but it requires careful consideration of feasibility, existing system constraints, and strategic goals.



The text explores the concept of evolutionary architecture, emphasizing adaptability and guided change in software design. Key principles include the use of fitness functions, which serve as experimental tools to evaluate architectural decisions. These functions can be automated using deployment pipelines and are categorized into static, dynamic, and triggered types. The importance of balancing evolvability with predictability is highlighted, along with the need for reversible decisions and minimizing needless variability.

Starting points for implementing evolutionary architecture include identifying dimensions affected by evolution, focusing on infrastructure, and considering "low-hanging fruit." The last responsible moment principle is crucial for making timely decisions, while sacrificial architectures can help manage technical debt. Organizational factors play a significant role, advocating for cross-functional teams organized around business capabilities.

Fitness functions are integral, serving as both governance tools and experimental media. They guide change by providing metrics for architectural decisions and are used in various contexts, such as DevOps and microservices. The text discusses the challenges of migrating architectures, including the transition from monolithic to service-based systems, and the role of continuous integration and delivery in facilitating incremental change.

Pitfalls and antipatterns, such as inappropriate governance and the Vendor King, are addressed, emphasizing the need for "just enough" governance. The text also covers the importance of data management in evolutionary architecture, highlighting issues like data duplication and schema evolution.

The authors, Neal Ford, Dr. Rebecca Parsons, Patrick Kua, and Pramod Sadalage, bring extensive experience in software architecture and development. They emphasize the importance of adaptability, guided change, and the strategic use of fitness functions to build resilient, evolvable systems.

Key concepts include:

- **Fitness Functions**: Used to guide and evaluate architectural changes.
- **Evolvability vs. Predictability**: Balancing adaptability with stability.
- **Organizational Structure**: Importance of team organization around business capabilities.
- **Incremental Change**: Facilitated by continuous integration and delivery.
- **Data Management**: Addressing challenges in schema evolution and data duplication.
- **Pitfalls and Antipatterns**: Recognizing and avoiding common architectural traps.

The text serves as a comprehensive guide to building and maintaining evolutionary architectures, emphasizing practical strategies and organizational considerations to support long-term adaptability and resilience.



**Building Evolutionary Architectures** features the open brain coral (*Trachyphyllia geoffroyi*) on its cover, known for its distinctive folds and vibrant colors. Native to the Indian Ocean, this coral thrives on photosynthesis during the day and captures prey at night. It's popular in aquariums due to its resilience and easy diet. The species is listed as Near Threatened on the IUCN Red List. The cover illustration by Karen Montgomery is based on an antique engraving. Fonts used include Gilroy Semibold, Guardian Sans, Adobe Minion Pro, Adobe Myriad Condensed, and Dalton Maag’s Ubuntu Mono. The book is published by O’Reilly Media, which offers various learning resources.

©2022 O’Reilly Media, Inc.
