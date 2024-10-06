
**Building Event-Driven Microservices: Key Concepts**

Adam Bellemare's book focuses on the architecture and implementation of event-driven microservices, emphasizing scalability and leveraging organizational data. It provides a comprehensive guide for understanding and building these systems, addressing both theoretical foundations and practical applications.

**Event-Driven Microservices Overview**

Event-driven microservices utilize events as the primary form of communication, allowing systems to be more responsive and scalable. This architecture aligns with domain-driven design, using bounded contexts to ensure that microservices are aligned with business requirements. Key benefits include improved data communication and the ability to perform independent modeling and querying.

**Communication Structures**

The book discusses various communication structures, including the impact of Conway's Law, which suggests that system designs mirror organizational communication patterns. It explores options for creating new services or integrating with existing ones, weighing the pros and cons of each approach.

**Microservice Fundamentals**

Microservice topologies and the structure of events are crucial. Events are categorized as unkeyed, entity, or keyed, with schemas defining data structures. The single writer principle ensures consistency, and event brokers are pivotal for storing and serving events.

**Data Contracts and Schemas**

Explicit schemas act as data contracts, facilitating schema evolution and ensuring compatibility. The book advises on selecting event formats, designing events for truthfulness, and involving consumers in the design process.

**Integration with Existing Systems**

Data liberation involves converting existing data into events, using patterns like change-data capture logs. This ensures seamless integration with legacy systems while maintaining performance and schema compatibility.

**Stream Processing**

The book covers both stateless and stateful stream processing, addressing determinism, timestamp synchronization, and handling late or out-of-order events. Techniques like watermarking and windowing are essential for managing time-sensitive data.

**State Management**

State can be materialized internally or externally, each with its advantages and drawbacks. Strategies for scaling and recovery, such as rebuilding or migrating state stores, are discussed.

**Workflow Patterns**

Choreography and orchestration are two patterns for building microservice workflows. The book compares these approaches, highlighting their use in distributed transactions and compensation workflows.

**Function-as-a-Service (FaaS)**

Microservices can be built using FaaS, which emphasizes bounded contexts and efficient resource allocation. Trigger-based execution and state management are crucial for optimizing function-based solutions.

**Frameworks and Tooling**

Heavyweight and lightweight frameworks are explored, each offering different benefits. The book provides guidance on choosing the right framework, managing event stream partitions, and scaling applications.

**Testing and Deployment**

Testing principles include unit and integration testing, focusing on schema evolution and compatibility. Deployment strategies like rolling updates and blue-green deployments ensure smooth transitions and minimal downtime.

**Conclusion**

The book concludes with a focus on communication layers, business domains, and the importance of shareable tools and infrastructure. It emphasizes the role of schematized events and data liberation in creating a single source of truth, ultimately enabling efficient and scalable microservices.

Overall, Bellemare's work is a detailed resource for anyone looking to implement event-driven microservices, offering insights into architecture, integration, and management in a scalable and efficient manner.



Event-driven microservice architectures offer more than just asynchronous messaging between systems. They are enabled by technologies like distributed, fault-tolerant event brokers and containerization, which support scalable and manageable microservices. These architectures influence problem-solving and business structures, providing new ways of operation.

Event-driven systems persist events indefinitely, allowing multiple consumers to access them, unlike traditional message-passing systems. Microservices, often small and purpose-built, consume events, apply business logic, and can emit new events or interact with APIs. They can be stateful or stateless and are implemented as standalone applications or functions.

Domain-driven design is crucial for building event-driven microservices. It involves understanding the domain, subdomains, and creating domain models that reflect business needs. Bounded contexts define the logical boundaries within which microservices operate, ensuring high cohesion and loose coupling. This alignment with business requirements allows teams to implement changes independently, enhancing flexibility and reducing dependencies.

Aligning microservices with business requirements rather than technical requirements prevents cross-cutting dependencies, which complicate changes and increase costs. Sole ownership of bounded contexts by teams ensures autonomy and reduces inter-team dependencies. While this approach may lead to code replication, it avoids the pitfalls of tight coupling.

Communication structures within organizations, including business communication structures, dictate how teams and departments interact to fulfill their goals. Understanding these structures is essential for efficient operation in an event-driven microservices environment.

Overall, event-driven microservices reshape how businesses function, offering scalable, flexible, and efficient solutions aligned with modern technological advancements.



The text discusses the evolution of communication structures in software engineering, emphasizing the interplay between business, implementation, and data communication structures. Business communication structures organize teams and dictate product boundaries, while implementation communication structures focus on subdomain models, business processes, and system design, often resulting in monolithic applications. Data communication structures, however, have been traditionally neglected, leading to inefficiencies in accessing domain data across organizational contexts.

Conway’s Law highlights that systems reflect the communication structures of their organizations, influencing product design and limiting data accessibility. Attempts to bridge these gaps, such as shared databases and batch processes, often result in strong coupling and scalability issues. The text illustrates this with a team scenario, where the choice between creating a new service or expanding an existing one demonstrates the challenges of data access and system modularity.

The event-driven approach offers a solution by decoupling data production from access. Event streams act as a canonical narrative, providing a single source of truth and enabling asynchronous communication. This structure shifts data modeling and querying responsibilities to consumers, allowing for greater flexibility and scalability. By formalizing data communication, organizations can better adhere to principles of loose coupling and high cohesion, facilitating efficient data usage across products and services.

Ultimately, accessible data supports changes in business communication, allowing new products to leverage core domain events without being tied to specific implementation structures. This approach addresses the limitations of traditional computing, promoting a more dynamic and adaptable system architecture.



Event-driven microservices offer significant advantages over synchronous microservices by enabling flexibility, scalability, and technological adaptability. They map services to bounded contexts, allowing easy rewrites when business needs change. These services can scale individually and use the most suitable technologies, facilitating prototyping with new technologies. The ownership of microservices is straightforward, reducing cross-team dependencies and allowing rapid adaptation to business changes. Event-driven microservices are loosely coupled, relying on domain data rather than specific APIs, which enhances data change management.

Continuous delivery is supported as small, modular microservices can be deployed and rolled back easily. High testability is achieved due to fewer dependencies compared to monolithic architectures. For example, when a new business requirement arises, teams can launch a new microservice and utilize event streams to ingest necessary data. This structure mitigates business risks, enabling teams to scale and reorganize as needed. The architecture prevents monolithic codebases and allows scaling of individual services based on CPU, memory, and other resources.

Synchronous microservices, common in service-oriented architectures, face challenges such as point-to-point couplings, dependent scaling, and complex failure handling. They require synchronous communication, which can lead to excessive service dependencies and scaling issues. API versioning and dependency management can become complex, and services might end up acting as distributed monoliths. Testing can be difficult due to the need for operational dependencies.

Despite these drawbacks, synchronous microservices have benefits, including favorable data access patterns and easier tracing of operations. They are often used for web and mobile experiences, providing timely responses to client requests. The familiarity of developers with synchronous coding makes talent acquisition easier. Hybrid architectures, combining both synchronous and asynchronous solutions, are common.

In event-driven microservices, communication is asynchronous, with consumer microservices processing events from input streams and producer microservices emitting events to output streams. Topologies describe the processing logic of microservices and the relationships between services, event streams, and APIs. Events are key/value pairs, with keys used for identification and routing. There are unkeyed, entity, and keyed events, each serving different purposes.

Entity events are crucial, providing a history of state changes and enabling state materialization from event streams. This process, known as table-stream duality, allows the creation of state in an event-driven microservice. State can be materialized by applying entity events in order, or a table's updates can be converted into a stream of events.

Overall, event-driven microservices provide a robust framework for building scalable, flexible, and adaptable systems that can efficiently handle complex business requirements and data communication needs.



