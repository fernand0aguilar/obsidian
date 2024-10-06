
**Low-Code AI: A Practical Project-Driven Introduction to Machine Learning**

*Authors: Gwendolyn Stripling, PhD & Michael Abel, PhD*

**Overview**

"Low-Code AI" is a comprehensive guide designed to introduce machine learning (ML) through a project-driven approach, focusing on no-code and low-code solutions. The book aims to make ML accessible to business analysts, data analysts, and aspiring citizen data scientists by using real-world datasets and practical examples across various industries such as retail, healthcare, financial services, energy, and telecommunications.

**Key Concepts and Approach**

The book emphasizes a data-first and use-case-driven methodology to teach ML concepts. It covers:
- Loading and analyzing data
- Feeding data into ML models
- Building, training, and testing models
- Deploying models into production

Three learning paths are offered:
1. **No-Code ML** using AutoML
2. **Low-Code ML** using BigQuery ML
3. **Custom Code** using scikit-learn and Keras

**Learning Outcomes**

Readers will learn to:
- Distinguish between structured and unstructured data
- Visualize and preprocess data for ML models
- Differentiate between regression and classification models
- Compare ML model types and architectures
- Design, implement, and tune ML models
- Manage data using GitHub

**Authors' Expertise**

Gwendolyn Stripling, PhD, is a lead AI/ML content developer at Google Cloud Learning Services, known for developing popular generative AI courses. Michael Abel, PhD, is a technical lead for the Specialized Training program at Google Cloud, with a background in data and ML training.

**Audience and Accessibility**

The book targets business analysts, aspiring data scientists, and those interested in integrating ML into their work without extensive coding experience. It serves as an entry point for those considering a career in data science or ML engineering.

**Praise and Reception**

The book has been praised for its balance between practical low-code solutions and in-depth explanations. It is recommended for its accessibility and ability to empower readers to harness AI for data-driven decision-making.

**Tools and Techniques**

The book introduces various tools and techniques, including:
- Jupyter Notebooks
- Google Colaboratory
- SQL in BigQuery
- Scikit-learn and Keras for custom model training

**Use Cases and Projects**

The book includes detailed projects and use cases, such as:
- Product pricing in retail
- Heart disease prediction in healthcare
- Fraud detection in financial services
- Customer churn prediction in telecommunications

Each project follows a structured workflow, from data exploration to model evaluation and deployment.

**Conclusion**

"Low-Code AI" is a valuable resource for those looking to start their journey in AI and ML, offering practical insights and tools to build foundational skills in this rapidly evolving field.



# Summary

## Purpose and Scope

This book serves as an introductory guide for aspiring machine learning (ML) practitioners, focusing on practical applications rather than in-depth theoretical exploration. It emphasizes structured data applications, which are prevalent in business and industry, while providing resources for further study on unstructured data.

## Tools and Techniques

The book highlights essential Python tools such as NumPy, Pandas, scikit-learn, and TensorFlow for ML projects, using Jupyter Notebooks and Google Colab for interactive coding. It also explores Google Cloud services like Vertex AI AutoML and BigQuery for no-code ML model training and SQL data analysis. Readers are encouraged to explore similar tools from other cloud providers like AWS and Microsoft Azure.

## Learning Approach

The book is designed to help readers implement ML projects by focusing on business use cases. It provides a practical introduction to ML workflows, emphasizing the importance of defining a clear business problem and understanding the data needed to solve it.

## ML Workflow

The ML workflow consists of several key steps:

1. **Defining the Business Objective**: Start with a clear problem statement to guide data collection and preparation. This step involves identifying the ML category (e.g., regression, classification) that suits the problem.

2. **Data Collection**: Collect data from various sources, including cloud storage and GitHub, considering both structured and unstructured formats. The challenge lies in integrating data from diverse systems and ensuring it aligns with the business problem.

3. **Data Preprocessing**: Address data issues such as missing values, duplicates, and outliers to prepare the data for analysis.

## Business Use Cases

The book provides real-world examples of ML applications, such as predicting customer churn, increasing sales, and improving cybersecurity. Each example illustrates how different data sources and ML techniques can be applied to solve specific business challenges.

## No-Code and Low-Code Approaches

A no-code approach allows domain experts to develop ML models without programming, while a low-code approach facilitates rapid development with minimal coding. Both strategies enable faster implementation of ML solutions by leveraging AutoML tools.

## Additional Resources

The book offers downloadable supplemental materials, including code examples and exercises, to support learning. It encourages readers to explore additional documentation and resources for deeper understanding.

## Acknowledgments

The authors express gratitude to their colleagues, managers, and the O’Reilly team for their support and contributions to the book. Personal acknowledgments highlight the support of family and friends during the writing process.

## Contact and Support

Readers can find further information, errata, and contact details on the book's web page. O’Reilly Media provides various channels for support and updates, including their online learning platform.




Data preprocessing is crucial in machine learning (ML) to handle raw, inconsistent data, often filled with assumptions like normal distribution. Normalization, a technique to adjust data to a common scale, is essential for effective ML model training but can be problematic with outliers. Exploratory Data Analysis (EDA) helps identify trends, patterns, and correlations, forming a basis for feature selection. Feature engineering, creating new features from existing data, is the final step before selecting the most relevant features for the ML problem.

Model selection involves choosing the right algorithm based on the problem type, such as regression for continuous outputs or classification for discrete outputs. AutoML, a no-code solution, automates model selection, training, and evaluation, making it accessible for quick experiments and prototypes. Model training involves feeding data into an algorithm to detect patterns, while evaluation uses a validation dataset to measure generalization to new data. Testing assesses model performance with unseen data, ensuring predictions can be generalized.

Deployment involves integrating the trained model into a production environment, often using an API for real-time data capture. Post-deployment, models require monitoring for performance consistency, addressing issues like data drift—changes in data patterns that necessitate model retraining. This maintenance ensures alignment with business goals.

The ML workflow consists of four phases: decision-making, data processing, modeling, and deployment. Each phase can leverage AutoML or low-code AI for efficiency. The workflow is data-driven, guiding the implementation of ML solutions to real-world problems. Understanding the types of ML problems and appropriate algorithms is crucial for effective model development.

The text also outlines various use cases across sectors like healthcare, retail, and finance, illustrating ML applications. These include product pricing strategies, heart disease prevention campaigns, energy consumption outreach, media sales predictions, and fraud detection. Each use case demonstrates different aspects of data preprocessing, feature engineering, and model deployment.

Overall, ML relies on structured workflows and data-driven decision-making to address complex problems, with tools like AutoML simplifying the process. Regular monitoring and maintenance are essential to adapt to changing data and ensure models remain effective.



### Overview of Projects and Use Cases

1. **Fraud Detection in Mobile Payments**: The goal is to identify fraudulent transactions in a mobile payment service. Despite existing protections, some fraud slips through, impacting users. The dataset simulates user behavior and fraud. AutoML is chosen as the ML framework due to the lack of programming knowledge.

2. **Energy Production Prediction**: This project aims to predict the net hourly electrical energy output of a combined cycle power plant (CCPP) based on weather conditions. The dataset spans six years and lacks exact hourly timestamps, preventing time-series analysis. Google’s BigQuery Machine Learning is used due to existing SQL knowledge.

3. **Telecommunications Customer Churn Prediction**: The objective is to predict customer churn for a telecommunications company. The dataset includes numeric and categorical variables. The user, familiar with Python and AutoML, seeks more control using scikit-learn and Keras.

4. **Automotive Auction Price Prediction**: The focus is on improving an ML model predicting used car auction prices. The initial model, a linear regression in scikit-learn, needs enhancement. Tools like scikit-learn, Keras, and BigQuery ML are explored for better performance.

### Data Types and Processing

- **Quantitative vs. Qualitative Data**: Quantitative data is numerical, while qualitative data is descriptive. ML models require qualitative data to be preprocessed into quantitative form.

