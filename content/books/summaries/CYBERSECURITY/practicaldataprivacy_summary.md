
# Practical Data Privacy: Enhancing Privacy and Security in Data

**Author**: Katharine Jarmul  
**Foreword by**: Dr. Nakeema Damali Stefflbauer  
**Publisher**: O’Reilly Media  
**ISBN**: 978-1-098-12946-0

## Overview

"Practical Data Privacy" by Katharine Jarmul is a comprehensive guide addressing the critical need for integrating privacy into data systems, particularly in light of regulations like GDPR and CCPA. The book provides insights and best practices for incorporating privacy-enhancing technologies (PETs) such as differential privacy, federated learning, and encrypted computation into production systems.

## Key Concepts

### Privacy Regulations and Data Workflows

The book explores the implications of privacy regulations like GDPR and CCPA on data workflows and data science use cases. It emphasizes understanding what "anonymized data" truly means and provides guidance on achieving data anonymization.

### Privacy-Enhancing Technologies

Jarmul discusses various PETs, including:

- **Differential Privacy**: Techniques to ensure privacy by adding noise to data, maintaining utility while protecting individual data points.
- **Federated Learning**: A method allowing machine learning models to be trained across decentralized devices without sharing raw data.
- **Encrypted Computation**: Techniques such as homomorphic encryption that allow computations on encrypted data without needing decryption.

### Implementing Privacy in Data Systems

The book provides practical advice on integrating privacy into data pipelines, ensuring data science projects are secure by default and private by design. It includes examples and code snippets to help data practitioners implement privacy in practice.

### Privacy Attacks and Mitigations

"Practical Data Privacy" analyzes common privacy attack vectors, such as linkage and membership inference attacks, and offers strategies for data security, including access control and threat modeling.

### Privacy in Machine Learning

The text covers privacy-preserving machine learning techniques, including differentially private stochastic gradient descent, and highlights open-source libraries for implementing these methods.

### Legal Considerations

Jarmul discusses navigating the legal landscape of privacy, covering GDPR, CCPA, and other regulations. She emphasizes the importance of working with governance and infosec teams to implement internal policies appropriately.

## Praise for the Book

Experts in the field have lauded the book for its practical approach and clarity. Rebecca Parsons, CTO at Thoughtworks, and Damien Desfontaines, Staff Scientist at Tumult Labs, praise its balance of technical depth and plain-language explanations. The book is seen as a vital resource for data scientists and engineers, offering tools and insights for managing the increasing complexity of data privacy.

## Conclusion

"Practical Data Privacy" is a crucial resource for anyone involved in data science and engineering, providing a detailed exploration of privacy-preserving technologies and strategies. It empowers readers to implement effective data privacy measures, ensuring compliance with regulations and protecting user data in an increasingly complex digital landscape.




# Summary

## Introduction to Digital Connectivity and Privacy

Digital connectivity offers numerous benefits, such as instant messaging and biometric scanning, but it also brings significant drawbacks, particularly concerning privacy. The ubiquity of digital tools has made it difficult for individuals to "unplug," leading to concerns over data privacy. Many assume their data is uninteresting, but apps and algorithms often collect and profile personal information without consent, impacting access to financial products, insurance, and more.

## The Impact of Surveillance

Surveillance capitalism has led to the hoarding of personal data by companies, data brokers, governments, and law enforcement, compromising privacy. The collection of biometric data, often without consent, highlights the need for privacy protections. The divide between those who can afford to protect their privacy and those who cannot is a significant issue in the digital age.

## The Importance of Data Privacy

Data privacy involves protecting data and individuals through access, use, processing, and storage controls. It is a complex concept encompassing legal, technical, social, cultural, and individual aspects. Legal definitions involve regulations and policies that dictate data privacy efforts. Technically, privacy involves deploying scientific technologies to protect data. Socially, privacy is about understanding the boundaries of social situations and controlling information flow, as explained by danah boyd.

## Building Privacy into Systems

The book emphasizes the need for data scientists and machine learning engineers to build privacy into systems. Privacy should guide the design of ethical and responsible systems, where users have power and input. This involves understanding the risks, implementing privacy technologies, and making informed technical decisions.

## Challenges and Opportunities

The shift from physical to online communication has changed how privacy is perceived. The book highlights the importance of designing systems that respect social and cultural definitions of privacy. Decisions on security and encryption can significantly impact privacy, making it crucial to consider these aspects in system design.

## Who Should Read This Book

The book is intended for data scientists interested in data privacy and security. It is useful for those looking to specialize in privacy, work in regulated industries, manage sensitive data, or become privacy engineers. Familiarity with Python, Jupyter notebooks, and statistics will be beneficial, but the book is accessible to anyone interested in the intersection of privacy and technology.

## Conclusion

Investing in privacy skills is becoming increasingly important as companies seek to build secure data management systems. By focusing on privacy, companies can avoid incidents and build trust with their users. The book provides practical guidance for navigating privacy challenges and implementing best practices in data science.



### Summary

The book focuses on integrating data privacy into data science, offering a comprehensive guide from basic to advanced privacy techniques. It aims to equip readers with skills necessary for the emerging field of privacy engineering, which combines data science and engineering to architect privacy solutions. Privacy engineers work across organizations to ensure privacy is embedded in products and systems, requiring an understanding of engineering, architecture, and data flows.

**Key Concepts and Chapters:**

- **Privacy Engineering:** Expected to grow in importance, it involves building privacy into data systems and requires evaluating technologies for data privacy management.

- **Chapter Summaries:**
  - **Chapter 1:** Covers data governance and simple privacy techniques like pseudonymization.
  - **Chapter 2:** Discusses anonymization and differential privacy, highlighting its use at the US Census Bureau.
  - **Chapter 3:** Focuses on automating privacy in data pipelines, including consent and anonymization.
  - **Chapter 4:** Describes privacy attacks and defenses, using examples like the Netflix dataset de-anonymization.
  - **Chapter 5:** Explores privacy-aware machine learning and data science.
  - **Chapter 6:** Introduces federated learning and compares it to other privacy-preserving techniques.
  - **Chapter 7:** Covers encrypted computation, including multiparty computation and homomorphic encryption.
  - **Chapter 8:** Guides on navigating legal aspects of privacy, referencing GDPR and CCPA.
  - **Chapter 9:** Provides practical applications for designing secure data systems.
  - **Chapter 10:** Offers a FAQ section for quick reference on data privacy issues.
  - **Chapter 11:** Encourages readers to apply their skills to advance the field.

**Purpose and Audience:**

The book is designed to be a practical resource for data scientists and technologists, aiming to simplify the steep learning curve in data privacy. It serves as both an introductory guide and a quick reference for specific privacy challenges.

**Author's Motivation:**

The author shares a personal journey from confusion to expertise in data privacy, intending to make the learning process accessible and engaging. The book is meant to inspire and equip readers to contribute to solving unsolved problems in data privacy.

**Additional Resources:**

The book includes links to further reading, exercises, and code examples on GitHub. It also provides typographical conventions and guidelines for using code examples, emphasizing practical application.

**Acknowledgments:**

The author thanks various individuals and teams for their support and expertise, highlighting contributions from colleagues, technical reviewers, and family.

This book is a foundational text for anyone looking to integrate data privacy into their work and offers a pathway to becoming a privacy engineer, a role that is increasingly vital in today's data-driven world.



# Summary

This text focuses on data governance, privacy, and the identification of sensitive data within organizations. It begins by acknowledging contributors to the book and emphasizes the importance of privacy as a fundamental right. The author highlights how privacy intertwines with organizational strategy and acknowledges the support received from friends and colleagues.

## Data Governance and Privacy

Data governance is described as the management of data rights and responsibilities within organizations. It involves understanding who collects data, how it is collected, and what happens to it post-collection. The text explains that data governance is crucial for ensuring privacy and security, and it supports the implementation of privacy principles like "Privacy by Design."

### Key Concepts in Data Governance

1. **Data Lineage and Origin**: Understanding where data comes from, how it is processed, and its reliability is essential. This includes tracking data sources, transformations, and ensuring proper documentation.
   
2. **Privacy and Security**: Organizations must manage access to sensitive data and monitor for breaches. Privacy controls should be in place, and compliance with regulations like GDPR is necessary.

3. **Sensitive Data Identification**: Sensitive data includes personally identifiable information (PII), person-related data, and proprietary information. PII is legally significant and requires special governance.

4. **Data Governance Implementation**: Organizations, regardless of size, must implement data governance policies. This involves creating standards, procedures, and ensuring these are integrated into technology systems.

## Identifying Sensitive Data

Sensitive data is broadly defined to include any data that can identify individuals, such as names, addresses, and social security numbers. The text emphasizes the importance of expanding the definition of sensitive data to include information that might not be traditionally considered sensitive, such as location data or personal interests.

### Challenges and Solutions

- **Documentation**: Many organizations struggle with documenting PII, especially in unstructured data like text or log files. Tools and methods, including deep learning models, can aid in identifying PII.

- **Contextual Privacy**: Different individuals have varying privacy preferences, highlighting the need for flexibility in data governance strategies.

- **Inference Risks**: Combining non-identifiable data can inadvertently lead to identification, posing privacy risks.

### Final Thoughts

The text encourages organizations to think holistically about data governance and privacy, ensuring that sensitive data is identified and protected appropriately. It also suggests that whistleblowing can be done responsibly by using privacy-preserving techniques.

Overall, the text provides a comprehensive overview of data governance and privacy, offering practical insights into managing sensitive data within organizations.



In managing Personally Identifiable Information (PII), it is crucial to acknowledge that PII discovery is inherently imperfect. Organizations should treat human-input data as highly sensitive, involving risk teams to address associated risks. Open-source tools like Microsoft’s Presidio can aid in PII discovery and pseudonymization, but a proactive approach involves tracking data from the point of collection, labeling it, and fostering a culture of documentation. This approach should engage various organizational departments, including security, IT, and data stakeholders.

Effective data governance relies heavily on comprehensive documentation, which includes classifying data to apply appropriate policies. Documentation should cover data collection, quality, security, privacy, definitions, and descriptive statistics. This practice not only facilitates cross-departmental collaboration and speeds up data experiments but also enhances compliance and reduces security risks. Data documentation should integrate with identity management systems to streamline access control and ensure responsible AI systems by documenting biases.

The documentation process should be user-focused, ensuring clarity and accessibility. It's vital to maintain accuracy to prevent misunderstandings that could lead to flawed decisions. Unknown or undocumented data, often accumulated over time, poses significant privacy and security risks. Organizations should establish processes to investigate, document, and make informed decisions about such data, including whether to delete, archive, or maintain it based on its sensitivity and utility.

To address unknown data, teams should investigate its provenance, determine its sensitivity, and create documentation for future reference. Decisions about the data should involve key stakeholders, ensuring compliance with privacy policies. Proper documentation and collaboration across data teams can minimize the presence of unknown data, promoting a more secure and efficient data environment.

Overall, the emphasis is on establishing robust documentation practices as part of data governance to enable effective data management, compliance, and innovation within organizations.



