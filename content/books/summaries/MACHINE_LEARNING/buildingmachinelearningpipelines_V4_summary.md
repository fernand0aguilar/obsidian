# Summary of "Building Machine Learning Pipelines"

"Building Machine Learning Pipelines: Automating Model Life Cycles with TensorFlow" by Hannes Hapke and Catherine Nelson is a comprehensive guide that explores the construction of automated, scalable, and reproducible machine learning (ML) pipelines. The book is highly praised by industry experts for its clarity and practical examples, making it an essential resource for data scientists, ML engineers, software engineers, and DevOps professionals.

## Key Features and Insights

### Introduction to ML Pipelines
The book begins by explaining the importance of ML pipelines, which streamline the process of taking a model from development to production. It covers the essential steps involved, such as data ingestion, validation, preprocessing, model training, analysis, deployment, and feedback loops.

### TensorFlow Extended (TFX)
A significant portion of the book is dedicated to TensorFlow Extended (TFX), a robust platform for managing ML pipelines. The authors provide detailed instructions on installing TFX and discuss its components, such as ML Metadata and Apache Beam for data processing.

### Data Handling
The text delves into data ingestion strategies, including handling local, remote, and database sources. It emphasizes the importance of data validation using TensorFlow Data Validation (TFDV) to ensure data quality and integrity, and preprocessing with TensorFlow Transform (TFT) to maintain consistency between training and serving data.

### Model Training and Tuning
The authors guide readers through defining models, using the TFX Trainer Component, and employing TensorBoard for visualization. They discuss distribution strategies and hyperparameter tuning to optimize model performance.

### Model Analysis and Validation
The book covers model analysis using TensorFlow Model Analysis (TFMA), focusing on classification and regression metrics. It also addresses fairness, explainability, and validation techniques to ensure robust model deployment.

### Deployment with TensorFlow Serving
The deployment chapter explores TensorFlow Serving for efficient model deployment, emphasizing the separation of code and model version control. It discusses REST and gRPC protocols, model A/B testing, and optimizations like batching and TensorFlow Lite (TFLite) for deployment efficiency.

### Advanced Deployment Techniques
Advanced topics include decoupling deployment cycles, model optimizations like quantization and pruning, and using TensorRT for enhanced performance. The book also covers monitoring with Prometheus and scaling with Kubernetes.

### Orchestration Tools
The text evaluates orchestration tools such as Apache Beam, Apache Airflow, and Kubeflow Pipelines, providing insights into converting interactive pipelines to production-ready versions.

### Feedback Loops and Data Privacy
Feedback loops are discussed as a mechanism for continuous improvement, while data privacy is addressed with techniques like differential privacy and federated learning to ensure compliance and security.

### Future Directions
The authors conclude with a discussion on the future of ML pipelines, including model experiment tracking, CI/CD integration, and the evolving landscape of ML engineering.

## Conclusion
"Building Machine Learning Pipelines" is a definitive guide for anyone looking to automate and scale their ML workflows. It provides practical, hands-on examples and insights into the latest tools and methodologies, making it a valuable asset for both beginners and experienced professionals in the ML field.


# Summary

## Foreword

In 1913, Henry Ford revolutionized the automobile industry by introducing the moving assembly line, reducing car production time and costs significantly. This innovation parallels the evolution of software development, where automation tools like Jenkins and Travis streamline building, testing, and deploying software. However, traditional automation tools fall short for machine learning (ML) pipelines due to the dynamic nature of data and model behavior. ML models require handling data as code, ensuring comprehensive testing, and preventing biases. This has led to the development of specialized ML automation tools like TensorFlow Extended (TFX) and Kubeflow, which organizations are increasingly adopting to automate ML pipelines.

## Preface

Machine learning has transitioned from academia to a transformative technology across industries. Despite advancements in model architectures, ML lacks standardized processes akin to those in software engineering. This book aims to guide readers in building automated, reproducible ML systems. ML pipelines formalize processes to accelerate, manage, and deploy models, drawing parallels to the evolution of continuous integration (CI) and continuous deployment (CD) in software engineering.

### Machine Learning Pipelines

ML pipelines are essential for standardizing processes, akin to CI/CD in software. They streamline steps like data versioning, validation, preprocessing, model training, and deployment. Automation reduces manual effort and ensures consistency, allowing data scientists to focus on higher-value tasks.

### Audience

The book targets data scientists and ML engineers seeking to productize their projects, as well as managers and developers interested in automated ML life cycles. Familiarity with basic ML concepts and frameworks like TensorFlow is assumed.

### Tools and Frameworks

The book focuses on the TensorFlow ecosystem, particularly TFX, due to its comprehensive toolset, popularity, and open-source nature. However, the principles apply to other frameworks as well.

## Chapter Overview

1. **Introduction**: Overview of ML pipelines, their components, and an example project.
2. **TensorFlow Extended**: Introduction to TFX, its components, and internal workings.
3. **Data Ingestion**: Consistent data input and versioning.
4. **Data Validation**: Using TensorFlow Data Validation to detect data drift.
5. **Data Preprocessing**: Feature engineering with TensorFlow Transform.
6. **Model Training**: Training models and tuning concepts.
7. **Model Analysis and Validation**: Metrics for understanding model performance and biases.
8. **Model Deployment**: Efficient deployment using TensorFlow Serving.
9. **Advanced Model Deployments**: Optimizing deployments and monitoring.
10. **Advanced TFX**: Customizing TFX components.
11. **Pipelines Part I**: Building pipelines with Apache Beam and Airflow.
12. **Pipelines Part II**: Using Kubeflow Pipelines and Google’s AI Platform.
13. **Feedback Loops**: Improving models through feedback.
14. **Data Privacy**: Privacy-preserving ML methods.
15. **Future of Pipelines**: Emerging technologies impacting ML engineering.

## Appendices

- **A**: Introduction to infrastructure like Docker and Kubernetes.
- **B**: Setting up Kubernetes on Google Cloud.
- **C**: Tips for operating Kubeflow Pipelines.

## Conventions

The book uses typographical conventions for clarity, providing tips, notes, and warnings. Code examples are available online for practical application.

By following the structured guidance in this book, readers can effectively automate their ML pipelines, enhancing efficiency and reliability in deploying ML models.



# Summary of "Building Machine Learning Pipelines"

## Permissions and Attribution
Using example code from O’Reilly books does not require permission unless it involves selling or distributing the examples. Significant incorporation into product documentation requires permission. Attribution, while appreciated, is not mandatory and typically includes the title, author, publisher, and ISBN.

## O'Reilly Online Learning
O’Reilly Media offers technology and business training through books and an online learning platform, providing access to live courses, learning paths, and resources from O’Reilly and other publishers.

## Contact Information
Authors can be contacted via their website or email. For comments or questions about the book, reach out to O’Reilly Media directly. Additional resources and errata for the book are available online.

## Acknowledgments
The authors express gratitude to numerous individuals and organizations for their support, including editors, reviewers, and the TensorFlow and Google Developer Expert community. Special thanks are given to personal supporters and previous employers for their contributions.

## Introduction to Machine Learning Pipelines
Machine learning pipelines automate model lifecycle steps, enhancing efficiency and reducing errors. Key benefits include:

- **Focus on New Models**: Automation frees data scientists from maintaining existing models, allowing them to focus on developing new ones, thus improving job satisfaction.
- **Bug Prevention**: Automated pipelines prevent bugs by ensuring consistency between data preprocessing and model training.
- **Paper Trail**: Experiment tracking and model release management create a record of model changes, aiding in recreation and performance tracking.
- **Standardization**: Standardized pipelines improve team efficiency and onboarding processes.

## Business Case for Pipelines
Automated pipelines reduce costs by:

- **Freeing Development Time**: Allowing data scientists to focus on novel models.
- **Simplifying Updates**: Making it easier to update existing models.
- **Reproducing Models**: Reducing time spent on model reproduction.

Pipelines also help detect biases and comply with data protection laws, enhancing data scientists’ job satisfaction.

## When to Use Machine Learning Pipelines
Not every project requires a pipeline. They are essential when models have users and need continuous updates. Pipelines are crucial for projects with large datasets or resource requirements, ensuring scalability and repeatability.

## Steps in a Machine Learning Pipeline

1. **Data Ingestion and Versioning**: Processes data into a digestible format for subsequent steps and versions the data for tracking.

2. **Data Validation**: Ensures new data meets expected statistics and alerts for anomalies, preventing biased training sets.

3. **Data Preprocessing**: Converts data into a format suitable for training, linking preprocessing modifications to data validity.

4. **Model Training and Tuning**: Trains models to predict outputs with minimal error and optimizes model hyperparameters for performance.

5. **Model Analysis**: Conducts in-depth analysis of the model’s performance beyond basic accuracy or loss metrics.

Machine learning pipelines involve continuous data collection and model updates, emphasizing the importance of automation to maintain model accuracy and efficiency.




### Summary

This text provides an overview of the key components and processes involved in machine learning pipelines, emphasizing the importance of automation, versioning, deployment, and feedback loops. It highlights the need for comprehensive model analysis, including metrics like precision and recall, to ensure fairness and performance across diverse user groups. Automation in model analysis is suggested to maintain consistency, with human reviews at critical points.

**Model Versioning** involves tracking models, hyperparameters, and datasets, considering the impact of data quality on performance. Semantic versioning is applied, with major updates requiring documentation of all changes.

**Model Deployment** is streamlined using modern servers that support multiple API interfaces and simultaneous hosting of different model versions. This enables A/B testing and reduces downtime by allowing updates without redeployment.

