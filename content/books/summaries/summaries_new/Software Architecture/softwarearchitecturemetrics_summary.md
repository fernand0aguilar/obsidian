
**Software Architecture Metrics** is a practical guide focused on using metrics to enhance software architecture quality and maintainability. Authored by leading software architects, including Christian Ciceri, Dave Farley, Neal Ford, and others, the book provides real-world case studies and emphasizes practice over theory. It highlights the importance of metrics in identifying architectural and technical debt early, setting the right KPIs, and measuring outcomes effectively.

Key topics include:

- **Selecting Metrics**: The book guides architects in choosing relevant metrics while avoiding unnecessary ones. It stresses the importance of metrics in tracking architecture goals, improving observability, testability, and deployability, and prioritizing architectural projects.

- **Fitness Functions and Testing**: The concept of fitness functions is used as an analogy for architectural tests and metrics. The book describes a testing pyramid, categorizing tests into different layers to ensure comprehensive coverage and integration.

- **Modularity Maturity Index (MMI)**: This index helps assess technical debt and modularity in software architecture. It evaluates hierarchy and pattern consistency to calculate MMI, providing insights into architectural improvements.

- **Private Builds and Metrics in DevOps**: The transition to DevOps is discussed with a focus on private builds and metrics. It explores key terms like CI/CD and the "ownership shift," emphasizing metrics like time to feedback and trunk stability.

- **Scaling Organizations**: The book discusses the central role of software architecture in scaling organizations, using metrics to guide architectural intentionality and manage expectations.

- **Measurement Approaches**: Various measurement approaches are covered, including runtime application measurement, software analysis, and design analysis. The book also discusses using fitness functions to measure system qualities like performance, scalability, and security.

- **From Metrics to Engineering**: The transition from metrics to engineering is explored, highlighting the operationalization of metrics through automation and case studies on coupling and security checks.

- **Maintainability through Metrics**: The importance of metrics in ensuring software maintainability is discussed, with a focus on avoiding entropy and cyclic dependencies. The book provides tools and strategies for gathering and using metrics effectively.

- **Goal-Question-Metric (GQM) Approach**: This approach is used to measure the unknown by creating GQM trees and prioritizing metrics. A case study demonstrates how a team used this method to foresee and address potential issues.

The book is intended for software architects eager to explore successful case studies and improve decision and measurement effectiveness. It serves as a resource for setting KPIs and teaching new team members, offering diverse examples from various industries to inspire solutions tailored to specific challenges.

Overall, **Software Architecture Metrics** emphasizes the practical application of metrics to improve software architecture, focusing on real-world implementation and the association of metrics with business outcomes.



The text acknowledges various contributors to a book on software architecture, emphasizing the importance of collaboration and support from colleagues, family, and reviewers. It highlights the transformative impact of the book "Accelerate" by Dr. Nicole Forsgren, Jez Humble, and Gene Kim, which introduces four key metrics for improving software delivery performance: deployment frequency, lead time for changes, change failure rate, and time to restore service. These metrics, when used effectively, foster learning and enable teams to enhance software architecture by focusing on qualities like testability, modularity, and observability.

The text outlines the mental model underpinning these metrics, which involves a pipeline of activities starting from code changes and ending with a running service. Deployment frequency measures the number of changes over time, while lead time for changes tracks the time from code completion to deployment. Change failure rate assesses the proportion of changes causing service failures, and time to restore service measures the duration needed to fix failures. Balancing these metrics is crucial for sustainable improvements.

The text discusses adapting the mental model to real-world delivery processes through "mental refactoring." This involves defining metrics based on specific circumstances, considering factors like CI pipelines and service outages. It describes various pipeline models, from simple end-to-end pipelines to complex multistage fan-in pipelines, emphasizing the need to identify instrumentation points for data collection. Commit and deployment timestamps are crucial for calculating the metrics, and complexities arise with multistage or fan-in pipelines, requiring additional data processing to track changes accurately.

Overall, the text emphasizes the value of the four key metrics in driving continuous improvement and achieving a high-quality software architecture. It encourages practitioners to engage with these concepts to foster a community of practice focused on enhancing software delivery performance. The text also underscores the importance of defining metrics within the context of specific organizational processes and ensuring consistent scope across all metrics for accurate measurement and analysis.



The text discusses the use of four key metrics for evaluating software delivery performance: deployment frequency, lead time for changes, change failure rate, and time to restore service. These metrics are designed to provide insights into the efficiency and stability of software development processes.

**Deployment Frequency**: This metric measures the number of successful deployments over a specific period, typically daily. It is important to sum deployments from all pipelines and consider the mean over a longer period, such as 31 days, to avoid fluctuations.

**Lead Time for Changes**: This refers to the elapsed time from the start of a change to its deployment. It's essential to calculate the mean over a period (e.g., 31 days) to reflect the general state, avoiding outliers.

**Change Failure Rate**: This is the proportion of deployments that result in failures, calculated as the number of resolved change failure tickets divided by total deployments. The focus is on resolved failures for consistency across metrics.

**Time to Restore Service**: This metric tracks the time taken to resolve a service failure from ticket creation to closure. It can be reported as a mean or median over a longer period, such as 120 days, to capture trends.

