
**TinyML: Machine Learning with TensorFlow Lite on Arduino and Ultra-Low-Power Microcontrollers**

TinyML focuses on deploying machine learning (ML) models on microcontrollers, using TensorFlow Lite. The book is authored by Pete Warden and Daniel Situnayake and provides insights into building and deploying ML applications on resource-constrained devices like Arduino and SparkFun Edge.

**Key Topics:**

- **Embedded Devices and ML:** The book introduces the concept of TinyML, emphasizing the potential of ML on embedded devices. It covers the changing landscape of ML and its applications on low-power hardware.

- **Getting Started:** Readers are guided through the necessary hardware and software requirements. The book is aimed at developers with an interest in ML and embedded systems.

- **Machine Learning Basics:** It explains the ML workflow, including goal setting, dataset collection, model architecture design, training, conversion, and inference. The book also covers evaluation and troubleshooting of models.

- **"Hello World" Projects:** The book provides step-by-step guides for building and training simple ML models. It involves using Python, Jupyter Notebooks, and TensorFlow to create and optimize models, converting them to TensorFlow Lite, and deploying them on microcontrollers.

- **Wake-Word Detection:** This section details building and training a model for wake-word detection. It includes application architecture, model introduction, and deployment on various microcontrollers.

- **Person Detection and Magic Wand Applications:** The book covers creating applications for person detection and gesture recognition (Magic Wand) using accelerometers. It discusses model training, architecture, and deployment.

- **TensorFlow Lite for Microcontrollers:** An overview of TensorFlow Lite for Microcontrollers is provided, including requirements, project generation, and code specialization. It explains how to port models and optimize for microcontroller constraints.

- **Designing TinyML Applications:** Guidance on designing custom TinyML applications is offered, including considerations for microcontroller usage, data handling, and model selection.

- **Optimization Techniques:** The book explores optimizing latency, energy usage, and model size, providing strategies like quantization, duty cycling, and cascading design.

- **Debugging and Privacy:** Techniques for debugging ML models on microcontrollers are discussed, along with considerations for privacy, security, and deployment.

- **Resources and Further Learning:** The book concludes with resources for further exploration, including the TinyML Foundation and TensorFlow community.

The book emphasizes practical implementation and optimization of ML models on ultra-low-power devices, making it a valuable resource for developers interested in embedded ML applications.



TinyML is the concept of running machine learning (ML) models on embedded devices with very low power consumption, typically below 1 mW. This allows for the creation of small, low-cost, battery-operated devices that can process data locally without the need for constant power or connectivity. The book "TinyML" by Pete Warden and Daniel Situnayake provides tools and guidance for developers to build such projects, even with basic command-line and coding skills.

The development of TinyML was inspired by projects like Google's "OK Google" which used neural networks as small as 14 kilobytes to operate on digital signal processors (DSPs) in Android phones. These DSPs, with limited RAM and flash memory, allowed for continuous listening with minimal power usage. This concept of using low-power chips for neural models extends to various applications such as audio, predictive maintenance, and vision.

TinyML enables new applications by making it feasible to run ML on devices powered by coin batteries for extended periods. It supports the deployment of smart sensors in various environments without frequent human intervention. The book emphasizes the importance of embedded devices, which are typically 32-bit CPUs with limited resources, and highlights the challenges and joys of embedded development.

The text also discusses the evolving landscape of TinyML, acknowledging the rapid changes in hardware, software, and research. It aims to equip readers with foundational skills in debugging, model creation, and understanding deep learning, ensuring these skills remain relevant despite technological advancements.

For practical applications, the book covers building and modifying ML applications on low-power devices using free software and affordable hardware kits. It targets developers with some familiarity with terminal commands and basic programming, guiding them through projects like speech recognition, gesture detection, and object detection.

The book provides resources for further learning, including supplemental materials and code examples available online. It encourages readers to adapt and extend the projects to solve specific problems, fostering innovation in the field of embedded ML.

Overall, "TinyML" offers a comprehensive introduction to building ML applications on embedded devices, focusing on energy efficiency, cost-effectiveness, and practical application development.



The collaboration with Ambiq and SparkFun led to the creation of the $15 SparkFun Edge board, compatible with all examples in the book. The SparkFun Edge 2, a revised version, will also support these projects, albeit with slightly different deployment instructions provided in linked README.md files. Projects can also be adapted for Arduino and Mbed environments, with specific recommendations for the Arduino Nano 33 BLE Sense and STM32F746G Discovery kit. A table in the book specifies device compatibility for each project.

For unsupported devices, the source code is on GitHub, allowing updates and easy porting for those with embedded development experience. Projects generally don't require additional components, except for person detection, which needs a camera module.

All projects utilize TensorFlow Lite for Microcontrollers, tailored for devices with limited memory. The code is open source and subject to updates. Microsoft’s VS Code is recommended for editing, and command-line interfaces like Terminal or Command Prompt are necessary for command input. Device-specific software may be needed for communication with development boards.

The book aims to broaden the application of TinyML across various fields by empowering domain experts with the knowledge to tackle problems using machine learning on embedded systems. The focus is on practical examples and system-wide understanding rather than deep technical dives into the underlying mechanics.

Machine learning is demystified as a tool for problem-solving, accessible without advanced degrees. The book covers essential concepts, tools, and workflows for creating and optimizing models for tiny devices, emphasizing deep learning due to its flexibility and power.

The deep learning workflow involves setting a goal, collecting and labeling data, designing a model architecture, training the model, converting it, running inference, and evaluating results. The example given is predicting machine breakdowns using classification to differentiate between "normal" and "abnormal" states. Data selection and collection are crucial, ensuring relevance and diversity to train effective models. The process involves transforming time series data appropriately for model training.

Overall, the book provides a comprehensive guide to using machine learning on microcontrollers, focusing on practical implementation and system-level considerations to facilitate the creation of innovative solutions in various domains.



In supervised learning, models are trained using labeled data to classify inputs into "normal" or "abnormal" categories. This involves associating data with labels during training, enabling the model to predict the class of new data. For time-series data, labeling requires identifying periods of normal and abnormal machine operation, often necessitating experimentation to accurately label data. The dataset includes features such as production rate, temperature, and vibration, logged at different intervals, with labels provided every 10 seconds to match the smallest interval.

Designing a model architecture involves choosing or creating a structure suitable for the problem and data type. Pretrained models are available for common problems, but custom architectures may be necessary. Considerations include data transformation, device constraints, and hardware acceleration capabilities. The model's size depends on the number of neurons and their connections, and iterative refinement is often needed for optimal results.

Deep learning models use tensors as input and output. Tensors can be vectors (1D), matrices (2D), or higher-dimensional structures. Features from time-series data must be transformed into a tensor format. This transformation involves windowing, where data within a time window is combined into a single set of values, and normalization, ensuring feature values are on a similar scale, typically between 0 and 1.

Training involves feeding data through the model, adjusting weights and biases using backpropagation to minimize loss and maximize accuracy. Training stops when performance no longer improves, indicating convergence. Performance is measured by loss (how far predictions are from expected values) and accuracy (percentage of correct predictions). Hyperparameters, such as the number of epochs and neurons, can be adjusted to improve performance.

Challenges include underfitting, where the model fails to learn patterns, and overfitting, where it learns too much from training data, failing to generalize to new data. Despite these challenges, even imperfect models can be useful, as seen in the factory example where partial prediction of abnormal operation is beneficial.

The machine learning workflow is iterative, involving goal setting, data collection and labeling, feature design, model architecture selection, and training. This process is repeated until satisfactory results are achieved or the task is deemed too difficult. In scenarios like weather prediction, the same iterative approach applies, with adjustments made based on initial testing and results.



Overfitting in machine learning occurs when a model learns the training data too well, failing to generalize to new data. This often happens when the model architecture is too complex or the dataset is insufficient. For example, a model differentiating between dogs and cats might rely on irrelevant features, like the presence of the sky in outdoor dog photos, leading to misclassification of indoor dog photos.

To combat overfitting, techniques such as reducing model complexity, regularization (e.g., L1, L2, dropout), and data augmentation are employed. Regularization constrains the model to prevent memorization, while data augmentation artificially expands the training dataset by transforming existing data.

Model evaluation involves splitting data into training, validation, and test sets, typically in a 60-20-20 ratio. This helps assess the model's performance and detect overfitting by comparing training and validation losses. If the validation loss increases while training loss decreases, the model is overfitting. Testing on separate data ensures the model hasn't overfitted both training and validation data.

Once a model is trained, it must be converted for deployment on devices. TensorFlow models are converted to TensorFlow Lite format for use on microcontrollers. This involves using the TensorFlow Lite Converter to optimize models for size and speed without sacrificing performance.

Inference involves loading the converted model, transforming sensor data to match training data, and running predictions. For classification tasks, the model outputs scores for each class, which are interpreted as probabilities. To mitigate transient errors, averaging outputs over time can smooth predictions.

Real-world deployment may reveal discrepancies due to differences in data or overfitting. Troubleshooting involves checking hardware, comparing deployed data with training data, and possibly retraining with more data. Regularization and data augmentation can enhance model robustness.

The workflow for building and deploying models involves obtaining data, training and evaluating models, converting for on-device use, writing inference code, and deploying to microcontrollers. Tools like Python, TensorFlow, and Google Colaboratory facilitate these processes. The example project involves training a model to predict sine values and using it to control LED animations on various microcontrollers, demonstrating the integration of machine learning with hardware.



Jupyter Notebooks are a versatile tool that combines writing, graphics, and executable code, making them ideal for describing and exploring machine learning (ML) problems. Google Colaboratory (Colab) enhances this by providing an online platform to run Jupyter notebooks on powerful hardware, facilitating easy sharing and consistent results across different users. TensorFlow, an open-source ML framework developed by Google, is widely used for building, training, and deploying ML models. Its high-level API, Keras, simplifies the creation of deep learning networks, while TensorFlow Lite enables model deployment on mobile and embedded devices.

The process of building, training, and converting an ML model begins with setting up a Jupyter notebook in Colab. Importing necessary libraries like TensorFlow, NumPy, and Matplotlib is the first step. NumPy is used for mathematical operations, while Matplotlib is used for data visualization. The notebook allows users to run code cells and visualize outputs, which is crucial for understanding the ML workflow.

Data generation is a key step where a dataset is created to train the ML model. In this context, a sine wave is used to generate 1,000 random data points, representing a complete sine wave cycle. Adding noise to the data simulates real-world conditions, making the model robust. The dataset is then split into training, validation, and test sets, typically in a 60-20-20 ratio, to evaluate the model's accuracy and ensure it generalizes well.

Building a simple neural network involves defining a model using Keras. The network consists of layers of neurons, each layer designed to learn patterns in the data. The first layer receives a scalar input and processes it through multiple neurons using an activation function, such as ReLU (Rectified Linear Unit), which helps shape the output. The final layer outputs a single value, suitable for regression tasks like predicting a sine value.

The model is compiled with an optimizer and loss function appropriate for regression problems. Keras provides an easy-to-use interface to define, compile, and summarize the model architecture, making it accessible even for beginners. The training process involves feeding data into the model, allowing it to learn and adjust its weights and biases to minimize error and improve prediction accuracy.

Overall, the combination of Jupyter Notebooks, Colab, TensorFlow, and Keras provides a powerful ecosystem for ML development, enabling users to efficiently build, train, and deploy models with ease. The integration of these tools streamlines the workflow, from data generation and visualization to model creation and evaluation, making it a valuable resource for both beginners and experts in the field of machine learning.