- **Structured, Unstructured, and Semistructured Data**: 
  - Structured data is well-organized, often in databases (e.g., customer records).
  - Unstructured data lacks a predefined format (e.g., social media posts).
  - Semistructured data includes elements of both, like emails with headers and bodies.

- **Data File Types**: Common formats include text (.txt, .csv), spreadsheet (.xls), image (.jpg), audio (.mp3), and video (.mp4) files.

- **Data Processing Modes**:
  - **Batch Processing**: Data is collected and processed later, suitable for large datasets.
  - **Real-time Processing**: Data is processed as it is received, ideal for immediate needs like fraud detection.
  - **Continuous vs. Periodic Processing**: Continuous is ongoing, while periodic occurs at intervals.

### Tools for Data Science Projects

- **GitHub**: A platform for storing code and data, facilitating collaboration through version control, pull requests, and issue tracking.

- **Google Colaboratory (Colab)**: A cloud-based Jupyter Notebook service requiring no setup, providing resources like GPUs. It allows for code execution in a web browser and integrates with Google Drive for easy sharing.

### Setting Up Projects

- **Creating GitHub Repositories**: Involves setting up a repo with a README.md file for project description and selecting visibility settings.

- **Using Colab for Low-Code AI Projects**: Colab simplifies Python learning and project execution without installation, offering accessibility, affordability, and ease of use.

- **Importing Libraries in Colab**: Example of using Pandas for data analysis, showcasing Colab’s functionality for executing Python code in a cloud environment.



In this chapter, the focus is on using Python libraries and tools for data analysis and machine learning, specifically Pandas and Google Colab. The process begins with importing a dataset from a URL into a Pandas DataFrame, a two-dimensional data structure similar to a spreadsheet, which allows for easy data manipulation and analysis. The dataset used is "Heart Disease Mortality Data Among US Adults" from data.gov.

Once the dataset is imported, the first five rows are displayed using `heart_df.head()`. The `.info()` method is used to obtain information about the dataset, including the number of columns, data types, and memory usage. This reveals 15 string object columns and 4 numeric columns. Data validation is emphasized as a best practice, especially when importing data from a URL. This involves downloading the CSV file, uploading it to the Colab notebook, and comparing it with the imported data to ensure consistency.

Several data quality issues are identified, such as missing values and incorrect data types. Missing values in datasets can be handled through deletion or imputation techniques. Deletion involves removing rows or columns with missing values, while imputation fills in missing values using methods like mean, median, mode, or regression imputation. Incorrect data types, like the Year column being an int64 instead of a string, need to be addressed for accurate data analysis.

Exploratory data analysis is conducted using Seaborn's violin plot to visualize the distribution of the `Stratification2` feature. This helps identify outliers and understand the data distribution. The chapter concludes with saving the notebook to GitHub, ensuring version control and easy access.

Moving to machine learning, the chapter introduces AutoML frameworks, which simplify the development of ML models by automating tasks such as feature selection and model deployment. AutoML is particularly useful for non-coders, providing a graphical user interface (GUI) to build and train models without writing code. Google’s Vertex AI is highlighted as a platform that supports various model types, including binary classification, multi-class classification, regression, and forecasting.

The process of using Vertex AI involves selecting the appropriate model type based on the dataset and objective, such as regression for predicting continuous values like total kilowatt-hours (kWh). The platform also provides options for data transformation, allowing users to customize features, such as converting zip codes from numeric to categorical.

Overall, the chapter emphasizes the importance of data validation, handling missing values, and leveraging AutoML frameworks for efficient and accurate machine learning model development.



## Summary

AutoML (Automated Machine Learning) simplifies the process of building machine learning models by automating complex tasks, allowing users to develop models without writing code. It is particularly beneficial for handling large datasets and complex model objectives, such as image and video data, which can significantly impact training time. AutoML leverages model feature attribution, using methods like the sampled Shapley method, to determine the impact of individual features on model training.

### How AutoML Works

AutoML streamlines machine learning workflows by eliminating the need for manual setup and coding. Users can upload data directly into platforms like Vertex AI without configuring environments or installing libraries. Tasks such as data loading, dataset splitting, and feature engineering, including one-hot encoding of categorical variables, are automated. This reduces the complexity involved in constructing models, especially neural networks, which require knowledge of layers, nodes, and activation functions.

### Benefits of AutoML

AutoML is part of the Machine Learning as a Service (MLaaS) platform offered by major cloud providers like Google, Amazon, and Microsoft. It provides several advantages:

- **Improved Accuracy**: AutoML experiments with a wide range of algorithms and hyperparameters, enhancing model accuracy.
- **Democratized ML**: It offers a user-friendly interface, making machine learning accessible to non-experts.
- **Reduced Time to Market**: Automation of data cleaning, feature engineering, and model training accelerates the deployment process.
- **Reduced Risk**: AutoML minimizes the risk of biased or inaccurate models through automated validation and testing.

### Applications of AutoML

AutoML is used across various industries to enhance operations:

- **Telecom**: Improves customer churn prediction and fraud detection.
- **Manufacturing**: Optimizes production processes and predicts equipment failure.
- **Retail**: Personalizes customer experiences and optimizes inventory.
- **Healthcare**: Assists in disease diagnosis and treatment personalization.

### MLaaS and Cloud Platforms

MLaaS platforms provide a comprehensive suite of tools to support the entire ML workflow, including data preprocessing, model training, and deployment. They offer managed Jupyter Notebooks and frameworks such as scikit-learn, Keras, TensorFlow, and PyTorch. Cloud providers structure their services in layers: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), and SaaS (Software as a Service), with AutoML occupying the SaaS layer.

### Low-Code ML Frameworks

Low-code frameworks require some installation and configuration but offer an abstraction layer over existing ML frameworks. They enable users to build models using SQL or Python with minimal coding. Examples include Google BigQuery, Amazon Aurora, and open-source libraries like AutoKeras and Auto-sklearn. These frameworks allow users to perform model building, training, and evaluation with reduced complexity, leveraging existing SQL skills for seamless integration into ML projects.

Overall, AutoML and low-code frameworks democratize access to machine learning, enabling businesses to quickly and efficiently implement advanced analytics solutions without extensive technical expertise.



### Summary

AutoML frameworks, such as Auto-PyTorch, AutoKeras, and Auto-sklearn, are designed to streamline the machine learning (ML) development process for a variety of users, including business analysts and data scientists. These frameworks automate model experimentation and optimization, offering tools for model integration and deployment. Auto-PyTorch, specifically, is focused on deep learning and supports distributed training.

In Chapter 4, a practical use case is explored: predicting advertising media channel sales using AutoML. The scenario involves a media planner from a solar energy company tasked with optimizing advertising budgets across digital, TV, radio, and newspaper channels to increase sales. The objective is to build a predictive model that forecasts sales volume based on media spend.

The dataset used is derived from "An Introduction to Statistical Learning" and includes 1,200 markets with data on advertising budgets and sales. It consists of five numeric columns: Digital, Newspaper, Radio, TV, and Sales. The data preparation process involves loading the dataset into a Pandas DataFrame and performing exploratory data analysis (EDA) using tools like Matplotlib and Seaborn.

Key EDA steps include:

1. **Data Inspection**: Checking data types and ensuring there are no null values using methods like `info()`, `describe()`, and `isnull()`.

2. **Correlation Analysis**: A heat map is used to identify relationships between variables. Strong correlations are observed between sales and TV (0.78) and sales and radio (0.58), suggesting these channels significantly impact sales.

3. **Scatterplots**: These plots help visualize relationships between individual media channels and sales. A strong linear relationship is noted between TV budget and sales, indicating that increased TV spending positively impacts sales.

4. **Distribution Analysis**: Histograms reveal the distribution of sales and other features. Sales data show a slight left skew, while other features like digital and TV do not follow a normal distribution.