The text emphasizes the importance of capturing accurate data, avoiding gaming the metrics, and ensuring transparency in data collection and calculation. Manual data collection is acceptable initially, but automation is recommended as the process matures. Visualization through dashboards (e.g., using PowerBI) is crucial for understanding and improving these metrics.

The audience for these metrics includes software delivery teams, who need easy access to the data to drive improvements. Secondary audiences, like senior management, should have read-only access to summarized metrics.

The text also highlights the need for transparency in metric definitions and calculations, encouraging teams to engage with the data. Sharing raw data and calculations fosters understanding and engagement, helping to drive improvements in software delivery performance.

Overall, the four key metrics provide a structured approach to evaluating and improving software delivery processes, with a focus on transparency, accuracy, and continuous improvement.



The text discusses the implementation and benefits of using four key metrics in software development, emphasizing their role in driving change and improving software delivery. These metrics, accessible through PowerBI dashboards, allow teams to understand, discuss, and enhance their software by viewing real-time data and trends. This approach fosters a shift from individual responsibility to team ownership, enabling teams to modernize processes, improve quality, and restructure team dynamics. The metrics reveal architectural issues, prompting solutions that lead to more testable, decoupled, and fault-tolerant systems.

The concept of fitness functions, borrowed from evolutionary computing, is introduced as a method to define and improve software system metrics. Fitness functions are flexible and can be tailored to specific contexts, integrating metrics like code coverage or cyclomatic complexity. They help prioritize and balance metrics, providing a clear definition of "good" and guiding architectural tests. These tests, often automated, measure progress and verify that metrics meet predefined thresholds.

Fitness functions can be categorized into dimensions such as atomic vs. holistic feedback, triggers for test execution, test environments, metric types, and whether tests are automated or manual. These categories help developers define meaningful fitness functions and metrics, ensuring they provide valuable feedback and guide system improvements. By using these functions, teams can achieve better system performance and reliability, aligning with architectural goals.

Overall, the text highlights the importance of metrics and fitness functions in fostering team-driven improvements and enhancing system architecture through measurable and targeted testing strategies.



In software architecture, quality attributes are crucial alongside functional requirements and constraints. Quality goals define how well a system should perform, encompassing aspects such as adaptability and integration. ISO 25010 outlines eight main quality attributes: functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability, and portability, each with subattributes.

Quality attributes guide the development of fitness functions and metrics, which assess software performance. Fitness functions can be temporary or permanent and static or dynamic, tailored to specific contexts and audiences. They can be applied to entire systems or specific components, depending on the scope and technological requirements.

The testing pyramid is a framework that organizes automated tests into three layers: unit tests at the base, integration tests in the middle, and end-to-end (E2E) tests at the top. Unit tests are fast and easy to maintain, while E2E tests, though more costly and complex, provide comprehensive feedback. Balancing the number of tests across these layers ensures optimal confidence in the system's functionality.

The fitness function testing pyramid mirrors the functional testing pyramid, emphasizing balance in architectural tests. It categorizes tests by feedback breadth (atomic vs. holistic) and execution trigger (triggered vs. continuous). The top layer focuses on holistic tests that provide sophisticated feedback but are complex and costly. The middle layer includes triggered holistic or continuous atomic tests, offering broad system feedback. The bottom layer consists of triggered atomic tests, which are simple and cost-effective.

Fitness functions are integral to maintaining system health, with categories influencing their placement in the pyramid. Top-layer tests, like chaos engineering, simulate real-world conditions to evaluate system resilience. Middle-layer tests provide feedback through integration tests or continuous monitoring. Bottom-layer tests focus on metrics like code coverage and performance.

Examples illustrate these concepts: unit test coverage is a triggered atomic fitness function in the pyramid's base layer, aimed at maintainability. Integration test coverage shares similar categorization. Tests for network latency, depending on their scope, could be classified as atomic or holistic, reflecting their impact on system performance.

In conclusion, defining and balancing fitness functions and tests based on quality attributes and system needs is essential for effective software architecture. The testing pyramid provides a structured approach to achieve this balance, ensuring robust and reliable software systems.



The text discusses fitness functions and their role in assessing software architecture, focusing on reliability and performance. Fitness functions are categorized based on feedback breadth, execution triggers, metric types, automation, quality requirements, and whether they are static or dynamic. They are used to ensure system reliability, even when interfacing with slow third-party systems. The text provides examples of fitness functions in online shopping, measuring revenue per minute and system reliability during deployments.

The fitness function testing pyramid is introduced, which helps classify tests and metrics. The pyramid's layers guide the development of fitness functions, starting with simple tests and iterating for improvements. The text emphasizes the importance of aligning fitness functions with quality goals agreed upon by stakeholders. It suggests starting with relevant tests, prioritizing important functions, and automating tests to maintain focus on system goals.

The text also covers evolutionary architecture, highlighting the need for adaptability in software design. Key attributes include modularity, cohesion, separation of concerns, abstraction, and managing coupling. These attributes facilitate easier changes and testing, supporting sustainable development. The importance of automated testing is stressed, as it ensures system functionality and allows for safe modifications.

Overall, the text provides a framework for developing and maintaining fitness functions and metrics, ensuring software systems meet quality goals and remain adaptable to changing demands.



Testability and deployability are crucial for creating high-quality, adaptable software systems. Testability involves designing systems that are modular, cohesive, loosely coupled, and abstracted, allowing for easy evaluation of system behaviors. This design approach ensures that tests are decoupled from the code, permitting changes without requiring test modifications. By integrating testability into the architecture, developers can enhance system quality and flexibility, enabling easier modifications over time.