The text discusses building and training a model using Keras, focusing on the Rectified Linear Unit (ReLU) activation function and its role in enabling neural networks to model complex nonlinear relationships. ReLU outputs the maximum of zero or the input value, allowing the network to capture nonlinear patterns. The model described consists of two layers: the first with 16 neurons using ReLU and the second as an output layer without an activation function. The output layer combines activations from the first layer using weights and biases learned during training.

The model is compiled with specific arguments: an optimizer (`rmsprop`), a loss function (`mean squared error`), and a metric (`mean absolute error`). The optimizer adjusts the network during training, while the loss function measures prediction accuracy. The `fit()` method is used to train the model with training data, specifying parameters like `epochs` (number of training iterations) and `batch_size` (number of data points per update). These parameters affect training efficiency and model accuracy, with a balance needed to avoid overfitting.

Training involves running data through the network and updating weights based on loss calculations. The training process logs metrics like `loss` and `mae` to track improvement. A graph of training and validation loss shows initial rapid improvement, followed by stabilization, indicating when to stop training. A further graph of mean absolute error highlights potential overfitting, with training error lower than validation error, suggesting the model may not generalize well.

The model's predictions are plotted against actual values, revealing a linear approximation of the sine wave function, indicating insufficient model capacity. To improve, the model size and complexity need adjustment. This iterative process of design, evaluation, and refinement is typical in machine learning workflows to enhance model performance.



In this text, the focus is on enhancing a neural network by adding layers and using TensorFlow Lite for deployment on edge devices. Initially, a model with an additional layer of 16 neurons is defined using TensorFlow's Keras API. This model is larger, with 321 parameters compared to the original model's 49, aimed at capturing more complex data representations. The model is compiled with the RMSprop optimizer and mean squared error loss function, then trained over 600 epochs. The training results show a significant improvement, with validation loss dropping from 0.17 to 0.01 and validation mean absolute error decreasing from 0.32 to 0.08, indicating better performance and no overfitting.

Post-training, graphs of loss and mean absolute error are plotted to visualize the model's performance. The validation metrics outperform the training metrics, suggesting effective learning without overfitting. A final test on a separate test dataset confirms the model's generalization capability, with test loss and mean absolute error closely matching the validation results.

The text explains the importance of separate validation and test datasets to prevent overfitting. If a model overfits the validation data, it might not generalize well to new data. This is mitigated by testing on fresh data, ensuring the model's robustness.

For deployment, the model is converted to TensorFlow Lite format using the TensorFlow Lite Converter. This conversion includes quantization, reducing the model size by storing weights as 8-bit integers instead of 32-bit floats. Quantization minimally impacts accuracy but significantly enhances efficiency, making it suitable for memory-constrained devices.

The conversion process involves using a representative dataset for optimal quantization. The converted models are tested for accuracy, showing predictions closely aligned with the original model. The quantized model is notably smaller, demonstrating the effectiveness of quantization in reducing model size.

Finally, the text describes converting the model into a C source file for deployment on microcontrollers. This step is necessary because many microcontrollers lack a filesystem, and embedding the model directly in the application saves memory and resources. The model's conversion to a C file marks the completion of its preparation for deployment on edge devices, enabling efficient execution on hardware with limited computational power.



The process of integrating a trained model into an embedded system involves converting the model into a format suitable for inclusion in a binary. This is achieved by using the Unix tool `xxd` to transform the model into a C source file, where it is defined as an array of bytes. The model can then be directly loaded into memory from this file. For example, the command `!xxd -i sine_model_quantized.tflite > sine_model_quantized.cc` converts a TensorFlow Lite model into a C source file.

Once the model is prepared, it can be used in a machine learning application. The application wraps the model in code, setting up the necessary environment for it to run, providing inputs, and using outputs to generate behavior. A basic application could control an LED or an LCD display based on model inference results. This approach is exemplified in a C++ 11 program that demonstrates a minimal TinyML application using TensorFlow Lite for Microcontrollers.

The application code is structured to be simple and serves as a template for learning and implementing TinyML applications. It includes tests, like the `hello_world_test.cc`, which load the model and run inference to verify predictions. The code relies on several dependencies, imported using `#include` directives, such as `tensorflow/lite/micro/micro_interpreter.h` for running the model and `tensorflow/lite/micro/micro_error_reporter.h` for logging errors.

The test setup involves defining macros `TF_LITE_MICRO_TESTS_BEGIN` and `TF_LITE_MICRO_TEST` to wrap the code for execution by the TensorFlow Lite testing framework. A `MicroErrorReporter` is used for logging, and an `ErrorReporter` pointer is used to access both overridden and non-overridden methods of the class.

The model is loaded into a `Model` struct using `GetModel()`, and its version is checked against the TensorFlow Lite schema version to ensure compatibility. An `AllOpsResolver` is created to provide the necessary operations for the model, and a memory area, or tensor arena, is allocated to store input, output, and intermediate tensors. The size of this tensor arena is determined through trial and error to ensure it fits within the microcontroller's RAM constraints.

Overall, the integration of a model into a TinyML application involves careful conversion, setup, and testing to ensure functionality and compatibility within the constraints of embedded systems.



In the process of building a TinyML application, setting up the interpreter is crucial. The `MicroInterpreter` class in TensorFlow Lite for Microcontrollers is essential for executing a model on provided data. Memory allocation for model tensors is handled by `AllocateTensors()`, which assigns memory from a defined `tensor_arena` to each tensor. This step is critical before running inference.

To provide input for the model, a pointer to the model's input tensor is obtained using `interpreter.input(0)`. The `TfLiteTensor` struct represents tensors, and assertions ensure the input tensor's properties are as expected. Macros like `TF_LITE_MICRO_EXPECT_NE` and `TF_LITE_MICRO_EXPECT_EQ` are used to verify tensor properties, such as shape and data type, ensuring the input tensor is correctly configured as a 2D tensor with a single floating-point value.

Running inference involves setting a value in the input tensor and invoking the model with `interpreter.Invoke()`. The `TfLiteStatus` object returned indicates success or failure. The input tensor's data is managed using a `TfLitePtrUnion` to accommodate various data types. For example, `input->data.f[0] = 0.` assigns a floating-point value to the tensor.

Output is accessed similarly through a pointer. The output tensor's properties are verified, and the result is extracted and checked against expected values using `TF_LITE_MICRO_EXPECT_NEAR`. This ensures the output is within an acceptable range, accounting for model approximation and floating-point calculation errors.

To run inference multiple times, the same input and output tensor pointers are reused. The process is repeated by assigning new input values and invoking the model again. This verifies that the model consistently produces expected results.

Testing is conducted on a development machine for convenience, using tools like Git and Make. This approach simplifies debugging and accelerates development. The workflow involves writing logic in tests that run locally before deploying to hardware, streamlining the development process for embedded applications.

Overall, the setup and testing of a TinyML application involve careful memory management, input/output configuration, and validation through assertions and repeated inference runs. This ensures the model functions correctly and efficiently on microcontrollers.



To download the TensorFlow source code, use the command: `git clone https://github.com/tensorflow/tensorflow.git`. Navigate to the directory with `cd tensorflow`. Use Make to automate build tasks, specifically for TensorFlow Lite for Microcontrollers. The Makefile is located at `micro/tools/make/Makefile`. To run tests, use the command: `make -f tensorflow/lite/micro/tools/make/Makefile test_hello_world_test`. This command builds the code and runs the test, showing output like `~~~ALL TESTS PASSED~~~` if successful. To simulate a test failure, modify `hello_world_test.cc` by changing `input->data.f[0] = 0.;` to `input->data.f[0] = 1.;` and rerun the test.

The project structure includes files in `tensorflow/lite/micro/examples/hello_world`, such as:

- **BUILD**: Lists buildable components.
- **Makefile.inc**: Contains build targets.
- **README.md**: Instructions for building and running.
- **constants.h/.cc**: Defines constants.
- **create_sine_model.ipynb**: Jupyter notebook.
- **hello_world_test.cc**: Test file.
- **main.cc**: Program entry point.
- **main_functions.h/.cc**: Defines `setup()` and `loop()` functions.
- **output_handler.h/.cc**: Manages output display.
- **sine_model_data.h/.cc**: Contains model data.

Subdirectories like `arduino/`, `disco_f76ng/`, and `sparkfun_edge/` provide platform-specific implementations.

The core logic is in `main_functions.cc`, starting with familiar `#include` statements. Important global variables are defined within a namespace to prevent conflicts. The `setup()` function initializes logging, loads the model, sets up the interpreter, and allocates memory. It also obtains pointers to input and output tensors.

The `loop()` function calculates an `x` value using constants `kXrange` and `kInferencesPerCycle`, then runs inference and retrieves the `y` value. Results are output using `HandleOutput()`, which logs `x` and `y` values. Custom implementations for different hardware platforms are provided in specific subdirectories.

Finally, `main.cc` contains the `main()` function, the program's entry point, which calls `setup()` and repeatedly invokes `loop()`, generating a sequence of sine values over time. This structure allows for flexible deployment across various microcontroller platforms.



The text outlines the process of running a microcontroller application using TensorFlow Lite for Microcontrollers, focusing on the setup and execution of the main program loop. The `main()` function initializes the application by calling `setup()` once and then repeatedly calls `loop()` in an infinite cycle. This approach is typical for microcontrollers due to their single-threaded nature and lack of multitasking capabilities.

To test the application, it is built using a Make command, producing an executable binary. The output, which logs inferences, is displayed in a format suitable for microcontrollers, using power-of-two exponents for efficiency. This logging is managed by the `HandleOutput()` function in `output_handler.cc`.

The text then transitions to deploying the application on various microcontroller devices, such as the Arduino Nano 33 BLE Sense, SparkFun Edge, and STM32F746G Discovery kit. Each device has unique output capabilities, requiring custom implementations of `HandleOutput()`.

Microcontrollers are explained as components on a board with various pins, including GPIO pins for digital input/output and possibly analog input pins. These pins are used for communicating with other components, and their modes can be controlled programmatically.

For Arduino, the example uses the built-in LED to visualize sine wave predictions by varying its brightness using PWM. The brightness is adjusted according to the predicted sine value, ranging from -1 to 1. The code for handling output on Arduino involves setting the LED pin to output mode and using `analogWrite()` to control brightness. If PWM is unavailable, the LED will simply switch on or off.

The Arduino IDE is used to manage the project, with the TensorFlow Lite Arduino library installed for access to example code. The example is slightly modified for the Arduino environment, with differences in file extensions and structure. The setup involves selecting the correct board and port in the Arduino IDE, and uploading the code to the device.

Once uploaded, the LED on the Arduino board will indicate the running inference by fading or flashing. The brightness values can also be viewed using the Arduino IDE's Serial Plotter, providing a visual representation of the data over time.

Overall, the text provides a detailed walkthrough of building, deploying, and running a TinyML application on microcontrollers, with specific attention to handling outputs and adapting to different hardware capabilities.



The text describes deploying and modifying a TinyML application on the SparkFun Edge development board, which is designed for machine learning on microcontrollers. The board features an Ambiq Apollo 3 microcontroller with an Arm Cortex M4 core and a set of four LEDs used for visual output.

**Arduino Modifications:**
- Users can modify the application using the Arduino IDE, such as adjusting LED blink rates or logging animations to the serial port. Changes require saving and re-uploading the code.

**SparkFun Edge Overview:**
- The SparkFun Edge is equipped with LEDs for output, which can be controlled to display animations based on sine wave values. The LEDs are configured using the Ambiq Apollo3 SDK, which provides necessary functions for controlling microcontroller features.

**Output Handling:**
- The `HandleOutput()` function initializes the LEDs and determines which LEDs to light based on the `y_value`. Negative values light the blue LED and sometimes the red LED, while positive values light the green LED and sometimes the yellow LED.

