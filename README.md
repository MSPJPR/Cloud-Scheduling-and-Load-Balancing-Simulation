# Cloud-Scheduling-and-Load-Balancing-Simulation
Project Overview: Cloud Scheduling and Load Balancing Simulation

website link:
https://lnkd.in/gAPfPU8h

Project Title: Cloud Scheduling and Load Balancing Simulation

Objective:
This project simulates cloud task scheduling and load balancing algorithms, providing an interactive interface where users can dynamically add tasks, select different scheduling algorithms, and visualize the system's performance with real-time statistics.

Key Features:

1. Task Input:
Users can input task execution times, which represent cloud tasks needing processing by virtual machines (VMs).


2. Algorithm Selection:
Users can select from various scheduling algorithms:

FCFS (First Come, First Serve): Tasks are scheduled based on their arrival order.

Round Robin: Tasks are scheduled in a circular order, with each task receiving an equal time slice.

Greedy: Tasks are allocated to the VM with the least load, optimizing for the shortest available execution time.



3. Real-Time Task Visualization:
The simulation visually represents tasks and their corresponding scheduling on virtual machines (VMs) in a canvas. Each task is drawn as a bar on the canvas, with execution times proportional to their length.


4. Real-Time Statistics:
The system displays key performance metrics:

Average Response Time: The average time a task takes to complete after being submitted.

Task Waiting Time: Time a task waits before execution begins.

Resource Utilization: A measure of how efficiently the system uses virtual machines to handle tasks.



5. Interactive User Interface:
The user interface allows adding tasks, selecting algorithms, and viewing updated statistics with each operation. This is done via simple input fields and buttons.


6. Multiple Scheduling Algorithm Comparison:
The user can compare how each scheduling algorithm handles task execution, including how efficiently it distributes workload among VMs and impacts system performance.



Technology Stack:

Frontend: HTML, CSS, and JavaScript

Canvas: HTML5 Canvas API for visual task representation

Real-Time Updates: JavaScript functions to update statistics and visuals dynamically as tasks and algorithms are selected.


Use Cases:

Cloud Systems: The simulation models how cloud providers might schedule tasks across their resources.

Educational Tool: Useful for learning about cloud computing, scheduling algorithms, and load balancing in real-time.

Performance Testing: Helps in analyzing and comparing the efficiency of different scheduling algorithms in distributing workload and minimizing resource wastage.


Benefits:

Interactive Learning: Users can visually understand how different algorithms impact cloud resource management.

Easy to Use: Simple interface to quickly add tasks and select algorithms without technical knowledge.

Real-Time Statistics: Provides immediate feedback on system performance, allowing users to fine-tune their understanding of scheduling mechanisms.