In event-driven microservices, data operations such as insertion, update, and deletion are logged as immutable events in append-only logs, allowing for exact table reconstruction. This approach facilitates state communication between services without direct coupling. A tombstone, an event with a null value, signals deletion. Logs can grow indefinitely and require compaction to retain only the most recent events per key, reducing disk usage and processing needs but losing historical data.

Event data definitions and schemas, using tools like Apache Avro and Google's Protobuf, ensure a common understanding between producers and consumers, allowing schema evolution without code changes. Each event stream has a single producer, maintaining a clear data lineage and ownership.

Event brokers, central to microservice platforms, store events in partitioned streams and provide scalability, durability, high availability, and performance. They ensure strict ordering, immutability, and infinite retention of events, supporting replayability for maintaining state. Event brokers differ from message brokers by retaining events for long-term access and providing a single source of truth, while message brokers delete messages after consumption.

Event brokers support partitioning and indexing, allowing consumers to manage data consumption independently. They enable horizontal scaling through consumer groups, where multiple consumers can process partitions in parallel. Some brokers, like Apache Pulsar, support queue-based consumption, where events are consumed by one instance and marked as consumed.

Selecting an event broker involves considering support tooling, hosted services, client libraries, community support, and tiered storage. Tools for browsing event data, managing quotas, and monitoring are essential. Hosted solutions offer management outsourcing but may tie you to a provider. Community support ensures technology maturity and attractiveness to developers.

Event brokers serve as the single source of truth, requiring a cultural shift from direct database queries to consuming event streams. This ensures consistent data across services. Managing microservices at scale involves containerization and virtualization, allowing teams to customize deployment requirements. Containers, popularized by Docker, isolate applications with minimal resource overhead, leveraging shared operating systems for efficiency.

Overall, event-driven microservices rely on immutable logs and event brokers to maintain state, facilitate communication, and support scalable, resilient architectures.



Containers and virtual machines (VMs) are key technologies for deploying microservices, each with distinct advantages and challenges. Containers share the host machine's OS, posing security risks, especially in shared tenancy models. VMs provide full isolation with a self-contained OS, offering higher security but at a higher cost due to slower startup times and larger system footprints. Efforts like Google's gVisor, Amazon's Firecracker, and Kata Containers aim to make VMs more efficient, potentially making them a viable alternative to containers for security-focused applications.

Managing these technologies involves container management systems (CMSes) like Kubernetes, Docker Engine, Mesos Marathon, Amazon ECS, and Nomad, which handle deployment, resource allocation, and integration. Microservices require vertical and horizontal scaling, often deploying as single units within containers. Kubernetes supports complex deployments with its pod concept, enabling multiple containers and operations like database migrations.

The "microservice tax" refers to the costs associated with implementing microservices, including managing event brokers, CMS, deployment pipelines, and logging services. Organizations must consider these costs, as they can lead to unsustainable growth if not managed centrally. Open source and hosted services are reducing these costs, but organizations must be prepared for upfront investments.

Event-driven microservices rely on events as the fundamental unit of communication. Data contracts define the event's format and logic, ensuring both producers and consumers understand the message. Explicit schemas enforce these contracts, providing stability and reducing misinterpretation risks. Schema evolution rules, such as forward and backward compatibility, allow for independent updates by producers and consumers, supporting system flexibility.

Code generators convert event schemas into class definitions, ensuring adherence to data types and field requirements. This reduces data handling errors and enhances data quality. Breaking schema changes require careful coordination between producers and consumers, especially for entities that persist over time. Options include managing both old and new schemas or migrating entities to the new schema format.

Overall, the integration of containers, VMs, and event-driven architectures requires careful management of security, scalability, and data contracts to ensure efficient, reliable microservices deployment.



In event-driven architectures, resolving divergent schema definitions is crucial. Producers should handle schema changes, ensuring consistent redefinition of business entities. This involves reprocessing source data and applying new logic, maintaining old entities for validation and forensic purposes. New entities are produced under a new schema in a separate stream. For nonentity events with breaking changes, create a new event stream and notify consumers to register for it. Avoid mixing incompatible event types in a stream to ensure clear information and definitions for consumers.

Selecting the right event format is essential for fulfilling data contracts, with strongly defined formats like Avro, Thrift, or Protobuf recommended. These formats support schema evolution, unlike JSON. While plain-text events with key/value pairs offer flexibility, they often lead to increased interteam communication and complexity. A strongly defined schema format is preferred to maintain microservice isolation.

When designing events, adhere to best practices: ensure events are truthful, singular per stream, and use narrow data types. Avoid using strings for numeric values or enums, as this can lead to errors. Events should be single-purpose, without overloading with type fields, which complicates schema evolution and increases complexity. For example, splitting a generic event into specific ones reduces complexity and maintains clarity.

Minimize event sizes by ensuring data is directly related and relevant. Large events should be carefully evaluated to determine if the scope can be reduced. In cases where large data is unavoidable, use pointers sparingly to avoid multiple sources of truth. Involve prospective consumers in event design to align requirements and understand data needs.

Avoid using events as semaphores or signals, which can lead to consistency issues with multiple sources of truth. High-quality events are explicitly defined, have clear triggering logic, and include comprehensive schema definitions. Implicit schemas, while easier for producers, burden consumers and increase failure risks. Explicit schemas support the adoption of event-driven architectures, especially in growing organizations.

Overall, events should be narrowly focused, representing specific business occurrences. This approach ensures clarity, reduces complexity, and facilitates the evolution of schemas in line with business requirements.



Schema evolution is crucial in event-driven architectures, allowing changes to the event domain model without disrupting services. It enables producers and consumers to adapt to changes selectively, although breaking changes may require stakeholder collaboration. Transitioning to event-driven architectures involves integrating existing systems, often monolithic, into the new ecosystem. This process, known as data liberation, involves making business domain data available in event streams, serving as a single source of truth and decoupling systems.

Data liberation identifies and publishes cross-domain data sets to event streams, standardizing data access across systems. It ensures eventual consistency, with liberated data streams reflecting the source data. This approach supports new microservices and refactored legacy applications by maintaining state in the event broker, though it may not be feasible for all legacy systems due to complexity and cost.

There are three main data liberation patterns: query-based, log-based, and table-based. Each pattern extracts data differently, ensuring the event stream is synchronized with the source data. Query-based liberation involves querying the data store and emitting results to an event stream. It supports bulk loading, incremental timestamp loading, autoincrementing ID loading, and custom querying, allowing for tailored data extraction.

Query-based updating offers customizability, independent polling periods, and isolation of internal data models. However, it requires an updated-at timestamp, cannot track hard deletions, and may lead to brittle dependencies between data schemas. Data liberation frameworks like Kafka Connect, Apache Gobblin, and Apache NiFi can facilitate this process, although they may inadvertently increase system coupling.

Overall, data liberation is essential for transitioning to event-driven architectures, providing a unified data source and enabling system decoupling. It requires careful consideration of data schemas and incremental updates to maintain consistency and support legacy systems effectively.



Change-data capture (CDC) is a method used to track and manage changes in data stores, enabling the efficient liberation of data for event-driven architectures. This process can be implemented using different techniques, each with its own set of benefits and drawbacks.

**Change-Data Capture Logs**: This approach uses the data store’s logs (e.g., binary logs in MySQL, write-ahead logs in PostgreSQL) to capture changes. It supports low-latency updates and minimal impact on data store performance. However, it exposes internal data models, requires denormalization outside the data store, and can create brittle dependencies between data set schemas and event schemas. Tools like Debezium and Maxwell facilitate the extraction of data from these logs, often integrating with platforms like Apache Kafka.