**Building and Deploying:**
- To build the project, users need a SparkFun Edge board, a USB programmer, and Python 3 with dependencies like `pycrypto` and `pyserial`. The process involves cloning the TensorFlow repository, building a binary, and signing it with cryptographic keys using scripts from the Ambiq SDK.

**Flashing the Binary:**
- The binary is flashed onto the SparkFun Edge using a USB-C Serial Basic programmer. The board must be put into bootloader mode by pressing specific buttons during the flashing process. Successful flashing is indicated by a sequence of messages in the terminal.

**Debugging and Testing:**
- Issues during flashing can often be resolved by ensuring proper button sequences and connections. Debug data from the board can be viewed using the serial port at a baud rate of 115200, allowing users to see inference results.

The text provides a comprehensive guide for deploying a machine learning model to the SparkFun Edge, modifying code, and handling potential issues during flashing and debugging.



The text provides a detailed guide on deploying and modifying machine learning models on microcontroller devices using TensorFlow Lite for Microcontrollers. It discusses using the SparkFun Edge board and ST Microelectronics STM32F746G Discovery Kit for TinyML applications, emphasizing the deployment of a "Hello World" example and wake-word detection.

**SparkFun Edge Board:**
- Use CoolTerm on Windows to listen to data logged via serial port.
- Modify application code in `tensorflow/lite/micro/examples/hello_world` for custom behavior, such as adjusting LED blink rates or logging animations.

**STM32F746G Discovery Kit:**
- Features an Arm Cortex-M7 processor and runs on Arm’s Mbed OS.
- Equipped with an LCD screen for visual displays.
- The output is handled in `hello_world/disco_f746ng/output_handler.cc` using `LCD_DISCO_F746NG` for LCD control.
- The animation involves drawing a dot on the screen, representing inferences over a sine wave input.
- Modify constants in `constants.cc` for animation speed and smoothness.

**Deployment Process:**
- Use the Mbed toolchain to deploy applications to the STM32F746G.
- Ensure the setup of Mbed CLI, Python 3, and pip.
- Generate an Mbed project directory using TensorFlow Lite’s Makefile.
- Adjust build settings to use C++11 instead of C++98.
- Compile and deploy the application by copying the binary to the STM board.

**Wake-Word Detection:**
- TinyML is used for wake-word detection, allowing devices to listen for specific commands without streaming data continuously.
- This approach enhances privacy, saves battery life, and reduces bandwidth usage.
- The application uses an 18 KB model to recognize words like "yes" and "no," distinguishing them from noise.
- Deployment instructions are provided for devices like Arduino Nano 33 BLE Sense, SparkFun Edge, and STM32F746G Discovery Kit.

**Application Architecture:**
- Follows a sequence: obtain input, preprocess, run inference, postprocess, and act on output.
- The wake-word detection application is more complex than the "hello world" example, involving audio input and LED/screen output based on detected words.

The text emphasizes modifying and experimenting with the provided examples to gain a deeper understanding of deploying and customizing TinyML applications on microcontrollers.



The wake-word application involves complex processing due to its need to handle audio data, classify outputs, and perform continuous inference on live data. The model used is a classifier trained on the Speech Commands dataset, which includes 65,000 one-second utterances of 30 words. It distinguishes between "yes," "no," unknown words, and silence, using spectrograms as input. Spectrograms are 2D arrays of frequency information, which are fed into a convolutional neural network (CNN) designed for multidimensional tensors like images.

The application architecture comprises several components:

1. **Main Loop**: Executes continuously, running processes multiple times per second.
2. **Audio Provider**: Captures raw audio data, customized per device.
3. **Feature Provider**: Converts audio to spectrograms, feeding them into the model.
4. **TF Lite Interpreter**: Runs the model, transforming spectrograms into probabilities.
5. **Model**: Contained in a data array, executed by the interpreter.
6. **Command Recognizer**: Aggregates inference results to determine if a known word is detected.
7. **Command Responder**: Uses device output capabilities to alert users.

Tests for these components are available on GitHub. The `micro_speech_test.cc` shows how to run inference on spectrogram data. It involves loading the model, setting up the interpreter, and allocating tensors. The model uses specific operations, defined at the top of the test file, to avoid unnecessary memory usage. The test checks input tensor properties and verifies that the output probabilities match expectations for given inputs.

The **Audio Provider** interfaces with device microphones to capture audio, returning 16-bit PCM data. Implementations exist for various platforms, and developers can create new ones for additional devices. The `GetAudioSamples()` function retrieves audio data, while `LatestAudioTimestamp()` provides the last capture time.

The **Feature Provider** converts raw audio into spectrograms for the model. It is called during the main loop and defined in `feature_provider.h`. It manages memory for feature data and updates feature slices based on audio inputs.

Overall, the application leverages CNNs for spectrogram analysis, using a structured approach to handle audio data and perform real-time wake-word detection.



The text discusses the implementation and testing of a feature provider for converting audio data into spectrograms, which are then used for wake-word detection in an application. The feature provider is tested using a mock audio provider that simulates audio data, allowing for the testing of the feature provider's functionality without relying on actual audio input. The tests are defined in `feature_provider_mock_test.cc` and utilize a mock audio provider defined in `audio_provider_mock.cc`.

The feature provider's main task is to populate an array representing a spectrogram of one second of audio. It does this by generating new features only for the time elapsed since it was last called, avoiding redundant processing. The spectrogram is represented as a 2D array with 40 columns and 49 rows, where each row represents a 30-millisecond audio sample split into 43 frequency buckets, processed using a Fast Fourier Transform (FFT).

The process involves iterating over slices of audio, requesting audio samples from the mock provider, and using the `GenerateMicroFeatures()` function to perform the FFT and populate the spectrogram data. This function is defined in `micro_features/micro_features_generator.cc`.

The `RecognizeCommands` class is responsible for interpreting the model's output, determining if a known word was spoken. It averages the scores of multiple inferences over a specified window of time to improve detection accuracy. The class uses several parameters: `average_window_duration_ms` for the averaging window length, `detection_threshold` for the minimum score to count as a detection, `suppression_ms` to avoid recognizing the same command too quickly, and `minimum_count` for the minimum number of inferences required.

The `ProcessLatestResults()` method of `RecognizeCommands` processes the model's output, ensuring the input tensor is correct, and averages the results within the window. It identifies the highest scoring category and checks if it meets the detection criteria, considering the score and timing to avoid false positives. The method outputs whether a new command was detected and provides the name and score of the detected command.

The text also covers how the feature provider and command recognizer work together in the context of wake-word detection, emphasizing the importance of efficient data processing on embedded platforms to conserve memory and processing power. The tests for `RecognizeCommands` validate various input scenarios to ensure reliable detection performance.

Overall, the document provides a detailed explanation of how audio data is transformed into spectrograms and how these are used to detect specific spoken words, highlighting the importance of accurate and efficient processing in embedded applications.



The text provides a detailed walkthrough for implementing a wake-word detection application using TensorFlow Lite for Microcontrollers. It starts by explaining the setup of a test instance, `RecognizeCommandsTestBasic`, which involves creating a `MicroErrorReporter` and a `RecognizeCommands` object. A tensor with fake inference results is created to test the `ProcessLatestResults()` function, which determines if a command was heard. The function's success is verified using `TF_LITE_MICRO_EXPECT_EQ`.

The command responder is introduced as a crucial component for outputting detection results. The `RespondToCommand()` function logs detected commands and is called in the main loop whenever inference is performed. Tests ensure the function's callability without crashing.

The core program is defined in `main_functions.cc`, with `setup()` and `loop()` functions. The `setup()` function initializes the model, interpreter, and necessary operations, while `loop()` continuously processes audio input to detect commands. The `RecognizeCommands` instance interprets the model's output, and `RespondToCommand()` is called to notify users of detected words.

For running the application, instructions are provided for macOS, including building and executing the program. The output displays detected words with scores and timestamps. The text also covers deploying the application to microcontrollers like Arduino Nano 33 BLE Sense, SparkFun Edge, and ST Microelectronics STM32F746G Discovery kit. Each device requires specific implementations for audio input and command response.

For Arduino, the text details using the built-in LED to indicate detected commands. The `RespondToCommand()` function toggles the LED with each inference and keeps it on for a few seconds if "yes" is detected. Instructions for deploying the example on Arduino include necessary hardware and software setup.

Overall, the text provides a comprehensive guide to setting up and running a wake-word detection application on various platforms, emphasizing the integration of TensorFlow Lite for Microcontrollers with device-specific implementations for audio input and command response.



The text provides a guide on deploying a wake-word detection application using TensorFlow Lite on microcontrollers, specifically focusing on Arduino and SparkFun Edge boards. It begins by detailing the setup process for the Arduino environment, where users can find the `micro_speech` example under `Examples→Arduino_TensorFlowLite` after installing the necessary library. Users must select the correct device type and port from the Tools menu, and upload the code to the Arduino device. The example program detects the word "yes" and lights up an LED for three seconds. If detection fails, users are advised to repeat the word multiple times. The Serial Monitor in Arduino can be used to view inference results.

The text then transitions to the SparkFun Edge, which has a built-in microphone and four LEDs (red, blue, green, yellow) for displaying results. The command responder for SparkFun Edge is implemented in `sparkfun_edge/command_responder.cc`. It configures the LED pins as outputs using the Apollo3 SDK. The blue LED toggles with each inference, while specific LEDs light up based on detected commands: yellow for "yes," red for "no," and green for unknown commands.

To deploy on the SparkFun Edge, users must clone the TensorFlow repository, build the binary using a make command, and sign it with cryptographic keys. The binary is then flashed to the device using a USB programmer. The guide includes detailed steps for connecting the SparkFun Edge to a computer, identifying the device name, and using the `uart_wired_update.py` script to flash the board. Users must hold the button marked 14 while running the script to enter the bootloader state.

Testing involves pressing the RST button to start the program and saying "yes" or "no" to see corresponding LED responses. Debugging tips are provided for common issues, such as the script hanging at "Sending Hello" or LEDs not lighting up after flashing. The program's debug data can be viewed via the serial port using a baud rate of 115200.

Overall, the text emphasizes the practical application of TensorFlow Lite for microcontrollers, demonstrating how to deploy, modify, and test a simple wake-word detection model on various hardware platforms.



The text provides a guide to deploying and modifying a speech recognition application on the STM32F746G Discovery Kit using TensorFlow Lite for Microcontrollers. Users are encouraged to experiment with the application by modifying the code found in the `tensorflow/lite/micro/examples/micro_speech` folder. Suggestions include using LEDs to display prediction scores, creating a sequence of commands, and controlling additional components like LEDs or servos.

The STM32F746G board, equipped with an LCD display, can show detected wake words. The `RespondToCommand()` function handles command detection and updates the display with messages like "Heard yes!" or "Heard no :(" using different background colors. The code utilizes the `LCD_DISCO_F746NG` library to control the display.

To deploy the application, users need the STM32F746G board, a mini-USB cable, the Arm Mbed CLI, Python 3, and pip. The TensorFlow Lite Makefile is used to generate a directory structure compatible with Mbed. The deployment process involves configuring Mbed, downloading dependencies, and compiling the project using C++11.

Once compiled, the binary is deployed to the board by copying it to the STM32F746G volume. Users can test the application by issuing voice commands and observing the display and debug output via a serial connection. The application logs successful recognitions and can be viewed using screen or CoolTerm at a baud rate of 9600.

The text also covers training a new model for wake-word detection using Google Colab. The TensorFlow Simple Audio Recognition script is used to train models with a dataset of spoken words. The script allows customization of words, preprocessing, model architecture, and quantization for microcontroller efficiency. Training in Colab is accelerated using GPU resources, significantly reducing the time required.