Data governance and privacy are crucial in managing modern data systems. Many organizations rely on outdated practices, such as using spreadsheets and undocumented data sources, which can lead to security issues due to shadow IT. Shadow IT refers to unauthorized data processes that bypass official IT systems, often leading to data being copied to multiple locations. This creates security risks and complicates auditing. A key role for data professionals is to replace these practices with transparent, documented, and privacy-preserving systems.

Data lineage, or provenance, is essential for understanding data's origin, transformations, and usage. It helps data scientists assess data quality and utility by answering questions about data collection, consent, and processing history. Despite its importance, many companies lack lineage tracking due to legacy systems focused on data storage rather than tracing. Implementing lineage tracking using tools like Apache Spark or data catalogs can improve data governance and compliance with data sovereignty laws, which require data to be stored within specific jurisdictions.

Data version control is another critical aspect, allowing organizations to track changes in datasets over time, similar to code version control systems like Git. This practice is vital for diagnosing issues in data models and ensuring data privacy. Versioning helps identify when data changes occur, aiding in debugging and maintaining data integrity. Selecting appropriate tools for data versioning involves evaluating their ability to manage snapshots efficiently and integrate with existing workflows.

Privacy techniques, such as pseudonymization, are important for protecting personal data. Pseudonymization involves replacing real data with pseudonyms, using methods like masking, tokenization, hashing, or format-preserving encryption. Each approach varies in privacy and data quality impacts. For instance, hashing makes data less interpretable but still linkable, while masking can remove identifiable information. The choice of technique depends on the specific privacy requirements and the potential for data linkage, a common vector for privacy breaches.

In summary, effective data governance involves documenting and managing data lineage, implementing version control, and applying privacy techniques like pseudonymization. These practices enhance data security, compliance, and usability, ensuring responsible data management in an evolving technological landscape.



### Summary

The text discusses pseudonymization and its role in privacy protection, particularly in the context of data governance and privacy-preserving record linkage (PPRL). Pseudonymization retains the ability to link data while masking personal identifiers, but it is not equivalent to anonymization. Re-identification through linkage attacks remains a significant risk, especially as more data becomes available. Pseudonymization can create a false sense of security, leading to misconceptions that data is anonymized when it's not.

Pseudonymization is beneficial for internal use cases where data needs to be linked but not fully exposed, such as in business intelligence dashboards or customer support systems. It is also used to extract data for testing environments, though this carries risks due to weak protections in such settings. Alternatives like synthetic data generation are recommended for testing purposes.

Several tools and libraries support pseudonymization, including Hashicorp Vault, which uses format-preserving encryption, and open-source options like KIProtect’s Kodex and Microsoft’s Presidio. These tools help manage sensitive data securely, especially in microservice setups.

The text transitions into a discussion on anonymization, emphasizing that true anonymization is challenging. Traditional methods like suppression and aggregation have been debunked. Cynthia Dwork's work on differential privacy highlights that any data release can lead to re-identification attacks, as auxiliary information (existing or future knowledge) complicates privacy guarantees.

Differential privacy shifts the focus from guaranteeing anonymity to measuring privacy loss. It introduces a gradient of privacy, balancing information utility with privacy protection. The concept involves setting bounds on privacy loss using algorithms that add noise to data queries, ensuring individual privacy while allowing data analysis.

Differential privacy is defined by comparing two databases differing by one row, ensuring that the probability of identifying the presence of an individual is limited. This approach focuses on the process rather than the result, allowing for dynamic systems that adapt over time while maintaining privacy guarantees.

In summary, pseudonymization and differential privacy offer different approaches to data privacy. Pseudonymization is suitable for certain internal applications but lacks the robustness of anonymization. Differential privacy provides a scientific framework for quantifying privacy loss, balancing data utility with privacy through controlled data release processes.

The text concludes by encouraging a shift in perspective from binary privacy to a continuum, where various technologies offer different levels of privacy and information balance. Understanding these methods helps data scientists make informed decisions about privacy in their work.



### Understanding Differential Privacy

Differential privacy is a framework that helps protect individual privacy in datasets by adding noise to data queries, thus limiting the information gain of potential attackers. A key component is **epsilon (ε)**, which defines the privacy loss bound. A smaller epsilon indicates tighter privacy but potentially less accurate data.

#### Epsilon and Privacy Loss

Epsilon quantifies how much an attacker can infer about an individual from the dataset. For instance, if an attacker knows the average salary of a role and detects a change after a new joiner, they might estimate the new joiner's salary. Differential privacy limits such inference by bounding the information gain through epsilon.

Using **Bayes’ rule**, the attacker’s updated suspicion (posterior) is calculated based on their prior suspicion and the query response. The differential privacy formula is reformulated to show how epsilon influences the attacker’s certainty. Smaller epsilon values are recommended to keep privacy leakage minimal.

#### Implementing Differential Privacy

To achieve differential privacy, noise is added to the query results. This noise is sampled from specific distributions, like the **Laplace distribution**, which balances privacy and information accuracy. The noise ensures that the privacy loss remains within defined bounds, allowing for best, worst, and average-case privacy loss scenarios.

#### Guarantees and Limitations

Differential privacy provides probabilistic bounds on information gain, offering plausible deniability to individuals. However, it doesn’t guarantee zero privacy loss and isn’t a one-size-fits-all solution. It’s effective for individual privacy but may not fully protect group information.

#### Practical Applications: The US Census

The US Census Bureau adopted differential privacy for the 2020 Census to protect individual data while maintaining data utility. They added noise to census data, ensuring accurate aggregate statistics while preventing re-identification attacks. This approach balances privacy and utility, crucial for tasks like federal funding and representation.

#### Challenges and Considerations

Using differential privacy can potentially undercount underrepresented groups, affecting federal funding and redistricting. It raises ethical questions about the trade-offs between privacy and representation, especially for vulnerable populations. Data scientists must consider these implications when deploying privacy mechanisms.

#### Legal and Technical Collaboration

Engagement with legal professionals is essential when handling personal data. Differential privacy is seen as a gold standard in privacy protection, but legal consultation remains crucial to ensure compliance and confidence in data release decisions.

#### Conclusion

Differential privacy offers a robust method for protecting individual privacy while allowing data analysis. By carefully choosing epsilon and implementing noise mechanisms like the Laplace distribution, organizations can achieve a balance between privacy and data utility. However, ongoing discussions about ethical implications and representation are vital in the deployment of such systems.


# Summary

Differential privacy ensures individual data protection by adding noise to query results. A common approach involves using the Laplace mechanism, which adds Laplace-distributed noise to maintain privacy. However, implementing differential privacy mechanisms from scratch is risky, as subtle bugs can negate privacy guarantees. It's recommended to rely on expert-audited systems.

### Naive Laplace Mechanism

A simple example uses a dataset of ages and salaries, demonstrating a naive Laplace mechanism in Python. The function adds noise based on an epsilon value, which determines the privacy guarantee. However, this naive implementation is insecure and should not be used in practice.

### Sensitivity and Error

Sensitivity measures the maximum change in query results when an individual's data is added or removed. It's crucial for maintaining privacy. For example, adding an 81-year-old to a dataset can significantly change the average age, revealing private information. Queries with unbounded sensitivity, like sums or minimum/maximum values, require special handling to prevent privacy breaches.

To manage sensitivity, one can introduce bounds, limiting possible query responses. This approach requires careful consideration of dataset characteristics, such as employee ages, to set reasonable bounds.

### Privacy Budgets and Composition

Differential privacy allows tracking and managing privacy loss through a concept called a privacy budget. The epsilon value represents privacy loss for a single query, and total privacy loss can be calculated by summing epsilons across multiple queries. This enables strategic allocation of privacy budgets, prioritizing more critical queries.

For example, calculating a differentially private average age requires separate queries for sum and count, each with its own epsilon. This involves clamping data to set bounds and adjusting the Laplace mechanism to incorporate sensitivity.

### Exploring Other Mechanisms

Besides the Laplace mechanism, Gaussian noise can also be used for differential privacy, offering a more familiar distribution for data scientists. This requires a relaxed definition of differential privacy, introducing a small delta to account for improbable outcomes. Choosing an appropriate delta is crucial to prevent unintended information leakage.

### Conclusion

Implementing differential privacy involves understanding sensitivity, managing privacy budgets, and selecting appropriate noise mechanisms. It's essential to use libraries that handle these complexities to minimize errors. Experimenting with toy examples and real datasets can help refine these techniques.


In the context of differential privacy, the Gaussian mechanism, traditionally used for \((\epsilon, \delta)\)-differential privacy with \(\epsilon < 1\), involves adding noise based on a Gaussian distribution. However, this method can introduce more noise than necessary. A refined approach, known as analytic Gaussian noise, is recommended, as detailed in Balle and Wang’s 2018 paper. This method uses a more complex formula, but for foundational understanding, simpler methods are initially discussed.

The Gaussian mechanism requires accounting for \(\delta\), unlike the Laplace mechanism, which satisfies \((\epsilon, 0)\)-differential privacy. Choosing a small \(\delta\) value, like \(10^{-5}\), is crucial as it provides more privacy guarantees. Sensitivity, representing the impact of a single individual's data, is central to both mechanisms. However, Gaussian noise is often preferred when sensitivity is high, as it scales with the square root of the number of statistics influenced by an individual, unlike Laplace noise, which scales linearly.

When applying differential privacy to datasets, such as those involving age and salary, Gaussian noise can be used to calculate means with privacy protection. The noise added by Gaussian mechanisms is normally distributed, making it suitable for scenarios where errors are assumed to be normally distributed. This property aligns well with linear algebra and machine learning tasks.

Differential privacy often results in data with higher error, necessitating intelligent use of results. Techniques like Bayesian reasoning and denoising methods can help reduce errors while maintaining privacy guarantees. Despite the noise, Gaussian mechanisms are advantageous due to their alignment with normal distribution properties.

In practice, understanding the trade-offs between Laplace and Gaussian noise is essential. Gaussian noise provides better performance in scenarios with high sensitivity and multiple statistics influenced by individuals. This understanding aids in making informed decisions about privacy mechanisms.

The text also touches on k-anonymity, an older anonymization technique, which groups individuals with similar attributes to prevent re-identification. However, it has limitations, such as potential exposure of sensitive data through homogeneous groupings. Enhancements like l-diversity were proposed to address these issues, but they introduced new challenges, such as data skewness and reduced utility.

Overall, the document emphasizes the importance of selecting appropriate privacy mechanisms based on the specific requirements and characteristics of the data and the desired privacy guarantees.



# Summary

The text discusses the complexities of data anonymization and privacy, focusing on the limitations of k-anonymity and the advantages of differential privacy. It critiques k-anonymity for its inability to guarantee privacy, its need for customization, and the potential for bias, making it less recommended today. Differential privacy is highlighted as a rigorous method that provides provable privacy guarantees.

The text emphasizes integrating privacy into data pipelines, advocating for Privacy by Design. It outlines steps to incorporate privacy measures into data engineering workflows, stressing the importance of understanding data sensitivity, documenting risks, and outlining a privacy plan. It recommends starting small with measures like masking and redacting sensitive fields, and experimenting to find the right balance between data utility and privacy.