The chapter emphasizes the importance of EDA in understanding data and identifying potential issues before model building. AutoML simplifies model training by handling complex tasks, allowing users without coding expertise to develop predictive models.

The workflow outlined involves loading data, performing EDA, feeding data into the AutoML platform, and evaluating model results. This process enables the creation of strategic marketing plans based on data-driven insights.

Overall, the chapter demonstrates how AutoML can be leveraged to address business questions such as identifying the most impactful media channels and predicting future sales based on advertising budgets. The approach allows for efficient spend optimization and data-driven decision-making in marketing strategies.



### Summary

The text provides a step-by-step guide on using Google’s Vertex AI for AutoML to predict advertising media channel sales. The process begins with data preparation, where the advertising dataset is exported as a CSV file and validated to ensure it is ready for AutoML processing.

#### Data Preparation

- **Directory Creation**: Use Python's `os` module to create a directory for storing the dataset.
- **Exporting Data**: Convert the advertising DataFrame to a CSV file and save it in the created directory.
- **Validation**: Verify the contents of the exported CSV file to ensure correctness.

#### AutoML Process

- **Platform**: The guide uses Google's Vertex AI, emphasizing its no-code capabilities.
- **Dataset Creation**: Create a managed dataset in Vertex AI, selecting the appropriate model objective (regression/classification) to predict sales.
- **Data Upload**: Upload the CSV file from your computer or cloud storage, ensuring it is stored in a scalable and secure cloud storage bucket.

#### Model Training

- **Objective Selection**: Choose regression for predicting continuous values like sales.
- **Training Steps**:
  1. **Select Training Method**: Use AutoML for model training.
  2. **Configure Model Details**: Name the model and select the target column.
  3. **Training Options**: AutoML handles data transformations automatically.
  4. **Compute and Pricing**: Set a budget for node hours and consider enabling early stopping to optimize training time.

#### Model Evaluation

- **Metrics**: Evaluate model performance using metrics like R-squared, MSE, RMSE, and MAE. The guide explains the importance of each metric depending on the model's purpose and data characteristics.
- **Feature Importance**: Analyze which features most impact the model, noting that radio, digital, and TV have the strongest correlation with sales, while newspaper has the least.

#### Deployment

- **Testing**: Deploy the model to test its predictions without building a full application.
- **Endpoints**: Define endpoints for model deployment, allowing others to use the model for inferencing.

The process emphasizes the ease and efficiency of using Vertex AI for AutoML, highlighting its capability to handle data processing and model training with minimal manual intervention. The guide concludes with a brief mention of deployment steps, focusing on defining endpoints and configuring model settings.



### Summary

In machine learning (ML), an endpoint is a service that exposes a model for online prediction, allowing clients to send requests and receive inferencing outputs. Deploying a model involves making it available as an endpoint, often used for real-time predictions such as customer behavior or loan risks. The deployment process includes defining the endpoint, adding the model, and configuring traffic splits for purposes like A/B testing, canary deployments, and rollouts.

When deploying a model, compute resources must be selected based on factors like model complexity, prediction volume, latency requirements, and cost. Options include CPUs for simpler models, GPUs for more complex ones, and TPUs for demanding workloads. Logging and explainability options can be configured, though logging incurs additional costs.

After deployment, models can be tested and used for predictions. For example, a linear regression model can predict sales volume based on input data, providing a prediction interval to indicate confidence. Prediction intervals are used to estimate future observations, differing from confidence intervals that focus on estimating population parameters.

In a business context, ML models can inform decisions like budget allocation for advertising channels. For instance, a model might reveal a positive linear relationship between advertising spend and sales, with TV contributing the most to sales. Accurate predictions allow for strategic planning and resource allocation.

Once a model's utility is confirmed, it should be undeployed to avoid unnecessary costs. The process involves navigating to the Vertex AI Endpoints and selecting the appropriate options to undeploy.

The text also introduces a project workflow for fraud detection using AutoML. The task involves building a model to identify fraudulent financial transactions using a dataset simulated by PaySim, a tool designed to mimic real-world transaction data. The dataset is highly unbalanced, with most transactions being legitimate, necessitating careful metric evaluation to ensure model accuracy.

The workflow includes data extraction and analysis, feature selection, model training, evaluation, and deployment for predictions. The project aims to create a benchmark model for fraud detection, potentially serving as a prototype for further development or even production use.

The dataset for this task includes transaction details such as type, amount, and balances, with the goal of predicting fraudulent activity. Tools like Pandas, Matplotlib, and Seaborn are used for data exploration and visualization, aiding in feature selection for the model.

Overall, the process highlights the importance of understanding data, configuring models appropriately, and making informed business decisions based on ML predictions. The deployment and testing phases ensure that models are ready for practical application, while careful resource management helps control costs.



# Summary

In Chapter 5 of the book, the focus is on using AutoML to detect fraudulent transactions. The dataset comprises 6,362,620 transaction records with 11 columns. Initial exploration using `transaction_df.head()` reveals patterns, such as PAYMENT and TRANSFER transactions having zero balances in the `oldbalanceDest` and `newbalanceDest` columns. An unexpected column, `isFlaggedFraud`, indicates predictions from a previous model. It’s crucial to verify such columns with data providers as they may not be available during prediction time.

Data exploration is essential despite AutoML's capabilities, as data quality directly impacts machine learning (ML) outcomes. Using methods like `.info()` and `.describe()`, it’s observed that the dataset is unbalanced with only 0.129% of transactions being fraudulent. This imbalance can affect model performance. The `isFlaggedFraud` column flags more transactions as fraudulent than actual, which could be beneficial for capturing fraud but may also lead to unnecessary resource expenditure.

The dataset's categorical features, such as `type`, `nameOrig`, and `nameDest`, require careful analysis. The `nameOrig` column, with nearly unique values, might not be useful as it risks the model focusing solely on these identifiers. A potential improvement could be transforming these features into Boolean values based on repetition.

An exploratory analysis includes assessing the previous model's performance using a new column `isCorrect` to evaluate prediction accuracy. Although the model showed 99.87% accuracy, it only correctly flagged 0.19% of fraudulent transactions, highlighting the importance of recall as a metric.

Visualization techniques, such as bar charts and bucketization, help understand the data better. For instance, the `type` feature shows only CASH_OUT and TRANSFER types involve fraud. Bucketizing numeric features like `amount` and `oldbalanceOrg` reveals trends, such as higher transaction amounts correlating with increased fraud likelihood.

Scatterplots further explore relationships between features, such as plotting `newbalanceDest` against `oldbalanceDest` for CASH_OUT transactions, revealing areas with higher fraud concentration.

Overall, this chapter emphasizes the importance of thorough data exploration and understanding, even when using automated tools like AutoML, to ensure effective fraud detection models.



### Summary of Fraud Detection Using AutoML

#### Feature Engineering and Dataset Exploration

Feature crossing is a technique used to create new features by combining existing categorical features, which can enhance model performance. This process will be explored in more detail in later chapters. After exploring the dataset, it can be exported for use in Vertex AI AutoML. The data is stored in a CSV file in Google Cloud Storage and a table in BigQuery. Exporting from a Pandas DataFrame to a CSV is straightforward, and Google Colab provides functions to download files programmatically. Careful review of code in notebooks is essential to avoid downloading malicious files.

#### Understanding Classification Models

Classification models predict categorical outputs, such as fraudulent or legitimate transactions. They provide probabilities for each class, and the predicted class is usually the one with the highest probability. Setting thresholds for classification is both a modeling and business decision. A low threshold may flag too many false positives, while a high threshold may miss actual frauds. Metrics like accuracy, recall, and precision help evaluate model performance. Accuracy alone can be misleading in unbalanced datasets, as seen in fraud detection where fraudulent transactions are rare.

#### Evaluation Metrics