Deployability, particularly through continuous delivery, ensures software is always in a releasable state using deployment pipelines. These pipelines automate the release process, providing a definitive evaluation of the software's readiness. The scope of a deployment pipeline should cover an independently deployable unit, ensuring deterministic behavior and consistent test results. This approach aligns with an evolutionary architecture strategy, focusing on adaptability and avoiding overengineering based on uncertain future needs.

Technical debt, a concept introduced by Ward Cunningham, arises from suboptimal technical decisions, leading to increased maintenance costs. It can be categorized into implementation debt, identifiable through code smells, and design and architecture debt, which involves complex dependencies and inconsistent designs. Addressing technical debt involves regular architecture reviews and refactoring to maintain low maintenance costs and prevent architectural erosion.

The Modularity Maturity Index (MMI) is a tool for assessing technical debt in software systems. It evaluates modularity, hierarchy, and pattern consistency, aligning with cognitive mechanisms that help manage complexity. Modular systems with coherent, meaningful units have lower technical debt. Assessing modularity involves examining cohesion, coupling, naming clarity, and balanced proportions of program units.

Overall, focusing on testability, deployability, and managing technical debt through the MMI can significantly improve software architecture, ensuring systems remain maintainable and adaptable over time.



The Modularity Maturity Index (MMI) is a framework designed to evaluate the modularity, hierarchy, and pattern consistency of software architecture. It emphasizes the importance of hierarchical structures, which align with human cognitive mechanisms, facilitating easier understanding and navigation of complex systems. Hierarchies in programming are often formed through contain-being relationships, such as classes within packages, and packages within projects. However, use and inherit relationships can create non-hierarchical, intertwined structures, leading to issues like class and package cycles.

Class cycles, such as a cycle involving 242 classes, can significantly complicate system architecture. Breaking down these cycles is crucial, although it's preferable to prevent them from forming initially. Architectural cycles, identified through upward relationships between layers, can lead to violations that should be resolved promptly. Tools and metrics can measure cycles at all levels, allowing for precise hierarchy checks.

Pattern consistency is another critical aspect, leveraging schemas to structure complex relationships. Design patterns, when consistently applied, aid in managing source code complexity. They create hierarchical structures that are easier to understand and maintain. Consistency in pattern application is vital, as it helps developers quickly grasp and work with familiar structures.

The MMI is calculated using various criteria across three main principles: modularity, hierarchy, and pattern consistency. Modularity has the strongest influence, accounting for 45% of the MMI, as it underpins the other principles. The MMI uses metrics tools and architecture analysis tools to assess criteria such as domain and technical modularization, internal interfaces, and proportions. Hierarchy is evaluated by examining technical and domain layering, as well as class and package cycles. Pattern consistency is assessed through the allocation of source code to patterns and the relationships within these patterns.

The MMI score, ranging from 0 to 10, indicates the level of technical debt in a system. A score above 8 suggests low technical debt, while scores between 4 and 8 indicate a need for refactoring. Scores below 4 may necessitate system replacement. Architecture reviews, often involving workshops with developers, help identify technical debt and potential refactorings. These reviews compare the actual architecture with the target architecture, revealing deviations and opportunities for improvement.

In summary, the MMI provides a structured approach to assessing software architecture, guiding decisions on refactoring and system maintenance. It emphasizes the importance of modularity, hierarchy, and pattern consistency in reducing technical debt and enhancing system quality. By regularly evaluating and addressing architectural issues, systems can be maintained efficiently, ensuring long-term stability and performance.



This chapter emphasizes the importance of practices and metrics to navigate DevOps transitions effectively. It highlights common challenges such as disconnects between DevOps and QA, unproductive feedback loops, overreliance on automation, and loss of ownership over validations. The chapter advocates for using private builds and metrics to address these issues.

**Key Concepts:**

- **Agile and Automation:** Agile methodologies, especially eXtreme Programming (XP), focus on automating repetitive tasks to improve efficiency. Martin Fowler suggests that tasks that are time-consuming should be automated to facilitate continuous feedback and practice.

- **CI/CD:** Continuous Integration (CI) involves frequent integration of code changes, verified by automated builds to detect errors early. Continuous Delivery (CD) extends this by ensuring software is always in a deliverable state, involving all stakeholders.

- **DevOps Culture:** DevOps integrates development and operations teams, promoting collaboration and reducing silos. It requires shared tools, consistent processes, and a culture of mutual understanding and responsibility across teams.

- **Ownership Shift:** Ideally, teams should own their pipelines, but often DevOps becomes a separate automation team, creating silos and inefficiencies. This "ownership shift" can lead to a disconnect between development and operations.

- **Empowering Local Environments:** Validation should occur in local environments where changes are introduced. This reduces the risk of introducing errors into the main codebase.

- **Private Builds:** As described by Paul M. Duvall and others, private builds are local integrations that prevent broken builds from reaching the mainline. They are crucial for maintaining code stability but can be challenging due to platform-specific issues.

**Case Study: The Unstable Trunk:**

- **Company A's Challenges:** A multidisciplinary team faces frequent software breakages. The QA team reports inefficiencies in testing and fixing bugs. A root-cause analysis identifies several bugs, categorized by their components and avoidability.