**Feedback Loops** are crucial for evaluating model effectiveness post-deployment, potentially capturing new data for model updates. This step can be automated, freeing data scientists to focus on new model development.

**Data Privacy** is becoming integral to machine learning pipelines, with methods like differential privacy and federated learning ensuring user data protection. Privacy-preserving techniques are expected to become standard as regulations evolve.

**Pipeline Orchestration** is essential for managing the execution order of pipeline components, using tools like Apache Beam, Airflow, and Kubeflow Pipelines. These tools manage dependencies and ensure tasks are executed correctly, avoiding custom, brittle code.

The text introduces **Directed Acyclic Graphs (DAGs)** as a central concept in orchestrating tasks, ensuring clear execution paths and preventing endless loops.

An example project is provided, using a dataset of consumer complaints to demonstrate the pipeline process. The project includes structured and unstructured data, with the goal of predicting dispute status. The project structure includes chapters, components, and utility scripts, with a focus on transforming a machine learning experiment into a complete pipeline.

**TensorFlow Extended (TFX)** is introduced as a comprehensive library for managing machine learning pipelines, offering components for data ingestion, validation, preprocessing, training, and deployment. TFX integrates with orchestration tools and provides a standardized approach to pipeline management.

The text underscores the importance of using TFX to minimize brittle task connections and leverage distributed processing capabilities. TFX components include ExampleGen, StatisticsGen, Transform, Trainer, Evaluator, and Pusher, covering a wide range of pipeline tasks.

Installation of TFX is straightforward via pip, and the text provides guidance on importing and using TFX components effectively. The structure of TFX components involves receiving input, performing actions, and storing results, ensuring efficient pipeline execution.



### Summary

**TensorFlow Extended (TFX) Overview:**
- TFX components interact through metadata rather than directly passing data, using the ML Metadata (MLMD) API to manage artifact references. This centralizes information storage and provides audit trails for machine learning pipelines. TFX supports various backends like SQLite and MySQL for metadata storage, allowing artifact comparison and validation.

**Interactive Pipelines:**
- TFX supports interactive pipelines, mainly executed in Jupyter Notebooks or Google Colab. This allows immediate artifact inspection and debugging. Users can convert these pipelines to production-ready versions for execution on platforms like Apache Airflow.

**TFX Alternatives:**
- Other frameworks for machine learning pipelines include Airbnb's AeroSolve, Stripe's Railyard, Spotify's Luigi, Uber's Michelangelo, and Netflix's Metaflow. These were developed with specific engineering stacks and focus areas, like Java or efficient orchestration.

**Apache Beam:**
- Apache Beam is integral to TFX, offering a vendor-agnostic way to describe data processing steps executable on various environments like Apache Spark or Google Cloud Dataflow. It supports both batch and streaming operations, abstracting data processing logic from runtime tools.

**Apache Beam Installation and Usage:**
- Install Apache Beam using `pip install apache-beam` or with additional options for Google Cloud or AWS. Beam uses collections and transformations within a pipeline context. Collections (PCollections) handle data reading/writing, while transformations manipulate data.

**Basic Apache Beam Pipeline Example:**
- A pipeline reads text files, processes lines into tokens, pairs them with counts, and sums occurrences. The final output is formatted and written to a file. This example demonstrates Apache Beam's ability to handle distributed data processing seamlessly.

**Data Ingestion with TFX:**
- TFX provides components for data ingestion from files or services, splitting datasets into training and evaluation subsets. Data is converted into TFRecord files containing `tf.Example` structures, optimizing for large dataset streaming. TFRecord files are system-independent and efficient for TensorFlow processing.

**TFRecord Benefits:**
- Storing data as TFRecord and `tf.Example` structures offers system independence and efficiency, making them suitable for large-scale data processing tasks in TensorFlow.

This summary encapsulates the core functionalities and advantages of using TFX and Apache Beam for managing and orchestrating machine learning pipelines, highlighting their integration and flexibility in various environments.



## Summary of Data Ingestion in TensorFlow Extended (TFX)

### Overview

Protocol Buffers and TFRecord are essential tools in the TensorFlow ecosystem for efficient data serialization and ingestion. TFRecord is optimized for handling large datasets, utilizing `tf.Example` as its primary data structure. The ExampleGen component in TFX ingests, splits, and converts datasets, supporting various data formats like CSV, TFRecord, Apache Avro, and Apache Parquet.

### Ingesting Local Data

ExampleGen can process CSV files by converting them into `tf.Example` structures. This involves defining the data path, instantiating the pipeline component, and executing it interactively. The component expects the input path to contain only data files, as additional files may cause failures.

### Importing Existing TFRecord Files

For datasets not efficiently expressed as CSVs, such as images or large text corpora, converting them to TFRecord format is recommended. The `ImportExampleGen` component handles the import of these pre-converted files.

### Handling Different File Types

TFX allows customization of data ingestion through executor classes. For instance, `FileBasedExampleGen` can be used with a custom executor to handle Parquet or Avro files. Users can also create custom executors for other file types.

### Converting Data to TFRecord

Converting datasets to TFRecord involves creating `tf.Example` structures for each data record. This is useful when data isn't available through efficient streaming platforms. Helper functions can assist in converting data types to `tf.train.Feature` objects, which are then serialized into TFRecord files.

### Ingesting Remote Data

ExampleGen can read from cloud storage like Google Cloud Storage or AWS S3. Access requires setting up provider-specific credentials, such as AWS access keys or Google Cloud service accounts.

### Direct Database Ingestion

TFX supports direct ingestion from databases using components like `BigQueryExampleGen` for Google Cloud BigQuery and `PrestoExampleGen` for Presto databases. These components require specific configurations for database connections.

### Data Preparation and Splitting

ExampleGen supports configuration of input and output settings, allowing for incremental data ingestion using spans. Datasets can be split into training, evaluation, and test sets with configurable ratios. Existing splits can be preserved by specifying input configurations.

### Versioning Datasets

While TFX doesn't natively support dataset versioning, third-party tools like Data Version Control (DVC) can be used to track dataset versions before ingestion. This ensures reproducibility by maintaining a metadata record of the datasets used in training.

### Conclusion

TFX's ExampleGen component provides a flexible framework for data ingestion, supporting various data formats and sources. By leveraging custom executors and third-party tools, users can tailor their data pipelines to meet specific needs while ensuring data integrity and reproducibility.



# Summary

## Pachyderm and Data Ingestion

Pachyderm is an open-source machine learning platform on Kubernetes, known for its versioning of data, akin to "Git for data." It has evolved into a comprehensive data platform with pipeline orchestration based on data versions.

### Ingestion Strategies

1. **Structured Data**: 
   - Typically stored in databases or as files supporting tabular data.
   - Can be exported to CSVs or consumed directly using PrestoExampleGen or BigQueryExampleGen.
   - For large datasets, convert to TFRecord files or use Apache Parquet.

2. **Text Data**:
   - Convert large text corpora to TFRecord or Apache Parquet for efficient loading.
   - Consider network traffic costs when ingesting from a database.

3. **Image Data**:
   - Convert image files to TFRecord files without decoding to save disk space.
   - Store images as byte strings in tf.Example records.

## Data Validation

Data validation ensures the quality and robustness of datasets used in machine learning pipelines. It checks for data anomalies, schema changes, and aligns statistics of new datasets with previous training datasets.

### Importance of Data Validation

- **Quality Assurance**: Ensures data is clean and consistent, preventing "garbage in, garbage out."
- **Automated Model Updates**: Validates data to facilitate automated updates in machine learning models.
- **Drift Detection**: Identifies changes in data distribution over time, which could indicate a need for new feature selection or preprocessing adjustments.

### TensorFlow Data Validation (TFDV)

TFDV is a tool in the TensorFlow ecosystem for data validation. It provides:

- **Statistics Generation**: Produces summary statistics for each feature, including count, missing values, mean, and histograms.
- **Schema Generation**: Defines expected features and types, helping validate future datasets.
- **Anomaly Detection**: Highlights discrepancies between datasets and schemas.

### Installation and Use Cases

- **Installation**: TFDV can be installed standalone with `pip install tensorflow-data-validation`.
- **Generating Statistics**: Use `generate_statistics_from_csv` or `generate_statistics_from_tfrecord` to produce statistics.
- **Schema Inference**: Use `infer_schema` to create a schema from statistics, which can be displayed in Jupyter Notebooks.
- **Comparing Datasets**: Use `visualize_statistics` to compare datasets and `validate_statistics` to detect anomalies.
- **Updating Schema**: Manually adjust schema based on domain knowledge, such as setting required presence thresholds for features.

### Conclusion

Data validation is a critical step in machine learning pipelines, ensuring data quality and model performance. TFDV facilitates this process by providing tools for generating statistics, schemas, and detecting anomalies. It supports efficient data management and validation, crucial for successful machine learning projects.



### Summary

The text discusses the use of TensorFlow Data Validation (TFDV) for data validation, highlighting its capabilities in schema management, anomaly detection, data skew, and drift analysis. Key concepts include:

1. **Schema Management**: TFDV allows updating and writing schema files to serialized locations. It enables revalidation of statistics to ensure anomalies are appropriate for the dataset.

2. **Data Skew and Drift**: TFDV uses a skew comparator to detect large differences between datasets using the L-infinity norm, defined as the maximum absolute value of vector entries. This helps identify anomalies when the difference exceeds a set threshold. The drift comparator functions similarly, comparing statistics of datasets collected at different times.

