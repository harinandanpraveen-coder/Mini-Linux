const cmdinput = document.getElementById("input");
const output = document.getElementById("output");
const intro = document.getElementById("intro");
const email = "A1@gmail.com";
const subject = "imagine this is a VI editor";
const iText = "Welcome to linux mockup terminal"
const current = self;

function createPrompt() {
    const line = document.createElement("div")
    line.className = "line";
    const prompt = document.createElement('span')
    prompt.textContent = "User1-desktop:-$"
    const input = document.createElement("input")
    input.type = "text"
    input.className = "cmd"
    input.autofocus = true

    line.append(prompt, input);
    terminal.appendChild(line);
    input.focus();

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const cmd = input.value.trim().split(/\s+/);
            input.remove();
            runCommand(cmd);
            createPrompt();
        }
    });
}
createPrompt();
function print(text) {
    text.split("\n").forEach(lineText => {
        const line = document.createElement("div");
        line.textContent = lineText;
        terminal.appendChild(line);
    });
}
function help() {
    print(
        "Available Commands:\n" +
        "help: Shows list of available commands\n" +
        "ls: lists the directories in the server\n" +
        "cat: allows user to write a file that is sent to the developer\n" +
        "cd <directory>: moves you to the relevant webpage\n"+
        "echo: prints a line by the system\n")
}
function ls(){
    print("clock")
    print("rps");
}
function cd(cmd){
const filename = cmd[1]
window.open(`${filename}.html`,"_blank")
}
function cat(cmd){
    const filename = cmd[1]
window.open(`${filename}.txt`,"_blank")
}
function echo(cmd){
    print("system returns: "+ cmd[1])
}
function shutdown(){
    current.close();
}
function runCommand(cmd) {
    if (cmd[0] === "help") help();
    else if (cmd[0] === "ls") ls();
    else if (cmd[0] === "cd") cd(cmd);
    else if (cmd[0]=== "cat") cat(cmd);
    else if (cmd[0]==="echo") echo(cmd)
    else if(cmd[0]=== "shutdown") shutdown();
    else print("invalid command");
}


cmdinput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const cmd = cmdinput.value;
        output.innerText += "User1-desktop:-$ " + cmd + "\n";
        runCommand(cmd.trim());
        cmdinput.value = "";
    }
});