Key considerations include defining the purpose of data collection, maximizing privacy without losing utility, and expanding use cases as privacy measures prove effective. It suggests an agile approach, rolling out small changes and learning from each implementation. Regular communication with data consumers is crucial to ensure privacy measures meet their needs and adapt to changes in data or requirements.

The text also highlights the importance of meeting users where they are, minimizing disruption to their workflows while integrating privacy technologies. It encourages creating small software packages or using existing tools that support privacy functions, such as Apache Beam or Tumult Analytics.

Testing and verifying data pipelines is essential. Tools like Great Expectations can validate that privacy measures are working as intended, checking for the presence or absence of fields, correct application of privacy transformations, and expected data formats.

An example of a data sharing workflow is provided, illustrating how to share data securely while maintaining user privacy. The example involves a sustainable chocolate company using purchase data to measure marketing campaign effectiveness. The plan includes removing personal identifiers, retaining relevant campaign information, and aggregating order data while bounding outliers.

Overall, the text advocates for a forward-looking approach to data privacy, leveraging new technologies and continuously adapting privacy measures to fit organizational needs and compliance standards.



The text outlines a process for integrating privacy and data governance into data pipelines, emphasizing the use of secure methods and privacy frameworks. Key steps include merging data frames securely, encrypting user IDs, and aggregating data while removing outliers. The Great Expectations library is recommended for testing data pipelines to ensure they work correctly, with guidelines on setting up expectations, saving them, and using them as part of the data processing pipeline.

The text discusses the importance of consent and data provenance in data collection, suggesting that privacy-first defaults be implemented. It recommends designing user interfaces that allow users to manage their consent settings easily and outlines the need for retaining consent data to comply with regulations like GDPR. A schema is provided for tracking consent data using Apache Avro syntax, ensuring data is properly collected and stored.

Differential privacy is introduced as a method for anonymizing data in pipelines. Libraries like Tumult Analytics and PipelineDP are suggested for integrating differential privacy into existing workflows. The text provides examples of using these libraries to perform differentially private queries, emphasizing the need to manage privacy budgets effectively.

The text also discusses strategies for data access and privacy, such as restricting access to differentially private queries or using differential privacy in third-party data sharing. It advises experimenting with different approaches to find what works best for an organization, balancing data protection with the need for data analysis.

Overall, the text highlights the importance of implementing robust privacy measures in data pipelines, using modern tools and frameworks to ensure data is collected, processed, and shared securely and ethically.



Apple and Google have pioneered privacy techniques for data collection, focusing on differential privacy to protect user data. Apple implemented local differential privacy for emoji suggestions on iOS, ensuring data is anonymized before reaching their servers. This involves adding noise to the data on the user's device, dropping IP addresses, and aggregating results for analysis. Trust boundaries are crucial, marking security changes and ensuring privacy guarantees aren't violated.

Google's RAPPOR, launched in 2014, was an early attempt at differential privacy for Chrome, using randomized response to collect sensitive data. However, it was discontinued due to high error rates and the complexity of achieving accurate results with local differential privacy. Google's later Prochlo method combined local and central differential privacy, relying on trust boundaries and encryption.

For effective privacy engineering, organizations need clear communication between data science and engineering teams. Data governance involves shared responsibilities, with data scientists defining problems and data engineers managing workflows. Privacy documentation should be integrated into code repositories, and organizations should foster a culture of privacy, aligning it with business goals.

Privacy as a core value can enhance trust and brand reputation, benefiting both consumer-facing and B2B companies. Building a privacy-focused culture requires ongoing effort, similar to security practices, with champions advocating for privacy integration across the organization.



## Summary

### Building Privacy into Data Pipelines

Incorporating privacy into data workflows requires collaboration with security experts to integrate privacy advocacy into educational efforts. This ensures that privacy considerations are addressed before deployment. Automating privacy in data pipelines involves analyzing system needs and implementing privacy technologies like differential privacy, which can be integrated into systems like Spark. Collaboration across teams is crucial to foster privacy awareness.

### Privacy Attacks

Understanding privacy attacks involves thinking like both a security analyst and an attacker. This cyclical approach requires envisioning potential threats and continuously updating protections as threats evolve. Analyzing common attack vectors helps in planning proactive defenses.

#### Netflix Prize Attack

The Netflix Prize competition in 2007 exposed user data vulnerabilities. Researchers Arvind Narayanan and Vitaly Shmatikov demonstrated that supposedly anonymized data could be de-anonymized by matching Netflix viewing data with IMDB profiles. This highlighted the risks of linkage attacks, where auxiliary data sources are used to re-identify individuals.

#### Linkage Attacks

Linkage attacks involve combining data from multiple sources to re-identify individuals. Protecting against these requires considering both public and private datasets that could be linked. Implementing state-of-the-art privacy protections, like differential privacy, is crucial for data shared publicly or with third parties.

#### Singling Out Attacks

Singling out attacks target individuals within datasets. For instance, querying a naively anonymized database can reveal personal information if proper protections are not in place. The NYC taxi dataset incident exemplifies how poor anonymization can lead to re-identification of individuals, including celebrities.

#### Strava Heat Map Attack

In 2018, Strava's global activity map inadvertently revealed secret military bases due to a lack of users in certain regions, demonstrating how even aggregated data can leak sensitive information.

### Conclusion

The responsibility of data holders is akin to public infrastructure builders—protections must exist for everyone. Proper governance and documentation are essential to prevent re-identification and ensure privacy. Continuous evaluation of potential attack vectors and implementing robust privacy measures are necessary to safeguard sensitive data.



The release of Strava's global heat map inadvertently exposed sensitive military data, highlighting privacy risks when individual data reveals group information. This incident demonstrated the interplay between individual and group privacy, where personal data can inadvertently expose confidential information about military bases and operations. The incident underscores the importance of Privacy by Design principles, emphasizing the need for safe defaults and consent options.

In another case, aggregated data collected internally at Google revealed salary disparities between male and female employees. This data was used as evidence in a lawsuit, illustrating how data analysis can expose inequality and inform diversity initiatives. However, group privacy can sometimes be undesirable when decisions are based on private attributes.

Membership inference attacks pose another privacy threat. These attacks determine if an individual's data was used to train a model, which can reveal sensitive information about the person, especially if the dataset is small or the individual is an outlier. Reza Shokri's work on these attacks demonstrated how shadow models and discriminators can identify training data membership, revealing the importance of models that generalize well.

Attribute privacy attacks extend this concept by inferring group attributes from training data, potentially leaking sensitive group details. This is particularly concerning when models are trained on small, targeted populations. The research also highlights how seemingly innocuous data, like social media likes, can reveal private attributes, emphasizing the need for careful data handling.

Model memorization is another issue, where models inadvertently store sensitive information, particularly for outliers. Large models are prone to overfitting and memorization, as demonstrated in research on language models and GANs. This memorization can lead to privacy breaches, as seen in cases where synthetic data was traceable to original datasets.

Model-stealing attacks are a growing threat as models become valuable assets integrated into production systems. These attacks involve replicating models by optimizing API requests to span the input data space. The theft of models containing sensitive or proprietary information poses significant risks, akin to stealing data or assets from an organization.

Overall, these examples illustrate the complex landscape of privacy attacks in data science and machine learning. They emphasize the need for robust privacy techniques and technologies to protect sensitive data and prevent information leakage.



# Summary

## Privacy and Security Challenges in Machine Learning

### Privacy Attacks

When deploying machine learning models to devices, users can inspect and reverse-engineer models, posing privacy risks. Protecting models on devices remains an open problem. Strategies include using differential privacy during training, obfuscating model architectures, or employing federated learning. Model inversion attacks can extract sensitive data, such as images from facial recognition systems, using only class labels and model access. High-value models require robust protection, balancing usability with security.

### Attacks on Privacy Protocols

Differential privacy mechanisms are vulnerable to attacks, such as those exploiting floating-point system predictability. For instance, Ilya Mironov's 2012 attack on Laplace distribution highlighted this vulnerability. To prevent such attacks, libraries should incorporate post-processing of random noise additions. Timing attacks also pose risks by analyzing response times to infer noise distribution, common in cryptographic operations.

### Data Security

Data security intersects with privacy and governance, focusing on the CIA triad: Confidentiality, Integrity, and Availability. Security measures like access control, data loss prevention, and additional security controls are vital. Access control systems manage data access, while data loss prevention technologies detect unauthorized data movements. Extra security measures, such as encryption and access restrictions, mitigate risks.

### Threat Modeling and Incident Response

Security professionals use threat modeling to anticipate malicious actions and incident response plans to address security breaches. These plans involve collaboration with various teams and require understanding potential risks and responses. Incident response is crucial, involving steps like evidence collection and remediation.

### Probabilistic Reasoning

Security involves assessing threats based on likelihood and impact, using probabilistic reasoning. There is no "average attacker," but understanding typical attacker behaviors can guide security measures.

Overall, maintaining privacy and security in machine learning involves a multifaceted approach, integrating technical strategies and collaborative efforts across teams.



In threat modeling, identifying attack vectors involves assessing both their value and likelihood. However, human reasoning about likelihood without data is often flawed, as shown in Douglas Hubbard's research, which highlights inconsistencies in expert risk assessments over time. This malleability in risk classification suggests current methods may not be reliable.

Traditional risk matrices, while popular, are often biased and uncertain. Data scientists can reduce this uncertainty through observation and experimentation, but only when historical data is available. In cases of high uncertainty and low information, their contribution is limited. The security community is moving towards more quantifiable risk scenarios, where data science can help model complex problems by identifying variables and using open data to assess their distribution over time.

Data-driven security experiments, like the research on Rowhammer, demonstrate the value of validating threats through modeling. For data science, managing risks involves securing data access, infrastructure, and models. Key mitigations include applying web security basics, such as OWASP's protective controls for API endpoints, and ensuring thorough testing of model endpoints. Adversarial and poisoning attacks require specific countermeasures, like rate limiting and input validation. Avoid direct public internet connections for models, and implement access control with identity verification.

Protecting machine learning models extends to securing the technological supply chain. Automation of workflows, designed with privacy and security in mind, is crucial. Questions to address include handling person-related data, understanding regulatory implications, and ensuring mitigations work through testing. Documentation and governance are essential for transparency and integration testing can ensure system functionality.

Staying informed about new attacks is vital. Conferences like DEFCON's AI Village and communities like OpenMined offer resources. Newsletters and blogs provide updates on privacy and security trends. Engaging with the community helps maintain awareness of relevant developments.

Privacy-preserving machine learning (PPML) is a growing field that incorporates privacy-enhancing technologies into workflows. It aims to balance privacy and utility, improving generalization by preventing overfitting to private attributes. Techniques like differential privacy can be integrated into exploratory data analysis (EDA) and feature preparation. A smaller group of data scientists can analyze data to determine appropriate privacy mechanisms, ensuring wider access through differential privacy or other protections.

In summary, understanding and mitigating privacy and security risks in data science involves collaboration, staying informed, and using privacy-preserving techniques. As the field evolves, continuous learning and adaptation are necessary to protect data and models effectively.



