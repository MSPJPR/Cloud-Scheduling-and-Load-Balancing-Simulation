const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 400;
document.getElementById('app').appendChild(canvas);
const ctx = canvas.getContext('2d');

let tasks = [];
const vms = [{ id: 1, load: 0 }, { id: 2, load: 0 }];
let selectedAlgorithm = 'FCFS';

// Add Task
function addTask() {
    const execTime = parseInt(document.getElementById('taskExecTime').value);
    if (execTime > 0) {
        tasks.push({ id: tasks.length + 1, execTime });
        document.getElementById('taskExecTime').value = '';
        drawTasks();
    }
}

// Select Algorithm
function selectAlgorithm(algorithm) {
    selectedAlgorithm = algorithm;
    simulateScheduling();
}

// Simulate Scheduling
function simulateScheduling() {
    clearCanvas();
    resetVMs();

    switch (selectedAlgorithm) {
        case 'FCFS':
            scheduleTasksFCFS();
            break;
        case 'RoundRobin':
            scheduleTasksRoundRobin();
            break;
        case 'Greedy':
            scheduleTasksGreedy();
            break;
    }

    updateStatistics();
}

function scheduleTasksFCFS() {
    tasks.forEach((task, i) => {
        const vm = vms[i % vms.length];
        vm.load += task.execTime;
        drawTask(task, vm.id);
    });
}

function scheduleTasksRoundRobin() {
    tasks.forEach((task, i) => {
        const vm = vms[i % vms.length];
        vm.load += task.execTime;
        drawTask(task, vm.id);
    });
}

function scheduleTasksGreedy() {
    tasks.forEach((task) => {
        const vm = vms.reduce((prev, curr) => (prev.load < curr.load ? prev : curr));
        vm.load += task.execTime;
        drawTask(task, vm.id);
    });
}

// Draw Task on Canvas
function drawTask(task, vmId) {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(task.id * 100, vmId * 50, task.execTime * 10, 40);
    ctx.fillStyle = 'black';
    ctx.fillText(`Task ${task.id}`, task.id * 100 + 10, vmId * 50 + 25);
}

// Reset Virtual Machines
function resetVMs() {
    vms.forEach(vm => vm.load = 0);
}

// Clear Canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update Statistics
function updateStatistics() {
    const totalLoad = vms.reduce((sum, vm) => sum + vm.load, 0);
    const avgResponseTime = totalLoad / tasks.length;
    const maxLoad = Math.max(...vms.map(vm => vm.load));
    const utilization = (totalLoad / (vms.length * maxLoad)) * 100;

    document.getElementById('avgResponseTime').textContent = `Average Response Time: ${avgResponseTime.toFixed(2)}`;
    document.getElementById('taskWaitingTime').textContent = `Task Waiting Time: ${(avgResponseTime - tasks[0]?.execTime || 0).toFixed(2)}`;
    document.getElementById('resourceUtilization').textContent = `Resource Utilization: ${utilization.toFixed(2)}%`;
}

// Draw Initial Tasks
function drawTasks() {
    clearCanvas();
    tasks.forEach(task => drawTask(task, 1));
}

// Initial Call
drawTasks();