- **Recall**: Measures the percentage of actual positives correctly predicted. Important for capturing fraud.
- **Precision**: Indicates the percentage of predicted positives that are true positives. Balancing precision and recall is crucial.
- **F1-score**: The harmonic mean of precision and recall, useful for ensuring neither metric is overly sacrificed.
- **ROC AUC and PR AUC**: Metrics independent of thresholds, useful in evaluating the model's ability to distinguish between classes.

#### Using AutoML for Model Training

The process involves creating a managed dataset in Vertex AI, selecting the model objective, and training the model. The dataset can be sourced from a CSV in Google Cloud Storage or a BigQuery table. AutoML preprocesses the data, and users can explore dataset statistics to ensure data integrity. Training involves selecting features, specifying categorical or numeric data types, and setting a training budget. Early stopping is recommended to optimize resource use.

#### Evaluating Model Performance

After training, the model's performance is evaluated using metrics like precision and recall. Users can adjust the confidence threshold to see its impact on these metrics. The balance between capturing fraud and minimizing false positives is a key consideration in setting this threshold.

This summary provides an overview of the key concepts and processes involved in using AutoML for fraudulent transaction detection, highlighting the importance of feature engineering, model evaluation, and threshold setting in achieving optimal performance.



### Summary

In this text, the focus is on using machine learning (ML) to detect fraudulent transactions and train models using AutoML and BigQuery ML. Key points include:

1. **Fraud Detection Model:**
   - A threshold of 0.06 corresponds to 50% precision for fraud detection, meaning transactions with more than a 6% chance of fraud are flagged.
   - The model achieves a recall of 95.2%, indicating it misses only 1 in 20 fraudulent transactions.
   - Feature importances are crucial for understanding model predictions. Important features include `oldbalanceOrg`, `newbalanceOrig`, `amount`, and `type`.

2. **Deploying the Model:**
   - Steps to deploy the model include naming the endpoint, selecting machine type, enabling feature attributions, and disabling model monitoring.
   - Testing the model involves using specific transaction values and analyzing predicted probabilities and feature importances.

3. **Undeploying the Model:**
   - It is important to undeploy the model after use to avoid unnecessary costs.

4. **Training Models with AutoML:**
   - The process includes exploring data in a Google Colab environment, uploading data to Vertex AI, and training a classification model.
   - The new model improves recall, enhancing transaction flagging and customer account protection.

5. **Introduction to BigQuery ML:**
   - The next steps involve using BigQuery ML to train linear regression models and neural networks for forecasting power plant production.
   - The dataset includes weather conditions affecting power plant output, collected over six years.

6. **Data Preparation and Exploration:**
   - Data is loaded into BigQuery from a CSV file, with the dataset containing five columns: temperature, ambient pressure, relative humidity, exhaust vacuum, and energy production.
   - SQL is used to explore and clean the dataset, checking for null values and ensuring data quality.

7. **Handling Null Values:**
   - Null values are identified using SQL functions, and rows with null values are omitted to maintain data quality.
   - Imputation strategies can be considered if the dataset is small or if removing rows significantly impacts data distribution.

This comprehensive approach to using AutoML and BigQuery ML facilitates effective model training and deployment, ensuring accurate and efficient fraud detection and data analysis.



To ensure data integrity in SQL, you can use aggregate functions like `MIN` and `MAX` to verify that values fall within expected ranges. For example, applying these functions to the `Temp` column can confirm that temperatures range from 1.81°C to 37.11°C. This process helps identify anomalies such as a minimum ambient pressure of 0.0 and energy production of -1.0, which are likely magic numbers or default values indicating missing data.

To clean the dataset in BigQuery, you can filter out NULL and unrealistic values using SQL queries. A `CREATE TABLE` statement can store the cleaned data for machine learning (ML) model training. The `BETWEEN` operator simplifies these queries by checking if values fall within specified ranges. For instance, filtering `Energy_Production` to be between 420.26 and 495.76 removes invalid entries like -1.0. After cleaning, the dataset shrinks slightly from 9,590 to 9,576 rows, indicating minimal data loss but improved data quality.

Once the data is cleaned, you can save query results using Data Definition Language (DDL) statements. If you decide to save results after running a query, BigQuery allows you to store them in a temporary table for 24 hours, which can then be saved permanently.

With the dataset ready, you can proceed to train a linear regression model. The goal is to predict energy production based on features like temperature and pressure. Linear regression finds a line of best fit to model the relationship between input features and the target variable. The model's performance is evaluated using Root Mean Squared Error (RMSE), which measures prediction accuracy.

To determine the best model weights, two approaches are common: the normal equation and gradient descent. The normal equation provides an exact solution but can be computationally intensive for large datasets. Gradient descent is an alternative that iteratively adjusts weights to minimize the loss function.

Feature selection is crucial in building an effective model. The selected features should relate to the problem objective, be available at prediction time, and be numeric or convertible to numeric values. You can rely on domain expertise or statistical methods like correlation to assess feature relevance.

In summary, cleaning data and selecting appropriate features are foundational steps in preparing for ML model training. By ensuring data quality and relevance, you enhance the model's ability to make accurate predictions.



### Summary

Feature engineering is critical in enhancing model performance, with Pearson correlation being a useful tool for linear models. The Pearson correlation coefficient, ranging from -1 to 1, measures the linear relationship between two variables. A coefficient of 1 indicates a perfect positive linear relationship, while -1 signifies a perfect negative linear relationship. A coefficient closer to 0 suggests a weaker linear relationship.

To compute correlations in BigQuery, the `CORR` function is used. For instance, the correlation between temperature (`Temp`) and exhaust vacuum (`Exhaust_Vacuum`) was found to be 0.844, indicating a moderate to strong positive relationship. This aligns with physical expectations, as pressure typically increases with temperature.

Efficiently computing correlations across multiple columns can be done, though it can become cumbersome with a large number of columns. Automation for computing all correlation coefficients is possible but beyond the scope here.

Google Colaboratory (Colab) can be used for exploratory data analysis (EDA) by importing query results from BigQuery. Using Colab, a correlation matrix can be created to visualize relationships between features. For example, the correlation between `Temp` and `Ambient_Pressure` was found to be -0.508, indicating a moderate negative correlation.

Visualizing data with scatterplots in Colab helps in understanding feature relationships with the label, `Energy_Production`. For instance, `Temp` showed a strong inverse relationship with `Energy_Production`, with a correlation of -0.948. Other features like `Ambient_Pressure` and `Relative_Humidity` showed weaker correlations.

Multicollinearity, where predictors are correlated, can complicate model interpretation. It's crucial to assess which features contribute most significantly to predictions. Discarding features with weak correlations could simplify the model but might limit its generalizability.

In BigQuery ML, creating a linear regression model involves using the `CREATE MODEL` statement. This specifies the model type and label column. After training, evaluation metrics can be accessed via the console or using the `ML.EVALUATE` function, which provides metrics like explained variance.

Predictions can be served using the `ML.PREDICT` function. This can be done for single instances or batch predictions from a table of feature values. Explainable AI (XAI) aims to make model behavior understandable, aiding in performance improvement and bias detection.

Overall, understanding feature correlations, visualizing data, and employing tools like BigQuery ML and Colab are essential steps in building effective machine learning models.



### Explainable AI (XAI) in BigQuery ML

**Local and Global Explanations:**
- **Local explanations** focus on individual predictions, answering "Why did my model give this prediction for this specific example?"
- **Global explanations** analyze the model's behavior across the entire dataset, identifying which features contribute most to predictions.

**Post Hoc Methods:**
- Used after model training to provide explanations.
- Can be model-specific or agnostic, utilizing evaluation datasets and perturbations.

**Intrinsically Explainable Models:**
- Simple models like linear regression offer explanations directly from the model.
- Complex models, like deep neural networks, require post hoc methods.

**Explainable AI in BigQuery ML:**
- BigQuery ML provides feature attributions to explain model predictions.
- **Global explanations** require modifying the `CREATE MODEL` query with `enable_global_explanation = TRUE`.
- **Local explanations** can be computed without global explanation settings.