- **Bug A1:** A frontend bug due to outdated backend API testing. The solution involves training team members to manage backend environments locally.

- **Bug A2:** Lack of automated API contract tests in the backend. The backend team promises to run shared manual test cases to ensure API stability.

- **Bug A3:** Issues with unstable test data. The DBA sets up a local environment and runs manual tests to catch data incompatibilities early.

- **Bug A4:** Improved stability with manual private builds, allowing QA to focus on functional testing. The team works with DevOps to enhance deployment time.

The chapter concludes that private builds and local validation are integral to maintaining a stable development process and overcoming the challenges of DevOps transitions.



In software development, maintaining a stable trunk and efficient feedback cycle is crucial for quality and productivity. Local environments empower QA teams to proactively identify and resolve issues before code merges, reducing trunk instability. Running private builds locally ensures that code does not destabilize the main branch, allowing for early detection of integration issues.

Case studies highlight the challenges of unstable testing environments and the importance of local validation. In one scenario, a consultancy faced deployment issues due to unstable automations. By focusing on local environments and manual API testing, they regained control, leading to faster fixes and better automation efforts. Building fake replicas of unreliable external services further improved testing reliability.

Metrics play a vital role in assessing development flow. Key metrics include:

- **Time to Feedback**: Measures the effort required to receive feedback on new features. A long feedback cycle indicates process issues.
- **Evitable Integration Issues**: Quantifies avoidable issues per iteration, highlighting the maturity of the process.
- **Time Spent Restoring Trunk Stability**: Directly measures the effort to maintain a stable codebase.

These metrics help identify inefficiencies and guide improvements. High Time to Feedback and Evitable Integration Issues often suggest a need for better local validations. Conversely, low Evitable Integration Issues with high trunk stability may indicate bureaucratic delays.

Private builds are essential in maintaining trunk stability and minimizing integration bugs. They shift responsibility for quality back to development teams, encouraging disciplined practices and automation. Although they may initially seem to slow productivity, private builds ultimately reduce the costs associated with trunk stabilization and QA inefficiencies.

In conclusion, empowering local environments and focusing on private builds enhance software quality and delivery speed. Metrics guide teams in identifying weak spots and making informed improvements. This approach ensures a more efficient development process, even when full automation is not yet integrated.



Anna, a senior software engineer at YourFinFreedom, a fintech scale-up, seeks to improve software architecture by connecting it with metrics. The company aims to leverage the EU's PSD2 legislation to expand its services across Europe but faces issues with service availability and scalability. Keisha, head of Product Engineering, initiates a shift from a monolithic to a microservices architecture to enhance speed and quality. However, Anna notices that the new architecture doesn't align with business needs, leading to market opportunities being missed.

The transition to microservices introduces challenges, such as accidental complexity and a "distributed big ball of mud," where the architecture becomes overcomplicated and difficult to manage. This complexity affects maintainability and slows feature delivery. Anna highlights issues like release orchestration difficulties, overlapping functionalities, shifting priorities, and low team morale. She proposes implementing metrics and clear architectural boundaries to guide development and align with the company's expansion goals.

Anna is promoted to Solutions Architect, tasked with steering architectural efforts and promoting coherence. She engages with various departments to understand their challenges, aligning software architecture with the company's mission and KPIs, such as Monthly Active Users (MAU). She recognizes the importance of intentional architectural decisions and explores EventStorming, a collaborative workshop format, to map business processes and identify misalignments in the current architecture.

Through EventStorming, Anna and her team visualize business processes, identify emergent domains, and map existing software components. This reveals mismatches between processes and implementation, contributing to high cognitive load for teams. By aligning software architecture with business operations and KPIs, they aim to reduce complexity and improve efficiency. The workshop fosters cross-departmental understanding, enabling better decision-making and architectural alignment.

The EventStorming process also uncovers insights into business operations and software constraints, facilitating discussions on KPI relevance and potential improvements. Anna's efforts highlight the need for software architecture to be intentional, driven by clear metrics, and aligned with organizational goals, ultimately supporting YourFinFreedom's growth and service delivery.



Anna's efforts to enhance software architecture intentionality at YourFinFreedom are driven by a need to align organizational goals with software development. This alignment is achieved through workshops and techniques like Process Modeling EventStorming, which help visualize operational value streams, identify hotspots, and clarify KPIs. By mapping these processes, Anna and her team can address mismatches between software architecture and business objectives, ensuring that the architecture supports key performance indicators (KPIs) and organizational goals.

The workshops reveal discrepancies in KPI definitions, prompting Anna to harmonize these definitions, which in turn aligns business operations with product engineering. This alignment fosters a shared understanding of how YourFinFreedom delivers value to its customers and generates revenue. Anna's approach emphasizes the importance of understanding business models and ensuring that software architecture facilitates value creation.

Anna leads a domain decomposition exercise to break down the Travel Insurance domain's goals into measurable metrics. This process clarifies the interconnections between workstreams and informs the improvement of software architecture. The use of metrics as fitness functions allows for an objective assessment of architectural characteristics, guiding decisions to enhance the architecture's effectiveness.

The team plans experiments to explore the feasibility of creating a self-contained travel insurance policy service, aiming to reduce dependencies on a central customer information service. They hypothesize that this will increase deployment frequency and decrease change fail rates, thereby improving software architecture autonomy.