3. **Biased Datasets**: TFDV can identify bias in datasets, such as selection bias, where the dataset distribution does not match real-world data. It provides tools to visualize statistics and detect bias in categorical features, helping ensure datasets are representative.

4. **Slicing Data**: TFDV allows slicing datasets based on specific features to highlight potential biases. For instance, slicing data by state can reveal distribution discrepancies.

5. **Processing Large Datasets with GCP**: TFDV can be scaled using Google Cloud's Dataflow, leveraging Apache Beam for distributed data validation. This setup requires configuring Google Cloud options and setting up Dataflow workers with necessary packages.

6. **Integration into ML Pipelines**: TFDV can be integrated into TensorFlow Extended (TFX) pipelines using components like StatisticsGen and SchemaGen. These components automate statistics generation and schema validation, crucial for detecting anomalies and preventing dirty data from entering preprocessing and training stages.

7. **Data Preprocessing with TFT**: TensorFlow Transform (TFT) is introduced for data preprocessing, converting features into numerical representations. TFT ensures consistent preprocessing and avoids training-serving skew by using TensorFlow graphs, making it suitable for production environments.

Overall, the text emphasizes the importance of robust data validation and preprocessing in machine learning workflows, ensuring data quality and model reliability.



### Avoiding Training-Serving Skew with TensorFlow Transform (TFT)

**Training-Serving Skew**: This occurs when preprocessing steps differ between model training and inference. Commonly, training data is processed in Python or Spark, while inference preprocessing is done via API, risking misalignment. TFT ensures consistency by embedding preprocessing steps in the model graph, allowing raw data input and preprocessing during inference.

**Deploying as One Artifact**: Combining preprocessing and the trained model into a single artifact simplifies deployment. This approach eliminates the need for client-side preprocessing, easing the development of web or mobile apps.

**Checking Preprocessing Results**: Integrating TFT into the pipeline allows for generating statistics from preprocessed data, ensuring it meets model training requirements. For instance, excessive unknown tokens can hinder model accuracy.

**tf.data vs. tf.transform**: `tf.data` builds efficient input pipelines for training, optimizing hardware resources. `tf.transform` (TFT) handles preprocessing for both training and inference, performing full-pass data analysis ahead of training.

**TFT Overview**: Part of the TensorFlow ecosystem, TFT processes data using a schema and outputs preprocessed datasets and an exported preprocessing graph. The core function, `preprocessing_fn`, applies transformations to raw data using TensorFlow operations, enabling distributed preprocessing.

**Key TFT Functions**:
- `tft.compute_and_apply_vocabulary`: Generates and applies vocabulary mappings.
- `tft.scale_to_z_score`: Normalizes features to a mean of 0 and standard deviation of 1.
- `tft.bucketize`: Divides features into specified buckets.
- `tft.pca`: Performs principal component analysis for dimensionality reduction.

**Preprocessing Strategies**: The `preprocessing_fn` function defines transformations. It analyzes data in a distributed manner, using Apache Beam, and applies transformations like normalization. TFT builds a graph for consistent execution during inference.

**Best Practices**:
- Feature naming: Use consistent naming conventions for output features.
- Data types: Ensure compatibility with model input requirements.
- Batch processing: TFT processes data in batches, requiring reshaping.
- Graph mode: Use TensorFlow operations within `preprocessing_fn`.

**Text and Image Processing**:
- **Text**: Functions like `tft.ngrams` and `tft.tfidf` aid in text preprocessing, generating n-grams and calculating TFIDF.
- **Image**: TFT can preprocess image datasets, using TensorFlow functions for decoding, resizing, and converting images.

**Standalone Execution of TFT**: TFT can be executed standalone or within a TFX pipeline, utilizing Apache Beam locally or on Google Cloud's Dataflow. This flexibility allows efficient preprocessing outside of pipelines.

In summary, TFT provides a robust framework for consistent data preprocessing across model training and inference, reducing training-serving skew and simplifying deployments. Its integration into TensorFlow pipelines ensures efficient and accurate preprocessing, essential for high-quality machine learning models.



### Summary

In this chapter, we explore the integration of TensorFlow Transform (TFT) into machine learning pipelines using Apache Beam and TensorFlow Extended (TFX). The process involves preprocessing data to prepare it for model training, with a focus on defining and applying transformation functions.

#### Data Preprocessing with TFT

1. **Apache Beam and TFT**:
   - The `AnalyzeAndTransformDataset()` function is used to apply a preprocessing function (`preprocessing_fn`) to raw data and metadata.
   - It returns a preprocessed dataset and a transformation function (`transform_fn`).

2. **Feature Engineering**:
   - Features are categorized into one-hot encoded, bucketized, and raw string representations.
   - Helper functions are defined to transform features, such as converting sparse to dense features and one-hot encoding.

3. **Helper Functions**:
   - `transformed_name(key)`: Appends `_xf` to feature names for clarity.
   - `fill_in_missing(x)`: Converts sparse features to dense, filling missing values.
   - `convert_num_to_one_hot(label_tensor, num_labels)`: Converts indices to one-hot encoded vectors.
   - `convert_zip_code(zip_code)`: Converts zip codes from strings to floats for bucketization.

4. **Preprocessing Function**:
   - `preprocessing_fn(inputs)`: Loops over feature dictionaries to apply transformations like one-hot encoding and bucketization.

5. **Integration with TFX**:
   - The Transform component in TFX applies transformations defined in a separate module file (e.g., `module.py`).
   - Outputs include transformed data, a transform graph, and metadata.

#### Model Training with TFX

1. **Model Architecture**:
   - The model uses transfer learning, dense layers, and concatenation layers.
   - Features include financial product, company response, state, and consumer complaint narrative.

2. **TFX Trainer Component**:
   - Automates model training as part of the pipeline.
   - Inputs include data schema, transformed data, and training parameters.

3. **run_fn() Function**:
   - Entry point for the training process.
   - Loads data, defines the model, trains it, and exports the model.
   - Uses helper functions like `get_model()` and `input_fn()`.

4. **Loading Data and Training**:
   - Data is loaded using a transformation graph.
   - The model is trained with specified steps and exported with a defined signature.

This chapter highlights the importance of preprocessing data consistently with TFT and integrating these steps into a TFX pipeline. The seamless transition from data preprocessing to model training ensures that the model receives data in the expected format, minimizing errors during deployment and production. The next steps involve training the model with the preprocessed data, ensuring the pipeline's efficiency and reliability.



The text outlines a process for training machine learning models using TensorFlow Extended (TFX), focusing on data loading, model training, exporting, and deployment. Key components include the `input_fn()` function for batch data loading and the `run_fn()` function for defining and training the model. Data is preprocessed using the Transform component, allowing for efficient training without repeated preprocessing steps.

**Data Loading and Model Training:**
- The `input_fn()` function loads compressed, preprocessed datasets from TFRecord data structures, avoiding preprocessing during training and speeding up the process.
- Model training is defined by training steps rather than epochs, allowing flexibility in handling large datasets.
- The model is compiled and trained using the Keras `fit()` method, specifying training and evaluation datasets and steps.

**Model Export and Deployment:**
- After training, the model is exported in TensorFlow's SavedModel format, including preprocessing steps, ensuring consistency in deployment.
- The `get_serve_tf_examples_fn()` function applies preprocessing to incoming data before prediction, ensuring raw request data is appropriately transformed.

**Running the Trainer Component:**
- The Trainer component is executed with inputs like the Python module file, transformed examples, transform graph, schema, and training/evaluation steps.
- The component is versatile, supporting TensorFlow models and saving them in the SavedModel format, which includes the Transform graph.

**Distribution Strategies:**
- TensorFlow provides strategies for distributing model training across multiple GPUs or servers, including synchronous (e.g., `MirroredStrategy`) and asynchronous strategies.
- `MirroredStrategy` is highlighted for its synchronous training pattern, suitable for models that fit in GPU memory on a single node.

**Model Tuning:**
- Hyperparameter tuning is crucial for optimizing model performance, particularly for deep neural networks.
- Important hyperparameters include optimization settings and learning rate, with recommendations to use optimizers like Adam or NAdam.

**TensorBoard Integration:**
- TensorBoard is used for monitoring training metrics, visualizing embeddings, and profiling model performance.
- Logging training progress allows for detailed inspection and visualization through TensorBoard's interface.

Overall, the text emphasizes the integration and automation of data preprocessing, model training, and deployment within a TFX pipeline, leveraging TensorFlow's capabilities for efficient and scalable machine learning workflows.



## Summary

### Model Training and Tuning

When training machine learning models, it's crucial to prevent overfitting, especially in smaller models. Early stopping is a technique where training halts if validation loss doesn't improve after a set number of epochs. Key parameters for tuning include the size and number of layers in the network architecture. While increasing these can enhance performance, they may also lead to overfitting and longer training times. Adding residual connections can be beneficial for deep architectures.

Hyperparameter tuning is essential, and common methods include grid search and random search. Grid search exhaustively tests all parameter combinations, which can be time-consuming with many hyperparameters. Random search samples parameters randomly. In TensorFlow, hyperparameter tuning can be done using Keras Tuner and Katib, which support Bayesian search and the Hyperband algorithm.

### TFX Pipelines and Hyperparameter Tuning

In TFX pipelines, hyperparameter tuning uses data from the Transform component to train various models and determine the best hyperparameters, which are then used by the Trainer component to build the final model. The TFX Tuner component facilitates this process by accepting hyperparameters as input for model building.

### Model Analysis and Validation

Before deploying a model, it's important to analyze its performance and ensure it improves upon existing models. During training, models are often evaluated using a single metric, like accuracy, which can be insufficient for complex business questions or imbalanced datasets. It's vital to monitor metrics across different dataset slices and over time, as data changes can affect model performance.