**Outbox Tables**: An outbox table records changes made to internal data, storing each update as a separate row. This method requires bundling data store updates and outbox updates into a single transaction to maintain consistency. While it isolates internal data models and supports multilanguage environments, it necessitates application code changes and may impact business process performance due to serialization overhead. The outbox table can also denormalize data before publishing, reducing the need for downstream processing.

**Built-in Change-Data Tables**: Some databases, like SQL Server, use change-data tables instead of logs. These tables are used for auditing and can be accessed by external services like Kafka Connect and Debezium to extract events and produce them to event streams.

**Performance Considerations**: The inclusion of outbox tables adds load to the data store, which may be negligible for small systems but significant for larger ones. Evaluating the cost of this approach against alternatives is essential.

**Schema Compatibility**: Ensuring schema compatibility is crucial. Serializing data before writing to the outbox provides strong consistency guarantees, preventing incompatible data from being published. This approach, however, can impact performance and business operations if serialization fails. Serializing after writing offers less consistency but avoids blocking business processes.

Overall, CDC methods must be chosen based on system requirements, balancing the need for data liberation with performance and consistency considerations. Each method offers unique advantages and challenges, requiring careful planning and implementation to optimize data integration in event-driven architectures.



Performance impacts on data stores can be significant when managing large volumes of records in event-driven architectures. Balancing these impacts with costs is crucial, as some organizations may choose to emit events by parsing change-data capture logs, leaving downstream teams to handle cleanup. This approach can lead to increased computational and human-labor costs due to schema incompatibilities and coupling issues.

Triggers are a traditional method for capturing change-data in relational databases, automatically generating audit tables upon specific conditions. They ensure update atomicity by failing the command if the trigger fails. Triggers can capture row-level changes and are beneficial in legacy systems where schemas are stable. However, they pose challenges such as performance overhead, complexity in change management, and poor scalability. Schema validation during trigger execution is often unsupported, leading to potential downstream issues.

Handling data definition changes is complex in data liberation frameworks. Changes like adding or deleting columns can disrupt event streams if not managed properly. Capturing these changes depends on the integration pattern used. For example, the query pattern detects schema changes at query time, while the CDC log pattern captures updates in logs. The change-data table pattern requires schema validation prior to production release, ensuring compatibility with the output event stream.

Sinking event data involves consuming event streams and inserting them into data stores, useful for integrating non-event-driven applications. This process can be managed centrally or through standalone microservices. A centralized framework reduces overhead but introduces shared responsibilities, potentially leading to dependencies and management challenges.

A shift towards an "event-first" mindset is essential for successful event-driven architecture implementation. Teams should minimize reliance on CDC frameworks and focus on publishing their own events, fostering a culture of direct participation in the event-driven ecosystem. This approach reduces cross-team dependencies and supports native event-driven applications.

In summary, data liberation is key to enhancing data communication layers, enabling decoupled product and service development. Various strategies exist, each with benefits and tradeoffs. The objective is to provide a consistent source of truth, decoupling data access from its production and storage, thereby promoting innovation and reducing reliance on legacy systems.



In event-driven architectures, producers are responsible for creating high-quality, well-defined event streams, acting as a single source of truth. They collaborate with consumers to prevent disruptive changes and ensure compatibility with event schemas. Conversely, reactive strategies, where data owners have little visibility into data production, often lead to broken schemas and unsustainable practices. Organizational culture significantly impacts the success of data liberation initiatives, emphasizing the need for clean and reliable event streams.

Event-driven microservices typically follow a three-step process: consuming an event, processing it, and producing output events. These microservices operate by creating producer and consumer clients, registering with consumer groups, and polling for new events. The `processEvent` function applies business logic, transforming data to meet specific business needs. Microservice topologies involve a sequence of operations like filtering, mapping, and custom transformations, akin to functional programming and big data frameworks.

Transformations include filtering events, changing event keys or values, and applying custom logic. Branching and merging streams allow logical operations on events, directing them to appropriate streams based on properties. Repartitioning involves creating new streams with different partition counts, keys, or partitioners, ensuring data locality for efficient processing. Copartitioning ensures events from different streams with the same key are processed together, crucial for stateful operations like joins.

Partition assignment strategies, such as round-robin, static, and custom assignments, distribute partitions across consumer instances. These strategies ensure balanced processing and accommodate copartitioned streams. Stateless processors recover from failures by simply rejoining consumer groups without state restoration, allowing immediate event processing.

Deterministic stream processing addresses challenges like processing order, out-of-order events, and deterministic results in real-time and historical data processing. Timestamps, event scheduling, watermarks, and stream times contribute to deterministic outcomes, crucial for accurate reprocessing in case of bugs or business logic changes. Handling out-of-order and late-arriving events involves strategies to mitigate their impact, ensuring reliable and consistent microservice workflows.



### Determinism in Event-Driven Workflows

Event-driven microservices operate in two states: real-time processing and catching up on past events. The goal of deterministic processing is to ensure consistent outputs regardless of the processing state. However, workflows relying on external services or current time may introduce nondeterminism. Deterministic processing aims for consistent timestamps, event keys, partition assignments, and handling late events to achieve best-effort determinism.

### Timestamps and Synchronization

Events require synchronized timestamps for accurate comparison across distributed systems. Timestamps include event time, broker ingestion time, consumer ingestion time, and processing time. Synchronizing clocks using Network Time Protocol (NTP) servers is crucial, though challenges like network issues and clock drift exist. Consistent timestamps are vital for maintaining event order across streams and partitions.

### Event Scheduling

Deterministic processing involves scheduling events based on timestamps rather than offsets. This ensures correct temporal order, crucial for tasks like banking transactions where deposits and withdrawals must be processed accurately. Event scheduling selects the oldest timestamp across partitions for processing.

### Custom Schedulers and Time Considerations

Custom event schedulers, such as those in Apache Samza, allow prioritization based on various factors but may introduce nondeterminism. Processing time decisions involve choosing between event time and broker ingestion time. The choice affects accuracy, especially when handling historical events.

### Watermarks and Stream Time

Watermarks track event time progress and signal when events of a certain time have been processed. They are essential in frameworks like Apache Spark and Flink for coordinating event time across nodes. Stream time, favored by Apache Kafka Streams, maintains the highest timestamp of processed events, ensuring consistent processing order.

### Parallel Processing and Repartitioning

Parallel processing uses watermarks or stream time to coordinate event time across consumer instances. Repartitioning involves shuffling events based on keys, either through internal streams or cluster communications, ensuring all events with the same key are processed together.

In summary, deterministic processing in event-driven systems relies on synchronized timestamps, careful event scheduling, and handling of nondeterministic factors. Techniques like watermarks and stream time play crucial roles in maintaining order and consistency across distributed systems.



In stream processing, maintaining event time is crucial to preserve the original temporal order, especially during repartitioning, which logically shuffles event data without altering timestamps. Repartitioning enables parallel processing by dividing the topology into subtopologies, each maintaining its own stream time. Apache Samza, similar to Kafka Streams, uses watermarking instead of stream time for this purpose.

Out-of-order events occur when timestamps are not in sequence, which is common in unbounded data sets. Handling such events requires balancing latency and determinism based on business needs. For instance, in banking, transactions must be processed in order to avoid errors like incorrect overdraft charges. Applications might maintain state for a grace period to manage out-of-order data.

Late events, which arrive after a deadline, are managed using strategies like watermarks and stream time. Causes include sourcing from out-of-order data or multiple producers writing to partitions. Repartitioning can exacerbate this, causing time skew and out-of-order events due to unsynchronized stream times and unbalanced partition sizes.