Anna utilizes a KPI Value Tree to visualize the relationship between organizational KPIs, domain KPIs, and supporting metrics. This tool provides a comprehensive overview of the company's mission and product engineering initiatives. The KPI Value Tree highlights the importance of evolving metrics and KPIs as business conditions change, ensuring they remain relevant and effective.

Anna's story underscores the importance of intentionality in software architecture, guided by metrics and informed by business needs. This approach requires continuous dialogue and adaptation, particularly as organizations scale and face evolving technological and market challenges. By fostering a culture of open communication and collaboration, Anna ensures that software architecture decisions are data-driven and aligned with the company's strategic objectives.

Managing expectations is crucial, and Anna communicates the impact of architectural changes on the product engineering team's capacity to deliver features. By clearly articulating the anticipated outcomes and their alignment with YourFinFreedom's goals, Anna gains stakeholder support and commitment to the architectural improvements. This transparency and alignment with organizational goals position YourFinFreedom as a competitive player in the European market.



Anna's initiative in the Travel Insurance domain at YourFinFreedom illustrates the effective use of experiments and metrics to redefine software architecture boundaries. The product engineering team successfully ran experiments, improving KPIs and reducing reliance on release orchestration. This approach was extended to other domains, aiming to create a software architecture with clear boundaries.

The domain's leaders recognized the need for new metrics to accommodate business growth, shifting from "Decrease the time to find a match for the insurance quote request" to "Increase the first accepted travel insurance quote." Anna and her team introduced a decision-support system to streamline the quoting process, saving time for insurance analysts.

Anna's story highlights the importance of maintaining a well-structured KPI Value Tree, as evolving business forces necessitate architectural changes. The software architecture's evolution should be guided by relevant metrics, enabling intentional changes and fostering innovation while maintaining stability where needed.

In another example, a technical team lead in an ecommerce organization improved restocking processes by refining metrics, reducing API errors, and enhancing system efficiency. This underscores the importance of aligning metrics with domain goals and constraints, leading to long-term system improvements.

Anna identified three patterns across domains: misaligned software architecture and domain boundaries, incorrect domain boundaries causing complexity, and high cognitive load on teams managing cross-domain components. She proposed breaking down central services and rethinking ownership to alleviate these issues, demonstrating the impact of aligning architecture with organizational goals.

The narrative emphasizes the role of metrics in guiding software architecture evolution, supporting organizational strategy, and influencing both technical and social aspects. A new generation of software architects is needed, equipped with skills to address sociotechnical challenges by understanding group dynamics and business strategy.

Measurement in software architecture is crucial for making informed decisions. Continuous measurement throughout the delivery lifecycle helps prioritize tasks and evaluate architectural decisions. Different types of measurements—external/internal and artifact/operational—provide varied insights, guiding architecture activities and maximizing their value.

By integrating measurement into the architecture cycle, teams can continuously assess and adapt their systems, ensuring alignment with stakeholder needs and business objectives. This approach fosters an evolving architecture that supports organizational growth and innovation.



In the context of software architecture, measurement plays a crucial role in assessing system performance and predicting potential issues. Different types of measurements are relevant at various stages of the delivery lifecycle, and over time, all types will be utilized. Cindy Sridharan identifies three main measurement mechanisms: logs, traces, and metrics. Logs provide timestamped event records, traces capture end-to-end cross-component scenarios, and metrics offer numerical measurements of system characteristics over time. While infrastructure measurements are relatively straightforward due to sophisticated collection systems, application-specific measurements require more effort but provide insights into business-relevant characteristics.

Static code analysis is effective for identifying common programming mistakes and structural characteristics, aiding in assessing maintainability and extensibility. However, it is limited in evaluating architectural qualities like security, where it serves as a proxy measurement. Design analysis, on the other hand, offers predictive measurements before implementation, allowing for insights into compliance and scalability without relying on outdated design documents.

Models and estimates guide architecture work early in the delivery cycle, using previous experience and benchmarks to create mathematical models that predict scalability and performance. However, these models are challenging to validate until the system is operational. Fitness functions, as proposed by Neil Ford, Rebecca Parsons, and Patrick Kua, utilize measurements to monitor system quality attributes, ensuring they remain within acceptable ranges.

When measuring system qualities like performance and scalability, specific considerations are necessary. Performance is measured by latency and throughput, with response time as the key indicator. Scalability assesses how workload capacity varies with resources, ideally scaling linearly. Common challenges include creating realistic test environments and dealing with unpredictable bottlenecks.

Availability is measured by mean time between failures (MTBF) and mean time to recover (MTTR), with MTTR often being more critical. Recovery point objective (RPO) and recovery time objective (RTO) are also important, defining acceptable data loss and recovery time after failures. These metrics can be modeled and tested during development and refined with real measurements post-implementation.

Overall, effective measurement strategies are essential for maintaining system performance, scalability, and availability, while also providing insights for architectural improvements.



Estimating Mean Time Between Failures (MTBF) in software systems is challenging. Reliability models are not very effective, and real failures provide the only concrete data, which is undesirable. To address this, failure data from similar systems can be used as proxies until sufficient data is collected. Metrics such as Mean Time to Repair (MTTR), Recovery Point Objective (RPO), and Recovery Time Objective (RTO) should be considered collectively to understand system reliability.