The training process involves setting environment variables for desired words, training steps, and learning rates. The script downloads the dataset, trains the model, and outputs a file for TensorFlow Lite. Users can experiment with different words and configurations to create custom models for various applications.

Overall, the text provides a comprehensive overview of deploying, modifying, and training speech recognition applications on microcontrollers using TensorFlow Lite, emphasizing practical experimentation and customization.



In the training of machine learning models, key parameters include TRAINING_STEPS and LEARNING_RATE. TRAINING_STEPS refers to the number of times a batch of data is processed through the network, updating weights and biases. LEARNING_RATE controls the magnitude of these updates. A high learning rate speeds up convergence but risks overshooting optimal values, while a low learning rate offers precision at the cost of speed. Typically, models start with a high learning rate for rapid convergence, followed by a lower rate for fine-tuning. For example, a model might train for 15,000 steps at a learning rate of 0.001, then 3,000 steps at 0.0001, totaling 18,000 steps.

Dependencies such as TensorFlow are essential for running training scripts. Monitoring the training process is facilitated by TensorBoard, which provides visual insights like accuracy and cross-entropy graphs. These graphs show model performance on training and validation datasets, with accuracy indicating correct predictions and cross-entropy measuring prediction error.

Training begins with a script that sets various parameters, such as the model architecture, data directories, and training configurations. During training, TensorBoard updates in real-time, displaying metrics like accuracy and loss. Smoothing features in TensorBoard help clarify trends by reducing graph fuzziness.

Colab, a platform for executing scripts, can disconnect if inactive. To prevent losing progress, users must interact with Colab at least once every 90 minutes. Colab sessions have a maximum duration of 12 hours, so longer training requires alternative solutions.

Once training is complete, the model's weights and biases are saved in checkpoint files. These are combined with the model's operations to create a frozen graph, a static representation used for inference. The frozen graph is converted to TensorFlow Lite format using the `toco` command, which prepares the model for deployment on devices.

The TensorFlow Lite model is then transformed into a C array using the `xxd` command, allowing deployment on microcontrollers. This involves updating specific files in the project to incorporate the new model data and labels. For example, `micro_features/tiny_conv_micro_features_model_data.cc` is updated with the new model array and length, while `micro_features/micro_model_settings.cc` adjusts labels to match the model's output.

By following these steps, the trained model is integrated into a project, ready for deployment on hardware platforms.



In the process of updating command responder code for different devices, such as Arduino, SparkFun Edge, and STM32F746G, the primary task is to modify the logic to handle new voice commands like "on" and "off." For Arduino, the LED is programmed to light up based on the first letter of the command. By checking the second letter, we can distinguish between "on" and "off" to control the LED state appropriately. Similarly, for SparkFun Edge, different LEDs are activated depending on the command, using the second letter for differentiation. For STM32F746G, the display shows different messages based on the command, and changes are made to handle "on" and "off."

Training the model involves setting up a suitable environment, preferably with a GPU on a Linux system, to speed up the process. Using a cloud VM or a Linux workstation with TensorFlow GPU Docker image is recommended. The training process requires installing specific TensorFlow nightly builds, cloning the TensorFlow repository, and running training scripts. Post-training, the model is frozen, converted to TensorFlow Lite format, and then into a C source file for embedding.

The model's functionality is based on feature generation, transforming raw audio data into a more manageable format for machine learning. This involves creating spectrograms from audio waveforms, which are easier for models to interpret. The spectrograms are generated using a Fourier transform, noise reduction, and a log scale application. This process reduces the data size and emphasizes relevant features, making it suitable for resource-constrained environments.

The neural network model used is a small graph with a convolutional layer followed by a fully connected layer and a softmax layer. The convolutional layer identifies 2D patterns in input images using filters, which are small patches that match parts of the input image. Each filter's output indicates how closely the input matches the learned patterns, aiding in class differentiation.

Overall, the approach combines effective feature generation and a simple yet efficient neural network architecture to achieve accurate wake-word detection in embedded systems.



The stride is set to two in both directions, halving the output image size due to skipping every other pixel. The input image is 49x40 pixels with a single channel, resulting in an output of 25x20 pixels with eight channels after convolution. A fully connected layer follows, matching input values with weights to produce four output values for classes: "silence," "unknown," "yes," and "no." Each class has 4,000 weights, corresponding to the input size. The softmax layer enhances the difference between the highest output and others, aiding in score interpretation. Scores are not true probabilities without calibration, as distribution affects them.

Biases and ReLU activation functions are added to convolutional and fully connected layers, setting negative outputs to zero, which accelerates training convergence. The model's output is four scores, with the highest indicating the predicted class. The model processes the last second of audio, requiring frequent runs (10-15 times per second) to capture complete words. A postprocessing class averages scores over time to trigger recognition when scores are consistently high, implemented in the Recognize Commands class.

Training involves using the Speech Commands dataset, containing over 100,000 one-second WAV files with various command words and digits. The dataset is designed to train models to recognize command words and handle unknown words. The training script allows customization of recognized words and adjusts parameters like silence and unknown percentages. Silent examples are snippets of background noise, and unknown samples are words not in the wanted list.

For custom datasets, the training script uses a directory structure with subfolders for each class and a background noise folder. The --data_dir argument specifies the dataset location. Recognition duration can be set with --sample_duration_ms. Classes can be any audio event, provided enough WAVs are available. Data gathering is challenging, requiring many examples covering variations.

Data augmentation enlarges training data by applying transformations like altering volume, adding noise, or trimming clips. These transformations enhance dataset effectiveness but must be balanced to avoid distortion. Command-line arguments control augmentation strength.

The model architecture can be modified for specific applications, balancing size, speed, and accuracy. Custom architectures require changes to the models.py file and specifying the desired model with --model_architecture. This flexibility allows adaptation to different recognition tasks beyond the default "yes/no" model.



### Speech Commands and Model Architecture

Developing speech recognition with a small memory footprint involves complex components like feature generation, model architecture, and data augmentation. The command line can call custom models using specific parameters, such as `--model_architecture=my_model_name`. The process involves trade-offs based on product requirements, transitioning from training to deployment.

### Person Detection and Vision Models

Vision is crucial for navigating environments, and convolutional neural networks (CNNs) have enabled machines to process visual data. These networks filter complex inputs into recognizable patterns, aiding in tasks like autonomous driving and medical diagnosis. Privacy concerns arise with internet-connected cameras, but TinyML offers solutions by running vision models on microcontrollers without internet connections, ensuring privacy.

### TinyML and Privacy

TinyML allows devices to process visual data locally, reducing privacy risks. For example, a smart stove can detect unattended usage without internet connectivity. These microcontroller-based systems can operate on minimal power, suitable for remote locations like jungles or reefs. Vision sensors can detect objects without sharing image data, ensuring security even when connected to the internet.

### Application Development

The chapter outlines building an embedded application using a pretrained person-detection model on a microcontroller with a camera. The application classifies images to detect human presence, using platforms like Arduino Nano 33 BLE Sense and SparkFun Edge. Camera modules capture image data, which is processed by a convolutional neural network trained on the Visual Wake Words dataset.

### Application Architecture

The application follows these steps: obtain input, preprocess, run inference, postprocess, and use results. Image data, simpler than audio, is processed directly by the model. The model outputs probabilities indicating the presence of a person. It uses the MobileNet architecture, optimized for devices like mobile phones.

### Implementation Details

The application consists of a main loop, image provider, TensorFlow Lite interpreter, model, and detection responder. The model, too large for direct inclusion, is downloaded during the build process. Tests verify the model's functionality, ensuring proper input dimensions and inference execution.

### Conclusion

The chapter demonstrates the ease of working with camera data on microcontrollers and running vision model inference. It highlights the potential of TinyML in creating secure, privacy-conscious applications with minimal power requirements.



The text discusses a machine learning model designed to detect the presence of a person in an image using TensorFlow Lite for Microcontrollers. The model categorizes images into three categories: "unused," "person," and "not a person," with each category represented by a uint8 value ranging from 0 to 255. The core of the application involves setting up an interpreter, allocating memory for tensors, and using a loop to capture images, run inference, and respond to detections.

The image provider interface is defined in `image_provider.h` and implemented in `image_provider.cc`. It captures images from a camera and writes them to the model’s input tensor. The function `GetImage()` is central to this process, and its platform-specific implementation is crucial for obtaining image data.

The detection responder, defined in `detection_responder.h` and implemented in `detection_responder.cc`, logs inference results. The `RespondToDetection()` function takes the scores for "person" and "not a person" and processes them to determine the appropriate response.

The application’s main functions are in `main_functions.cc`. These include setting up the model, interpreter, and input tensor, and then continuously capturing images, running inference, and responding to detections. The main loop in `main.cc` repeatedly calls the setup and loop functions.

The text also describes deploying the application to microcontrollers like the Arduino Nano 33 BLE Sense and SparkFun Edge. Since these devices lack built-in cameras, external camera modules like the Arducam Mini 2MP Plus are recommended. The Arducam connects to the Arduino and captures images, which are then resized and processed to fit the model's input requirements. The captured image is decoded from JPEG format and converted to grayscale.

For Arduino, the detection responder uses an RGB LED to indicate detection results: blue for inference, green for "person," and red for "not a person." The LED setup is handled in `arduino/detection_responder.cc`.

Overall, the application demonstrates the simplicity of deploying machine learning models on microcontrollers, highlighting the importance of interfacing with device-specific hardware and managing input and output processes effectively.



The text outlines the implementation of a person detection application using the Arduino Nano 33 BLE Sense board and the Arducam Mini 2MP Plus. The RGB LEDs on the board are controlled using a simple logic where the green LED lights up when a person is detected and the red LED when no person is detected. The blue LED flashes after each inference. The setup requires connecting the Arducam to the Arduino using jumper cables, with specific pin connections provided.

To run the example, the Arduino IDE is used along with the Arduino_TensorFlowLite library, which is available for installation via the IDE's library manager. The example code for person detection can be found under the Examples menu. Additional libraries needed include the Arducam library and JPEGDecoder library, both of which require specific configuration changes to work with the Arduino Nano 33 BLE Sense.

Once the setup is complete, the application can be tested by pointing the camera at objects and observing the LED responses. The inference process takes approximately 19 seconds, and results can be viewed on the Arduino Serial Monitor. The application is designed to capture image data when the blue LED flashes, and it is important to ensure the camera is correctly oriented and in a well-lit environment for accurate detection.

For customization, users are encouraged to modify the code, such as ignoring ambiguous inputs or using detection results to control other components. The SparkFun Edge board, optimized for low power consumption, is also discussed as an alternative platform, using the Himax HM01B0 camera module for image capture.

The SparkFun Edge implementation involves initializing the camera and capturing frames using the Apollo3 SDK and the HM01B0 driver. The GetImage() function handles image capture, and the detection responder toggles LEDs based on inference results. The setup for the SparkFun Edge requires a USB programmer and Python 3, with instructions for building and deploying the code provided in the README.md file.

Overall, the project demonstrates transforming complex visual input into a simple Boolean output, "person" or "no person," using microcontroller-based vision applications.



To deploy a person detection model to the SparkFun Edge, first compile the binary using the Makefile command with the SparkFun Edge as the target. The binary is created as a `.bin` file at a specified location. Verify its existence with a test command. If missing, check the make command output for errors.

Next, sign the binary using cryptographic keys from the Ambiq SDK. Set up dummy keys and use a Python script to create a signed binary. This binary is then used to create a final version for flashing to the device.