TensorFlow Model Analysis (TFMA) allows for detailed metric visualization, data slicing, and model fairness assessment. It calculates metrics on the entire evaluation set, avoiding confusion between model versions. TFMA supports metrics like accuracy, precision, recall, and AUC, and can compare multiple models or evaluate TFLite models.

### Metrics for Classification and Regression

For classification, metrics include:

- **Accuracy**: Proportion of correctly classified examples.
- **Precision**: Proportion of true positive predictions.
- **Recall**: Proportion of actual positives correctly identified.

For regression, metrics include:

- **Mean Absolute Error (MAE)**: Average error magnitude.
- **Mean Absolute Percentage Error (MAPE)**: Percentage error.
- **Mean Squared Error (MSE)**: Squared error, emphasizing outliers.

### Fairness and Bias in Models

All training data contains biases, making it crucial to assess model fairness. Fairness ensures that different groups receive equitable model performance. TFMA helps identify fairness issues by allowing metric analysis across different data slices.

In summary, careful tuning, analysis, and validation of models are essential steps in building effective machine learning systems. TFMA provides tools for in-depth performance evaluation and fairness analysis, ensuring models are robust and unbiased before deployment.



Machine learning models must be evaluated for fairness to ensure they do not unintentionally discriminate against certain groups. Fairness issues can arise when models disproportionately affect specific demographics, such as the COMPAS algorithm's bias against black defendants. To address this, several fairness metrics are used:

1. **Demographic Parity**: Ensures decisions are made at the same rate for all groups.
2. **Equal Opportunity**: Ensures the error rate is consistent across groups for the opportunity-giving class.
3. **Equal Accuracy**: Ensures metrics like accuracy and precision are equal for all groups.

Fairness is complex, with no one-size-fits-all definition. It must be tailored to the specific business problem, considering potential harms and benefits. Protected groups, as defined by US law, include gender, race, age, and more. Models must be tested for biases against combinations of these groups.

**Groups Are Simplifications**: Real-world identities are complex. Factors like location can correlate with protected attributes, potentially introducing bias. Fairness analysis can help identify and address these issues.

**Tools for Fairness Analysis**: 
- **TensorFlow Model Analysis (TFMA)**: Allows slicing of model predictions by groups to evaluate fairness.
- **Fairness Indicators**: Provides metrics at various decision thresholds to assess fairness across groups.
- **What-If Tool (WIT)**: Offers detailed visualizations and individual data point analysis to explore fairness and model behavior.

These tools help ensure models provide consistent experiences and can correct underlying systemic biases. They offer both ethical and commercial advantages by improving user trust and model reliability.

**Model Explainability**: Understanding why models make certain predictions is crucial. Simple models like linear regression are easier to interpret, while complex models like neural networks require more sophisticated techniques. Explainability aids in debugging, building trust, auditing, and user communication.

**Local and Global Explanations**: Methods are divided into local (explaining individual predictions) and global (explaining overall model behavior). The What-If Tool provides both through features like counterfactuals and partial dependence plots (PDPs).

**Conclusion**: Fairness and explainability are ongoing research areas. They are essential for deploying ethical and effective machine learning models. Tools like TFMA, Fairness Indicators, and WIT are valuable for analyzing and understanding model behavior, ensuring equitable outcomes across diverse user groups.



### Summary

Model explainability and deployment are crucial aspects of machine learning. Partial Dependence Plots (PDPs) and Shapley values are commonly used for model explainability. PDPs assume feature independence, which is often unrealistic in complex datasets. Shapley values, derived from game theory, provide local and global explanations without assuming feature independence, making them useful for correlated features.

LIME and SHAP are other explainability techniques. LIME generates local explanations by treating the model as a black box, while SHAP uses Shapley values to offer both local and global insights. Model cards are recommended for reporting on machine learning models, detailing performance, limitations, and trade-offs to build trust.

Caution is advised with model explainability, as complex models like deep neural networks can be difficult to interpret fully. In high-stakes situations, simpler models with easily explainable features are recommended.

In TFX (TensorFlow Extended), model analysis and validation involve components like the Resolver, Evaluator, and Pusher. The Resolver compares new models against previous ones, while the Evaluator assesses model performance using TFMA (TensorFlow Model Analysis). The Pusher deploys the model if it meets performance thresholds.

Model deployment, the final step before use, involves challenges due to the division of labor between data scientists and DevOps teams. Models can be deployed via servers, browsers, or edge devices. TensorFlow Serving is highlighted as a method for deploying models through a model server, offering a consistent deployment process.

Deploying models with Python-based APIs, like Flask, is not recommended for production due to issues like lack of code separation, inefficient inference, and poor version control. A model server, like TensorFlow Serving, provides better separation, version control, and efficiency.

In summary, model analysis, explainability, and deployment are interconnected processes that require careful consideration of techniques and tools to ensure models are reliable, trustworthy, and effectively deployed.



### Summary

TensorFlow Serving is an efficient system for deploying machine learning models, offering capabilities for high-performance, low-latency predictions. It supports model and version management and can load models from various sources, such as AWS S3. This setup is particularly beneficial when using GPUs for inference due to its support for batching inference requests, which improves efficiency by processing multiple samples simultaneously.

#### Key Features of TensorFlow Serving

- **Model Management**: TensorFlow Serving's architecture includes a model manager that handles updates and determines which model version to use based on predefined policies. Models can be configured to update automatically when new versions are detected.

- **Exporting Models**: To deploy models with TensorFlow Serving, they must be exported correctly. Keras models can be saved using `model.save()` with a recommended timestamp in the path for version tracking. TensorFlow Estimator models require a receiver function and are exported using `export_saved_model`.

- **Model Signatures**: These define the inputs and outputs of a model, allowing for seamless updates without changing client requests. Supported signature methods include `predict`, `classify`, and `regress`, each catering to different model types.

- **Inspecting Models**: Before deployment, the TensorFlow Serving Python API provides tools to inspect model signatures and test models using the `saved_model_cli` command-line tool, which helps verify model inputs and outputs.

#### Installation and Setup

- **Docker Installation**: TensorFlow Serving can be installed using a prebuilt Docker image, which is the simplest method. For GPU support, a specific GPU-enabled Docker image is available.

- **Ubuntu Installation**: Alternatively, TensorFlow Serving can be installed on Ubuntu using binary packages. Two packages are available: one optimized for CPUs with AVX instructions and a universal package for older hardware.

- **Building from Source**: In cases where specific hardware optimizations are needed, TensorFlow Serving can be built from source using the `bazel` build tool.

#### Configuration

- **Single Model Configuration**: TensorFlow Serving can be configured to always serve the latest model version. This is done by specifying the model name and base path. Both REST and gRPC endpoints are supported, with default ports 8500 and 8501.

- **Multi-Model Configuration**: Alternatively, a configuration file can specify multiple models and versions for TensorFlow Serving to load and serve.

TensorFlow Serving is designed for scalability and flexibility, making it a robust solution for deploying machine learning models in production environments. Its ability to handle multiple models and versions efficiently, combined with support for both REST and gRPC protocols, makes it suitable for a wide range of applications.




TensorFlow Serving simplifies machine learning model deployment by providing REST and gRPC endpoints. A key feature is the hot swap capability, allowing seamless updates to models without configuration changes. The server automatically loads the latest model version based on version numbers, enabling easy rollbacks by deleting versions. Multiple models can be configured using a model configuration file, specifying models and their paths. This setup supports loading specific or all model versions, facilitating A/B testing and stable-development version management.

REST and gRPC are the two communication protocols supported. REST uses standard HTTP methods and JSON/XML payloads, offering ease of use and inspection. gRPC, developed by Google, uses protocol buffers for efficient, low-latency communication, beneficial for high-request scenarios due to reduced payload size. However, it requires additional client-side setup.

To interact with the model server, clients can use REST by sending HTTP POST requests with JSON payloads. The URL structure includes the host, port, model name, and the desired action (predict, classify, regress). Payloads must include instances or inputs keys. For gRPC, clients establish a channel and create a stub to communicate with the server, using protocol buffers for data exchange.

Secure connections can be established using SSL for both REST and gRPC. TensorFlow Serving can terminate secure connections if configured with an SSL configuration file. Predictions can be made from classification and regression models using specific gRPC requests.

A/B testing is supported by configuring multiple model versions and directing client requests accordingly. Although TensorFlow Serving doesn't natively support server-side A/B testing, client-side random routing can achieve this. Tools like Istio can enhance routing capabilities for more complex testing setups.

Requesting model metadata is crucial for feedback loops in the machine learning lifecycle, aiding in model improvement. Understanding and configuring TensorFlow Serving effectively allows for efficient model deployment and management, ensuring models are up-to-date and performant.



## Summary of Model Deployment with TensorFlow Serving

TensorFlow Serving is a robust tool for deploying machine learning models. It supports REST and gRPC requests to obtain model metadata, which includes model specifications and definitions. The REST API provides a straightforward way to request metadata by appending `/metadata` to the model URL. In contrast, gRPC requires creating a `GetModelMetadataRequest` and using the `GetModelMetadata` method of the stub. Although gRPC is more complex, it offers faster prediction performances for high-performance applications.

### Batching Inference Requests

Batching is a powerful feature in TensorFlow Serving that improves performance by processing multiple inference requests simultaneously. This approach utilizes computation resources more efficiently, especially when dealing with large datasets. Batching must be enabled and configured with parameters such as `max_batch_size`, `batch_timeout_micros`, `num_batch_threads`, `max_enqueued_batches`, and `pad_variable_length_inputs`. Proper tuning of these parameters is crucial for optimizing performance and reducing latency.