Windowing functions, such as tumbling, sliding, and session windows, group events by time and must handle out-of-order events. Decisions on waiting for late events depend on factors like the likelihood of occurrence, business impact, and resource costs. Strategies for handling late events include dropping them, waiting to process, or using a grace period for updates.

Reprocessing allows replaying events from a specific point, crucial for stateful consumers. It involves resetting consumer offsets and considering data volume and processing time. Reprocessing must account for actions that shouldn’t be repeated, like sending duplicate emails.

Intermittent failures, such as connectivity issues between producers and brokers, can delay event publication, causing late events in near-real-time processing. Mitigation strategies include delaying processing or implementing robust late-event handling.

Overall, stream processing involves trade-offs between latency and correctness, with best-effort solutions to manage out-of-order and late-arriving events.



Stateful streaming is crucial for event-driven microservices, requiring both materialized states and state stores. Materialized state is a projection of events from a source stream and is immutable, while a state store is mutable and stores the business state and intermediate computations. Microservices can store state internally, within the same container, or externally, using an external storage service.

**Changelog Event Streams:** Changelogs record all changes to a state store, enabling state rebuilding and checkpointing. They are stored in event brokers and should be compacted to maintain only the most recent key/value pairs. Changelogs enhance recovery and scalability, especially for internal state stores, by allowing new instances to load data from changelog partitions.

**Internal State Stores:** These coexist with the microservice's business logic and are tied to the microservice instance. They use high-performance key/value stores like RocksDB, optimized for SSDs, to manage data exceeding memory allocation. Internal state stores support high throughput and low latency but are limited to runtime-defined disk space. They facilitate scaling by offloading scalability requirements to event brokers and compute clusters.

**Global State Stores:** A special form of internal state store, global state stores materialize data from all partitions, providing a complete event data copy to each instance. They are useful for small, seldom-changing datasets but can lead to duplicate outputs if used for event-driven logic.

**Network-Attached Storage:** While offering flexibility, network-attached disks increase latency, reducing throughput. They allow state migration across hardware but result in lower performance compared to physically attached disks.

**External State Stores:** These exist outside the microservice's container, often within the same network, and must remain logically isolated from other microservices. They provide full data locality and leverage familiar technologies, reducing delivery time to production. However, they introduce management complexity and performance loss due to network latency. External state stores require strong read-after-write guarantees to ensure consistency.

**Scaling and Recovery:** Scaling and recovery involve reloading state from changelogs or input streams. Changelogs allow quick recovery, while rebuilding from input streams is slower and may produce duplicate outputs. Hot replicas can provide zero-downtime recovery but require additional disk space.

**Management Considerations:** External state stores necessitate independent management and scaling, posing risks if not maintained properly. Teams must manage their external stores, with guidance on acceptable services and scaling practices to prevent cross-team dependencies.

In summary, choosing between internal and external state storage depends on business requirements, technical constraints, and performance needs. Internal stores offer high performance and simplicity, while external stores provide flexibility and leverage existing technologies but at the cost of increased complexity and latency.



External state stores often incur higher financial costs than internal ones, charging based on transactions, data size, and retention periods. They may require over-provisioning for inconsistent loads, though on-demand pricing can help manage costs. Full data locality, while beneficial, presents challenges due to the independent processing rates of multiple microservices, leading to potential race conditions and nondeterministic behavior.

Scaling and recovery with external state stores require adding new instances with credentials, while scaling the state store itself depends on the technology used. Strategies for building state include rebuilding from source streams, using changelogs, and creating snapshots. Rebuilding involves consuming events from the beginning, incurring downtime but ensuring reproducibility. Changelogs can repopulate state stores, but network latency can be a challenge. Snapshots offer simpler backup and restoration, with idempotent states allowing for flexible offset management.

Rebuilding state stores is common for updates but requires available input data and can test disaster recovery preparedness. Migration is used when rebuilding is impractical, though it risks inconsistencies without thorough testing. Transactions ensure effectively once processing, maintaining consistent updates despite failures. Idempotent writes prevent duplicate events, and transactions allow atomic updates across multiple streams.

Effectively once processing without transactions requires deduplication, identifying duplicates through unique IDs based on event data. While idempotent production helps, identifying duplicates is crucial when event brokers lack transactional support. Unique IDs can be generated for events with high cardinality to minimize duplicates, ensuring consistency in processing.

Overall, managing state in microservices involves balancing costs, scalability, and consistency, with strategies tailored to the specific requirements and limitations of the chosen state store technology.



In event-driven microservice architectures, managing duplicate events and maintaining consistent state are critical challenges. Producing events with a key and respecting partition locality can help manage duplicates. Idempotent operations, though not always feasible, are essential for effectively-once processing. Consumers need to maintain a deduplication store with strategies like time-to-live (TTL) and maximum cache size to manage previously processed IDs. Deduplication is typically performed within a single partition due to the high cost of cross-partition deduplication.

Microservices can leverage transactional state stores to achieve effectively-once processing by managing consumer offsets within the state store. This ensures that state changes and offset updates are atomic, providing consistency. In case of failures, the service can revert to the last known good state, halting consumption until recovery.

Choreographed architectures involve decoupled microservices that react to events independently, much like a dance. This pattern allows for loosely coupled systems and easy addition or removal of services. However, modifying workflows can be challenging, particularly when inserting steps or changing the order. Monitoring such workflows requires attention to scale and scope, as distributed systems can obscure event processing progress.

In contrast, orchestration involves a central orchestrator microservice that issues commands to worker microservices. The orchestrator handles workflow logic, while worker services focus on business logic. This pattern allows for flexible workflow definitions and easier modification by changing the order of event dispatches. The orchestrator maintains a materialized state of events, enabling it to manage workflow progress and make decisions based on results.

Both patterns have their use cases: choreography is ideal for independent workflows with minimal coordination needs, while orchestration suits scenarios requiring centralized control and complex workflow management. Each approach requires careful consideration of bounded contexts and responsibilities to ensure efficient and reliable microservice interactions.



In microservices architecture, orchestration and choreography are two primary methods for managing workflows. Direct-call orchestration uses synchronous request-response patterns, providing faster interactions ideal for real-time operations. However, they require careful management of connectivity issues. Event-driven orchestration offers more robust and durable workflows, capable of handling intermittent failures with built-in retry mechanisms.

Orchestrators should focus solely on coordinating workflows, avoiding the anti-pattern of becoming a "God" service that manages too much business logic. This ensures better encapsulation and scalability. Monitoring these workflows involves querying materialized states to track event progress and issues.

Distributed transactions involve multiple microservices and can add complexity. They are best avoided unless necessary, as they require handling synchronization, rollbacks, and transient failures. The saga pattern, either choreographed or orchestrated, manages distributed transactions by ensuring services can process and reverse actions.

Choreographed transactions require strong coupling and strict ordering, suitable for simple scenarios with few services. Monitoring them can be challenging due to their decentralized nature. Orchestrated transactions, on the other hand, provide better visibility and flexibility. The orchestrator manages rollback logic and can handle various signals like timeouts and human inputs.

Compensation workflows offer alternatives to strict transactions by addressing failures post-occurrence, often used in customer-facing scenarios like inventory management. They provide flexibility in resolving issues without rolling back entire transactions.

Function-as-a-Service (FaaS) solutions enable scalable, serverless microservices. Functions execute based on triggers, scaling with demand. Designing FaaS solutions involves maintaining strict boundaries within bounded contexts, ensuring clear ownership and data privacy. Offsets should be committed only after processing to guarantee at least once processing, aligning with standard microservice practices.

Overall, orchestration provides structure and clarity for complex workflows, while choreography suits simpler, less dynamic interactions. FaaS offers flexibility and scalability, fitting well into event-driven architectures. Each approach has distinct advantages and trade-offs, requiring careful consideration based on specific workflow needs. 