To flash the binary, connect the SparkFun USB-C Serial Basic programmer to the SparkFun Edge and your computer. Identify the device name by listing connected devices before and after attaching the programmer. Set environment variables for the device name and baud rate.

Put the board into bootloader state by holding button 14, pressing the RST button, and then running a flashing script. The script sends the binary to the board, and you should see a sequence of messages indicating successful flashing. If errors occur, ensure the correct button sequence and connections.

Test the program by pressing the RST button. The blue LED toggles for each inference, and based on the camera input, either the orange or green LED lights up. Ensure good lighting for accurate results, as the model trades some accuracy for size.

If issues arise, such as hanging during flashing or LEDs not lighting up, check connections and try flashing again. The red LED indicates camera module problems. Debug data can be viewed via the serial port using a specified baud rate.

Modify the application by editing code in the `person_detection` folder. Possible changes include adjusting the detection responder or integrating additional components like LEDs or servos. The vision model accepts raw input and provides simple outputs, exemplifying machine learning's ability to filter noise.

For training a custom model, use a machine with a high-end GPU. Renting a cloud instance is recommended, with Google Cloud Platform being a convenient choice. Set up involves creating a project, enabling APIs, and configuring a virtual machine with TensorFlow and NVIDIA drivers. Choose appropriate CPU, RAM, and GPU settings, and ensure the GPU drivers are installed. Increase the boot disk size for dataset storage.

These steps enable deploying and testing a person detection model on microcontrollers, with the flexibility to train custom models as needed.



To set up a Google Cloud Platform instance for training a person detection model, start by creating a Python 3 Jupyter notebook. This interface allows you to run Python commands and shell commands prefixed with an exclamation mark (!). Keras is typically recommended for building TensorFlow models, but due to feature limitations, this guide uses `tf.slim`, an older interface. Clone the TensorFlow models repository from GitHub and ensure Python can access its modules by updating the `PYTHONPATH`.

For dataset preparation, use the COCO dataset, which includes bounding boxes for object categories, including "person." Convert these into classification labels using a Slim script, resulting in a large download of about 40 GB. This dataset, known as Visual Wake Words, is useful for testing embedded computer vision models.

To train the model, use the `train_image_classifier.py` script with parameters like `--model_name=mobilenet_v1_025` and `--train_image_size=96`. Training can take days on a single-GPU instance, but early results can be observed within hours. Key parameters include learning rate, label smoothing, and batch size, which influence how the model learns. Monitor training progress using TensorBoard, which provides visualizations of metrics like loss and accuracy.

Evaluate the model using `eval_image_classifier.py` to determine accuracy, which should reach about 84% after full training. Once satisfied, convert the model to TensorFlow Lite for deployment on embedded devices. This involves exporting the model to a GraphDef protobuf file, freezing weights, and quantizing the model. Use `TFLiteConverter` for conversion, preparing representative datasets to optimize quantization.

Finally, convert the TensorFlow Lite model into a C source file using `xxd`, enabling deployment on devices without a filesystem. This process embeds the model data directly into the program's executable, stored in flash memory.



The text discusses the process of training and deploying machine learning models for object detection and gesture recognition on embedded devices, focusing on MobileNet architectures and TensorFlow Lite.

### Object Detection with MobileNets
MobileNets are efficient architectures for image recognition, designed to minimize computational requirements while maintaining accuracy. They use depthwise separable convolutions, reducing calculations compared to traditional convolutions. MobileNet v1, used here, consists of 14 depthwise separable convolution layers, an average pool, and a fully connected layer. A width multiplier of 0.25 reduces computations to around 60 million per inference.

To customize models for different objects, the COCO dataset can be utilized, which contains over 60 object types. If an object isn't in COCO, transfer learning on a smaller custom dataset is possible. The process involves substituting paths in scripts for data preparation and training.

### Gesture Recognition with Magic Wand
The "magic wand" application demonstrates gesture recognition using accelerometer data. It uses a convolutional neural network model, trained on gestures like "wing," "ring," and "slope." The model processes raw accelerometer data to classify gestures, outputting probabilities for each class. The application architecture involves capturing accelerometer data, running inference, and responding with LED signals or serial port outputs. The model's accuracy is enhanced by requiring multiple confirmations before recognizing a gesture.

### Application Structure
The application follows a loop of obtaining input, running inference, and processing output. Key components include:

- **Accelerometer Handler**: Captures and buffers data.
- **TF Lite Interpreter**: Runs the model.
- **Gesture Predictor**: Interprets model output.
- **Output Handler**: Manages LED and serial outputs.

The model is compact, suitable for microcontrollers like Arduino Nano 33 BLE Sense and SparkFun Edge. The application is tested using scripts that simulate end-to-end inference and data handling processes.

### Implications of Machine Learning
Machine learning models can replace heuristic algorithms, reducing the need for deep domain knowledge. They can recognize patterns and classify data more accurately than handcrafted algorithms, as demonstrated by models detecting congestive heart failure with high accuracy.

### Potential Applications
Machine learning on embedded devices can revolutionize fields such as environmental monitoring, industrial automation, robotics, disease diagnosis, and human-computer interaction. The "magic wand" project exemplifies how complex sensor data can be transformed into meaningful actions, showcasing the potential of smart sensors in various applications.



The text describes the process of running inference on accelerometer data using TensorFlow Lite Micro. The model's input tensor is prepared by ensuring it matches the expected shape `(1, 128, 3, 1)` and type `kTfLiteFloat32`. This shape represents 128 three-axis accelerometer readings. Data is written to the input tensor from a predefined array, and the model is invoked to perform inference.

The output tensor is checked to ensure it has the expected shape `(1, 4)`, with each element representing a probability for different gestures: "wing," "ring," "slope," and "unknown." The inference results are verified to ensure the expected gesture score is the highest.

The process is repeated for different gestures, such as "slope," to ensure accuracy across various inputs. The accelerometer handler is responsible for populating the input tensor with data. Tests verify the handler's functionality, ensuring it returns true when sufficient data is available.

The `PredictGesture()` function reduces false positives by requiring a gesture to be detected across consecutive inferences. It uses thresholds to determine the validity of a gesture, which vary based on the gesture's complexity and device performance.

The text also outlines tests for the gesture predictor, which validate its ability to handle different scenarios, such as interrupted predictions or insufficient probabilities. The output handler displays the results to the user based on predictions from `PredictGesture()`.

The core logic in `main_functions.cc` integrates these components. It initializes variables, sets up the model, and manages the input tensor. The `loop()` function reads data from the accelerometer, processes it, and handles gesture recognition, ensuring the buffer is not cleared unnecessarily.

Overall, the text provides a detailed walkthrough of setting up and running a gesture recognition application using TensorFlow Lite Micro, emphasizing the importance of input validation, inference accuracy, and handling device-specific implementations efficiently.



The provided text outlines the implementation of a gesture recognition application using a microcontroller. The core functionality involves reading accelerometer data, running inference to predict gestures, and handling outputs based on predictions. Here's a concise overview:

1. **Data Acquisition and Inference**: The program reads accelerometer data and checks if new data is available. If not, it waits for the next cycle. When data is present, it runs inference using a TensorFlow Lite interpreter. If inference fails, an error is reported.

2. **Gesture Prediction**: The `PredictGesture` function analyzes inference results to determine which gesture was detected. If the gesture index is valid (less than 3), it sets a flag to clear the buffer for the next data read. The `HandleOutput` function then processes the detected gesture.

3. **Program Structure**: The main function initializes the setup and continuously calls the loop function to process data and handle gestures. The program is built and run using specific commands, but it won’t produce output without accelerometer data.

4. **Microcontroller Deployment**: The application is deployed on two devices: Arduino Nano 33 BLE Sense and SparkFun Edge. The Arduino implementation involves specific constants and downsampling due to different accelerometer rates.

5. **Arduino-Specific Implementation**:
   - **Constants and Thresholds**: The `kConsecutiveInferenceThresholds` constant defines the number of consecutive inferences required for gesture detection, adjusted for the Arduino's characteristics.
   - **Data Handling**: The accelerometer handler captures data at 119 Hz and downsamples it to 25 Hz, matching the model's requirements. It involves configuring the IMU and using a FIFO buffer to store recent measurements.
   - **Downsampling**: The process involves keeping one in every few samples to achieve the target rate, ensuring compatibility with the model trained on SparkFun Edge data.

6. **Output Handling**: The output handler logs detected gestures to the serial port and toggles an LED on the Arduino board. ASCII art is printed for each gesture type.

7. **Running and Deploying the Example**:
   - **Requirements**: An Arduino Nano 33 BLE Sense, a micro-USB cable, and the Arduino IDE are needed. The TensorFlow Lite Arduino library must be installed.
   - **Library Modifications**: The Arduino_LSM9DS1 library requires patching to enable the FIFO buffer, which involves modifying specific source files.

This concise summary captures the essential steps and components involved in deploying a gesture recognition application on microcontrollers using TensorFlow Lite. The focus is on data acquisition, processing, and output handling tailored to the hardware's capabilities.



To deploy an Arduino-based magic wand application, begin by ensuring your Arduino device is connected via USB. Select the correct board and port from the Tools menu in the Arduino IDE. If your device isn't listed, install its support package via the Boards Manager. Once set up, upload the code to your device. After a successful upload, the Arduino's LED should flash, indicating readiness for gesture recognition.

For gesture testing, hold the board as illustrated, with the USB adapter facing left. Start with the "wing" gesture by moving your hand quickly to illuminate the red LED. Attach the board to a stick or wand for more authentic use, ensuring it's rigid to avoid affecting accelerometer readings. Next, try the "ring" gesture by tracing a circle, and finally, the "slope" gesture by drawing a triangle corner in the air.

If issues arise, like the LED not lighting up, try resetting the board or reconnecting the USB. Ensure the board is oriented correctly and gestures are performed as shown in video demonstrations. Modify the code to adjust gesture sensitivity, create programs for gesture-controlled tasks, or enable Bluetooth for wireless operation using the ArduinoBLE library.

For SparkFun Edge, the setup involves configuring the accelerometer via `SetupAccelerometer()`, enabling its FIFO buffer to store up to 32 data points. The `ReadAccelerometer()` function checks for new data, resets the buffer if needed, and fills an array for inference. The function ensures enough data is available before prediction and handles data copying for model input.

The output handler manages LED responses based on detected gestures, toggling LEDs and outputting ASCII art for confirmation. To run the SparkFun Edge example, ensure you have the board, USB programmer, and Python 3. Clone the TensorFlow repository, build the binary using the Makefile, and sign it with cryptographic keys using Ambiq SDK scripts. The final binary is flashed onto the device for operation.

Ensure all dependencies are installed, and follow the README.md for any updates in the build process. The setup allows for gesture recognition using accelerometer data, with visual feedback provided by LEDs, making it a versatile platform for gesture-based applications.



Flashing the SparkFun Edge involves overwriting its current program in the 1 MB flash memory. To do this, connect the SparkFun USB-C Serial Basic programmer to the board via a six-pin header, ensuring correct alignment of pins labeled BLK and GRN. Once connected to your computer, identify the device name by listing attached devices before and after connection. If two devices appear, use the one beginning with “wch”.

Set a shell variable for the device name with `export DEVICENAME=<device name>` and specify the baud rate using `export BAUD_RATE=921600`. To flash the board, put it into bootloader mode by holding the button marked 14, pressing RST, and running the flashing script with the command provided, substituting values for `DEVICENAME` and `BAUD_RATE`.

During flashing, hold button 14 until data packets are sent. Successful flashing is indicated by the message "Sending Reset Command. Done." If errors occur, retry the process. After flashing, test the program by pressing RST. The yellow LED should toggle, indicating inference. Use `screen ${DEVICENAME} 115200` to view serial output and perform gestures with the board oriented correctly.