**Using Global Explanations:**
- Modify the `CREATE MODEL` statement to include `enable_global_explain = TRUE`.
- Use `ML.GLOBAL_EXPLAIN` to retrieve feature importance scores.

**Using Local Explanations:**
- Replace `ML.PREDICT` with `ML.EXPLAIN_PREDICT` to obtain local feature attributions.
- Use `STRUCT(3 AS top_k_features)` to limit output to top features.

**Shapley Values:**
- BigQuery ML uses Shapley values to compute feature attributions, averaging contributions across different feature combinations.

**Neural Networks in BigQuery ML:**

**Overview:**
- Neural networks, popular for their flexibility and ability to perform transfer learning, are mathematical functions that take numeric inputs to predict labels.

**Visualizing Neural Networks:**
- Linear regression can be visualized as a neural network with no hidden layers.
- Adding hidden layers introduces complexity, allowing the model to learn non-linear relationships.

**Activation Functions:**
- Non-linear activation functions, like ReLU, are applied to hidden layers to enable modeling of complex functions.

**Building Neural Networks:**
- Neural networks can have multiple hidden layers, each learning features from the previous layer.
- Larger networks are more powerful but require more data and time to train.

**Training Neural Networks in BigQuery ML:**
- Use the `CREATE MODEL` statement with `model_type = 'dnn_regressor'` and specify hidden units.
- Example query: 
  sql
  CREATE OR REPLACE MODEL data_driven_ml.energy_production_nn 
  OPTIONS (model_type ='dnn_regressor', hidden_units =[32,16,8], input_label_cols =['Energy_Production']) 
  AS SELECT Temp, Ambient_Pressure, Relative_Humidity, Exhaust_Vacuum, Energy_Production 
  FROM `your-project-id.data_driven_ml.ccpp_cleaned`
  
- Training involves exporting data to Vertex AI for processing.

This summary highlights the key concepts of Explainable AI within BigQuery ML, focusing on the use of local and global explanations, Shapley values, and the basics of neural networks, including their training and visualization in BigQuery ML.



### Summary

The text discusses the process of building and evaluating deep neural network regression models, highlighting key concepts such as hidden layers, neurons, and hyperparameters. A neural network's depth refers to its number of hidden layers, with each layer containing a specified number of neurons. In the example provided, the neural network has three hidden layers with 32, 16, and 8 neurons, respectively. Overfitting, a common issue where the model performs well on training data but poorly on unseen data, is discussed alongside underfitting, where the model is too simple to capture data trends.

To combat overfitting, techniques like altering model architecture, early stopping, and regularization are suggested. Hyperparameters, which define the model's architecture and training process, are distinguished from parameters optimized during training. The text suggests experimenting with different hyperparameters to achieve optimal model performance and refers to Chapter 8 for more detailed methods on hyperparameter tuning.

The text also introduces Cloud Shell, a Google Cloud service providing terminal access to interact with Google Cloud resources. It explains how to use Cloud Shell to view the contents of a file stored in Google Cloud Storage without downloading it, using commands like `gcloud storage cat`.

Furthermore, the text transitions into discussing the use of Python libraries, scikit-learn and Keras, for building machine learning models. It emphasizes the importance of data exploration and preparation using tools like Pandas, Matplotlib, and Seaborn. The text outlines a project to predict customer churn using the IBM Telco Customer Churn dataset, detailing the dataset's schema and encouraging exploration of data cleaning and feature transformation.

The text discusses choosing between no-code, low-code, and custom code machine learning solutions. No-code solutions are suitable for rapid prototyping and when ML expertise is limited. Low-code solutions are beneficial for structured data problems supported by specific tools, allowing more focus on data experimentation and model tuning. Custom code solutions offer the most flexibility, suitable for complex models and deployment options, but require more expertise and time.

The text concludes with a recommendation for further reading to enhance understanding of Python and machine learning frameworks, suggesting resources like "Introducing Python" by Bill Lubanovic and "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron.

Overall, the text provides a comprehensive overview of building and evaluating neural network models, using Google Cloud resources, and selecting appropriate machine learning solutions based on project requirements and expertise.



### Summary

This section provides a comprehensive guide on preparing and training machine learning models in a Jupyter Notebook environment, specifically using Google Colab. The process begins with loading data into a Pandas DataFrame, which is crucial for exploring, cleaning, and transforming the data before training the ML model. The code examples are available in a Jupyter notebook in the low-code-ai GitHub repository.

#### Setting Up the Environment

1. **Google Colab Notebook**: Start by opening a new notebook in Google Colab and renaming it appropriately, for instance, `Customer_Churn_Model.ipynb`.
2. **Importing Libraries**: Import necessary libraries such as `matplotlib`, `numpy`, `pandas`, `seaborn`, `sklearn`, and `tensorflow`. Scikit-learn and TensorFlow are highlighted for their roles in building ML models and deep neural networks, respectively.

#### Loading and Exploring Data

- **Loading Data**: Use Pandas to import a CSV file directly from the internet into a DataFrame without downloading it first. For example, load a customer churn dataset using `pd.read_csv()`.
- **Initial Exploration**: Use `df_raw.head()` to view the first few rows and get a quick overview of the data.

#### Data Cleaning

- **Data Types**: Check data types using `df_raw.dtypes` to ensure they match expectations. Notably, the `TotalCharges` column is incorrectly imported as an object rather than a float.
- **Handling Missing Values**: Identify and replace missing or unexpected values in the `TotalCharges` column. Use a mask to find rows with missing data and replace these with the float `0.0` using `df.replace()`.

#### Data Transformation

- **Data Type Conversion**: Convert the `TotalCharges` column to `float64` using `astype()` to ensure proper numerical operations.
- **Summary Statistics**: Use `df_2.describe()` to explore summary statistics for numeric columns, ensuring no anomalies are present.

#### Exploring Categorical Data

- **Categorical Summary**: Use `df_2.describe(include='object')` to obtain statistics for categorical features, providing insights into value distributions and potential data imbalances.
- **Feature Interactions**: Investigate interactions between categorical features, such as `PhoneService` and `MultipleLines`, using `value_counts()` to confirm logical relationships.

#### Key Observations

- **Data Balance**: Features like `gender` and `Partner` are balanced, while others, like `Churn`, are somewhat unbalanced.
- **Data Consistency**: All columns have 7,043 elements, indicating no null values, but potential hidden issues similar to `TotalCharges` may exist.

This guide emphasizes the importance of thorough data preparation, which encompasses understanding data types, handling missing values, and exploring feature interactions. These steps are critical for building robust machine learning models.



In this analysis, we explore a dataset to identify redundant and correlated features, focusing on their impact on customer churn. Initially, the `PhoneService` and `MultipleLines` columns are evaluated. Since `MultipleLines` encapsulates all information from `PhoneService`, the latter is deemed redundant and will be removed from the training dataset.

Further exploration reveals similar redundancy among features like `InternetService`, `OnlineSecurity`, `OnlineBackup`, `StreamingTV`, and `StreamingMovies`. For instance, when `InternetService` is "No", the associated features also indicate "No internet service". However, ambiguity arises with internet types like Fiber optic and DSL, requiring further investigation.

Correlation between categorical features is assessed using techniques like the chi-square test and Cramer’s V coefficient. The `Contract` feature, with values such as "Month-to-month", "One year", and "Two year", is analyzed for its relationship with churn. Visualizations show that shorter contracts have higher churn rates, suggesting contract type as a significant predictor of churn.

Observations from categorical features include:
- Senior citizens have a higher churn rate.
- Gender, `StreamingTV`, and `StreamingMovies` have negligible impact on churn.
- Larger households have lower churn rates.
- Multiple phone lines and Fiber optic internet increase churn.
- Internet add-ons decrease churn, while paperless billing and electronic check payments increase it.