Function-as-a-Service (FaaS) frameworks offer a simple method for executing functions in response to events, often using a choreography pattern to manage event processing. However, committing offsets before processing can lead to data loss if retries fail, making this strategy unsuitable for data-sensitive microservices.

FaaS frameworks enable easy reuse of functions across services, but this can lead to fragmentation and unclear ownership. While versioning can mitigate conflicts, fewer functions are generally better for manageability. Open source FaaS options like OpenWhisk and OpenFaaS, and proprietary solutions from AWS, GCP, and Azure, offer various features, with proprietary solutions being closely tied to their providers' event brokers.

When building microservices with FaaS, consider the function, input event stream, triggering logic, and error/scaling policies. Functions process events upon triggering, which can be set up using a function-trigger map. Cold starts occur when a function starts after inactivity, while warm starts reuse resources, reducing startup time.

Triggers initiate function processing and vary by framework. Common triggers include event-stream listeners, consumer group lag, scheduled triggers, webhooks, and resource events. Event-stream listeners reduce overhead by directly injecting events into functions, while lag triggers start functions based on consumer group lag metrics.

FaaS solutions excel in on-demand processing scenarios, particularly for stateless, scalable tasks. However, maintaining state typically requires external services, as functions have short lifespans. Some frameworks, like Azure's Durable Functions, offer durable state support, simplifying state management.

Functions can call other functions, supporting choreographed and orchestrated workflows. Communication can be asynchronous or request-response based, depending on the framework and context. Ensuring event processing is completed before starting the next event is crucial to avoid out-of-order issues.

Overall, FaaS frameworks provide flexible, scalable solutions for event-driven microservices, with ongoing improvements in state management and function orchestration. Choosing the right FaaS provider and setup depends on the specific needs and existing infrastructure of the organization.



In Function-as-a-Service (FaaS) architectures, a bounded context can consist of multiple functions and internal event streams, each processing events independently. Functions manage their own consumer offsets, ensuring that failures don't result in data loss, as events are stored durably and reprocessed as needed. This design supports both choreography and orchestration patterns.

**Choreography and Asynchronous Calls:** Functions can call others directly, either asynchronously or synchronously. Asynchronous calls lead to a choreography-based solution where functions invoke others based on business logic without awaiting responses. This approach simplifies chaining but can lead to issues like out-of-order processing and consumer offset mismanagement.

**Orchestration and Synchronous Calls:** Synchronous calls allow for a structured sequence of function invocations, ensuring each function's output can be used by the next. This pattern respects event order and is beneficial when precise execution order is required.

**Termination and Shutdown:** Functions terminate after completing their tasks or reaching their lifespan limits. Managing open connections and resource assignments is crucial to prevent processing delays. For frequently online functions, rebalancing may not be necessary, but intermittent functions should close connections to avoid resource claims.

**Tuning and Scaling:** Functions need appropriate CPU and memory allocation to balance performance and cost. Maximum execution time should accommodate batch processing needs. Functions can scale based on consumer input lag, processing throughput, and other factors. However, frequent rebalancing can lead to inefficiencies, so a careful scaling policy is necessary.

**Basic Producer and Consumer Microservices (BPC):** These microservices handle event ingestion, transformation, and emission without advanced features like event scheduling or horizontal scaling. They are suitable for simple stateless transformations and integration with legacy systems. The sidecar pattern can be used to integrate legacy systems into event-driven architectures without altering their codebase.

Overall, FaaS and BPC microservices offer flexibility in building scalable, event-driven architectures, with careful consideration needed for function orchestration, resource management, and scaling strategies.



The Basic Producer and Consumer (BPC) pattern allows for the addition of new functionality to systems without significant changes to the legacy codebase. It is particularly effective in scenarios where business processes are not dependent on the order of events but require all necessary events to occur, known as the gating pattern. For example, in book publishing, the contents, cover art, and pricing must be completed before sending a book to the printer, regardless of the order of completion. This pattern is also suitable when the data layer performs most of the business logic, such as in geospatial data stores or machine learning applications.

BPCs enable independent scaling of processing and data layers, which is useful when event volume varies, such as during different times of the day. For instance, user behavior events can be aggregated into 24-hour sessions to determine product popularity, with processing scaled down at night to save resources. Service providers like Google, Amazon, and Microsoft offer scalable data stores that support this pattern effectively.

Hybrid BPC applications can leverage external stream-processing systems for complex tasks that are challenging to perform locally. This involves using a BPC microservice alongside an external stream-processing framework to handle operations like joining large sets of event streams. This approach provides access to stream-processing features that may not be available within the microservice itself but introduces additional complexity in testing and debugging.

Heavyweight frameworks such as Apache Spark, Flink, and Storm are used for handling large-scale stream processing. These frameworks require independent clusters of processing resources and offer mechanisms for failure handling, recovery, resource allocation, and task distribution. They are well-suited for analytical tasks like ETL, session-based analysis, and abnormal pattern detection. However, they are not originally designed for microservice-style deployment, requiring dedicated infrastructure.

Despite their power, heavyweight frameworks have limitations, including increased complexity and the need for specialized deployment strategies. They provide significant value for analyzing large volumes of events in near-real time but require careful consideration of their integration into microservice architectures. Overall, the BPC pattern and heavyweight frameworks offer flexible and scalable solutions for event-driven processing, with trade-offs in complexity and deployment requirements.



Heavyweight frameworks for stream processing, often JVM-based, present challenges in managing complexity and language limitations. They may not natively support indefinitely retained tables for entity stream materialization, which affects table-table and stream-table joins. Although frameworks emphasize time-based aggregations, they also offer global windows for event stream materialization, albeit with limited documentation.

Technological advancements and common APIs, like Apache Beam, are evolving the heavyweight framework landscape. For cluster setup, options include hosted services, building full clusters, or integrating with a Container Management System (CMS). Hosted services reduce operational overhead but may lack features of independently operated clusters. Building your own cluster is traditional, especially for large-scale services, while CMS integration offers benefits like monitoring and resource management.

Deploying clusters using CMS involves managing master and worker nodes within containers, providing visibility and automatic restarts. CMS can also handle resource allocation for jobs, with frameworks like Spark and Flink supporting Kubernetes for scalable deployment. This allows for isolation between jobs and the use of different frameworks, though not all frameworks or CMSes support this integration.

Applications can be submitted in driver or cluster modes. Driver mode involves a local application coordinating execution, while cluster mode submits the entire application to the cluster. Stateful operations use internal state for performance, with checkpoints for recovery. Checkpoints ensure operator and key state synchronization to prevent data loss or duplicate processing.

Scaling applications involves managing event stream partitions. Stateless applications scale easily, while stateful ones require careful state management. Strategies include scaling without stopping the application, using external shuffle services, or restarting it. Autoscaling adjusts resources based on metrics like latency or CPU usage, with some frameworks offering built-in options.

Heavyweight clusters are designed for fault tolerance, handling failures of master, worker, and Zookeeper nodes to maintain application continuity. These frameworks continue to improve, with features like Spark's dynamic scaling illustrating integration with CMSs like Kubernetes.



In the deployment of heavyweight stream processing frameworks, handling node failures and ensuring high availability are critical. Worker node failures result in task reassignment to other nodes, with state reloaded from checkpoints. Master node failures can be addressed using technologies like Zookeeper for high availability. Proper monitoring of nodes is essential to prevent performance degradation.

Multitenancy in clusters requires careful resource management. Resource acquisition priority, spare-to-committed resource ratios, and scaling rates must be considered to avoid service-level objective (SLO) violations. Solutions include running multiple smaller clusters for different teams or using namespaces for resource allocation within a single cluster, though both have cost and resource fragmentation implications.