For gesture recognition, start with the "wing" gesture, then try "ring" and "slope". If issues arise, such as LEDs not functioning or gestures not recognized, check connections, reset the board, and ensure correct orientation. Practice gestures as needed, and refer to video demonstrations for guidance.

To modify or extend the application, edit the code in the `tensorflow/lite/micro/examples/magic_wand` folder. Experiment with threshold values in `constants.cc` or implement Bluetooth transmission for detection results, following examples in the Ambiq SDK.

The training process for the magic wand model involves using a small dataset of around 150 examples per gesture. Training scripts in TensorFlow prepare data, perform data augmentation, define model architecture, and convert the model to TensorFlow Lite format. The process is demonstrated in a Jupyter notebook, which can be run in Google Colab with GPU acceleration for efficiency.

To train the model, install dependencies, prepare the data by downloading and splitting it into sets, and follow steps outlined in the notebook. The dataset consists of directories for each gesture, with files representing raw data from gesture captures. Each file contains accelerometer readings for multiple performances, which are used to train the model. The simplicity of the gesture recognition problem allows for effective training on a small dataset, highlighting the potential for embedded machine learning applications with limited data.



The text outlines a process for preparing and training a machine learning model using accelerometer data. The initial step involves cleaning raw data using `data_prepare.py`, which removes garbage characters and generates synthetic data to augment training, particularly for the "unknown" category. Synthetic data helps speed up training but cannot entirely replace real-world data due to its unpredictability.

Next, `data_split_person.py` divides the data into training, validation, and test sets based on the person who created it, ensuring the model generalizes well to new data. The split ratio is approximately 60%/20%/20%, which is standard in machine learning. This method tests the model's ability to handle individual variations in gestures. An alternative is random splitting, which exposes the model to all individuals' data in each set but risks overfitting.

After data preparation, TensorBoard is loaded to monitor the training process. The model, a convolutional neural network (CNN), is trained using `train.py`, which sets up the architecture and applies data augmentation to enhance the dataset. The augmentation includes time shifts, noise addition, and acceleration increases, improving the model's robustness.

The model architecture is detailed, featuring layers like Conv2D, MaxPooling2D, Dropout, Flatten, and Dense, with the input shape being (None, 128, 3). The model's size is approximately 16.8 KB, indicating its efficiency. Training results show a promising validation accuracy of 0.9743 and a test accuracy of 0.9323, suggesting good performance, albeit slightly lower on unseen data.

A confusion matrix reveals areas for improvement, particularly in distinguishing the "ring" gesture from "unknown." The model is converted to TensorFlow Lite format, reducing its size significantly through quantization, making it suitable for deployment in resource-constrained environments.

The model's operation is explained as transforming a sequence of accelerometer readings into probabilities for each gesture using a CNN. This method leverages the relationships between adjacent values, making CNNs ideal for analyzing time-series data. The architecture is defined in `train.py` using Keras, with layers designed to extract features from raw accelerometer data.

The Conv2D layer is pivotal, using filters to identify features like upward motion. The output shape reflects the number of features extracted, and the convolution window spans four measurements across three axes, allowing the model to capture changes over time.

Overall, the text provides a comprehensive guide to data preparation, model training, and evaluation, emphasizing the importance of data cleaning, augmentation, and careful splitting to ensure robust model performance.



The text discusses the architecture of a convolutional neural network (CNN) designed for gesture recognition using sensor data, specifically accelerometer inputs. The process begins with a convolutional layer that applies a filter to the input data, creating feature maps. Padding is used to ensure the filter covers all data points. The output is then passed to a MaxPool2D layer, which reduces the data size by selecting the maximum value within a specified window, concentrating relevant information and discarding less significant features.

After max pooling, a Dropout layer is applied to randomly set some tensor values to zero during training, a regularization technique to prevent overfitting by introducing noise and variation. The data then passes through another convolutional layer with 16 filters, followed by additional max pooling and dropout layers, further distilling the input into a high-level representation.

The data is flattened into a single dimension and fed into a Dense layer, a fully connected layer that learns the significance of input combinations. This layer outputs 16 values representing the compressed form of the original input. A final Dense layer with a softmax activation function reduces these to four classes, representing different gestures with probabilities that sum to one.

The architecture is efficient for classifying time-series sensor data, capable of identifying high-level features that serve as a "fingerprint" for each gesture. It is compact, fast, and suitable for embedded machine learning applications.

The text also covers training a custom model with new gestures. This involves capturing accelerometer data, modifying training scripts, and organizing data files. Data is logged using a SparkFun Edge board, and scripts are adjusted to accommodate new gesture and person names. Training involves experimenting with hyperparameters to achieve optimal accuracy.

Finally, the text emphasizes the importance of understanding embedded machine learning applications and provides resources for further study, such as books and online courses. It also introduces TensorFlow Lite for Microcontrollers, the framework used for the examples, and hints at further exploration of TinyML applications, optimization, and deployment in subsequent chapters.



TensorFlow is Google's open-source machine learning library, released in 2015, and widely used for training and deploying models across various platforms, including Linux, Windows, and macOS. It supports numerous applications, from speech recognition to video analysis, and is the primary machine learning library within Google. Initially designed for desktop environments, TensorFlow's main interface language is Python, which suits server applications but poses challenges for mobile platforms due to its large executable size.

To address mobile constraints, Google introduced TensorFlow Lite in 2017, focusing on efficient model inference on mobile devices. TensorFlow Lite omits certain features of its predecessor, such as training capabilities and support for all data types, to reduce size and complexity. It supports 8-bit quantization, optimizing performance and reducing model size significantly, and provides highly optimized libraries for mobile hardware.

For even more constrained environments, TensorFlow Lite for Microcontrollers was developed in 2018. It targets embedded platforms with severe memory limitations, often lacking standard libraries and operating systems. Key requirements include avoiding OS dependencies, minimizing binary size by excluding standard C/C++ library dependencies, and eliminating dynamic memory allocations. The framework uses a fixed-size memory arena for temporary allocations to prevent memory fragmentation.

TensorFlow Lite for Microcontrollers is written in C++11, focusing on 32-bit processors common in modern embedded systems. It uses an interpreter model approach, which allows for flexibility in model management compared to code generation. Project generation in TensorFlow Lite facilitates easy integration into various IDEs and build systems, supporting platforms like Mbed, Keil, and Arduino.

The framework's build system, originally Unix-based, supports project generation for different environments, allowing users to download pre-generated project files for their preferred IDEs. This system enhances ease of use across platforms and simplifies the process of merging updates and modifications back into the main codebase.

Overall, TensorFlow and its variants cater to diverse hardware and application requirements, balancing performance, size, and functionality to extend machine learning capabilities from cloud to edge devices.



To address the issue of switching implementations at compile time, the library is divided into small modules, each with a default C++ implementation file and a header defining the interface. Specialized versions are saved in subfolders named after the platform or feature, automatically used by the build system for that target. This method allows for cross-platform compatibility and optimizations.

An example is the audio provider module in TensorFlow Lite for Microcontrollers, which captures audio data. The default implementation returns zero-filled buffers, allowing prototyping without a microphone. Specialized implementations exist for different platforms, like the STM32F746NG board, where actual audio capture is implemented. The build system uses the specialized version by specifying the target platform, ensuring the correct implementation is used without altering the calling code.

This approach is also used for optimization. For instance, the depthwise convolution operation has a default, simple implementation, but an optimized version exists in a `portable_optimized` subfolder. These optimizations are generic and not tied to specific hardware, improving performance across platforms.

Makefiles are used for building projects, chosen for their flexibility despite complexity. They define source and header files, modify them based on platform and tags, and include sub-Makefiles for platform-specific customizations. The `specialize()` function handles specialized versions, and `generate_microlite_projects()` creates standalone projects for different IDEs.

External libraries are downloaded during the build process, using rules that ensure correct archives are obtained. Headers and source files needed for builds must be explicitly listed to ensure successful project generation.

Tests are crucial, with unit tests expected for all code. Tests are named with a `_test.cc` suffix and follow constraints suitable for microcontrollers, avoiding dynamic memory allocation and external dependencies. A minimal test framework is used, defined in `micro_test.h`, with macros for assertions.

This modular and flexible approach allows for easy extension and optimization while maintaining simplicity and cross-platform functionality. It supports experimentation and incremental performance improvements, ensuring correct results before optimization.



TensorFlow Lite for Microcontrollers aims to facilitate running machine learning models on diverse devices and platforms. The core code is highly portable, and the build system simplifies integrating new environments. A critical requirement is the ability to print logs for debugging and test validation. This is essential for determining if tests pass by checking for specific output strings like `~~~ALL TESTS PASSED~~~`.

### Supporting New Platforms

To support a new hardware platform, the primary task is implementing a logging mechanism. This involves creating a `DebugLog()` function tailored to the platform's logging capabilities. For instance, on Linux, `fprintf()` can be used, whereas microcontrollers might require platform-specific methods such as using assembly for ARM Cortex-M or UART connections for Arduino.

### Implementing `DebugLog()`

The `DebugLog()` function is fundamental for error reporting. If the platform supports the standard C library, the default implementation using `stdio.h` can be used. Otherwise, a custom implementation is necessary. The process involves:

1. Creating a minimal example to print a string using the platform's logging facilities.
2. Modifying `debug_log.cc` to incorporate this logging method.
3. Testing the implementation using the provided error reporting test.

### Subfolder Specialization

To integrate platform-specific code, use subfolder specialization. Create a subfolder (e.g., `my_mcu`) in the TensorFlow Lite directory and place the custom `debug_log.cc` inside. This allows the build system to use the specialized implementation when generating projects.

### Generating Projects

Use the `Makefile` system to generate standalone projects for different IDEs or build systems. This involves:

- Running commands to generate project files.
- Ensuring the correct source files and settings are included in the build.

### Integrating with the Makefile Build

To fully integrate with TensorFlow's build system, ensure a publicly downloadable toolchain and configure command-line flags and dependencies in a sub-Makefile. For advanced integration, consider using emulation tools like Renode for continuous integration testing.

### Supporting New IDEs

TensorFlow Lite can generate projects for various development environments. If a new IDE requires specific transformations (e.g., changing file extensions), modify the Makefile scripts to accommodate these needs. This ensures compatibility and ease of use across different platforms.

### Managing Code Changes

To handle updates and changes efficiently:

1. Generate a new project with the updated TensorFlow Lite version.
2. Use a merge tool to compare and integrate changes between the new and existing project files.
3. Maintain consistent folder structures to simplify merging and tracking changes.

By following these guidelines, developers can effectively support and integrate TensorFlow Lite for Microcontrollers on new platforms, ensuring robust logging and testing capabilities essential for machine learning applications on embedded systems.



The process of merging changes in code when working with TensorFlow Lite for Microcontrollers involves several strategies. For minor local changes, manually copying modified code into the new project might suffice. For more complex changes, using Git's merging capabilities can help. Unlike traditional code generation, TensorFlow separates code into logical files, simplifying merging and tracking changes. It's crucial to maintain a single "source of truth" for development files to avoid conflicts, especially with multiple developers. Modified files should be tracked and integrated back into the source control system, ensuring consistency.

Contributing to TensorFlow involves submitting pull requests, which undergo a code review process. Significant changes often require a design document, and maintaining a public fork allows for experimental changes. Automated tests run against pull requests, and contributors are encouraged to achieve 100% test coverage. The Google style guide is used for code formatting. Contributions are vital, as external contributors now exceed those from Google.