Numeric features like `tenure`, `MonthlyCharges`, and `TotalCharges` are also explored. A new column, `DiffCharges`, is created to capture the difference between current and average monthly charges. This analysis reveals that larger differences correlate with higher churn rates.

Bucketization is used to convert numeric features into categorical ones for better analysis. For instance, `DiffCharges` is split into buckets to examine its effect on churn. The analysis shows that extreme differences in charges, whether positive or negative, lead to higher churn rates.

The dataset is then prepared for machine learning by selecting relevant features. Redundant and non-predictive features like `gender`, `StreamingTV`, `StreamingMovies`, and `PhoneService` are removed. Additionally, `TotalCharges` is dropped to avoid collinearity with `tenure`.

Finally, the `customerID` column is excluded from training due to its unique nature, which could lead to overfitting. The dataset is now ready for feature transformation and model training, focusing on meaningful numeric features and categorical predictors with distinct impacts on churn.




### Summary of Training Custom ML Models in Python

#### Data Preparation and Encoding

The dataset includes various features and a label, "Churn." It comprises both categorical and numerical data types. Before training a machine learning model, categorical features must be encoded into numerical values. Binary features like "Partner" and "Dependents" are encoded using 0 and 1. For features with more than two categories, one-hot encoding is used. This involves creating binary columns for each category, allowing for a numerical representation of categorical data.

#### One-Hot Encoding with Scikit-Learn

Scikit-learn’s `OneHotEncoder` class is used for transforming categorical columns into a one-hot encoded format. The encoder is initialized with the `drop='if_binary'` argument to simplify binary features. The `fit_transform` method learns the unique values for each feature and assigns one-hot encoded values. This transformation can be reversed using `inverse_transform`, enabling a return to the original categorical values after predictions.

#### Combining Features

The numeric and one-hot encoded categorical features are combined into a single NumPy array. The `concatenate` function in NumPy merges these arrays horizontally. A separate array for the label "Churn" is also created. This setup is crucial for preparing the data for model training.

#### Data Splitting

Before training, the dataset is split into training and test sets using the `train_test_split` function from scikit-learn. This step is vital for evaluating the model's performance. In this case, the training set consists of 5,634 examples with 29 features, and the test set has 1,409 examples.

#### Logistic Regression Model

A logistic regression model is chosen for predicting customer churn. Logistic regression predicts the probability of a binary outcome using a logistic function. The model's goal is to minimize the cross-entropy loss function, which measures the difference between predicted probabilities and actual outcomes.

#### Training and Evaluation

The model is trained using scikit-learn’s `LogisticRegression` class. During training, a convergence warning may occur if the model does not reach the desired threshold of improvement. This can be addressed by increasing the number of iterations or rescaling feature values.

#### Feature Scaling

To improve training efficiency, features are rescaled using `MinMaxScaler` to a standard range, typically between 0 and 1. Rescaling helps avoid issues with gradient descent, which can struggle with features on different scales. After rescaling, the model is retrained successfully.

#### Model Evaluation

The trained model's performance is evaluated using the `score` method, which computes the mean accuracy on the test dataset. This step confirms the model's effectiveness in predicting the target variable.

In summary, the process of training a logistic regression model involves data preparation, encoding, splitting, scaling, and evaluating. These steps ensure that the model is both accurate and efficient in predicting outcomes based on the given dataset.



### Summary

In machine learning, ensuring consistency in data preprocessing between training and evaluation phases is crucial to avoid issues like training-serving skew. An example of this is when a model trained on scaled data performs poorly on unscaled test data, resulting in low accuracy. By applying the same transformations to both training and test datasets, model performance can significantly improve, as seen when accuracy increased from 48% to 80% after scaling.

Accuracy is a common metric for evaluating classification models but can be misleading. For example, a model predicting no customer churn might achieve 73.5% accuracy but lacks business value. Metrics like recall and precision provide a clearer performance picture. Recall measures the true positive rate, crucial for detecting customer churn, while precision indicates the proportion of correct positive predictions. A confusion matrix can help compute these metrics, providing insights into true positives, false negatives, and other classifications.

To serve predictions accurately, it's essential to replicate all data transformations applied during training. This includes data cleaning, feature engineering, and scaling. For instance, given JSON data, transformations should be applied before predicting outcomes using a trained model. Consistent transformations ensure predictions are reliable and valuable.

Scikit-learn pipelines streamline the process of managing transformations and model training. A pipeline sequences transformers and models, ensuring transformations are applied consistently. The `FunctionTransformer` can incorporate custom functions, while `ColumnTransformer` applies different transformations to specific columns. Pipelines not only organize code but also enhance portability, as they encapsulate both model and transformation logic. This approach simplifies the application of transformations and predictions, ensuring consistency and accuracy across different environments.

In summary, maintaining consistency in data preprocessing, using comprehensive metrics, and leveraging tools like pipelines are critical for building effective and reliable machine learning models. These practices help avoid common pitfalls, enhance model performance, and ensure that predictions bring meaningful business value.



### Summary

#### Exporting Models with Pipelines
Models can be exported using `pickle` or `joblib` after fitting, which includes both the trained model and fit transformers. This ensures consistency when transferring models for predictions.

#### Building Neural Networks with Keras
Keras, part of TensorFlow, simplifies building neural networks. It abstracts complex TensorFlow operations, making it accessible for newcomers. Keras uses layers, with each neuron having an activation function. For regression, ReLU is common; for classification, sigmoid converts outputs into probabilities.

#### TensorFlow and Keras
TensorFlow, launched in 2015, uses tensors and computation graphs for optimized processing. Initially challenging to learn, it was made more user-friendly with TensorFlow 2.0, integrating Keras as its high-level API. Keras started as a Python interface for Theano and now supports TensorFlow, enabling neural network creation with minimal code.

#### Training Neural Networks
With data prepared using scikit-learn and Pandas, TensorFlow's `Dataset` API streams data for training, allowing scalability. Labels are encoded using `LabelEncoder` from scikit-learn. The `tf.data.Dataset` API handles data batching, crucial for training efficiency. Batch size, a hyperparameter, affects the training process's noise and convergence.

#### Model Creation and Compilation
Keras uses `Sequential` API for model creation, defining layers with `Dense` layers for full neuron connectivity. Models are compiled with loss functions, metrics, and optimizers. The Adam optimizer is a default choice for its improvements over traditional gradient descent.

#### Training Process
Training involves using the `fit()` method, specifying datasets and epochs. Monitoring training through validation data helps detect convergence or overfitting. Early stopping can halt training if performance stalls, restoring the best weights.

#### Evaluating the Model
The model's performance is evaluated using metrics like accuracy, precision, and recall. While the neural network may initially underperform compared to logistic regression, further tuning and feature engineering can enhance results.

#### Building Custom Models on Vertex AI
Vertex AI allows training custom models using containerized environments. Prebuilt containers are available for popular ML frameworks. Steps include ensuring dataset availability, gathering code into scripts, saving results in Google Cloud Storage, and creating source code distributions.

This summary covers key aspects of building, training, and deploying machine learning models using Keras and Vertex AI, emphasizing practical steps and considerations.



To build and train a custom ML model using Vertex AI, you must prepare your data using a Pandas DataFrame and save your model externally, as resources are temporary during training. Begin by creating a directory for your Python package in Colab using `!mkdir trainer`. Combine your Python code into a single file using `%%writefile trainer/trainer.py`.

Ensure all import statements are at the top of your script, and use print statements to log metrics during training. Save your model using `joblib.dump()` to Google Cloud Storage, specifying your bucket name. Create an `__init__.py` file in the trainer directory with `%%writefile trainer/__init__.py`, which can be empty if no initialization is needed.

Next, create a `setup.py` file using `%%writefile setup.py` to define your package's name, version, required packages, and description. Use `!python ./setup.py sdist --formats=gztar` to create a source distribution. Move this package to Google Cloud Storage using `gcloud storage cp`.