Heavyweight frameworks, rooted in JVM languages like Java and Scala, support SQL-like languages for easier data transformation. Frameworks such as Spark, Flink, Storm, and Beam offer varying features and syntax. Choosing a framework involves evaluating operational overhead, popularity, and compatibility with organizational needs.

A practical example involves session windowing for an online advertising company. Events like user ad views and clicks are aggregated into session windows using a 30-minute timeout. The process involves grouping events by user, aggregating them, and emitting results when sessions close.

Lightweight frameworks, in contrast, heavily leverage event brokers and container management systems (CMS) for scaling, state management, and failure recovery. These frameworks do not require dedicated resource clusters, allowing applications to be deployed as independent microservices. Parallelism is managed through consumer groups and partition ownership, with resources dynamically allocated as instances join or leave.

Lightweight frameworks offer stream processing capabilities similar to heavyweight ones, with additional features like table materialization and join functionality. They rely on event brokers for data locality and durable storage via changelogs. Applications scale by adjusting instances, with state reloaded from changelogs during scaling or recovery.

Event shuffling in lightweight frameworks uses internal event streams for data partitioning, simplifying scaling. State assignment involves loading data from changelogs before processing new events. Hot replicas provide standby state stores for high availability during scaling and failure recovery.

Overall, heavyweight and lightweight frameworks offer distinct advantages and challenges, with the choice depending on specific organizational needs and infrastructure capabilities.



The text discusses lightweight frameworks for stream processing, focusing on Apache Kafka Streams and Apache Samza. These frameworks integrate with the Apache Kafka event broker, enabling scalable data processing without the need for heavyweight clusters. They support indefinitely retained materialized streams, allowing for complex operations like primary-key and foreign-key joins, which are beneficial for handling relational data.

**Apache Kafka Streams** is a JVM-based library that simplifies stream processing by embedding within individual applications. It leverages Kafka's deep integration for efficient processing. **Apache Samza**, originally designed for heavyweight clusters, now offers an embedded mode similar to Kafka Streams, allowing integration within applications without dedicated clusters. Samza relies on Apache Zookeeper for coordination but can be adapted to use Kubernetes.

Both frameworks use a MapReduce-like syntax and are suitable for those familiar with functional programming. Samza supports a limited SQL-like language, while Kafka Streams offers KSQL via Confluent for SQL operations.

A practical example is provided using Kafka Streams for an advertising company. The process involves transforming user session data into conversion events, aggregating these by advertisement ID, and joining them with advertisement entity data for billing purposes. This is achieved through a series of stages involving parallel processing, aggregation, and joining operations, demonstrating the framework's ability to handle complex data processing tasks.

The text also highlights the integration of event-driven and request-response microservices. While event-driven patterns are powerful, request-response endpoints are essential for real-time data needs, such as collecting metrics from IoT devices or serving content to users. Externally generated events are typically handled via request-response APIs due to security and access concerns.

There are two types of externally generated events: autonomously generated events, such as user activity metrics, and reactively generated events, which are responses to service requests. The latter are crucial when responses contain important business data, such as payment confirmations.

For autonomously generated analytical events, schemas are crucial for ensuring data fidelity and reducing misinterpretation. These events should be versioned to accommodate applications running different code versions, and they should be routed into specific event streams based on their schemas and business purposes.

Overall, lightweight frameworks provide a scalable, efficient solution for stream processing, while integrating with request-response services enhances their capability to meet diverse business needs.



Event-driven microservices often integrate with third-party APIs using request-response protocols, treating these interactions as remote function calls. The microservice processes events, generates requests, and waits for responses to continue applying business logic. This pattern allows for mixing event processing with API calls and supports parallel processing by making nonblocking requests. However, it introduces nondeterministic elements and potential issues with API changes or high request frequencies, which can lead to failures or blocked traffic. Throttling and quotas can mitigate these issues.

Event-driven microservices can also provide request-response endpoints for accessing state. This can be achieved by serving state from internal or external stores. Internal state stores require routing requests to the correct instance based on partition assignments, which can lead to increased latency with more instances. A smart load balancer can help reduce latency by routing requests correctly.

External state stores offer advantages like seamless scaling and zero-downtime options, as all state is accessible to each instance. This model avoids tight coupling between services and allows for independent scaling and language choices for request-response APIs. However, it requires careful management of deployments and integration testing.

Handling requests within event-driven workflows involves either performing operations immediately or converting requests into events for processing. Writing to an event stream first provides a durable record but incurs latency. Processing events for user interfaces requires asynchronous UI design to manage user expectations and handle input as events.

Overall, integrating event-driven microservices with request-response APIs and stateful data processing requires careful consideration of patterns, scalability, and potential drawbacks to ensure robust and efficient systems.



Asynchronous UI techniques can enhance user experience by managing expectations during backend processing. For instance, displaying a "please wait" message with a spinning wheel can indicate that a request is being processed, preventing further user actions until completion. This approach is common in airline booking and automobile rental websites.

In microservices, it's crucial to decide when to update the UI based on event processing, considering factors like stale state impact and performance. Duplicate events from network failures should be handled idempotently.

A newspaper publishing workflow illustrates the benefits of converting requests to events. The workflow involves a newspaper designer using a GUI to arrange articles and ads based on templates and business logic. The editor ensures cohesion and order, approving or rejecting the layout before publication. This process is managed by two microservices: one for design and another for approval.

The newspaper populator microservice handles layout templates, ads, and articles, storing them in a database. Once ready, the layout is compiled into a PDF, saved externally, and produced as an event. The populated newspaper event includes metadata like PDF URI, version, and page details.

Approvals are managed by a separate microservice. The editor views and marks up the PDF, providing approval or rejection. Advertisers approve their ads through a UI, with the system determining which require approval. Approval events are recorded, forming a narrative that can be audited for history and issues.

Separating editor and advertiser approval services aligns with business contexts. The editor service focuses on layout and design, while the advertiser service manages ad approvals, ensuring security and privacy. This separation allows for independent control and processing of approvals.

Micro-frontends align backend and frontend services with business concerns. They offer modularity, autonomous teams, and flexibility, supporting event-driven backends. However, they can lead to inconsistent UI elements and styling. A strong style guide and common UI element library can mitigate these issues, though they require careful management.

In summary, asynchronous UI techniques and event-driven workflows improve user experience and system efficiency. Microservices and micro-frontends provide modularity and alignment with business needs, though they require careful design to maintain consistency and manage complexity.



Microfrontends encapsulate business logic within bounded contexts, requiring recompilation and redeployment when common UI elements change. This can be costly, but infrequent UI changes mitigate this. Microfrontends may load at varying rates, necessitating designs that handle partial failures gracefully, such as using loading indicators.

An example application connects users with local experiences and reviews. Initially, it used a monolithic frontend. The updated version separates search and review services into microfrontends, supporting geolocation search and decoupling review logic. This allows independent scaling and management by separate teams.

Event-driven backends pair well with microfrontends, with data externalized in event streams. This separation facilitates breaking out services without complex data migrations. The search service now supports personalized results by consuming user profile events, improving clarity of data usage compared to the monolithic version.

Microfrontends and event-driven microservices enable independent evolution of components. This architecture supports flexible frontend experimentation and segmentation, aligning with backend microservices' autonomous deployment patterns.

Supportive tooling is crucial for managing event-driven microservices. Tools should be self-serve, supporting scalable DevOps practices. Ownership of microservices and event streams should be explicitly tracked, often using metadata tagging. This includes stream ownership, PII, financial data, namespaces, and deprecation status.

