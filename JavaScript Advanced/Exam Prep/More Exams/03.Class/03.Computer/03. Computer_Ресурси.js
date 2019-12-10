class Computer {
   constructor(ramMemory, cpuGHz, hddMemory) {
       this.ramMemory = Number(ramMemory);
       this.cpuGHz = Number(cpuGHz);
       this.hddMemory = Number(hddMemory);
       this.taskManager = [];
       this.installedPrograms = [];
   }
    installAProgram(name, requiredSpace){
       if (requiredSpace > this.hddMemory){
           throw new Error('There is not enough space on the hard drive')
       }
       let foundProgram = this.installedPrograms.find(p => p.name === name);

        let newObj = {
            name: name,
            requiredSpace: requiredSpace
        };
        if (!foundProgram) {
            this.installedPrograms.push(newObj);
            this.hddMemory -= requiredSpace;
        }

        return newObj;
    }

    uninstallAProgram(name){
        let foundProgram = this.installedPrograms.find(p => p.name === name);

        if (!foundProgram){
           throw new Error('Control panel is not responding')
        }
        let foundIndex = this.installedPrograms.findIndex(program => program.name === name);
        this.installedPrograms.splice(foundIndex, 1);

        this.hddMemory += foundProgram.requiredSpace;
        return this.installedPrograms;
    }

    openAProgram(name){
        let foundProgram = this.installedPrograms.find(program => program.name === name);
        let alreadyOpenedProgram = this.taskManager.find(program => program.name === name);

        if (!foundProgram){
           throw new Error(`The ${name} is not recognized`);
       }

        if (alreadyOpenedProgram) {
            throw new Error(`The ${name} is already open`);
        }


        let ramNeeded = (foundProgram.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ( ( foundProgram.requiredSpace / this.cpuGHz ) / 500) * 1.5;

        let totalRamUsage = this.taskManager.reduce((acc, cur) => acc + cur.ramUsage, 0) + ramNeeded;
        let totalCpuUsage = this.taskManager.reduce((acc, cur) => acc + cur.cpuUsage, 0) + cpuUsage;

        if (totalRamUsage >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if (totalCpuUsage >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        let newObj = {
            name: name,
            ramUsage: ramNeeded,
            cpuUsage: cpuUsage,
        };

        this.taskManager.push(newObj);
        return newObj;

    }
    taskManagerView() {
        if (this.taskManager.length === 0) {
            return  "All running smooth so far";
        }

        return this.taskManager
            .map(task => {
                return `Name - ${task.name} | Usage - CPU: ${task.cpuUsage.toFixed(0)}%, RAM: ${task.ramUsage.toFixed(0)}%`;
            }).join('\n');

    }
}