### Configuration and Optimization

TensorFlow Serving offers several optimization features:
- **File System Polling**: Controls how often the system checks for new model versions.
- **Session Parallelism**: Determines the number of threads for TensorFlow sessions.
- **Intra/Inter-Op Parallelism**: Configures the number of cores used for operations.

These settings can be adjusted through the Docker run command to improve performance and manage resource usage effectively.

### Alternatives to TensorFlow Serving

Several alternatives exist for deploying machine learning models:
- **BentoML**: A framework-independent library supporting multiple model formats.
- **Seldon Core**: Offers tools for managing model life cycles and is integrated with Kubernetes.
- **GraphPipe**: Supports TensorFlow and other models, providing client implementations for various languages.
- **Simple TensorFlow Serving**: Supports multiple frameworks and offers authentication and encrypted connections.
- **MLflow**: Manages model experiments and supports deployment to cloud platforms.
- **Ray Serve**: Framework agnostic, supports distributed computation setups.

### Cloud Deployment

Cloud providers like Google Cloud, AWS, and Microsoft Azure offer managed services for deploying machine learning models. These services simplify deployment and scaling but may incur higher costs and have limitations on model size and memory usage.

#### Example with Google Cloud AI Platform

Deploying a model on Google Cloud involves:
1. Uploading the model to a storage bucket.
2. Creating a model instance on the AI Platform.
3. Setting up a model version with appropriate compute resources.

Google Cloud allows configuration of scaling behaviors, either manual or autoscaling, to manage inference requests efficiently.

In summary, TensorFlow Serving and its alternatives provide flexible options for deploying machine learning models, with features and optimizations that cater to different performance and resource requirements. Cloud deployments offer ease of use but come with trade-offs in cost and flexibility.



### Summary

This text discusses deploying machine learning models using TensorFlow Serving on Google Cloud Platform (GCP) and managing model versions efficiently. It highlights the use of TensorFlow Serving, a scalable option for deploying models, which supports both REST and gRPC communication protocols. The text explains how to set up inference nodes in autoscaling mode and manage costs effectively by hosting each model version on individual nodes.

The deployment process involves configuring the model version endpoint, where multiple versions can run simultaneously. The default version can be set, routing any unspecified inference requests to it. The Google Cloud AI Platform uses TensorFlow Serving's model export format and similar data structures for payloads, with a key difference being the API connection. The setup requires installing the `google-api-python-client` library and creating a service object to handle API requests.

To request predictions, a payload is generated, and the Google Cloud API is used to connect to the model version. The response from the AI Platform includes prediction scores, similar to REST responses from TensorFlow Serving instances. This deployment method offers a quick setup without a full deployment infrastructure, but potential downsides include higher costs and limited endpoint optimization.

The text also covers model deployment using TFX Pipelines, where the TFX Pusher component pushes validated models to a location accessible by TensorFlow Serving. This setup supports continuous deployment by automatically loading new model versions from external storage.

For advanced deployments, the text discusses decoupling deployment cycles by using remote storage for models, which allows TensorFlow Serving to update models without redeploying containers. It provides examples of accessing private models from AWS S3 and GCP Buckets, detailing the necessary configurations and environment variables.

Model optimization is crucial for efficient deployments. The text outlines three methods: quantization (reducing weight precision), pruning (removing unnecessary weights), and distillation (training smaller models with the objectives of larger ones). These methods aim to create smaller models with faster inference times.

Nvidia's TensorRT is mentioned as a tool for quantizing models on Nvidia GPUs, optimizing inference by reducing numerical precision. This can be done post-training using TensorRT’s optimizer or `saved_model_cli`.

Overall, the text emphasizes efficient, scalable model deployment on cloud platforms, leveraging TensorFlow Serving and optimizing models for better performance and cost management.



### Summary

This chapter focuses on advanced model deployment using TensorFlow Serving, TensorRT, and TFLite, highlighting methods to optimize and deploy deep learning models efficiently.

#### TensorRT and TensorFlow Serving

TensorRT is limited to specific Nvidia GPUs like Tesla V100 and P4. It optimizes models for lower inference latencies when deployed on Nvidia hardware. The conversion process involves using `saved_model_cli` to transform models into a format compatible with TensorFlow Serving. The deployment is achieved using Docker with Nvidia runtime, ensuring the model is loaded efficiently.

#### TFLite Optimization

TFLite is ideal for optimizing models not running on Nvidia GPUs. Traditionally used for mobile and IoT devices, TFLite can now be integrated with TensorFlow Serving to reduce inference latency and memory usage. However, TensorFlow Serving support for TFLite is still experimental, and not all TensorFlow operations are supported. The conversion process involves loading a SavedModel, defining optimization goals, converting, and saving the model. Predefined optimization strategies include `DEFAULT`, `OPTIMIZE_FOR_LATENCY`, and `OPTIMIZE_FOR_SIZE`.

#### Serving TFLite Models

TensorFlow Serving can now read TFLite models with minimal configuration changes. This allows for low-latency, low-memory footprint deployments, suitable for mobile and edge devices like Android, iOS, ARM64 computers, microcontrollers, and IoT devices.

#### Monitoring with Prometheus

TensorFlow Serving supports monitoring through Prometheus, a tool for real-time event logging and alerting. By running Prometheus alongside TensorFlow Serving, metrics can be continuously pulled and analyzed. The setup involves configuring Prometheus to scrape metrics from TensorFlow Serving via REST endpoints.

#### Scaling with Kubernetes

For applications with high prediction request volumes, scaling TensorFlow Serving instances is crucial. Kubernetes can manage container replication, allowing deployments to scale efficiently. The example provided demonstrates deploying TensorFlow models using Kubernetes, leveraging Google Cloud for remote model storage.

#### Advanced Pipeline Concepts

The chapter introduces advanced pipeline setups, such as training multiple models simultaneously and exporting models for mobile deployments. By defining multiple `Trainer` components, different models can be trained with the same transformed data, facilitating comparisons and ensuring consistent updates across devices.

#### Further Reading

For more complex scenarios involving Kubernetes and Kubeflow, resources like "Kubernetes: Up and Running" and "Kubeflow Operations Guide" are recommended for deeper insights into deploying and scaling machine learning models.

Overall, the chapter provides a comprehensive guide to optimizing and deploying machine learning models using TensorFlow Serving, TFLite, and Kubernetes, ensuring efficient and scalable solutions for diverse deployment needs.



### Summary

This text explores advanced concepts in TensorFlow Extended (TFX), focusing on model deployment, conversion, and pipeline customization.

#### Model Deployment and Conversion

The text discusses how TFX pipelines can export models suitable for mobile and web deployment. By modifying the `run_fn` function, models can be converted to TFLite format, enabling deployment on edge or mobile devices. The TFLite model can be evaluated to ensure optimizations like quantization do not degrade performance. Additionally, models can be converted to TensorFlow.js format for deployment in web browsers and Node.js environments.

#### Warm Starting and Human in the Loop

Warm starting allows model training to begin from a previous checkpoint, useful for large models or when complying with GDPR by removing specific user data. The `Resolver` component retrieves the latest model for training continuation. The Human in the Loop component introduces manual model review within automated pipelines. A Slack notification component can request a data scientist's approval, integrating human decisions into the pipeline's audit trail, tracked through metadata.

#### Custom TFX Components

The text details building custom TFX components, emphasizing reusing existing components for flexibility. Custom components can ingest data, send notifications, or track additional audit information. The process involves defining component specifications (`ComponentSpec`), implementing executors, and potentially creating custom drivers for new inputs.

#### Example: Image Ingestion Component

An example demonstrates creating a custom component for ingesting JPEG images, converting them to TFRecord files for downstream processing. The component uses `ExternalArtifact` for input paths and `Examples` for outputs, showcasing the flexibility in defining component channels. The executor processes inputs to generate outputs, utilizing TFX classes to streamline implementation.

#### Slack Component Setup

To integrate the Slack component, a Slack bot token is required. The component posts messages to a Slack channel for model review, awaiting approval or rejection. This decision influences downstream components like the Pusher, which deploys models based on the Slack component's output.

#### Building Custom Components

The process involves defining inputs, outputs, and execution parameters in `ComponentSpec`. Executors handle data processing, while custom drivers manage unregistered inputs. The text suggests altering existing components by modifying executors to simplify development.

Overall, the text provides a comprehensive guide to enhancing TFX pipelines with model conversion, warm starting, human review, and custom component development, emphasizing flexibility and integration with existing tools and workflows.



### Summary

This text provides an in-depth guide on creating custom components in TensorFlow Extended (TFX) for machine learning pipelines, focusing on building a custom image ingestion component. The process involves using TFX utilities to handle artifacts, creating TFRecord files, and integrating components into a pipeline.

#### Key Concepts

1. **TFRecord Creation**: 
   - Use `TFRecordWriter` to write images into TFRecord data structures.
   - Utilize `artifact_utils` for managing artifact paths and URIs.

2. **Component Architecture**:
   - Components receive `input_dict`, `output_dict`, and `exec_properties`.
   - Use `BaseDriver` to manage input artifacts and register them in the metadata store.

3. **Custom Drivers**:
   - Implement `resolve_input_artifacts` in `BaseDriver` to handle input registration.
   - Print artifact information for debugging and verification.

4. **Component Assembly**:
   - Define `SPEC_CLASS`, `EXECUTOR_SPEC`, and `DRIVER_CLASS`.
   - Use `ImageIngestComponent` to tie together the component’s specification, executor, and driver.