Quotas prevent resource monopolization by limiting CPU and I/O usage for producers and consumers. Schema registries manage event data definitions, reducing bandwidth and supporting data discovery. Confluent's schema registry for Apache Kafka is a notable implementation.

Schema notifications alert consumers to changes, using access control lists to identify dependencies. This preempts issues from schema evolution. Offset management is essential for processing data in event-driven systems, ensuring accurate data handling.

Overall, microfrontends and event-driven architectures offer flexibility and scalability, supported by precise tooling and management practices.



In event-driven microservices, managing consumer offsets is crucial. Offsets may need to be reset to reprocess events, consume only new data, or recover from failures. This involves setting offsets to specific points, often requiring team ownership for modifications.

Access control is vital for enforcing boundaries and security. Permissions like READ, WRITE, and DELETE are governed by Access Control Lists (ACLs), which rely on identifying consumers and producers. This ensures that microservices maintain ownership over their event streams and adhere to the single writer principle.

Orphaned streams and microservices can be identified by cross-referencing access permissions with existing streams. Streams without consumers may be deleted, and redundant microservices removed, ensuring a healthy event stream topology.

State management often requires resetting internal states when changing stateful applications. This may involve deleting and recreating streams and resetting external state stores. The microservice-to-team assignment system ensures only authorized resets.

Consumer offset lag monitoring helps determine if microservices need scaling. Lag is the difference between the most recent event and the last processed event. Tools like Burrow for Apache Kafka can evaluate historical lag to identify scaling needs, using hysteresis to prevent constant scaling adjustments.

Streamlining microservice creation involves automating repository setup, CI pipeline integration, and permissions assignments. This process ensures consistency and efficiency, incorporating updated templates and code generators.

Container management services (CMS) allow teams to manage resources, set environment variables, and control scaling. The extent of control exposed to developers depends on the organization's DevOps culture.

Cluster management becomes essential as companies scale. Larger organizations might need multiple clusters for data isolation or redundancy. Multicluster management involves complex strategies, often requiring custom solutions.

Event broker cluster management tools facilitate easy creation and scaling of clusters. Cloud providers offer hosted services, like AWS and Google’s Kubernetes, for on-demand resource management.

Cross-cluster event data replication is crucial for scaling and disaster recovery. Replication tools should handle new streams, maintain data integrity, and meet business latency and performance needs.

Programmatic tooling setup for new clusters provides consistency and familiarity, reducing bugs and easing the deployment process.

Dependency tracking and topology visualization help manage microservice dependencies, ensuring compliance and providing insights into data lineage, team boundaries, and interconnectedness. These tools aid in aligning microservices with business requirements, mapping implementation to business goals, and facilitating data discovery.

Overall, effective management of offsets, permissions, state, and resources, alongside robust monitoring and visualization, supports scalable, secure, and efficient microservice architectures.



In managing microservices, aligning technical teams with business communication structures is crucial. A topology map with 25 microservices, divided among four teams, highlights the challenges of cross-team dependencies. For instance, team 2 manages microservices 2 and 7, which are outside its main context, leading to potential misalignment with business goals and increased external dependencies.

To optimize team assignments, microservices can be reassigned to reduce cross-team dependencies. For example, microservice 7 could be moved to team 1 or 3, and microservice 2 to team 4. This realignment reduces inter-team connections, as shown by a decrease in the interconnectedness metrics after reassignment.

While reducing cross-boundary connections is beneficial, assigning microservices requires considering factors like team size, expertise, and the business functions of the microservices. For example, if a team focuses on data sourcing, their microservices may have many stream connections, emphasizing the need to align services with business goals.

Effective management of microservices involves tracking service and stream ownership, schemas, and metadata to reduce ambiguity and tribal knowledge. Autonomy and control over services are vital, aligning with DevOps principles. Schema registries help manage changes, ensuring a common understanding of events.

Testing event-driven microservices benefits from their modularity. They can be tested through unit, integration, and performance testing. Unit testing focuses on individual functions, while integration testing evaluates the entire system. Stateless functions are easier to test, whereas stateful functions require careful handling of state variations.

Topology testing involves testing the entire microservice setup, ensuring that components like mapping and reduction functions work correctly. Tools like Kafka Streams' TopologyTestDriver enable testing without a full event broker setup.

Schema evolution and compatibility testing ensure that new schemas remain compatible with previous versions, often using schema registries and automated tools to check evolutionary rules.

Integration testing can be local or remote. Local testing uses a replica of the production environment, providing control over scenarios like failures and event ordering. This approach allows for testing both event-driven and request-response logic, simulating real-world conditions.

Local integration testing offers control over components like event brokers, schema registries, data stores, and processing frameworks. It enables testing of scenarios such as broker failures, schema changes, and application scaling. These tests ensure that microservices can handle failures, maintain state, and scale effectively.

Overall, managing and testing microservices requires a strategic approach to align technical and business goals, reduce dependencies, and ensure robust, scalable systems. Tools and methodologies discussed provide insights into optimizing microservice architecture and testing for better performance and alignment with business objectives.



Local integration testing for microservices involves two primary methods: embedding testing libraries within the code or creating a local environment for component control. The first method is limited by language and framework compatibility, often requiring a JVM-based setup, like Kafka Streams, where components such as brokers and schema registries are controlled within the same runtime. This approach allows for starting and stopping instances, publishing events, and simulating failures, but is predominantly JVM-centric.

The second method involves installing and configuring necessary systems locally, which can be complex and lead to version discrepancies among team members. A more efficient approach is using a single container with all components installed, allowing for easy testing across different programming languages via a programmatic API. This containerized model supports flexibility and collaboration through an open-source contribution framework.

For testing microservices relying on hosted services, emulators, libraries, or components provided by companies or open-source projects can be used. Google PubSub and Amazon Kinesis have emulators available, while Microsoft’s Event Hubs lacks such options. Local testing libraries for FaaS platforms like Google Cloud Functions and AWS Lambda are available, enabling configuration of a complete local testing environment.

Remote services without local options, like Microsoft Azure’s Event Hub, necessitate provisioning remote environments for testing, which can complicate independent development due to security and management concerns. Coordination with infrastructure teams is crucial to manage these environments effectively.

Full remote integration testing is essential for performance and load testing, aiming to replicate production environments closely. This can be done through temporary environments, shared testing setups, or even production environments, each with its own advantages and challenges. Temporary environments allow for isolated testing but require careful setup and data population. Shared environments offer simplicity but suffer from common resource management issues. Testing in production provides real-world data access but risks affecting live systems and is unsuitable for performance testing.

Populating event streams for testing involves using production data, curated testing sources, or programmatically generated mock events. Each method has its pros and cons, balancing accuracy, overhead, and potential impact on production systems.

In summary, effective microservice testing requires a strategic approach to environment setup, leveraging containers, emulators, and careful coordination with infrastructure to ensure comprehensive and reliable testing outcomes.



In testing event-driven microservices, it is crucial to maintain separation between test and production environments, especially when testing involves long durations. This requires supportive tooling to manage microservices and event streams effectively. The modularity of microservices allows for flexible testing strategies, which can be adapted as requirements evolve. Without adequate tooling, testing often relies on a shared event broker, leading to challenges in data reliability and management. Investing in tooling enables the creation of dedicated testing clusters that can be torn down post-testing, reducing artifacts and allowing for redundancy and disaster recovery.

Event-driven microservices derive input from event streams, which can be populated by copying production data or generating events based on schemas. Testing environments should be collaborative, benefiting from common platforms and programmatic environment setup. A shared testing environment is feasible with low tooling investment, but disposable environments offer better isolation and reduced risks, albeit requiring more investment.