### Summary

In privacy-aware machine learning and data science, differential privacy is crucial, especially in text-based or natural language processing tasks. Differential privacy can be implemented during model training, such as fine-tuning pre-trained language models. Libraries can help scan and remove potential Personally Identifiable Information (PII), though they are not foolproof. Techniques like tokenization, masking, and format-preserving encryption are essential for privacy protection.

When managing large data systems, privacy measures like pseudonymization and data expiry documentation are vital, particularly under regulations like GDPR, which grants users the right to be forgotten. Proper anonymization methods, such as differential privacy, can future-proof models against changing legal interpretations.

**Privacy-Preserving Machine Learning (PPML):** The motivation for implementing privacy mechanisms like differential privacy in machine learning has grown over the past decade. The PATE (Private Aggregation of Teacher Ensembles) architecture is a notable method, where data is split into groups to train multiple models (teachers) and then aggregated to train a single model (student) using public data. This approach ensures differential privacy by limiting the influence of any single teacher.

**Differentially Private Stochastic Gradient Descent (DP-SGD):** Advances have been made in adding differential privacy noise during training using DP-SGD. This method involves measuring the contribution of individual samples through gradient clipping, ensuring privacy by controlling the sensitivity of gradients. The process involves adding Gaussian noise to the gradients, fitting well with typical machine learning loss functions.

**Open Source Libraries for PPML:** Libraries like Opacus from the PyTorch team facilitate adding differential privacy to training optimizers. Opacus tracks privacy loss over time, providing updates on epsilon and delta values during training. It uses Rényi differential privacy with Gaussian noise, optimizing the process for parallel and vectorized layer updates. Monitoring tools like TensorBoard can help track training behavior and address issues early.

By using base models trained on public data and fine-tuning them with private data, noise addition can be minimized. This approach is common in computer vision and language models, leveraging publicly available models to enhance specific use cases.

Overall, incorporating privacy-preserving techniques in machine learning ensures compliance with regulations and protects sensitive information, while maintaining model performance.



### Summary

Privacy-preserving machine learning (PPML) involves using techniques like differential privacy (DP) to protect data during model training. Libraries such as PyTorch's Opacus and TensorFlow Privacy offer tools for implementing DP. However, challenges arise as epsilon values in DP-SGD can be higher than expected, posing privacy risks. Experts recommend exploring alternatives like overfitting mechanisms for better privacy guarantees.

For those not using TensorFlow or PyTorch, engineering differentially private features is crucial. This involves anonymizing data by adding noise or building aggregate features, like differentially private histograms. Consider local differential privacy only if necessary, as it can introduce significant errors. A centralized model with techniques like federated learning is often preferable.

Key steps include determining feature sensitivity, tracking user contributions, and experimenting with different models to ensure accuracy. Collaboration with a larger team is essential for maintaining and auditing PPML implementations.

When differential privacy isn't feasible, alternative methods like redaction, pseudonymization, and format-preserving encryption can enhance privacy. For example, generalizing sensitive data such as birthdates or using broader categories for postal codes can prevent models from making biased decisions.

Documenting machine learning processes is vital for data governance. Model cards, inspired by Google's fairness documentation, can be adapted for privacy, detailing data lineage, retention policies, privacy risks, techniques applied, and approved usage. This documentation supports compliance and transparency.

Organizations should foster a community around privacy-enhancing technologies, sharing knowledge and developing standards for documenting machine learning. This can lead to innovative approaches to privacy protection.

Other privacy concerns include membership inference attacks, where adversarial regularization can defend against information leaks. Normalization, regularization, and diverse data samples can also mitigate risks, along with API rate limiting and secure access controls.

Overall, PPML requires a thoughtful approach, balancing privacy with model performance and ensuring compliance with data protection regulations.



Machine learning models often face challenges related to fairness and privacy. A significant concern is the potential for models to unfairly impact certain groups based on private attributes like gender or race. This issue arises even when such attributes are not explicitly included in training data, due to private information leakage. Methods like differential privacy offer solutions by transforming data representations to enforce statistical parity, as proposed by Cynthia Dwork et al. in "Fairness through Awareness." This transformation helps ensure that individuals with similar non-private attributes are represented similarly, thereby enhancing fairness and privacy.

Researchers have successfully implemented these theoretical concepts, demonstrating improved fairness and privacy in models using datasets like the UCI Adult dataset. Their approach minimizes discrimination while maintaining accuracy compared to traditional methods like logistic regression.

To create privacy-aware models, the process involves mapping initial datasets to transformed representations that satisfy statistical parity, retain essential information, and closely approximate the intended learning function. This approach highlights the intersection of fairness, ethics, and data privacy, emphasizing the need for a multidisciplinary approach to address societal issues in machine learning.

Privacy concerns extend to the confidentiality of inputs, as seen in Microsoft's Cryptonets, which enable encrypted predictions. This approach, combined with differentially private mechanisms, offers high confidentiality but requires careful consideration of the entire machine learning lifecycle, from architecture to deployment.

Effective data privacy management necessitates comprehensive data governance, including lineage, consent, and provenance. Implementing privacy into workflows involves evaluating approved libraries and tools, fostering a culture of privacy, and incorporating privacy practices into MLOps infrastructure. Continuous experimentation and automation are crucial for building effective privacy solutions.

Monitoring privacy involves tracking outliers and ensuring that privacy automation functions correctly. This includes using differential privacy for statistics and considering synthetic data approaches. Regular testing and logging of privacy mechanisms are essential to maintain data quality and address potential issues.

Overall, integrating privacy into data science and machine learning workflows requires a holistic approach, considering the balance between privacy and information utility. As privacy technologies evolve, they must align with business goals to ensure organizational support and effective implementation.

The next step in enhancing privacy in machine learning involves exploring federated learning and distributed computation, which keep data at the edge, avoiding centralized data collection. This approach offers new opportunities for privacy-preserving data analysis and machine learning.




In this chapter, the concept of distributed data is explored, emphasizing a shift from traditional data collection to processing data at the edge. This method significantly reduces privacy risks and aligns with the principle of "Datensparsamkeit," or data minimization, which is central to many privacy legislations and frameworks. By minimizing data collection, organizations not only enhance privacy but also reduce the risk of data storage becoming a target.

In highly sensitive environments, data often cannot be moved outside secure infrastructures. Federated analysis addresses this by processing data within secure centers, avoiding the need to transfer data to less secure environments. This method is particularly beneficial when dealing with massive datasets across multiple data centers, as it is more cost-effective and efficient to perform computations where the data resides.

Legal and political pressures also drive the need for distributed data practices. Issues such as transatlantic data flows and data sovereignty are becoming increasingly significant, with privacy activists like Max Schrems challenging nonconsensual data transfers. Additionally, recent changes in US law interpretations raise concerns about data being used for prosecution, encouraging companies to avoid collecting sensitive data to protect individuals.

Distributed data analysis involves using technologies like Hadoop, Spark, and Kubeflow, which manage distributed compute nodes and abstract this complexity from users. These systems enable computations to occur across local networks, reducing the need for data movement. By extending this network to the edge, data remains on devices like smartphones and IoT devices, with computations occurring locally.

A typical workflow involves shipping queries to edge devices, collecting results, and aggregating them to produce final outcomes without centralizing data. This approach requires careful management of device capabilities, software consistency, and security measures to prevent data tampering and unauthorized access.

Privacy concerns in distributed data analysis include potential re-identification attacks and data inconsistencies across nodes. Techniques like differential privacy are recommended to enhance privacy, ensuring data contributions are bounded and noise is added to aggregated results, maintaining user privacy.

Federated learning builds on distributed data concepts by training machine learning models across devices without centralizing data. Initiated by Google, federated learning allows models to be trained using local data on devices, such as in the case of improving GBoard keyboard suggestions, thereby preserving user privacy.

Overall, distributed data and federated learning present robust solutions for privacy-preserving data analysis, offering legal, security, and cost benefits while aligning with modern privacy expectations.



Federated Learning is a decentralized approach to machine learning, where data remains on local devices rather than being centralized. This method addresses privacy concerns, reduces infrastructure costs, and supports on-device learning, making it suitable for sensitive, IoT, and on-premise data.

### Federated Learning Process
1. **Model Distribution**: The model is sent to all devices.
2. **Local Training**: Devices perform local training and generate updates.
3. **Aggregation**: Updates are sent to an aggregator, averaged, and a final update is distributed back to devices.

### Privacy and Security
Initial implementations faced privacy issues due to unbounded gradients. Modern federated learning incorporates differential privacy by clipping and averaging gradients, then adding noise to protect sensitive information.

### Device Selection
Selecting devices is crucial, especially for non-IID data. Criteria include device usage, power and internet connectivity, software version, hardware specifications, and language settings. This ensures minimal user disruption and efficient data handling.

### Challenges and Solutions
- **Data Standardization**: Data must be preprocessed on devices and standardized for training.
- **Data Distribution**: Data can be vertically or horizontally partitioned, requiring careful alignment for model training.
- **Non-IID Data**: Diverse data can de-bias models but complicates analysis and debugging. Strategies include careful device selection and clustering users based on data qualities.

### Benefits and Challenges
- **Benefits**: Enhanced privacy, reduced central data storage, and diverse data access.
- **Challenges**: Data standardization, uneven distribution, and ensuring model security.

### Architecting Federated Systems
Designing federated systems involves communication channels, aggregators, and coordination software. Architectures can be centralized, clustered, or fully distributed, each with its own trade-offs.

### Deployment Considerations
- **Device Connectivity**: Ensure reliable internet connectivity.
- **System Memory and Load**: Assess device capabilities and current load.
- **Power and Hardware**: Check hardware specs and power availability.
- **Software and Data Access**: Ensure devices run compatible software and have necessary data access.
- **Data Distribution**: Align device data with analysis requirements.

### Debugging and Testing
Debugging federated systems is complex due to privacy constraints. Key strategies include:
- **Maintain Privacy**: Respect privacy requirements during debugging.
- **Frequent Testing**: Develop a robust testing environment with CI/CD pipelines.
- **Push Debugging to Devices**: Use metrics and safe error summaries to identify systemic issues without compromising privacy.

Federated learning continues to evolve, with ongoing research in multitask models, split learning, and personalization. Collaboration with infrastructure and DevOps teams is essential for successful deployment and maintenance of federated systems.




### Summary

This text addresses the complexities and considerations in building distributed computation systems, particularly focusing on federated learning, which decentralizes data processing to enhance privacy and efficiency. Key areas of concern include security threats, such as reverse engineering and data poisoning attacks, which can compromise model integrity. To mitigate these, strategies like split learning and evolved selection criteria are suggested, though they do not entirely eliminate risks.

The text emphasizes the importance of privacy in federated systems, advocating for user control over data. Federated learning allows for new use cases, particularly where centralized data collection is impractical. For instance, edge devices can process data locally, improving tasks like predictive maintenance and enabling cross-silo learning within organizations.