To train your model, access the Vertex AI console, select Training, and create a new job. Configure your training job with the appropriate settings, such as using a pre-built container for scikit-learn and specifying your package location.

After training, view logs to examine metrics. For larger datasets, Vertex AI is advantageous due to scalable resources. Save your model as a `.joblib` file for future use. For TensorFlow models, use `model.save()` to store them in Google Cloud Storage.

In summary, you learned to build a custom ML model to predict customer churn using scikit-learn and TensorFlow, trained on Vertex AI. The process involves setting up a Python package, moving it to Cloud Storage, and configuring a training job in the Vertex AI console. This foundational knowledge paves the way for more advanced techniques, such as hyperparameter tuning and feature engineering, to improve model performance.



### Data Preparation and Model Evaluation

The process begins with downloading datasets using the `wget` command, saving them in the current working directory. After loading these datasets into DataFrames, the `head()` method is used to verify the data structure. An unexpected column, `Unnamed: 0`, appears due to a previous DataFrame's index, which is dropped during preprocessing.

### Dataset Utilization

Three datasets are employed: training, validation, and test datasets. The training dataset is used for model training, the validation dataset for model evaluation, and the test dataset for final performance verification. Ensuring similar data distributions across these datasets helps prevent biased model performance.

### Data Processing with Scikit-Learn

The data processing involves separating the target (`sellingprice`) from feature columns. Columns `Unnamed: 0` and `mmr` are dropped using a custom function with `FunctionTransformer`. Numeric and categorical columns are handled separately using `MinMaxScaler` and `OneHotEncoder`, respectively, in a `ColumnTransformer`.

### Model Training

A linear regression model is defined using a `Pipeline` to streamline preprocessing and model training. The pipeline consists of steps for column transformation and model fitting. After training, the model's performance is evaluated using metrics like R2, RMSE, and MAE. Initial results indicate that the RMSE exceeds the business goal, necessitating further model improvement.

### Feature Engineering

Feature engineering is crucial for model performance. Anomalies, such as a `-1.0` in the `condition` column, are addressed by transforming the data. The `KBinsDiscretizer` is employed to bucketize and one-hot encode `condition`, improving model performance slightly.

### Handling Unknown Categories

Warnings about unknown categories in the validation dataset indicate discrepancies between datasets. The `OneHotEncoder` handles these by assigning unknown values to an infrequent category, adjustable via the `min_frequency` parameter. Adjusting this parameter can enhance model robustness.

### Feature Crosses

Combining features like `model` and `trim` can provide more descriptive power. For instance, vehicle identification often requires both features. This approach can improve model accuracy by capturing interactions between features.

### Conclusion

The process demonstrates the importance of careful data preparation, feature engineering, and handling of categorical data. The use of pipelines in scikit-learn facilitates a structured approach to model training and evaluation. Addressing data anomalies and leveraging feature interactions are key strategies for enhancing model performance.



In machine learning, feature crosses are synthetic features created by combining two or more existing features, enabling models to consider their values simultaneously. This approach is particularly useful in linear regression models and can enhance model performance significantly. For example, combining "model" and "trim" into a single feature "model_trim" allows for capturing interactions between these features.

To implement feature crosses in a dataset, you can concatenate relevant features and convert them to lowercase to avoid discrepancies due to capitalization. After creating these new features, ensure they are one-hot encoded alongside other categorical variables. This method was demonstrated to reduce the RMSE (Root Mean Square Error) of a model by about 2%.

Hyperparameter tuning is another critical step in improving model performance. It involves optimizing parameters that define model architecture and training processes, such as the number of buckets in a bucketized feature. Three common strategies for hyperparameter tuning are grid search, random search, and Bayesian optimization.

Grid search exhaustively tests all combinations of specified hyperparameter values, ensuring the best parameters within the candidate ranges are found. However, it can be computationally expensive with many parameters. Random search offers a more time-efficient alternative by randomly selecting a subset of parameter combinations, although it might miss the optimal settings. Bayesian optimization intelligently selects promising hyperparameter combinations based on initial trials, making it more efficient than random search.

In scikit-learn, both grid search and random search are easy to implement. A variant called halving grid search is available, which iteratively trains models on subsets of data, reducing the candidate pool based on performance. This method is more efficient than exhaustive grid search and typically yields better results than random search.

For hyperparameter tuning in scikit-learn, you define candidate ranges for parameters in a dictionary format. Using a pipeline, you can specify which parameters to tune. The HalvingGridSearchCV class in scikit-learn facilitates this process, allowing for cross-validation and setting the scoring metric to optimize, such as negative RMSE for regression tasks.

After hyperparameter tuning, you can evaluate the best model's performance on a validation dataset. In the example provided, the RMSE improved from over 3,300 to 2,915.02, showcasing the impact of feature engineering and hyperparameter tuning.

In addition to scikit-learn, Keras can be used for model improvements, particularly with neural networks. Keras preprocessing layers allow for incorporating data preprocessing into the model, similar to scikit-learn pipelines. The Keras Tuner package supports hyperparameter tuning using Bayesian optimization, providing another avenue for enhancing model performance.

Overall, combining feature crosses, effective hyperparameter tuning, and leveraging libraries like scikit-learn and Keras can significantly improve model accuracy and efficiency.



In Chapter 8, the focus is on improving custom model performance using Keras by re-creating a preprocessing pipeline initially built in scikit-learn. This involves using Keras preprocessing layers such as Discretization, StringLookup, and HashedCrossing to handle various data transformations like bucketizing numerical features, encoding categorical features, and creating feature crosses.

### Preprocessing Layers in Keras

- **Discretization Layer:** Used to bucketize numerical features, similar to scikit-learn's KBinsDiscretizer. You can specify bucket endpoints or use the `adapt()` method to determine them based on the training dataset.
  
- **StringLookup Layer:** Encodes categorical columns with string values using one-hot encoding. It can also encode as integers for further transformations.
  
- **HashedCrossing Layer:** Automates feature crossing by taking two categorical features and creating a cross, which was manually done in scikit-learn.

### Creating the Dataset and Preprocessing Layers

To start building models in Keras, import training and validation datasets into DataFrames. Split these into features and labels. Use Keras's Functional API to create Input layers for each feature, setting data types appropriately (e.g., `tf.string` for categorical features).

#### One-Hot Encoding and Bucketization

- **One-Hot Encoding:** Implemented using `StringLookup` for categorical columns. Adapt the layer to the training dataset to learn the vocabulary.
  
- **Bucketization:** Use `Discretization` for numeric columns, splitting data into bins and one-hot encoding them.

- **Feature Crossing:** Recreate feature crosses using `HashedCrossing`. Specify the number of bins to manage potential hash collisions, balancing between model complexity and performance.

### Building the Neural Network Model

Concatenate all preprocessing layers into a single input layer for the neural network. Use a series of Dense layers to build the model. Compile the model with the Adam optimizer and mean squared error (MSE) as the loss function. Train the model using the `fit()` method with a specified batch size and number of epochs.

### Hyperparameter Tuning in Keras

Keras Tuner is used for hyperparameter tuning. Install it using pip and create a function `build_model` to define the model with hyperparameters. Use `partial` to fix certain arguments, allowing Keras Tuner to manage hyperparameters.

- **Defining Hyperparameters:** Use `hp.Int` to define integer hyperparameters for the number of neurons in each layer. Adjust these to optimize model performance.

- **Tuning Process:** Use `BayesianOptimization` from Keras Tuner to search for optimal hyperparameters. Set the objective to minimize validation loss and define the maximum number of trials.

### Conclusion

The chapter emphasizes the importance of preprocessing layers in Keras to streamline model building and improve performance. It also highlights the use of Keras Tuner for efficient hyperparameter optimization, enabling further model refinement. The approach mirrors the processes in scikit-learn but leverages Keras's advanced capabilities for deep learning models.