Deploying event-driven microservices becomes complex as the number of services grows, necessitating standardized deployment processes. Key principles include granting teams deployment autonomy, implementing consistent deployment processes, and providing supportive tooling for tasks like resetting consumer group offsets and schema validation. It's crucial to consider the impact of event stream reprocessing and adhere to service-level agreements (SLAs) to minimize disruptions.

Microservices should be independently deployable, avoiding dependencies that require synchronized deployments. Continuous integration, delivery, and deployment systems play a vital role in managing code changes and deployments. Continuous integration automates code integration, while continuous delivery ensures the codebase remains deployable, and continuous deployment automates the deployment process.

Container management systems (CMS) and commodity hardware support microservice deployment, with containers built during CI processes awaiting CMS instructions. The basic full-stop deployment pattern involves committing code, executing tests, validating predeployment conditions, deploying, and running post-deployment tests. Rolling updates allow for service updates without downtime, provided there are no breaking changes.

Breaking schema changes require careful coordination and communication with stakeholders, as they can significantly impact consumers and producers. These changes often reflect fundamental domain shifts and necessitate reprocessing of data streams.

Overall, effective testing and deployment of event-driven microservices depend on robust tooling, standardized processes, and clear communication to manage dependencies and ensure smooth operations.



The text discusses strategies for handling breaking schema changes and deploying event-driven microservices, focusing on migration tactics and deployment patterns.

**Breaking Schema Changes:**

1. **Nonentity Events:** These often don't require reprocessing. Consumers can handle both old and new events until old events expire and can be dropped.

2. **Migration Options:**
   - **Eventual Migration:** Two streams are created for old and new schemas. Producers write to both, and consumers gradually migrate. Risks include indefinite migration and accidental registration to old streams.
   - **Synchronized Migration:** Producers switch to the new schema, ceasing updates to the old stream. Requires significant communication and testing to ensure consumers adapt, minimizing risks of failure without fallback options.

**Blue-Green Deployment Pattern:**

- Aims for zero downtime by running new (blue) and old (green) services in parallel. Traffic is gradually switched to the new service. Monitoring is crucial to detect issues, allowing quick fallback to the old service if needed. Suitable for microservices consuming event streams but not for those producing output streams due to potential data conflicts.

**Deployment and Management:**

- Continuous integration pipelines are essential for testing and validating deployments. Container management systems handle resource allocation and scalability. Deployment patterns vary, with blue-green and rolling updates being common.

**Microservice Architecture:**

- Event-driven microservices offer flexibility and scalability. They decouple data communication from business logic, allowing independent evolution and reducing failure impacts. Key components include event brokers, schema registries, and monitoring systems.

**Schemas and Data Liberation:**

- Strongly typed schemas ensure consistency and facilitate schema evolution, allowing changes without disrupting consumers. Schemas also enable code generation and data discovery, enhancing development efficiency. Data liberation involves moving critical data into event brokers, decoupling production from consumption.

**Microservice Implementation:**

- Align microservices with business domains rather than technical boundaries to avoid coupling unrelated workflows. Not all services need to be "micro"; larger services can evolve into finer-grained ones as infrastructure matures.

**Frameworks and Testing:**

- Lightweight frameworks offer robust out-of-the-box functionality, while heavyweight ones require dedicated resources. Basic producer/consumer models and FaaS provide flexibility but require custom solutions for complex operations. Testing is facilitated by event schemas, enabling comprehensive integration and unit testing.

Overall, the text emphasizes the importance of strategic planning and robust infrastructure to manage schema changes and deploy event-driven microservices effectively.



Event-driven microservices (EDMs) are evolving to handle large, diverse data sets. They involve rethinking data handling, focusing on a robust data communication layer that decouples services, allowing them to focus on business functionality rather than data management. This architecture supports flexibility, enabling organizations to build new services independent of legacy systems.

**Testing and Deployment:**
Simulating conditions like load and failures in a temporary event broker cluster can facilitate production integration testing. This setup allows performance tests and horizontal scaling assessments. The environment is discarded post-testing, ensuring no residual impact. Microservice deployment requires autonomy for rapid deployment and rollback, minimizing bottlenecks. Continuous integration and deployment pipelines are crucial, reducing manual intervention. Deployment must consider service-level agreements (SLAs), state rebuilding, and event stream reconsumption, balancing impacts on downstream consumers and the event broker.

**Data and Communication:**
EDMs emphasize the importance of data communication structures. Data liberation involves capturing and converting data changes into events, ensuring a single source of truth. This process can involve change-data capture (CDC) logs or outbox tables. Event streams serve as durable, immutable logs, supporting long-term storage and serving as the backbone for microservice processes. They facilitate state materialization and provide a single source of truth for all data.

**Frameworks:**
Heavyweight and lightweight frameworks offer different benefits for EDMs. Heavyweight frameworks provide robust state management and recovery capabilities, while lightweight frameworks focus on simplicity and efficiency. Both frameworks support scaling and state handling, crucial for processing large volumes of events.

**Event Processing:**
Deterministic processing is essential, with considerations for late-arriving and out-of-order events. Timestamps, watermarks, and event scheduling play a role in maintaining processing accuracy. Effectively once processing ensures idempotent writes and state consistency.

**Integration:**
Integrating EDMs with existing systems involves data liberation and event processing. This integration can be facilitated by frameworks and tools that support change-data capture and event streaming. Hybrid architectures can combine EDMs with traditional request-response systems, leveraging the strengths of both.

**Design Considerations:**
Designing events involves defining data structures and ensuring schema evolution compatibility. Events should be immutable, with a singular event definition per stream. Metadata tagging and schema notifications aid in managing data contracts and dependencies.

**Conclusion:**
EDMs extend an organization's data capabilities, providing a flexible, decoupled architecture that supports diverse data handling needs. They eliminate access boundaries and reduce complexity, paving the way for scalable, independent service development.



The text covers various aspects of cloud computing, microservices, and event-driven architectures, emphasizing the importance of efficient state management, scalability, and integration. Key components include MapReduce, data liberation, and event stream processing, highlighting the roles of master nodes and state stores in heavyweight frameworks. The text contrasts message brokers with event brokers, underscoring the significance of metadata tagging and schema management for event streams.

Microservices are discussed in terms of their architecture, including microservice-to-team assignments and the impact of microservice tax. Microsoft Azure and its Event Hub are mentioned as significant tools, along with migration strategies and the challenges of schema changes. The text also explores deterministic processing, partitioning strategies, and the orchestration design pattern, detailing workflows, transactions, and the importance of maintaining state consistency.

Stateful and stateless streaming are dissected, with emphasis on effectively-once processing and the role of state stores. The integration of request-response microservices is elaborated, focusing on autonomously generated events and direct-call workflows. The text also addresses testing frameworks, highlighting the importance of schema validation and integration testing, both locally and remotely.

Scalability is a recurring theme, discussing frameworks like FaaS and the management of heavyweight clusters. The orchestration of distributed transactions and the use of sagas are explored, alongside the challenges of refactoring legacy systems. The text also touches on the evolution of schemas, the use of Protobuf for serialization, and the significance of a schema registry.

Supportive tooling for microservices is discussed, including cluster management, consumer offset monitoring, and dependency tracking. The importance of metadata tagging, permissions, and quotas for event streams is emphasized, along with the streamlined creation of microservices.

Finally, the text considers the challenges of integration with third-party APIs, the avoidance of tight coupling, and the orchestration of workflows using patterns like choreography. The role of timestamps and watermarks in deterministic processing is highlighted, as well as the use of triggers for capturing change-data. Overall, the text provides a comprehensive overview of the technical considerations and tools necessary for building and managing event-driven microservices effectively.