5. **Execution and Integration**:
   - Implement the component in a TFX pipeline to process images and generate TFRecords.
   - Use downstream components like `StatisticsGen` to consume outputs.

6. **Efficiency and Scalability**:
   - Highlight the importance of efficient data ingestion, potentially using Apache Beam.
   - Discuss reusing existing components to simplify implementation and reduce errors.

7. **Advanced Features**:
   - Extend existing components by customizing executors.
   - Use `FileBasedExampleGen` for file-based ingestion, supporting split patterns and data conversion.

8. **Custom Executor**:
   - Define `image_to_example` using Apache Beam for efficient data processing.
   - Overwrite `GetInputSourceToExamplePTransform` to customize data transformation.

9. **Reusability**:
   - Encourage reusing component architectures to streamline development.
   - Leverage `FileBasedExampleGen` and Apache Beam for flexible and efficient ingestion.

10. **Orchestration Tools**:
    - Discuss orchestrators like Apache Beam, Apache Airflow, and Kubeflow Pipelines for managing pipeline execution.
    - Emphasize the role of orchestrators in automating and scheduling pipeline tasks.

This guide highlights the flexibility of TFX in creating custom components, the importance of efficient data handling, and the role of orchestration tools in managing complex machine learning pipelines.



### Overview

This text discusses the orchestration of machine learning pipelines using Apache Beam, Apache Airflow, and Kubeflow Pipelines, highlighting their strengths and limitations. It also provides guidance on converting interactive TensorFlow Extended (TFX) pipelines into production pipelines.

### Apache Beam

- **Integration with TFX**: Beam is already installed with TFX, making it a convenient choice for minimal installations. It supports distributed data processing and can be used with platforms like Google Cloud Dataflow.
- **Limitations**: Lacks advanced scheduling and monitoring tools found in Airflow and Kubeflow.
- **Debugging**: Useful for debugging pipelines before transitioning to more complex orchestrators.

### Apache Airflow

- **Existing Use**: Often used for data-loading tasks in companies. Extending its use to run pipelines avoids the need for new tools.
- **Partial Pipelines**: Supports executing partial pipelines, saving time if a failure occurs.
- **Setup and Execution**: Involves defining workflows using Directed Acyclic Graphs (DAGs) in Python. Airflow allows scheduling and monitoring workflows, making it ideal for TFX pipelines.

### Kubeflow Pipelines

- **Kubernetes Integration**: Suitable for users familiar with Kubernetes, offering advanced features like model lineage and artifact collections.
- **Scalability**: Supports scaling with state-of-the-art hardware and cloud providers.
- **Platform Dependency**: Running on Google’s AI Platform simplifies infrastructure but may lock users into a single cloud provider.

### Converting Interactive TFX Pipelines

- **Automation**: Interactive TFX pipelines require manual triggering of components. Converting to a production pipeline involves scripting the process.
- **Components**: Key components include ExampleGen, StatisticsGen, SchemaGen, ExampleValidator, Transform, Trainer, Resolver, Evaluator, and Pusher.
- **Script Example**: The script initializes components and configures the pipeline for different orchestrators using a function like `init_components`.

### Orchestration with Apache Beam

- **Setup**: Beam is simple and lacks features like graph visualizations. It can be used for debugging before using more complex setups.
- **Execution**: Involves setting up a Beam pipeline with components and executing it with `BeamDagRunner`.

### Orchestration with Apache Airflow

- **Workflow Automation**: Airflow automates workflows using DAGs and offers scheduling and monitoring capabilities.
- **Installation**: Requires setting up an Airflow environment and initializing a database for task status.
- **Configuration**: Involves defining project-specific settings, task definitions, and task dependencies.
- **Example Pipeline**: A basic Airflow pipeline is demonstrated, showing how to define tasks and their dependencies.

### Conclusion

Each orchestration tool has unique advantages: Beam for simplicity and debugging, Airflow for scheduling and monitoring, and Kubeflow for advanced Kubernetes integration. The choice depends on existing infrastructure and specific needs.



### Orchestrating TFX Pipelines with Apache Airflow

Apache Airflow is a powerful tool for orchestrating TFX pipelines, providing features like a user interface and scheduling capabilities. To set up a TFX pipeline with Airflow, you replace the BeamDagRunner with AirflowDagRunner and configure Apache Airflow settings. The pipeline files should be located in the `~/airflow/dags` folder, and configurations such as scheduling are provided in the `airflow_config`.

The process involves initializing components, defining the number of workers, and executing the pipeline with AirflowDagRunner. This setup allows for easy monitoring and management of tasks through Airflow's UI. The UI offers a graph view to visualize component dependencies and progress, and logs can be accessed by clicking on individual components.

### Orchestrating TFX Pipelines with Kubeflow Pipelines

Kubeflow Pipelines is designed for running machine learning tasks within Kubernetes clusters, offering a scalable solution. It provides features like Pipeline Lineage Browser, TensorBoard Integration, and visualization capabilities. The setup is more complex than Airflow but leverages Kubernetes' autoscaling and resource management.

Kubeflow Pipelines uses a domain-specific language (DSL) for flexibility in setting up pipeline steps. It installs tools including a UI, workflow controller, MySQL database, and ML MetadataStore. Each pipeline component runs as its own Kubernetes pod, connecting with a central metadata store and storing outputs as artifacts.

### Setup and Execution

For Kubeflow Pipelines, a Kubernetes cluster with sufficient resources is required. The installation process involves executing commands to set up the standalone application. Once installed, the UI can be accessed via a port forward or a public domain for managed installations.

The workflow from TFX script to Kubeflow Pipelines involves converting Python TFX scripts into Argo instructions, which Kubeflow Pipelines executes. Each TFX component runs in a separate Kubernetes pod, requiring access to external storage for data exchange.

### Conclusion

Both Airflow and Kubeflow Pipelines offer robust solutions for orchestrating machine learning pipelines. Airflow is suitable for setups that benefit from a lightweight UI and existing infrastructure, while Kubeflow Pipelines is ideal for scalable, Kubernetes-based environments. The choice between them depends on specific use cases and infrastructure requirements.



### Overview

This text provides a comprehensive guide to orchestrating TFX (TensorFlow Extended) pipelines using Kubeflow Pipelines on a Kubernetes cluster. It covers setting up cloud credentials, configuring file paths, and generating Argo YAML instructions for pipeline execution.

### Setting Up TFX Components

- **Persistent Volume Setup**: Define paths for raw training data, pipeline artifacts, and trained models. Mount persistent volumes to store and access data.
- **Cloud Storage Option**: Use cloud storage buckets for data and module files.

### Configuring KubeflowDagRunner

- **Metadata Configuration**: Use `get_default_kubeflow_metadata_config()` to obtain MySQL database info. Override with managed database details if needed.
- **TFX Image**: Specify a custom image URI or use the default TFX version image.
- **Pipeline Operator Functions**: Customize execution settings like memory limits and GPU requests using `pipeline_operator_funcs`.

### OpFunc Functions

- **Purpose**: Set cluster-specific details, such as memory requirements and GPU allocation, for pipeline execution.
- **Examples**: Request minimum memory (4GB) and GPUs for TFX components.

### Executing the Pipeline

- **Pipeline Initialization**: Use `init_components` and `init_pipeline` to set up components and generate Argo configurations.
- **Kubeflow Pipelines Dashboard**: Upload Argo configuration, visualize dependencies, and create pipeline runs. Supports recurring runs and experiments.

### Monitoring and Troubleshooting

- **Pipeline Status**: Use `kubectl` to check pod statuses and retrieve logs for troubleshooting.
- **Component Inspection**: Check logs for failed components and resolve issues, such as missing libraries.

### TFX CLI

- **Alternative to UI**: Create and run pipelines programmatically using TFX CLI.

### Useful Features of Kubeflow Pipelines

- **Restart Failed Pipelines**: Resume from the last failure without rerunning successful components.
- **Recurring Runs**: Schedule pipelines to run at regular intervals.
- **Collaboration and Review**: Use visualizations and TensorBoard for data validation and model training review.

### Auditing with Lineage Explorer

- **Audit Trails**: Retrace data and hyperparameters used in model creation. Provides a UI for querying ML MetadataStore data.

### Google Cloud AI Platform Integration

- **Simplified Setup**: Use Google Cloud's AI Platform for easier integration and management of Kubeflow Pipelines.
- **Pipeline Setup**: Configure pipelines similarly to KubeflowDagRunner, with options for using Google Storage and AI Platform Jobs for scaling.

### Conclusion

Kubeflow Pipelines offer powerful orchestration for machine learning workflows, providing features for execution, monitoring, and auditing. Integration with cloud platforms like Google Cloud AI Platform simplifies setup and enhances scalability.



### Summary

In modern machine learning workflows, using Google Cloud Storage buckets can streamline data exchange processes within the Google Cloud ecosystem. This allows for easy data uploads and reviews through the GCP web interface or the gcloud SDK. Data paths are specified similarly to file paths, enabling efficient management of input and output data, such as Python modules, training data, and trained models.

For scalable model training, leveraging Google AI Platform jobs is beneficial, especially when utilizing GPUs or TPUs. Configuring the AI Platform for training involves setting project and region details, and specifying hardware configurations like `BASIC_GPU`. The Trainer component in the pipeline is adjusted to observe these configurations, allowing distributed training and access to accelerated hardware.