Deployment of federated systems requires careful planning. Organizations must collaborate with DevOps and infrastructure teams to ensure successful implementation. Key considerations include device connectivity, memory, compute capacity, and secure log collection. Open source libraries, such as Flower, provide tools for federated learning, supporting various machine learning backends like TensorFlow and PyTorch. Flower facilitates simulations and strategies for federated training, helping developers manage federated systems efficiently.

The future of data science is seen as increasingly distributed, with potential applications in agriculture, public health, and climate monitoring. Federated learning can enable local data ownership, fostering collaboration and addressing real-world problems without centralized control. This shift could democratize data science, allowing communities to tackle local issues with shared resources.

Overall, the text underscores the potential of federated learning to enhance privacy, efficiency, and collaboration in data science, while highlighting the challenges and strategic considerations necessary for successful deployment.



## Summary of Encrypted Computation

### Introduction
Encrypted computation, a subfield of cryptography, enables computing on encrypted data without decryption, ensuring data security in insecure settings. This concept, developed since the 1970s, includes methods like homomorphic encryption (HE), secure multiparty computation (MPC), and garbled circuits.

### Key Concepts
- **Encrypted Computation**: Allows data processing while maintaining encryption, using mathematical properties to ensure correctness.
- **Cryptographic Protocols**: Facilitate secure data exchange and computation, incorporating various encryption methods beyond public-private key pairs.

### Applications
Encrypted computation is ideal in scenarios with varying trust levels, such as:
- **Insecure Cloud Environments**: Ensures data remains encrypted in untrusted cloud settings.
- **Third-Party Computing**: Allows computation without revealing raw data, controlling who accesses results.
- **Sensitive Data Processing**: Enables secure analysis, like medical diagnostics, without exposing personal data.
- **Data Comparison Across Parties**: Facilitates secure user base comparisons without revealing individual datasets.
- **Distributed Data and Secrets**: Enhances security by encrypting and decentralizing data storage.
- **Collaborative Algorithms**: Supports models requiring multiple parties, ensuring democratic control and participation thresholds.

### Benefits
Encrypted computation provides security and privacy, reducing liability and risk exposure while complying with stringent security policies. It supports privacy and secrecy by controlling data visibility and ensuring secure computation.

### Privacy vs. Secrecy
- **Privacy**: Prevents unauthorized data leakage, ensuring user consent and awareness.
- **Secrecy**: Focuses on keeping data hidden through encryption, relevant in distributed trust settings.

### Threat Modeling
Understanding threat models is crucial for applying encrypted computation:
- **Semi-Honest Model**: Assumes parties follow protocols but may try to learn others' inputs.
- **Malicious Model**: Assumes potential active manipulation of computation by parties.

### Security Guarantees
- **Information-Theoretic Security**: Unbreakable by any computational power.
- **Statistical Security**: Small chance of value recovery with unlimited power.
- **Computational Security**: Breakable only with significant computational resources.

### Types of Encrypted Computation
- **Secure Multiparty Computation (MPC)**: Involves multiple parties computing together with encrypted data. Initially developed for fair online games, it now supports various applications like voting and private data sharing.
- **Homomorphic Encryption (HE)**: Allows computations on encrypted data, revealing the result without exposing the raw data.

Encrypted computation offers robust security solutions for collaborative and sensitive data processing, ensuring privacy and secrecy while enabling innovative data science applications.



## Summary of Encrypted Computation and MPC

### Overview of MPC

**Multiparty Computation (MPC)** is a cryptographic method allowing multiple parties to jointly compute a function over their inputs while keeping those inputs private. MPC protocols ensure that intermediary processing steps do not reveal any information about the inputs. Only the final result is decrypted and revealed when a certain threshold of parties is reached.

### Secret Sharing

**Secret Sharing** involves dividing a secret into shares distributed among participants. A basic method is additive secret sharing, where a secret value is split into multiple parts such that only the sum of all parts reveals the original value. This method distributes trust and allows computations like sums, averages, and counts to be performed on encrypted data.

A more advanced technique is using a finite field to prevent information leakage. By operating within a finite field, encrypted values "wrap around," hiding the size of the original value.

### Multiplicative Secret Sharing

To multiply secret values without revealing them, shares are distributed among participants. Each participant performs partial computations, and random elements are added to prevent information leakage. The final result is obtained by combining these partial results, ensuring that no participant learns the secret unless they collaborate.

### Security Models

MPC protocols can operate under different security models. The semi-honest model assumes participants follow the protocol without malicious intent. For more robust security, **Verifiable Secret Sharing (VSS)** can detect and correct cheating, ensuring computations continue without compromised parties.

### Protocol Selection and Considerations

Selecting the right MPC protocol depends on several factors, including the nature of the computation, performance needs, and trust distribution. Different protocols offer various trade-offs between usability and performance. Libraries or frameworks often provide optimizations and can automatically select the best protocol for a given computation.

### Practical Considerations

When using MPC, consider the following:

1. **Computational Complexity**: Some operations are more complex than others, such as comparisons, which may require different methods like garbled circuits.

2. **Data Types**: In data science, converting data types to work within a finite field is necessary, often requiring fixed-point arithmetic.

3. **Optimizations**: Using a crypto provider or pre-computation steps can improve performance.

4. **Library and Framework Choice**: Evaluate different libraries to find the best fit for your use case, considering factors like runtime efficiency and ease of use.

### Conclusion

MPC is a powerful tool for privacy-preserving computations, with ongoing research and development expanding its capabilities. By carefully choosing protocols and considering practical factors, MPC can be effectively implemented in various applications, ensuring data privacy and security.




## Summary of Encrypted Computation Techniques

### Multiparty Computation (MPC)

MPC protocols aim to optimize parallelization and timing, reducing waiting times for intermediary results among parties. Libraries like Moose and MP-SPDZ demonstrate improvements in tensor operations and logistic regression. Robustness is crucial, requiring decisions on participant dropout and redundancy, often through trial and error.

**Server-Aided MPC**: Servers act as intermediaries, enhancing robustness by ensuring constant availability. Security requires servers to be integrated as computation players. Microsoft Research's implementation using garbled circuits is notable.

**Open Source Libraries**: Essential for trust, open-source libraries allow peer-review and verification, similar to differential privacy.

### Homomorphic Encryption (HE)

HE allows computations on encrypted data without decryption, maintaining mathematical properties. It is computationally intensive but suitable for scenarios with one data owner and processor. HE is categorized into:

- **Partially Homomorphic Encryption (PHE)**: Supports single operations like addition or multiplication.
- **Fully Homomorphic Encryption (FHE)**: Supports arbitrary operations, though computationally demanding.

**Key Concepts**:

- **Homomorphic Properties**: Enable operations on ciphertexts, preserving results.
- **Bootstrapping**: A breakthrough by Gentry in 2009, allowing noise reduction for complex computations.

**Paillier Cryptosystem**: Demonstrates additive homomorphic encryption. It uses a public-private key pair, enabling operations on encrypted values. Despite its educational value, Paillier is being phased out due to inefficiencies.

### Learning with Errors (LWE)

Originating from lattice-based cryptosystems, LWE is quantum-safe and forms the basis for many HE schemes. It involves sampling randomness and adding errors for encryption, with security relying on lattice problem hardness.

**Advanced Schemes**:

- **Ring-LWE and TFHE**: Offer fully homomorphic operations with optimizations like efficient bootstrapping.

### Practical Considerations

- **Hardware**: Specialized hardware can significantly speed up HE processing.
- **Trade-offs**: Balance between speed, performance, and accuracy.
- **Data Size**: Smaller data and computations can avoid costly steps like bootstrapping.

### Future Directions

Continuous research and development are crucial as HE evolves. Libraries like Zama's Concrete and Microsoft's SEAL are leading innovations. Staying updated with advancements is essential for leveraging HE effectively.

### Conclusion

While MPC and HE offer robust encrypted computation solutions, each has unique strengths and trade-offs. Understanding these can guide the selection of appropriate protocols for specific use cases.



### Summary

**Zero-Knowledge Proofs (ZKPs) and Homomorphic Encryption (HE):**  
ZKPs are cryptographic methods that allow a prover to demonstrate knowledge of information without revealing it. They can be interactive or non-interactive and are used in various scenarios, including validating HE computations. In HE, ZKPs serve as audit trails to prevent potential cheating, ensuring computations on encrypted data remain trustworthy. For machine learning, zk-ml uses ZKPs to validate model training and results.

**Private Set Intersection (PSI):**  
PSI allows parties to find the intersection of their datasets without revealing the data itself. The Diffie-Hellman key exchange protocol can be adapted for PSI by combining hashed representations of values with private keys. This approach is secure in semi-honest settings, typically used internally within businesses or with trusted partners, to minimize protocol violations.

**Private Join and Compute:**  
Google developed an open-source Private Join and Compute protocol, enhancing PSI by computing sums based on intersected values. This approach is used in Google Ads to calculate transaction numbers without compromising user privacy or revealing corporate secrets. The protocol relies on a modified Diffie-Hellman PSI and additively homomorphic encryption, ensuring only aggregate values are shared.

**Secure Aggregation in Federated Learning:**  
Secure aggregation in federated learning uses encrypted computation to protect model updates. Participants send secret shares of their gradients to multiple aggregators, which add differential privacy noise. This setup ensures privacy and security, making updates less vulnerable to attacks. The first open-source implementation for TensorFlow secure aggregation uses the Paillier cryptosystem.

**Encrypted Machine Learning:**  
Encrypted machine learning enables training on encrypted data, maintaining data security throughout the process. Microsoft Research's CryptoNets was an early implementation using homomorphic encryption. The tf-encrypted library, developed by Dropout Labs, uses MPC to enable secure machine learning operations. It includes a secure runtime, Moose, which compiles high-level instructions into MPC protocols, facilitating encrypted computations without needing cryptographer assistance.

**Moose and pyMoose:**  
Moose is a secure runtime that compiles computational graphs into MPC protocols, allowing data scientists to perform encrypted computations. It enables collaboration without requiring cryptographic expertise, though auditing by security teams is possible. Moose supports high-level languages like pyMoose, designed for data science applications.

This summary captures the key concepts of encrypted computation, highlighting the use of ZKPs, PSI, private join and compute, secure aggregation, and encrypted machine learning. These technologies enable secure data processing and collaboration while maintaining privacy and trust.



### Summary

This text explores using homomorphic techniques and Multi-Party Computation (MPC) for secure data collaboration between companies. It illustrates a scenario where two consumer goods companies compare purchase data to identify potential collaborations without revealing individual spending details, using techniques like Facebook Research’s Private ID library and Moose.

**Private ID Setup:**
- Private ID, built in Rust, allows parties to find a private join between datasets using unique identifiers like email addresses.
- Each party creates a CSV file with identifiers and runs a Private ID server to establish connectivity for data comparison.

**Data Preparation with Moose:**
- Once matches are found using Private ID, data is prepared for encrypted computation with Moose.
- Moose uses a NumPy-like interface in Python, supporting encrypted computations with replicated secret sharing.

**Computation Process:**
- Participants (Alice, Bob, and Carole) are defined in the computation setup.
- The computation involves loading data, performing logical operations to find dataset intersections, and calculating spending patterns securely.
- Results are computed using encrypted protocols, ensuring privacy by only revealing meaningful overlaps, like categories where spending exceeds 10%.