Supporting new hardware accelerators with TensorFlow Lite for Microcontrollers involves running unoptimized reference code on new platforms to verify functionality before focusing on hardware optimization. The interpreter supports synchronous execution, with accelerators enhancing compute-intensive functions. This approach facilitates quick prototyping and incremental changes.

Understanding TensorFlow Lite's file format is essential for model storage and execution. Models, trained on desktops, are converted to TensorFlow Lite files using a converter. This process involves transforming variable training values into constants and optimizing operations. FlatBuffers are used for serialization, offering efficient memory usage and direct access to model data without parsing or copying. The schema defines data structures, and the generated C++ code provides access to model properties.

Overall, effective merging, contributing, and hardware support are key to utilizing TensorFlow Lite for Microcontrollers, while understanding the file format ensures efficient model handling.



The TensorFlow Lite for Microcontrollers framework manages tensors and operations using a structured format. Tensors store raw data in buffers and include metadata such as shape and data type. Subgraphs, a core component, consist of operators, connections, and buffers, inputs, and outputs. Each subgraph typically represents a model and must currently be singular for microcontroller applications. Operators within subgraphs are ordered topologically to simplify execution, ensuring all required inputs for an operation are pre-calculated.

Tensors are defined with properties like shape, type, and buffer index, which links to the data in the model. They also include optional debugging names and quantization parameters for mapping low-precision values. Operators have an opcode index referring to a list of OperatorCodes, defining the type of operation. They also include input and output tensor indices, built-in or custom options, and an experimental feature, `mutating_variable_inputs`, for handling mutable inputs.

TensorFlow Lite supports built-in and custom operations. Built-ins have predefined parameters, while custom operations use FlexBuffers for dynamic parameter structures. The MicroInterpreter accesses tensors and operators from subgraphs, focusing on inference rather than training.

Porting TensorFlow Lite operations to microcontrollers involves several steps. The reference code for operations is separated from a large header file into smaller, manageable headers. These headers are included in the build rules to maintain functionality. Micro operator implementations, modified from mobile versions, avoid dependencies like dynamic memory allocation. They are optimized for embedded environments by moving memory-intensive operations to invocation time and minimizing parameter checks to reduce code size.

Testing on microcontrollers uses a custom Micro Test library, avoiding dynamic memory allocation. Tests are written in a single file, using stack allocation and specific macros for error checking. The tests ensure kernel implementations are standalone and independent of the broader framework.

Building and testing involve using the Bazel build system for initial development on x86 architecture, followed by transitioning to Make for embedded deployment. This process includes adding the new operator to the `AllOpsResolver` for easy integration and ensuring compatibility with the microcontroller environment.

Overall, TensorFlow Lite for Microcontrollers focuses on efficient execution of machine learning models on constrained devices by optimizing memory usage and simplifying operations within the limitations of embedded systems.



The text discusses the process of developing machine learning solutions for embedded systems, particularly focusing on TensorFlow Lite for Microcontrollers. It highlights the importance of understanding the framework's structure and design decisions to effectively apply it to custom applications. The text emphasizes the need for optimization, debugging, and safeguarding user privacy and security.

Key considerations include deciding whether to use a microcontroller or a larger device for initial prototypes. While embedded systems offer advantages like low energy consumption, they are complex to develop. For initial testing, using devices like Raspberry Pi or NVIDIA’s Jetson boards is recommended due to their ease of use and flexibility.

The text stresses the importance of understanding the capabilities of neural networks, which excel at tasks that humans can solve quickly, such as recognizing objects or sounds. However, they are less suited for planning or higher-level tasks. The integration of neural networks into larger systems can enhance performance for specific tasks, like predicting health issues in livestock using sensor data.

The process of designing machine learning applications involves reviewing existing literature and leveraging prior research to identify suitable models and datasets. Experimenting with model architectures in a flexible environment is crucial before deploying on resource-constrained platforms. Feature generation, which involves transforming raw data into inputs for neural networks, is often necessary for optimal results.

Data plays a critical role in machine learning success. Developers should invest time in gathering, exploring, and improving datasets, as high-quality data can significantly enhance model performance. Analyzing data for errors and imbalances is essential to ensure accurate predictions.

The text also introduces the concept of "Wizard of Oz-ing," a technique used to refine requirements by simulating the functionality of a system before fully developing it. This approach helps identify practical challenges and user needs early in the development process, reducing the risk of building ineffective solutions.

Overall, the text provides a comprehensive guide to developing TinyML applications, emphasizing the importance of careful planning, experimentation, and leveraging existing resources to achieve successful deployment in embedded systems.



Developing machine learning models is time-consuming, and the Wizard of Oz approach can help validate assumptions before full-scale development. This approach involves creating a mock-up system where human decision-making simulates the intended software, allowing for early detection of usability issues. For instance, in designing a sensor to detect room occupancy and control lighting, a human could manually control the lights based on video feed inputs, identifying potential problems like camera blind spots or delays.

Once assumptions are validated, initial model development should occur on a desktop environment, which allows for rapid prototyping and iteration. By streaming sensor data to a desktop or cloud machine, developers can test machine learning solutions without the constraints of embedded platforms. This method also facilitates the reuse of sensor data for model evaluation, helping identify critical errors that standard metrics might overlook.

Optimizing latency is crucial for embedded systems due to their limited computing power. Slow processing can lead to missed events, like brief appearances of objects in a camera's view. Reducing latency improves accuracy and can also lower energy consumption by allowing devices to operate at lower CPU frequencies or sleep between inferences. To determine if optimizing neural network code is beneficial, developers can comment out inference calls to see the impact on overall system latency. If the impact is minimal, focus should shift to other system components.

Hardware upgrades might be necessary for speeding up neural network code. If possible, choosing a more powerful device can improve speed, though trade-offs with energy and cost should be considered. Model architecture improvements can also enhance latency. Simplifying models to reduce the number of calculations can speed up inference without code changes. This trade-off between accuracy and speed is often beneficial, and expanding training data can aid in this optimization.

Estimating model latency involves calculating the number of floating-point operations (FLOPs) required. FLOPs provide a rough metric for execution time, helping evaluate network architectures and set realistic expectations for hardware platforms. For example, a model with fewer FLOPs will generally run faster.

Model architecture design is complex, but starting with efficient existing models and experimenting with parameters can lead to improvements. Techniques like quantization, which reduces numerical precision while maintaining accuracy, are effective in optimizing models for embedded systems. Post-training weight quantization reduces model size and offers speed benefits, while post-training integer quantization eliminates floating-point calculations, making it suitable for embedded applications.

Quantization requires knowledge of activation layer ranges, which can be obtained by running typical data through the model during export. This process ensures accurate quantization and avoids previous methods' complexities, such as training adjustments or runtime penalties. Overall, careful consideration of hardware, model architecture, and quantization techniques can significantly enhance the performance of machine learning models on embedded systems.



The process of optimizing machine learning models for latency involves several key techniques. When exporting models, such as a person detector, it is crucial to provide a `representative_dataset` function to aid in activation range estimation. This process requires understanding the expected inputs and may involve trial and error due to input scaling and preprocessing variations. Fully quantized models offer significant latency benefits, but optimizing for new devices may require leveraging specialized hardware instructions, particularly in convolutional networks with operations like Conv2D.

Product design also plays a critical role in latency optimization. Loosening network requirements for speed or accuracy can enhance user experience. For instance, using faster algorithms for interim tasks and updating with more accurate neural network results when available can be effective. Additionally, incorporating uncertainty into user interfaces, such as requiring confirmation gestures, allows for a trade-off between accuracy and speed.

Traditional code optimization remains important, especially after other latency optimization methods have been explored. Profiling is essential to understand execution times, which can be challenging in embedded systems. Techniques like using LEDs for rough timing, "shotgun profiling" by commenting out code, and using logic analyzers provide various ways to measure performance. More precise methods include using platform-specific timers or external profiling tools, which can highlight speed bottlenecks.

Once critical code sections are identified, optimizing operations is the next step. Default TensorFlow Lite implementations are designed for portability, not speed, so faster custom implementations can be developed. This involves focusing on frequently executed inner loops and moving unnecessary computations outside these loops. Writing platform-specific optimized code may also be necessary if existing implementations are insufficient.

Optimizations should be guarded with checks to ensure they apply only when conditions are met, and unit tests should be run frequently to maintain correctness. While the focus here is on portable optimizations, taking advantage of hardware-specific features can further enhance performance. The overall goal is to improve latency while maintaining functionality and accuracy, balancing trade-offs to suit the specific application and platform.



Optimizing code for embedded systems often begins with simplifying and restructuring to avoid unnecessary work. Leveraging vendor-supplied libraries and existing functions like fast Fourier transform can be more effective than writing custom implementations. For platforms like Cortex-M with SIMD instructions, begin by converting critical code sections to assembly incrementally to ensure correctness before optimizing for speed.

Embedded systems benefit from simpler architectures, allowing for more predictable performance optimizations. As machine learning workloads grow, specialized hardware accelerators are becoming common, but lack standardized APIs. TensorFlow Lite for Microcontrollers focuses on synchronous accelerators, tightly coupled to the CPU, which simplifies integration and reduces latency. This contrasts with GPU-like asynchronous models, which handle large command batches without blocking the CPU.

Contributing to open-source projects like TensorFlow Lite is encouraged. Sharing optimizations involves joining the SIG Micro mailing list and providing benchmarks and documentation for community feedback.

In optimizing latency, the goal is to minimize unnecessary code execution. Addressing latency is crucial before deploying applications on real devices. Following latency optimization, energy usage becomes a priority, especially for battery-powered devices.

Embedded devices excel in low energy consumption, with microcontrollers operating under a milliwatt. Battery life is a critical constraint, often defined by the device's energy usage and storage capacity. Understanding power usage is essential, with components like radios consuming significantly more power than sensors or processors.

To estimate a device's power consumption, consider typical component usage: a Cortex-A9 CPU might use 500-2000 mW, while Bluetooth Low Energy uses about 40 mW. Energy storage options include CR2032 batteries with 2,500 J or AA batteries with 15,000 J. Energy harvesting from sources like temperature differences or light can supplement power but is limited.

Choosing hardware involves examining datasheets for power consumption details, often found by searching for terms like "milliamps." Assembling a prototype system early helps in testing real-world power usage, as integration often reveals higher consumption than expected.

Estimating a model's power usage involves measuring inference latency and system power during that time. Early estimates, based on operations per second and power usage figures, provide rough bounds for planning but should be approached cautiously.

Overall, optimizing embedded systems involves balancing performance, energy efficiency, and practical hardware constraints to achieve desired lifetimes and functionality.



### Summary

#### Measuring Power Usage

For embedded systems, power efficiency is crucial. Using a model with 60 million operations on an Arm Cortex-M4 at 48 MHz, assuming two 8-bit multiply/adds per cycle, the latency is estimated at 625 ms, consuming 1.25 mJ per inference. Optimizing power involves software techniques like duty cycling and frequency reduction, assuming the microcontroller is the primary power consumer.

#### Duty Cycling and Frequency Reduction

Embedded processors can enter sleep modes to save power, waking up as needed. Duty cycling involves inserting sleep periods between tasks, reducing power usage. Direct memory access (DMA) allows continuous data gathering without engaging the main processor. Lowering clock frequency also reduces power consumption, trading computation speed for energy efficiency.

#### Cascading Design

Machine learning models can scale compute and storage resources, allowing for a cascade of models. A small, low-power model detects potential events, triggering more complex models for accuracy. This approach is used in always-on voice interfaces, where a DSP monitors for wake words, waking the main CPU for further processing. This strategy balances power efficiency with performance.

#### Optimizing Model and Binary Size