Deploying models through AI Platform endpoints facilitates scalability during inference spikes. This setup bypasses the need for TensorFlow Serving instances by configuring the Pusher component with AI Platform details. However, deployment size limitations exist, with models restricted to a maximum size of 512 MB.

Google Cloud’s Dataflow can enhance data processing scalability, moving beyond the limitations of single-instance execution. By configuring Apache Beam with DataflowRunner, compute instances are dynamically managed, optimizing resource usage and reducing execution time.

Executing pipelines with Kubeflow Pipelines on Google Cloud integrates seamlessly with TensorBoard and supports recurring runs, providing a robust orchestration solution. The setup is adaptable to various managed Kubernetes services, enhancing the flexibility of pipeline deployment.

Feedback loops are crucial for maintaining and improving machine learning models. These loops facilitate the collection of new data, adapting to changes in data distribution and model drift. Feedback can be explicit, such as user ratings, or implicit, like user interactions. However, feedback loops can have negative consequences, such as reinforcing biases or learning from incorrect predictions. Careful monitoring and human oversight are necessary to mitigate these risks.

Real-world examples like Netflix’s recommendation system illustrate effective feedback loops, where user interactions refine model predictions. Conversely, negative feedback loops, such as Microsoft’s TAY bot, highlight potential pitfalls where models learn undesirable behaviors from user interactions.

In summary, integrating feedback loops into machine learning pipelines can enhance model performance and user engagement, but must be managed carefully to avoid amplifying biases or errors. Continuous monitoring and strategic feedback collection are essential for sustaining model efficacy and aligning with business goals.



# Summary

Feedback loops are essential in machine learning pipelines to enhance system performance and accuracy. They involve collecting user feedback, which can be gathered through various methods:

1. **Users Take Action**: Users interact with predictions, such as clicking on recommended products, providing implicit feedback. This data must be aggregated over many users to improve model accuracy.

2. **Users Rate Predictions**: Users provide explicit feedback by rating predictions, useful for personalization but often lacking specificity about what makes a prediction good or bad.

3. **Users Correct Predictions**: Users verify or correct predictions, providing high-quality data. This method works well when user and system objectives align, such as in banking apps for check deposits.

4. **Crowdsourcing Annotations**: Useful for unlabelled data, this involves using platforms like AWS Mechanical Turk to label data. It allows specificity but may not suit private data and can be costly.

5. **Expert Annotations**: Similar to crowdsourcing but involves domain experts. It's suitable for data requiring specialist knowledge or when mistakes have high consequences.

6. **Automatic Feedback**: Some systems collect feedback automatically based on future events confirming prediction accuracy. While no human input is needed, care is required to avoid system perturbations.

**Tracking Feedback Loops**: Feedback must be tracked carefully to ensure it improves the model without degrading performance. Each prediction should have a tracking ID to link feedback to specific predictions. Explicit feedback can be binary or involve reclassification, while implicit feedback often requires aggregation over many interactions.

**Challenges and Considerations**: Feedback loops can reinforce biases if not monitored carefully. It's crucial to align feedback methods with model goals and ensure feedback reflects real-world data. Collaboration with designers and UX experts is necessary to integrate feedback systems effectively and maintain user engagement.

**Data Privacy in Machine Learning**: Privacy-preserving techniques like differential privacy, federated learning, and encrypted machine learning are becoming integral. These methods help balance data utility and privacy, addressing legal and ethical concerns. Simplifying data collection by only gathering necessary information can enhance privacy. However, this must be balanced with the need for accurate models and bias detection.

**Conclusion**: Feedback loops and data privacy are critical for evolving machine learning systems. They require thoughtful implementation and ongoing monitoring to ensure models remain effective and fair while respecting user privacy.



### Summary

**Privacy and Sensitive Data**  
Personally Identifiable Information (PII) includes data like names, emails, and addresses, which must be kept private. PII can appear in unexpected places, such as feedback or customer service data. Images may also be PII. Legal standards often govern the handling of this data, and consulting a privacy team is advisable. Sensitive data, such as health or financial information, requires careful handling to prevent harm if leaked. Quasi-identifiers, like location or transaction data, can uniquely identify individuals when combined, raising privacy concerns.

**Differential Privacy (DP)**  
DP is a method to ensure that the inclusion of an individual's data in a dataset does not significantly affect the outcome of any analysis. It involves adding noise to data queries or transformations, providing a privacy guarantee. DP is achieved by ensuring that the removal of one person's data does not change the dataset's results. Randomized response is a simple DP technique, useful in surveys with sensitive questions, allowing for deniability while maintaining data utility.

**Local and Global DP**  
Local DP adds noise at the individual level, maintaining privacy between individuals and data collectors. Global DP adds noise to the entire dataset, requiring trust in the data collector but offering better accuracy for similar privacy guarantees. Epsilon (ϵ) and delta (δ) are parameters used to measure the privacy guarantee, with lower values indicating stronger privacy. The choice of ϵ depends on the use case, balancing privacy and data utility.

**Differential Privacy in Machine Learning**  
DP can be integrated into machine learning pipelines. TensorFlow Privacy (TFP) is an example of global DP, adding noise during model training. This ensures private data is not exposed, while maintaining model accuracy. The optimizer is modified to include noise in gradient updates, preventing overfitting and ensuring privacy.

**Federated Learning (FL)**  
FL distributes model training across devices, keeping raw data local. This approach is useful for mobile devices or sensitive data distributed across multiple owners. FL involves training models on devices and aggregating weights on a central server, enhancing privacy. Secure aggregation prevents inspection of individual model weights. Incorporating DP into FL limits individual contributions to the final model, maintaining accuracy with a large user base.

**TensorFlow Federated and PySyft**  
TensorFlow Federated (TFF) simulates FL, allowing research on federated algorithms. PySyft is an open-source platform for privacy-preserving machine learning, supporting these principles.

In summary, handling PII and sensitive data requires careful consideration of privacy methods like DP and FL. These techniques offer frameworks for protecting individual privacy while maintaining data utility in machine learning applications.



# Summary

The OpenMined organization focuses on implementing federated learning (FL) using secure multiparty computation (SMPC) to aggregate data. Initially supporting PyTorch models, it now includes a TensorFlow version. Encrypted machine learning is gaining attention, utilizing cryptographic techniques like homomorphic encryption (HE) and SMPC. HE allows computations on encrypted data without decryption, while SMPC enables multiple parties to compute on shared data without revealing individual inputs. Despite their benefits, these methods are computationally expensive, with HE causing significant slowdowns and SMPC incurring networking overheads.

TF Encrypted (TFE), developed by Cape Privacy, provides encrypted machine learning for TensorFlow, supporting scenarios where data remains encrypted during model training. This is crucial when data privacy is necessary, such as when multiple parties own data but cannot share it. TFE allows encrypted model training and serving encrypted predictions, ensuring user privacy by encrypting data and predictions.

Other privacy techniques include scrubbing identifiable information and k-anonymity, though the latter can reduce model accuracy. When handling personal data, choosing the right privacy solution depends on trust levels, model performance requirements, and user consent. Privacy-preserving machine learning is evolving, with ongoing research and open-source projects like PySyft and TFE contributing to advancements.

Model experiment tracking is essential for efficient data science, allowing teams to evaluate model updates and maintain audit trails. Tools like Weights and Biases facilitate this process. Future machine learning pipelines are expected to integrate privacy, fairness, and federated learning, and measure carbon emissions. They will also adapt to data streams and support various machine learning frameworks.

Model release management in machine learning requires standardization, with versioning practices similar to software engineering. Testing machine learning models, including inference time and resource consumption, is becoming vital. Continuous integration and deployment (CI/CD) systems are expected to streamline machine learning workflows, incorporating data versioning and deployment rollbacks.

The machine learning engineering community is crucial for sharing best practices and developing the field. The book emphasizes creating automated, scalable, and reproducible pipelines, freeing data scientists for experimentation and ensuring adaptability to large data volumes.




# Summary of Infrastructure for Machine Learning

## Introduction to Containers

Containers are essential for managing dependencies and resources in machine learning pipelines. They create isolated environments with dedicated libraries and can control resources like CPU and memory. Docker is a popular tool for managing containers, allowing developers to build, package, and deploy containers efficiently. Containers help resolve dependency conflicts by pre-packaging code with specific module versions.

## Docker Basics

Docker images form the basis of containers, built from a series of layers that include changes to the root filesystem and execution parameters. These layers allow for efficient image creation and modification. Docker images are built using a Dockerfile, which includes key commands like `FROM`, `RUN`, `COPY`, `ENV`, and `CMD`.

### Building a Docker Image

To build a Docker image, create a directory with a Dockerfile specifying the base image and necessary commands. Use `docker build` to create the image and `docker run` to execute it. Docker images can be published to a registry like DockerHub for easy sharing and deployment.

## Docker CLI and Compose

The Docker CLI provides commands to interact with images and containers, such as `docker run`, `docker ps`, `docker images`, and `docker logs`. Docker Compose simplifies managing complex container configurations through a `docker-compose.yaml` file, allowing for container linking and shared resources.

## Introduction to Kubernetes

Kubernetes is a tool for scaling and managing containers across multiple machines. It organizes containers into clusters, nodes, and pods, optimizing resource allocation and communication. Kubernetes can run on various cloud platforms and includes key concepts like services, volumes, and namespaces.

### Kubernetes CLI and Minikube

The Kubernetes CLI, `kubectl`, is used for managing resources within a Kubernetes cluster. Minikube provides a simple local Kubernetes environment for development. Commands like `kubectl get pods` and `kubectl apply` are used to interact with cluster resources.

### Defining Kubernetes Resources