### Summary

The text discusses improving a custom model's performance using Keras Tuner and BigQuery ML. It begins by explaining the hyperparameter tuning process in Keras. Using Keras Tuner, the best model's validation loss improved significantly, with an RMSE around $2,000 after tuning. The process involves retrieving the best hyperparameters and training the model with early stopping to prevent overfitting.

The importance of using a test dataset for final model evaluation is emphasized, as it provides a real-world performance measure. If the model performs well on the test dataset, it is ready for deployment; otherwise, a new training-validation-test split may be necessary.

The text transitions to using BigQuery ML for model improvement. It outlines steps to load and transform car auction data, emphasizing the use of BigQuery ML functions like `ML.BUCKETIZE` and `ML.FEATURE_CROSS` for preprocessing. These functions enable bucketizing numeric features and creating feature crosses, respectively.

A linear regression model is trained using BigQuery ML, incorporating preprocessing transformations into the model with the `TRANSFORM` clause. This ensures consistent transformations during both training and prediction. The model's RMSE on the validation dataset is used for evaluation, revealing overfitting due to a large number of feature crosses.

The text introduces regularization techniques to address overfitting, such as dropout and L1/L2 regularization. These techniques help reduce model complexity and prevent overfitting by penalizing large weights during training.

Hyperparameter tuning in BigQuery ML is covered next. The process involves setting the `num_trials` option to specify the number of models to train and adjusting hyperparameters like `dropout`, `l1_reg`, and `hidden_units`. Regularization techniques, including L1 and L2 regularization, are explained. These techniques add penalty terms to the loss function to balance model complexity and accuracy.

Overall, the text provides a comprehensive guide to improving model performance through hyperparameter tuning and regularization, using both Keras and BigQuery ML.



In machine learning, L1 and L2 regularization are techniques used to improve model performance by adjusting weights. L1 regularization pushes non-influential weights to zero, useful for sparse features, while L2 regularization reduces weight values. Dropout is another regularization method applied to neural networks, turning off a percentage of neurons during training to prevent overfitting. Hyperparameter tuning in BigQuery ML, as demonstrated with the `CREATE MODEL` SQL statement, involves using functions like `hparam_candidates` and `hparam_range` to explore different model architectures and regularization parameters.

The tuning process involves setting options like `hidden_units`, `l1_reg`, and `dropout`, and optimizing objectives such as `mean_squared_error`. The `optimizer='adagrad'` is specified due to its compatibility with L1 regularization. After training, trial results can be reviewed using `ML.TRIAL_INFO` to identify the best hyperparameters, which are automatically used in predictions with `ML.PREDICT`.

For large models, cloud-based tools like Vertex AI, Amazon SageMaker, and Azure Machine Learning offer scalable hyperparameter tuning services. These platforms use techniques such as Bayesian optimization to efficiently search for optimal hyperparameters.

The chapter also emphasizes the importance of feature engineering and hyperparameter tuning in improving model performance. It highlights the utility of no-code and low-code solutions for building ML models without extensive coding. The book encourages further exploration into ML and AI, particularly in areas like unstructured data and generative AI.

Unstructured data, such as images and text, requires different processing techniques. Images are represented as arrays of pixel values, and tools like convolutional layers are useful for image classification tasks, exemplified by the MNIST dataset. Text data can be converted to numeric form using methods like one-hot encoding and n-grams, which help capture context in text processing.

Overall, the chapter serves as a guide to enhancing custom models through advanced techniques and explores avenues for further learning in the evolving field of ML and AI.



In the realm of spam detection, understanding context is crucial. For instance, individual words like "won," "the," and "lottery" lack context, but the phrase "won the lottery" clearly signals spam. Techniques like word embeddings help capture word meanings and relationships in dimensions, placing similar words close together. For example, "dog" and "puppy" would be near each other in an embedding space. BERT is a popular tool for converting text into numeric input for models.

Generative AI, unlike discriminative models, generates instances from labels. For example, given the label "a cat playing a banjo," a generative model creates an image of that scene. Tools like craiyon.com illustrate this concept. Generative AI is significant in chatbots like ChatGPT and Bard, which rely on large language models (LLMs) trained on vast datasets. GPT-3.5, for example, has 175 billion parameters. The ethical use of generative AI is a growing discussion topic.

Explainable AI (XAI) offers insights into model predictions. Intrinsic techniques use the model's structure, while post hoc techniques analyze model predictions. Post hoc methods are divided into local (focusing on specific instances) and global (focusing on overall model behavior) techniques. Model-agnostic techniques, like permutation feature importance (PFI), alter data to assess feature importance. Model-specific techniques include integrated gradients for neural networks, which analyze prediction changes based on input variations.

ML operations (MLOps) encompass managing tasks beyond the model, such as infrastructure and deployment. Effective MLOps involves collaboration among ML engineers, data scientists, and others. Continuous training and evaluation address model drift, ensuring models remain accurate over time. Data drift refers to changes in data distribution, while concept drift involves changes in the relationship between features and labels. Continuous evaluation helps decide when to retrain models, maintaining performance.

The book emphasizes the importance of understanding ML processes and encourages readers to explore further resources. ML and AI are rapidly growing fields with increasing demand, and staying informed about advancements is crucial for practitioners.



# Summary of Key Concepts

## Machine Learning Frameworks and Techniques

- **Machine Learning Approaches**: The text discusses various ML approaches, including no-code, low-code, and custom code solutions, highlighting the benefits and use cases for each. No-code solutions offer ease of use, while low-code provides a balance between customization and simplicity.

- **Data Processing and Feature Engineering**: Emphasis is placed on data preprocessing, feature selection, and transformation using tools like Pandas and scikit-learn. Techniques such as one-hot encoding and scaling are crucial for preparing data.

- **Model Building and Evaluation**: Different models, including logistic regression and neural networks, are explored. The text covers model training, evaluation metrics like precision and recall, and techniques for improving model performance through hyperparameter tuning.

## Tools and Platforms

- **Google Cloud and Vertex AI**: Vertex AI is highlighted for building custom ML models, offering features like model deployment, performance evaluation, and dataset management. The platform supports various ML workflows, from data collection to model training.

- **Scikit-learn and Keras**: These libraries are used for building and tuning models. Scikit-learn is noted for its ease of use in logistic regression, while Keras is preferred for neural network development.

- **BigQuery ML**: This tool is used for SQL-based ML tasks, including hyperparameter tuning and model training, particularly for large datasets and complex models.

## Data Analysis and Visualization

- **Exploratory Data Analysis (EDA)**: The importance of EDA is underscored, with tools like Seaborn and Matplotlib used for visualizing data through heat maps, scatterplots, and histograms.

- **Explainable AI (XAI)**: Techniques such as Shapley values and integrated gradients are discussed to make AI models more interpretable, helping stakeholders understand model predictions.

## Use Cases and Applications

- **Customer Churn Prediction**: This use case demonstrates the application of ML in predicting customer behavior, emphasizing the role of feature engineering and model selection.

- **Fraud Detection and Marketing Campaigns**: These scenarios illustrate the application of ML models in real-world situations, highlighting the importance of data preprocessing and model evaluation.

## Advanced Topics

- **Generative AI and Large Language Models (LLMs)**: The text briefly touches on advanced AI topics, including the development and application of generative AI models and LLMs.

- **MLOps and Model Maintenance**: The importance of maintaining and updating ML models is discussed, ensuring they remain effective over time.

## Authors and Resources

- **Expert Contributions**: The text is authored by Gwendolyn Stripling and Michael Abel, experts in AI and ML, who provide insights into the field through their work at Google Cloud.

- **Learning Resources**: O’Reilly Media offers a range of learning materials, including books and online courses, for those interested in advancing their ML knowledge.

This summary encapsulates the essential elements of the text, focusing on the methodologies, tools, and real-world applications of machine learning.