The concept of "nines" in availability metrics (e.g., 99.99%) is often misleading, as it does not account for the mode and timing of failures. Instead, understanding business needs and failure scenarios is crucial for estimating and measuring critical availability metrics.

Security is a complex quality that is difficult to measure. Proxy measurements like static code analysis, dynamic analysis, and infrastructure scanning can provide insights into potential vulnerabilities. These should be weighted by risk, considering both likelihood and impact, to measure security effectively. Consistency in test environments and avoiding false positives are important considerations.

Incorporating measurement into the delivery cycle is essential for guiding software architecture work. Starting small, measuring what matters, acting on insights, and making measurements visible and continuous are vital strategies. Early measurement allows for better integration into the system's lifecycle.

A hypothetical case study of a "citizen engagement platform" illustrates the practical application of measurement. Initial measurements, such as database size estimation and code complexity, guide early design decisions. Security is monitored through static analysis, while availability and performance are measured with response time metrics. These measurements help in maintaining system quality and guiding architectural focus.

Common pitfalls in measurement include focusing on mechanisms rather than useful measurements, choosing easy-to-measure metrics over important ones, and neglecting business-related measurements. It is crucial to prioritize actions based on measurement insights and avoid excessive measurement that leads to data overload.

Overall, measurement is a crucial component of software architecture, enabling the assessment of system quality attributes and guiding architectural decisions. It helps prioritize work and make informed choices, ensuring the effectiveness of architectural efforts.



Understanding and measuring quality attributes in software architecture is crucial for ensuring systems meet their requirements. Quality attributes, such as performance, scalability, and availability, must be clearly defined and measured using appropriate mechanisms. These measurements feed into a continuous architecture cycle, allowing for comparison with requirements and highlighting areas needing architectural attention. This approach helps explain the value of architectural work and ensures focus on the most beneficial tasks.

Metrics in software architecture serve as the basis for engineering practices, similar to how mathematics underpins physical engineering. While software engineering is not as advanced as physical engineering, the conversion of metrics into engineering practices is evolving. This involves using architecture fitness functions, which provide objective evaluation criteria for architecture characteristics. These characteristics, also known as nonfunctional requirements, include performance, scalability, and reliability. Fitness functions unify validation processes, which were previously ad hoc, under a single framework.

Architecture fitness functions require objective measurement of architectural characteristics. Some characteristics are composite and need further decomposition for measurement. Fitness functions encompass various tools and mechanisms, such as testing libraries, performance monitors, and chaos engineering, to implement validation. Automation is key to transforming these practices into engineering, ensuring continuous validation and governance.

The evolution of software engineering practices, such as continuous integration, illustrates the power of automation. Continuous integration reduces merge conflicts and optimizes engineering processes, demonstrating the benefits of automation in software development. Similarly, automated fitness functions operationalize metrics, allowing architects to prevent issues like component cycles without manual intervention.

Case studies highlight the application of fitness functions. For instance, ArchUnit can validate layered architecture by testing for undesirable coupling. However, for distributed architectures like microservices, architects may need to create custom fitness functions to ensure proper communication patterns. An example is validating orchestrator communication in microservices, which involves checking service call logs to ensure compliance with architectural rules.

Another case study involves using fitness functions for security checks, such as monitoring for vulnerabilities like the Equifax breach caused by an unpatched Apache Struts framework. Fitness functions can be adapted to address a wide range of concerns, from low-level code evaluations to high-level organizational needs, demonstrating their versatility in maintaining architectural integrity and security.



The text discusses the importance of deployment pipelines and fitness functions in software architecture, particularly in the context of security and maintainability. It uses the Equifax data breach as a case study to illustrate the necessity of automated governance and deployment pipelines. These pipelines can be configured to awaken for any ecosystem changes, enabling universal automation of governance tasks. Fitness functions, which are often code, allow architects to maintain coding skills while providing an executable specification of architecture that can be validated anytime.

The GitHub case study highlights the use of continuous deployment and the Scientist tool to safely experiment within architecture. Scientist allows teams to test new code against old code without exposing users to bugs. The tool uses a "use" and "try" clause system to compare the old and new code, ensuring fidelity and performance improvements. This approach underscores the synergy between engineering practices and metrics, enhancing software development.

The text also emphasizes the role of metrics in maintaining software quality. Metrics-based feedback loops help define and achieve quantifiable goals, improving maintainability and productivity. Structural erosion, or entropy, is a significant challenge in software development, leading to tightly coupled systems known as "big balls of mud." Metrics can measure and mitigate entropy, preventing large cycle groups and maintaining architectural cohesion.

Cyclic dependencies, which hinder testing and modularization, can be managed using metrics. Techniques like the dependency inversion principle can break cycles, improving code quality. By setting thresholds for cycle group sizes, developers can receive warnings and take corrective actions before issues become unmanageable.

Overall, the integration of metrics and engineering practices enables better governance and maintainability, transforming software development into a more disciplined engineering practice.



The text discusses the importance of using software metrics to maintain code quality and prevent structural erosion, particularly in large-scale projects. It emphasizes the necessity of tools to automate the collection and analysis of these metrics, highlighting Sonargraph-Explorer as a free tool for Java, C#, and Python that helps manage cyclic dependencies. Despite the benefits, metrics are underutilized due to a lack of awareness, insufficient tools for non-mainstream languages, and the complexity of effectively applying them.