Kubernetes resources are defined in YAML files, specifying `apiVersion`, `kind`, `metadata`, and `spec`. These files outline the configuration and behavior of resources like pods and services, allowing for efficient management and scaling of containerized applications.

This summary provides an overview of essential tools and concepts in infrastructure for machine learning, focusing on Docker and Kubernetes for container management and scalability.



### Deploying Jupyter Notebook on Kubernetes

This guide demonstrates deploying a Jupyter Notebook using Minikube and Kubernetes. The process involves creating a persistent volume for notebooks and a NodePort service for access.

1. **Docker Image and Port**: Use the `jupyter/tensorflow-notebook` Docker image, which listens on port 8888.

2. **Persistent Volume Claim (PVC)**: Create a `pvc.yaml` file to ensure data persistence:
   yaml
   kind: PersistentVolumeClaim
   apiVersion: v1
   metadata:
     name: notebooks
   spec:
     accessModes:
       - ReadWriteOnce
     resources:
       requests:
         storage: 3Gi
   
   Apply with `kubectl apply -f pvc.yaml`.

3. **Deployment Creation**: Define a deployment in a `.yaml` file to mount the volume and expose port 8888:
   yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: jupyter
     labels:
       app: jupyter
   spec:
     selector:
       matchLabels:
         app: jupyter
     template:
       metadata:
         labels:
           app: jupyter
       spec:
         containers:
           - image: jupyter/tensorflow-notebook
             name: jupyter
             ports:
               - containerPort: 8888
             volumeMounts:
               - name: notebooks
                 mountPath: /home/jovyan
         volumes:
           - name: notebooks
             persistentVolumeClaim:
               claimName: notebooks
   
   Apply with `kubectl apply -f <deployment-file>.yaml`.

4. **Accessing the Notebook**: Use `kubectl logs` to retrieve the connection token and `kubectl port-forward` to access the notebook locally at `http://localhost:8888`.

5. **NodePort Service**: Create a service for external access:
   yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: jupyter-service
     labels:
       app: jupyter
   spec:
     ports:
       - port: 8888
         nodePort: 30888
     selector:
       app: jupyter
     type: NodePort
   
   Access the notebook using the Minikube IP and NodePort.

### Setting Up a Kubernetes Cluster on Google Cloud

This section outlines creating a Kubernetes cluster on Google Cloud.

1. **Prerequisites**: Ensure you have a Google Cloud account, `kubectl`, and `gcloud` installed.

2. **Project Setup**: Authenticate and configure your Google Cloud project:
   bash
   gcloud auth login
   gcloud components update
   gcloud config set project <PROJECT_ID>
   gcloud config set compute/zone <GCP_REGION>
   gcloud services enable container.googleapis.com
   

3. **Cluster Creation**: Define environment variables and create a cluster:
   bash
   export CLUSTER_NAME=kfp-oreilly-book
   export POOL_NAME=kfp-pool
   export MAX_NODES=5
   export NUM_NODES=3
   export MIN_NODES=0
   export SERVICE_ACCOUNT=service-account@oreilly-book.iam.gserviceaccount.com

   gcloud container clusters create $CLUSTER_NAME \
     --zone $GCP_REGION \
     --machine-type n1-standard-4 \
     --enable-autoscaling \
     --min-nodes=$MIN_NODES \
     --num-nodes=$NUM_NODES \
     --max-nodes=$MAX_NODES \
     --service-account=$SERVICE_ACCOUNT
   

4. **Accessing the Cluster**: Update `kubectl` configuration to access the cluster:
   bash
   gcloud container clusters get-credentials $CLUSTER_NAME --zone $GCP_REGION
   

5. **Persistent Volumes**: Configure persistent volumes for data exchange:
   yaml
   apiVersion: v1
   kind: PersistentVolume
   metadata:
     name: tfx-pv
   spec:
     accessModes:
       - ReadWriteOnce
     capacity:
       storage: 20Gi
   

This guide provides a foundational overview of deploying applications on Kubernetes and setting up a cluster on Google Cloud, emphasizing persistent storage and external access configurations.



## Overview

This text provides a detailed guide on using TFX (TensorFlow Extended) and Kubeflow Pipelines to manage machine learning workflows, focusing on data management, pipeline orchestration, and deployment.

## Data Management and Transfer

Data is initially transferred to a Persistent Volume (PV) using Kubernetes commands. Directories are created within the PV for components and output, and necessary files like `module.py` and `consumer_complaints.csv` are copied into the PV. Once data transfer is complete, the data-access pod can be deleted.

## TFX Command-Line Interface

TFX CLI is under active development and helps manage TFX projects using predefined templates. It requires the Kubeflow Pipelines SDK and Skaffold for building and deploying Kubernetes applications. Installation varies by OS, and users must ensure Skaffold's path is added to their terminal environment.

### TFX Templates

TFX provides project templates for organizing machine learning pipeline projects. The taxi cab example can be used as a template, and users are advised to update configuration files like `config.py` with their GCS bucket details.

## Publishing Pipelines

Pipelines can be published using TFX CLI, requiring environment variables for the GCP project, TFX container image path, and Kubeflow Pipelines endpoint URL. The `tfx pipeline create` command builds and publishes the pipeline, creating necessary files like `Dockerfile` and `build.yaml`.

## Managing Pipeline Runs

Pipeline runs can be initiated, monitored, and managed using TFX CLI commands. Users can create, list, check the status, stop, and delete pipeline runs. The CLI supports Kubeflow Pipelines, Apache Airflow, and Apache Beam orchestrators.

## Additional Tools and Concepts

- **Apache Airflow and Beam**: Both are used for orchestrating TFX pipelines, with Airflow offering task definitions and dependencies, and Beam supporting data ingestion.
- **Data Validation**: TFDV is used to validate data, identify biases, and ensure data integrity.
- **Model Deployment**: Models can be deployed on cloud platforms like GCP, with options for serving via TensorFlow Serving and using gRPC or REST APIs.
- **Data Privacy**: Techniques like differential privacy and federated learning are discussed for ensuring data security.

## Conclusion

The text emphasizes the importance of structured workflows in machine learning, leveraging TFX, Kubeflow, and cloud platforms for efficient model management and deployment.



### Summary

The text provides an extensive overview of machine learning (ML) pipelines, focusing on deployment, orchestration, and optimization techniques. It covers various tools and frameworks, including TensorFlow Extended (TFX), Kubeflow Pipelines, and TensorFlow Serving, highlighting their roles in ML model management and deployment.

#### Machine Learning Pipelines

- **Architecture and Benefits**: ML pipelines automate and streamline the process of model development, training, and deployment. They enhance reproducibility, scalability, and efficiency in ML projects.
- **Components**: Key components include data ingestion, preprocessing, model training, validation, and deployment. TFX is a prominent framework for building and managing these pipelines.

#### Model Deployment

- **TensorFlow Serving**: A flexible, high-performance serving system for ML models, supporting various deployment strategies, including A/B testing, batch inference, and model versioning.
- **Kubernetes and Docker**: Used for containerizing and deploying applications, providing scalability and ease of management in cloud environments.
- **Alternatives**: Other deployment options include Seldon and MLflow, each offering unique features for model serving.

#### Orchestration Tools

- **Kubeflow Pipelines**: Facilitates the orchestration of ML workflows, integrating with Google Cloud AI Platform for seamless deployment.
- **Apache Airflow and Beam**: Provide additional orchestration capabilities, allowing for complex workflow management and data processing.

#### Hyperparameter Tuning and Optimization

- **Strategies**: Includes grid search, random search, and advanced algorithms like Hyperband and Keras Tuner. These methods optimize model performance by fine-tuning parameters.
- **Model Optimization**: Techniques like pruning, quantization, and distillation are used to enhance model efficiency and reduce deployment size.

#### Data Privacy and Security

- **Privacy-Preserving Techniques**: Methods such as homomorphic encryption, differential privacy, and secure multiparty computation ensure data security and compliance with legal standards.
- **Data Validation**: Tools like TensorFlow Data Validation (TFDV) and Fairness Indicators are used to maintain data integrity and assess model fairness.

#### Model Analysis and Explainability

- **Metrics and Validation**: Incorporates classification and regression metrics, mean absolute error, and mean squared error to evaluate model performance.
- **Explainability Tools**: LIME, SHAP, and partial dependence plots (PDPs) provide insights into model decisions, enhancing transparency and trust.

#### Advanced Topics

- **Human in the Loop**: Integrates human feedback into the ML process to improve model accuracy and adaptability.
- **Federated Learning**: TensorFlow Federated (TFF) supports decentralized model training, enhancing privacy and reducing data transfer.

#### Authors and Context

- The authors, Hannes Hapke and Catherine Nelson, are senior data scientists with expertise in ML infrastructure and privacy-preserving machine learning. Their work spans industries like healthcare, retail, and energy, contributing to advancements in ML pipelines and model deployment.

This summary encapsulates the critical aspects of building and deploying machine learning pipelines, emphasizing the importance of automation, scalability, and security in modern ML practices.



The cover illustration for this publication is by Karen Montgomery, inspired by an engraving from Wood’s Illustrated Natural History. The design features various fonts: Gilroy Semibold and Guardian Sans for the cover, Adobe Minion Pro for the text, Adobe Myriad Condensed for headings, and Dalton Maag’s Ubuntu Mono for code. O’Reilly Media, Inc., known for its educational resources, offers an extensive range of books, videos, and online training through its platform, in collaboration with over 200 partners. For more information, visit oreilly.com/online-learning. ©2019 O’Reilly Media, Inc.