Embedded systems often have limited flash storage and RAM. TensorFlow Lite for Microcontrollers can operate with minimal resources, but careful design is needed. Understanding system limits involves knowing flash and SRAM capacities. Estimating memory usage requires calculating flash needs for the OS, ML framework, model data, and application code. Quantization reduces model size by compressing weights.

#### Flash and RAM Usage

Flash usage is determined by compiling executables and examining image sizes. Factors include OS size, ML framework, model data, and application code. RAM usage varies over a program's life and includes OS, ML framework, model memory, and application logic. Estimating these needs helps in planning and optimizing resource usage.

#### Model Accuracy and Size

Understanding current capabilities in machine learning helps plan applications. For example, a small speech wake-word model achieves 85% accuracy with 18 KB size and 400,000 operations. Larger models with more weights and operations are needed for higher accuracy in voice interfaces. These guidelines assist in setting realistic expectations for embedded ML applications.



### Predictive Maintenance and Person Detection

Predictive maintenance models, like detecting bearing failures in motors, use accelerometer data to identify distinctive shaking patterns. These models can be compact, requiring only a few thousand weights and a few hundred thousand operations, achieving over 95% accuracy. For more complex systems, model complexity and resource requirements increase.

Person presence detection on embedded platforms is emerging. Using scaled-down MobileNet v2 architectures, models can achieve 90% accuracy with a 250 KB model on small monochrome images. However, larger models like ImageNet-1,000 category require more space, impacting accuracy.

### Model Optimization

Starting with existing models is recommended for optimizing model and binary size. This approach allows focus on data improvement rather than architecture tweaking. Using well-optimized models increases compatibility with embedded platforms. TensorFlow Lite for Microcontrollers is a good starting point, but custom models can be developed if necessary.

### Reducing Executable Size

The model is a major consumer of memory in microcontroller applications. TensorFlow Lite for Microcontrollers can be reduced to 20 KB by excluding unnecessary code parts. Measuring code size involves checking the binary file uploaded to the device, subtracting model size from the total to understand the code footprint.

### TensorFlow Lite and OpResolver

TensorFlow Lite supports many operations, but not all are needed in a single model. Using the OpResolver interface, unnecessary operations can be excluded to reduce code size. Instead of the AllOpsResolver, a customized resolver can be created to include only required operations. This allows the linker to exclude unused code, optimizing space.

### Function and Framework Optimization

Tools like `nm` and `objdump` help analyze function sizes in compiled files, revealing where optimizations can occur. For instance, inlined hardware initialization can increase function size significantly. Constants like `TFLITE_REGISTRATIONS_MAX` control array sizes, and reducing them can save RAM.

### Handling Tight Resource Constraints

For devices with very tight constraints, custom code and careful tuning are necessary. Even in these cases, TensorFlow Lite for Microcontrollers can be used to train models and verify results. Reference implementations of operations can guide custom op code development.

### Conclusion

Optimizing storage for embedded machine learning projects involves reducing model and executable sizes, carefully selecting operations, and leveraging existing frameworks. These strategies help overcome resource constraints while ensuring efficient model execution.



Debugging in machine learning, particularly when integrating models into products, is essential for resolving unexpected behaviors. This process can be likened to a complex mystery where you play multiple roles. A common issue is the loss of accuracy when transitioning models from training environments like TensorFlow to deployment. This often stems from differences in preprocessing methods. For instance, image classification requires resizing and scaling, which, if mismatched between training and deployment, can degrade model accuracy.

Preprocessing errors are subtle and can be difficult to identify. For example, using different rescaling techniques, such as bilinear scaling versus area sampling, can impact results. Similarly, converting image values from 0-255 to floating-point numbers needs consistency between training and deployment to maintain accuracy. This complexity extends beyond images to other data types like audio, where preprocessing involves multiple signal processing stages.

To debug these issues, it’s beneficial to run code on a desktop environment where better debugging tools are available. Comparing preprocessing results between training and application is crucial. Tools like TensorFlow Lite for Microcontrollers allow for modular testing, enabling separate evaluation of inference and preprocessing stages. Establishing reference values from training data and using them in unit tests can ensure ongoing accuracy.

On-device evaluation is also important but often neglected due to resource constraints. Ensuring that on-device accuracy matches training accuracy is vital to avoid subtle errors. Numerical differences arise because neural networks involve complex operations, often transitioning from floating-point to lower-precision integers for embedded applications. These differences necessitate establishing a metric that reflects user experience to determine if discrepancies affect product performance.

Comparing results against a baseline is a useful strategy. TensorFlow Lite for Microcontrollers includes reference implementations to compare against optimized code. Running tests on both desktop and target platforms helps identify discrepancies. If differences are detected, swapping out optimized implementations with reference versions can isolate the problematic kernel.

Mysterious crashes and hangs on embedded systems pose significant challenges. Using a debugger or desktop environment can help trace these issues. Log tracing, via DebugLog(), is an essential tool for understanding runtime behavior. Maintaining a portable version of the program for desktop testing can facilitate faster debugging iterations.

Overall, effective debugging involves understanding preprocessing intricacies, evaluating on-device performance, managing numerical differences, and employing robust testing strategies to ensure consistent model accuracy and application reliability.



Debugging embedded systems, especially with STM32 devices, involves techniques such as injecting log statements into code to trace execution paths. A simple TRACE macro can help identify where a program crashes or hangs by logging code execution points. Shotgun debugging, which involves commenting out code sections to isolate issues, can also be useful, especially when logs aren't accessible.

Memory corruption, often due to stack overflows, is challenging in embedded systems lacking hardware protection. TensorFlow Lite for Microcontrollers, which uses local variables extensively, can exacerbate this issue. Ensuring sufficient stack size to accommodate memory arenas is crucial. If crashes persist, identifying overwritten variables through logging or code elimination can help. A TRACE macro variant can log memory locations to pinpoint overwriting code.

Transitioning models from TensorFlow to TensorFlow Lite involves understanding the operations (ops) used. TensorFlow Lite supports a subset of TensorFlow ops, with differences between mobile and microcontroller branches. Checking ops compatibility early in the development process can prevent issues later. Moving preprocessing and postprocessing steps into application code rather than embedding them in the model can optimize performance, especially for operations involving control flow.

If TensorFlow Lite lacks required ops, custom implementations are possible by enabling custom ops in the TensorFlow Lite file format and writing corresponding kernels. Optimizing ops is essential, as new models might use unoptimized code paths. Testing export compatibility and performance early can help plan development schedules effectively.

Privacy and security are critical when deploying machine learning on embedded devices. Sensor inputs, like cameras and accelerometers, pose privacy risks. Engineers must consider privacy implications throughout the design process, possibly consulting privacy specialists or conducting privacy reviews. Creating a Privacy Design Document (PDD) can help manage privacy concerns systematically.

Overall, methodical debugging and careful consideration of model operations, performance, privacy, and security are vital for successful deployment of embedded machine learning applications.



Creating a Privacy Design Document (PDD) is essential for large companies to manage privacy in their applications. The PDD should detail data collection, usage, sharing, storage, and consent processes. It must specify what data is collected, how, and why, ensuring minimal data collection. Consider potential misuse scenarios to enhance protection.

Data usage involves careful consideration, especially when using data for machine learning. On-device processing is preferred to protect sensitive data, sharing only aggregated results. Design hardware to enforce privacy guarantees, such as using low-resolution sensors to prevent capturing identifiable information.

Data sharing and storage require strict access controls and minimal retention. Treat all sensor data as personally identifiable information (PII) and limit storage duration. Government pressure can override permissions, so minimize transmitted and stored data to protect users.

Consent involves ensuring users understand and agree to data usage. A PDD should be a living document, updated as the product evolves, and involve collaboration across teams. Security is challenging, especially for embedded devices, so limit sensitive data retention and use secure cryptoprocessors for protection.

Protecting machine learning models is difficult, as they can be copied like software. Simple techniques, such as encrypting models, can deter casual attackers. Consider embedding subtle flaws to detect unauthorized copies, similar to the "mountweazeling" technique.

Deployment considerations include avoiding over-the-air updates unless essential, as they increase security risks. Testing in real-world environments before release can reveal unexpected issues, which can then be addressed in development.

Transitioning from development to production involves ensuring the microcontroller fits the budget and matches the development target. Debugging becomes harder post-deployment, so delay finalization until necessary.

The book concludes with resources for continued learning, such as the TinyML Foundation and SIG Micro for TensorFlow Lite for Microcontrollers. Other frameworks and community engagement, like sharing projects on Twitter, are also encouraged for ongoing development in the embedded machine learning field.



The text discusses working with various organizations like Adafruit, Arduino, Qualcomm, and others in the field of machine learning on embedded devices. It provides instructions for using and generating an Arduino library zip file for TensorFlow Lite for Microcontrollers, which simplifies building and deploying applications. Users can import a prebuilt .zip file into the Arduino IDE or generate one themselves by cloning the TensorFlow repository and using a specific script. The text also covers capturing audio on Arduino devices, specifically the Arduino Nano 33 BLE Sense, which has an onboard microphone.

Audio data is captured by registering a callback function that writes new data to a buffer. This buffer stores a limited amount of data, which is overwritten when full. The code for audio capture involves setting up variables, defining a callback function (`CaptureSamples`), and initiating audio capture with `InitAudioRecording`. The callback calculates the correct index in the buffer to write new data and updates a timestamp (`g_latest_audio_timestamp`) to track the most recent sample. The function `GetAudioSamples` allows other parts of the code to access audio data, while `LatestAudioTimestamp` returns the timestamp of the most recent audio.

The text also provides a detailed explanation of the process for capturing audio, including setting up buffers, using the PDM library, and handling audio samples. The approach ensures a steady supply of audio samples for feature providers, critical for applications like wake-word detection. The document ends with a brief index covering accelerometer data, application architecture, and other related topics.



The text provides a comprehensive guide on building and deploying machine learning applications on microcontrollers, focusing on wake-word detection, person detection, and gesture recognition. Key components include application architecture, model introduction, feature and audio providers, and command responders. The process involves capturing data, optimizing models, and deploying applications on devices like Arduino and SparkFun Edge.

### Application Architecture & Components
- **Model Introduction**: Understanding the architecture of models such as Convolutional Neural Networks (CNNs) is crucial.
- **Components**: Include audio and feature providers, command responders, and the basic flow of applications.

### Data Handling & Model Training
- **Data Collection & Augmentation**: Essential for training models, involving collecting, labeling, and augmenting data.
- **Training**: Involves configuring and running models, using tools like TensorFlow and Keras, and optimizing through regularization and quantization.

### Deployment on Microcontrollers
- **Microcontrollers**: Deployment involves flashing binaries and handling output on devices like Arduino and ST Microelectronics Discovery Kit.
- **Optimization**: Focus on reducing model and binary size, optimizing latency, and managing power usage.

### Debugging & Testing
- **Debugging**: Includes log tracing, memory corruption handling, and using tools like profilers and logic analyzers.
- **Testing**: Involves setting up environments, running inference, and validating model performance.

### Tools & Frameworks
- **TensorFlow Lite**: Used for converting models for microcontroller deployment, with emphasis on understanding file formats and optimizing operations.
- **Build Systems**: Makefiles and Bazel are used for managing builds and integrating code changes.

### Privacy & Security
- **Privacy Design Document (PDD)**: Outlines data collection, sharing, and usage policies to ensure user privacy and security.

### Practical Implementation
- **Examples**: Detailed examples include wake-word detection, gesture recognition, and person detection, with specific instructions for platforms like SparkFun Edge.
- **Hardware Considerations**: Emphasizes the importance of hardware choices in optimizing energy and performance.

This guide serves as a detailed resource for developers looking to implement machine learning on microcontrollers, providing insights into model training, deployment, and optimization techniques.