Key metrics include:

1. **Average Component Dependency (ACD)**: Measures the average number of elements a component depends on, indicating system coupling. ACD is calculated by dividing the Cumulative Component Dependency (CCD) by the number of components. High ACD values suggest tight coupling, which can be detrimental in large systems.

2. **Propagation Cost (PC)**: Reflects how changes in one part of the system may affect others. Calculated by normalizing ACD, high PC values indicate significant coupling and potential maintenance challenges.

3. **Cyclicity and Relative Cyclicity**: These metrics assess cyclic dependencies within a system. The size of the largest cycle group should ideally be minimal, and Relative Cyclicity helps quantify the extent of cyclic dependencies. Smaller cycle groups are preferable as they are easier to manage.

4. **Structural Debt Index (SDI)**: Evaluates the effort required to break cyclic dependencies. It considers the number of links to cut and their weights, providing a measure proportional to the work needed to resolve cycles. Tools like Sonargraph-Architect can use SDI to prioritize fixing cycles.

The text also outlines challenges in adopting metrics, such as the need for context, expertise, and automation to ensure metric violations trigger corrective actions. It suggests a balanced approach, using a limited number of metrics-based rules to avoid overwhelming developers and ensuring improvements in code quality.

For effective metric utilization, automation in build processes is crucial. Popular tools include Understand, NDepend, Source Monitor, SonarQube, and Sonargraph-Explorer, each offering various capabilities for different programming languages. The choice of tool should consider the ability to automate metric threshold checks in builds.

In summary, while metrics offer significant advantages for maintaining software quality, their adoption is hindered by a lack of awareness, complexity, and the need for specialized tools. By focusing on key metrics like ACD, PC, and SDI, and leveraging automation, organizations can better manage technical debt and maintain code integrity. 



The text discusses software maintainability and introduces a new metric to measure it effectively. The metric was developed in collaboration with a customer, aiming to reflect the developer's judgment of software maintainability. It serves as an indicator for refactoring needs and helps compare the health of different systems within an organization.

A key aspect of good software design is verticalization, which involves organizing functional components into silos to avoid cyclic dependencies. This structure enhances maintainability by ensuring clear hierarchy and reducing the risk of changes affecting unrelated parts of the system. The text highlights the importance of managing dependencies, especially in microservices, where interprocess communication can introduce latency and error handling challenges.

To measure verticalization, a levelized dependency graph is created, condensing cyclic groups into single nodes. The Maintainability Level (ML) metric is calculated by assessing the influence of each node on higher levels. A penalty is applied for cycle groups with more than five nodes to account for their negative impact on maintainability. The ML metric is adjusted for small systems and package/namespace dependencies to provide a more accurate reflection of maintainability.

The text also explores metrics for measuring code size and complexity. Lines of Code (LoC) and Number of Statements are basic size metrics, while Cyclomatic Complexity evaluates the number of execution paths in code, serving as a proxy for complexity. Indentation levels are used to spot complex code, and thresholds are recommended to maintain readability and manageability.

Change history metrics, such as Change Frequency, Code Churn, and Number of Authors, are derived from version-control systems. These metrics identify code hotspots that may benefit from refactoring by highlighting files with frequent changes, high churn rates, or knowledge monopolies. By addressing these areas, structural erosion can be mitigated, reducing the likelihood of changes causing unintended issues in the software.

Overall, the text emphasizes the importance of using software metrics to ensure maintainability, guide refactoring efforts, and improve the overall design and structure of software systems. Tools like Sonargraph are mentioned as useful for computing these metrics and assessing code quality.



The text discusses the use of innovative visualizations and metrics to improve software maintainability and architecture. One visualization method, the "software city," represents source files as buildings, using dimensions like height, color, and footprint to convey metrics such as complexity, change frequency, and file size. This allows for easy identification of refactoring candidates, such as files with frequent changes or high complexity.

Key metrics include Component Rank, based on Google's Page Rank, to identify "popular" classes in a system by analyzing dependencies. This is useful for newcomers to understand crucial parts of a codebase. Another metric, LCOM4 (Lack of Cohesion of Methods), helps identify classes that violate the single-responsibility principle by examining method and field dependencies.

Architectural fitness functions assess characteristics like stability, scalability, and maintainability, helping architects make trade-offs between conflicting goals like performance and security. Prioritizing characteristics and using metrics like Maintainability Level and Structural Debt Index can guide improvements.

Tracking metrics over time, using tools like SonarQube or Jenkins with Sonargraph, helps detect harmful trends early. Automated builds can gather daily metrics, allowing teams to visualize trends and set thresholds to maintain code quality.

Golden rules for maintainable software include enforcing architectural models, avoiding circular dependencies, limiting source file size and complexity, and preventing code duplication. A rule-based approach implemented in CI builds can significantly improve maintainability and productivity.

The Goal-Question-Metric (GQM) approach helps define metrics for complex problems by establishing goals, asking operational questions, and selecting appropriate metrics. This method ensures that metrics are aligned with objectives, providing traceability from data collection to goal achievement. GQM encourages teams to focus on why they measure, fostering better decision-making and trust in the metrics used.

Overall, the text emphasizes the importance of using visualizations, metrics, and structured approaches like GQM to maintain software quality and guide architectural decisions effectively.