**Execution with Moose:**
- Moose compiles high-level Python representations into low-level encrypted computations.
- Computations run locally for testing but require distributed setups for production to ensure efficiency and security.

**Benefits and Future Prospects:**
- Encrypted computation allows secure data processing across multiple parties, maintaining data privacy and confidentiality.
- It reduces reliance on legal agreements by ensuring data security through cryptographic protocols.
- The approach fosters collaborative data use while respecting user privacy and could transform data sharing practices.

**Legal and Governance Considerations:**
- The text hints at upcoming discussions on privacy legislation like GDPR and CCPA, emphasizing the importance of aligning technological solutions with legal requirements.
- Future chapters will explore integrating privacy technologies within organizational and regulatory frameworks, highlighting collaboration with legal teams to ensure compliance.

Overall, the chapter underscores the potential of encrypted computation to enhance data privacy and security, advocating for its integration into data science practices to address real-world challenges.



# GDPR: A Comprehensive Overview

The General Data Protection Regulation (GDPR), finalized in 2016, set a global benchmark for privacy and data rights. Initially conceptualized by EU working parties, GDPR has transformed how personal data is managed, influencing legislation worldwide, such as Brazil's LGPD and various US state laws. GDPR's evolving case law continues to redefine its scope, challenging business models like personalized advertising and data scraping.

## Fundamental Data Rights

GDPR ensures eight key rights for EU residents:
- **Right to be Informed:** Transparency on data usage.
- **Right to Access:** Ability to view personal data held.
- **Right to Rectification:** Correct inaccurate data.
- **Right to Erasure:** Request data deletion.
- **Right to Restrict Processing:** Limit data usage.
- **Right to Data Portability:** Transfer data across services.
- **Right to Object:** Oppose data use for specific purposes.
- **Right to Opt Out of Automated Decision Making:** Avoid algorithmic decisions.

These rights apply to EU residents globally, though enforcement is easier within the EU. Companies must interpret GDPR and adapt their policies accordingly, facing fines up to 4% of global revenue for non-compliance.

## Enforcement and Compliance

Each EU country enforces GDPR differently, with countries like Germany and France known for strict interpretations. Companies must decide whether to comply fully or risk penalties. Compliance involves understanding data roles: **Controllers** manage data and consent, while **Processors** handle data on behalf of controllers. Controllers bear the legal risk, requiring due diligence in selecting compliant processors.

## Privacy-Enhancing Technologies (PETs)

GDPR encourages the use of PETs, though it doesn’t specify technologies. Anonymization is a key focus, with pseudonymization recognized but not equated with full anonymization. Differential privacy is considered a gold standard, helping data fall outside GDPR's scope when properly applied.

## Implementation Strategies

Organizations should collaborate with legal teams to determine appropriate anonymization methods. Data retention should align with business goals, avoiding unnecessary data hoarding. Regular analysis using differential privacy can ensure compliance, allowing businesses to retain valuable insights while respecting privacy rights.

## Conclusion

GDPR's impact extends beyond the EU, influencing global data protection practices. As enforcement and case law evolve, businesses must continually adapt, employing privacy-first strategies and technologies to ensure compliance and protect individual rights.




### Summary

Privacy technologies such as federated data analysis and learning are crucial for creating privacy-friendly systems by keeping data decentralized while still providing value. Secure computation and differential privacy enhance confidentiality and compliance. To ensure GDPR compliance, communication among software, data, infrastructure, and legal teams is vital, facilitated by GDPR's Data Protection Impact Assessment (DPIA).

#### Data Protection Impact Assessment (DPIA)

DPIA is a collaborative assessment involving technical and legal experts to identify and mitigate potential harms from handling sensitive information. The process involves several steps:

1. **Defining Risk**: Understanding risks in the context of setting, participants, technologies, and data.
2. **Identifying Risk**: Reviewing use cases to pinpoint privacy risks during data processing.
3. **Evaluating Risk**: Assessing the impact and likelihood of risks, utilizing data science skills for precise evaluation.
4. **Decision Making**: Choosing to accept or mitigate risks based on their impact and likelihood.
5. **Implementing Mitigations**: Selecting appropriate tools, libraries, and strategies for risk mitigation.

Effective communication and documentation are essential to ensure all stakeholders understand the risks and mitigations. Continuous monitoring and iterative assessments are crucial as the technological and legal landscapes evolve.

#### GDPR and Right to an Explanation

GDPR includes a "right to an explanation" for automated decisions, aiming for transparency. This raises challenges in machine learning, where model interpretability can lead to privacy issues, such as leaking private information of outliers.

#### California Consumer Privacy Act (CCPA)

The CCPA, enacted in 2018, protects consumers from unwanted data usage, granting rights such as data access, deletion, and opting out of data sales. Unlike GDPR, CCPA lacks large fines and has limited enforcement, but the California Privacy Rights Act (CPRA) will enhance enforcement and expand data protection measures starting in 2023.

#### Privacy-Enhancing Technologies (PETs) under CCPA

CCPA's approach to PETs focuses on de-identification, requiring technical safeguards against re-identification. However, it is less stringent than GDPR, accepting weaker privacy technologies. Legal interpretations suggest basic privacy measures like pseudonymization and tokenization as sufficient under CCPA.

#### Other Global Regulations

Beyond GDPR and CCPA, global regulations such as HIPAA in the US highlight the complex landscape of data privacy laws. Understanding and navigating these laws require applying privacy technologies and maintaining compliance with evolving standards.

Overall, integrating privacy technologies and maintaining ongoing risk assessments are essential strategies for navigating the legal side of privacy and ensuring compliance with global regulations.



The text explores various data protection laws and methods for releasing health data, focusing on HIPAA, GDPR, LGPD, and PIPL. Under HIPAA, data can be released through "Safe Harbor" by de-identifying specific fields or via an expert determination test, which assesses privacy risks considering available data. This approach is more lenient compared to GDPR, which offers stringent guidelines similar to Brazil's LGPD. China's PIPL sets a high standard for anonymization, potentially requiring robust privacy mechanisms.

The global landscape for data privacy regulations is evolving, highlighting the need for ongoing review of legal resources like the International Association of Privacy Professionals (IAPP). Organizations must also adhere to internal policies derived from these regulations, which can be complex due to the mix of legal, business, and technical advice. Understanding internal policies and contracts is crucial for compliance, especially when dealing with government contracts or specific business needs.

Privacy policies and terms of service are essential for communicating data usage to users. GDPR has improved the readability of these documents, making them more user-friendly. Examples like Signal's privacy policy demonstrate clear communication of data collection and sharing practices. The shift towards understandable privacy policies includes user guides for managing privacy settings, seen in tools from Facebook and Amazon.

Data Processing Agreements (DPAs) under GDPR outline the responsibilities of data controllers and processors. They typically include definitions, processing details, roles, security controls, and compliance measures. Understanding these agreements is vital for data processors, as they impact internal guidelines and reflect the company's data processing approach.

Internal privacy guidelines help organizations aggregate data protection requirements into a coherent strategy. These documents provide a baseline for privacy implementation but require collaboration with infosec teams for specific controls. Engaging with the privacy team is crucial for understanding risks and responsibilities, especially concerning third-party providers.

Working with legal professionals in data governance involves bridging the gap between legal and technical expertise. Legal staff assess data privacy risks and compliance, serving as referees in the process. Building a productive relationship with them enhances understanding and implementation of privacy policies.

In summary, navigating data privacy involves understanding diverse regulations, internal policies, and legal agreements. Effective communication and collaboration with legal and privacy teams are essential for ensuring compliance and protecting user data.



In the realm of privacy engineering, the key is to view "no" from legal professionals as a learning opportunity rather than a dead end. Understanding privacy risks and collaborating with legal teams can transform constraints into possibilities. Legal professionals play a crucial role in ensuring compliance with privacy regulations, such as GDPR, and data protection laws. They help interpret these regulations, which can vary by jurisdiction, and ensure that organizations adhere to them.

Data sharing agreements are governed by strict contractual clauses, and it is vital for data science teams to understand these to avoid violating data subject rights. Regular consultation with legal experts is necessary to stay updated on any new restrictions or changes in contract terms.

Privacy-focused legal professionals specialize in data protection and are invaluable resources for staying informed about privacy issues, legislation, and case law. Building a relationship with them involves asking for advice on specific use cases, which fosters collaboration and understanding. This proactive approach helps avoid potential legal pitfalls and aligns data practices with legal requirements.

Effective collaboration requires a shared vocabulary and understanding of key terms like PII and confidential data. Privacy and compliance teams often have glossaries and guidelines that data teams should familiarize themselves with. Engaging in discussions about privacy technologies and their implementation can lead to better project designs and de-risking early in the process.

Providing technical guidance to privacy professionals can be mutually beneficial. They often seek to understand technical aspects like machine learning and encryption, which can help them better assess risks and provide informed advice. This reciprocal relationship enhances both parties' understanding and effectiveness.

The concept of Data Governance 2.0 emphasizes a more agile and iterative approach to governance, integrating privacy into technology development. This involves federated governance, where governance responsibilities are distributed across diverse domains, allowing for experimentation and innovation. Teams can test privacy technologies and report outcomes, fostering a proactive governance culture.

For this experimental culture to thrive, organizations must support iterative processes and be open to trying new approaches. Building psychological safety and empathetic understanding within teams can facilitate this shift. Leaders may need reassurance about the benefits of experimentation to overcome fears of uncertainty.

Overall, the integration of privacy engineering with legal expertise and agile governance can lead to more effective and compliant data management practices, benefiting both organizations and their customers.



## Summary

The text discusses the importance of fostering a culture of experimentation and compromise in data governance, emphasizing the adoption of Privacy Enhancing Technologies (PETs) and the transition to Governance 2.0. It highlights the necessity of embedding privacy technologies directly into software and data systems to simplify their use, akin to how Spark queries are run without needing to understand their internals. This approach aims to make privacy technologies more accessible and integral to data workflows.

The text underscores the need for organizational change, psychological safety, and collaboration with experts to embrace forward-looking governance initiatives. It suggests building self-documenting systems to streamline data lineage, tracking, and policy enforcement, which are often manual processes. The goal is to integrate data rights implementation into software seamlessly, requiring collective effort and leadership influence to prioritize these initiatives.

Additionally, the text addresses practical considerations in managing privacy and security risks, emphasizing the importance of understanding an organization's risk appetite. It advises clear communication about risks and transparency in managing them. The text also highlights the significance of empathy and collaboration with legal, compliance, and security stakeholders to align on risk assessment and mitigation strategies.

The text encourages proactive engagement with privacy risks and technologies, proposing that organizations should shift from reactive to proactive security and privacy measures. This involves regular threat modeling, risk assessment, and creating a data-driven, experiment-oriented risk management process. It also suggests that embracing privacy can enhance a company's reputation, referencing Apple's use of privacy as a market differentiator.

Overall, the text advocates for a cultural shift towards integrating privacy considerations into everyday workflows and decision-making processes, promoting a more secure and privacy-conscious organizational environment.




## Summary

The text discusses strategies for integrating privacy technologies into organizational practices, focusing on marketing and public health data sharing. It emphasizes leading technological shifts by fostering discussions and planning to adapt to new privacy regulations. The concept of "thin slices" from agile methodologies is highlighted, encouraging quick, iterative testing of privacy technologies to gain familiarity and competence.

### Federated Marketing: Privacy-Integrated Campaigns

Marketing is significantly impacted by privacy regulations like GDPR. A use case involves two companies wanting to combine customer data for joint marketing efforts without violating privacy laws. The current solution uses trusted execution environments (enclaves) to securely analyze data intersections. However, this approach is costly and complex.

A more privacy-centric solution involves encrypted computation techniques such as homomorphic encryption or secure multiparty computation. These methods are cloud-agnostic, auditable, and provide robust privacy guarantees. They allow for private set intersections and analysis without exposing individual data, aligning with cryptographic principles.

### Public-Private Partnerships: Data Sharing for Public Health

The text explores how public health collaborations can use privacy-preserving methods to share data. The current solution uses privacy-aware hashing, which provides pseudonymization but not full anonymization, risking potential data leaks.

A privacy-first solution could utilize secure multiparty computation (MPC) or a federated system. These approaches enable data analysis without data movement, preserving confidentiality. Differential privacy mechanisms can enhance privacy guarantees, ensuring data remains protected while allowing for comprehensive public health insights.

### Anonymized Machine Learning: GDPR Compliance

Under GDPR, data anonymization can extend data retention beyond typical regulatory limits. A retail enterprise faces challenges in managing purchase data for machine learning while complying with GDPR. Anonymization is proposed as a solution to maintain data utility while adhering to privacy regulations.

### Implementation Steps

To implement these privacy technologies, organizations should:

1. **Define Problems Clearly**: Ensure all stakeholders understand the desired outcomes.
2. **Experiment with Libraries**: Choose appropriate tools and outline approaches before starting.
3. **Build Multidisciplinary Teams**: Include skills like infrastructure and software development.
4. **Regular Check-ins**: Address challenges and iterate on solutions.
5. **Test with Fake Data**: Validate concepts before using real data.
6. **Evaluate Scalability**: Assess test results and security risks for potential production use.

The text concludes by encouraging organizations to embrace privacy technologies to avoid vendor lock-in and optimize future data handling strategies. This comprehensive approach not only enhances privacy but also aligns with evolving regulatory landscapes.



The text discusses privacy concerns and solutions in data processing, particularly in compliance with GDPR, and explores how companies can balance data utility and privacy. It highlights the challenges of using person-related data in machine learning (ML) and suggests solutions like k-anonymity and differential privacy. The text critiques k-anonymity for not providing rigorous privacy guarantees and suggests differential privacy as a more robust solution, albeit with significant investment in changing ML operations.

For business-to-business applications, the text describes a scenario where companies have secure data storage to protect privacy, limiting data usage for insights and growth. It suggests federated learning and secure computation as privacy-first solutions that allow data use while maintaining privacy. These methods enable companies to benefit from data science without compromising privacy, potentially using federated learning to optimize models across similar customers.

The text emphasizes integrating privacy into ML workflows from the start, advocating for privacy to be part of the iterative discovery process. It suggests that privacy considerations should be documented as part of the data science and ML workflows, similar to software and user requirements. This documentation raises awareness and ensures privacy is a core concern, shifting organizational culture towards privacy-first solutions.

Evaluating and combining privacy technologies requires a knowledgeable team to assess and integrate these solutions effectively. The text recommends documenting privacy requirements and performing regular privacy risk assessments to make privacy a must-have in data projects. It suggests that consent-driven documentation and auditable workflows can ensure privacy rights are respected.

The text outlines a step-by-step approach to integrating privacy in ML, including iterative discovery, documenting privacy requirements, and evaluating privacy technologies. It stresses the importance of creating clear evaluation criteria and estimating effort to determine the feasibility of integrating privacy technologies.

Finally, it provides a PETs (Privacy-Enhancing Technologies) evaluation criteria, including assessing use case requirements, external team input, threat modeling, identifying technical privacy requirements, and determining feasible technologies. This structured approach helps organizations navigate privacy challenges and implement effective privacy-preserving solutions in data science and ML workflows.



### Summary

In the realm of data science and machine learning, integrating privacy technologies is crucial. Organizations must adapt to automation trends and embrace privacy as a core component of their workflows. This involves collaborating with platform teams to embed privacy technologies and leveraging cloud providers' built-in options or open-source libraries. As automation advances, maintaining ongoing discussions about privacy technologies positions teams to adopt these solutions more effectively.

To normalize privacy within organizations, it's essential to communicate its benefits across departments, including product development, marketing, and business development. Demonstrating privacy as a business value proposition aids in its acceptance. Educating management and stakeholders about privacy technologies helps reduce uncertainty and fosters a culture of privacy awareness.

Collaboration with research teams, both internal and external, is vital for advancing privacy technologies. Engaging with researchers can lead to new insights and solutions tailored to specific risk models and use cases. Organizations should consider forming internal research groups to focus on privacy-related challenges, aligning research outcomes with company goals.

When working with research teams, it's important to understand their experiment-driven nature, which requires patience and clear communication. Contributing to research backlogs and sharing privacy requirements can help prioritize projects effectively. Building strong relationships with research teams ensures that their findings are utilized and aligned with organizational priorities.

In the context of secure computation and confidential computing, understanding quantum security is important. While many protocols are not quantum-secure, most multiparty computation protocols are. The transition to quantum-safe methods is necessary but should be balanced with addressing immediate challenges like climate-neutral data processing.

Enclaves or trusted execution environments (TEEs) offer specific confidential computing benefits, primarily protecting against cloud provider access. However, their guarantees are often overstated, and they are not a catch-all solution for data privacy or secrecy. Instead, organizations should evaluate the suitability of enclaves based on their specific security models and requirements.

Overall, integrating privacy into data science and machine learning requires a multifaceted approach involving automation, collaboration, and continuous learning. By fostering a culture of privacy and engaging with research communities, organizations can enhance their privacy practices and prepare for future challenges.




In today's digital landscape, intelligence agencies and organizations face significant challenges in maintaining data privacy during cloud computing. Concerns arise when cloud providers might cooperate with local authorities, potentially compromising sensitive operations. Traditional methods like Trusted Execution Environments (TEEs) or secure enclaves offer some isolation but have known vulnerabilities and require shifting trust to enclave providers. These methods come with increased costs and complexities. Instead, encrypted computation is highlighted as a more reliable alternative, offering well-defined protocols, better secrecy guarantees, and compatibility across various hardware and cloud environments.

Encrypted computation protocols, such as Private Information Retrieval (PIR) and oblivious transfer, allow users to send queries while keeping the requests secret. These technologies can be combined with differential privacy to ensure confidentiality of both the request and response. They are particularly useful in scenarios requiring high security, such as nation-state operations, and could be integrated with distributed identity services for anonymous querying.

Clean rooms and remote data analysis are sometimes compared with confidential computing but are criticized for their lack of privacy guarantees. Clean rooms allow data scientists to access data in a controlled environment, but they still see the data in plain text, offering no real privacy. Remote data access involves manipulating data without full visibility, which can be cumbersome and still lacks robust privacy protections. Both methods pose significant security risks, as analysts can potentially extract sensitive information.

The pursuit of perfect privacy or secrecy is challenging. Perfect privacy involves ensuring that an attacker with complete knowledge and computational power cannot distinguish any individual data, a goal that is difficult to achieve in practice. Instead, the focus should be on applying practical data privacy standards using differential privacy and cryptographic methods. Open-source, peer-reviewed libraries are recommended for secure computations, ensuring transparency and reducing vulnerabilities.

Key management is critical in encrypted computations, with regular rotation advised for business-critical data. Some methods, like secret sharing, do not require traditional keys, simplifying management. Homomorphic encryption, however, involves keys that can be rotated without affecting outcomes. End-to-end encryption protocols, like the Signal protocol, are recommended for secure communication.

Google's Privacy Sandbox aims to shift from third-party cookies to more privacy-friendly methods, using federated data and analysis, pseudonymization, and differential privacy. However, it does not currently employ encrypted computation. The initial approach, Federated Learning of Cohorts (FLoCs), faced criticism for privacy issues, leading to a revised method based on user interests, though concerns remain.

Finally, k-anonymity is an older method for anonymization but is criticized for its limitations. It relies on obscuring data within groups, but attackers can still infer information using external knowledge. Enhancements like t-closeness and l-diversity attempt to address these issues but often result in overly generalized data, failing to provide strong privacy guarantees. Differential privacy offers a more robust approach by statistically measuring potential information gain.

In summary, while achieving perfect privacy is challenging, practical measures and technologies like encrypted computation, differential privacy, and secure protocols provide significant improvements in data protection and privacy.



The text discusses the importance and challenges of implementing differential privacy and other privacy-preserving techniques in data management. Differential privacy is highlighted as a method that focuses on the algorithm rather than the data itself, offering privacy guarantees by measuring the workings of an algorithm. It is not suitable for use cases requiring identification of outliers, maintaining individual records for linking, or where small changes impact outcomes significantly. If differential privacy doesn't fit, alternative privacy-friendly solutions should be explored.

Synthetic data, gaining attention since 2018, is another approach to privacy. It can extend datasets using statistical properties or generative machine learning. However, synthetic data without differential privacy can be more dangerous than real data due to the false sense of security it provides. The text advises caution and suggests using differential privacy when generating synthetic data to prevent privacy loss.

Ethical data sharing is evolving, with trends moving towards democratic, user-oriented structures like data trusts and cooperatives. These structures allow users to define how their data can be used, providing more control and self-determination compared to traditional data sales.

To protect private information, organizations should identify and categorize data into PII, sensitive data, and more general person-related data. Tools like Microsoft’s Presidio can help automate this process. Proper data governance measures, including lineage, tagging, and tracking, are essential to ensure data protection.

The text also addresses common misconceptions, such as the belief that removing personal identifiers from data ensures privacy. It emphasizes that differential privacy mechanisms should be used instead. For data released in the past without differential privacy, it's challenging to assess information leakage, but moving forward with differential privacy is a significant improvement.

In data visualization, privacy-friendly practices include using differential privacy for public visualizations and ensuring internal dashboards avoid displaying PII by using coarse granularity. Privacy engineering decisions should be guided by a multidisciplinary group within an organization, aligning with business needs and regulatory landscapes.

The role of privacy engineers is evolving, requiring skills in cryptography, differential privacy, and distributed systems. The text encourages those interested in privacy engineering to stay updated through communities and conferences, highlighting the growing importance and potential career paths in this field.



The industry increasingly requires professionals who can effectively utilize existing technologies rather than create them from scratch. This shift necessitates the development of roles such as data engineers, data scientists, and platform engineers who are adept at applying these tools. Privacy engineering is a growing field that demands a broader definition. Individuals should assess their skills, identify areas for growth, and consider advanced studies or self-learning to contribute effectively. Focus on areas that inspire you and continuously engage with the community to learn and apply your knowledge. As you gain expertise, you’ll find solutions more intuitive and be able to teach others, eventually adopting the title of privacy engineer.