The Goal-Question-Metric (GQM) approach is a structured method for improving system reliability by defining goals, formulating questions, and identifying metrics to address those questions. This method involves creating a GQM tree to visualize the relationships between goals, questions, and metrics. The process includes defining clear metrics, prioritizing them based on their signal strength and cost-effectiveness, and devising a data collection strategy.

Metrics can be in various forms, such as rubrics, Boolean values, or complex equations, and may answer multiple questions. It's crucial to prune the GQM tree to focus on key metrics that provide strong signals and are inexpensive to compute. Data collection should be planned carefully, considering sources like code instrumentation, surveys, or static-analysis tools. A concrete plan should be developed for data collection and metric computation, shared with the team, and implemented.

A case study illustrates the practical application of GQM. A development team faced two service disruptions due to API rate limits imposed by a third-party service, Foo Service. During the first incident, a bug caused excessive API requests, leading to a system outage. The team used GQM to identify metrics that could have predicted the problem early. They improved operational visibility by introducing a heartbeat component to monitor the Foo Service and clarified architectural responsibilities to handle failures.

Nine months later, a similar outage occurred, but the team was prepared with alerts and diagnostic APIs. They quickly identified the issue as external and informed users before any impact was felt. The system self-corrected once the Foo Service was restored. This proactive approach transformed a potential major outage into a minor inconvenience.

The GQM approach not only helped address immediate issues but also exposed architectural weaknesses, leading to better system design and operational strategies. Running a GQM workshop can build consensus among stakeholders and improve confidence in metrics and data collection plans. It involves defining a goal, formulating questions, and prioritizing metrics, with input from both technical and nontechnical participants. By the end of the workshop, participants should agree on the goal, questions, and metrics, and understand the data needed to compute them.



The Goal-Question-Metric (GQM) approach provides a structured method for defining and analyzing metrics to assess project goals. The process begins with a workshop where participants collaboratively establish a goal statement and brainstorm questions necessary to evaluate the goal. Metrics are then identified to answer these questions, with an emphasis on creativity and breadth. Following this, a sanity check ensures that the metrics align with the goal, potentially refining the goal or identifying new ones. Data requirements for each metric are determined, and metrics are prioritized based on factors like necessity or impact.

Facilitation of a GQM workshop involves using tools like sticky notes for brainstorming and encouraging out-of-the-box thinking. Participants are advised to focus on identifying metrics without initially worrying about data collection. Reusing metrics and data is encouraged, especially for system-focused questions where architecture knowledge is crucial. Documenting the GQM tree visually can aid in sharing insights.

The GQM approach is valuable in contexts where understanding is limited, as it helps navigate complex measurement challenges. It is particularly useful for software architects involved in strategic planning, product launches, quality assessments, and technical debt management. GQM aids in aligning stakeholders and guiding discussions on measurement and data collection.

In the context of software architecture, metrics play a crucial role in governance and maintaining system quality. Key metrics include change failure rate, deployment frequency, lead time for changes, and time to restore service. These metrics, often automated through tools like Google’s Four Keys project, provide transparency and facilitate continuous integration and delivery practices.

Metrics are context-dependent and should guide communication and expectation management. They help identify areas for improvement, track progress over time, and ensure alignment with quality attributes and operational goals. The GQM approach, combined with effective facilitation and prioritization, enables teams to measure what matters most, even in areas of uncertainty.

In summary, the GQM approach is an essential tool for defining, analyzing, and prioritizing metrics in software development. It supports strategic decision-making, fosters alignment among stakeholders, and enhances the understanding and management of complex systems.



The text discusses various aspects of software architecture metrics, focusing on measurement, modularity, and technical debt. Key metrics like the Component Rank, LCOM 4, and Maintainability Level are explored alongside the importance of tracking these metrics over time to avoid structural erosion. The text emphasizes the significance of modularity, assessed through the Modularity Maturity Index (MMI), which helps in evaluating and managing technical debt. This involves reviewing architecture, calculating MMI, and maintaining pattern consistency to prevent cyclic dependencies and enhance testability.

The text also covers the transition from monolithic to microservices architectures, highlighting the challenges of distributed systems, such as the "big ball of mud" phenomenon. Metrics for distributed architecture are essential for managing these challenges, ensuring scalability, and maintaining service stability. The role of continuous integration and deployment pipelines in DevOps is underscored, with a focus on automation and minimizing trunk instability.

Software architecture metrics are context-dependent, and their implementation can guide the evolution of software systems. The goal-question-metric approach is suggested as a method for aligning metrics with business objectives. The integration of fitness functions into architecture is discussed, allowing for the measurement of nonfunctional qualities like security, performance, and scalability. Tools like SonarQube, Sonargraph, and Thoughtworks Metrik are mentioned for supporting these metrics.

The text stresses the importance of runtime measurement and operational metrics, such as mean time between failures (MTBF) and mean time to recover (MTTR), in assessing system quality attributes. Continuous architecture and the importance of learning and adapting to evolving metrics are highlighted, with case studies illustrating practical applications.

Key figures in the field, such as Robert C. Martin and Thomas J. McCabe, are referenced, alongside contributions from authors like Christian Ciceri and Dave Farley. The text concludes with insights into the role of software architects in creating scalable and predictable ecosystems, emphasizing the need for a deep understanding of both technical and organizational aspects to ensure successful software development.