The field of privacy engineering is still evolving, with job expectations and interview questions yet to be standardized. Early involvement in this field, despite the ambiguity, can open opportunities and help shape its future. Engaging with the community through discussions and sharing insights can solidify your understanding and contribute to the field’s growth.

Regarding GDPR and data protection regulations, differential privacy is often recommended for anonymization, but other methods like k-anonymity may also suffice. Consulting with a privacy lawyer is advisable when choosing techniques. GDPR’s concept of legitimate interest allows data processing without explicit consent if it meets certain criteria, such as the purpose, necessity, and balancing tests. However, this is subject to legal interpretation and scrutiny.

In terms of transatlantic data flows, the Schrems II ruling highlighted the inadequacies of current practices in protecting European data from US surveillance. Companies are adapting by offering more control over data storage locations. Future-proofing data protection might involve technologies like federated data analysis and encrypted computations.

For personal privacy choices, selecting privacy-friendly services involves considering data collection, storage, retention, sharing, and encryption practices. Evaluating privacy policies and using resources like Mozilla’s privacy guide can help make informed decisions. Engaging with others about privacy can be challenging, but approaching conversations with empathy and clarity about personal boundaries is crucial.

Overall, the focus should be on continuous learning, community engagement, and practical application of privacy technologies to address real-world challenges. This proactive approach will help shape the future of privacy engineering and data protection.



The text discusses the importance of privacy, emphasizing the role individuals can play as privacy advocates within their social circles. It highlights that online behaviors and technology choices affect not only personal privacy but also that of others, like when apps access contacts. The text envisions a future where privacy responsibility lies with service providers rather than individuals, promoting a safer digital environment.

The author addresses common arguments against privacy, such as "privacy is dead" or "nothing to hide," by illustrating scenarios like revenge porn and targeted misinformation to demonstrate privacy's significance. Empathy and understanding are crucial in these discussions, as privacy issues often relate to power imbalances and oppression.

The text critiques the idea of selling personal data, arguing it could worsen privacy issues and exacerbate biases. It proposes an alternative future where users control their data locally, using technologies like federated learning and differential privacy. This approach could lead to better collective data management and empower users.

The discussion on personalized ads highlights their potential for harm, such as reinforcing biases or targeting vulnerable groups. The author advocates for ads based on user intention rather than personal data, suggesting session-based recommendations as a promising alternative.

Concerns about applications listening in on users are addressed, explaining that while apps might not actively listen, they often exploit vast data networks to target users. The text advises caution with app permissions and encourages using privacy-friendly applications, acknowledging the intersection of privacy and privilege.

The concept of surveillance capitalism is introduced, describing an economic system where personal data is commodified. The author urges data professionals to critically assess their role in this system, acknowledging its societal impacts. The rise of gig workers exemplifies how surveillance capitalism affects labor, as these workers often rely on digital platforms that capitalize on personal data.

Overall, the text encourages ongoing dialogue and action towards privacy advocacy, emphasizing empathy and informed decision-making in the digital age.



The gig economy, initially promising flexibility, often results in part-time work without benefits such as healthcare or paid vacations. Gig workers face algorithmic management and continuous surveillance, adding pressure and compromising privacy. This surveillance extends beyond gig workers, affecting various sectors through systems like predictive policing, which reinforce biases and create feedback loops targeting marginalized communities.

Surveillance systems, justified as security measures, are prevalent globally, from CCTV in the UK to China's Great Firewall. These systems often fail to address the root causes of crime and can be used to monitor political dissent.

Luxury surveillance, described by Chris Gilliard, involves consumers willingly sharing data for conveniences like smart devices. This data collection raises concerns about privacy and the potential misuse of personal information. The lack of control over data usage can lead to harmful outcomes for others.

The vast collection of data changes societal control over personal information, as discussed in Helen Nissenbaum’s "Privacy as Contextual Integrity." Younger generations adapt by creating pseudonymous identities online. Generative machine learning models, such as GPT-3 and DALL-E, exacerbate privacy issues by using large datasets without consent, leading to potential misuse of personal data.

Disinformation and misinformation thrive online, driven by algorithms that prioritize engaging content, often polarizing and misleading. This manipulation can influence political outcomes, as seen in the Cambridge Analytica scandal, where private data was used to target voters.

Efforts to combat these issues include embracing privacy technologies, collective data management, and regulatory actions. Activists and organizations like Driver’s Seat empower gig workers by providing insights into their data. Regulatory bodies increasingly impose fines on companies violating privacy laws, signaling a shift towards greater accountability.

The text emphasizes the need for awareness and action to protect privacy and address the negative impacts of data misuse. Collaborative efforts and innovative approaches to data management can help shift power dynamics and promote a more equitable digital landscape.


# Summary

The text explores the evolving landscape of data privacy, focusing on the legal, ethical, and community-driven aspects of data collection and usage. It highlights significant legal actions, such as the GitHub Copilot lawsuit, which challenge the use of data without consent and aim to redefine data ownership rights for creators like musicians, authors, and coders. This lawsuit could pave the way for data owners to protect their work from exploitation by generative algorithms.

The text emphasizes the importance of community involvement in addressing data privacy and surveillance issues. It cites movements like Stop LAPD Spying, which use community-driven data collection and analysis to counteract predictive policing and advocate for an abolitionist future. The author encourages readers to engage with local groups affected by data collection and surveillance, suggesting that such involvement can be transformative and inspiring.

Privacy champions are urged to leverage their skills in privacy engineering, data science, and machine learning to question and challenge vast data collection systems. The text encourages public discourse and knowledge sharing to inspire others to question these systems. It underscores the importance of collective action in achieving foundational change in data privacy practices.

The EU's AI Act and Trustworthy AI Guidelines are discussed, highlighting the need for AI systems to be ethical, trustworthy, and human rights-based. These guidelines emphasize human oversight, technical robustness, privacy, transparency, fairness, societal well-being, and accountability. The text connects these guidelines to the book's content, showing how privacy and data governance are integral to trustworthy AI systems.

"Privacy by Design" principles are revisited, emphasizing proactive privacy measures embedded into system design. These principles advocate for privacy as a default setting, end-to-end security, transparency, and user-centric approaches. The text stresses the importance of balancing privacy and utility while ensuring user control and consent.

The text also examines privacy in relation to power and oppression systems, noting that privacy can be a tool for liberation and equality. It discusses how privacy regulation has historically been rooted in power dynamics, allowing powerful individuals to control their narratives. The text argues for using privacy as a means to challenge and dismantle systems of surveillance capitalism and data exploitation.

In conclusion, the author expresses hope for a future where data systems align with human rights and equality. They encourage readers to use their skills and knowledge to engineer privacy, fostering a more democratic and consensual data future.


The text provides an extensive overview of data privacy and security concepts, highlighting various technologies, regulations, and methodologies. Key topics include differential privacy, confidential computing, data governance, privacy engineering, and legal frameworks like GDPR and CPRA.

**Differential Privacy:** This approach aims to protect individual data within datasets by adding noise, such as Gaussian or Laplace, to ensure anonymity. It is used by companies like Apple and Google to collect data without compromising user privacy. Differential privacy is crucial for anonymizing sensitive data, like the US census, and is implemented in machine learning through techniques like differentially private stochastic gradient descent (DP-SGD).

**Confidential Computing:** This involves processing encrypted data in secure environments, known as enclaves, to maintain confidentiality. It contrasts with clean rooms and is part of Google's Privacy Sandbox initiative. Technologies like homomorphic encryption allow computations on encrypted data without decryption, ensuring data privacy.

**Data Governance and Privacy Engineering:** Effective data governance includes adding provenance and consent information, anonymizing data, and eliminating personal identifiers. Privacy engineering integrates privacy measures into data pipelines, ensuring data is collected and processed with user consent while maintaining confidentiality. The role of privacy engineers is vital, requiring skills in data management and legal compliance.

**Legal Frameworks:** Regulations like GDPR and CPRA establish guidelines for data protection, emphasizing user rights such as the right to be forgotten and data protection impact assessments (DPIA). Organizations must adhere to these regulations, which include data processing agreements (DPAs) and maintaining data lineage.

**Privacy and Security Attacks:** The text discusses various privacy attacks, including linkage, membership inference, and model-stealing attacks. These attacks exploit vulnerabilities in data systems, emphasizing the need for robust security measures like threat modeling and incident response.

**Privacy-Preserving Machine Learning (PPML):** PPML focuses on integrating privacy into machine learning workflows, using techniques like federated learning and secure multiparty computation (MPC). These methods allow collaborative data analysis without sharing raw data, protecting individual privacy.

**Emerging Technologies and Trends:** The document highlights the role of synthetic data, encrypted computation, and federated learning in advancing data privacy. It also discusses the cultural and regulatory pressures influencing organizational approaches to privacy.

**Community and Legal Advocacy:** Efforts to fight privacy incursions include community work, legal strategies, and advocating for privacy rights. Organizations and individuals are encouraged to participate in these efforts to protect personal data and privacy.

In summary, the text underscores the importance of integrating privacy into data management and processing, supported by legal frameworks and emerging technologies. It emphasizes the need for continuous learning and adaptation to address evolving privacy challenges.



### Summary

Katharine Jarmul, a privacy activist and data scientist, has focused her work on integrating privacy and security into data science workflows. Her career spans leadership roles in both large companies and startups across the US and Germany. Jarmul's expertise lies in developing privacy-first data strategies and secure machine learning systems.

The text explores various aspects of data privacy and security, emphasizing the significance of secure multiparty computation (SMPC) and Shamir's secret sharing (SSS) in protecting data. It discusses the challenges of surveillance capitalism, highlighting its impact on gig workers and the emergence of luxury surveillance. The text also touches on the societal effects of vast data collection, including misinformation on social media and the "privacy is dead" argument.

Key technologies and methodologies mentioned include stochastic gradient descent (SGD), federated learning with TensorFlow, and the use of trusted execution environments (TEEs). The importance of embracing uncertainty and building trustworthy machine learning systems is underscored, alongside the need for effective threat assessment and modeling.

The text also addresses the legal and technical challenges in data privacy, such as transatlantic data flows and the significance of privacy as a value proposition. It highlights the role of synthetic data and GANs in data protection and the importance of data pipeline verification and testing.

The book "Weapons of Math Destruction" by O'Neill is referenced in relation to privacy, and notable figures like Latanya Sweeney and Florian Tramèr are mentioned for their contributions to the field. The text concludes with insights into visualization and business intelligence, emphasizing the need for effective communication and collaboration within data engineering teams.

The colophon provides details about the book's cover illustration, featuring a morid cod, a species found in the Mediterranean Sea and parts of the Atlantic Ocean. The illustration is based on an antique engraving and highlights the importance of biodiversity and conservation.

Overall, the text serves as a comprehensive guide to understanding the complexities of data privacy and security, offering technical insights and practical strategies for implementation in modern data science workflows.
